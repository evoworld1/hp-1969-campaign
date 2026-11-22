#!/usr/bin/env python3
"""
Generator panelu GRACZY: osobna strona z zaszyfrowanymi kartami postaci.

Każda karta jest szyfrowana PIN-em gracza (PBKDF2-SHA256 + AES-256-GCM). Strona nie zawiera
żadnych plików kampanii ani notatek MG, a bez PIN-u karta jest nieczytelna.

Użycie:
    PINY_GRACZY="zora-vos:123456,nell-ashford:234567,luna-lovedog:345678" python3 narzedzia/buduj-panel-gracze.py
    python3 narzedzia/buduj-panel-gracze.py --losuj      # wylosuje PIN-y, zbuduje i wypisze je (do próby lokalnej)
Wymaga: Python 3.8+, PyYAML, cryptography.
"""
import base64
import json
import re
import os
import secrets
import shutil
import sys
from pathlib import Path

import yaml
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

KORZEN = Path(__file__).resolve().parent.parent
GRACZE = KORZEN / "03_postacie" / "gracze"
SZABLON = KORZEN / "panel-gracze" / "szablon"
WSPOLNE = [KORZEN / "panel" / "szablon" / n for n in ("style.css", "karta.js", "sciaga.js", "ksiega.js", "starcie.js")]
WYJSCIE = KORZEN / "panel-gracze" / "dist"
ITERACJE = 200_000
# pola tylko dla MG: nigdy nie trafiają na stronę graczy
POLA_MG = {"haczyki_mg", "notatki_mg", "pewnosc"}


def b64(b):
    return base64.b64encode(b).decode("ascii")


def klucz(pin, sol):
    return PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=sol, iterations=ITERACJE).derive(pin.encode("utf-8"))


INDEKS = KORZEN / "02_zasady" / "walker" / "zaklecia-indeks.md"
# zaklęcia celowane (w pojedynku rzuca się je jako atak), wg ZD-16 i instrukcji
CELOWANE = {"Expelliarmus", "Flipendo", "Stupefy", "Impedimenta", "Petrificus Totalus", "Stinging Jinx", "Trip Jinx",
            "Rictusempra", "Incendio", "Everte Statum", "Verdimillious", "Vermillious", "Baubillious", "Locomotor Mortis"}
# grupy premii różdżki spoza skrótu w indeksie (do potwierdzenia w Walkerze, s. 30)
GRUPY_DOD = {"Fire Magic": ["Incendio", "Flagrate", "Bluebell Flames", "Demitto Ignem"]}
ELIKSIRY = ["Ageing Potion", "Calming Draught", "Draught of Peace", "Elixir to Induce Euphoria", "Love Potion Antidote", "Polyjuice Potion", "Shrinking Solution", "Sleeping Draught", "Wound-cleaning Potion"]
UMIEJETNOSC = {"Charm": "Charms", "Jinx": "D.A.D.A.", "Hex": "D.A.D.A.", "Curse": "D.A.D.A.", "Transfiguration": "Transfiguration"}


def wczytaj_zaklecia():
    """Czyta indeks zaklęć: nazwa -> typ, trudność startowa, umiejętność, grupy premii."""
    wynik, grupy = {}, {}
    for l in INDEKS.read_text(encoding="utf-8").split("\n"):
        if l.startswith("|") and not l.startswith("|---"):
            k = [c.strip() for c in l.strip("|").split("|")]
            if len(k) < 4 or k[0] in ("Zaklęcie", "Rok"):
                continue
            if k[1].isdigit() and len(k) >= 5:  # tabele lat 6-7: Zaklęcie | Rok | Typ | Trudn. | ...
                k = [k[0]] + k[2:]
            typ = k[1].split("/")[0].strip()
            try:
                tr = int(k[2].split("/")[0].strip())
            except ValueError:
                tr = None
            for n in [x.strip() for x in k[0].replace(" / ", ",").split(",")]:
                if n:
                    wynik[n] = {"typ": typ, "tr": tr, "um": UMIEJETNOSC.get(typ, "Charms"), "grupy": [], "cel": n in CELOWANE}
        elif ":" in l and any(l.startswith(g) for g in ("Healing Magic", "Protective Magic", "Revealing Magic", "Offensive Magic", "Mind Affecting")):
            for czesc in l.split(". "):
                if ":" in czesc:
                    g, lista = czesc.split(":", 1)
                    grupy[g.strip()] = [x.strip().split(" (")[0].rstrip(".") for x in lista.split(",")]
    for n in ELIKSIRY:
        wynik[n] = {"typ": "Potion", "tr": 15, "um": "Potions", "grupy": [], "cel": False}
    grupy.update(GRUPY_DOD)
    for g, lista in grupy.items():
        for n in lista:
            for nazwa in list(wynik):
                if nazwa == n or (n == "Protego" and nazwa.startswith("Protego")):
                    wynik[nazwa]["grupy"].append(g)
            if n not in wynik and n in GRUPY_DOD.get(g, []):
                wynik[n] = {"typ": "Charm", "tr": None, "um": "Charms", "grupy": [g], "cel": n in CELOWANE}
    return wynik


def wczytaj_ksiege():
    """Księga zaklęć i eliksirów po polsku; to dane z podręcznika, nie z kampanii, więc idą jawnie."""
    p = KORZEN / "02_zasady" / "walker" / "ksiega-zaklec.yaml"
    if not p.exists():
        print("OSTRZEŻENIE: brak ksiega-zaklec.yaml, księga zaklęć będzie pusta")
        return []
    d = yaml.safe_load(p.read_text(encoding="utf-8")) or {}
    return d.get("zaklecia", d) if isinstance(d, dict) else d


def wczytaj_starcia_i_npc():
    """Zaplanowane starcia i statystyki tylko tych NPC, którzy w nich walczą (gracze widzą ich liczby walki)."""
    p = KORZEN / "04_kampania" / "starcia.yaml"
    if not p.exists():
        return [], {}
    starcia = (yaml.safe_load(p.read_text(encoding="utf-8")) or {}).get("starcia", [])
    potrzebni = {n for s in starcia for n in (s.get("przeciwnicy") or [])}
    npc = {}
    for f in sorted((KORZEN / "03_postacie" / "npc").glob("*.md")):
        t = f.read_text(encoding="utf-8")
        m = re.match(r"^---\n(.*?)\n---", t, re.S)
        meta = yaml.safe_load(m.group(1)) if m else {}
        if not isinstance(meta, dict) or meta.get("id") not in potrzebni:
            continue
        for b in re.findall(r"```yaml\n(.*?)\n```", t, re.S):
            d = yaml.safe_load(b)
            if isinstance(d, dict) and isinstance(d.get("statystyki"), dict):
                w = dict(d["statystyki"].get("wartosci") or {})
                # graczom tylko liczby walki, bez zdolności specjalnych (sekrety MG)
                npc[meta["id"]] = {"imie": re.sub(r"\s*[(:–-].*$", "", meta.get("tytul", meta["id"])).strip(),
                                   "staty": {"wartosci": {k: w[k] for k in ("cechy", "umiejetnosci", "zaklecia", "rozdzka") if k in w}}}
    # graczom bez uwag dla MG
    jawne = [{k: v for k, v in s.items() if k not in ("uwagi",)} for s in starcia]
    return jawne, npc


def main():
    losuj = "--losuj" in sys.argv
    postacie = {}
    slownik = {}
    for p in sorted(GRACZE.glob("*.yaml")):
        d = yaml.safe_load(p.read_text(encoding="utf-8"))
        if p.name.startswith("slownik"):
            slownik = d
        else:
            postacie[p.stem] = d
    if not postacie:
        sys.exit("Brak kart w 03_postacie/gracze/")

    piny = {}
    if losuj:
        piny = {s: f"{secrets.randbelow(900000) + 100000}" for s in postacie}
    else:
        for par in os.environ.get("PINY_GRACZY", "").split(","):
            if ":" in par:
                s, pin = par.split(":", 1)
                piny[s.strip()] = pin.strip()
        brak = [s for s in postacie if s not in piny]
        if brak:
            sys.exit("BŁĄD: brak PIN-u dla: " + ", ".join(brak) + '\nUstaw zmienną środowiskową PINY_GRACZY, np. "zora-vos:123456,nell-ashford:234567,luna-lovedog:345678"')
        for s, pin in piny.items():
            if len(pin) < 6:
                sys.exit(f"BŁĄD: PIN dla {s} jest za krótki (minimum 6 znaków).")

    karty = []
    for s, d in postacie.items():
        jawne = {k: v for k, v in d.items() if k not in POLA_MG}
        sol, iv = secrets.token_bytes(16), secrets.token_bytes(12)
        ct = AESGCM(klucz(piny[s], sol)).encrypt(iv, json.dumps(jawne, ensure_ascii=False).encode("utf-8"), None)
        karty.append({"slug": s, "imie": d["imie"], "dom": d.get("dom", ""), "sol": b64(sol), "iv": b64(iv), "ct": b64(ct), "iter": ITERACJE})

    starcia, npc_staty = wczytaj_starcia_i_npc()
    if WYJSCIE.exists():
        shutil.rmtree(WYJSCIE)
    WYJSCIE.mkdir(parents=True)
    for p in SZABLON.iterdir():
        shutil.copy(p, WYJSCIE / p.name)
    for p in WSPOLNE:
        shutil.copy(p, WYJSCIE / p.name)
    sciaga = KORZEN / "panel" / "pdf" / "sciaga-dla-graczy.pdf"
    if sciaga.exists():
        (WYJSCIE / "pdf").mkdir()
        shutil.copy(sciaga, WYJSCIE / "pdf" / sciaga.name)
    (WYJSCIE / "dane.js").write_text(
        "window.DANE = " + json.dumps({"postacie": {"_slownik": slownik}, "zaklecia": wczytaj_zaklecia(), "ksiega": wczytaj_ksiege(), "starcia": starcia, "npc_staty": npc_staty}, ensure_ascii=False) + ";\n"
        "window.KARTY = " + json.dumps(karty, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"Panel graczy zbudowany: {WYJSCIE} (karty: {len(karty)})")
    if losuj:
        print("PIN-y (tylko do próby):")
        for s, pin in piny.items():
            print(f"  {s}: {pin}")


if __name__ == "__main__":
    main()

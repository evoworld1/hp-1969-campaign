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
WSPOLNE = [KORZEN / "panel" / "szablon" / n for n in ("style.css", "karta.js", "sciaga.js")]
WYJSCIE = KORZEN / "panel-gracze" / "dist"
ITERACJE = 200_000
# pola tylko dla MG: nigdy nie trafiają na stronę graczy
POLA_MG = {"haczyki_mg", "notatki_mg", "pewnosc"}


def b64(b):
    return base64.b64encode(b).decode("ascii")


def klucz(pin, sol):
    return PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=sol, iterations=ITERACJE).derive(pin.encode("utf-8"))


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
        "window.DANE = " + json.dumps({"postacie": {"_slownik": slownik}}, ensure_ascii=False) + ";\n"
        "window.KARTY = " + json.dumps(karty, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"Panel graczy zbudowany: {WYJSCIE} (karty: {len(karty)})")
    if losuj:
        print("PIN-y (tylko do próby):")
        for s, pin in piny.items():
            print(f"  {s}: {pin}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Walidator treści kampanii — sprawdza zgodność plików z docs/KONTRAKT-DANYCH.md.

Użycie:
    python3 narzedzia/walidator.py            # sprawdź całe repozytorium
    python3 narzedzia/walidator.py --indeks   # sprawdź i wygeneruj indeks.json dla panelu
    python3 narzedzia/walidator.py --cicho    # pokaż tylko błędy

Wymaga: Python 3.8+, PyYAML (pip install pyyaml).
Kod wyjścia: 0 = brak błędów, 1 = są błędy, 2 = problem z konfiguracją.
"""
import datetime
import json
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("BŁĄD: brak biblioteki PyYAML. Zainstaluj: pip install pyyaml")
    sys.exit(2)

WERSJA_KONTRAKTU = "1.0"
KORZEN = Path(__file__).resolve().parent.parent
FOLDERY_TRESCI = ["01_kanon", "02_zasady", "03_postacie", "04_kampania", "05_scenariusze", "06_sesje"]
PLIK_FLAG = KORZEN / "04_kampania" / "flagi.yaml"
STATUSY_KONCOWE = {"recenzja", "gotowe"}
ZNACZNIKI_NIEGOTOWE = re.compile(r"DO-USTALENIA|\bTODO\b")
WIKILINK = re.compile(r"\[\[([a-z0-9.\-]+)\]\]")

bledy, ostrzezenia = [], []


def blad(plik, tekst):
    bledy.append(f"{plik}: {tekst}")


def ostrzez(plik, tekst):
    ostrzezenia.append(f"{plik}: {tekst}")


def normalizuj(obj):
    """YAML zamienia daty na obiekty date — kontrakt traktuje je jako tekst."""
    if isinstance(obj, (datetime.date, datetime.datetime)):
        return obj.isoformat()
    if isinstance(obj, dict):
        return {k: normalizuj(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [normalizuj(v) for v in obj]
    return obj


# ---------- minimalny walidator JSON Schema (podzbiór używany w schemas/) ----------
TYPY = {"string": str, "integer": int, "boolean": bool, "array": list, "object": dict}


def zgodny_typ(wartosc, typ):
    typy = typ if isinstance(typ, list) else [typ]
    for t in typy:
        py = TYPY.get(t)
        if t == "integer" and isinstance(wartosc, bool):
            continue
        if py and isinstance(wartosc, py):
            return True
    return False


def sprawdz_schemat(dane, schemat, plik, sciezka="nagłówek"):
    if not isinstance(dane, dict):
        blad(plik, f"{sciezka}: oczekiwano obiektu (mapy klucz: wartość)")
        return
    for pole in schemat.get("required", []):
        if pole not in dane:
            blad(plik, f"{sciezka}: brak wymaganego pola '{pole}'")
    if "if" in schemat and "then" in schemat:
        warunki = schemat["if"].get("properties", {})
        if all(dane.get(k) == v.get("const") for k, v in warunki.items()):
            for pole in schemat["then"].get("required", []):
                if pole not in dane:
                    blad(plik, f"{sciezka}: pole '{pole}' jest wymagane w tym przypadku")
    for pole, spec in schemat.get("properties", {}).items():
        if pole in dane:
            sprawdz_wartosc(dane[pole], spec, plik, f"{sciezka}.{pole}")


def sprawdz_wartosc(wartosc, spec, plik, sciezka):
    if "const" in spec and wartosc != spec["const"]:
        blad(plik, f"{sciezka}: musi mieć wartość {json.dumps(spec['const'], ensure_ascii=False)}")
        return
    if "enum" in spec and wartosc not in spec["enum"]:
        blad(plik, f"{sciezka}: '{wartosc}' spoza dozwolonych wartości {spec['enum']}")
        return
    if "type" in spec and not zgodny_typ(wartosc, spec["type"]):
        blad(plik, f"{sciezka}: zły typ (oczekiwano {spec['type']})")
        return
    if "pattern" in spec and isinstance(wartosc, str) and not re.match(spec["pattern"], wartosc):
        blad(plik, f"{sciezka}: '{wartosc}' nie pasuje do wzorca {spec['pattern']}")
    if isinstance(wartosc, list):
        if "minItems" in spec and len(wartosc) < spec["minItems"]:
            blad(plik, f"{sciezka}: za mało elementów (minimum {spec['minItems']})")
        if "items" in spec:
            for n, el in enumerate(wartosc):
                if spec["items"].get("type") == "object" or "required" in spec["items"]:
                    sprawdz_schemat(el, spec["items"], plik, f"{sciezka}[{n}]")
                else:
                    sprawdz_wartosc(el, spec["items"], plik, f"{sciezka}[{n}]")
    if isinstance(wartosc, dict) and ("properties" in spec or "required" in spec):
        sprawdz_schemat(wartosc, spec, plik, sciezka)


# ---------- parsowanie plików ----------
def rozdziel(tekst):
    if not tekst.startswith("---"):
        return None, tekst
    linie = tekst.splitlines()
    for n in range(1, len(linie)):
        if linie[n].strip() == "---":
            return "\n".join(linie[1:n]), "\n".join(linie[n + 1:])
    return None, tekst


def sekcje_i_bloki(tresc):
    """Zwraca listę nagłówków '## ' (poza blokami kodu) i listę bloków ```yaml."""
    naglowki, bloki = [], []
    w_bloku, jezyk, bufor, start = False, "", [], 0
    for n, linia in enumerate(tresc.splitlines(), 1):
        if linia.strip().startswith("```"):
            if not w_bloku:
                w_bloku, jezyk, bufor, start = True, linia.strip()[3:].strip().lower(), [], n
            else:
                if jezyk == "yaml":
                    bloki.append((start, "\n".join(bufor)))
                w_bloku = False
            continue
        if w_bloku:
            bufor.append(linia)
        elif linia.startswith("## "):
            naglowki.append(linia[3:].strip())
    return naglowki, bloki


def main():
    argumenty = set(sys.argv[1:])
    schematy_dir = KORZEN / "schemas"
    try:
        schematy = {p.name.replace(".schema.json", ""): json.loads(p.read_text(encoding="utf-8"))
                    for p in schematy_dir.glob("*.schema.json")}
    except Exception as e:  # noqa: BLE001
        print(f"BŁĄD: nie można wczytać schematów: {e}")
        sys.exit(2)
    bloki_schemat = schematy.pop("bloki")
    flagi_schemat = schematy.pop("flagi")

    # --- flagi ---
    flagi = {}
    if PLIK_FLAG.exists():
        try:
            dane_flag = normalizuj(yaml.safe_load(PLIK_FLAG.read_text(encoding="utf-8")) or {})
        except yaml.YAMLError as e:
            blad("04_kampania/flagi.yaml", f"błąd składni YAML: {e}")
            dane_flag = {"flagi": []}
        if dane_flag.get("flagi") is None:
            dane_flag["flagi"] = []
        sprawdz_schemat(dane_flag, flagi_schemat, "04_kampania/flagi.yaml", "rejestr")
        for f in dane_flag.get("flagi") or []:
            if isinstance(f, dict) and "id" in f:
                if f["id"] in flagi:
                    blad("04_kampania/flagi.yaml", f"zdublowana flaga '{f['id']}'")
                flagi[f["id"]] = f
    else:
        blad("04_kampania/flagi.yaml", "brak pliku rejestru flag")

    # --- pliki treści ---
    obiekty, pomocnicze = {}, []
    for folder in FOLDERY_TRESCI:
        for plik in sorted((KORZEN / folder).rglob("*.md")):
            if plik.name.lower() == "readme.md":
                continue
            rel = plik.relative_to(KORZEN).as_posix()
            tekst = plik.read_text(encoding="utf-8")
            surowy, tresc = rozdziel(tekst)
            if surowy is None:
                pomocnicze.append(rel)
                continue
            try:
                naglowek = normalizuj(yaml.safe_load(surowy) or {})
            except yaml.YAMLError as e:
                blad(rel, f"błąd składni nagłówka YAML: {e}")
                continue
            typ = naglowek.get("typ")
            if typ not in schematy:
                blad(rel, f"nieznany typ '{typ}' (dozwolone: {sorted(schematy)})")
                continue
            sprawdz_schemat(naglowek, schematy[typ], rel)
            oid = naglowek.get("id")
            if oid in obiekty:
                blad(rel, f"zdublowany identyfikator '{oid}' (także w {obiekty[oid]['sciezka']})")
            naglowki, surowe_bloki = sekcje_i_bloki(tresc)
            obiekty[oid] = {"id": oid, "typ": typ, "sciezka": rel, "naglowek": naglowek,
                            "naglowki": naglowki, "surowe_bloki": surowe_bloki, "tresc": tresc}

    # --- sekcje, bloki, referencje ---
    id_blokow = {}
    for oid, o in obiekty.items():
        rel, typ, naglowek = o["sciezka"], o["typ"], o["naglowek"]
        status = naglowek.get("status")
        wymagane = schematy[typ].get("x-sekcje", [])
        brak = [s for s in wymagane if s not in o["naglowki"]]
        if brak:
            (blad if status in STATUSY_KONCOWE else ostrzez)(rel, f"brak sekcji: {', '.join('## ' + s for s in brak)}")
        obecne = [s for s in o["naglowki"] if s in wymagane]
        if obecne != [s for s in wymagane if s in obecne]:
            ostrzez(rel, "sekcje w innej kolejności niż w szablonie")
        if status in STATUSY_KONCOWE and ZNACZNIKI_NIEGOTOWE.search(o["tresc"] + json.dumps(naglowek, ensure_ascii=False)):
            ostrzez(rel, f"status '{status}', ale plik zawiera DO-USTALENIA/TODO")

        o["bloki"] = []
        for linia, surowy in o["surowe_bloki"]:
            try:
                dane = normalizuj(yaml.safe_load(surowy))
            except yaml.YAMLError as e:
                blad(rel, f"blok YAML w linii {linia}: błąd składni: {e}")
                continue
            if not isinstance(dane, dict) or len(dane) != 1:
                continue  # zwykły przykład YAML, nie blok danych
            rodzaj, tresc_bloku = next(iter(dane.items()))
            if rodzaj not in bloki_schemat["$defs"]:
                continue
            sprawdz_schemat(tresc_bloku, bloki_schemat["$defs"][rodzaj], rel, f"blok '{rodzaj}' (linia {linia})")
            if isinstance(tresc_bloku, dict):
                bid = tresc_bloku.get("id")
                if bid:
                    if bid in id_blokow or bid in obiekty:
                        blad(rel, f"zdublowany identyfikator bloku '{bid}'")
                    id_blokow[bid] = rel
                    if oid and not str(bid).startswith(str(oid) + "."):
                        ostrzez(rel, f"identyfikator bloku '{bid}' nie zaczyna się od '{oid}.'")
                o["bloki"].append({"rodzaj": rodzaj, "linia": linia, "dane": tresc_bloku})

    def rozwiaz(rel, gdzie, wartosc, rodzaje):
        wartosci = wartosc if isinstance(wartosc, list) else [wartosc]
        for w in wartosci:
            if not isinstance(w, str) or w == "":
                continue
            if "brak" in rodzaje and w == "brak":
                continue
            if "flaga" in rodzaje and w in flagi:
                continue
            if any(obiekty.get(w, {}).get("typ") == r for r in rodzaje):
                continue
            blad(rel, f"{gdzie}: odwołanie '{w}' nie wskazuje istniejącego obiektu typu {rodzaje}")

    uzyte_flagi = set()
    for oid, o in obiekty.items():
        rel = o["sciezka"]
        for pole, rodzaje in schematy[o["typ"]].get("x-referencje", {}).items():
            if pole in o["naglowek"]:
                rozwiaz(rel, f"nagłówek.{pole}", o["naglowek"][pole], rodzaje)
                if "flaga" in rodzaje:
                    uzyte_flagi.update(o["naglowek"][pole] or [])
        for b in o["bloki"]:
            for pole, rodzaje in bloki_schemat["x-referencje"].get(b["rodzaj"], {}).items():
                dane = b["dane"] if isinstance(b["dane"], dict) else {}
                if pole in dane:
                    rozwiaz(rel, f"blok '{b['rodzaj']}' (linia {b['linia']}).{pole}", dane[pole], rodzaje)
                    if "flaga" in rodzaje:
                        v = dane[pole]
                        uzyte_flagi.update(v if isinstance(v, list) else [v])
            if b["rodzaj"] == "test" and isinstance(b["dane"], dict):
                for w in b["dane"].get("wyniki") or []:
                    if isinstance(w, dict):
                        rozwiaz(rel, f"blok 'test' (linia {b['linia']}).wyniki.flagi_ustaw", w.get("flagi_ustaw") or [], ["flaga"])
                        uzyte_flagi.update(w.get("flagi_ustaw") or [])
        znane = set(obiekty) | set(id_blokow) | set(flagi)
        for link in WIKILINK.findall(o["tresc"]):
            if link not in znane:
                ostrzez(rel, f"wikilink [[{link}]] nie wskazuje istniejącego obiektu")

    for fid in flagi:
        if fid not in uzyte_flagi:
            ostrzez("04_kampania/flagi.yaml", f"flaga '{fid}' nie jest nigdzie używana")

    # --- raport ---
    cicho = "--cicho" in argumenty
    print(f"Walidator kontraktu danych v{WERSJA_KONTRAKTU}")
    print(f"Obiekty: {len(obiekty)} | bloki danych: {len(id_blokow)} | flagi: {len(flagi)} | pliki pomocnicze bez nagłówka: {len(pomocnicze)}")
    if bledy:
        print(f"\nBŁĘDY ({len(bledy)}):")
        for b in bledy:
            print("  ✗ " + b)
    if ostrzezenia and not cicho:
        print(f"\nOSTRZEŻENIA ({len(ostrzezenia)}):")
        for w in ostrzezenia:
            print("  ! " + w)
    if not bledy:
        print("\nOK: brak błędów.")

    if "--indeks" in argumenty:
        indeks = {
            "wersja_kontraktu": WERSJA_KONTRAKTU,
            "wygenerowano": datetime.datetime.now().isoformat(timespec="seconds"),
            "obiekty": [
                {"id": o["id"], "typ": o["typ"], "tytul": o["naglowek"].get("tytul"),
                 "status": o["naglowek"].get("status"), "sciezka": o["sciezka"],
                 "naglowek": o["naglowek"], "sekcje": o["naglowki"],
                 "bloki": [{"rodzaj": b["rodzaj"], "dane": b["dane"]} for b in o["bloki"]]}
                for o in sorted(obiekty.values(), key=lambda x: str(x["id"]))
            ],
            "flagi": list(flagi.values()),
        }
        (KORZEN / "indeks.json").write_text(json.dumps(indeks, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("Zapisano indeks.json")

    sys.exit(1 if bledy else 0)


if __name__ == "__main__":
    main()

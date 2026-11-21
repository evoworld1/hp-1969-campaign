#!/usr/bin/env python3
"""
Generator panelu MG: czyta pliki kampanii i buduje statyczną stronę w panel/dist/.

Użycie:  python3 narzedzia/buduj-panel.py
Opcjonalnie: PANEL_HASLO=tajne python3 narzedzia/buduj-panel.py   (hasło na wejściu, zapisane jako skrót SHA-256)
Wymaga: Python 3.8+, PyYAML.
"""
import hashlib
import html
import json
import os
import re
import shutil
import sys
from pathlib import Path

import yaml

KORZEN = Path(__file__).resolve().parent.parent
SZABLON = KORZEN / "panel" / "szablon"
WYJSCIE = KORZEN / "panel" / "dist"
FOLDERY = ["01_kanon", "02_zasady", "03_postacie", "04_kampania", "05_scenariusze"]
SCENY = KORZEN / "05_scenariusze" / "s1-godzina-ktorej-nie-bylo" / "sceny"

DOKUMENTY = {}   # id -> {id, typ, tytul, meta, tekst}
OSTRZEZENIA = []


# ---------------------------------------------------------------- odczyt plików
def czytaj(sciezka):
    tekst = sciezka.read_text(encoding="utf-8")
    meta, ciało = {}, tekst
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", tekst, re.S)
    if m:
        try:
            meta = yaml.safe_load(m.group(1)) or {}
        except yaml.YAMLError as e:
            OSTRZEZENIA.append(f"{sciezka.name}: nagłówek YAML: {e}")
        ciało = m.group(2)
    return meta, ciało


def wczytaj_dokumenty():
    for folder in FOLDERY:
        for p in sorted((KORZEN / folder).rglob("*.md")):
            if p.name.lower() == "readme.md":
                continue
            meta, ciało = czytaj(p)
            if not isinstance(meta, dict) or "id" not in meta:
                continue
            DOKUMENTY[meta["id"]] = {
                "id": meta["id"], "typ": meta.get("typ", ""), "tytul": meta.get("tytul", meta["id"]),
                "meta": meta, "tekst": ciało, "sciezka": str(p.relative_to(KORZEN)),
            }


# ---------------------------------------------------------------- markdown -> html
def esc(s):
    return html.escape(str(s), quote=False)


def inline(s):
    s = esc(s)
    s = re.sub(r"\[\[([a-z0-9.\-]+)\]\]", lambda m: powiazanie(m.group(1)), s)
    s = re.sub(r"`([^`]+)`", lambda m: '<code>' + m.group(1) + '</code>', s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    return s


def powiazanie(id_):
    d = DOKUMENTY.get(id_)
    nazwa = d["tytul"] if d else id_
    return f'<a class="wl" href="#/dok/{id_}" data-id="{id_}">{esc(nazwa)}</a>'


def md(tekst):
    """Minimalny konwerter Markdown -> HTML (nagłówki, cytaty, listy, tabele, akapity)."""
    out, linie, i = [], tekst.split("\n"), 0
    while i < len(linie):
        l = linie[i]
        if l.strip().startswith("```"):
            i += 1
            while i < len(linie) and not linie[i].strip().startswith("```"):
                i += 1
            i += 1
            continue
        if not l.strip():
            i += 1
            continue
        m = re.match(r"^(#{1,6})\s+(.*)$", l)
        if m:
            n = min(len(m.group(1)) + 2, 6)
            out.append(f"<h{n}>{inline(m.group(2))}</h{n}>")
            i += 1
            continue
        if l.startswith(">"):
            blok = []
            while i < len(linie) and linie[i].startswith(">"):
                blok.append(linie[i].lstrip(">").strip())
                i += 1
            akapity, cur = [], []
            for b in blok:
                if b:
                    cur.append(b)
                elif cur:
                    akapity.append(" ".join(cur)); cur = []
            if cur:
                akapity.append(" ".join(cur))
            out.append('<blockquote class="czytaj">' + "".join(f"<p>{inline(a)}</p>" for a in akapity) + "</blockquote>")
            continue
        if re.match(r"^\s*([-*]|\d+\.)\s+", l):
            uporz = bool(re.match(r"^\s*\d+\.", l))
            pozycje = []
            while i < len(linie) and (re.match(r"^\s*([-*]|\d+\.)\s+", linie[i]) or (linie[i].startswith("  ") and linie[i].strip() and pozycje)):
                if re.match(r"^\s*([-*]|\d+\.)\s+", linie[i]):
                    pozycje.append(re.sub(r"^\s*([-*]|\d+\.)\s+", "", linie[i]))
                else:
                    pozycje[-1] += " " + linie[i].strip()
                i += 1
            tag = "ol" if uporz else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{inline(p)}</li>" for p in pozycje) + f"</{tag}>")
            continue
        if l.strip().startswith("|"):
            wiersze = []
            while i < len(linie) and linie[i].strip().startswith("|"):
                wiersze.append(linie[i].strip())
                i += 1
            kom = lambda w: [c.strip() for c in w.strip("|").split("|")]
            gl = kom(wiersze[0])
            ciało = [kom(w) for w in wiersze[2:]] if len(wiersze) > 1 else []
            t = "<div class='tab'><table><thead><tr>" + "".join(f"<th>{inline(c)}</th>" for c in gl) + "</tr></thead><tbody>"
            for w in ciało:
                t += "<tr>" + "".join(f"<td>{inline(c)}</td>" for c in w) + "</tr>"
            out.append(t + "</tbody></table></div>")
            continue
        if re.match(r"^-{3,}$", l.strip()):
            out.append("<hr>")
            i += 1
            continue
        akap = []
        while i < len(linie) and linie[i].strip() and not re.match(r"^(#{1,6}\s|>|\s*([-*]|\d+\.)\s+|\||```)", linie[i]):
            akap.append(linie[i].strip())
            i += 1
        if akap:
            out.append(f"<p>{inline(' '.join(akap))}</p>")
        else:
            i += 1
    return "\n".join(out)


def etykieta(k):
    return str(k).replace("_", " ")


def wartosc(v):
    """Ogólny renderer danych z bloków yaml."""
    if isinstance(v, dict):
        return "<dl>" + "".join(f"<dt>{esc(etykieta(k))}</dt><dd>{wartosc(x)}</dd>" for k, x in v.items()) + "</dl>"
    if isinstance(v, list):
        if not v:
            return "<span class='puste'>brak</span>"
        if all(not isinstance(x, (dict, list)) for x in v):
            return "<ul>" + "".join(f"<li>{inline(x)}</li>" for x in v) + "</ul>"
        return "<ul>" + "".join(f"<li>{wartosc(x)}</li>" for x in v) + "</ul>"
    if v is None or v == "":
        return "<span class='puste'>brak</span>"
    return inline(v)


# ---------------------------------------------------------------- bloki yaml
def bloki_yaml(tekst):
    wynik = []
    for m in re.finditer(r"```yaml\n(.*?)\n```", tekst, re.S):
        try:
            d = yaml.safe_load(m.group(1))
        except yaml.YAMLError as e:
            OSTRZEZENIA.append(f"blok yaml: {str(e)[:80]}")
            continue
        if isinstance(d, dict):
            wynik.append(d)
    return wynik


def render_dialog(d, wstep=""):
    npc = DOKUMENTY.get(d.get("npc", ""), {})
    kto = npc.get("tytul", d.get("npc") or "Postać bez karty")
    h = f'<div class="blok dialog"><div class="kto">{esc(kto)}</div>'
    if wstep:
        h += f'<div class="wstep">{inline(wstep)}</div>'
    if d.get("wyzwalacz"):
        h += f'<div class="wyzwalacz"><strong>Kiedy:</strong> {inline(d["wyzwalacz"])}</div>'
    if d.get("ton"):
        h += f'<div class="ton"><strong>Głos:</strong> {inline(d["ton"])}</div>'
    kw = d.get("kwestie") or []
    if kw:
        h += "<ul class='kwestie'>" + "".join(f"<li>{inline(k if not isinstance(k, dict) else json.dumps(k, ensure_ascii=False))}</li>" for k in kw) + "</ul>"
    resztа = {k: v for k, v in d.items() if k not in ("id", "npc", "wyzwalacz", "ton", "kwestie", "wariant_od")}
    if resztа:
        h += "<details class='wiecej'><summary>Więcej o dialogu</summary>" + wartosc(resztа) + "</details>"
    return h + "</div>"


def render_test(t):
    h = f'<div class="blok test"><div class="nagl">TEST</div>'
    h += f'<div class="opis">{inline(t.get("opis", ""))}</div>'
    h += '<table class="kv">'
    for k in ("kto", "rzut", "trudnosc"):
        if k in t:
            h += f"<tr><th>{esc(etykieta(k))}</th><td><strong>{inline(t[k])}</strong></td></tr>"
    h += "</table>"
    if t.get("modyfikatory"):
        h += "<div class='podnagl'>Modyfikatory</div><ul>" + "".join(
            f"<li>{inline(m.get('warunek', ''))} <strong>{inline(m.get('wartosc', ''))}</strong></li>" if isinstance(m, dict) else f"<li>{inline(m)}</li>"
            for m in t["modyfikatory"]) + "</ul>"
    if t.get("wyniki"):
        h += "<div class='podnagl'>Wyniki</div><div class='tab'><table><tbody>"
        for w in t["wyniki"]:
            if isinstance(w, dict):
                fl = ""
                if w.get("flagi_ustaw"):
                    fl = " <span class='flagi'>" + " ".join(f"<span class='flaga'>{esc(f.replace('flaga.', ''))}</span>" for f in w["flagi_ustaw"]) + "</span>"
                h += f"<tr><th>{esc(str(w.get('wynik', '')).replace('-', ' '))}</th><td>{inline(w.get('efekt', ''))}{fl}</td></tr>"
        h += "</tbody></table></div>"
    reszta = {k: v for k, v in t.items() if k not in ("id", "opis", "kto", "rzut", "trudnosc", "modyfikatory", "wyniki")}
    if reszta:
        h += "<details class='wiecej'><summary>Więcej</summary>" + wartosc(reszta) + "</details>"
    return h + "</div>"


def render_rozgalezienie(r):
    h = '<div class="blok jesli">'
    h += f'<div class="warunek">Jeśli: {inline(r.get("warunek", r.get("id", "")))}</div>'
    h += f'<div class="efekt">{inline(r.get("efekt", ""))}</div>'
    if r.get("flagi_ustaw"):
        h += "<div class='flagi'>" + " ".join(f"<span class='flaga'>{esc(f.replace('flaga.', ''))}</span>" for f in r["flagi_ustaw"]) + "</div>"
    if r.get("prowadzi_do") and r["prowadzi_do"] != "brak":
        h += f"<div class='dokad'>Prowadzi do: {esc(r['prowadzi_do'])}</div>"
    reszta = {k: v for k, v in r.items() if k not in ("id", "rodzaj", "warunek", "efekt", "flagi_ustaw", "prowadzi_do", "wymaga_flag", "wyklucza_flagi")}
    if reszta:
        h += "<details class='wiecej'><summary>Więcej</summary>" + wartosc(reszta) + "</details>"
    return h + "</div>"


def render_podpowiedzi(p):
    h = '<div class="blok podp"><div class="nagl">Drabinka podpowiedzi</div>'
    h += wartosc({k: v for k, v in p.items() if k != "id"})
    return h + "</div>"


# ---------------------------------------------------------------- sceny
def sekcje(ciało):
    """Dzieli treść pliku na sekcje '## nazwa'."""
    wynik, nazwa, buf = {}, "_", []
    for l in ciało.split("\n"):
        m = re.match(r"^## (.+)$", l)
        if m:
            wynik[nazwa] = "\n".join(buf)
            nazwa, buf = m.group(1).strip(), []
        else:
            buf.append(l)
    wynik[nazwa] = "\n".join(buf)
    return wynik


def podsekcje(tekst, poziom="###"):
    czesci, nazwa, buf = [], None, []
    for l in tekst.split("\n"):
        m = re.match(rf"^{poziom} (.+)$", l)
        if m:
            czesci.append((nazwa, "\n".join(buf)))
            nazwa, buf = m.group(1).strip(), []
        else:
            buf.append(l)
    czesci.append((nazwa, "\n".join(buf)))
    return czesci


def teksty_do_odczytania(tekst):
    """Zwraca {klucz: {tytul, glowny_html, wstawki:[{tytul, html}]}} dla '### 1. Tytuł' lub '### A. Tytuł'."""
    wynik = {}
    for nazwa, tresc in podsekcje(tekst)[1:]:
        m = re.match(r"^(\w+)\.\s+(.*)$", nazwa or "")
        if not m:
            continue
        klucz, tytul = m.group(1), m.group(2)
        czesci, cur_t, buf = [], None, []
        for l in tresc.split("\n"):
            mm = re.match(r"^\*\*((?:Wstawka|Wariant)[^*]*)\*\*(.*)$", l)
            if mm:
                czesci.append((cur_t, "\n".join(buf)))
                cur_t, buf = (mm.group(1) + mm.group(2)).strip(), []
            else:
                buf.append(l)
        czesci.append((cur_t, "\n".join(buf)))
        wynik[klucz] = {
            "tytul": tytul,
            "glowny": md(czesci[0][1]),
            "wstawki": [{"tytul": t.rstrip(":").strip(), "html": md(b)} for t, b in czesci[1:] if b.strip()],
        }
    return wynik


def kroki_z_rytmu(tekst, rodzaj_scena):
    kroki, cur = [], None
    for l in tekst.split("\n"):
        m = re.match(r"^\*\*(Krok|Spotkanie)\s+([\w]+)\.\s+(.*?)\*\*\s*(?:\((.*)\))?\s*$", l)
        if m:
            cur = {"nr": m.group(2), "tytul": m.group(3).strip(), "czas": (m.group(4) or "").strip(), "punkty": []}
            kroki.append(cur)
        elif cur is not None:
            mm = re.match(r"^- ([A-ZĄĆĘŁŃÓŚŹŻ][\wąćęłńóśźż ]*?):\s*(.*)$", l)
            if mm:
                cur["punkty"].append([mm.group(1), mm.group(2)])
            elif l.startswith("  ") and l.strip() and cur["punkty"]:
                cur["punkty"][-1][1] += " " + l.strip()
            elif l.strip() and not l.startswith("###") and not l.startswith("*") and not cur["punkty"]:
                cur.setdefault("uwaga", []).append(l.strip())
    return kroki


def znajdz(mapa, ref):
    ref = ref.strip()
    if ref in mapa:
        return ref
    for k in mapa:
        if k.endswith("." + ref) or k.endswith(ref):
            return k
    return None


def zbuduj_scene(meta, ciało, plik):
    sek = sekcje(ciało)
    bloki = {}
    for d in bloki_yaml(ciało):
        for rodzaj in ("dialog", "test", "rozgalezienie", "podpowiedzi"):
            if rodzaj in d and isinstance(d[rodzaj], dict):
                b = d[rodzaj]
                bloki[b.get("id", f"{rodzaj}.{len(bloki)}")] = (rodzaj, b)
    dialogi_wstep = {}
    for nazwa, tresc in podsekcje(sek.get("Dialogi", ""))[1:]:
        m = re.search(r"id:\s*(\S+)", tresc)
        intro = tresc.split("```")[0].strip()
        if m:
            dialogi_wstep[m.group(1)] = intro
    teksty = teksty_do_odczytania(sek.get("Do odczytania", ""))
    rytm_tekst = sek.get("Dla MG", "")
    kroki_raw = kroki_z_rytmu(rytm_tekst, False)
    # NPC obecni
    npc_obecni = {}
    wpisy, cur = [], None
    for l in sek.get("Obecni", "").split("\n"):
        if re.match(r"^(- )?\*\*", l):
            cur = [l]
            wpisy.append(cur)
        elif cur is not None and l.strip() and not l.startswith("*Przy"):
            cur.append(l)
    for wpis in wpisy:
        glowka = wpis[0]
        if re.search(r"obecni|Zawsze|Tylko|wariant", glowka.split("**")[1] if glowka.count("**") >= 2 else "", re.I) and "[[npc." not in glowka:
            continue
        idm = re.search(r"\[\[(npc\.[a-z0-9\-]+)\]\]", glowka)
        if idm:
            nid = idm.group(1)
            imie = DOKUMENTY.get(nid, {}).get("tytul", nid)
        else:
            mm = re.match(r"^(?:- )?\*\*(.+?)\*\*", glowka)
            imie = mm.group(1) if mm else glowka[:30]
            nid = "bez-karty:" + imie
        reszta = "\n".join(wpis[1:]) if idm and glowka.startswith("**") else "\n".join(wpis)
        reszta = re.sub(r"^(- )?\*\*.+?\*\*\s*(\(.*?\))?\.?", "", reszta, count=1) if not (idm and glowka.startswith("**")) else reszta
        naglowek = re.sub(r"^\*\*|\*\*$", "", glowka).strip() if idm and glowka.startswith("**") else ""
        npc_obecni[nid] = {"imie": imie, "id": idm.group(1) if idm else None,
                           "opis_html": ("<p class='rola'>" + inline(re.sub(r"\[\[npc\.[a-z0-9\-]+\]\],?\s*", "", naglowek)) + "</p>" if naglowek else "") + md(reszta)}
    kroki = []
    for k in kroki_raw:
        czytaj_html, dialogi, testy, jesli, flagi, materialy, krotko, inne = [], [], [], [], [], [], [], []
        uzyte_npc = set()
        for etyk, tr in k["punkty"]:
            tokeny = re.findall(r"`([^`]+)`", tr)
            el = etyk.lower()
            tr_czytaj = re.split(r"\bw scenie\b|\bscena `|\bw `s1\.scena", tr)[0]
            if el.startswith("czytaj"):
                nr = re.findall(r"tekst(?:y|u)?\s+([A-Z0-9]+)", tr)
                nr += re.findall(r"\btekst(?:y)?\s+\d+(?:\s*(?:,|i|oraz)\s*\d+)*", tr)
                numery = re.findall(r"[A-Z]\b|\d+", " ".join(re.findall(r"tekst(?:y|u)?\s+([A-Z0-9](?:\s*(?:,|i|oraz|\+)\s*[A-Z0-9])*)", tr_czytaj)))
                for n in numery:
                    if n in teksty:
                        czytaj_html.append(n)
                if not numery and k["nr"] in teksty and rodzaj_scena_spotkanie(k):
                    czytaj_html.append(k["nr"])
                czytaj_html.append(("uwaga", tr))
            elif el.startswith("dialog"):
                for t in tokeny:
                    kid = znajdz({i: 1 for i, (r, _) in bloki.items() if r == "dialog"}, t)
                    if kid:
                        dialogi.append(kid)
                if not tokeny:
                    krotko.append(tr)
            elif el.startswith("test"):
                for t in tokeny:
                    kid = znajdz({i: 1 for i, (r, _) in bloki.items() if r == "test"}, t)
                    if kid:
                        testy.append(kid)
                krotko.append("Test: " + tr) if not testy else None
            elif el.startswith("awaryjn"):
                for t in tokeny:
                    kid = znajdz({i: 1 for i, (r, _) in bloki.items() if r == "rozgalezienie"}, t)
                    if kid:
                        jesli.append(kid)
            elif el.startswith("flagi") or el.startswith("flaga"):
                flagi += re.findall(r"flaga\.[a-z0-9\-]+", tr)
                if not flagi:
                    krotko.append(tr)
            elif el.startswith("krótko") or el.startswith("krotko"):
                krotko.append(tr)
            else:
                inne.append((etyk, tr))
            for t in tokeny:
                if t in DOKUMENTY and DOKUMENTY[t]["typ"] in ("handout", "miejsce", "przedmiot"):
                    materialy.append(t)
        # numery tekstów -> struktury
        teksty_k = []
        uwagi_czytaj = []
        for c in czytaj_html:
            if isinstance(c, tuple):
                uwagi_czytaj.append(inline(c[1]))
            elif c in teksty and c not in [t["klucz"] for t in teksty_k]:
                teksty_k.append({"klucz": c, **teksty[c]})
        dialogi = list(dict.fromkeys(dialogi))
        testy = list(dict.fromkeys(testy))
        jesli = list(dict.fromkeys(jesli))
        flagi = list(dict.fromkeys(flagi))
        for d in dialogi:
            n = bloki[d][1].get("npc")
            uzyte_npc.add(n or "")
        # NPC w kroku: z dialogów + po nazwie w tekstach/punktach
        calosc = " ".join(tr for _, tr in k["punkty"]) + " " + " ".join(t["glowny"] for t in teksty_k)
        npc_k = []
        for nid, info in npc_obecni.items():
            imie = info["imie"]
            nazwisko = imie.split()[-1]
            if (info["id"] in uzyte_npc) or (imie in calosc) or (nazwisko in calosc):
                npc_k.append(nid)
        if not npc_k:
            npc_k = []
        kroki.append({
            "nr": k["nr"], "tytul": k["tytul"], "czas": k["czas"],
            "teksty": teksty_k, "uwagi_czytaj": uwagi_czytaj,
            "krotko": [inline(x) for x in krotko], "inne": [[e, inline(t)] for e, t in inne],
            "dialogi": dialogi, "testy": testy, "jesli": jesli, "flagi": flagi,
            "materialy": list(dict.fromkeys(materialy)), "npc": npc_k,
        })
    # render bloków
    bloki_html = {}
    for bid, (rodzaj, b) in bloki.items():
        if rodzaj == "dialog":
            bloki_html[bid] = render_dialog(b, dialogi_wstep.get(bid, ""))
        elif rodzaj == "test":
            bloki_html[bid] = render_test(b)
        elif rodzaj == "rozgalezienie":
            bloki_html[bid] = render_rozgalezienie(b)
        else:
            bloki_html[bid] = render_podpowiedzi(b)
    wszystkie_jesli = [bid for bid, (r, b) in bloki.items() if r == "rozgalezienie" and b.get("rodzaj") == "awaryjne"]
    podp = [bid for bid, (r, _) in bloki.items() if r == "podpowiedzi"]
    return {
        "id": meta["id"], "tytul": meta["tytul"], "akt": str(meta.get("akt", "")),
        "kolejnosc": meta.get("kolejnosc", 99), "czas_min": meta.get("czas_min"),
        "cel": meta.get("cel", ""), "flagi_wyjscie": meta.get("flagi_wyjscie") or [],
        "flagi_wejscie": meta.get("flagi_wejscie") or [],
        "kroki": kroki, "bloki": bloki_html, "wszystkie_jesli": wszystkie_jesli, "podpowiedzi": podp,
        "npc": npc_obecni,
        "dla_mg": md(sek.get("Dla MG", "")), "konsekwencje": md(sek.get("Konsekwencje", "")),
        "do_odczytania_calosc": {k: v for k, v in teksty.items()},
        "moduł": meta["id"].endswith(".12"),
    }


def rodzaj_scena_spotkanie(k):
    return bool(re.match(r"^[A-Z]$", str(k["nr"])))


# ---------------------------------------------------------------- reszta
def streszczenie_tekstu(tekst):
    t = re.sub(r"```.*?```", " ", tekst, flags=re.S)
    t = re.sub(r"[#>*`|\[\]]", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def main():
    wczytaj_dokumenty()
    sceny = []
    for p in sorted(SCENY.glob("*.md")):
        meta, ciało = czytaj(p)
        if meta.get("typ") == "scena":
            sceny.append(zbuduj_scene(meta, ciało, p))
    sceny.sort(key=lambda s: s["kolejnosc"])

    flagi = {}
    pf = KORZEN / "04_kampania" / "flagi.yaml"
    if pf.exists():
        for f in (yaml.safe_load(pf.read_text(encoding="utf-8")) or {}).get("flagi", []):
            flagi[f["id"]] = f.get("opis", "")

    dok = {}
    for id_, d in DOKUMENTY.items():
        dok[id_] = {"id": id_, "typ": d["typ"], "tytul": d["tytul"], "html": md(d["tekst"]),
                    "status": d["meta"].get("status", ""), "pewnosc": d["meta"].get("pewnosc", ""),
                    "tekst": streszczenie_tekstu(d["tekst"])[:6000]}

    postacie = {}
    for p in sorted((KORZEN / "03_postacie" / "gracze").glob("*.yaml")) if (KORZEN / "03_postacie" / "gracze").exists() else []:
        try:
            dane = yaml.safe_load(p.read_text(encoding="utf-8"))
        except yaml.YAMLError as e:
            OSTRZEZENIA.append(f"{p.name}: {e}")
            continue
        if p.name.startswith("slownik"):
            postacie["_slownik"] = dane
        else:
            postacie[dane["id"]] = dane

    zaklecia_html = ""
    instr = DOKUMENTY.get("zasada.tworzenie-postaci-6-rok")

    dane = {
        "sceny": sceny, "flagi": flagi, "dokumenty": dok, "postacie": postacie,
        "dzien": "Hogwart, jesień 1969",
    }
    haslo = os.environ.get("PANEL_HASLO", "").strip()
    dane["haslo_sha256"] = hashlib.sha256(haslo.encode("utf-8")).hexdigest() if haslo else ""

    if WYJSCIE.exists():
        shutil.rmtree(WYJSCIE)
    WYJSCIE.mkdir(parents=True)
    for p in SZABLON.iterdir():
        shutil.copy(p, WYJSCIE / p.name)
    (WYJSCIE / "dane.js").write_text("window.DANE = " + json.dumps(dane, ensure_ascii=False) + ";\n", encoding="utf-8")

    rozm = sum(f.stat().st_size for f in WYJSCIE.iterdir()) / 1e6
    print(f"Panel zbudowany: {WYJSCIE} ({rozm:.1f} MB), sceny: {len(sceny)}, dokumenty: {len(dok)}, postacie: {len([k for k in postacie if k != '_slownik'])}")
    for s in sceny:
        pusto = [k["nr"] for k in s["kroki"] if not (k["teksty"] or k["dialogi"] or k["testy"] or k["krotko"])]
        print(f"  {s['id']}: kroków {len(s['kroki'])}, pustych {pusto}")
    for o in OSTRZEZENIA:
        print("  OSTRZEŻENIE:", o)


if __name__ == "__main__":
    main()

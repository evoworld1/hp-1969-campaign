---
id: s1.scena.06
typ: scena
tytul: "Mapa dryfu"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 6
czas_min: 30
cel: "Węzeł śledztwa: pomiary zegarów w zamku ujawniają dwa wzory (przypływ ku Wieży Zegarowej i drżące odczyty ku lochom), a rozmowy z innymi ofiarami dopasowują stracone godziny do sukcesów Cassiana."
npc:
  - npc.filius-flitwick
  - npc.thaddeus-wren
  - npc.argus-filch
  - npc.maisie-lock
  - npc.gideon-pratt
  - npc.tobias-quill
  - npc.ansel-dray
miejsca:
  - miejsce.sala-wejsciowa
  - miejsce.wielka-sala
  - miejsce.sala-obrony
  - miejsce.lochy-przejscie-slytherinu
  - miejsce.wieza-zegarowa
przedmioty: []
handouty:
  - s1.handout.praca-domowa-dryf
  - s1.handout.mapa-zamku-dryf
flagi_wejscie:
  - flaga.godzina-stracona
  - flaga.praca-domowa-dryf
  - flaga.tempus-opanowane
  - flaga.ansel-spotkany
  - flaga.s1-zegar-kradziezy
flagi_wyjscie:
  - flaga.przyplyw-ku-wiezy
  - flaga.slad-ukaszen
  - flaga.rejestr-godzin
  - flaga.s1-zegar-kradziezy
nastepne:
  - s1.scena.07
  - s1.scena.08
  - s1.scena.12
tagi: [s1, sledztwo, wezel, mapa-dryfu, tempus]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.06, W3, W4.3, W4.4, zegar kradzieży)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (wtorek rano), tekst 2 (wzór przypływu), tekst 3 (wzór drżących odczytów).

## Dla MG

**Kiedy w fikcji:** wtorek 23 września, okienka i przerwy.

**Co się naprawdę dzieje.** TODO. Klepsydra w wieży przecieka (przypływ), a Cassian podbiera z wycieków w lochach (drżenie). Każde miejsce pomiaru może być małą scenką z modułu 12.

**Zegar kradzieży.** Wtorek rano to kolejne pół dnia: +1, jeśli zegarek jest u Cassiana i nikt go nie skonfrontował. Wartość 1, 2 i 3 dają wydarzenia z tabeli w `graf-scen.md`; przy 3 Cassian sam przychodzi (scena 08).

### Rytm sceny

**Krok 1. Wtorek rano** (ok. 2 min)
- Czytaj: tekst 1 („TODO…”)
- Flagi: `flaga.s1-zegar-kradziezy` (+1)
- Krótko: plotka przy śniadaniu (zegar kradzieży 1: drugoroczniak przespał lekcję). Rozdaj handout `s1.handout.mapa-zamku-dryf`.

**Krok 2. Plan pomiarów** (ok. 3 min)
- Krótko: gracze wybierają 3–6 miejsc (przy początkujących najwyżej sześć) i dzielą się albo idą razem. Baza: pusta sala Obrony, w której grupa może ćwiczyć po lekcjach.

**Krok 3. Pomiary** (ok. 12 min)
- Test: `s1.scena.06.test.pomiar` (Tempus albo porównanie zwykłych zegarków, bez magii, W3.2)
- Dialog: `s1.scena.06.dialog.filch-wieza` — „TODO” (gdy postacie mierzą przy wielkim zegarze; sens: wieża się boczy; zegarmistrz był w czwartek, W8.3)
- Krótko: każdy pomiar to jeden wpis na mapie. Ansel (stopień 3, towarzyszenie) może iść z postacią o najwyższej Więzi: przy wieży czuje ciągnięcie (W3.4).

**Krok 4. Dwa wzory** (ok. 5 min)
- Czytaj: tekst 2 („TODO…”), tekst 3 („TODO…”)
- Test: `s1.scena.06.test.odczytanie-wzoru`
- Flagi: `flaga.przyplyw-ku-wiezy`, `flaga.slad-ukaszen`
- Krótko: gładkie spóźnienia rosną ku Wieży Zegarowej; drżące odczyty prowadzą do przejścia Slytherinu.

**Krok 5. Inne ofiary** (ok. 6 min, opcjonalnie)
- Dialog: `s1.scena.06.dialog.maisie-kwadrans` — „TODO”
- Dialog: `s1.scena.06.dialog.pratt-korytarz` — „TODO”
- Dialog: `s1.scena.06.dialog.quill-notes` — „TODO” (Tobias pokazuje notes: kto kiedy „przysnął”)
- Flagi: `flaga.rejestr-godzin`
- Krótko: stracone godziny pokrywają się z dniami, w których Cassian błyszczał (W4.3). Ofiary opowiadają o mignięciu „ducha Puchona”.

**Krok 6. Wren pyta grupę** (ok. 2 min, gdy zegar kradzieży doszedł do 2)
- Dialog: `s1.scena.06.dialog.wren-kto-gubi-czas` — „TODO”
- Krótko: Wren najpierw pyta „swoją” grupę, kto ostatnio gubi czas, zanim zapyta publicznie. Wybór kierunku: wieża (07) albo Cassian (08).

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.06.test.pomiar`, `s1.scena.06.test.odczytanie-wzoru`.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.przyplyw
  rodzaj: glowne
  warunek: "Postacie widzą, że gładkie spóźnienia rosną ku Wieży Zegarowej."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W3. Naturalny kolejny krok: wieża (07), czyli celowy ślepy zaułek z ziarnem."
  flagi_ustaw: [flaga.przyplyw-ku-wiezy]
  prowadzi_do: s1.scena.07
```

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.slad-do-lochow
  rodzaj: glowne
  warunek: "Postacie idą za drżącymi odczytami do przejścia Slytherinu."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W4.4. Ślad kończy się tam, gdzie Cassian podbiera; prowadzi do konfrontacji."
  flagi_ustaw: [flaga.slad-ukaszen]
  prowadzi_do: s1.scena.08
```

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.rejestr-godzin
  rodzaj: glowne
  warunek: "Postacie rozpytują ofiary i dopasowują stracone godziny do sukcesów Cassiana."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W4.3. Postacie mają listę dat i godzin, którą mogą rzucić Cassianowi w twarz albo pokazać Wrenowi."
  flagi_ustaw: [flaga.rejestr-godzin]
  prowadzi_do: s1.scena.08
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.awaryjne-bez-pomiarow
  rodzaj: awaryjne
  warunek: "Postacie nie robią pomiarów albo pomiary się nie udają."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Flitwick na korytarzu, przeglądając pracę domową: „Wszystkie wasze błędy pochylają się w jedną stronę” (W3). Ansel czuje ciągnięcie ku wieży. Wren pyta grupę o gubienie czasu (W4)."
  flagi_ustaw: [flaga.przyplyw-ku-wiezy]
  prowadzi_do: s1.scena.07
```

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.awaryjne-cassian-przychodzi
  rodzaj: awaryjne
  warunek: "Zegar kradzieży doszedł do 3, a postacie wciąż nie skonfrontowały Cassiana."
  wymaga_flag: [flaga.s1-zegar-kradziezy]
  wyklucza_flagi: [flaga.cassian-zdemaskowany]
  efekt: "Cassian, zdenerwowany wścibstwem, sam znajduje postacie (w bazie grupy albo na korytarzu)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.08
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: wpisy z mapy dryfu, `flaga.przyplyw-ku-wiezy`, `flaga.slad-ukaszen`, `flaga.rejestr-godzin`, wartość `flaga.s1-zegar-kradziezy`.

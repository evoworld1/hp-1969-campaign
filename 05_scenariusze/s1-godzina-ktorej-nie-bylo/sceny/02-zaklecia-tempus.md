---
id: s1.scena.02
typ: scena
tytul: "Zaklęcia: Tempus"
status: szkic
sesja: s1
akt: "I"
kolejnosc: 2
czas_min: 30
cel: "Pierwszy test magiczny każdej postaci (Tempus, zaklęcie pokazujące prawdziwą chwilę), kolejny sygnał dziwności (drżące cyfry przy biciu z wieży) i praca domowa, która da pretekst do mapy dryfu."
npc:
  - npc.filius-flitwick
  - npc.tobias-quill
  - npc.cassian-vane
  - npc.rosalind-teague
miejsca:
  - miejsce.sala-zaklec
przedmioty:
  - przedmiot.zegarek-cassiana
handouty:
  - s1.handout.praca-domowa-dryf
flagi_wejscie:
  - flaga.plotka-duch-puchona
flagi_wyjscie:
  - flaga.tempus-opanowane
  - flaga.praca-domowa-dryf
  - flaga.cassian-czujny
nastepne:
  - s1.scena.03
tagi: [s1, lekcja, tempus, pierwszy-test-magiczny, sygnaly-dziwnosci]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.02, siatka bezpieczeństwa 1)"
  - "02_zasady/walker/luki-i-niejasnosci.md (ZD-21: Tempus)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (wejście do sali), tekst 2 (pokaz Tempus), tekst 3 (bicie z wieży, cyfry drżą), tekst 4 (Cassian wychodzi), tekst 5 (dzwon na przerwę).

## Dla MG

**Kiedy w fikcji:** poniedziałek 22 września 1969, przed południem. Pierwsza lekcja po śniadaniu.

**Co się naprawdę dzieje.** TODO. Zegarek Cassiana jest tu tylko sygnałem (decyzja MG z 2026-11-20); zdobyć się go nie da. Cassian wychodzi pięć minut przed końcem, żeby przygotować kradzież godziny (scena 03).

### Rytm sceny

**Krok 1. Wejście do sali** (ok. 3 min)
- Czytaj: tekst 1 („TODO…”)
- Krótko: drużyna wpada po spóźnionym dzwonie; Flitwick na stosie książek, na tablicy słowo „Tempus”.

**Krok 2. Pokaz Tempus** (ok. 5 min)
- Czytaj: tekst 2 („TODO…”)
- Dialog: `s1.scena.02.dialog.flitwick-tempus` — „TODO”
- Krótko: Flitwick pokazuje, że Tempus podaje prawdziwą chwilę, a nie wskazania zegara. Nowe zaklęcie szóstego roku, nikt go nie zna.

**Krok 3. Pierwszy test magiczny** (ok. 10 min)
- Test: `s1.scena.02.test.tempus`
- Dialog: `s1.scena.02.dialog.quill-lawka` — „TODO” (Tobias komentuje próby z sąsiedniej ławki)
- Flagi: `flaga.tempus-opanowane`
- Krótko: każda postać próbuje. Porażka nie zamyka niczego: korepetycje w scenie 12, a W1–W7 mają drogi bez Tempus.

**Krok 4. Bicie z wieży** (ok. 3 min)
- Czytaj: tekst 3 („TODO…”)
- Dialog: `s1.scena.02.dialog.flitwick-wieza` — „TODO” (sens: wieża boczy się od dwóch tygodni, pan Filch twierdzi, że dzwony chodzą wolno)
- Krótko: cyfry nad różdżką Flitwicka drżą i przeskakują o minutę. Droga do W0 i W3.3.

**Krok 5. Cassian wychodzi** (ok. 2 min, tylko gdy Cassian jest na tej lekcji)
- Czytaj: tekst 4 („TODO…”)
- Dialog: `s1.scena.02.dialog.cassian-wyjscie` — „TODO” (prośba o wyjście „do skrzydła szpitalnego”)
- Krótko: pięć minut przed końcem. Kto chce iść za nim, zob. „Gdy gracze zboczą”.

**Krok 6. Praca domowa i Dział Ksiąg Zakazanych** (ok. 5 min)
- Dialog: `s1.scena.02.dialog.flitwick-praca-domowa` — „TODO”
- Dialog: `s1.scena.02.dialog.flitwick-odmowa` — „TODO” (sens: „Nie na ten temat i nie dla szóstego roku, moi drodzy”)
- Flagi: `flaga.praca-domowa-dryf`
- Krótko: handout `s1.handout.praca-domowa-dryf`. Ciekawskim Flitwick wspomina książki z Działu Ksiąg Zakazanych, ale przepustki nie podpisze (motywacja, nie ułatwienie).

**Krok 7. Zamknięcie** (ok. 2 min)
- Czytaj: tekst 5 („TODO…”)
- Krótko: dzwon na przerwę obiadową; grupa trzecia ma być pod salą Obrony dziesięć minut przed lekcją, więc idzie razem. Przejście do 03.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.02.test.tempus` (trudność według ZD-21).

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.02.rozgalezienie.tempus-udany
  rodzaj: glowne
  warunek: "Co najmniej jednej postaci udaje się Tempus."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Postać ma narzędzie do W1 (godzina różnicy w 03), W2 (cyfry nie formują się przy Anselu), W3 (mapa dryfu) i W6 (tarcza z trzynastoma kreskami)."
  flagi_ustaw: [flaga.tempus-opanowane]
  prowadzi_do: s1.scena.03
```

```yaml
rozgalezienie:
  id: s1.scena.02.rozgalezienie.tempus-nieudany
  rodzaj: glowne
  warunek: "Nikomu nie udaje się Tempus."
  wymaga_flag: []
  wyklucza_flagi: [flaga.tempus-opanowane]
  efekt: "Flitwick proponuje korepetycje (scena 12). Wskazówki idą drogami bez Tempus (zwykłe zegarki, świadkowie, Ansel)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.03
```

```yaml
rozgalezienie:
  id: s1.scena.02.rozgalezienie.praca-domowa
  rodzaj: glowne
  warunek: "Zawsze, na koniec lekcji."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Flitwick zadaje pomiar trzech zegarów na różnych piętrach. To pretekst do sceny 06."
  flagi_ustaw: [flaga.praca-domowa-dryf]
  prowadzi_do: s1.scena.03
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.02.rozgalezienie.awaryjne-opuszczona-lekcja
  rodzaj: awaryjne
  warunek: "Postacie nie idą na Zaklęcia albo wychodzą przed końcem."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Praca domowa i tak dociera (Tobias albo Flitwick na korytarzu); Tempus można dopracować na korepetycjach (scena 12). Przerwa i stracona godzina przychodzą bez zmian."
  flagi_ustaw: [flaga.praca-domowa-dryf]
  prowadzi_do: s1.scena.03
```

```yaml
rozgalezienie:
  id: s1.scena.02.rozgalezienie.awaryjne-zegarek
  rodzaj: awaryjne
  warunek: "Postać próbuje zabrać albo obejrzeć zegarek Cassiana (siatka bezpieczeństwa 1)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Nie udaje się: Cassian chwyta rękę albo interweniuje Flitwick. Zegarek zostaje u Cassiana, a on zapamiętuje twarz postaci (czujność w 04 i 08)."
  flagi_ustaw: [flaga.cassian-czujny]
  prowadzi_do: s1.scena.03
```

```yaml
rozgalezienie:
  id: s1.scena.02.rozgalezienie.awaryjne-sledzenie-cassiana
  rodzaj: awaryjne
  warunek: "Postać idzie za Cassianem, gdy ten wychodzi przed końcem lekcji."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Założenie robocze: gubi go na ruchomych schodach i wraca na korytarz w chwili, gdy grupa wychodzi z lekcji. Traci godzinę razem z drużyną (siatka 2: drużynę bierze się naraz)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.03
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: `flaga.tempus-opanowane` (które postacie), `flaga.praca-domowa-dryf`, ewentualnie `flaga.cassian-czujny` (kogo Cassian zapamiętał).

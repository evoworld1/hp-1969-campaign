---
id: s1.scena.04
typ: scena
tytul: "Obrona przed Czarną Magią: pokaz Cassiana"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 4
czas_min: 30
cel: "Pierwszy test przeciwny (czytanie przeciwnika), rywalizacja grup i pokaz Cassiana, który jest za szybki. Test spostrzegawczości daje pierwszą drogę do W4 (zegarek jako źródło szybkości); wyrwany zegarek wraca przez Wrena do Cassiana."
npc:
  - npc.thaddeus-wren
  - npc.cassian-vane
  - npc.rosalind-teague
  - npc.barnaby-finch
  - npc.tobias-quill
miejsca:
  - miejsce.sala-obrony
przedmioty:
  - przedmiot.zegarek-cassiana
handouty: []
flagi_wejscie:
  - flaga.godzina-stracona
  - flaga.tempus-opanowane
  - flaga.cassian-czujny
flagi_wyjscie:
  - flaga.sygnal-cassiana-nazwany
  - flaga.wren-podejrzewa
  - flaga.cassian-czujny
nastepne:
  - s1.scena.05
  - s1.scena.08
  - s1.scena.12
tagi: [s1, lekcja, test-przeciwny, grupa-wrena, pokaz, zegarek]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.04, siatki bezpieczeństwa 1 i 7, W4.1, W4.6)"
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-20 (zegarek w pokazie, „pamiątka, nie dowód”)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (spóźnione wejście), tekst 2 (pokaz Cassiana), tekst 3 (zamknięcie lekcji).

## Dla MG

**Kiedy w fikcji:** poniedziałek 22 września, po przerwie obiadowej.

**Co się naprawdę dzieje.** TODO. Szybkość Cassiana to dosłownie godzina drużyny. Zegarek zostaje `u-cassiana` do końca sceny bez względu na wynik (decyzja MG z 2026-11-20). Czy stracona godzina daje stan Drained (wyczerpanie) już tutaj, ustala mechanik.

### Rytm sceny

**Krok 1. Spóźnione wejście** (ok. 3 min)
- Czytaj: tekst 1 („TODO…”)
- Dialog: `s1.scena.04.dialog.wren-spoznieni` — „TODO” (sens: „Gdzie byliście?”; gdy mówią prawdę, pyta, czy Vane był w pobliżu)
- Krótko: grupa Cassiana zajęła lepsze stanowisko i zaczyna pierwsza. Bez punktów domów.

**Krok 2. Lekcja** (ok. 4 min)
- Dialog: `s1.scena.04.dialog.wren-lekcja` — „TODO” (sens: „Przeciwnik zawsze mówi, co zrobi”)
- Krótko: Wren tłumaczy czytanie nawyków przeciwnika.

**Krok 3. Czytanie przeciwnika** (ok. 8 min)
- Test: `s1.scena.04.test.czytanie-przeciwnika`
- Dialog: `s1.scena.04.dialog.rosalind-cwiczenie` — „TODO” (pociera kciuk przed zaklęciem)
- Dialog: `s1.scena.04.dialog.finch-cwiczenie` — „TODO” (zerka na drzwi przed ruchem)
- Krótko: pierwsza nauka testu przeciwnego na uczniach z grupy rywali.

**Krok 4. Pokaz grup** (ok. 8 min)
- Czytaj: tekst 2 („TODO…”)
- Test: `s1.scena.04.test.pokaz` (pojedynek pokazowy postaci z Cassianem)
- Test: `s1.scena.04.test.sygnal-kieszonki` (spostrzegawczość każdego, kto patrzy)
- Flagi: `flaga.sygnal-cassiana-nazwany` (gdy postać powie to na głos)
- Krótko: Cassian działa dwa razy, zanim postać skończy jeden ruch, i dotyka kieszonki kamizelki. Sukces testu spostrzegawczości: dotyk kieszonki przed każdym podwójnym ruchem, ciepło szkła, tykanie (W4.1). Tempus przy Cassianie tyka szybciej.

**Krok 5. Wyrwany zegarek** (ok. 2 min, tylko gdy postać pokona Cassiana)
- Dialog: `s1.scena.04.dialog.wren-pamiatka` — „TODO” (sens: „Pamiątka, nie dowód”)
- Flagi: `flaga.wren-podejrzewa`, `flaga.cassian-czujny`
- Krótko: Wren natychmiast odbiera zegarek i oddaje go Cassianowi; od tej chwili patrzy na Vane'a uważniej.

**Krok 6. Po lekcji** (ok. 5 min)
- Czytaj: tekst 3 („TODO…”)
- Dialog: `s1.scena.04.dialog.wren-po-lekcji` — „TODO” (uwaga o ocenach Vane'a, W4.6)
- Dialog: `s1.scena.04.dialog.cassian-po-lekcji` — „TODO” (gdy postacie go zaczepiają)
- Flagi: `flaga.wren-podejrzewa` (gdy padnie uwaga o ocenach)
- Krótko: korytarz, wieczór. Konfrontacja od razu prowadzi do 08; zwykle dalej 05 albo 12.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.04.test.czytanie-przeciwnika`, `s1.scena.04.test.pokaz`, `s1.scena.04.test.sygnal-kieszonki`; modyfikator za `flaga.cassian-czujny`; decyzja o stanie Drained.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.04.rozgalezienie.sygnal-nazwany
  rodzaj: glowne
  warunek: "Postać zauważa sygnał z kieszonki i mówi o nim na głos (drużynie albo Wrenowi)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Pierwsza droga do W4. Przewaga w scenie 08: postacie wiedzą, że źródłem szybkości jest zegarek, a nie Cassian."
  flagi_ustaw: [flaga.sygnal-cassiana-nazwany]
  prowadzi_do: s1.scena.05
```

```yaml
rozgalezienie:
  id: s1.scena.04.rozgalezienie.zegarek-wyrwany
  rodzaj: glowne
  warunek: "Postać pokonuje Cassiana w pokazie i wyrywa mu zegarek."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Wren odbiera zegarek i oddaje go Cassianowi („pamiątka, nie dowód”). Zegarek zostaje u Cassiana, zegar kradzieży biegnie. Wren zaczyna podejrzewać, Cassian zapamiętuje postać."
  flagi_ustaw: [flaga.wren-podejrzewa, flaga.cassian-czujny]
  prowadzi_do: s1.scena.05
```

```yaml
rozgalezienie:
  id: s1.scena.04.rozgalezienie.konfrontacja-po-lekcji
  rodzaj: glowne
  warunek: "Postacie zaczepiają Cassiana zaraz po lekcji i oskarżają go o kradzież godziny."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Scena 08 zaczyna się od razu, wieczorem w poniedziałek. Scena 05 przychodzi po niej (Ansel czeka przy schodach do skutku); punkt pauzy 2 przesuwa się za 05."
  flagi_ustaw: []
  prowadzi_do: s1.scena.08
```

```yaml
rozgalezienie:
  id: s1.scena.04.rozgalezienie.zwykle-wyjscie
  rodzaj: glowne
  warunek: "Lekcja kończy się bez konfrontacji."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Wieczór: postacie idą (głodne, bo obiad przepadł) w stronę kuchni albo pokoju wspólnego. Przejście do 05 albo wędrówek (12)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.05
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.04.rozgalezienie.awaryjne-bez-obrony
  rodzaj: awaryjne
  warunek: "Postacie nie przychodzą na Obronę (siatka 7)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Tobias relacjonuje pokaz („był jak błyskawica, nikt go nie trafił”). Sygnał z kieszonki postacie zobaczą na żywo przy pierwszym spotkaniu w 08 (test przy pierwszym spojrzeniu)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.05
```

```yaml
rozgalezienie:
  id: s1.scena.04.rozgalezienie.awaryjne-kradziez-na-lekcji
  rodzaj: awaryjne
  warunek: "Postać próbuje ukraść zegarek w trakcie lekcji, poza pokazem."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Wren to widzi i przerywa; zegarek wraca do Cassiana. Postać traci twarz przed rokiem, Cassian staje się czujny. Kradzież jest możliwa dopiero po lekcji (scena 12, dormitorium, siatka 5)."
  flagi_ustaw: [flaga.cassian-czujny]
  prowadzi_do: s1.scena.05
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: `flaga.sygnal-cassiana-nazwany`, `flaga.wren-podejrzewa`, `flaga.cassian-czujny`, czy postacie mają stan Drained (decyzja mechanika). Zegar kradzieży: wieczór po 04 to pierwsze pół dnia (+1, jeśli nikt nie skonfrontował Cassiana).

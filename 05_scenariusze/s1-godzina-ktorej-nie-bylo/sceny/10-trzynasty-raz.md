---
id: s1.scena.10
typ: scena
tytul: "Trzynasty raz"
status: szkic
sesja: s1
akt: "III"
kolejnosc: 10
czas_min: 15
cel: "Cliffhanger: każdy zegar w zamku bije trzynaście razy, Ansel zaczyna blednąć, a sesja kończy się pytaniem, co postacie zrobią z notatnikiem i z Anselem."
npc:
  - npc.ansel-dray
  - npc.argus-filch
  - npc.minerva-mcgonagall
  - npc.hollis-crake
miejsca:
  - miejsce.biblioteka
  - miejsce.sklep-crake-i-corka
przedmioty:
  - przedmiot.dziennik-marrow
handouty: []
flagi_wejscie:
  - flaga.dziennik-u-graczy
  - flaga.gablota-sposob
  - flaga.ksiega-zlapani
  - flaga.filch-zlapal
  - flaga.ansel-kontakt
  - flaga.zegarek-cassiana
  - flaga.karta-u-graczy
flagi_wyjscie:
  - flaga.trzynasta-wybila
  - flaga.s1-wybor
  - flaga.filch-zlapal
  - flaga.dziennik-miejsce
nastepne: []
tagi: [s1, final, cliffhanger, ansel, trzynasta]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.10, siatka bezpieczeństwa 4)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Rozwidlenie końcowe, warianty awaryjne cliffhangera)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (trzynaście uderzeń na progu), tekst 2 (zamek się budzi), tekst 3 (Ansel blednie), tekst 4 (epilog: zegarmistrz w Londynie podnosi głowę), tekst 5 (wariant: trzynasta o północy, bez notatnika).

## Dla MG

**Kiedy w fikcji:** zaraz po scenie 09, noc z wtorku na środę; w wariancie bez notatnika o północy albo o świcie.

**Co się naprawdę dzieje.** TODO. Notatnik przekracza próg pracowni i Ansel traci jedną z kotwic. Rozwidlenie końcowe (bloki `s1.rozgalezienie.*`) jest w przeglądzie scenariusza.

### Rytm sceny

**Krok 1. Próg** (ok. 2 min)
- Czytaj: tekst 1 („TODO…”) albo tekst 5 („TODO…”) bez notatnika
- Flagi: `flaga.trzynasta-wybila`
- Krótko: każdy zegar w zamku bije trzynaście razy; trzynaste uderzenie nie powinno istnieć.

**Krok 2. Zamek się budzi** (ok. 3 min)
- Czytaj: tekst 2 („TODO…”)
- Krótko: portrety budzą się, Irytek wyje, w dormitoriach zapalają się lampy.

**Krok 3. Ansel blednie** (ok. 3 min)
- Dialog: `s1.scena.10.dialog.ansel-ciszej` — „TODO” (sens: „Zrobiło się ciszej. Nie podoba mi się to”)
- Czytaj: tekst 3 („TODO…”)
- Krótko: stopień 4 kontaktu (blednięcie), wszyscy.

**Krok 4. Filch** (ok. 3 min, gdy bicie go zwabia, a postacie nie uciekną)
- Test: `s1.scena.10.test.ucieczka-przed-filchem`
- Dialog: `s1.scena.10.dialog.filch-konfiskata` — „TODO”
- Flagi: `flaga.filch-zlapal`, `flaga.dziennik-miejsce` (= skonfiskowany; siatka 4)
- Krótko: trzynasty raz już wybił; zmienia się tylko pytanie końcowe.

**Krok 5. Epilog** (ok. 1 min)
- Czytaj: tekst 4 („TODO…”)
- Krótko: w Londynie zegarmistrz podnosi głowę znad warsztatu. Tylko dla graczy jako obraz, bez nazwiska.

**Krok 6. Pytanie końcowe** (ok. 3 min)
- Krótko: MG pyta: „Co robicie z notatnikiem i z Anselem?”. Kończy sesję albo pozwala na pierwszą wymianę zdań.
- Flagi: `flaga.s1-wybor` (zwykle `nierozstrzygniety`)

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.10.test.ucieczka-przed-filchem`.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.10.rozgalezienie.z-notatnikiem
  rodzaj: glowne
  warunek: "Postacie wynoszą notatnik z pracowni i nikt ich nie łapie."
  wymaga_flag: [flaga.dziennik-u-graczy]
  wyklucza_flagi: [flaga.filch-zlapal]
  efekt: "Pełny cliffhanger. Pytanie końcowe; wybór zapisuje się w rozwidleniu końcowym przeglądu (dumbledore, sekret, moc, najpierw-chlopiec, inne, podzieleni, nierozstrzygniety)."
  flagi_ustaw: [flaga.trzynasta-wybila, flaga.s1-wybor]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.10.rozgalezienie.skonfiskowany
  rodzaj: glowne
  warunek: "Filch łapie postacie z notatnikiem po trzynastym uderzeniu (siatka 4)."
  wymaga_flag: [flaga.dziennik-u-graczy]
  wyklucza_flagi: []
  efekt: "Notatnik trafia do McGonagall albo do szuflady Filcha, szlaban. Pytanie końcowe: jak go odzyskać i komu powiedzieć o Anselu."
  flagi_ustaw: [flaga.trzynasta-wybila, flaga.filch-zlapal, flaga.dziennik-miejsce, flaga.s1-wybor]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.10.rozgalezienie.bez-notatnika
  rodzaj: glowne
  warunek: "Postacie wyszły z pracowni bez notatnika (gablota nieotwarta albo notatnik zostawiony)."
  wymaga_flag: []
  wyklucza_flagi: [flaga.dziennik-u-graczy]
  efekt: "Zegary wybijają trzynasty raz o północy (zegar kradzieży albo luzująca się pieczęć). Ansel znajduje postacie o świcie, blady: „Ktoś tam był. Zrobiło się ciszej”. Pytanie dotyczy notatnika w cudzych rękach albo wciąż w pracowni."
  flagi_ustaw: [flaga.trzynasta-wybila, flaga.dziennik-miejsce, flaga.s1-wybor]
  prowadzi_do: brak
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.10.rozgalezienie.awaryjne-brak-czasu
  rodzaj: awaryjne
  warunek: "Czas przy stole się kończy przed sceną 10."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "MG czyta tylko tekst 1 i zadaje pytanie końcowe; reszta (Filch, epilog) przechodzi na otwarcie Sesji 2."
  flagi_ustaw: [flaga.trzynasta-wybila, flaga.s1-wybor]
  prowadzi_do: brak
```

## Drabinka podpowiedzi

TODO (zwykle zbędna: scena kończy się pytaniem).

## Konsekwencje

TODO. Zapisz w `04_kampania/stan-kampanii.md`: `flaga.trzynasta-wybila`, `flaga.s1-wybor`, `flaga.dziennik-miejsce`, `flaga.filch-zlapal`, stan Ansela (znaczniki kontaktu, Więź), los Cassiana, gdzie są zegarek i karta.

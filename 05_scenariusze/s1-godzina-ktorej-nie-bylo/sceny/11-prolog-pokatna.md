---
id: s1.scena.11
typ: scena
tytul: "Prolog: ulica Pokątna (opcjonalny)"
status: szkic
sesja: s1
akt: "prolog"
kolejnosc: 0
czas_min: 30
cel: "Opcjonalny prolog trzy tygodnie przed szkołą. Przejmuje rolę sceny nauczającej (rozmowa i jeden prosty test), daje pierwszą plotkę o Czarnym Panu i przelotne spotkanie z Crake'iem przy jego witrynie."
npc:
  - npc.garrick-ollivander
  - npc.hollis-crake
miejsca:
  - miejsce.ulica-pokatna
  - miejsce.sklep-crake-i-corka
przedmioty: []
handouty: []
flagi_wejscie: []
flagi_wyjscie:
  - flaga.s1-prolog-pokatna
  - flaga.crake-poznany
  - flaga.crake-dluga-rozmowa
  - flaga.plotka-o-voldemorcie
nastepne:
  - s1.scena.01
tagi: [s1, prolog, opcjonalna, nauka-gry, crake, ollivander, plotka]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.11, Sceny elastyczne, pogawędka ruchoma z Crake'iem, W8.4)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (Pokątna w sobotę), tekst 2 (u Ollivandera), tekst 3 (witryna „Crake i Córka”), tekst 4 (gazeciarz i szept w kolejce), tekst 5 („Trzy tygodnie później…”).

## Dla MG

**Kiedy w fikcji:** sobota 30 sierpnia 1969, ostatnie zakupy przed szkołą.

**Kiedy grać.** Decyzja MG przed sesją. Gdy prolog jest grany, scena 01 skraca się do 10 minut (wariant skrócony). Gdy nie jest grany, nic nie ginie: Crake pojawia się w zamku, a różdżka może być „nowa od Ollivandera” w opisie postaci.

**Co się naprawdę dzieje.** TODO. Crake w Sesji 1 to tylko życzliwy pan; niczego nie zdradza o Klepsydrze ani o „kliencie z Londynu”.

### Rytm sceny

**Krok 1. Otwarcie i jak się gra** (ok. 3 min)
- Czytaj: tekst 1 („TODO…”)
- Krótko: jedno zdanie o zasadach („Opiszę, co widzą wasze postacie, wy mówicie, co robią”) i po jednym łatwym pytaniu do każdego gracza (co kupujesz, z kim przyszedłeś).

**Krok 2. Zakupy** (ok. 5 min)
- Krótko: podręczniki do szóstego roku, sowi przysmak, szata za krótka po lecie. Każdy gracz mówi jedną rzecz o postaci.

**Krok 3. Ollivander** (ok. 8 min, tylko gdy postać potrzebuje nowej różdżki)
- Czytaj: tekst 2 („TODO…”)
- Dialog: `s1.scena.11.dialog.ollivander-rozdzka` — „TODO”
- Krótko: różdżka złamana w wakacje, odziedziczona albo „nie słucha”. Pierwsza rozmowa z bohaterem niezależnym.

**Krok 4. Witryna „Crake i Córka”** (ok. 6 min)
- Czytaj: tekst 3 („TODO…”)
- Dialog: `s1.scena.11.dialog.crake-witryna` — „TODO”
- Test: `s1.scena.11.test.crake-pogawedka` (jedyny test prologu, test nauczający)
- Flagi: `flaga.crake-poznany`, `flaga.crake-dluga-rozmowa` (tylko bardzo wysoki wynik)
- Krótko: starszy pan poprawia wskazówki w witrynie. Pogawędka ruchoma odbywa się tutaj i nie wraca w 01 ani w 07.

**Krok 5. Gazeciarz i szept** (ok. 4 min)
- Czytaj: tekst 4 („TODO…”)
- Dialog: `s1.scena.11.dialog.szept-w-kolejce` — „TODO” (ktoś w kolejce, tło bez karty)
- Flagi: `flaga.plotka-o-voldemorcie`
- Krótko: plotka, bez potwierdzenia. Przy zasłonie na tematy czystości krwi jedno zdanie bez nazwisk.

**Krok 6. Przeskok** (ok. 2 min)
- Czytaj: tekst 5 („TODO…”)
- Flagi: `flaga.s1-prolog-pokatna`
- Krótko: „trzy tygodnie później”, scena 01 w wariancie skróconym.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.11.test.crake-pogawedka` (ten sam próg co w 01).

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.11.rozgalezienie.prolog-zagrany
  rodzaj: glowne
  warunek: "MG gra prolog przed sceną 01."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Prolog przejmuje naukę gry. Scena 01 idzie w wariancie skróconym (10 minut), bez Crake'a przy zegarze, jeśli poznano go tutaj."
  flagi_ustaw: [flaga.s1-prolog-pokatna, flaga.plotka-o-voldemorcie]
  prowadzi_do: s1.scena.01
```

```yaml
rozgalezienie:
  id: s1.scena.11.rozgalezienie.crake-przy-witrynie
  rodzaj: poboczne
  warunek: "Postacie zatrzymują się przy witrynie i zagadują Crake'a."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Pogawędka 2–3 minuty i test. Zwykły sukces: miły pan pachnący olejem. Bardzo wysoki wynik: zdjęcie dziewczyny w kopercie zegarka i chwila o córce."
  flagi_ustaw: [flaga.crake-poznany]
  prowadzi_do: brak
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.11.rozgalezienie.awaryjne-gdzie-indziej
  rodzaj: awaryjne
  warunek: "Postacie chcą iść gdzie indziej (Nokturn, Gringott, lodziarnia)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Krótki kolor bez skutków fabularnych. Nokturn: dorosły (rodzic albo sprzedawca) zawraca postacie, zanim cokolwiek się stanie. Plotka i witryna Crake'a są po drodze z powrotem."
  flagi_ustaw: []
  prowadzi_do: s1.scena.01
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: `flaga.s1-prolog-pokatna`, `flaga.crake-poznany`, `flaga.crake-dluga-rozmowa`, `flaga.plotka-o-voldemorcie`; kto ma nową różdżkę.

---
id: s1.scena.07
typ: scena
tytul: "Wieża Zegarowa"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 7
czas_min: 20
cel: "Celowy ślepy zaułek: wieża jest doskonała, a odpowiedź leży gdzie indziej. Ziarno na Sesję 2 (plakietka Crake'a i świeży olej) i naturalne przejście do Cassiana o zmierzchu."
npc:
  - npc.hollis-crake
  - npc.cassian-vane
  - npc.ansel-dray
  - npc.argus-filch
miejsca:
  - miejsce.wieza-zegarowa
przedmioty:
  - przedmiot.plakietka-crake-i-corka
  - przedmiot.zegarek-cassiana
handouty: []
flagi_wejscie:
  - flaga.przyplyw-ku-wiezy
  - flaga.crake-poznany
  - flaga.ansel-spotkany
  - flaga.s1-zegar-kradziezy
flagi_wyjscie:
  - flaga.wieza-zbadana
  - flaga.plakietka-crake
  - flaga.crake-poznany
  - flaga.crake-dluga-rozmowa
nastepne:
  - s1.scena.08
  - s1.scena.06
  - s1.scena.12
tagi: [s1, slepy-zaulek, wieza, crake, ziarno-s2]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.07, pogawędka ruchoma z Crake'iem, W4.5, W8)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (wejście na wieżę), tekst 2 (mechanizm bez skazy), tekst 3 (plakietka i olej), tekst 4 (zmierzch: Cassian na schodach wieży).

## Dla MG

**Kiedy w fikcji:** wtorek 23 września, po południu albo o zmierzchu.

**Co się naprawdę dzieje.** TODO. Wieża jest tylko kotwicą Klepsydry: niczego nie pokazuje. Zaklęcia ujawniające nie wykrywają magii czasu (decyzja MG z 2026-11-20), najwyżej dziwnie zimne szkło. Ansel nie wchodzi na wieżę: boi się dzwonu (zginął, spadając z niej, ale tego nie pamięta).

### Rytm sceny

**Krok 1. Wejście** (ok. 3 min)
- Czytaj: tekst 1 („TODO…”)
- Dialog: `s1.scena.07.dialog.ansel-dzwon` — „TODO” (gdy Ansel towarzyszy: zostaje na dole)
- Krótko: kręte schody, rytm mechanizmu.

**Krok 2. Crake schodzi** (ok. 3 min, tylko bez `flaga.crake-poznany`, za dnia)
- Dialog: `s1.scena.07.dialog.crake-schodzi` — „TODO” (sens: „wieża ostatnio wymaga więcej uwagi”)
- Test: `s1.scena.07.test.crake-pogawedka`
- Flagi: `flaga.crake-poznany`, `flaga.crake-dluga-rozmowa` (tylko bardzo wysoki wynik)
- Krótko: ostatnie miejsce pogawędki ruchomej. Crake nic nie zdradza.

**Krok 3. Mechanizm** (ok. 6 min)
- Czytaj: tekst 2 („TODO…”)
- Test: `s1.scena.07.test.mechanizm`
- Flagi: `flaga.wieza-zbadana`
- Krótko: zero przesunięcia, mechanizm bez skazy. Postacie udowadniają, że to nie tu.

**Krok 4. Plakietka i olej** (ok. 3 min)
- Czytaj: tekst 3 („TODO…”)
- Flagi: `flaga.plakietka-crake`
- Krótko: świeży olej i mosiężna plakietka „Konserwacja: Crake i Córka, ulica Pokątna”. Bez testu (ziarno W8).

**Krok 5. Zmierzch** (ok. 5 min, gdy postacie są tu o zmierzchu albo czekają)
- Czytaj: tekst 4 („TODO…”)
- Krótko: Cassian przychodzi podbierać czas (W4.5). Przejście do 08.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.07.test.crake-pogawedka` (próg jak w 01), `s1.scena.07.test.mechanizm`.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.07.rozgalezienie.cassian-o-zmierzchu
  rodzaj: glowne
  warunek: "Postacie są na wieży o zmierzchu albo na nią czekają, a zegarek jest u Cassiana."
  wymaga_flag: []
  wyklucza_flagi: [flaga.cassian-zdemaskowany]
  efekt: "Cassian przychodzi podbierać czas i zastaje postacie. Konfrontacja zaczyna się na schodach wieży."
  flagi_ustaw: [flaga.wieza-zbadana]
  prowadzi_do: s1.scena.08
```

```yaml
rozgalezienie:
  id: s1.scena.07.rozgalezienie.slepy-zaulek
  rodzaj: glowne
  warunek: "Postacie badają wieżę za dnia i odchodzą."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Wieża jest czysta; zostaje plakietka i olej. Wieża zbadana sama w sobie wystarcza jako wejście do 08 (W4 przez wykluczenie). Powrót do 06 albo 12."
  flagi_ustaw: [flaga.wieza-zbadana, flaga.plakietka-crake]
  prowadzi_do: s1.scena.06
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.07.rozgalezienie.awaryjne-majsterkowanie
  rodzaj: awaryjne
  warunek: "Postacie grzebią w mechanizmie, zatrzymują wahadło albo próbują go zepsuć."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Założenie robocze: mechanizm wraca do rytmu sam, niczego nie da się w nim znaleźć ani zepsuć zwykłymi środkami. Cena: Filch słyszy hałas i przegania postacie, nazwiska trafiają do jego zeszytu."
  flagi_ustaw: [flaga.wieza-zbadana]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.07.rozgalezienie.awaryjne-dzwon
  rodzaj: awaryjne
  warunek: "Postacie są przy dzwonach, gdy wybija pełna godzina."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Ogłuszający hałas, chwilowa dezorientacja (cena, nie bramka; liczby ustali mechanik). Ansel na dole zakrywa uszy i ucieka; wraca przy następnym spotkaniu."
  flagi_ustaw: []
  prowadzi_do: s1.scena.06
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: `flaga.wieza-zbadana`, `flaga.plakietka-crake`, `flaga.crake-poznany`, `flaga.crake-dluga-rozmowa`.

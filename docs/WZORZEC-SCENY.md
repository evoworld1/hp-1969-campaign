# Wzorzec sceny (krótka ściąga dla agentów)

Zamiast czytać całe sceny 01 albo 05 (700–870 linii), czytaj ten plik. Szczegóły formatu: `docs/KONTRAKT-DANYCH.md`. Wzorce w pełnej formie (tylko gdy musisz): `05_scenariusze/s1-godzina-ktorej-nie-bylo/sceny/05-chlopiec-przy-schodach.md`.

## Kolejność sekcji w pliku sceny
1. Nagłówek YAML: `id`, `typ: scena`, `tytul`, `status: szkic`, `sesja: s1`, `akt`, `kolejnosc`, `czas_min`, `cel`, `npc`, `miejsca`, `przedmioty`, `handouty`, `flagi_wejscie`, `flagi_wyjscie`, `nastepne`, `tagi`, `zrodla`. Identyfikatory tylko istniejących obiektów; flagi tylko z `04_kampania/flagi.yaml`.
2. `## Do odczytania`: numerowane teksty „### 1. Tytuł (kiedy czytać)”, każdy do ok. 150 słów, w cytacie `>`, druga osoba lub neutralnie, zmysłowo, bez decydowania za graczy.
3. `## Dla MG`: „Co się naprawdę dzieje”, „### Rytm sceny” (kroki, niżej), rady dla MG prowadzącego początkujących (2–3 graczy, pierwsza sesja RPG), „Linie i zasłony”, punkt pauzy, jeśli jest.
4. `## Obecni`: każda postać: co robi, czego chce w tej scenie, sygnał do pokazania, reakcja na zaczepkę.
5. `## Dialogi`: bloki `dialog` (niżej), każdy z krótkim wstępem prozą.
6. `## Testy`: bloki `test` (niżej) i krótkie rady (Oko, RETRORSUM, Drained).
7. `## Rozgałęzienia`: bloki `rozgalezienie` główne i poboczne.
8. `## Gdy gracze zboczą`: bloki `rozgalezienie` z `rodzaj: awaryjne`, każdy z `prowadzi_do` (prawdziwy id sceny).
9. `## Drabinka podpowiedzi`: blok `podpowiedzi`.
10. `## Konsekwencje`: lista, co MG zapisuje po scenie.

## Konwencja kroków (w „Rytm sceny”)
```
**Krok N. Nazwa** (ok. N min)
- Czytaj: tekst <nr> („<pierwsze słowa>…”)
- Dialog: `<id-dialogu>` — „<kwestia otwierająca, dosłownie z bloku>”
- Test: `<id-testu>`
- Flagi: `flaga.<nazwa>`
- Krótko: co się dzieje, 1–2 zdania.
- Awaryjne: `awaryjne-<slug>`
```
MG ma mieć wszystko przy danym momencie: tekst, dialog, test, flagi i odsyłacz do ścieżki awaryjnej.

## Bloki danych (formy skrócone; pola obowiązkowe wg kontraktu)
```yaml
dialog:
  id: s1.scena.NN.dialog.<slug>
  npc: npc.<id>
  wyzwalacz: "kiedy zaczyna się dialog"
  ton: "jak brzmi postać"
  kwestie:
    - "Otwarcie: „…”"
    - "Gdy postać jest uprzejma: „…”"
    - "Gdy postać grozi albo kłamie: „…”"
    - "Nieprzewidziane: „…”"
    - "Może zdradzić bez warunku: …"
    - "Nie zdradza: …"
  wariant_od: []        # flagi z flagi.yaml, jeśli dialog zależy od stanu gry
```
```yaml
test:
  id: s1.scena.NN.test.<slug>
  opis: "co postać próbuje zrobić i co to daje"
  kto: jeden            # albo wszyscy
  rzut: "1D10 + Cecha + Umiejętność"
  trudnosc: "liczba (Walker s. 3: Straightforward 6, Tricky 12, Hard 18 …) albo test przeciwny"
  modyfikatory:
    - warunek: "…"
      wartosc: "+N / −N / bez rzutu"
  wyniki:
    - wynik: porazka-kompromitujaca   # także: porazka, sukces, sukces-imponujacy (≥2× trudność)
      efekt: "…"
      flagi_ustaw: []
```
```yaml
rozgalezienie:
  id: s1.scena.NN.rozgalezienie.<slug>   # awaryjne: …awaryjne-<slug>
  rodzaj: glowne        # albo poboczne, awaryjne
  warunek: "kiedy to się dzieje"
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "co mówi i robi świat, jak wracamy na tor"
  flagi_ustaw: []
  prowadzi_do: s1.scena.NN
```
```yaml
podpowiedzi:
  id: s1.scena.NN.podpowiedzi
  szturchniecie: "…"
  wieksza: "…"
  bezposrednia: "…"
```

## Zasady treści (skrót)
- Liczby testów z `02_zasady/walker/` (numery stron) i zasad domowych `02_zasady/walker/luki-i-niejasnosci.md` (ZD-21 Tempus, ZD-24 zaklęcia ujawniające nie wykrywają magii czasu). Podaj szanse dla archetypów z `03_postacie/instrukcja-tworzenia-postaci.md`.
- Dialogi w głosie z kart `03_postacie/npc/`. Wymysły kampanii: `pewnosc: nasze`; niepewny kanon: `pewnosc: niepewne` plus punkt w „Do weryfikacji”.
- Nie kopiuj tekstu Rowling. Zasady Walkera streszczaj własnymi słowami.
- Polski w tekstach, terminy Walkera po angielsku z objaśnieniem przy pierwszym użyciu w pliku.
- Gdy NPC nie ma karty, nie wpisuj go do `npc:` w nagłówku; opisz go w tekście i zgłoś brak w raporcie.

## Walidator
Agenci bez narzędzia Bash (narrator-scen, dialogista, tworca-npc, planista-awaryjny) nie uruchomią walidatora; robi to Reżyser: `python3 narzedzia/walidator.py`.

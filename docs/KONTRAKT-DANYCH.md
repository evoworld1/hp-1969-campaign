# Kontrakt danych

Wersja kontraktu: **1.0** (18.11.2026)

Ten dokument opisuje, jak zbudowane są pliki treści kampanii. Ma dwóch czytelników:
1. **Zespół autorski** (agenci z `.claude/agents/`): pisze pliki według tych zasad.
2. **Zespół od panelu webowego MG**: wczytuje te pliki i buduje na ich podstawie interfejs.

Zmiana kontraktu wymaga zgody użytkownika, podniesienia numeru wersji i wpisu w sekcji „Historia zmian” na końcu.

---

## 1. Zasady ogólne

1. Plik treści to plik `.md` z **nagłówkiem YAML** (frontmatter) między liniami `---` na samej górze.
2. Treść pod nagłówkiem to Markdown z **ustalonymi nagłówkami sekcji `##`** dla danego typu (patrz rozdział 4). Kolejność sekcji jest stała, a nazwy sekcji są dokładnie takie jak w szablonie.
3. Dane mechaniczne i logiczne (testy, rozgałęzienia, dialogi warunkowe, drabinki podpowiedzi, statystyki) zapisujesz w **blokach danych**: ogrodzonych blokach ```` ```yaml ````, których pierwszy klucz określa rodzaj bloku (rozdział 5).
4. Odwołania do innych obiektów zawsze zapisujesz **identyfikatorem** (`id`), nigdy ścieżką pliku.
5. W tekście prozy możesz odwołać się do obiektu wikilinkiem `[[npc.cassian-vane]]`. Panel zamieni go na odnośnik.
6. Pliki z `README.md` w nazwie oraz foldery `00_zrodla/`, `docs/`, `99_robocze/`, `.claude/`, `schemas/` i `narzedzia/` **nie są treścią** i walidator je pomija.

## 2. Identyfikatory (`id`)

- Tylko małe litery a–z, cyfry, kropki i łączniki. Bez polskich znaków i spacji.
- Wzorzec ogólny: `^[a-z0-9]+(\.[a-z0-9-]+)*$`. Każdy typ ma też własny, węższy wzorzec w `schemas/`.
- Identyfikator musi być **unikalny** w całym repozytorium i **nie zmienia się** po nadaniu. Gdy zmienia się nazwa obiektu, zmieniasz `tytul`, nie `id`.

| Rodzaj obiektu | Wzorzec | Przykład |
|---|---|---|
| Scenariusz | `sN` | `s1` |
| Scena | `sN.scena.NN` | `s1.scena.07` |
| Handout | `sN.handout.slug` | `s1.handout.karta-pozyczajacego` |
| NPC | `npc.slug` | `npc.cassian-vane` |
| Miejsce | `miejsce.slug` | `miejsce.wieza-zegarowa` |
| Przedmiot | `przedmiot.slug` | `przedmiot.folial-marrow` |
| Wpis kanonu | `kanon.slug` | `kanon.kadra-hogwartu-1969` |
| Zasada | `zasada.slug` | `zasada.pojedynki` |
| Tracker (licznik, rejestr) | `tracker.slug` | `tracker.zegar-polnocy` |
| Wątek fabularny | `watek.slug` | `watek.patron` |
| Flaga stanu | `flaga.slug` | `flaga.cassian-zdemaskowany` |
| Dziennik sesji | `dziennik.sN.rrrr-mm-dd` | `dziennik.s1.2026-12-05` |
| Blok danych w pliku | `<id-pliku>.<rodzaj>.slug` | `s1.scena.07.test.czytanie-sygnalu` |

## 3. Pola wspólne nagłówka (każdy typ)

| Pole | Wymagane | Typ | Opis |
|---|---|---|---|
| `id` | tak | tekst | Identyfikator wg rozdziału 2 |
| `typ` | tak | wybór | `scenariusz`, `scena`, `npc`, `miejsce`, `przedmiot`, `handout`, `kanon`, `zasada`, `tracker`, `watek`, `dziennik-sesji` |
| `tytul` | tak | tekst | Nazwa wyświetlana, po polsku |
| `status` | tak | wybór | `szkic`, `recenzja`, `gotowe` |
| `tylko_mg` | nie | tak/nie | `true`, jeśli gracze nie mogą tego zobaczyć (domyślnie `true`, z wyjątkiem handoutów) |
| `tagi` | nie | lista | Dowolne słowa kluczowe |
| `zrodla` | nie | lista | Skąd pochodzi treść, np. `Walker 2e s. 31` albo `archiwum: modul-s1-v0` |
| `aktualizacja` | nie | data | `RRRR-MM-DD` ostatniej istotnej zmiany |

## 4. Typy plików

Pełne wymagania pól są w `schemas/<typ>.schema.json`, a gotowe wzory plików w `docs/szablony/<typ>.md`. Poniżej skrót.

### 4.1 `scenariusz`: przegląd jednego scenariusza
Pola: `numer` (liczba), `sceny` (lista identyfikatorów scen w kolejności bazowej), `czas_min`, `gracze` (np. `3-4`).
Sekcje: `## Zarys`, `## Co sesja musi zapewnić`, `## Prawda dla MG`, `## Stałe i elastyczne`, `## Przebieg w skrócie`, `## Rozwidlenie końcowe`.

### 4.2 `scena`
Pola: `sesja`, `akt`, `kolejnosc` (liczba), `czas_min`, `cel`, `npc`, `miejsca`, `przedmioty`, `handouty`, `flagi_wejscie`, `flagi_wyjscie`, `nastepne` (listy identyfikatorów).
Sekcje (w tej kolejności):
1. `## Do odczytania`: proza czytana graczom.
2. `## Dla MG`: co się naprawdę dzieje i jak prowadzić scenę.
3. `## Obecni`: kto jest w scenie i czego chce.
4. `## Dialogi`: proza i bloki `dialog`.
5. `## Testy`: bloki `test`.
6. `## Rozgałęzienia`: bloki `rozgalezienie`.
7. `## Gdy gracze zboczą`: bloki `rozgalezienie` z polem `rodzaj: awaryjne`.
8. `## Drabinka podpowiedzi`: blok `podpowiedzi`.
9. `## Konsekwencje`: co zapisać w stanie kampanii.

### 4.3 `npc`
Pola: `imie`, `rola`, `dom` (lub `brak`), `rocznik_1969` (np. `6 rok`, `nauczyciel`), `kanon` (tak/nie: czy postać pochodzi z kanonu), `pewnosc` (`kanon`, `niepewne`, `nasze`), `sceny` (lista).
Sekcje: `## W skrócie`, `## Wygląd i sposób bycia`, `## Głos`, `## Czego chce`, `## Sekret`, `## Sygnały`, `## Reakcje`, `## Mechanika` (blok `statystyki`), `## Do weryfikacji`.

### 4.4 `miejsce`
Pola: `lokalizacja` (np. `Hogwart, wschodnie skrzydło`), `sceny`.
Sekcje: `## Do odczytania`, `## Dla MG`, `## Ukryte`, `## Testy`.

### 4.5 `przedmiot`
Pola: `rodzaj` (np. `artefakt`, `dokument`), `wlasciciel_start` (identyfikator lub `brak`), `sceny`.
Sekcje: `## Opis`, `## Działanie`, `## Mechanika`, `## Dla MG`.

### 4.6 `handout`: materiał dla graczy
Pola: `sesja`, `tylko_mg: false`, `pokaz_w` (lista scen).
Sekcje: `## Treść` (dokładnie to, co widzą gracze), `## Uwagi dla MG`.

### 4.7 `kanon`: fakt o świecie
Pola: `kategoria` (`osoby`, `miejsca`, `polityka`, `magia`, `chronologia`), `pewnosc` (`kanon`, `niepewne`, `nasze`).
Sekcje: `## Treść`, `## Źródła`, `## Do weryfikacji`.

### 4.8 `zasada`: mechanika
Pola: `kategoria` (`rdzen`, `magia`, `pojedynki`, `rozwoj`, `fabularna`), `pochodzenie` (`walker`, `domowa`), `strony` (np. `Walker 2e s. 30-32`; wymagane, gdy `pochodzenie: walker`).
Sekcje: `## Streszczenie`, `## Jak używać przy stole`, `## Przykład`, `## Uwagi`.

### 4.9 `tracker`: licznik lub rejestr prowadzony w trakcie gry
Pola: `rodzaj` (`licznik`, `rejestr`, `wiez`), `zakres` (np. `0-6`, opcjonalnie), `zasieg` (`scena`, `sesja`, `kampania`), `progi` (lista `{wartosc, efekt}`, opcjonalnie).
Sekcje: `## Do czego służy`, `## Kiedy zmieniać`, `## Progi i skutki`.

### 4.10 `watek`: wątek fabularny
Pola: `stan` (`uspiony`, `aktywny`, `zamkniety`), `sesje`.
Sekcje: `## Prawda`, `## Co wiedzą gracze`, `## Jak może się rozwinąć`.

### 4.11 `dziennik-sesji`
Pola: `sesja`, `data_gry`, `gracze` (lista), `sciezka` (wybrane rozwidlenie).
Sekcje: `## Przebieg`, `## Decyzje graczy`, `## Zmiany w stanie kampanii`, `## Notatki MG`.

## 5. Bloki danych

Każdy blok to ogrodzony blok kodu oznaczony `yaml`, którego **pierwszy klucz** to rodzaj bloku. Każdy blok ma własne `id`. Zasady mechaniczne (nazwy cech, umiejętności i poziomów wyniku) ustala `mechanik` w `02_zasady/walker/` i tam definiuje dozwolone wartości. Do tego czasu pola mechaniczne mogą mieć wartość `DO-USTALENIA`.

### 5.1 `test`
```yaml
test:
  id: s1.scena.01.test.tempus
  opis: "Każdy uczeń próbuje rzucić Tempus na lekcji Flitwicka."
  kto: kazdy            # kazdy | jeden | grupa | npc
  rzut: "DO-USTALENIA"  # zapis rzutu wg Walkera, np. cecha + umiejętność
  trudnosc: "DO-USTALENIA"
  modyfikatory:
    - warunek: "Uczeń nazwał sygnał na głos na OPCM"
      wartosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces     # wartości z 02_zasady/walker (poziomy wyniku)
      efekt: "Cyfry trzymają się stabilnie."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Cyfry się rozsypują; korepetycje po lekcji."
      flagi_ustaw: []
```

### 5.2 `rozgalezienie`
```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.kradziez-zegarka
  rodzaj: glowne        # glowne | poboczne | awaryjne
  warunek: "Gracze kradną zegarek zamiast walczyć."
  wymaga_flag: [flaga.cassian-zdemaskowany]
  wyklucza_flagi: []
  efekt: "Cassian się targuje; pojedynek zostaje pominięty."
  flagi_ustaw: [flaga.zegarek-u-graczy]
  prowadzi_do: s1.scena.08   # identyfikator sceny albo „brak”
```

### 5.3 `dialog`
```yaml
dialog:
  id: s1.scena.06.dialog.cassian-oskarzony
  npc: npc.cassian-vane
  wyzwalacz: "Gracze oskarżają Cassiana publicznie."
  ton: "chłodny, potem roztrzęsiony"
  kwestie:
    - "…"
  wariant_od: []        # opcjonalnie: identyfikatory flag, które zmieniają kwestie
```

### 5.4 `podpowiedzi`
```yaml
podpowiedzi:
  id: s1.scena.04.podpowiedzi
  szturchniecie: "…"
  wieksza: "…"
  bezposrednia: "…"
```

### 5.5 `statystyki`: tylko w plikach `npc`
```yaml
statystyki:
  id: npc.cassian-vane.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}          # struktura zgodna z kartą postaci Walkera, ustala ją mechanik
  zdolnosci_specjalne:
    - nazwa: "Skradzione Chwile"
      opis: "…"
```

## 6. Rejestr flag: `04_kampania/flagi.yaml`

Każda flaga używana w treści musi być tu zdefiniowana:

```yaml
flagi:
  - id: flaga.cassian-zdemaskowany
    opis: "Gracze wiedzą, że Cassian kradnie czas."
    typ: bool           # bool | liczba | wybor
    wartosci: []        # dla typu „wybor”
    sesja: s1
```

## 7. Indeks dla panelu

`python3 narzedzia/walidator.py --indeks` generuje `indeks.json` w katalogu głównym. Plik zawiera wszystkie obiekty z nagłówkami, ścieżkami, listą bloków danych i flagami. Panel może czytać albo indeks, albo bezpośrednio pliki `.md`.

## 8. Czego panel może się spodziewać

- Status `gotowe` oznacza treść zaakceptowaną przez MG.
- Pola wymagane są zawsze obecne. Pola opcjonalne mogą nie istnieć, więc panel nie zakłada ich obecności.
- Teksty w sekcjach to Markdown (CommonMark) z wikilinkami `[[id]]`.

## Historia zmian

| Wersja | Data | Zmiana |
|---|---|---|
| 1.0 | 2026-11-18 | Pierwsza wersja |

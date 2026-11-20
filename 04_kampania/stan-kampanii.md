# Stan kampanii

Żywy plik: pamięć projektu między sesjami. Reżyser czyta go na początku każdej sesji i aktualizuje na końcu.

## Bieżąca faza
- **Faza:** 2 (Graf Scenariusza 1), **część A zakończona 2026-11-20**. Faza 1 zamknięta 2026-11-20.
- **Część A (zrobione):** instrukcja tworzenia postaci (`03_postacie/instrukcja-tworzenia-postaci.md`, szkic); graf Sesji 1 (`05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md`, szkic, 10 scen + prolog + wędrówki, 3 punkty pauzy); 32 flagi w `flagi.yaml`; raport symulatora graczy (3 problemy główne, 14 drobniejszych); streszczenie dla MG w `99_robocze/streszczenie-fazy-2a.md`.
- **Następny krok: część B** (nowa sesja; MG odpowiedział 2026-11-20, zob. rejestr decyzji): mechanik szacuje czas tworzenia postaci i w razie potrzeby upraszcza instrukcję (usuwa też wspólny dom); architekt-fabuly wprowadza decyzje MG (Patron Wymark, stracona godzina między lekcjami, mignięcia Ansela, legalne wejście do biblioteki, prolog na Pokątnej) i proponuje 2–3 warianty, dlaczego postacie z różnych domów tworzą drużynę i poprawki z raportu symulatora; poprawki wykonawcze bez pytania (zegarek odebrany Cassianowi przed sceną 04; spóźniony gracz traci godzinę poza kadrem; scenka u Dumbledore'a z niewidzialnym Anselem; Filch łapie graczy z dziennikiem → trzynasta i tak wybija; scena 09 maks. 2 przeszkody obowiązkowe; kontakt z Anselem liczony osobno dla każdej postaci; brakujące wartości flag: `skonfiskowany`, `inne`; „wybija trzynasty raz” zamiast „13:00”; Ślizgon w dormitorium Cassiana; budzenie postaci przy zegarze kradzieży 4); potem tworca-npc (szkice kart NPC, miejsc, przedmiotów), redaktor-ciaglosci, akceptacja grafu przez MG.
- **Do rozstrzygnięcia wykonawczo w części B:** `graf-scen.md` ma teraz id `s1` (typ scenariusz); zgodnie z `05_scenariusze/README.md` przegląd ma być w `przeglad.md`, więc przy tworzeniu przeglądu trzeba zmienić nazwę pliku albo zdjąć nagłówek z grafu.
- **Odłożone do scen:** liczby dla wyniku 2× i 3× trudności (ZD-09). Tempus: rozstrzygnięte 2026-11-20 (uczony na lekcji 6. roku).
- **Ostatnie podsumowanie rozmowy:** `99_robocze/summary-session#1.md` (2026-11-20). Następną sesję zacznij od `/faza 2` (część B).

### Faza 1, część A: co powstało
- `00_zrodla/walker-2e-draft-2026-04/tekst/`: wyciąg tekstu podręcznika (16 rozdziałów, znaczniki stron). Podręcznik jest jednym PDF (184 s.; numer drukowany = strona PDF − 5).
- `02_zasady/walker/`: 15 plików streszczeń zasad, `wartosci-dozwolone.md`, `luki-i-niejasnosci.md` (propozycje ZD-01 do ZD-23). Słownik uzupełniony o 41 terminów.
- `02_zasady/mechaniki-fabularne.md`: ocena Rejestru Danin, Więzi, Zegara Północy i Klepsydry.
- `01_kanon/`: 8 plików (chronologia, kadra, uczniowie, Ministerstwo, codzienność i magia, mugolska Wielka Brytania, Walker a kanon, przeniesienie archiwum na 1969 z wariantami P1–P13).
- Uwaga: wyciąg PDF ma nieczytelne miejsca (arkusz zaklęć s. 176–178, liczby trudności przedmiotów s. 74 i 76).

## Rejestr decyzji

| Data | Decyzja | Kto |
|---|---|---|
| 2026-11-18 | Akcja jesienią 1969 roku. Każda wzmianka o 1976 w archiwum to błąd. | MG |
| 2026-11-18 | System: Neil Walker, *Harry Potter The Roleplaying Game*, 2. edycja (szkic 02.04.2026), wersja angielska. Tłumaczenia na bieżąco. | MG |
| 2026-11-18 | Stara mechanika z archiwum (Drabina Wyników, progi k20) nie obowiązuje. Mechanika od zera na bazie Walkera. | MG |
| 2026-11-18 | Mechaniki fabularne (Rejestr Danin, Więź, Zegar Północy) zostają jako kandydaci do oceny przez agentów. | MG |
| 2026-11-18 | Archiwalny moduł i streszczenie to szkic kierunkowy, nie wersja ostateczna. | MG |
| 2026-11-18 | Praca wyłącznie w sesjach w chmurze. Format plików wg `docs/KONTRAKT-DANYCH.md` v1.0, pod przyszły panel webowy MG. | MG |
| 2026-11-18 | Język: narracja PL, terminy mechaniczne EN z objaśnieniem PL. | MG |
| 2026-11-19 | Ansel Dray zginął w 1951 roku (18 lat przed akcją). | MG |
| 2026-11-19 | Córka Crake'a zginęła w niewyjaśnionym incydencie uznanym za wypadek; w tle zamieszki przy marszach charłaków. | MG |
| 2026-11-19 | Dumbledore wie, że coś jest na rzeczy, ale zajmują go większe zagrożenia, więc odkłada sprawę. Magia czasu go nie dotknęła (chroni go jego wiedza), więc nigdy nie widział Ansela. | MG |
| 2026-11-19 | Ton: życie uczniowskie, wojna nadciąga, coś wisi w powietrzu, dziwne wydarzenia w szkole i poza nią. | MG |
| 2026-11-19 | Filch jest nowym woźnym. Tworzymy własnych nauczycieli Astronomii i Wróżbiarstwa. Kanoniczni uczniowie tylko w tle. | MG |
| 2026-11-19 | Zaklęcia Snape'a w 1969 nieznane. Zmieniacze czasu istnieją, ale to inny rodzaj magii niż Klepsydra Daniny. | MG |
| 2026-11-19 | „Voldemort” i „śmierciożercy”: w Sesji 1 pada plotka, w kolejnych sesjach coraz więcej wzmianek. | MG |
| 2026-11-19 | Postacie graczy zaczynają 6. rok nauki, tuż po SUM-ach (Standardowych Umiejętnościach Magicznych), wracają po wakacjach. | MG |
| 2026-11-19 | Więź z Anselem: osobno dla każdej postaci, od 0 do 3. Zabrane godziny kosztują stan Drained (+3 do trudności). | MG |
| 2026-11-19 | Zasady domowe z `luki-i-niejasnosci.md`: przyjęte propozycje mechanika. Poprawki MG: (1) wynik co najmniej 2 i 3 razy wyższy od trudności ma dawać też efekt mechaniczny (np. dodatkowe obrażenia), nie tylko narrację (ZD-09); (2) Tempus ma trudność 9 i nie jest zaklęciem podstawowym, więc nie rok 1 (ZD-21). Szczegóły zapisze mechanik później. | MG |
| 2026-11-19 | Rytm pracy: najwyżej 3–5 pytań naraz, każde z kontekstem i przykładem; bez odsyłania do archiwum i do wielkich plików. Zamiast tego krótki zarys do przeczytania. | MG |
| 2026-11-19 | Zarys kampanii (`zarys-kampanii.md`) zgodny z wizją MG. | MG |
| 2026-11-19 | Ansela widzą wszystkie postacie graczy (docelowo). Ścieżka dojścia do tego może być stopniowa, ale w Sesji 1 nikt nie zostaje bez kontaktu z chłopcem. | MG |
| 2026-11-19 | Sesja 1 kończy się cliffhangerem przy wyborze, co zrobić z dziennikiem i Anselem. Wynik wyboru ustawia Sesję 2. | MG |
| 2026-11-19 | Crake może pojawić się w Sesji 1 jako przelotna pogawędka. Dłuższa rozmowa tylko przy wyjątkowo wysokim wyniku testu spostrzegawczości (pomysł MG, szczegóły do ustalenia). | MG |
| 2026-11-19 | Patron: jeden ze śmierciożerców Voldemorta, który na jego prośbę zdobywa informacje o Klepsydrze i o tym, jak ją odnaleźć. Konkretna osoba jeszcze nieustalona. | MG |
| 2026-11-19 | Sesja 1 ma się zmieścić w 4–4,5 godziny (twardy limit czasu MG). | MG |
| 2026-11-20 | Przy stole 2–3 graczy. Dla wszystkich poza MG to pierwsza sesja gry fabularnej. | MG |
| 2026-11-20 | Gracze tworzą postacie sami, przed sesją; potrzebna prosta instrukcja krok po kroku. | MG |
| 2026-11-20 | Limit 4–4,5 h nie jest sztywny: jeśli się nie zmieścimy, przerywamy i wznawiamy od tego miejsca. Swoboda graczy ważniejsza od ściskania narracji (wędrówki po Hogwarcie, wyprawa na Pokątną np. po nową różdżkę). Scenariusz potrzebuje punktów pauzy i scen elastycznych. | MG |
| 2026-11-20 | Patron: **Silas Wymark** (nasza postać), w 1951 prefekt i asystent prof. Marrow, widział Klepsydrę; dziś zwerbowany śmierciożerca, który powiedział o niej Voldemortowi i znalazł Crake'a. Nazwisko Nott pada tylko w plotce. | MG |
| 2026-11-20 | Postacie tracą godzinę **między Zaklęciami a Obroną** (nie po obu lekcjach). | MG |
| 2026-11-20 | Ansela widzą też inne ofiary Cassiana, ale **tylko mignięciem**; po szkole krąży plotka o „duchu Puchona”. Rozmawiają z nim tylko postacie graczy. | MG |
| 2026-11-20 | Przyjęte: legalne wejście do biblioteki obok nocnego; Tempus uczony na lekcji 6. roku w Sesji 1 (nikt go nie zna na starcie); **Pokątna jako opcjonalny prolog** (MG: podoba się); godzinę traci cała drużyna naraz; data 22 września 1969; SUM zdany przy co najmniej 3 punktach; cechy rzadkie losowane z przerzutem przy 99–100; co najmniej 2 fakultety. | MG |
| 2026-11-20 | **Odrzucone: wspólny dom.** Gracze wybierają dowolne domy. Trzeba wymyślić uzasadnienie, dlaczego zbierają się w drużynę (np. klub, wspólne zadanie od profesora). | MG |
| 2026-11-20 | Jeśli tworzenie postaci według Walkera zajmie wszystkim graczom ponad godzinę, trzeba je uprościć (zadanie do wykonania). | MG |

## Otwarte pytania
1. **Dlaczego postacie z różnych domów tworzą drużynę?** Architekt-fabuly zaproponuje 2–3 warianty (np. klub, wspólny projekt lub szlaban u profesora, przydział do pary/grupy na lekcji) w części B; pytanie do MG.

## Zadania do wykonania
- **Uprościć tworzenie postaci**, jeśli zajmie ponad godzinę dla wszystkich graczy (mechanik: oszacować czas; w razie potrzeby wersja uproszczona, np. gotowe pakiety punktów albo szablony postaci). Instrukcja musi też usunąć rekomendację wspólnego domu.

**Odłożone do konkretnej sceny** (wrócą z przykładem, nie wcześniej): kim jest Patron i skąd się wziął; ojciec Cassiana; treść „Proroka Codziennego”; Rejestr Danin i Pożyczona Chwila; Zegar Północy; czy Klepsydra opiera się na Time twisting Walkera; zmiana kontraktu danych; Dziennik Lekcji. Źródła, gdyby były potrzebne: `01_kanon/przeniesienie-na-1969.md`, `02_zasady/mechaniki-fabularne.md`.

## Postęp

| Obszar | Stan |
|---|---|
| Szkielet projektu | zweryfikowany (Faza 0 zakończona 2026-11-18) |
| Podręcznik Walkera w `00_zrodla/` | jest (PDF + wyciąg tekstu) |
| Kanon 1969 | 8 plików, recenzja |
| Zasady (Walker) | 15 plików + ocena mechanik fabularnych, recenzja |
| Zarys kampanii 1969 | `04_kampania/zarys-kampanii.md`, recenzja (zatwierdzony przez MG) |
| Instrukcja tworzenia postaci | szkic |
| Scenariusz 1: graf | szkic (`graf-scen.md`), po teście symulatora, czeka na decyzje MG |
| Scenariusz 1: sceny | 0 / ? |

## Stan gry (wypełnia kronikarz po rozegranych sesjach)
- **Rozegrane sesje:** brak
- **Flagi:** brak
- **Trackery:** brak
- **Losy NPC:** brak
- **Przedmioty:** brak

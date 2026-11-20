# Stan kampanii

Żywy plik: pamięć projektu między sesjami. Reżyser czyta go na początku każdej sesji i aktualizuje na końcu.

## Bieżąca faza
- **Faza:** 2 **zamknięta 2026-11-20** (graf Scenariusza 1 zaakceptowany przez MG). Następna: **Faza 3 (sceny)**. Faza 1 zamknięta 2026-11-20.
- **Część B1 (zrobione):**
  - mechanik: szybka ścieżka tworzenia postaci (4 archetypy, około 30–35 minut zamiast 140–170); usunięta rada o wspólnym domu; decyzje MG wpisane do instrukcji; 4 nowe terminy w słowniku.
  - architekt-fabuly: graf podzielony na `przeglad.md` (id `s1`) i pomocniczy `graf-scen.md` bez nagłówka. Wprowadzone decyzje MG: Patron Wymark (`npc.silas-wymark`), stracona godzina między lekcjami (scena 03 to teraz stracona godzina, 04 to Obrona), mignięcia Ansela, legalna biblioteka, data 22.09.1969. Dodane wczesne sygnały dziwności w scenach 01–02, 7 siatek bezpieczeństwa i 37 flag. Rdzeń trwa około 4 h 20 min.
- **Odpowiedzi MG na pytania B1 wprowadzone (2026-11-20):** grupa Wrena i wspólny sekret z 4. roku (graf, przegląd, instrukcja tworzenia postaci z 5 pytaniami startowymi), odbicie Ansela w scenie 01, kotwica w „Prawdzie dla MG”, zaklęcia za zgodą MG. Nowe flagi: `ansel-odbicie`, `sekret-poruszony`.
- **Do potwierdzenia przed Sesją 3:** architekt zapisał w przeglądzie wniosek, że oddanie godziny **może** odebrać Anselowi kotwicę. To nie jest decyzja MG.
- **Część B2a (zrobione 2026-11-20):** tworca-npc utworzył 19 szkiców kart NPC w `03_postacie/npc/` (8 pełnych, 11 krótkich); redaktor-ciaglosci sprawdził; Reżyser naprawił drobne błędy (polszczyzna, kominek McGonagall, kwestia Ansela u Dumbledore'a, Sprout w 1951, objaśnienia terminów); w zarysie wpisany Patron Wymark. Walidator czysty (ostrzeżenia o nieużywanych flagach są oczekiwane do czasu scen).
- **Odpowiedzi MG na pytania B2a wprowadzone (2026-11-20):** tworca-npc ujednolicił karty (zob. rejestr decyzji).
- **Część B2b (zrobione 2026-11-20):** narrator-scen: 14 kart miejsc (`04_kampania/miejsca/`); tworca-npc: 7 przedmiotów (`04_kampania/przedmioty/`) i nagłówki 4 handoutów (`handouty/`). Po decyzjach MG: architekt-fabuly wprowadził zaklętą księgę do grafu (scena 09, trzy poziomy zabezpieczeń, ucieczka na 13 uderzeń, siatka bezpieczeństwa 8, trzy drogi do wskazówki o gablocie W7, nowe flagi `ksiega-zabezpieczenia` i `ksiega-zlapani`); tworca-npc: nowa karta `przedmiot.zakleta-ksiega`, notatnik Marrow, karta z księgi, Cassian, Ansel; mechanik: `02_zasady/nagrody-z-teaserow.md` (RETRORSUM, Oko, 8 kandydatów na klątwę), liczby zabezpieczeń, ucieczki i zniszczenia zegarka. Dwa przeglądy redaktora, poprawki wprowadzone. Walidator czysty.
- **Następny krok: Faza 3**, zaczynając od sceny 01 (komenda `/scena`). Kolejność agentów według `CLAUDE.md`. Przy każdej prośbie o akceptację Reżyser podaje MG plik do przeczytania.
- **Ostatnia poprawka Fazy 2 (2026-11-20):** architekt-fabuly usunął legalne wejście do biblioteki (przepustka Flitwicka, flagi `biblioteka-legalnie` i `przepustka-flitwicka`, karta przepustki); scena 09 tylko nocą, nowa siatka bezpieczeństwa 9 (Filch łapie w drodze).
- **Dla mechanika (Faza 3), dodatkowo:** zasady domowe niszczenia rzeczy zwykłym uderzeniem i celowania w mały przedmiot (propozycje w `zegarek-cassiana.md`); trudność galerii wahadeł (propozycja Tricky 12).
- **Dla strażnika kanonu:** czy pani Pomfrey pracuje w Hogwarcie w 1969; Slughorn w 1969; Fawkes w gabinecie w 1969; klepsydry punktów domów w kanonie.
- **Dla mechanika (Faza 3):** zdolności Cassiana (Skradzione Chwile, zegarek jako słaby punkt), premie za nazwanie nawyków Rosalind i Barnaby'ego, obchód Filcha jako przeciwnik, próg pogawędki z Crake'iem, czy Ansel potrzebuje liczb.
- **Dla mechanika przy scenach:** czy stan Drained działa już na lekcji Obrony; rdzeń ze smoczego serca a drewno „Oak” (s. 29, niejasność podręcznika).
- **Odłożone do scen:** liczby dla wyniku 2× i 3× trudności (ZD-09).
- **Ostatnie podsumowanie rozmowy:** `99_robocze/summary-session#3.md` (2026-11-20). Następną sesję zacznij od `/scena` (scena 01).

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
| 2026-11-19 | Sesja 1 kończy się cliffhangerem przy wyborze, co zrobić z dziennikiem (dziś: notatnikiem Marrow) i Anselem. Wynik wyboru ustawia Sesję 2. | MG |
| 2026-11-19 | Crake może pojawić się w Sesji 1 jako przelotna pogawędka. Dłuższa rozmowa tylko przy wyjątkowo wysokim wyniku testu spostrzegawczości (pomysł MG, szczegóły do ustalenia). | MG |
| 2026-11-19 | Patron: jeden ze śmierciożerców Voldemorta, który na jego prośbę zdobywa informacje o Klepsydrze i o tym, jak ją odnaleźć. Konkretna osoba jeszcze nieustalona. | MG |
| 2026-11-19 | Sesja 1 ma się zmieścić w 4–4,5 godziny (twardy limit czasu MG). | MG |
| 2026-11-20 | Przy stole 2–3 graczy. Dla wszystkich poza MG to pierwsza sesja gry fabularnej. | MG |
| 2026-11-20 | Gracze tworzą postacie sami, przed sesją; potrzebna prosta instrukcja krok po kroku. | MG |
| 2026-11-20 | Limit 4–4,5 h nie jest sztywny: jeśli się nie zmieścimy, przerywamy i wznawiamy od tego miejsca. Swoboda graczy ważniejsza od ściskania narracji (wędrówki po Hogwarcie, wyprawa na Pokątną np. po nową różdżkę). Scenariusz potrzebuje punktów pauzy i scen elastycznych. | MG |
| 2026-11-20 | Patron: **Silas Wymark** (nasza postać), w 1951 prefekt i asystent prof. Marrow, widział Klepsydrę; dziś zwerbowany śmierciożerca, który powiedział o niej Voldemortowi i znalazł Crake'a. Nazwisko Nott pada tylko w plotce. | MG |
| 2026-11-20 | Postacie tracą godzinę **między Zaklęciami a Obroną** (nie po obu lekcjach). | MG |
| 2026-11-20 | Ansela widzą też inne ofiary Cassiana, ale **tylko mignięciem**; po szkole krąży plotka o „duchu Puchona”. Rozmawiają z nim tylko postacie graczy. | MG |
| 2026-11-20 | Przyjęte: ~~legalne wejście do biblioteki obok nocnego~~ (odwołane 2026-11-20, zob. niżej); Tempus uczony na lekcji 6. roku w Sesji 1 (nikt go nie zna na starcie); **Pokątna jako opcjonalny prolog** (MG: podoba się); godzinę traci cała drużyna naraz; data 22 września 1969; SUM zdany przy co najmniej 3 punktach; cechy rzadkie losowane z przerzutem przy 99–100; co najmniej 2 fakultety. | MG |
| 2026-11-20 | **Odrzucone: wspólny dom.** Gracze wybierają dowolne domy. Trzeba wymyślić uzasadnienie, dlaczego zbierają się w drużynę (np. klub, wspólne zadanie od profesora). | MG |
| 2026-11-20 | Jeśli tworzenie postaci według Walkera zajmie wszystkim graczom ponad godzinę, trzeba je uprościć (zadanie do wykonania). | MG |
| 2026-11-20 | **Drużyna:** na co dzień postacie są w jednej mieszanej grupie ćwiczeniowej prof. Wrena na Obronie („wojna nie pyta o dom”); Cassian w rywalizującej grupie. Głębiej łączy je wspólny sekret z 4. roku, który ustalają gracze przy tworzeniu postaci. Odrzucone: zespół Flitwicka, Koło Astronomiczne, szlaban u Filcha. | MG |
| 2026-11-20 | Przed straconą godziną Ansel może mignąć tylko jako odbicie w szkle zegara. | MG |
| 2026-11-20 | Z Anselem rozmawiają tylko postacie graczy, bo ich wspólnie zabrana godzina stała się jego kotwicą (wyjaśni to notatnik Marrow w Sesji 2). | MG |
| 2026-11-20 | Zaklęcia, które mogą rozwiązać śledztwo jednym rzutem (Homonculous Charm, Obliviate, Legilimens, Amortentia), w pełnej ścieżce tworzenia postaci tylko za zgodą MG; w szybkiej ścieżce ich nie ma. | MG |
| 2026-11-20 | Astronomii uczy **prof. Ada Fairweather** (ok. 30 lat), w 1951 pierwszoroczna z rocznika Ansela; nie pamięta go, ale na zdjęciu klasy jest puste miejsce. | MG |
| 2026-11-20 | Tobias Quill: MG przed sesją przypisuje go do domu postaci z najmniejszą liczbą znajomych (lub najbardziej nieśmiałego gracza). | MG |
| 2026-11-20 | Wymark w Sesji 1 tylko jako ślad: Fairweather wspomina „wysokiego prefekta, którego wołaliśmy Bocian” (`flaga.wymark-slad`). | MG |
| 2026-11-20 | Ansela pamiętają oboje: Gruby Mnich w Sesji 1 tylko mgliście, Szara Dama w Sesji 2 opowiada o 1951. | MG |
| 2026-11-20 | Ansel zginął **jesienią 1951** (rok szkolny 1951/52); Wymark był wtedy prefektem 7. roku. | MG |
| 2026-11-20 | Przyjęte wersje robocze kart: Wymark z Ravenclawu (ok. 35 lat), córka Crake'a Nora, zegarek Cassiana po dziadku, Wren odszedł z biura aurorów po oskarżeniu niewinnego, Barnaby Finch z Gryffindoru. | MG |
| 2026-11-20 | W pracowni Marrow jest **zaklęta księga nieznanego autora** o zapomnianej magii czasu: lewituje nad ozdobnym pulpitem w niebieskawej łunie, nie da się jej zabrać ani przewracać stron, odblokowują ją zagadki (Sesja 2+). Próby siłowe uruchamiają stopniowane zabezpieczenia: delikatne porażenie, potem coraz silniej, przy wyrywaniu kartki ucieczka albo ciężkie obrażenia, zapomnienie, w skrajności śmierć (tylko po dwóch ostrzeżeniach). | MG |
| 2026-11-20 | **Notatnik Marrow** (w gablocie) to jej przemyślenia i szkice Klepsydry oparte na księdze; księga i notatnik są sobie potrzebne do rozszyfrowania; notatnik ostrzega przed siłowym korzystaniem z księgi. Gablota otwiera się po oddaniu godziny, a gracze dostają do tego trzy drogi wskazówek. | MG |
| 2026-11-20 | **Karta Pożyczającego** jest wyrwana z księgi: Cassian nie rozwiązał zagadek, wyrwał kartę, uruchomił zabezpieczenia i ledwo uciekł. Gracze mogą jej użyć tylko z zegarkiem Cassiana (zakończenie „moc”). | MG |
| 2026-11-20 | Zatrzymane zegary w pracowni to „zapłaty” z 1951 za trwanie Ansela. Zniszczenie zegarka Cassiana: Ansel migocze i wraca część skradzionych godzin. Klepsydra z lekcji Fairweather zostaje niejasna do Sesji 2. Zegary u Dumbledore'a chodzą idealnie równo; Marrow na zdjęciu z 1951 zerka poza kadr. | MG |
| 2026-11-20 | **Teasery przed kampanią:** zwój z zaklęciem RETRORSUM (z małej wieży obserwacyjnej; ta sama rodzina magii co księga; pojawił się tam Ansel, nie przedstawił się) i zdolność „Oko, które dostrzega ukryte”. Gracz 1 ma oba, gracze 2 i 3 tylko Oko; ostateczny podział MG ustala w dniu sesji. | MG |
| 2026-11-20 | **RETRORSUM:** raz na sesję pewny sukces w następnym rzucie; piętno na różdżce bez negatywnych skutków. Drugie użycie w tej samej sesji łamie pieczęć: trwała klątwa, która ujawnia się z czasem (wybór wariantu otwarty). | MG |
| 2026-11-20 | Klątwa za drugie RETRORSUM w sesji: **„Ten drugi”** (przy ważnych wyborach głos własnej wersji z cofniętej chwili, raz pomaga, raz kłamie) + siwe pasmo włosów. Pozostałe warianty w archiwum pomysłów. | MG |
| 2026-11-20 | **RETRORSUM to prawdziwe cofnięcie czasu:** rzucający cofa wszystko i wszystkich, nowa linia czasu zastępuje starą (rozgałęzienie jak w teorii wieloświata); pamięta tylko rzucający, inni niczego nie odczuwają; zaklęcie działa tylko na użytkownika. | MG |
| 2026-11-20 | Oko niewykorzystane w Sesji 1 przechodzi na Sesję 2. Próba wyrwania kartki z księgi zostawia w dłoni róg z jednym znakiem (przyda się przy zagadkach w Sesji 2). Zwrot karty księdze: w Sesji 1 nic (łuna jaśnieje), w Sesji 2 odsłania pierwszą zagadkę. | MG |
| 2026-11-20 | Przyjęte drobiazgi: Ansel rozpoznany z teasera ma wrażenie, że zna graczy; rysunek, „XIII” i dopisek na karcie to marginalia Marrow; Ansel bywał w pracowni w 1951. | MG |
| 2026-11-20 | Zniszczenie zegarka Cassiana nie oddaje godziny drużyny (jest kotwicą Ansela); wracają tylko godziny innych ofiar. | MG |
| 2026-11-20 | **Trzecie RETRORSUM w sesji** niszczy podwójnie napiętnowaną różdżkę i zostawia trwałe blizny na dłoni i przedramieniu; zaklęcie wtedy nie działa. | MG |
| 2026-11-20 | **Granica cofnięcia RETRORSUM:** gracz mówi, jak daleko się cofa; MG potwierdza albo sam wybiera chwilę (najlepiej tuż przed błędem); gracz odzyskuje wszystkie punkty i akcje i dostaje pewny sukces. | MG |
| 2026-11-20 | **Do Działu Ksiąg Zakazanych i pracowni tylko nocą, bez zgody.** Nie ma przepustki Flitwicka ani innego legalnego wejścia (odwołuje wcześniejszą decyzję). | MG |
| 2026-11-20 | **Graf Scenariusza 1 zaakceptowany** (z powyższą poprawką). Faza 2 zamknięta. | MG |
| 2026-11-20 | Gdy Filch złapie całą drużynę w drodze do biblioteki (siatka 9): szlaban, a po północy Ansel ich budzi i próbują drugi raz tej samej nocy, ostrożniej. | MG |

## Otwarte pytania
- Brak pytań fabularnych. (Siatka 9 rozstrzygnięta 2026-11-20: wariant A.)
- Kto ma RETRORSUM: MG rozstrzyga w dniu sesji. Autor księgi i jej zagadki: Sesja 2 i później.
- Zasada pracy: przy każdej prośbie o akceptację podawać MG link do krótkiego streszczenia albo pliku.

## Zadania do wykonania
- Brak pilnych. Tworzenie postaci uproszczone (szybka ścieżka) 2026-11-20.

**Odłożone do konkretnej sceny** (wrócą z przykładem, nie wcześniej): kim jest Patron i skąd się wziął; ojciec Cassiana; treść „Proroka Codziennego”; Rejestr Danin i Pożyczona Chwila; Zegar Północy; czy Klepsydra opiera się na Time twisting Walkera; zmiana kontraktu danych; Dziennik Lekcji. Źródła, gdyby były potrzebne: `01_kanon/przeniesienie-na-1969.md`, `02_zasady/mechaniki-fabularne.md`.

## Postęp

| Obszar | Stan |
|---|---|
| Szkielet projektu | zweryfikowany (Faza 0 zakończona 2026-11-18) |
| Podręcznik Walkera w `00_zrodla/` | jest (PDF + wyciąg tekstu) |
| Kanon 1969 | 8 plików, recenzja |
| Zasady (Walker) | 15 plików + ocena mechanik fabularnych, recenzja |
| Zarys kampanii 1969 | `04_kampania/zarys-kampanii.md`, recenzja (zatwierdzony przez MG) |
| Instrukcja tworzenia postaci | szkic (pełna i szybka ścieżka) |
| Scenariusz 1: graf | szkic (`przeglad.md` + `graf-scen.md`), decyzje MG wprowadzone, miejsca, przedmioty i handouty jako szkice; **zaakceptowany przez MG 2026-11-20** (streszczenie: `99_robocze/streszczenie-grafu-s1.md`) |
| Scenariusz 1: NPC | 19 szkiców w `03_postacie/npc/`, decyzje MG wprowadzone |
| Scenariusz 1: sceny | 0 / ? |

## Stan gry (wypełnia kronikarz po rozegranych sesjach)
- **Rozegrane sesje:** brak
- **Flagi:** brak
- **Trackery:** brak
- **Losy NPC:** brak
- **Przedmioty:** brak

---
id: zasada.mechaniki-fabularne
typ: zasada
tytul: "Ocena mechanik fabularnych: Rejestr Danin, Więź z Anselem, Zegar Północy, Klepsydra Daniny"
status: recenzja
kategoria: fabularna
pochodzenie: domowa
strony: "Walker 2e s. 3-4, 31-32, 35-36, 71-76 (odniesienia; same mechaniki są kampanijne)"
tagi: [mechaniki-fabularne, rejestr-danin, wiez, zegar-polnocy, klepsydra-daniny, danina-czasu, time-twisting, story-points, ocena, do-decyzji-mg]
zrodla: ["archiwum: modul-s1-v0", "archiwum: streszczenie-kampanii-v0", "Walker 2e, szkic 2026-04 (EN)"]
aktualizacja: 2026-11-18
---
## Streszczenie

**To jest dokument oceny, a nie obowiązująca zasada.** Nic z poniższych propozycji nie działa przy stole, dopóki MG nie zdecyduje. Zatwierdzone elementy trafią do `02_zasady/zasady-domowe.md`, a liczniki do osobnych plików typu `tracker` (dopiero w kolejnej sesji pracy, po decyzji). Archiwum (`modul-s1-v0`, `streszczenie-kampanii-v0`) traktujemy jako szkic kierunkowy: bierzemy pomysły, nie liczby. Stara skala wyników archiwum („Błyskotliwy sukces / Sukces / Prawie / Pudło / Odrzut”) nie obowiązuje; poniżej każde odwołanie do wyniku używa poziomów Walkera z [[zasada.walker-testy]].

Uwaga o typie pliku: kontrakt danych nie ma osobnego typu dla „dokumentu oceny”, więc plik ma typ `zasada`, `kategoria: fabularna`, `pochodzenie: domowa`. Pole `pochodzenie` zna tylko `walker` i `domowa`, przez co ten plik wygląda w panelu jak zasada domowa, choć nią jeszcze nie jest. Zob. „Uwagi”.

### Rekomendacje w skrócie

| Mechanika | Ocena | Rekomendacja w jednym zdaniu |
|---|---|---|
| Rejestr Danin | **zostawić i przepisać** | Tajny rejestr kosztów pożyczonego czasu z progami eskalacji; „Pożyczona Chwila” działa jak dorzut kości ze Story Points, ale płaci za nią ktoś inny. |
| Więź z Anselem | **zostawić i przepisać** | Licznik 0–3 na postać (typ trackera `wiez`), bez rzutów; Walker nie ma mechaniki relacji, więc niczego nie dubluje. |
| Zegar Północy | **zostawić, scalić z testem przeciwnym Walkera** | Licznik sceny 0–6 napędzany poziomami wyniku Walkera; przy 6 nie ma automatycznej wpadki, tylko jeden test przeciwny Stealth kontra Observation Filcha. |
| Klepsydra Daniny / danina czasu | **oprzeć na Time twisting** | Klepsydra to przedmiot zaczarowany z właściwością Time twisting (s. 71–72); danina to kampanijna cena tej właściwości, rozliczana w Rejestrze Danin, a nie osobny podsystem magii. |

Łączne obciążenie MG przy rekomendowanych wariantach: jeden licznik tylko w scenach nocnych (Zegar), trzy lub cztery liczby 0–3 (Więź), dopisek w Rejestrze tylko wtedy, gdy ktoś pożycza czas.

## Jak używać przy stole

### 1. Rejestr Danin

**Czemu służy w opowieści.** To tu mieszka moralny ciężar kampanii: każda skradziona chwila ma ofiarę. Rejestr pozwala MG pokazać koszt z opóźnieniem („następnego ranka”), tak żeby pokusa najpierw smakowała, a dopiero potem bolała.

**Jak działał w archiwum.** Tajna lista: kto użył pożyczonego czasu (Cassian albo postacie graczy), kto stracił i ile. Pierwsze użycia kosztują minuty, cena rośnie w kolejnych sesjach. Źródłem użyć była sztuczka „Borrow a Moment” ze ściany w Sali Zatrzymanych Godzin („raz na sesję powtórz dowolny rzut, danina spada na kogoś w pobliżu”). Archiwum używało Rejestru także jako notatnika na wszystko (plakietka „Crake i Córka”, „coś zauważyło”, przydomki „Dający”, „Wyłamujący”).

**Przełożenie na Walkera (propozycja).**
- **Pożyczona Chwila** (nazwa robocza zamiast „Borrow a Moment”): po **nieudanym** teście standardowym lub przeciwnym postać dorzuca 1D10 do wyniku, dokładnie jak przy wydaniu Story Point (s. 4). Nie kosztuje Story Points. Kosztuje wpis w Rejestrze. Zgodnie z duchem s. 4: do jednego rzutu najwyżej jeden dorzut, z dowolnego źródła (Story Point **albo** Pożyczona Chwila). Limit: raz na sesję na postać.
- **Nauka przy ścianie** (zamiast archiwalnej tabeli wyników): jeden test 1D10 + Focus + Charms przeciw Challenging (15), z kartą poziomów Walkera: Embarrassing failure: danina spada na czytającego (traci godzinę teraz); Failure: nie rozumie diagramów, Zegar Północy +1; Success: zna Pożyczoną Chwilę; Impressive success: zna ją i rozumie zasadę „danina dana jest darem, zabrana jest kradzieżą”. To nie jest zaklęcie z kratkami (s. 31, 40), tylko wiedza; świadomie nie wpisujemy go do arkusza magii, żeby nie dało się go „opanować” i używać bez ceny.
- **Wpis w Rejestrze** (prowadzi MG, gracze go nie widzą): kto pożyczył, kto zapłacił, ile, kiedy, czy koszt już pokazano. Ofiarę wybiera MG według prostej zasady: im bliżej postaci odbywa się pożyczanie i im częściej, tym bliższa jej osoba płaci.
- **Progi eskalacji** (liczone dla użyć postaci graczy w całej kampanii; wpisy Cassiana są tłem i nie podnoszą progu):

| Użycia | Ile płaci ofiara | Co widać |
|---|---|---|
| 1–2 | minuty | nic; uczucie déjà vu u obcych |
| 3–4 | godzina | koszt widoczny następnego ranka u NPC z otoczenia (spóźnienie, przegapiona lekcja, posiwiałe pasmo) |
| 5–6 | dni albo wspomnienie | płaci ktoś bliski (przyjaciel zapomina własne urodziny); ktoś dorosły zaczyna zauważać |
| 7+ | rozliczenie | świat reaguje (Dumbledore, Ministerstwo albo Patron); pożyczający zaczyna płacić sam |

- **Gdy płaci postać gracza:** traci godzinę fabularnie (przegapia scenę, lekcję, spotkanie). Brak w podręczniku zasady utraty czasu; proponujemy bez kółek na torze umysłu, chyba że strata jest gwałtowna (pułapka wahadła: 2 kółka Mind, Dazed, s. 35–36).
- **Powiązanie z Anselem:** archiwum mówi, że Ansela widzą tylko ci, którzy stracili czas. Rejestr staje się więc także listą osób, które mogą go zobaczyć. Jedna lista, dwie funkcje, zero dodatkowej buchalterii.
- **Powiązanie ze Story Points:** dobrowolne oddanie godziny (gablota z Foliałem) to podręcznikowy przykład „bycia niesamowitym” albo osobistego zwycięstwa (s. 4), więc może dać Story Point. To zwykła zasada Walkera, nie nowa reguła.
- **Porządki:** ziarna fabularne (plakietka „Crake i Córka”) i sygnały („coś zauważyło”) przenosimy do flag w `04_kampania/flagi.yaml`. Rejestr zapisuje wyłącznie czas: kto, komu, ile.

**Ocena: zostawić i przepisać.** Wartość dramatyczna najwyższa z trzech mechanik, bo niesie główny temat kampanii. Obciążenie MG małe (dopisek tylko przy pożyczaniu). Nie dubluje Walkera, ale **częściowo pokrywa się ze Story Points**: archiwalne „powtórz dowolny rzut” byłoby silniejsze od podręcznikowego dorzutu 1D10 i obchodziłoby jego ograniczenia. Dlatego proponujemy ten sam efekt co Story Point, tylko z inną walutą: punkt kosztuje gracza, Pożyczona Chwila kosztuje kogoś innego.

**Warianty (decyzja twórcza):**
- **A. Sam dziennik.** Rejestr bez progów; MG dowolnie decyduje, kiedy i jak pokazać koszt. Najlżejszy, ale eskalacja zależy od pamięci MG.
- **B. Rejestr z progami i Pożyczoną Chwilą jako dorzutem 1D10** (opis wyżej). **Rekomendacja:** przewidywalny dla MG, spójny z s. 4, koszt rośnie sam.
- **C. Dług Story Points.** Pożyczona Chwila daje dorzut za darmo, ale każdy wpis to „dług”: następny zdobyty Story Point przepada. Koszt spada na gracza, nie na świat. Prostszy w liczeniu, ale osłabia główną myśl kampanii („płaci ktoś inny”).

### 2. Więź z Anselem

**Czemu służy w opowieści.** Przywiązanie graczy do Ansela nadaje wagę Rozwidleniu na końcu Scenariusza 1 i wyborowi finałowemu (użyć Klepsydry, zniszczyć ją, oddać). Licznik daje też MG prosty sposób dawkowania wspomnień chłopca.

**Jak działała w archiwum.** Życzliwość (jedzenie, słuchanie, nadanie imienia, którego może się trzymać) daje +1 Więzi danej postaci. Przy 3 Ansel ufa i przypomina sobie schody, dzwon i płaczącą kobietę. Nieuprzejmość płoszy go do czasu. Zakres 0–3 na postać, przenoszony między sesjami.

**Przełożenie na Walkera (propozycja).**
- Walker **nie ma mechaniki relacji z NPC**; są tylko testy społeczne (np. Persuasion, s. 3). Więź niczego nie dubluje.
- **Bez rzutów.** Życzliwość wobec przestraszonego dziecka nie powinna zależeć od kości. Więź rośnie za działanie w fikcji, nie za udany test Persuasion. Test Persuasion (Tricky, 12) zostaje tylko do uspokojenia Ansela w panice.
- **Tracker** `rodzaj: wiez`, `zakres: 0-3`, `zasieg: kampania`, osobno dla każdej postaci. Najwyżej +1 na scenę na postać, żeby gracze nie „farmili” Więzi.
- **Progi:**

| Więź | Skutek |
|---|---|
| 1 | Ansel wraca do tej postaci z własnej woli, szuka jej po zamku |
| 2 | dzieli się okruchem wspomnienia (wskazówka pomocnicza, nigdy jedyna droga do kluczowej wskazówki, zgodnie z zasadą trzech dróg) |
| 3 | ufa i przypomina sobie wieżę i dzwon; w finale kampanii jego słowa mogą przesądzić o wyborze graczy |

- **Nieuprzejmość** nie odejmuje punktów; Ansel znika na resztę sceny (to już jest kara fabularna). Wariant z odejmowaniem niżej.
- **Story Points:** pierwszy raz, gdy Więź jakiejś postaci osiąga 3, to „ważny pierwszy raz” albo osobiste zwycięstwo z s. 4. MG może dać punkt; nie ustalamy tego jako stałej nagrody.

**Ocena: zostawić i przepisać.** Niskie obciążenie (trzy lub cztery liczby, zmieniane rzadko), duża wartość dramatyczna, zero kolizji z Walkerem.

**Warianty (decyzja twórcza):**
- **A. Więź osobno dla każdej postaci, 0–3, bez spadków.** **Rekomendacja:** osobiste przywiązanie robi z Rozwidlenia wybór poszczególnych postaci, a nie tylko drużyny.
- **B. Jedna Więź drużyny, 0–5.** Mniej liczenia, ale znika napięcie „Ansel ufa jej, a nie jemu”.
- **C. Więź może spadać** (okrucieństwo, zdrada, użycie Pożyczonej Chwili przy Anselu: −1). Mocniejsza konsekwencja, więcej pilnowania; pasuje, jeśli MG chce, by Rejestr i Więź się przenikały.

### 3. Zegar Północy

**Czemu służy w opowieści.** Napięcie nocnej wyprawy: każda kłótnia, hałas i pomyłka przybliża Filcha. Gracze czują upływ czasu bez liczenia minut.

**Jak działał w archiwum.** Sześć pól. Pole zaznacza się, gdy marnuje się czas: kłótnia, nieudany rzut w Sali, hałas; użycie siły (Alohomora, Reducto) zaznacza dwa. Przy 3 słychać kroki, przy 5 Filch jest na schodach, przy 6 dociera: poza pracownią łapie postacie (szlaban, odjęte punkty, konfiskata), w pracowni postacie są uwięzione do świtu i wychodzą wyczerpane. Odejście zeruje zegar; dzień zamiast nocy to obchód Madame Pince.

**Przełożenie na Walkera (propozycja).**
- Walker rozstrzyga skradanie **testem przeciwnym**: 1D10 + Speed + Stealth kontra 1D10 + Wits + Observation (s. 4). Seria takich testów co scenę dałaby ten sam efekt, ale bez widocznego, narastającego napięcia. Scalamy więc licznik z testem przeciwnym.
- **Tracker** `rodzaj: licznik`, `zakres: 0-6`, `zasieg: scena`.
- **Kiedy zaznaczać** (wyzwalacze z poziomów wyniku Walkera, s. 3 i 41):
  - +1: Failure w teście wykonywanym w ukrytej części biblioteki; hałaśliwa kłótnia; Spell near miss zaklęcia, które ma efekt słyszalny lub widoczny;
  - +2: Embarrassing failure albo Spell fumble; głośna magia lub siła (Reducto, wyważanie);
  - 0: Success i wyższe; ciche, rozsądne działanie.
- **Progi:** 3: kroki na górze (gracze to słyszą); 5: Filch na schodach, Pani Norris już w sali; 6: **jeden test przeciwny** 1D10 + Speed + Stealth (prowadzący, +1 za każdego pomocnika, s. 4) kontra 1D10 + Wits + Observation Filcha. Wygrana: chowają się w ostatniej chwili, zegar spada do 3. Przegrana: wpadka. Po nieudanym teście można wydać Story Point (s. 4), co daje graczom ostatnią szansę z ceną.
- **Skutki wpadki** przekładamy z archiwum: szlaban i konfiskata zostają. **Punktów domów Walker nie ma** (brak w podręczniku, zob. [[zasada.walker-luki]], D3); odjęte punkty to tylko kolor fabularny, chyba że MG przyjmie osobną zasadę domową.
- **Uwięzienie do świtu:** archiwalne „−1 do rzutów jutro” zastępujemy torem umysłu Walkera: postacie wychodzą z trzema kółkami Mind (Drained, „wyczerpany”, kara +3 do trudności, ustępuje po kilku godzinach, s. 35–36). To brzmi surowo, ale trwa tylko poranne lekcje. Lżejsza wersja: Dazed (+2). Do decyzji MG jako zasada domowa.
- **Jawność:** licznik jawny dla graczy (kreski na kartce na stole) daje najwięcej napięcia; archiwum nie rozstrzygało tej kwestii.

**Ocena: zostawić, scalić z testem przeciwnym.** Licznik częściowo dubluje Walkera (test przeciwny Stealth i Observation), ale go nie zastępuje: zegar odmierza tempo, a test rozstrzyga finał. Obciążenie małe, tylko w jednej lub dwóch scenach. Ważne dla tonu kampanii: porażka kosztuje czas i komfort, ale nie zatrzymuje gry, bo nawet wpadka prowadzi dalej.

**Warianty (decyzja twórcza):**
- **A. Licznik 0–6 tylko dla nocnej wyprawy z S1, z testem przeciwnym przy 6** (opis wyżej). **Rekomendacja**, z jednym rozszerzeniem: ten sam wzór wolno użyć w każdej późniejszej scenie skradania (Pince, prefekci, Ministerstwo), pod inną nazwą.
- **B. Usunąć licznik, zostawić czysty Walker:** test przeciwny Stealth kontra Observation co scenę lub co głośne zdarzenie. Wierny podręcznikowi, ale więcej rzutów i mniej widocznego napięcia.
- **C. Automatyczna wpadka przy 6, jak w archiwum.** Najprostsze, ale odbiera graczom ostatnią szansę i ignoruje Story Points.

### 4. Klepsydra Daniny i danina czasu: Time twisting czy osobna mechanika?

**Co mówi Walker.** Time twisting to właściwość przedmiotu zaczarowanego, +30 do trudności zaczarowania (s. 71). Opis: przedmiot zmienia bieg czasu: cofa jedną lub dwie osoby do wcześniejszej chwili albo, jak Klosz Czasu (Bell Jar of Time), zakrzywia czas na ograniczonym obszarze; podręcznik ostrzega, że majstrowanie przy czasie jest bardzo niebezpieczne, a gracze i Narrator mają podchodzić do niego ostrożnie (s. 72). Zmieniacz Czasu (Time Turner) cofa o godzinę lub więcej, z pobytem w przeszłości do 5 godzin (s. 76). **Brak w podręczniku:** zasad kosztu, paradoksów i przenoszenia czasu między osobami. Danina czasu („czasu nie da się stworzyć, tylko przenieść”) to więc nasz wymysł, nie zasada Walkera.

**Warianty:**
- **A. Klepsydra jako przedmiot zaczarowany Walkera, danina jako jej cena.** Klepsydra ma właściwość Time twisting (plus ewentualnie inne z listy s. 71–72), więc jej trudność zaczarowania to co najmniej 40, jak Klosz Czasu (s. 74). To od razu tłumaczy, czemu nikt jej nie odtworzy (Almost Impossible to 25) i czemu Ministerstwo się nią interesuje. Danina to kampanijna, jawnie oznaczona **zasada domowa**: każdy efekt Time twisting tej Klepsydry (i wszystkiego, co z niej „wycieka”: Pożyczona Chwila, Skradzione Chwile Cassiana, przewijanie w walce Crake'a w Scenariuszu 3) musi być opłacony czyimś czasem, a rozliczenie trafia do Rejestru Danin. **Rekomendacja:** jedno źródło prawdy (Walker opisuje przedmiot, my tylko cenę), mało nowych zasad, a pustą lukę s. 72 wypełniamy dokładnie tam, gdzie podręcznik sam ostrzega.
- **B. Osobny podsystem „magii daniny”.** Własne zaklęcia z trudnością i kratkami (Pożyczona Chwila, Oddanie Godziny, Kotwica), uczone jak zaklęcia z s. 31–32. Bogatsze, ale tworzy równoległą szkołę magii, której Walker nie przewiduje; dużo pracy, ryzyko niespójności i pokusa, by uczniowie „opanowali” pożyczanie i przestali płacić.
- **C. Czysto fabularnie.** Klepsydra bez statystyk, danina tylko w narracji, bez Rejestru progów. Najlżejsze, ale Scenariusz 3 (walka z Crake'em, który przewija czas) i tak będzie potrzebował zasad, więc odkładamy problem.

**Ważne dla kanonu (do strażnika kanonu):** jeśli w 1969 roku istnieją Zmieniacze Czasu (Walker opisuje je na s. 76), gracze zapytają, czemu Ministerstwo nie użyje ich zamiast Klepsydry. Odpowiedź powinna wynikać z różnicy: Zmieniacz cofa podróżnego, Klepsydra **przenosi** czas między ludźmi. To kwestia do sprawdzenia przez `straznik-kanonu`, nie decyzja mechaniczna.

**Cassian i Skradzione Chwile** (na Fazę 3): zdolność specjalna NPC zgodna z wariantem A: kilka razy na scenę dorzut 1D10 po nieudanym rzucie (jak Story Point), każde użycie to wpis w Rejestrze i widoczny sygnał (wzdrygnięcie, dotknięcie kieszonki z zegarkiem). Liczbę użyć ustalimy przy statystykach Cassiana.

## Przykład

**Noc w bibliotece, wariant rekomendowany.** Drużyna wchodzi do ukrytej części Działu Ksiąg Zakazanych; Zegar Północy stoi na 0. Uczennica liczy uderzenia zegarów i ma Failure: zegary jąkają się raz, Zegar 1. Kolega próbuje otworzyć gablotę Alohomorą i trafia Spell fumble: gdzieś dzwoni dzwonek, Zegar 3, gracze słyszą kroki. Trzecia postać uczy się Pożyczonej Chwili przy ścianie (Success) i od razu jej używa po nieudanym teście przy pułapce wahadła: dorzuca 1D10 i przechodzi. MG zapisuje w Rejestrze: „Pożyczyła: [postać]. Zapłacił: prefekt Hufflepuffu, 20 minut. Pokazać: jutro na śniadaniu”. To pierwsze użycie drużyny, więc koszt jest drobny. Drugi gracz zgłasza się, by oddać godzinę gablocie: gablota się otwiera, MG daje mu Story Point za odwagę (s. 4). Na wyjściu kolejna kłótnia podnosi Zegar do 6: test przeciwny Stealth kontra Observation Filcha. Drużyna przegrywa, jeden gracz wydaje Story Point, dorzuca 1D10 i wygrywa: chowają się za regałem, Zegar spada do 3, a Foliał przekracza próg. Wszystkie zegary wybijają trzynastą.

## Uwagi

**Niejasności i luki podręcznika ważne dla tej oceny**
- Time twisting: brak w podręczniku zasad kosztu, paradoksu i przenoszenia czasu między osobami; tylko ostrzeżenie (s. 72). Wartości trudności przy przykładach przedmiotów (s. 74, 76) są w tekście szkicu PDF nieczytelne; liczbę 40 dla Klosza Czasu przyjmujemy za [[zasada.walker-przeglad-dziedzin]].
- Brak mechaniki relacji z NPC, reputacji i punktów domów (zob. [[zasada.walker-luki]], D3).
- Brak zasady „utraty czasu” jako skutku; najbliższe są stany umysłu i czasy powrotu do zdrowia (s. 35–36), zob. [[zasada.walker-walka-i-zdrowie]].
- Zakaz kilku dorzutów do jednego rzutu dotyczy na s. 4 tylko Story Points; rozszerzenie go na Pożyczoną Chwilę to nasza propozycja.

**Problem kontraktu danych.** Kontrakt (rozdział 4.8) zna tylko `pochodzenie: walker` albo `domowa`. Ten dokument jest oceną i zbiorem propozycji, a nie zatwierdzoną zasadą domową; panel pokaże go jednak jako zasadę domową. Propozycja do decyzji użytkownika przy następnej zmianie kontraktu: dodać wartość `pochodzenie: kampania` (mechaniki fabularne) albo `propozycja`. Do tego czasu status `recenzja` i pierwsze zdanie streszczenia sygnalizują, że nic tu nie obowiązuje.

**Inne liczniki z archiwum (poza zakresem, do odnotowania).** Archiwalny moduł prowadził też Dziennik Lekcji, Przychylność nauczycieli i Punkty domu. Dziennik Lekcji dubluje kratki zaklęć Walkera (s. 31–32, [[zasada.walker-nauka-i-rozwoj]]) i proponujemy go usunąć. Przychylność nauczycieli i punkty domów: brak w podręczniku; można je prowadzić flagami, jeśli MG zechce.

**Co powstanie po decyzji MG (sesja B):** pliki `tracker` (proponowane identyfikatory: `tracker.rejestr-danin`, `tracker.wiez-ansel`, `tracker.zegar-polnocy`), wpisy w `04_kampania/flagi.yaml`, zatwierdzone zasady domowe w `02_zasady/zasady-domowe.md` (danina czasu, Pożyczona Chwila, skutki uwięzienia do świtu) oraz aktualizacja wpisów w `docs/SLOWNIK.md` (zmiana „do oceny” na decyzję).

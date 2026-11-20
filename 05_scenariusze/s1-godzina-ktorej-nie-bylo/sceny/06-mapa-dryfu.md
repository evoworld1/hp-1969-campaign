---
id: s1.scena.06
typ: scena
tytul: "Mapa dryfu"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 6
czas_min: 30
cel: "Węzeł śledztwa: pomiary zegarów w zamku ujawniają dwa wzory (przypływ ku Wieży Zegarowej i drżące odczyty ku lochom), a rozmowy z innymi ofiarami dopasowują stracone godziny do sukcesów Cassiana."
npc:
  - npc.filius-flitwick
  - npc.thaddeus-wren
  - npc.argus-filch
  - npc.maisie-lock
  - npc.gideon-pratt
  - npc.tobias-quill
  - npc.ansel-dray
miejsca:
  - miejsce.sala-wejsciowa
  - miejsce.wielka-sala
  - miejsce.sala-obrony
  - miejsce.lochy-przejscie-slytherinu
  - miejsce.wieza-zegarowa
przedmioty: []
handouty:
  - s1.handout.praca-domowa-dryf
  - s1.handout.mapa-zamku-dryf
flagi_wejscie:
  - flaga.godzina-stracona
  - flaga.praca-domowa-dryf
  - flaga.tempus-opanowane
  - flaga.ansel-spotkany
  - flaga.s1-zegar-kradziezy
flagi_wyjscie:
  - flaga.przyplyw-ku-wiezy
  - flaga.slad-ukaszen
  - flaga.rejestr-godzin
  - flaga.s1-zegar-kradziezy
nastepne:
  - s1.scena.07
  - s1.scena.08
  - s1.scena.12
tagi: [s1, sledztwo, wezel, mapa-dryfu, tempus]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.06, W3, W4.3, W4.4, zegar kradzieży)"
aktualizacja: 2026-11-20
---
## Do odczytania

*Tekst 1 zawsze, na otwarcie. Teksty 2 i 3 wtedy, gdy postacie same zobaczą wzór (krok 4); tekst 2 możesz przeczytać już w kroku 3, jeśli ktoś mierzy w krużganku u stóp wieży. Teksty 4 i 5 tylko wtedy, gdy wydarzy się to, co opisują. Liczby w tekstach to przykład: jeśli gracze zebrali inne odczyty, podaj ich własne.*

### 1. Wtorek rano (zawsze, przy śniadaniu w Wielkiej Sali)

> Wtorek wstaje szary i mokry. Deszcz siecze w wysokie okna, a pod zaczarowanym sklepieniem chmury suną nisko, ciężkie jak namoknięta wełna. Pachnie owsianką, przypalonymi tostami i wilgotnymi płaszczami.
>
> Przy jednym ze stołów ktoś parska śmiechem. Drugoroczniak z czerwonymi uszami tłumaczy kolegom, że wcale nie zaspał: usiadł na ławce przed lekcją, mrugnął, a lekcja właśnie się kończyła. Śmieją się wszyscy oprócz niego. Na końcu stołu Puchonów pierwszoroczniaczki szepczą, że duch Puchona znowu stał na schodach.
>
> Zegar nad stołem nauczycieli pokazuje za kwadrans ósmą. Wasze zegarki twierdzą co innego. Różnica jest mała. Przedwczoraj nikt by jej nie zauważył.
>
> W kieszeniach szeleszczą kartki od Flitwicka. Puste rubryki czekają na liczby.

### 2. Przypływ (gdy postacie widzą gładki wzór; w krużganku albo nad mapą)

*Pierwsze dwa akapity czytaj w krużganku u stóp Wieży Zegarowej. Jeśli postacie zestawiają odczyty w bazie, nad mapą, czytaj tylko trzeci i czwarty.*

> Im dalej na zachód, tym ciszej. Korytarze pustoszeją, okna robią się węższe, a za nimi, ponad mokrymi dachami, rośnie ciemna sylwetka Wieży Zegarowej. Na dziedzińcu u jej stóp mech zarósł płyty, a woda kapie z krawędzi krużganka równo, jak metronom.
>
> Sześć minut. Żadnego drżenia, żadnych skoków. Wskazówki po prostu zostały w tyle, spokojnie, jakby ktoś łagodnie przytrzymał je za rękaw.
>
> Na mapie ołówkowe liczby układają się jak słoje w przeciętym pniu. Najmniejsze przy kuchni i w podziemiach, większe w klasach, jeszcze większe w Sali Wejściowej. Wszystkie rosną w jedną stronę, tak jak trawa kładzie się w nurcie strumienia.
>
> Wysoko nad wami wieża wybija kwadrans. Dźwięk przychodzi odrobinę za późno.

### 3. Drżenie (gdy postacie idą za drżącymi odczytami w dół)

> Drżące odczyty nie rozlewają się szeroko jak tamte. Biegną wąsko, jak ścieżka wydeptana przez jednego człowieka: korytarz, w którym zgubiliście godzinę, potem schody w dół, coraz niżej, tam, gdzie ściany pocą się zimną wilgocią, a w powietrzu wisi gorzki zapach po porannych Eliksirach.
>
> Tu liczby nie umieją usiedzieć. Trzy minuty do przodu, pięć wstecz, znowu do przodu. Sekundnik w zwykłym zegarku zacina się, rusza, zacina.
>
> W płytkiej wnęce wisi stary zegar z pękniętą szybką. Stoi. Na posadzce pod nim widać drobne, świeże rysy, jakby ktoś stawał tu często, zawsze w tym samym miejscu, i kręcił się na pięcie.
>
> Kawałek dalej korytarz kończy się gładką, pustą ścianą. Zza niej nie dochodzi żaden dźwięk.

### 4. Ansel na początku mostu (gdy idzie z postacią ku Wieży Zegarowej)

> Chłopiec szedł obok całą drogę i liczył na głos stopnie każdych schodów. Na początku krytego mostu milknie.
>
> Deski są ciemne od deszczu i pachną żywicą. Ansel staje na ostatniej kamiennej płycie, tam, gdzie zaczyna się drewno, i dalej nie idzie. Jego brzegi drgają jak płomień świecy w przeciągu. Kosmyki włosów unoszą się lekko w stronę wieży, choć powietrze stoi.
>
> „Ja tu poczekam” – mówi cicho. – „Tu jest za głośno”.
>
> Dzwony milczą. Słychać tylko deszcz.

### 5. Ansel przy śniadaniu (opcjonalnie, gdy w scenie 05 obiecał przyjść do postaci z Więzią 1)

> Między ławkami, w tłoku uczniów z dzbankami i torbami, stoi chłopiec w żółto-czarnym krawacie. Nikt go nie potrąca. Pierwszoroczniak, który biegnie po rozlanej herbacie, przechodzi przez miejsce, gdzie chłopiec stoi, i nawet nie zwalnia.
>
> Chłopiec pochyla się nad półmiskiem kiełbasek i wciąga zapach z zamkniętymi oczami. Potem patrzy na was, uśmiecha się szeroko i macha, bardzo nisko, przy biodrze, żeby nikt nie zobaczył.
>
> Jakby ktoś mógł.

## Dla MG

**Kiedy w fikcji:** wtorek 23 września, okienka i przerwy.

Scena nie dzieje się w jednym miejscu, tylko rozciąga się na cały szkolny dzień: śniadanie, przerwy między lekcjami, okienko, czas po obiedzie. Lekcje mijają poza kadrem jednym zdaniem.

**Co się naprawdę dzieje.** W mechanizmie Wieży Zegarowej związana jest Klepsydra Daniny, a zegarmistrz Crake od tygodni rozluźnia jej pieczęć. Klepsydra przecieka i ciągnie czas ku sobie: wszystkie zegary w zamku spóźniają się łagodnie, tym bardziej, im bliżej wieży. To **przypływ**, wzór gładki i szeroki (W3). Sama wieża jest w środku idealnie dokładna, bo jest kotwicą, nie źródłem; to celowy ślepy zaułek sceny 07. Drugi wzór zostawia Cassian: przez swój zatrzymany zegarek podbiera czas z wycieków, a każde podebranie szarpie zegary w pobliżu. Jego trasa (korytarz straconej godziny, schody w dół, korytarz Eliksirów, wnęka ze stojącym zegarem tuż przed wejściem do Slytherinu) daje odczyty **drżące**: wąskie, skaczące w obie strony, jak ścieżka (W4.4). Trzecia droga to ludzie: inne ofiary Cassiana pamiętają, kiedy zgubiły czas, a te daty pokrywają się z dniami, w których Cassian nagle błyszczał (W4.3). Gracze nie muszą zrozumieć Klepsydry. Wystarczy, że zobaczą dwie rzeczy: „coś ciągnie ku wieży” i „ktoś chodzi tą samą trasą i szarpie”.

**Po co ta scena.** To węzeł śledztwa i pierwsza scena, w której gracze sami planują, dokąd iść. Dla początkujących to ważna lekcja: nikt nie prowadzi ich za rękę, ale mają w ręku kartkę z rubrykami i mapę. Każde miejsce pomiaru może być małą scenką z modułu 12 (Filch przy wielkim zegarze, Gruby Mnich, pani Pince w bibliotece, pierwszoroczniak na schodach), ale nie musi: przy pośpiechu pomiar to jedno zdanie i jedna liczba.

**Zegar kradzieży.** Wtorek rano to kolejne pół dnia: +1, jeśli zegarek jest u Cassiana i nikt go nie skonfrontował. Wtorek po obiedzie to następne pół dnia: znów +1 na tych samych warunkach. Wartość 1, 2 i 3 dają wydarzenia z tabeli w `graf-scen.md`; przy 3 Cassian sam przychodzi (scena 08). Przy 2 przerwę po obiedzie zakłóca pierwszoroczniak, który mdleje na schodach (moduł 12), a Wren najpierw pyta swoją grupę (krok 6), dopiero potem cały rok. Jeśli zegarek jest już u graczy (kradzież po scenie 04), zegar stoi, a drżące odczyty w lochach słabną w ciągu pół dnia do zera: wzór drżący nadal widać rano, po południu zostaje tylko ślad w notatkach.

**Cassian w tle (bez kwestii).** Przy śniadaniu siedzi przy stole Slytherinu wypoczęty i promienny, choć wczoraj rano był szary na twarzy. Uważna postać to zauważy bez testu. Nie podchodzi do postaci, chyba że zegar kradzieży doszedł do 3.

### Odczyty do mapy dryfu (dla MG, nie na handout)

Liczby robocze z kart miejsc, zebrane w jednym miejscu. Odczyt „gładki” to spokojne spóźnienie, „drżący” to cyfry skaczące w obie strony. Podawaj graczom liczbę i jedno słowo opisu; zapisują sami.

| Miejsce | Odczyt | Uwagi |
|---|---|---|
| Schody przy kuchni | −1, gładko | Przy Anselu Tempus rozmywa się w dym (to nie pomiar, to dowód z W2) |
| Pokój wspólny Hufflepuffu (wejście) | −1, gładko | |
| Sala Zaklęć | −2, gładko | W chwili bicia wieży drży o minutę i wraca. To szum, nie trop: drżenie trwa sekundę |
| Sala Obrony (baza grupy) | −2, gładko | Przy Cassianie z zegarkiem Tempus tyka szybciej niż gdziekolwiek |
| Biblioteka, czytelnia | −2, gładko | Przy sznurze Działu Ksiąg Zakazanych odczyt lekko drży (Cassian tędy chodził; ziarno W5.3, nie rozwijaj tu) |
| Wielka Sala | −3, gładko | |
| Sala Wejściowa, wielki zegar | −5, gładko | Z Tempus widać, że błąd „pochyla się” ku zachodnim oknom |
| Krużganek u stóp Wieży Zegarowej | −6, gładko | Najwięcej w zamku. Tekst 2 |
| Wnętrze Wieży Zegarowej | 0 | To już scena 07. Jeśli postacie tam wchodzą, przejdź do niej |
| Korytarz straconej godziny | drżący, skoki o kilka minut | Początek ścieżki |
| Schody w dół do lochów | drżący | Środek ścieżki |
| Lochy, korytarz Eliksirów i wnęka | −1 w tle, drżenie najsilniejsze | Koniec ścieżki. Tekst 3. Wstawka Tempus w karcie [[miejsce.lochy-przejscie-slytherinu]] |
| Gabinet dyrektora | 0 | Tylko gdy gracze tam trafią (moduł 12); nikt nie wyjaśnia dlaczego |

**Miejsca wymyślone przez graczy.** Reguła kciuka: odczyt gładki, tym większy, im bliżej zachodniej strony zamku i wieży (−1 daleko, −5 blisko). Drżący tylko na trasie Cassiana i tam, gdzie Cassian akurat jest. Wieże na wschodzie i błonia: −1 albo −2.

**Bez magii.** Gdy Tempus nie wychodzi albo nikt go nie umie, pomiar robi się zwykłymi zegarkami (W3.2): postacie nastawiają zegarki razem w jednym miejscu, rozchodzą się i przy najbliższym dzwonku każda patrzy na swój. Po powrocie porównują. Działa też pytanie przypadkowych uczniów na różnych piętrach, „która u ciebie?”. Wychodzą te same liczby, tylko drżenie widać gorzej: sekundnik się zacina, zamiast skakać.

### Rejestr godzin (tabela robocza dla MG i dialogisty)

Daty, które ofiary podają w kroku 5. Dopasowanie do sukcesów Cassiana robią gracze, nie NPC.

| Kto | Kiedy stracił czas | Ile | Co tego dnia zrobił Cassian |
|---|---|---|---|
| [[npc.gideon-pratt]] | wtorek 16 września, 14:12–15:11, korytarz Eliksirów | 59 minut | Na Eliksirach za ścianą jako jedyny uwarzył trudny eliksir bez błędu; Slughorn chwalił go przy całej klasie |
| [[npc.maisie-lock]] | czwartek 18 września, ok. 11:00, sprawdzian (trzecie pytanie, potem dzwonek) | kwadrans | Tego przedpołudnia oddał sprawdzian z Transmutacji pierwszy, z wynikiem celującym |
| „Ten wysoki z Gryffindoru – 2x!” (notes Tobiasa) | piątek 12 i środa 17 września | po pół godziny | 12.09 pierwszy wygrany pokaz grup u Wrena; 17.09 wypracowanie, za które dostał najwyższą ocenę na roku |
| Drużyna | poniedziałek 22 września, przerwa obiadowa | godzina | Pokaz u Wrena (scena 04) |

Notes [[npc.tobias-quill]] myli się w szczegółach (przy Pratcie ma „przed obiadem?”). Pratt to prostuje, jeśli postacie zestawią oba źródła. To dobra chwila dla graczy: sami poprawiają dane.

### Rytm sceny

*Oś sceny. Kwestie otwierające dialogów w krokach 3, 5 i 6 to propozycje narratora; dialogista może je zmienić w blokach, a wtedy poprawia je także tutaj. Kroki 3 i 5 możesz przeplatać: ofiary spotyka się zwykle po drodze między pomiarami.*

**Krok 1. Wtorek rano** (ok. 2 min)
- Czytaj: tekst 1 („Wtorek wstaje szary i mokry…”); tekst 5 („Między ławkami, w tłoku uczniów…”) tylko wtedy, gdy Ansel obiecał przyjść na śniadanie.
- Flagi: `flaga.s1-zegar-kradziezy` (+1)
- Krótko: plotka przy śniadaniu (zegar kradzieży 1: drugoroczniak przespał lekcję, ktoś znowu widział „ducha Puchona”). Rozdaj handout `s1.handout.mapa-zamku-dryf`, jeden na drużynę. Kto zgubił kartkę z pracą domową, dostaje ją od kolegi.

**Krok 2. Plan pomiarów** (ok. 3 min)
- Krótko: gracze wybierają 3–6 miejsc (przy początkujących najwyżej sześć) i dzielą się albo idą razem. Baza: pusta sala Obrony, w której grupa może ćwiczyć po lekcjach. Zapytaj każdego gracza po kolei: „Gdzie mierzysz i kiedy: w przerwie, w okienku czy po lekcjach?”. Jeśli nikt nie wie, od czego zacząć, podsuń wielki zegar w Sali Wejściowej: wszyscy i tak tamtędy przechodzą.
- Awaryjne: `awaryjne-bez-pomiarow` (gracze nie chcą mierzyć).

**Krok 3. Pomiary** (ok. 12 min)
- Czytaj: tekst 2 („Im dalej na zachód, tym ciszej…”), gdy ktoś mierzy w krużganku u stóp wieży; tekst 4 („Chłopiec szedł obok całą drogę…”), gdy Ansel idzie z postacią ku wieży.
- Test: `s1.scena.06.test.pomiar` (Tempus albo porównanie zwykłych zegarków, bez magii, W3.2)
- Dialog: `s1.scena.06.dialog.filch-wieza` — „Zegar jak zegar. To wieża się boczy, a dzwony za nią. Zegarmistrz był w czwartek. Znowu.” (gdy postacie mierzą przy wielkim zegarze; W3.3 i W8.3)
- Krótko: każdy pomiar to jeden wpis na mapie: liczba i słowo „gładko” albo „drżąco” (tabela odczytów wyżej). Gdy drużyna się rozdzieliła, przeskakuj między postaciami co jeden pomiar. Ansel (stopień 3, towarzyszenie) może iść z postacią o najwyższej Więzi: przy wieży czuje ciągnięcie i nie wchodzi na most (W3.4, tekst 4).

**Krok 4. Dwa wzory** (ok. 5 min)
- Czytaj: tekst 2 („Im dalej na zachód…”; nad mapą tylko akapity trzeci i czwarty), tekst 3 („Drżące odczyty nie rozlewają się szeroko…”), gdy postacie idą za ścieżką w dół.
- Test: `s1.scena.06.test.odczytanie-wzoru`
- Flagi: `flaga.przyplyw-ku-wiezy`, `flaga.slad-ukaszen`
- Krótko: gładkie spóźnienia rosną ku Wieży Zegarowej; drżące odczyty prowadzą do przejścia Slytherinu. Najpierw daj graczom popatrzeć na mapę i pogadać. Test dopiero wtedy, gdy sami nie widzą wzoru albo chcą się upewnić.

**Krok 5. Inne ofiary** (ok. 6 min, opcjonalnie)
- Dialog: `s1.scena.06.dialog.maisie-kwadrans` — „Sprawdziłam. Mam to na kartce. Czwartek, trzecie pytanie, i od razu dzwonek.”
- Dialog: `s1.scena.06.dialog.pratt-korytarz` — „Czternasta dwanaście. Potem piętnasta jedenaście. Pięćdziesiąt dziewięć minut, nie godzina. Proszę być dokładnym.”
- Dialog: `s1.scena.06.dialog.quill-notes` — „Notes? Same głupoty, kto kiedy przysnął. No dobra, siadajcie. Który to był czwartek?” (Tobias pokazuje notes: kto kiedy „przysnął”)
- Flagi: `flaga.rejestr-godzin`
- Krótko: stracone godziny pokrywają się z dniami, w których Cassian błyszczał (W4.3, tabela „Rejestr godzin”). Ofiary opowiadają o mignięciu „ducha Puchona”. Pratt stracił czas na korytarzu Eliksirów, więc jego dane wzmacniają też ślad do lochów.

**Krok 6. Wren pyta grupę** (ok. 2 min, gdy zegar kradzieży doszedł do 2)
- Dialog: `s1.scena.06.dialog.wren-kto-gubi-czas` — „Grupa trzecia, chwileczkę. Zanim zapytam cały rok: kto z was ostatnio gubi czas?”
- Krótko: Wren najpierw pyta „swoją” grupę, kto ostatnio gubi czas, zanim zapyta publicznie. Wybór kierunku: wieża (07) albo Cassian (08).
- Awaryjne: `awaryjne-cassian-przychodzi` (zegar kradzieży doszedł do 3).

### Jak prowadzić pomiary

- **Pomiar to mała scenka, nie raport.** Każde miejsce ma jeden zmysłowy szczegół i jedną liczbę. Sala Wejściowa: tłok i stukot butów o kamień. Wielka Sala: zapach obiadu i brzęk sztućców. Krużganek: kapanie wody i mech. Lochy: zimno i gorzki zapach. Jedno zdanie opisu, liczba, następny gracz.
- **Ludzie w miejscach.** Przy wielkim zegarze Filch (krok 3). Na schodach przy kuchni Ansel. W bibliotece pani Pince skarży się na „chłopca od Slughorna” (moduł 12, W5.2; nie rozwijaj tu ostatniego rzędu). W lochach wieczorem Ślizgoni pytają, kto tu węszy. Jeden człowiek na miejsce wystarczy.
- **Sukces imponujący z Zaklęć.** Postać, która w scenie 02 rzuciła Tempus z sukcesem imponującym, od razu słyszy różnicę między „gładkim” a „drżącym” (założenie robocze ze sceny 02). Powiedz jej to wprost.
- **„Tykająca różdżka”.** Postać, której Tempus w scenie 02 skończył się porażką kompromitującą, ma różdżkę tykającą do wieczora. Ansel lubi iść za tym tykaniem: to dobry powód, żeby przyszedł właśnie do niej.

### Ansel w tej scenie

Ansel szuka postaci z najwyższą Więzią i idzie z nią przy jednym pomiarze (stopień 3, towarzyszenie). Gada, liczy stopnie, pyta o godzinę. Przy wieży czuje ciągnięcie: zatrzymuje się na początku mostu i nie wejdzie dalej (tekst 4). Nie wie dlaczego i nie mów graczom dlaczego. W lochach jest mu zimno i cicho; trzyma się blisko postaci. Postać, która przy pożegnaniu w 05 dostała obietnicę śniadania, widzi go w Wielkiej Sali (tekst 5). Jeśli któraś postać nie ma jeszcze znacznika „rozmowa”, to dobra scena na spotkanie wyrównujące z modułu 12.

### Rady dla MG, który prowadzi początkujących

- **Daj im kartkę i ołówek.** Mapa leży na środku stołu, gracze sami wpisują liczby. Odkrycie wzoru na własnej mapie to nagroda, której nie da żaden rzut.
- **Nie mów, co znaczą liczby.** Podawaj tylko, co widać: liczbę i „gładko” albo „drżąco”. Wniosek „ku wieży” albo „do lochów” ma paść z ust gracza.
- **Trzy pomiary wystarczą.** Jeśli gracze chcą sześć, pozwól, ale skracaj każdy do jednego zdania. Gdy czas goni, trzy pomiary, a drugą wskazówkę daje Ansel albo Wren (skróty z grafu).
- **Gdy drużyna się rozdziela,** przeskakuj między graczami co jeden pomiar i nie zostawiaj nikogo bez głosu dłużej niż dwie minuty.
- **Gdy gracze wolą rozmawiać niż mierzyć,** to też jest droga: krok 5 (ofiary) daje `flaga.rejestr-godzin` i prowadzi do Cassiana bez jednego rzutu Tempus.

### Linie i zasłony

Wieża Zegarowa to miejsce, w którym zginął Ansel; nikt tego dziś nie mówi, ale strach chłopca na moście (tekst 4) dotyka tematu. Jeśli przy stole jest zasłona na śmierć dzieci, scena działa bez zmian: Ansel mówi tylko, że „tu jest za głośno”. Lochy wieczorem to terytorium Ślizgonów: zaczepki mogą dotknąć napięć wokół czystości krwi (np. przy Tobiasie, który jest mugolakiem). Trzymaj je na poziomie złośliwych pytań, chyba że gracze ustalili inaczej.

### Czym zamknąć scenę

Scena kończy się, gdy drużyna ma przynajmniej jedną z trzech flag (`flaga.przyplyw-ku-wiezy`, `flaga.slad-ukaszen`, `flaga.rejestr-godzin`) i wybiera kierunek. Zapytaj wprost: „Jest wtorek po południu. Dokąd idziecie?”. Wieża prowadzi do sceny 07, lochy albo lista dat do sceny 08. Obie kolejności działają. Jeśli gracze się wahają, niech wieża wybije godzinę o minutę za późno, a Ansel (jeśli jest obok) wzdrygnie się i spojrzy na zachód.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.06.test.pomiar`, `s1.scena.06.test.odczytanie-wzoru`.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.przyplyw
  rodzaj: glowne
  warunek: "Postacie widzą, że gładkie spóźnienia rosną ku Wieży Zegarowej."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W3. Naturalny kolejny krok: wieża (07), czyli celowy ślepy zaułek z ziarnem."
  flagi_ustaw: [flaga.przyplyw-ku-wiezy]
  prowadzi_do: s1.scena.07
```

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.slad-do-lochow
  rodzaj: glowne
  warunek: "Postacie idą za drżącymi odczytami do przejścia Slytherinu."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W4.4. Ślad kończy się tam, gdzie Cassian podbiera; prowadzi do konfrontacji."
  flagi_ustaw: [flaga.slad-ukaszen]
  prowadzi_do: s1.scena.08
```

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.rejestr-godzin
  rodzaj: glowne
  warunek: "Postacie rozpytują ofiary i dopasowują stracone godziny do sukcesów Cassiana."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W4.3. Postacie mają listę dat i godzin, którą mogą rzucić Cassianowi w twarz albo pokazać Wrenowi."
  flagi_ustaw: [flaga.rejestr-godzin]
  prowadzi_do: s1.scena.08
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.awaryjne-bez-pomiarow
  rodzaj: awaryjne
  warunek: "Postacie nie robią pomiarów albo pomiary się nie udają."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Flitwick na korytarzu, przeglądając pracę domową: „Wszystkie wasze błędy pochylają się w jedną stronę” (W3). Ansel czuje ciągnięcie ku wieży. Wren pyta grupę o gubienie czasu (W4)."
  flagi_ustaw: [flaga.przyplyw-ku-wiezy]
  prowadzi_do: s1.scena.07
```

```yaml
rozgalezienie:
  id: s1.scena.06.rozgalezienie.awaryjne-cassian-przychodzi
  rodzaj: awaryjne
  warunek: "Zegar kradzieży doszedł do 3, a postacie wciąż nie skonfrontowały Cassiana."
  wymaga_flag: [flaga.s1-zegar-kradziezy]
  wyklucza_flagi: [flaga.cassian-zdemaskowany]
  efekt: "Cassian, zdenerwowany wścibstwem, sam znajduje postacie (w bazie grupy albo na korytarzu)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.08
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: wpisy z mapy dryfu, `flaga.przyplyw-ku-wiezy`, `flaga.slad-ukaszen`, `flaga.rejestr-godzin`, wartość `flaga.s1-zegar-kradziezy`.

---
id: s1.scena.08
typ: scena
tytul: "Cassian"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 8
czas_min: 35
cel: "Konfrontacja z Cassianem i pierwszy pojedynek. Właściwe miejsce przejęcia zegarka (pojedynek, kradzież, targ, litość) i źródło wiedzy o pracowni (W5), ostrzeżenia przed księgą (W10) i odwrotnej podpowiedzi do gabloty (W7)."
npc:
  - npc.cassian-vane
  - npc.thaddeus-wren
  - npc.rosalind-teague
  - npc.ansel-dray
miejsca:
  - miejsce.lochy-przejscie-slytherinu
  - miejsce.sala-obrony
  - miejsce.wieza-zegarowa
przedmioty:
  - przedmiot.zegarek-cassiana
  - przedmiot.karta-pozyczajacego
handouty:
  - s1.handout.karta-pozyczajacego
flagi_wejscie:
  - flaga.sygnal-cassiana-nazwany
  - flaga.slad-ukaszen
  - flaga.rejestr-godzin
  - flaga.wieza-zbadana
  - flaga.s1-zegar-kradziezy
  - flaga.zegarek-cassiana
  - flaga.wren-podejrzewa
  - flaga.cassian-czujny
flagi_wyjscie:
  - flaga.cassian-zdemaskowany
  - flaga.cassian-los
  - flaga.zegarek-cassiana
  - flaga.karta-u-graczy
  - flaga.lokalizacja-pracowni
  - flaga.sekret-poruszony
  - flaga.wren-podejrzewa
nastepne:
  - s1.scena.09
  - s1.scena.12
tagi: [s1, konfrontacja, pierwszy-pojedynek, zegarek, karta, punkt-pauzy]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.08, drogi awaryjne do pracowni, W4, W5.1, W7, W10, punkt pauzy 3)"
  - "04_kampania/przedmioty/zegarek-cassiana.md (kradzież, zniszczenie)"
aktualizacja: 2026-11-20
---
## Do odczytania

*Na wejście czytasz jeden z trzech tekstów (1a, 1b albo 1c), zależnie od tego, jak doszło do spotkania. Teksty 3–6 czytasz tylko wtedy, gdy wydarzy się to, co opisują. Tekst 2 zamyka scenę. Czytaj chłodno i powoli na początku, szybciej i ciszej, gdy Cassian zaczyna pękać.*

### 1a. Znajdujecie go (postacie idą do Cassiana)

*Najpierw jedno zdanie miejsca, potem część wspólna.*

- **Lochy, wnęka z zegarem:**
> Pochodnie syczą na mokrych ścianach, a w połowie korytarza, we wnęce pod starym zegarem z pękniętą szybką, ktoś stoi.
- **Krużganek u stóp wieży, o zmierzchu:**
> Krużganek tonie w szarym świetle, mech na kamieniach jest śliski od wilgoci, a nad wami wahadło wieży oddycha powoli. Przy filarze ktoś stoi.
- **Pusta sala Obrony:**
> Ławki stoją pod ścianami, manekiny w podziurawionych szatach patrzą w okno, a przy najlepszym stanowisku, tym przy oknie, ktoś stoi.

> Cassian Vane, sam, plecami do was. Kamizelka zapięta pod szyję, srebrny łańcuszek napięty. Trzyma zegarek w obu dłoniach, blisko piersi, i kręci koronką powoli, ząbek po ząbku, jak ktoś, kto nakręca coś bardzo kruchego. Gwiżdże pod nosem pięć tych samych nut, w kółko.
>
> I coś tyka. Drobno, szybko, za szybko jak na jakikolwiek zegar, który znacie.
>
> Gwizd urywa się w pół nuty. Cassian zatrzaskuje kopertę, wsuwa zegarek do kieszonki, wygładza kamizelkę i dopiero wtedy się odwraca. Twarz ma gładką i wypoczętą, jakby właśnie wstał po długim śnie.
>
> „Grupa trzecia” – mówi uprzejmie.

### 1b. Cassian przychodzi sam (zegar kradzieży = 3)

> Drzwi otwierają się bez pukania. Cassian Vane wchodzi i zamyka je za sobą starannie, aż szczęknie klamka. Na korytarzu nikt za nim nie idzie.
>
> Twarz ma wypoczętą, gładką, jak zawsze po południu. Ale ręce go zdradzają. Lewą trzyma w rękawie, przyciśniętą do boku. Prawa raz po raz wędruje do kieszonki kamizelki i wraca, jakby sprawdzał, czy coś tam jeszcze jest.
>
> Opiera się plecami o drzwi. Uśmiecha się, tylko że uśmiech dociera do oczu z opóźnieniem.
>
> „Zadajecie dużo pytań” – mówi wolno. „O godziny. O zegary. O mnie.” Pauza. „Porozmawiajmy, zanim zada je ktoś inny.”

*Gdy postacie są na otwartej przestrzeni (dziedziniec, korytarz), pomiń pierwszy akapit: Cassian po prostu staje przed nimi i zastawia im drogę.*

### 1c. Cassian przychodzi po zegarek (zegarek u graczy po kradzieży)

> Najpierw słyszycie zegarek. W kieszeni, w której leży, tykanie przyspiesza, drobne i natarczywe, a srebro robi się ciepłe przez materiał.
>
> Potem kroki. Szybkie, nierówne, za szybkie jak na kogoś, kto chce zachować twarz.
>
> Cassian Vane staje w progu w samej kamizelce, rozpiętej pierwszy raz, odkąd go znacie. Kieszonka odstaje, pusta. Nie ma łańcuszka. Włosy, zawsze zaczesane do tyłu, opadają mu na czoło. Oddycha tak, jakby biegł przez pół zamku.
>
> Patrzy po waszych twarzach i zatrzymuje wzrok na kieszeni, w której tyka.
>
> „Oddajcie” – mówi cicho. A potem prostuje się, jakby przypomniał sobie, kim jest: „Proszę. To rodzinna pamiątka.”

### 2. Zamknięcie (zdanie na Punkt pauzy 3)

> Gdzieś nad wami zamek wybija ósmą. Uderzenia przychodzą z daleka, przez kamień, jedno po drugim. Osiem. Tyle, ile powinno być.
>
> Za oknami zrobiło się granatowo i zimno. Na schodach prefekci zaganiają młodszych do dormitoriów, czyjś kot miauczy pod drzwiami, które nie chcą się otworzyć. Do ciszy nocnej zostały dwie godziny.
>
> A gdzieś bardzo daleko, za wieloma ścianami, któryś zegar spóźnia się z ostatnim uderzeniem. Tylko o chwilę.

### 3. Zegarek wytrącony (gdy w pojedynku albo szarpaninie zegarek wypada Cassianowi z ręki albo z kieszonki)

> Srebro błyska w powietrzu. Zegarek wylatuje Cassianowi z palców, łańcuszek świszcze jak bat, coś dzwoni o kamień, raz i drugi, i toczy się pod ścianę.
>
> Szybkie tykanie, które słyszeliście od początku, urywa się w pół.
>
> Cassian nagle jest powolny. Zwyczajnie powolny, jak każdy, kto od tygodni nie spał. Różdżka chodzi mu w dłoni o ułamek sekundy za późno. Nie patrzy na was. Patrzy na zegarek pod ścianą i przez moment wygląda bardzo młodo.

### 4. Zabrana godzina (gdy Cassian wygra pojedynek)

> Cassian podchodzi do pokonanego bez pośpiechu. Nie celuje różdżką. Wyjmuje zegarek, otwiera kopertę i unosi ją między wami jak małe lusterko.
>
> Jedno tyknięcie. Głośne i suche, jak trzask łamanej gałązki.
>
> Płomienie świec kładą się na bok, choć nie ma przeciągu. Na jedno uderzenie serca w pomieszczeniu robi się zupełnie cicho: oddechy, kroki na korytarzu, nawet szum krwi w uszach.
>
> Potem dźwięk wraca. Cassian zatrzaskuje kopertę. Policzki ma zaróżowione, oddech spokojny, jakby wrócił z długiego spaceru. Pokonany stoi tam, gdzie stał. Nic się nie zmieniło.
>
> Tylko zegarek w kieszonce Cassiana tyka teraz odrobinę głośniej.

### 5. Gdy Cassian pęka (litość, targ albo przegrana, gdy zaczyna mówić)

> Cassian siada. Nie na krześle, tylko tam, gdzie stoi: na kamiennym stopniu, na brzegu ławki, na podłodze pod ścianą. Ostrożnie, jak ktoś bardzo stary.
>
> Wyciąga lewą rękę z rękawa. Bandaż jest szary od noszenia, a spod jego brzegu wychodzą cienkie czerwone pręgi, równoległe i równe, jak ślady po czymś bardzo ostrym.
>
> Długo na nie patrzy.
>
> „Nie wiem, jak to zatrzymać” – mówi. A potem jeszcze raz, ciszej, jakby słyszał to pierwszy raz na głos: „Ja nie wiem, jak to zatrzymać.”

*Jeśli przy stole pominięto kształt oparzenia (założenie robocze), czytaj tylko: „Bandaż jest szary od noszenia, a na brzegu przebija przez niego rdzawa plama”.*

### 6. Zegarek pęka (gdy postacie niszczą zegarek)

> Szkiełko pęka z cienkim, wysokim dźwiękiem, jak zerwana struna. Z koperty ucieka westchnienie, długie i ciche, jakby ktoś bardzo zmęczony mógł wreszcie wypuścić powietrze.
>
> Na moment milkną wszystkie dalekie zegary zamku. Potem wracają, jeden po drugim, i znowu jest zwyczajnie.
>
> Cassian stoi nad szczątkami bez ruchu. Najpierw ramiona mu opadają, jakby ktoś zdjął z nich worek kamieni. Potem patrzy na swoje puste ręce i blednie.

*Jeśli Ansel jest z postaciami, dodaj:* „Chłopiec za waszymi plecami na mgnienie robi się przejrzysty jak szron na szybie, brzegi mu się strzępią. Potem znów jest. Mruga. «Co to było?»”

## Dla MG

**Kiedy w fikcji:** zwykle wtorek 23 września 1969, wieczór; wcześniej (poniedziałek po lekcji), jeśli postacie skonfrontowały Cassiana zaraz po Obronie (04, rozgałęzienie `konfrontacja-po-lekcji`).

**Wejście** (co najmniej jedno): `flaga.sygnal-cassiana-nazwany`, `flaga.slad-ukaszen`, `flaga.rejestr-godzin`, `flaga.wieza-zbadana`, zegar kradzieży = 3 (Cassian przychodzi sam) albo zegarek u graczy po kradzieży po 04 (Cassian przychodzi po niego).

**Co się naprawdę dzieje.** Cassian Vane od trzech tygodni podbiera czas przez zatrzymany zegarek dziadka i Kartę Pożyczającego, wyrwaną z zaklętej księgi w pracowni Marrow. Każda podebrana chwila to czyjaś stracona godzina, także godzina drużyny z poniedziałku. Cassian nie jest okrutny. Jest przerażony: boi się ojca, boi się księgi, która go poparzyła, i boi się tego, że nie umie przestać. Wchodzi do sceny chłodny i uprzejmy, bo tak się nauczył; pod presją skraca zdania i zaczyna je powtarzać, a w końcu pęka. W połowie czekał, aż ktoś go złapie, więc wobec samych postaci (bez nauczycieli, bez widowni) łamie się szybciej, niż gracze się spodziewają. Publicznie walczy do końca, bo publiczna prawda to dla niego koniec: ojciec, Wren, może wydalenie.

Scena ma dwa zadania. Pierwsze: **zegarek** może tu przejść do postaci jedną z czterech dróg (pojedynek, kradzież, targ, litość) albo zostać zniszczony. Drugie: Cassian jest **najprostszym źródłem lokalizacji pracowni** („Biblioteka. Ostatni rząd.”), ostrzeżenia przed siłowym ruszaniem księgi (oparzona dłoń, „wszystko się obudziło”) i odwrotnej podpowiedzi do gabloty („ona nie daje się brać”). Żadne z nich nie jest bramką: gdy Cassian milczy albo ucieka, do pracowni prowadzą drogi awaryjne (rozgałęzienia `pojedynek-przegrany`, `awaryjne-milczenie`). Karta działa tylko razem z zegarkiem (decyzja MG z 2026-11-20); same w sobie, osobno, są w Sesji 1 wskazówką i pokusą.

**Czego Cassian nie wie i nie powie:** kto napisał księgę, kim jest Ansel (nie widzi go), czym są zatrzymane zegary w pracowni, nazwiska Marrow (chyba że postacie je podadzą). Nie zna sposobu oddawania godzin i nie połączył dopisku na odwrocie karty z gablotą.

### Rytm sceny

*Kroki 1–3 idą zawsze po kolei. Kroki 4 i 5 to dwie drogi do zegarka: grasz jedną albo obie (np. targ po przegranym pojedynku). Krok 6 przychodzi, gdy Cassian zaczyna mówić, bez względu na drogę. Proponowane kwestie otwierające dialogów są dla dialogisty: zostaną w blokach dosłownie albo dialogista je tu poprawi.*

**Krok 1. Spotkanie** (ok. 4 min)
- Czytaj: tekst 1a („Cassian Vane, sam, plecami do was…”, poprzedzony zdaniem miejsca), 1b („Drzwi otwierają się bez pukania…”) albo 1c („Najpierw słyszycie zegarek…”), według drogi wejścia.
- Test: `s1.scena.08.test.pierwsze-spojrzenie` (tylko bez `flaga.sygnal-cassiana-nazwany`: czy postać widzi, że źródłem szybkości jest zegarek)
- Krótko: miejsce zależy od drogi: wnęka w lochach (ślad drżących odczytów), krużganek u stóp wieży o zmierzchu (po scenie 07), pusta sala Obrony (baza grupy trzeciej, tu zwykle przychodzi Cassian w 1b). **Wariant poniedziałkowy** (prosto z korytarza po 04): Cassian mówi „Nie tutaj. Nie przy wszystkich” i wprowadza postacie do pustej klasy obok; przeczytaj tylko pierwszy akapit tekstu 1b (drzwi i klamka), resztę pomiń: tego popołudnia Cassian jest promienny po kradzieży, nie roztrzęsiony.
- Awaryjne: `awaryjne-milczenie` (Cassian ucieka od razu), `awaryjne-bojka` (ktoś atakuje bez słowa).

**Krok 2. Oskarżenie** (ok. 6 min)
- Dialog: `s1.scena.08.dialog.cassian-oskarzony` — „Zgubiliście coś? Bo patrzycie na mnie tak, jakbym to ja to znalazł.” (propozycja)
- Dialog: `s1.scena.08.dialog.cassian-sekret` — „Ja wiem o waszym, wy o moim. Czwarty rok, prawda? Nie bierzcie tego do siebie.” (propozycja; opcjonalnie, gdy postacie grożą albo naciskają)
- Test: `s1.scena.08.test.czytanie-cassiana` (czy blefuje o sekrecie; jak u Wrena)
- Flagi: `flaga.cassian-zdemaskowany` (gdy postacie powiedzą mu w twarz, że kradnie czas), `flaga.sekret-poruszony` (gdy sięgnie po sekret)
- Krótko: Cassian zaprzecza gładko, potem coraz krócej. Każdy konkret, który postacie mają (zegarek, godziny ofiar, ślad do lochów, gwizd, zapach oleju po RETRORSUM), zdejmuje z niego jedną warstwę uprzejmości. Zegar kradzieży staje, gdy Cassian jest zdemaskowany.

**Krok 3. Wyzwanie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-wyzwanie` — „Zróbmy to jak ludzie. Pojedynek, zasady, sekundanci. Przegram, powiem wam, skąd to mam. Wygram, zapomnicie o mnie.” (propozycja)
- Krótko: Cassian proponuje pojedynek, bo w pojedynku ma przewagę, a pojedynek to dla niego sposób, żeby prawda wyszła po cichu. Postacie mogą przyjąć, odmówić albo targować się o stawkę (zegarek, karta, milczenie). Odmowa nie kończy sceny: przejdź do kroku 5.
- Awaryjne: `donos` (postacie idą do Wrena zamiast walczyć).

**Krok 4. Pojedynek** (ok. 12 min)
- Czytaj: tekst 3 („Srebro błyska w powietrzu…”), gdy zegarek wypadnie Cassianowi; tekst 4 („Cassian podchodzi do pokonanego…”), gdy Cassian wygra.
- Test: `s1.scena.08.test.pojedynek`
- Flagi: `flaga.zegarek-cassiana` (wygrany pojedynek: zegarek jako stawka albo wytrącony z ręki)
- Krótko: pierwszy prawdziwy pojedynek w grze. Przegrana kosztuje: Cassian zabiera przegranemu godzinę na oczach wszystkich (tekst 4). Najwyżej 3–4 rundy; jeśli się przeciąga, zegarek wypada (tekst 3) albo w drzwiach staje Wren.
- Awaryjne: `awaryjne-bojka` (pięści zamiast różdżek, świadkowie).

**Krok 5. Zegarek innymi drogami** (ok. 5 min, zamiast pojedynku albo po nim)
- Test: `s1.scena.08.test.kradziez-zegarka`
- Dialog: `s1.scena.08.dialog.cassian-targ` — „Pieniądze? Nie. Mnie interesuje cisza. Ile kosztuje wasza?” (propozycja)
- Dialog: `s1.scena.08.dialog.cassian-litosc` — „Nie patrz tak na mnie. Ja tylko… Trzy tygodnie nie spałem. Trzy tygodnie.” (propozycja; po szczerej trosce, nie po ciekawości)
- Czytaj: tekst 5 („Cassian siada…”), gdy Cassian pęka; tekst 6 („Szkiełko pęka…”), gdy postacie niszczą zegarek.
- Flagi: `flaga.zegarek-cassiana`, `flaga.karta-u-graczy`
- Krótko: kradzież (podczas rozmowy, gdy jedna postać zagaduje), targ (milczenie za zegarek albo kartę), litość (szczera pomoc). Zniszczenie zegarka: rozgałęzienie `zniszczenie-zegarka`.

**Krok 6. Co Cassian wie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-pracownia` — „Biblioteka. Ostatni rząd. Tam, gdzie Pince nie wpuszcza nikogo.” (propozycja)
- Czytaj: tekst 5, jeśli jeszcze nie padł (bandaż to dowód bez słów, W10.2).
- Flagi: `flaga.lokalizacja-pracowni`
- Krótko: W5.1 (lokalizacja), W10.2 (oparzona dłoń, „wszystko się obudziło”), zapasowa droga do W7 („Próbowałem ją okraść. Ona nie daje się brać”). Jeśli postacie mają kartę i pokażą mu dopisek na odwrocie, Cassian blednie: „Myślałem, że to ozdobnik”.

**Krok 7. Zamknięcie** (ok. 2 min)
- Czytaj: tekst 2 („Gdzieś nad wami zamek wybija ósmą…”). Jeśli Cassian powiedział o pracowni, najpierw powtórz jego ostatnie słowa: „Biblioteka. Ostatni rząd.”, i zrób pauzę.
- Flagi: `flaga.cassian-los`
- Krótko: zapada wieczór. Punkt pauzy 3. Dalej nocą do 09 albo do 12, gdy brakuje lokalizacji. W wariancie poniedziałkowym tekstu 2 nie czytasz: przejdź do sceny 05 (Ansel czeka przy schodach), pauza przypada po niej.

### Jak grać Cassiana w tej scenie

- **Trzy stopnie.** *Chłodny:* wolno, uprzejmie, z uśmiechem w głosie, nazwiska zamiast imion, „Nie bierzcie tego do siebie”. *Przyparty:* krótsze zdania, powtórzenia („Nie tutaj. Nie tutaj.”), dłoń na kieszonce, gwizd. *Złamany:* siada, mówi cicho, patrzy na bandaż. Przechodź o stopień w dół za każdy konkretny dowód albo za każdą szczerą troskę. Groźba go nie łamie; groźba go usztywnia i pcha do pojedynku albo do sekretu z 4. roku.
- **Nigdy nie mówi „przepraszam” wprost**, dopóki się nie złamie. Nie używa obelg o pochodzeniu krwi; gdy ktoś inny to robi, milknie.
- **Ojciec** pojawia się tylko w jego słowach: „Mój ojciec mawia…”, „Vane'owie się nie spóźniają”. Urzędnik Ministerstwa, wymagający; nic więcej w tej scenie (szczegóły odłożone, założenie robocze).
- **Ansela nie widzi.** Jeśli chłopiec przyszedł z postaciami, stoi za nimi i wzdryga się przy każdym tyknięciu zegarka Cassiana tak samo jak przy dzwonie. Na wieżę ani na most nie wejdzie.

### Pojedynek: jak go podać

- **Rytuał.** Pojedynek „jak ludzie” znaczy: dwoje naprzeciw siebie, ukłon, różdżki w górę, odliczenie do trzech. Cassian prosi Rosalind Teague na sekundantkę, jeśli jest w pobliżu (zwykle jest: pilnuje go). Druga strona wybiera swojego sekundanta spośród postaci. Sekundant nie walczy, ale patrzy, pilnuje zasad i może podać rękę, gdy ktoś upadnie. To daje rolę graczowi, który nie walczy.
- **Miejsce.** Najlepiej pusta sala Obrony (grupa ma prawo tam ćwiczyć, maty, manekiny jako zasłony). W lochach Cassian odmawia walki pod ścianą Slytherinu („Nie przy moim domu”) i prowadzi do sali Obrony albo do pustej klasy Eliksirów. W krużganku pojedynek może zostać tam, gdzie jest: wahadło nad głowami, mokry mech pod stopami.
- **Pokaż sygnał.** Za każdym razem, gdy Cassian działa poza kolejnością, opisz dłoń na kieszonce i wzdrygnięcie. Gracz, który to nazwie, ma przewagę (liczby: mechanik). Jeśli nikt nie nazwał sygnału wcześniej, ten pojedynek jest drugą szansą.
- **Wren.** W sali Obrony Wren jest blisko. Jeśli pojedynek przekroczy granicę (krew, ktoś upada i nie wstaje, zabrana godzina), staje w drzwiach: „Dosyć”. Nie pyta o zegarek przy wszystkich; pyta Cassiana, czy chce coś powiedzieć, a gdy ten milczy, wysyła wszystkich do dormitoriów. Jeśli uwaga Wrena o ocenach Vane'a nie padła w scenie 04, pada teraz, cicho, do jednej postaci na odchodnym.
- **Story Points.** Walcząca postać, która dostała punkt za pierwszy pojedynek w scenie 04, nie dostaje go drugi raz.

### Rady dla MG, który prowadzi początkujących

- **Daj każdemu zadanie.** Przy 2–3 graczach: jeden walczy albo rozmawia, drugi patrzy na ręce Cassiana (sygnał, kieszonka), trzeci jest sekundantem albo próbuje kradzieży. Zapytaj każdego: „Co robisz, gdy oni rozmawiają?”.
- **Przed pojedynkiem objaśnij jedną rzecz:** w swojej kolejce postać robi dwie rzeczy (np. rzuca zaklęcie i robi unik). Resztę dopowiadaj w trakcie. Pierwsza runda może być „próbna”: pozwól cofnąć decyzję, jeśli gracz źle zrozumiał zasadę.
- **Przegrana też jest ciekawa.** Zanim padnie ostatni rzut, przypomnij, czym grozi przegrana (tekst 4), żeby gracz wybrał świadomie. Po przegranej powiedz wprost, poza fikcją: „Jutro coś przegapisz. Pracownia i tak jest do znalezienia”.
- **Litość to pełnoprawna droga.** Nowi gracze często myślą, że trzeba walczyć. Jeśli nikt nie wpada na troskę, niech Cassian zdradzi zmęczenie wyraźniej (ziewnięcie, drżąca ręka, „trzy tygodnie”), ale nie podpowiadaj słowami.
- **Nie przedłużaj kroku 6.** Gdy Cassian mówi, niech powie trzy rzeczy (biblioteka, księga i „wszystko się obudziło”, gablota) i zamilknie. Pytania o to, kto i dlaczego, zbywa: „Nie wiem. Naprawdę nie wiem”.

### Linie i zasłony

- **Przemoc między uczniami.** Pojedynek jest formalny i ma granicę (Wren, „Dosyć”). Ciężkie rany, krew i bójka bez różdżek dzieją się tylko wtedy, gdy gracze tego chcą i stół na to pozwala; inaczej Wren przychodzi wcześniej.
- **Presja rodzica.** Strach Cassiana przed ojcem jest w scenie tylko w słowach. Nic nie wskazuje na przemoc w domu; jeśli przy stole jest zasłona na ten temat, zostaje tak, a „ojciec” znaczy „oczekiwania”.
- **Załamanie nastolatka.** Tekst 5 to chwila słabości, nie dramat. Jeśli stół woli lżej, Cassian tylko siada i milknie; zdanie „Nie wiem, jak to zatrzymać” wystarczy.
- **Czystość krwi.** Cassian nie używa obelg. Jeśli zrobi to postać gracza, Cassian milknie i patrzy w bok; to jego jedyny słaby punkt, którego się wstydzi.

### Punkt pauzy 3

Po tej scenie jest **Punkt pauzy 3** (ok. 3 h 50 min przy stole). Zamknij tekstem 2. **Przed przerwą zapisz:** gdzie jest zegarek, kto ma kartę, czy padła lokalizacja pracowni, `flaga.cassian-los`, czy zegar kradzieży stanął (i na ilu), komu Cassian zabrał godzinę po przegranej, czy padł sekret z 4. roku, wydane Story Points. **Przy wznowieniu:** noc, po ciszy nocnej. Przypomnij jednym zdaniem ostatnie słowa Cassiana (albo to, że milczał) i zapytaj każdego gracza, jak jego postać wymyka się z dormitorium (scena 09) albo, gdy brakuje lokalizacji, czego szuka jeszcze przed ciszą nocną (scena 12).

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.08.test.pierwsze-spojrzenie`, `s1.scena.08.test.czytanie-cassiana`, `s1.scena.08.test.pojedynek`, `s1.scena.08.test.kradziez-zegarka` (liczby w karcie zegarka; modyfikator za `flaga.cassian-czujny`).

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.pojedynek-wygrany
  rodzaj: glowne
  warunek: "Postać wygrywa pojedynek z Cassianem."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cassian dotrzymuje słowa: mówi o pracowni i oddaje kartę. Zegarek trafia do graczy, jeśli był stawką albo wypadł mu z ręki. Zegar kradzieży staje."
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los, flaga.zegarek-cassiana, flaga.karta-u-graczy, flaga.lokalizacja-pracowni]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.pojedynek-przegrany
  rodzaj: glowne
  warunek: "Cassian wygrywa pojedynek albo ucieka."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cassian zabiera przegranemu godzinę na oczach wszystkich; ta postać przegapia coś małego i ważnego następnego dnia. Nic nie mówi. Drogi awaryjne do pracowni: rejestr pani Pince, śledzenie odczytów, Ansel (scena 12), zegar kradzieży 4 (siatka 6)."
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.targ
  rodzaj: glowne
  warunek: "Postacie targują się: milczenie, pomoc albo sekret w zamian za zegarek, kartę albo informację."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cassian oddaje to, o co się umówiono, i mówi o pracowni. Zostaje dłużnikiem albo rywalem, zależnie od warunków."
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los, flaga.zegarek-cassiana, flaga.karta-u-graczy, flaga.lokalizacja-pracowni, flaga.sekret-poruszony]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.litosc
  rodzaj: glowne
  warunek: "Ktoś szczerze pomaga roztrzęsionemu Cassianowi."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cassian sam oddaje zegarek i kartę i opowiada o pracowni, oparzonej dłoni i gablocie, która „nie daje się brać”. Może zostać sojusznikiem."
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los, flaga.zegarek-cassiana, flaga.karta-u-graczy, flaga.lokalizacja-pracowni]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.donos
  rodzaj: glowne
  warunek: "Postacie idą z Cassianem albo ze swoją wiedzą do Wrena."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Brak dowodów, ale Wren zaczyna patrzeć (a jeśli już podejrzewał, słucha uważniej i zatrzymuje Cassiana po lekcjach). Cassian nic nie mówi przy nauczycielu; lokalizację pracowni postacie zdobywają drogami awaryjnymi."
  flagi_ustaw: [flaga.wren-podejrzewa, flaga.cassian-zdemaskowany, flaga.cassian-los]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.zniszczenie-zegarka
  rodzaj: glowne
  warunek: "Postacie niszczą zegarek Cassiana."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Ansel na chwilę migocze, gdziekolwiek jest; część skradzionych godzin wraca do ofiar (Maisie nagle pamięta swój kwadrans), ale godzina drużyny nie wraca (kotwica Ansela). Zegar kradzieży staje. Zakończenie „moc” przepada."
  flagi_ustaw: [flaga.zegarek-cassiana, flaga.cassian-zdemaskowany]
  prowadzi_do: s1.scena.09
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-milczenie
  rodzaj: awaryjne
  warunek: "Cassian odmawia rozmowy, ucieka albo postacie nie chcą go o nic pytać."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Drogi awaryjne do pracowni (W5): rejestr pani Pince za dnia, śledzenie drżących odczytów, Ansel z Więzią, zegar kradzieży 4 (Cassian idzie tam sam, siatka 6)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-bojka
  rodzaj: awaryjne
  warunek: "Postacie atakują Cassiana bez pojedynku, przy świadkach."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Przychodzi prefekt albo Wren: rozbrojenie, punkty ujemne, szlaban jako kolor. Cassian zostaje zdemaskowany przed postaciami, ale rozmowa o pracowni przesuwa się na później (z ceną czasu)."
  flagi_ustaw: [flaga.cassian-zdemaskowany]
  prowadzi_do: s1.scena.12
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: `flaga.cassian-los`, `flaga.zegarek-cassiana`, `flaga.karta-u-graczy`, `flaga.lokalizacja-pracowni`, `flaga.sekret-poruszony`, `flaga.wren-podejrzewa`; czy zegar kradzieży stanął; komu Cassian zabrał godzinę po przegranej.

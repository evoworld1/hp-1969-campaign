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

*Kroki 1–3 idą zawsze po kolei. Kroki 4 i 5 to dwie drogi do zegarka: grasz jedną albo obie (np. targ po przegranym pojedynku). Krok 6 przychodzi, gdy Cassian zaczyna mówić, bez względu na drogę. Kwestie otwierające dialogów są tu dosłownie takie jak w blokach. Dialogi dodatkowe (Cassian po zegarek w wejściu 1c, Rosalind jako sekundantka, Wren „Dosyć”, Ansel przy postaciach) są w sekcji „Dialogi”.*

**Krok 1. Spotkanie** (ok. 4 min)
- Czytaj: tekst 1a („Cassian Vane, sam, plecami do was…”, poprzedzony zdaniem miejsca), 1b („Drzwi otwierają się bez pukania…”) albo 1c („Najpierw słyszycie zegarek…”), według drogi wejścia.
- Test: `s1.scena.08.test.pierwsze-spojrzenie` (tylko bez `flaga.sygnal-cassiana-nazwany`: czy postać widzi, że źródłem szybkości jest zegarek)
- Krótko: miejsce zależy od drogi: wnęka w lochach (ślad drżących odczytów), krużganek u stóp wieży o zmierzchu (po scenie 07), pusta sala Obrony (baza grupy trzeciej, tu zwykle przychodzi Cassian w 1b). **Wariant poniedziałkowy** (prosto z korytarza po 04): Cassian mówi „Nie tutaj. Nie przy wszystkich” i wprowadza postacie do pustej klasy obok; przeczytaj tylko pierwszy akapit tekstu 1b (drzwi i klamka), resztę pomiń: tego popołudnia Cassian jest promienny po kradzieży, nie roztrzęsiony.
- Awaryjne: `awaryjne-milczenie` (Cassian ucieka od razu), `awaryjne-bojka` (ktoś atakuje bez słowa).

**Krok 2. Oskarżenie** (ok. 6 min)
- Dialog: `s1.scena.08.dialog.cassian-oskarzony` — „Zgubiliście coś? Bo patrzycie na mnie tak, jakbym to ja to znalazł.”
- Dialog: `s1.scena.08.dialog.cassian-sekret` — „Ja wiem o waszym, wy o moim. Czwarty rok, prawda? Nie bierzcie tego do siebie.” (opcjonalnie, gdy postacie grożą albo naciskają)
- Test: `s1.scena.08.test.czytanie-cassiana` (czy blefuje o sekrecie; jak u Wrena)
- Flagi: `flaga.cassian-zdemaskowany` (gdy postacie powiedzą mu w twarz, że kradnie czas), `flaga.sekret-poruszony` (gdy sięgnie po sekret)
- Krótko: Cassian zaprzecza gładko, potem coraz krócej. Każdy konkret, który postacie mają (zegarek, godziny ofiar, ślad do lochów, gwizd, zapach oleju po RETRORSUM), zdejmuje z niego jedną warstwę uprzejmości. Zegar kradzieży staje, gdy Cassian jest zdemaskowany.

**Krok 3. Wyzwanie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-wyzwanie` — „Zróbmy to jak ludzie: pojedynek, zasady, sekundanci. Przegram, powiem wam, skąd to mam. Wygram, zapomnicie o mnie.”
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
- Dialog: `s1.scena.08.dialog.cassian-targ` — „Targ. Wreszcie ktoś mówi moim językiem. Pieniędzy nie chcę, chcę ciszy: ile kosztuje wasza?”
- Dialog: `s1.scena.08.dialog.cassian-litosc` — „Nie patrz tak na mnie. Ja tylko… Trzy tygodnie nie spałem. Trzy tygodnie.” (po szczerej trosce, nie po ciekawości)
- Czytaj: tekst 5 („Cassian siada…”), gdy Cassian pęka; tekst 6 („Szkiełko pęka…”), gdy postacie niszczą zegarek.
- Flagi: `flaga.zegarek-cassiana`, `flaga.karta-u-graczy`
- Krótko: kradzież (podczas rozmowy, gdy jedna postać zagaduje), targ (milczenie za zegarek albo kartę), litość (szczera pomoc). Zniszczenie zegarka: rozgałęzienie `zniszczenie-zegarka`.

**Krok 6. Co Cassian wie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-pracownia` — „Biblioteka. Ostatni rząd. Tam, gdzie Pince nie wpuszcza nikogo.”
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

*Przy każdej osobie: co robi, czego chce w tej scenie, sygnał do pokazania i krótka reakcja na zaczepkę. Pełne karty są pod identyfikatorami.*

**[[npc.cassian-vane]], szóstoroczny Ślizgon, lider grupy rywali**
- *Co robi:* w wejściu 1a stoi sam i nakręca zegarek; w 1b przychodzi do postaci, roztrzęsiony pod gładką twarzą; w 1c wpada po zegarek, rozpięty i bez łańcuszka. Zaprzecza, potem sięga po sekret z 4. roku, potem proponuje pojedynek. Pęka, gdy zostaje sam na sam z postaciami i ktoś go nie atakuje.
- *Czego chce w tej scenie:* jawnie: żeby postacie przestały pytać, najlepiej po cichu i bez nauczycieli. Pod spodem: żeby ktoś go zatrzymał tak, żeby ojciec się nie dowiedział. W wejściu 1c: odzyskać zegarek za każdą cenę poza publiczną awanturą.
- *Sygnał:* prawa dłoń wędruje do kieszonki kamizelki i wraca; wzdrygnięcie po każdym szybkim ruchu; gwizd tej samej krótkiej melodii, gdy się denerwuje; lewa dłoń schowana w rękawie, zaciśnięta w pięść przy słowie „biblioteka” albo „książka, która świeci”.
- *Gdy postacie go zaczepią:* chłodno, uprzejmie, nazwiskiem („Panno [nazwisko]” z przekąsem do dziewcząt). Z każdym konkretnym dowodem zdania krótsze i powtarzane. Groźba go usztywnia (sekret, pojedynek), szczera troska go łamie. Z `flaga.cassian-czujny` nie spuszcza z oka postaci, która już sięgała po zegarek, i trzyma rękę na kieszonce, gdy ta podchodzi.

**[[npc.rosalind-teague]], Ślizgonka z grupy Cassiana** (zwykle w pobliżu, bo go pilnuje)
- *Co robi:* stoi w drzwiach albo kawałek dalej na korytarzu, z rękami skrzyżowanymi. Gdy Cassian proponuje pojedynek, zostaje jego sekundantką i pilnuje zasad.
- *Czego chce w tej scenie:* żeby Cassian przestał, zanim ktoś się dowie, i żeby nikt nie zrobił z tego sprawy publicznej. Woli, żeby przegrał po cichu, niż wygrał na oczach nauczyciela.
- *Sygnał:* pociera kciukiem o palec wskazujący (nawyk z lekcji Wrena); gdy Cassian się wzdryga, ona też, na ułamek sekundy. Bawi się srebrną spinką w kształcie węża, gdy ktoś mówi o ojcach.
- *Gdy postacie ją zaczepią:* „Kochanie…”, uniesiona brew, ironia. Groźba publicznego donosu stawia ją murem za Cassianem. Szczera troska o niego (nie ciekawość) otwiera ją: mówi o nocach bez snu i o zegarku nakręcanym przy kominku.

**[[npc.thaddeus-wren]], profesor Obrony** (blisko, nie w kadrze)
- *Co robi:* siedzi w swoim gabinecie przy sali Obrony albo idzie korytarzem. Wchodzi tylko wtedy, gdy pojedynek przekroczy granicę (krew, ktoś nie wstaje, zabrana godzina) albo gdy postacie same do niego przyjdą (donos).
- *Czego chce w tej scenie:* dowodu, nie pewności. Daje Cassianowi szansę, żeby sam powiedział prawdę; gdy ten milczy, rozsyła wszystkich do dormitoriów.
- *Sygnał:* staje w drzwiach bez słowa, lewa dłoń (bez dwóch palców) na pasie. Patrzy na Cassiana dłużej niż na postacie.
- *Gdy postacie go zaczepią:* krótko, jak meldunek, „panie…”, „panno…”. Nie oskarża przy uczniach. Z `flaga.wren-podejrzewa` słucha uważniej i zatrzymuje Cassiana po lekcjach.

**[[npc.ansel-dray]], chłopiec przy schodach** (tylko jeśli przyszedł z postaciami)
- *Co robi:* stoi za plecami postaci, blisko najżyczliwszej z nich. Wzdryga się przy każdym tyknięciu zegarka Cassiana tak samo jak przy dzwonie. Nie wchodzi do kręgu pojedynku.
- *Czego chce w tej scenie:* żeby nikt się nie bił i żeby to tykanie ucichło. Nie wie, dlaczego tak się go boi.
- *Sygnał:* przy szybkim tykaniu brzegi postaci lekko się rozmywają; zasłania uszy dłońmi.
- *Gdy postacie go zaczepią:* szeptem, jakby Cassian mógł go usłyszeć (nie może). Cassian go nie widzi i nie słyszy; postać, która mówi do Ansela na głos, w oczach Cassiana mówi do pustego miejsca.

**Tło bez kart:** uczniowie na korytarzu, prefekt, który w `awaryjne-bojka` rozdziela walczących, ktoś z grupy Cassiana, kto staje w drzwiach i zaraz znika. MG nadaje im głos według potrzeby; nikt nic ważnego nie wie.

## Dialogi

*Jak czytać bloki: każda kwestia zaczyna się etykietą, która mówi, kiedy jej użyć. Wystarczy kwestia otwierająca i jedna reakcja. [nazwisko] to miejsce na nazwisko postaci gracza; do dziewcząt Cassian mówi z przekąsem „panno [nazwisko]”. Kwestie można czytać dosłownie albo mówić własnymi słowami. Cassian ma trzy stopnie (chłodny, przyparty, złamany, zob. „Jak grać Cassiana”): kwestie w blokach idą mniej więcej od chłodnych do złamanych.*

### Cassian oskarżony (krok 2)

Pierwsza wymiana. Cassian zaprzecza gładko i uprzejmie, jakby rozmawiał z młodszymi. Każdy konkret, który postacie wyłożą, zdejmuje z niego jedną warstwę: zdania się skracają, ręka idzie do kieszonki. Nie licz dowodów skrupulatnie; dwa, trzy wystarczą, żeby był przyparty.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-oskarzony
  npc: npc.cassian-vane
  wyzwalacz: "Postacie pytają Cassiana o stracone godziny, zegarek albo jego szybkość, albo patrzą na niego oskarżycielsko (krok 2)."
  ton: "chłodny, uprzejmy, odrobinę za wolny; z każdym dowodem krótszy i szybszy"
  kwestie:
    - "Otwarcie: „Zgubiliście coś? Bo patrzycie na mnie tak, jakbym to ja to znalazł.”"
    - "Gdy postać jest uprzejma i pyta wprost, bez oskarżenia: „Grzecznie zapytane. Odpowiem grzecznie: nie wiem, o czym mówisz, [nazwisko]. Nie bierz tego do siebie.”"
    - "Gdy postacie mówią o zegarku: (dłoń na kieszonce) „Rodzinna pamiątka. Nie chodzi. Mój ojciec mawia, że Vane'owie się nie spóźniają, więc noszę zegarek, który się nie spóźnia.”"
    - "Gdy postacie dopasowały godziny ofiar do jego sukcesów: „Uczę się. Wiem, że w grupie trzeciej to brzmi egzotycznie.” (pauza, ciszej) „Uczę się. Po nocach.”"
    - "Gdy postacie mówią o śladzie do lochów albo o drżących zegarach przy Slytherinie: „Lochy. Tak. Mieszkam w lochach.” (gwiżdże dwie nuty i urywa) „To nie jest dowód. To jest adres.”"
    - "Gdy postać rozpozna gwizd albo zapach oleju (po RETRORSUM w scenie 03): (zamiera, dłoń zatrzymuje się w pół drogi do kieszonki) „Skąd ty… Nie. Nie tutaj.”"
    - "Gdy postacie mówią mu w twarz, że kradnie czas (ustaw flaga.cassian-zdemaskowany): „Kradnie. Ładne słowo. Wy macie godzinę mniej, ja godzinę więcej. Wszyscy tak robią, tylko nie wszyscy dobrze.”"
    - "Gdy postać kłamie, że Wren już wie: (blednie) „Wren.” (pauza) „To nie mamy o czym rozmawiać.” (odwraca się do wyjścia; jeśli nikt go nie zatrzyma, rozgałęzienie awaryjne-milczenie; jeśli ktoś przejrzy kłamstwo albo powie prawdę, zostaje i jest przyparty)"
    - "Gdy postać grozi albo naciska: przejdź do dialogu cassian-sekret."
    - "Gdy postać pyta o bandaż: (cofa lewą rękę głębiej w rękaw) „Kociołek. Slughorn każe nam pracować za blisko ognia.”"
    - "Gdy postać użyje obelgi o pochodzeniu krwi (wobec kogokolwiek): (milknie, patrzy w bok, długo) „Nie mów tak. Nie przy mnie.”"
    - "Nieprzewidziane (ktoś mówi do Ansela, którego Cassian nie widzi): (marszczy brwi, patrzy w puste miejsce) „Z kim ty rozmawiasz?” (cicho, sam do siebie) „Wszyscy tu już wariujemy.”"
    - "Nieprzewidziane (ktoś rzuca Tempus albo zaklęcie ujawniające na zegarek): (wstrzymuje oddech; gdy nic nie wychodzi, uśmiech wraca) „Mówiłem: pamiątka.” (Tempus przy nim tyka szybciej; to widzą tylko postacie)"
    - "Wariant poniedziałkowy (prosto po lekcji 04, przed wejściem do pustej klasy): „Nie tutaj. Nie przy wszystkich.” Tego dnia jest promienny i pewny siebie: łamie się wolniej, potrzeba o jeden dowód więcej."
    - "Może zdradzić bez warunku: że zegarek był dziadka i nie chodzi; że ojciec chce wyników. Nic o karcie ani pracowni."
    - "Nie zdradza tu: skąd ma kartę, gdzie jest pracownia, co się stało z jego dłonią. To dopiero w kroku 6."
  wariant_od: [flaga.rejestr-godzin, flaga.slad-ukaszen, flaga.sygnal-cassiana-nazwany, flaga.cassian-czujny]
```

### Cassian sięga po sekret (krok 2, opcjonalnie)

Gdy postacie mu grożą albo przypierają go do muru, Cassian odpowiada tym samym: wspólnym sekretem drużyny z 4. roku. MG przed sesją sprawdza w odpowiedziach graczy na pytanie startowe 4, czy Cassian naprawdę go zna, czy tylko blefuje. Test `s1.scena.08.test.czytanie-cassiana` pozwala to wyczuć. Wypowiedz kwestię otwierającą dokładnie tak samo w obu przypadkach: gracze nie powinni rozpoznać różnicy po tonie MG.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-sekret
  npc: npc.cassian-vane
  wyzwalacz: "Postacie grożą Cassianowi donosem, przemocą albo naciskają, gdy jest przyparty (ustaw flaga.sekret-poruszony, gdy padnie kwestia otwierająca)."
  ton: "bardzo spokojny, za spokojny; uśmiech, który nie dociera do oczu"
  kwestie:
    - "Otwarcie: „Ja wiem o waszym, wy o moim. Czwarty rok, prawda? Nie bierzcie tego do siebie.”"
    - "Gdy postacie pytają, co dokładnie wie (zna sekret): podaje jeden szczegół z odpowiedzi graczy, bez puenty, i dodaje: „Wystarczy? Nie lubię mówić za dużo. Ojciec mówi, że to rozrzutność.”"
    - "Gdy postacie pytają, co dokładnie wie (blefuje): „Wystarczająco. Chcecie sprawdzić, ile?” (dłoń na kieszonce, gwizd urwany po dwóch nutach)"
    - "Gdy postać przejrzy blef (sukces w teście czytania): (cisza, potem cicho) „Dobrze. Nie wiem. Ale wy też nie wiecie, czy ja nie wiem. Do wczoraj.” (stopień niżej: przyparty)"
    - "Gdy postać kłamie, że ich sekret i tak już wyszedł: „To po co się denerwujecie?” (czyta kłamstwo dobrze; MG może poprosić o test przeciwny)"
    - "Gdy postacie dalej grożą: „Zróbmy to jak ludzie.” (przejście do dialogu cassian-wyzwanie)"
    - "Gdy postać odpowiada spokojnie, bez groźby („Nie chcemy nic mówić. Chcemy, żebyś przestał”): (milknie, ręka zsuwa się z kieszonki) „Przestał.” (pauza) „Myślicie, że to takie proste.” (droga do litości albo targu)"
    - "Nieprzewidziane (postacie same wyjawiają swój sekret na głos, żeby go rozbroić): (pierwszy raz naprawdę zaskoczony) „No proszę. Grupa trzecia ma odwagę.” Sekret traci wartość jako karta przetargowa; Cassian jest przyparty."
    - "Może zdradzić bez warunku: że zna albo udaje, że zna sekret. Skąd zna, nie mówi („Szkoła ma cienkie ściany”)."
    - "Nie zdradza: że blefuje, dopóki ktoś tego nie przejrzy."
  wariant_od: [flaga.sekret-poruszony]
```

### Cassian wyzywa na pojedynek (krok 3)

Cassian proponuje pojedynek, bo tam ma przewagę i bo to sposób, żeby prawda wyszła po cichu, bez nauczycieli. Mówi to jak propozycję handlową. Postacie mogą przyjąć, odmówić albo negocjować stawkę. Odmowa nie kończy sceny: przejdź do kroku 5.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-wyzwanie
  npc: npc.cassian-vane
  wyzwalacz: "Cassian jest przyparty albo postacie mu grożą; albo postacie same proponują walkę (krok 3)."
  ton: "formalny, prawie uroczysty; pod spodem pośpiech"
  kwestie:
    - "Otwarcie: „Zróbmy to jak ludzie: pojedynek, zasady, sekundanci. Przegram, powiem wam, skąd to mam. Wygram, zapomnicie o mnie.”"
    - "Gdy postacie przyjmują: „Dobrze. Teague, będziesz łaskawa?” (do Rosalind; dialog rosalind-sekundantka) „Wybierzcie swojego. Ten, kto nie walczy, patrzy. Taka jest zasada.”"
    - "Gdy postacie chcą podnieść stawkę o zegarek: (dłoń na kieszonce, długa pauza) „Zegarek.” (pauza) „Dobrze. Jeśli wygracie, jest wasz. Nie wygracie.”"
    - "Gdy postacie chcą podnieść stawkę o kartę: „Karta nie chodzi ze mną po korytarzach. Jeśli wygracie, przyniosę ją sam. Słowo Vane'a.”"
    - "Gdy postacie odmawiają: „Szkoda. W pojedynku przynajmniej wszystko jest jasne.” (przejście do kroku 5: targ, litość albo jego odejście)"
    - "Gdy pojedynek miałby być w lochach, przy ścianie Slytherinu: „Nie przy moim domu. Sala Obrony. Wasza sala, będzie uczciwie.”"
    - "Gdy postać proponuje bójkę bez różdżek albo atakuje bez ukłonu: (cofa się o krok, blednie) „Nie… nie tak. Nie jesteśmy w porcie.” (rozgałęzienie awaryjne-bojka, jeśli postać nie przestanie)"
    - "Po przegranej Cassiana (pojedynek wygrany przez postacie): (siada albo opiera się o ścianę, oddycha ciężko) „Umowa to umowa.” (przejście do dialogu cassian-pracownia)"
    - "Po wygranej Cassiana, po tekście 4 (zabrana godzina): (zaróżowiony, spokojny) „Nie bierz tego do siebie. Jutro trochę mniej zdążysz. Tylko tyle.” (odchodzi; rozgałęzienie pojedynek-przegrany)"
    - "Gdy zegarek wypadnie mu w trakcie (tekst 3): (patrzy na zegarek pod ścianą, nie na postacie) „Nie… zostawcie go. Zostawcie.”"
    - "Nieprzewidziane (postać proponuje inną próbę: zagadkę, wyścig, partię szachów czarodziejów): (zaskoczony, potem uśmiech) „Szachy. Mój ojciec by umarł ze wstydu.” (pauza) „Zgoda. Te same stawki.” (MG prowadzi to jako test przeciwny zamiast pojedynku)"
    - "Może zdradzić bez warunku: że przegrany pojedynek zobowiązuje go do mówienia. Słowa dotrzymuje."
    - "Nie zdradza: że chce przegrać. Sam nie jest tego pewien."
  wariant_od: [flaga.zegarek-cassiana]
```

### Rosalind jako sekundantka (krok 3–4)

Rosalind daje graczom rytuał pojedynku i rolę dla tego, kto nie walczy. Pilnuje zasad naprawdę, także wobec Cassiana: gdy on oszukuje zbyt jawnie, zerka na niego i nic nie mówi. Jeśli Rosalind nie ma w pobliżu, Cassian prosi o sekundowanie Barnaby'ego Fincha albo kogokolwiek z korytarza, a kwestie rytuału mówi sam.

```yaml
dialog:
  id: s1.scena.08.dialog.rosalind-sekundantka
  npc: npc.rosalind-teague
  wyzwalacz: "Cassian prosi Rosalind na sekundantkę; albo postacie zaczepiają ją w trakcie sceny."
  ton: "chłodny, cichy, ironiczny; pauza na końcu zdania, jakby sprawdzała, czy nadążasz"
  kwestie:
    - "Otwarcie: „Kochanie, jeśli już musicie, to porządnie. Ukłon, różdżki w górę, na trzy. Na trzy, nie na dwa.”"
    - "Do sekundanta drużyny: „Ty i ja tylko patrzymy. Jak ktoś upadnie, podajesz mu rękę. Jak ktoś oszukuje, mówisz to głośno. Zrozumiałeś?”"
    - "Gdy postać jest wobec niej uprzejma: „Klasa. Rzadka rzecz w grupie trzeciej.” (unosi brew; tylko tyle)"
    - "Gdy postać grozi jej albo Cassianowi publicznym donosem: „Spróbujcie. Ja widziałam, kto pierwszy wyciągnął różdżkę. Mówię tylko, co widziałam.” (staje murem za Cassianem)"
    - "Gdy postać kłamie: (uśmiecha się) „Kochanie. Naprawdę?” (przy wszystkich, bez dalszych słów)"
    - "Gdy Cassian się wzdryga w pojedynku, a postać pyta ją, co z nim jest: „Nie twoja sprawa, ale… on tak ma od trzech tygodni. Walcz.”"
    - "Gdy postać szczerze pyta, czy z Cassianem wszystko w porządku (troska, nie ciekawość): (długa pauza, ciszej) „On nie śpi. A rano wygląda, jakby przespał tydzień. Nie mów mu, że ci powiedziałam.”"
    - "Gdy Cassian przegra albo straci zegarek: (pierwszy raz bez ironii) „Dosyć, Cassian. Dosyć.”"
    - "Nieprzewidziane (postać prosi ją o pomoc przeciw Cassianowi albo proponuje jej przejęcie grupy): „Jesteś bezczelny. Podoba mi się to.” (pauza) „Odpowiedź brzmi: nie dziś.”"
    - "Może zdradzić po szczerej trosce o Cassiana (najlepiej na osobności, po jego złamaniu albo przegranej): że nakręca zatrzymany zegarek nocą przy kominku w pokoju wspólnym; że wraca do dormitorium o dziwnych porach."
    - "Nie zdradza: niczego o ojcu i panu Nocie. Niczego obcym, którzy grożą Cassianowi."
  wariant_od: []
```

### Cassian po zegarek (wejście 1c)

Ten dialog zastępuje kroki 2–3, gdy postacie ukradły zegarek po scenie 04, a Cassian przybiegł po niego. Bez zegarka jest zwykłym, niewyspanym chłopcem i to widać: zdania urywa od początku. Nie pojedynkuje się, bo nie ma przewagi; najpierw prosi, potem się targuje, a na końcu pęka. Nie rzuca się na postacie, chyba że ktoś zrobi gest, jakby chciał zegarek zniszczyć.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-oddajcie
  npc: npc.cassian-vane
  wyzwalacz: "Wejście 1c: zegarek jest u postaci po kradzieży po scenie 04 (flaga.zegarek-cassiana = u-graczy); Cassian staje w progu."
  ton: "cichy, zdyszany, próbujący wrócić do uprzejmości i nieumiejący"
  kwestie:
    - "Otwarcie: „Oddajcie.” (prostuje się) „Proszę. To rodzinna pamiątka.”"
    - "Gdy postać jest uprzejma i pyta, po co mu zepsuty zegarek: „Bo był dziadka. Bo ojciec mi go dał. Bo…” (urywa) „Po prostu oddajcie.”"
    - "Gdy postać grozi, że zaniesie zegarek do Wrena: (blednie) „Nie. Nie do Wrena.” (pauza) „Czego chcecie? Powiedzcie, czego chcecie.” (przejście do dialogu cassian-targ)"
    - "Gdy postać kłamie, że zegarka nie ma: „Słyszę go. Tyka. On nigdy tak nie tykał, dopóki był u mnie.”"
    - "Gdy postać unosi zegarek, jakby chciała go rozbić: (krok naprzód, ręka wyciągnięta) „Nie! Nie wiem, co się stanie. Rozumiesz? Nie wiem.” (jeśli postać mimo to niszczy: tekst 6, rozgałęzienie zniszczenie-zegarka)"
    - "Gdy postać po prostu oddaje mu zegarek bez warunku: (bierze go oburącz, długo milczy) „Dlaczego?” (to otwiera drogę litości: Cassian mówi dużo więcej, niż by chciał)"
    - "Nieprzewidziane (postać próbuje sama nakręcić zegarek albo użyć go przy nim): (szeptem) „Nie kręć nim. Nie wiesz, czyja to godzina.”"
    - "Może zdradzić bez warunku: że bez zegarka „wszystko jest wolniejsze” i że nie spał od trzech tygodni."
    - "Nie zdradza bez targu albo litości: karty, pracowni, dłoni."
  wariant_od: [flaga.zegarek-cassiana]
```

### Cassian się targuje (krok 5)

Pieniądze Cassiana nie obchodzą; obchodzi go milczenie. Za ciszę wobec Wrena i ojca odda zegarek albo kartę i powie o pracowni, ale nigdy wszystkiego naraz bez wyraźnej umowy. Po udanym targu zostaje dłużnikiem (`flaga.cassian-los` = dluznik), a jeśli warunki były upokarzające, rywalem.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-targ
  npc: npc.cassian-vane
  wyzwalacz: "Postacie proponują wymianę: milczenie, pomoc, pieniądze albo sekret w zamian za zegarek, kartę albo informację; albo Cassian po odmowie pojedynku sam proponuje układ."
  ton: "rzeczowy, chłodny, jak na zebraniu; pod spodem ulga, że ktoś mówi o warunkach, a nie o winie"
  kwestie:
    - "Otwarcie: „Targ. Wreszcie ktoś mówi moim językiem. Pieniędzy nie chcę, chcę ciszy: ile kosztuje wasza?”"
    - "Gdy postacie proponują pieniądze: „Galeony? Mój ojciec ma ich więcej, niż zdążę wydać. Cisza, [nazwisko]. Tylko cisza.”"
    - "Gdy postacie proponują milczenie za kartę i lokalizację: (dłużej się namyśla) „Wren nic nie wie. Ojciec nic nie wie. Nikt nic nie wie.” (wyciąga rękę) „Umowa.”"
    - "Gdy postacie żądają zegarka: (dłoń zaciska się na kieszonce) „Zegarek to co innego.” (pauza) „Dobrze. Ale nie mówcie ojcu, że go zgubiłem. Zgubiłem, rozumiecie? Nie oddałem.”"
    - "Gdy pytają o kartę: „W kufrze. W podszewce. Przyniosę przed ciszą nocną, tam, gdzie powiecie. Albo Teague przyniesie.”"
    - "Gdy postać kłamie w targu (obiecuje ciszę, a widać, że pójdzie do Wrena): „Nie bierz tego do siebie, ale kłamiesz gorzej niż Finch.” (MG może poprosić o test przeciwny; przyłapany kłamca dostaje od niego tylko lokalizację, bez zegarka i karty)"
    - "Gdy postacie stawiają upokarzające warunki (np. ma się przyznać przy całej grupie): „Nie.” (pauza) „Wolę przegrać pojedynek niż to.” (powrót do dialogu cassian-wyzwanie albo odejście)"
    - "Gdy postacie proponują coś w zamian za nic, z dobrej woli (pomoc, bez żądań): przejdź do dialogu cassian-litosc."
    - "Nieprzewidziane (postacie proponują, że pomogą mu oddać godziny): (zamiera) „Oddać.” (pauza) „Myślicie, że się da?” (to otwiera drogę do litości i do dopisku na karcie)"
    - "Może zdradzić po umowie: lokalizację pracowni i to, co uzgodniono (zegarek, kartę albo oba). Przechodzi do dialogu cassian-pracownia."
    - "Nie zdradza przed umową: niczego. Po umowie nie mówi więcej, niż obiecał, chyba że ktoś okaże mu troskę."
  wariant_od: [flaga.zegarek-cassiana, flaga.wren-podejrzewa]
```

### Cassian i litość (krok 5)

Najważniejsza droga dla początkujących graczy. Działa szczera troska, nie ciekawość: „wyglądasz, jakbyś nie spał od tygodnia”, „co ci się stało w rękę?”, podany kubek wody, usiąść obok. Wtedy Cassian schodzi o stopień niżej, a przy drugiej takiej chwili się łamie i czytasz tekst 5. Po litości oddaje zegarek i kartę sam (`flaga.cassian-los` = sojusznik).

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-litosc
  npc: npc.cassian-vane
  wyzwalacz: "Postać okazuje Cassianowi szczerą troskę (sen, ręka, zmęczenie, obecność bez oskarżenia), zwłaszcza na osobności, bez nauczycieli."
  ton: "cichy, zmęczony, z powtórzeniami; na końcu prawie szept"
  kwestie:
    - "Otwarcie: „Nie patrz tak na mnie. Ja tylko… Trzy tygodnie nie spałem. Trzy tygodnie.”"
    - "Wariant poniedziałkowy (Cassian jest tego dnia promienny po kradzieży): „Wyglądam na wyspanego, prawda? To nie mój sen.” (pauza) „To nie jest mój sen.”"
    - "Gdy postać dalej jest łagodna (drugi gest troski; czytaj tekst 5): „Nie wiem, jak to zatrzymać.” (pauza) „Ja nie wiem, jak to zatrzymać.”"
    - "Gdy postać pyta o rękę: (patrzy na bandaż) „To nie kociołek.” (długo nic) „Ona mnie nie chciała puścić.”"
    - "Gdy postać pyta, dlaczego to robił: „Ojciec pisze co tydzień. Pyta o oceny. Nie o mnie, o oceny.” (pauza) „Wystarczyło jedno dobre popołudnie. Potem następne.”"
    - "Gdy postać nagle przechodzi do groźby albo szyderstwa: (wstaje, wraca uprzejmość, ale głos się łamie) „Rozumiem. Myliłem się. Nie bierzcie tego do siebie.” (stopień wyżej; litość tej sceny przepada, zostaje targ albo pojedynek)"
    - "Gdy postać kłamie, że wszystko będzie dobrze: (słabo się uśmiecha) „Kłamiesz ładniej niż ja.” (ale zostaje; to go nie odpycha)"
    - "Gdy postacie proszą o zegarek: (wyjmuje go, kładzie na dłoni postaci, nie puszcza od razu) „Weź. Weź, zanim się rozmyślę.”"
    - "Gdy postacie proszą o kartę: „W kufrze. W podszewce. Przyniosę. Albo… niech Teague przyniesie, ja nie chcę jej już dotykać.”"
    - "Gdy postać oferuje pomoc na później: „Gdybyście szli tam nocą… znam drogę, na której nie chodzi Filch.” (pauza) „Ze mną czy beze mnie. Jak wolicie.”"
    - "Nieprzewidziane (postać go przytula albo kładzie mu rękę na ramieniu): (sztywnieje, potem nie odsuwa się) „Mój ojciec by…” (nie kończy) „Nieważne.”"
    - "Może zdradzić po litości: wszystko z dialogu cassian-pracownia, bez targu, łącznie z gablotą."
    - "Nie zdradza nawet teraz: słowa „przepraszam” wprost, dopóki nie przeczytasz tekstu 5. Potem może je powiedzieć raz, do postaci, której godzinę wziął: „Wtedy przed Obroną… to byliście wy. Przepraszam.”"
  wariant_od: [flaga.cassian-zdemaskowany]
```

### Co Cassian wie o pracowni (krok 6)

Cassian mówi, gdy przegrał pojedynek, zawarł targ albo się złamał. Podaje trzy rzeczy w kawałkach, każdą osobno, z pauzą: (1) gdzie jest pracownia, (2) księga i to, co się stało, gdy szarpnął kartę, (3) gablota, która „nie daje się brać”. Potem milknie. Na pytania „kto” i „dlaczego” ma jedną odpowiedź: nie wie.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-pracownia
  npc: npc.cassian-vane
  wyzwalacz: "Cassian przegrał pojedynek, zawarł targ albo złamał się po litości (krok 6). Ustaw flaga.lokalizacja-pracowni po kwestii otwierającej."
  ton: "cichy, płaski, jakby mówił o kimś innym; przy księdze zaciska lewą dłoń"
  kwestie:
    - "Otwarcie: „Biblioteka. Ostatni rząd. Tam, gdzie Pince nie wpuszcza nikogo.”"
    - "Gdy pytają, jak tam wszedł: „Nie wszedłem. Drzwi mnie znalazły. Szukałem książki o zegarmistrzostwie, a potem po prostu… były.”"
    - "Gdy pytają, co tam jest (księga, W10): „Książka. Wisi w powietrzu nad pulpitem i świeci na niebiesko. Nie da się jej zabrać i nie da się przewrócić strony.” (pauza) „Ma zagadki. Nie umiałem żadnej.”"
    - "Gdy pytają o kartę albo dłoń (W10.2; jeśli nie było tekstu 5, czytaj go teraz): „Dotknąłem raz. Potem drugi. Potem złapałem kartkę i szarpnąłem.” (patrzy na bandaż) „Wszystko się obudziło. Zegary, wahadła, schody. Zdążyłem na ostatnim.”"
    - "Gdy pytają, czy tam wracał, albo o gablotę (zapasowa droga do W7): „Raz. Tam jest szafka ze szkłem, w środku notatnik. Próbowałem ją okraść. Szkło zmatowiało mi pod ręką.” (pauza) „Ona nie daje się brać.”"
    - "Gdy postacie pokażą mu dopisek na odwrocie karty (flaga.karta-u-graczy): (blednie, czyta dwa razy) „Myślałem, że to ozdobnik.” (cicho) „Oddać. Można oddać.”"
    - "Gdy pytają, kto napisał książkę albo czyja to pracownia: „Nie wiem. Naprawdę nie wiem.”"
    - "Gdy postać podaje nazwisko Marrow: „Marrow?” (kręci głową) „Nie było tam żadnych nazwisk. Tylko zegary. Wszystkie stały.”"
    - "Gdy pytają, jak oddać skradzione godziny: „Gdybym wiedział, nie stałbym tu.”"
    - "Gdy postać grozi, że go tam zaciągnie: „Nie.” (pierwszy raz bez uprzejmości) „Do tej książki nie podejdę. Możecie mnie wydać ojcu, nie podejdę.”"
    - "Gdy postać kłamie, że już tam była: (patrzy uważnie) „To czemu pytasz?” (po teście przeciwnym wygranym przez niego milknie i nic więcej nie dodaje)"
    - "Nieprzewidziane (postać pyta o chłopca w żółtym krawacie albo o ducha Puchona): (marszczy brwi) „Duch Puchona to plotka trzeciorocznych.” (pauza) „Czemu wszyscy mnie o to pytają?”"
    - "Może zdradzić bez dodatkowego warunku (gdy już mówi): lokalizację (ostatni rząd Działu Ksiąg Zakazanych), księgę nad pulpitem, porażenie przy dotyku, „wszystko się obudziło”, gablotę z notatnikiem, która nie daje się brać."
    - "Nie zdradza, bo nie wie: kto napisał księgę, nazwiska Marrow, kim jest Ansel, czym są zatrzymane zegary, jak oddawać godziny. Nie połączył dopisku na karcie z gablotą, dopóki mu go nie pokażą."
  wariant_od: [flaga.karta-u-graczy, flaga.lokalizacja-pracowni]
```

### Profesor Wren: „Dosyć” (krok 4 albo donos)

Wren wchodzi w dwóch sytuacjach: gdy pojedynek przekracza granicę albo gdy postacie przychodzą do niego z Cassianem lub ze swoją wiedzą (rozgałęzienie `donos`). Przy uczniach nie pyta o zegarek. Daje Cassianowi jedną szansę na prawdę; Cassian przy nauczycielu zawsze milczy.

```yaml
dialog:
  id: s1.scena.08.dialog.wren-dosyc
  npc: npc.thaddeus-wren
  wyzwalacz: "Pojedynek przekracza granicę (krew, ktoś nie wstaje, zabrana godzina), bójka przy świadkach, albo postacie przychodzą do Wrena z donosem."
  ton: "niski, cichy, krótki jak meldunek; długie pauzy"
  kwestie:
    - "Otwarcie (w drzwiach): „Dosyć.” (pauza) „Różdżki na podłogę. Wszystkie.”"
    - "Do Cassiana: „Panie Vane. Chce mi pan coś powiedzieć?” (Cassian: „Nie, panie profesorze.”) „Rozumiem.”"
    - "Do wszystkich: „Dormitoria. Wszyscy. Rozmowa jutro po lekcji.”"
    - "Gdy postać na odchodnym próbuje mu coś powiedzieć o Cassianie: „Dowód, panie [nazwisko]. Nie pewność. Pewność mam własną, i nic z nią nie mogę zrobić.”"
    - "Uwaga o ocenach, jeśli nie padła w scenie 04 (cicho, do jednej postaci na odchodnym): „Pan Vane podniósł oceny w dwa tygodnie. Ze wszystkiego naraz. Tak się nie da, chyba że ktoś przestał spać.”"
    - "Donos: postacie mówią o zegarku: „Zepsuty zegarek to nie przestępstwo. Proszę mi przynieść coś, co jest.”"
    - "Donos z flaga.wren-podejrzewa (już podejrzewa): (słucha do końca, stuka raz kostką w blat) „Zatrzymam pana Vane'a po lekcjach. Wy nic nie robicie. Rozumiemy się?”"
    - "Gdy postać kłamie: „Wróćcie, gdy będziecie gotowi powiedzieć mi prawdę.”"
    - "Gdy postać grozi albo jest bezczelna: (długie spojrzenie) „Szlaban. Jutro wieczorem.”"
    - "Gdy postacie przynoszą mu zegarek: (bierze, waży w dłoni, nie otwiera) „Zostanie u mnie.” (flaga.zegarek-cassiana = skonfiskowany; zegarek u nauczyciela sam nic nie podbiera)"
    - "Nieprzewidziane (ktoś jest ranny albo nie wstaje): (klęka, sprawdza oddech) „Skrzydło szpitalne. Ty i ty, pod ramiona. Już.”"
    - "Może zdradzić: że patrzy na Cassiana i że potrzebuje dowodu. Swój konkret o ocenach."
    - "Nie zdradza: niczego o swojej pracy w Biurze Aurorów ani o dawnej sprawie. Nie oskarża Cassiana przy uczniach."
  wariant_od: [flaga.wren-podejrzewa, flaga.zegarek-cassiana]
```

### Ansel przy postaciach (tylko jeśli przyszedł z nimi)

Ansel nic nie wie o Cassianie i nie może mu nic zrobić. Jest tu po to, żeby gracze poczuli, że tykanie zegarka ma coś wspólnego z chłopcem. Mówi szeptem, choć Cassian i tak go nie słyszy. Nie podsuwa rozwiązań.

```yaml
dialog:
  id: s1.scena.08.dialog.ansel-przy-cassianie
  npc: npc.ansel-dray
  wyzwalacz: "Ansel stoi za postaciami, gdy Cassian jest w pobliżu i zegarek tyka."
  ton: "szeptem, szybko, jednym tchem; potem cisza"
  kwestie:
    - "Otwarcie: „Proszę pana… proszę pani… to tyka tak samo jak wtedy, kiedy zrobiło się cicho.” (zasłania uszy)"
    - "Gdy postać jest dla niego czuła (stanie przed nim, położy rękę na ramieniu): „Dziękuję. Już mniej głośno.”"
    - "Gdy postać pyta, czy zna Cassiana: „Tego pana? Nie. On mnie nie widzi. Nikt tak dużo nie patrzy przeze mnie jak on.”"
    - "Gdy postać na niego krzyczy, żeby był cicho: (kuli się) „Przepraszam.” (znika przy pierwszej okazji, wraca jutro)"
    - "Gdy zaczyna się pojedynek: „Nie bijcie się, proszę. Pani profesor mówiła, że w zamku się nie biega i nie bije.”"
    - "Gdy Cassian zabiera komuś godzinę (tekst 4): (blednie, brzegi się strzępią na chwilę) „Zrobiło się zimno. Czuliście? Zrobiło się zimno.”"
    - "Nieprzewidziane (postacie każą mu dotknąć zegarka albo coś Cassianowi zabrać): (cofa się) „Nie. Nie chcę. To jest… to jest czyjeś.”"
    - "Może zdradzić: tylko to, co czuje (tykanie jak przy straconej godzinie, zimno). Po zniszczeniu zegarka (tekst 6): „Co to było?”"
    - "Nie zdradza, bo nie wie: nic o pracowni ani o karcie w tej scenie. Nie mówi „umarłem” ani „duch”."
  wariant_od: []
```

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

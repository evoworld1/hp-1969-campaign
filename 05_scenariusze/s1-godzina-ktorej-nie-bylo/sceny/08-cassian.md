---
id: s1.scena.08
typ: scena
tytul: "Cassian"
status: recenzja
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
  - flaga.zegarek-u-graczy
  - flaga.karta-u-graczy
  - flaga.lokalizacja-pracowni
  - flaga.sekret-poruszony
  - flaga.wren-podejrzewa
  - flaga.cassian-czujny
  - flaga.zegarek-zniszczony
  - flaga.zegarek-skonfiskowany
  - flaga.dumbledore-powiadomiony
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
- Dialog (tylko wejście 1c, zegarek jest u postaci): `s1.scena.08.dialog.cassian-oddajcie` — „Oddajcie.” (prostuje się) „Proszę. To rodzinna pamiątka.” Ten dialog zastępuje kroki 2–3 (Cassian bez zegarka nie ma przewagi i nie wyzywa na pojedynek): po nim idź do kroku 5 (targ, litość albo zniszczenie).
- Awaryjne: `awaryjne-milczenie` (Cassian odmawia rozmowy), `awaryjne-poscig` (ucieka biegiem), `awaryjne-bojka` (ktoś atakuje bez słowa), `awaryjne-brak-czasu` (zostało mniej niż 20 minut).

**Krok 2. Oskarżenie** (ok. 6 min)
- Dialog: `s1.scena.08.dialog.cassian-oskarzony` — „Zgubiliście coś? Bo patrzycie na mnie tak, jakbym to ja to znalazł.”
- Dialog: `s1.scena.08.dialog.cassian-sekret` — „Ja wiem o waszym, wy o moim. Czwarty rok, prawda? Nie bierzcie tego do siebie.” (opcjonalnie, gdy postacie grożą albo naciskają)
- Test: `s1.scena.08.test.czytanie-cassiana` (czy blefuje o sekrecie; jak u Wrena)
- Flagi: `flaga.cassian-zdemaskowany` (gdy postacie powiedzą mu w twarz, że kradnie czas), `flaga.sekret-poruszony` (gdy sięgnie po sekret)
- Krótko: Cassian zaprzecza gładko, potem coraz krócej. Każdy konkret, który postacie mają (zegarek, godziny ofiar, ślad do lochów, gwizd, zapach oleju po RETRORSUM), zdejmuje z niego jedną warstwę uprzejmości. Zegar kradzieży staje, gdy Cassian jest zdemaskowany.

**Krok 3. Wyzwanie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-wyzwanie` — „Zróbmy to jak ludzie: pojedynek, zasady, sekundanci. Przegram, powiem wam, skąd to mam. Wygram, zapomnicie o mnie.”
- Krótko: Cassian proponuje pojedynek, bo w pojedynku ma przewagę, a pojedynek to dla niego sposób, żeby prawda wyszła po cichu. Postacie mogą przyjąć, odmówić albo targować się o stawkę (zegarek, karta, milczenie). Odmowa nie kończy sceny: przejdź do kroku 5.
- Awaryjne: `donos` (postacie idą do Wrena zamiast walczyć), `awaryjne-wyzsza-instancja` (idą do McGonagall albo Dumbledore'a).

**Krok 4. Pojedynek** (ok. 12 min)
- Czytaj: tekst 3 („Srebro błyska w powietrzu…”), gdy zegarek wypadnie Cassianowi; tekst 4 („Cassian podchodzi do pokonanego…”), gdy Cassian wygra.
- Dialog: `s1.scena.08.dialog.rosalind-sekundantka` — „Kochanie, jeśli już musicie, to porządnie. Ukłon, różdżki w górę, na trzy. Na trzy, nie na dwa.” (przed pierwszą rundą, rytuał i sekundant)
- Dialog: `s1.scena.08.dialog.wren-dosyc` — „Dosyć.” (pauza) „Różdżki na podłogę. Wszystkie.” (gdy pojedynek przekroczy granicę: krew, ktoś nie wstaje, zabrana godzina)
- Dialog (tylko jeśli Ansel jest z postaciami): `s1.scena.08.dialog.ansel-przy-cassianie` — „Proszę pana… proszę pani… to tyka tak samo jak wtedy, kiedy zrobiło się cicho.”
- Test: `s1.scena.08.test.pojedynek` (atak postaci); `s1.scena.08.test.pojedynek-unik` (atak Cassiana, obrona postaci; w rundzie z Chwilą Cassian atakuje dwa razy)
- Test: `s1.scena.08.test.pojedynek-zegarek` (gdy postać celuje w zegarek: Expelliarmus po uprzedzeniu albo Accio na kieszonkę)
- Flagi: `flaga.zegarek-cassiana` (wygrany pojedynek: zegarek jako stawka albo wytrącony z ręki)
- Krótko: pierwszy prawdziwy pojedynek w grze. Przegrana kosztuje: Cassian zabiera przegranemu godzinę na oczach wszystkich (tekst 4). Najwyżej 3–4 rundy; jeśli się przeciąga, zegarek wypada (tekst 3) albo w drzwiach staje Wren. Kolejność w rundzie: unik postaci przeciw atakowi Cassiana (`pojedynek-unik`), potem atak postaci (`pojedynek`); `pojedynek-zegarek` zamiast zwykłego ataku.
- Awaryjne: `awaryjne-bojka` (pięści zamiast różdżek, świadkowie), `awaryjne-skrzydlo-szpitalne` (ktoś nie wstaje albo jest ranny), `awaryjne-zegarek-do-wrena` (postacie po pojedynku niosą zegarek do nauczyciela).

**Krok 5. Zegarek innymi drogami** (ok. 5 min, zamiast pojedynku albo po nim)
- Test: `s1.scena.08.test.kradziez-zegarka`
- Test: `s1.scena.08.test.zniszczenie-zegarka` (tylko gdy postać naprawdę próbuje rozbić zegarek; nie rzucaj, jeśli stół tego nie chce)
- Dialog: `s1.scena.08.dialog.cassian-targ` — „Targ. Wreszcie ktoś mówi moim językiem. Pieniędzy nie chcę, chcę ciszy: ile kosztuje wasza?”
- Dialog: `s1.scena.08.dialog.cassian-litosc` — „Nie patrz tak na mnie. Ja tylko… Trzy tygodnie nie spałem. Trzy tygodnie.” (po szczerej trosce, nie po ciekawości)
- Czytaj: tekst 5 („Cassian siada…”), gdy Cassian pęka; tekst 6 („Szkiełko pęka…”), gdy postacie niszczą zegarek.
- Flagi: `flaga.zegarek-cassiana`, `flaga.karta-u-graczy`
- Krótko: kradzież (podczas rozmowy, gdy jedna postać zagaduje), targ (milczenie za zegarek albo kartę), litość (szczera pomoc). Zniszczenie zegarka: rozgałęzienie `zniszczenie-zegarka` (gdy Cassian milczał i niczego jeszcze nie powiedział: `awaryjne-zniszczenie-wczesne`). Nieudana kradzież: `awaryjne-kradziez-wpadka`. Karta bez zegarka: `awaryjne-karta-bez-zegarka`; obiecana karta, która nie przychodzi: `awaryjne-karta-nie-przyszla`.

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
    - "Otwarcie, w poniedziałek prosto po lekcji Obrony (scena 04), przed wejściem do pustej klasy: „Nie tutaj. Nie przy wszystkich.” (tego dnia jest promienny i pewny siebie: łamie się wolniej, potrzeba o jeden dowód więcej)"
    - "Gdy postać jest uprzejma i pyta wprost, bez oskarżenia: „Grzecznie zapytane. Odpowiem grzecznie: nie wiem, o czym mówisz, [nazwisko]. Nie bierz tego do siebie.”"
    - "Gdy pytają o zegarek: (dłoń na kieszonce) „Rodzinna pamiątka. Nie chodzi. Mój ojciec mawia, że Vane'owie się nie spóźniają, więc noszę zegarek, który się nie spóźnia.”"
    - "Gdy wykładają dowody: (gdy pokazują, że godziny ofiar pasują do jego sukcesów) „Uczę się. Wiem, że w grupie trzeciej to brzmi egzotycznie.” (pauza, ciszej) „Uczę się. Po nocach.” (gdy mówią o śladzie do lochów albo o drżących zegarach przy Slytherinie) „Lochy. Tak. Mieszkam w lochach.” (gwiżdże dwie nuty i urywa) „To nie jest dowód. To jest adres.” (gdy postać rozpoznaje jego gwizd albo zapach oleju, bo cofnęła się w czasie w scenie 03; zamiera, dłoń staje w pół drogi do kieszonki) „Skąd ty… Nie. Nie tutaj.”"
    - "Gdy mówią mu w twarz, że kradnie czas: „Kradnie. Ładne słowo. Wy macie godzinę mniej, ja godzinę więcej. Wszyscy tak robią, tylko nie wszyscy dobrze.” (zapisz: Cassian jest zdemaskowany)"
    - "Gdy postać grozi albo naciska: (przejdź do rozmowy „Cassian sięga po sekret” niżej)"
    - "Gdy pytają o bandaż: (cofa lewą rękę głębiej w rękaw) „Kociołek. Slughorn każe nam pracować za blisko ognia.”"
    - "Gdy postać kłamie, że Wren już wie: (blednie) „Wren.” (pauza) „To nie mamy o czym rozmawiać.” (odwraca się do wyjścia; jeśli nikt go nie zatrzyma, dalej według sekcji „Gdy gracze zboczą”, część o tym, że Cassian odmawia rozmowy; jeśli ktoś przejrzy kłamstwo albo powie prawdę, zostaje i jest przyparty)"
    - "Gdy ktoś użyje obelgi o pochodzeniu krwi (wobec kogokolwiek): (milknie, patrzy w bok, długo) „Nie mów tak. Nie przy mnie.”"
    - "Nieprzewidziane: (gdy ktoś mówi do Ansela, którego Cassian nie widzi; Cassian marszczy brwi, patrzy w puste miejsce) „Z kim ty rozmawiasz?” (cicho, sam do siebie) „Wszyscy tu już wariujemy.” (gdy ktoś rzuca Tempus albo zaklęcie ujawniające na zegarek, wstrzymuje oddech; gdy nic nie wychodzi, uśmiech wraca) „Mówiłem: pamiątka.” (Tempus przy nim tyka szybciej; to widzą tylko postacie)"
    - "Może zdradzić bez warunku: że zegarek był dziadka i nie chodzi i że ojciec chce od niego wyników. Nic o karcie ani o pracowni."
    - "Nie zdradza w tej rozmowie: skąd ma kartę, gdzie jest pracownia ani co się stało z jego dłonią. To mówi dopiero wtedy, gdy przegra pojedynek, zawrze targ albo się złamie (rozmowa „Co Cassian wie o pracowni”)."
  wariant_od: [flaga.rejestr-godzin, flaga.slad-ukaszen, flaga.sygnal-cassiana-nazwany, flaga.cassian-czujny]
```

### Cassian sięga po sekret (krok 2, opcjonalnie)

Gdy postacie mu grożą albo przypierają go do muru, Cassian odpowiada tym samym: wspólnym sekretem drużyny z 4. roku. MG przed sesją sprawdza w odpowiedziach graczy na pytanie startowe 4, czy Cassian naprawdę go zna, czy tylko blefuje. Test czytania Cassiana (sekcja „Testy”) pozwala postaciom to wyczuć. Wypowiedz kwestię otwierającą dokładnie tak samo w obu przypadkach: gracze nie powinni rozpoznać różnicy po tonie MG.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-sekret
  npc: npc.cassian-vane
  wyzwalacz: "Postacie grożą Cassianowi donosem, przemocą albo naciskają, gdy jest przyparty. Gdy padnie kwestia otwierająca, zapisz, że wspólny sekret został poruszony."
  ton: "bardzo spokojny, za spokojny; uśmiech, który nie dociera do oczu"
  kwestie:
    - "Otwarcie: „Ja wiem o waszym, wy o moim. Czwarty rok, prawda? Nie bierzcie tego do siebie.”"
    - "Gdy pytają, co dokładnie wie: (jeśli naprawdę zna sekret, podaje jeden szczegół z odpowiedzi graczy, bez puenty, i dodaje:) „Wystarczy? Nie lubię mówić za dużo. Ojciec mówi, że to rozrzutność.” (jeśli blefuje:) „Wystarczająco. Chcecie sprawdzić, ile?” (dłoń na kieszonce, gwizd urwany po dwóch nutach)"
    - "Gdy dalej grożą: „Zróbmy to jak ludzie.” (przejdź do rozmowy „Cassian wyzywa na pojedynek” niżej)"
    - "Gdy postać odpowiada spokojnie, bez groźby (np. że nie chcą nic mówić, chcą tylko, żeby przestał): (milknie, ręka zsuwa się z kieszonki) „Przestał.” (pauza) „Myślicie, że to takie proste.” (stąd prowadzi droga do litości albo do targu)"
    - "Gdy postać przejrzy blef (sukces w teście czytania Cassiana): (cisza, potem cicho) „Dobrze. Nie wiem. Ale wy też nie wiecie, czy ja nie wiem. Do wczoraj.” (schodzi stopień niżej: jest przyparty)"
    - "Gdy postać kłamie, że ich sekret i tak już wyszedł: „To po co się denerwujecie?” (dobrze czyta kłamstwo; możesz poprosić o test przeciwny)"
    - "Nieprzewidziane: (gdy postacie same wyjawiają swój sekret na głos, żeby go rozbroić; Cassian jest pierwszy raz naprawdę zaskoczony) „No proszę. Grupa trzecia ma odwagę.” (sekret traci wartość jako karta przetargowa; Cassian jest przyparty)"
    - "Może zdradzić bez warunku: że zna wspólny sekret drużyny z 4. roku albo udaje, że go zna. Skąd go zna, nie mówi („Szkoła ma cienkie ściany”)."
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
    - "Gdy postacie przyjmują: „Dobrze. Teague, będziesz łaskawa?” (do Rosalind; dalej jej rozmowa „Rosalind jako sekundantka” niżej) „Wybierzcie swojego. Ten, kto nie walczy, patrzy. Taka jest zasada.”"
    - "Gdy postacie odmawiają: „Szkoda. W pojedynku przynajmniej wszystko jest jasne.” (przejdź do kroku 5: targ, litość albo jego odejście)"
    - "Gdy chcą podnieść stawkę o zegarek albo o kartę: (o zegarek: dłoń na kieszonce, długa pauza) „Zegarek.” (pauza) „Dobrze. Jeśli wygracie, jest wasz. Nie wygracie.” (o kartę:) „Karta nie chodzi ze mną po korytarzach. Jeśli wygracie, przyniosę ją sam. Słowo Vane'a.”"
    - "Gdy chcą walczyć w lochach, przy ścianie Slytherinu: „Nie przy moim domu. Sala Obrony. Wasza sala, będzie uczciwie.”"
    - "Gdy zegarek wypadnie mu w trakcie pojedynku (tekst 3): (patrzy na zegarek pod ścianą, nie na postacie) „Nie… zostawcie go. Zostawcie.”"
    - "Gdy pojedynek się kończy: (jeśli Cassian przegrał, siada albo opiera się o ścianę, oddycha ciężko) „Umowa to umowa.” (przejdź do rozmowy „Co Cassian wie o pracowni” niżej; jeśli Cassian wygrał, po tekście 4 o zabranej godzinie, zaróżowiony i spokojny, mówi:) „Nie bierz tego do siebie. Jutro trochę mniej zdążysz. Tylko tyle.” (odchodzi; dalej według sekcji „Rozgałęzienia”, część o przegranym pojedynku)"
    - "Gdy postać proponuje bójkę bez różdżek albo atakuje bez ukłonu: (cofa się o krok, blednie) „Nie… nie tak. Nie jesteśmy w porcie.” (jeśli postać nie przestanie, dalej według sekcji „Gdy gracze zboczą”, część o bójce bez pojedynku)"
    - "Nieprzewidziane: (gdy postać proponuje inną próbę: zagadkę, wyścig, partię szachów czarodziejów; Cassian jest zaskoczony, potem się uśmiecha) „Szachy. Mój ojciec by umarł ze wstydu.” (pauza) „Zgoda. Te same stawki.” (prowadź to jako test przeciwny zamiast pojedynku)"
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
    - "Gdy drużyna wybierze swojego sekundanta (Rosalind mówi do niego): „Ty i ja tylko patrzymy. Jak ktoś upadnie, podajesz mu rękę. Jak ktoś oszukuje, mówisz to głośno. Zrozumiałeś?”"
    - "Gdy postać jest wobec niej uprzejma: „Klasa. Rzadka rzecz w grupie trzeciej.” (unosi brew; tylko tyle)"
    - "Gdy postać grozi jej albo Cassianowi publicznym donosem: „Spróbujcie. Ja widziałam, kto pierwszy wyciągnął różdżkę. Mówię tylko, co widziałam.” (staje murem za Cassianem)"
    - "Gdy postać kłamie: (uśmiecha się) „Kochanie. Naprawdę?” (przy wszystkich, bez dalszych słów)"
    - "Gdy Cassian się wzdryga w pojedynku, a postać pyta ją, co z nim jest: „Nie twoja sprawa, ale… on tak ma od trzech tygodni. Walcz.”"
    - "Gdy postać szczerze pyta, czy z Cassianem wszystko w porządku (troska, nie ciekawość): (długa pauza, ciszej) „On nie śpi. A rano wygląda, jakby przespał tydzień. Nie mów mu, że ci powiedziałam.”"
    - "Gdy Cassian przegra albo straci zegarek: (pierwszy raz bez ironii) „Dosyć, Cassian. Dosyć.”"
    - "Nieprzewidziane: (gdy postać prosi ją o pomoc przeciw Cassianowi albo proponuje jej przejęcie grupy) „Jesteś bezczelny. Podoba mi się to.” (pauza) „Odpowiedź brzmi: nie dziś.”"
    - "Może zdradzić postaci, która szczerze martwi się o Cassiana (najlepiej na osobności, gdy Cassian już się złamał albo przegrał): że nakręca zatrzymany zegarek nocą przy kominku w pokoju wspólnym; że wraca do dormitorium o dziwnych porach."
    - "Nie zdradza: niczego o ojcu i panu Nocie. Niczego obcym, którzy grożą Cassianowi."
  wariant_od: []
```

### Cassian po zegarek (gdy zegarek jest u postaci, tekst 1c)

Ten dialog zastępuje kroki 2–3, gdy postacie ukradły zegarek po scenie 04, a Cassian przybiegł po niego. Bez zegarka jest zwykłym, niewyspanym chłopcem i to widać: zdania urywa od początku. Nie pojedynkuje się, bo nie ma przewagi; najpierw prosi, potem się targuje, a na końcu pęka. Nie rzuca się na postacie, chyba że ktoś zrobi gest, jakby chciał zegarek zniszczyć.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-oddajcie
  npc: npc.cassian-vane
  wyzwalacz: "Tekst 1c: postacie ukradły zegarek po scenie 04 i mają go przy sobie; Cassian staje w progu."
  ton: "cichy, zdyszany, próbujący wrócić do uprzejmości i nieumiejący"
  kwestie:
    - "Otwarcie: „Oddajcie.” (prostuje się) „Proszę. To rodzinna pamiątka.”"
    - "Gdy postać jest uprzejma i pyta, po co mu zepsuty zegarek: „Bo był dziadka. Bo ojciec mi go dał. Bo…” (urywa) „Po prostu oddajcie.”"
    - "Gdy postać grozi, że zaniesie zegarek do Wrena: (blednie) „Nie. Nie do Wrena.” (pauza) „Czego chcecie? Powiedzcie, czego chcecie.” (przejdź do rozmowy „Cassian się targuje” niżej)"
    - "Gdy postać kłamie, że zegarka nie ma: „Słyszę go. Tyka. On nigdy tak nie tykał, dopóki był u mnie.”"
    - "Gdy postać po prostu oddaje mu zegarek bez warunku: (bierze go oburącz, długo milczy) „Dlaczego?” (to otwiera drogę litości: Cassian mówi dużo więcej, niż by chciał)"
    - "Gdy postać unosi zegarek, jakby chciała go rozbić: (krok naprzód, ręka wyciągnięta) „Nie! Nie wiem, co się stanie. Rozumiesz? Nie wiem.” (jeśli postać mimo to niszczy zegarek, przeczytaj tekst 6 i poprowadź według sekcji „Rozgałęzienia”, część o zniszczeniu zegarka)"
    - "Nieprzewidziane: (gdy postać próbuje sama nakręcić zegarek albo użyć go przy nim; Cassian mówi szeptem) „Nie kręć nim. Nie wiesz, czyja to godzina.”"
    - "Może zdradzić bez warunku: że bez zegarka „wszystko jest wolniejsze” i że nie spał od trzech tygodni."
    - "Nie zdradza bez targu albo litości: niczego o karcie, pracowni ani o swojej dłoni."
  wariant_od: [flaga.zegarek-cassiana]
```

### Cassian się targuje (krok 5)

Pieniądze Cassiana nie obchodzą; obchodzi go milczenie. Za ciszę wobec Wrena i ojca odda zegarek albo kartę i powie o pracowni, ale nigdy wszystkiego naraz bez wyraźnej umowy. Po udanym targu zostaje dłużnikiem postaci, a jeśli warunki były upokarzające, ich rywalem (zapisz, kim się stał).

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
    - "Gdy postać kłamie w targu (obiecuje ciszę, a widać, że pójdzie do Wrena): „Nie bierz tego do siebie, ale kłamiesz gorzej niż Finch.” (możesz poprosić o test przeciwny; przyłapany kłamca dostaje od niego tylko lokalizację pracowni, bez zegarka i karty)"
    - "Gdy postacie stawiają upokarzające warunki (np. ma się przyznać przy całej grupie): „Nie.” (pauza) „Wolę przegrać pojedynek niż to.” (wróć do rozmowy „Cassian wyzywa na pojedynek” albo Cassian odchodzi)"
    - "Gdy postacie z dobrej woli proponują pomoc i niczego nie żądają: (przejdź do rozmowy „Cassian i litość” niżej)"
    - "Nieprzewidziane: (gdy postacie proponują, że pomogą mu oddać godziny; Cassian zamiera) „Oddać.” (pauza) „Myślicie, że się da?” (to otwiera drogę do litości i do dopisku na karcie)"
    - "Może zdradzić po zawarciu umowy: gdzie jest pracownia i to, co uzgodniono (zegarek, kartę albo oba). Wtedy przejdź do rozmowy „Co Cassian wie o pracowni”."
    - "Nie zdradza przed umową: niczego. Po umowie nie mówi więcej, niż obiecał, chyba że ktoś okaże mu troskę."
  wariant_od: [flaga.zegarek-cassiana, flaga.wren-podejrzewa]
```

### Cassian i litość (krok 5)

Najważniejsza droga dla początkujących graczy. Działa szczera troska, nie ciekawość: „wyglądasz, jakbyś nie spał od tygodnia”, „co ci się stało w rękę?”, podany kubek wody, usiąść obok. Wtedy Cassian schodzi o stopień niżej, a przy drugiej takiej chwili się łamie i czytasz tekst 5. Po litości oddaje zegarek i kartę sam i zostaje sojusznikiem postaci (zapisz to).

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-litosc
  npc: npc.cassian-vane
  wyzwalacz: "Postać okazuje Cassianowi szczerą troskę (sen, ręka, zmęczenie, obecność bez oskarżenia), zwłaszcza na osobności, bez nauczycieli."
  ton: "cichy, zmęczony, z powtórzeniami; na końcu prawie szept"
  kwestie:
    - "Otwarcie: „Nie patrz tak na mnie. Ja tylko… Trzy tygodnie nie spałem. Trzy tygodnie.”"
    - "Otwarcie, w poniedziałek, gdy Cassian jest promienny po kradzieży: „Wyglądam na wyspanego, prawda? To nie mój sen.” (pauza) „To nie jest mój sen.”"
    - "Gdy postać dalej jest łagodna (drugi gest troski): (przeczytaj tekst 5) „Nie wiem, jak to zatrzymać.” (pauza) „Ja nie wiem, jak to zatrzymać.”"
    - "Gdy postać pyta o rękę: (patrzy na bandaż) „To nie kociołek.” (długo nic) „Ona mnie nie chciała puścić.”"
    - "Gdy postać pyta, dlaczego to robił: „Ojciec pisze co tydzień. Pyta o oceny. Nie o mnie, o oceny.” (pauza) „Wystarczyło jedno dobre popołudnie. Potem następne.”"
    - "Gdy postać nagle przechodzi do groźby albo szyderstwa: (wstaje, wraca uprzejmość, ale głos się łamie) „Rozumiem. Myliłem się. Nie bierzcie tego do siebie.” (stopień wyżej; litość tej sceny przepada, zostaje targ albo pojedynek)"
    - "Gdy postać kłamie, że wszystko będzie dobrze: (słabo się uśmiecha) „Kłamiesz ładniej niż ja.” (ale zostaje; to go nie odpycha)"
    - "Gdy proszą o zegarek albo o kartę: (o zegarek: wyjmuje go, kładzie na dłoni postaci, nie puszcza od razu) „Weź. Weź, zanim się rozmyślę.” (o kartę:) „W kufrze. W podszewce. Przyniosę. Albo… niech Teague przyniesie, ja nie chcę jej już dotykać.”"
    - "Gdy postać oferuje pomoc na później: „Gdybyście szli tam nocą… znam drogę, na której nie chodzi Filch.” (pauza) „Ze mną czy beze mnie. Jak wolicie.”"
    - "Nieprzewidziane: (gdy postać go przytula albo kładzie mu rękę na ramieniu; Cassian sztywnieje, potem się nie odsuwa) „Mój ojciec by…” (nie kończy) „Nieważne.”"
    - "Może zdradzić, gdy już się złamał: wszystko, co wie o pracowni (rozmowa „Co Cassian wie o pracowni”), bez żadnego targu, łącznie z gablotą."
    - "Nie zdradza nawet teraz: słowa „przepraszam” wprost, dopóki nie przeczytasz tekstu 5. Potem może je powiedzieć raz, do postaci, której godzinę wziął: „Wtedy przed Obroną… to byliście wy. Przepraszam.”"
  wariant_od: [flaga.cassian-zdemaskowany]
```

### Co Cassian wie o pracowni (krok 6)

Cassian mówi, gdy przegrał pojedynek, zawarł targ albo się złamał. Podaje trzy rzeczy w kawałkach, każdą osobno, z pauzą: (1) gdzie jest pracownia, (2) księga i to, co się stało, gdy szarpnął kartę, (3) gablota, która „nie daje się brać”. Potem milknie. Na pytania „kto” i „dlaczego” ma jedną odpowiedź: nie wie.

```yaml
dialog:
  id: s1.scena.08.dialog.cassian-pracownia
  npc: npc.cassian-vane
  wyzwalacz: "Cassian przegrał pojedynek, zawarł targ albo złamał się po litości (krok 6). Po kwestii otwierającej zapisz, że postacie wiedzą, gdzie jest pracownia."
  ton: "cichy, płaski, jakby mówił o kimś innym; przy księdze zaciska lewą dłoń"
  kwestie:
    - "Otwarcie: „Biblioteka. Ostatni rząd. Tam, gdzie Pince nie wpuszcza nikogo.”"
    - "Gdy pytają, jak tam wszedł: „Nie wszedłem. Drzwi mnie znalazły. Szukałem książki o zegarmistrzostwie, a potem po prostu… były.”"
    - "Gdy pytają, co tam jest: „Książka. Wisi w powietrzu nad pulpitem i świeci na niebiesko. Nie da się jej zabrać i nie da się przewrócić strony.” (pauza) „Ma zagadki. Nie umiałem żadnej.”"
    - "Gdy pytają o kartę albo o jego dłoń: (jeśli nie było jeszcze tekstu 5, przeczytaj go teraz) „Dotknąłem raz. Potem drugi. Potem złapałem kartkę i szarpnąłem.” (patrzy na bandaż) „Wszystko się obudziło. Zegary, wahadła, schody. Zdążyłem na ostatnim.”"
    - "Gdy pytają, czy tam wracał, albo o gablotę: (to zapasowa podpowiedź do gabloty w pracowni) „Raz. Tam jest szafka ze szkłem, w środku notatnik. Próbowałem ją okraść. Szkło zmatowiało mi pod ręką.” (pauza) „Ona nie daje się brać.”"
    - "Gdy pytają, kto napisał książkę, czyja to pracownia albo jak oddać skradzione godziny: „Nie wiem. Naprawdę nie wiem.” (gdy postać podaje nazwisko Marrow:) „Marrow?” (kręci głową) „Nie było tam żadnych nazwisk. Tylko zegary. Wszystkie stały.” (o oddawanie godzin:) „Gdybym wiedział, nie stałbym tu.”"
    - "Gdy postacie mają już kartę i pokażą mu dopisek na jej odwrocie: (blednie, czyta dwa razy) „Myślałem, że to ozdobnik.” (cicho) „Oddać. Można oddać.”"
    - "Gdy postać grozi, że go tam zaciągnie: „Nie.” (pierwszy raz bez uprzejmości) „Do tej książki nie podejdę. Możecie mnie wydać ojcu, nie podejdę.”"
    - "Gdy postać kłamie, że już tam była: (patrzy uważnie) „To czemu pytasz?” (jeśli wygra z nią test przeciwny, milknie i nic więcej nie dodaje)"
    - "Nieprzewidziane: (gdy postać pyta o chłopca w żółtym krawacie albo o ducha Puchona; Cassian marszczy brwi) „Duch Puchona to plotka trzeciorocznych.” (pauza) „Czemu wszyscy mnie o to pytają?”"
    - "Może zdradzić, gdy już zaczął mówić (bez dodatkowych warunków): gdzie jest pracownia (ostatni rząd Działu Ksiąg Zakazanych), że nad pulpitem wisi księga, że poraziła go, gdy szarpnął kartę, że wtedy „wszystko się obudziło” i że jest tam gablota z notatnikiem, która nie daje się brać. Podaje to w kawałkach, każdą rzecz osobno."
    - "Nie zdradza, bo nie wie: kto napisał księgę, nazwiska Marrow, kim jest Ansel, czym są zatrzymane zegary, jak oddawać godziny. Nie połączył dopisku na karcie z gablotą, dopóki mu go nie pokażą."
  wariant_od: [flaga.karta-u-graczy, flaga.lokalizacja-pracowni]
```

### Profesor Wren: „Dosyć” (krok 4 albo donos)

Wren wchodzi w dwóch sytuacjach: gdy pojedynek przekracza granicę albo gdy postacie przychodzą do niego z Cassianem lub ze swoją wiedzą (donos). Przy uczniach nie pyta o zegarek. Daje Cassianowi jedną szansę na prawdę; Cassian przy nauczycielu zawsze milczy.

```yaml
dialog:
  id: s1.scena.08.dialog.wren-dosyc
  npc: npc.thaddeus-wren
  wyzwalacz: "Pojedynek przekracza granicę (krew, ktoś nie wstaje, zabrana godzina), bójka przy świadkach, albo postacie przychodzą do Wrena z donosem."
  ton: "niski, cichy, krótki jak meldunek; długie pauzy"
  kwestie:
    - "Otwarcie, w drzwiach: „Dosyć.” (pauza) „Różdżki na podłogę. Wszystkie.”"
    - "Gdy różdżki leżą już na podłodze: (do Cassiana) „Panie Vane. Chce mi pan coś powiedzieć?” (Cassian odpowiada: „Nie, panie profesorze.”) „Rozumiem.” (do wszystkich) „Dormitoria. Wszyscy. Rozmowa jutro po lekcji.”"
    - "Gdy postać na odchodnym próbuje mu coś powiedzieć o Cassianie: „Dowód, panie [nazwisko]. Nie pewność. Pewność mam własną, i nic z nią nie mogę zrobić.”"
    - "Gdy postacie wychodzą, a Wren nie mówił im jeszcze w scenie 04 o ocenach Cassiana: (cicho, do jednej postaci) „Pan Vane podniósł oceny w dwa tygodnie. Ze wszystkiego naraz. Tak się nie da, chyba że ktoś przestał spać.”"
    - "Gdy postacie przychodzą z donosem i mówią o zegarku: „Zepsuty zegarek to nie przestępstwo. Proszę mi przynieść coś, co jest.” (jeśli Wren już wcześniej podejrzewał Cassiana, zamiast tego słucha do końca i stuka raz kostką w blat) „Zatrzymam pana Vane'a po lekcjach. Wy nic nie robicie. Rozumiemy się?”"
    - "Gdy postacie przynoszą mu zegarek: (bierze, waży w dłoni, nie otwiera) „Zostanie u mnie.” (zegarek jest odtąd skonfiskowany; u nauczyciela sam nic nie podbiera)"
    - "Gdy postać kłamie: „Wróćcie, gdy będziecie gotowi powiedzieć mi prawdę.”"
    - "Gdy postać grozi albo jest bezczelna: (długie spojrzenie) „Szlaban. W środę.”"
    - "Nieprzewidziane: (gdy ktoś jest ranny albo nie wstaje; Wren klęka i sprawdza oddech) „Skrzydło szpitalne. Ty i ty, pod ramiona. Już.”"
    - "Może zdradzić: że obserwuje Cassiana i że potrzebuje dowodu. Jeśli nie zrobił tego w scenie 04, mówi też, co zauważył w ocenach Cassiana (podniósł je ze wszystkiego naraz w dwa tygodnie)."
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
    - "Gdy postacie niszczą zegarek (po tekście 6): „Co to było?”"
    - "Nieprzewidziane: (gdy postacie każą mu dotknąć zegarka albo coś Cassianowi zabrać; Ansel się cofa) „Nie. Nie chcę. To jest… to jest czyjeś.”"
    - "Może zdradzić: tylko to, co czuje: że zegarek tyka tak samo jak wtedy, gdy postacie straciły godzinę, i że robi się zimno."
    - "Nie zdradza, bo nie wie: nic o pracowni ani o karcie w tej scenie. Nie mówi „umarłem” ani „duch”."
  wariant_od: []
```

## Testy

*Jak czytać: wszystkie liczby liczone dla czterech archetypów z instrukcji tworzenia postaci (A pojedynkowicz, B badacz, C kombinator, D opiekun). Przy rzutach przeciwnych (Opposed Test, test przeciwny, Walker s. 4) obie strony rzucają, a wyższy wynik wygrywa; remis rozstrzyga Narrator. Atak w pojedynku trafia, gdy rzut jest równy celowi albo wyższy (s. 165). W tej scenie postacie nie mają stanu Drained (wyczerpanie umysłu, +3 do trudności) z sceny 03, bo pierwszy posiłek go zdjął; wyjątek to wariant poniedziałkowy (zob. modyfikatory).*

### Pojedynek z Cassianem: zasady sceny i liczby

Pojedynek z Cassianem opiera się na zasadach Walkera (Duelling, s. 33, 41, 165) i na zasadach z sceny 04. To jest **pierwszy prawdziwy pojedynek**, więc wszystko jest tu uproszczone do jednego zdania na rundę. Zasady poniżej to zasady domowe sceny (zob. „Założenia robocze” w raporcie).

- **Jedna wymiana na rundę.** W każdej rundzie postać i Cassian atakują po razie (uproszczenie względem dwóch akcji Walkera, tak samo jak w pokazie u Wrena). Obrona to darmowy unik (1D10 + Speed + Wits, s. 33). Tylko zaklęcia opanowane trafiają (ZD-06 a). Formalny pojedynek używa łagodnych uroków bez ran: Flipendo, Trip Jinx, Rictusempra, Expelliarmus, Impedimenta. Kółek zdrowia nie ma, chyba że wynik 3× celu (zob. ZD-09, tabela w scenie 04): Shaken (1 kółko ciała, +1 do trudności).
- **Kto wygrywa.** Postać wygrywa przy **2 trafieniach** albo gdy zegarek wypadnie Cassianowi. Cassian wygrywa przy **3 trafieniach**. Taka asymetria wyrównuje jego Skradzione Chwile (jak w pokazie u Wrena). Najwyżej **4 rundy**: po czwartej wygrywa ten, kto ma więcej trafień; przy równej liczbie zegarek wypada Cassianowi (tekst 3) i wygrywa postać.
- **Skradzione Chwile w pojedynku (zdolność Cassiana).** Pula **2 Chwile na całą walkę**, wydawane w rundach 1 i 2 (po jednej, tylko póki zegarek jest przy nim). W rundzie z Chwilą Cassian atakuje **dwa razy, zanim postać zaatakuje raz**. Przed każdą Chwilą: dwa palce w kieszonce i wzdrygnięcie (sygnał). Po wypadnięciu zegarka Chwil nie ma, a Cassian jest zwyczajnie niewyspany: **-2 do jego rzutów** do końca sceny.
- **Nazwany sygnał.** Postać, która zna sygnał (nazwała go na głos w 04 albo wygrała `pierwsze-spojrzenie`), (a) atakuje **przed** Chwilą Cassiana i (b) Cassian dostaje -2 do rzutu drugiego ataku z Chwili (wzdrygnięcie). Jeśli nikt nie nazwał sygnału wcześniej, ten pojedynek jest drugą szansą: po pierwszej Chwili obserwator rzuca `pierwsze-spojrzenie` ze zmniejszoną trudnością.
- **Sekundant.** Sekundant nie walczy. Jeśli woła ostrzeżenie na głos (np. „Ręka na kieszonce!”), walcząca postać dostaje **+1 do uniku** (Working Together, s. 4; jeden sekundant, jeden bonus). Rosalind sekunduje Cassianowi tylko rytualnie: nie pomaga mu mechanicznie.
- **Wygrana Cassiana (zabrana godzina).** Bez rzutu. Przegrany dostaje **stan Drained (+3 do trudności)** do pierwszego posiłku następnego dnia, czyli także na noc (sceny 09 i 12) i do śniadania. Zgodnie z decyzją MG z 2026-11-19 zabrane godziny kosztują Drained. Dodatkowo postać „przegapi coś małego i ważnego” (efekt fabularny w rozgałęzieniu `pojedynek-przegrany`). **Druga godzina nie zmienia kotwicy Ansela** (jego kotwicą jest wspólna godzina drużyny ze sceny 03): koszt to wyłącznie Drained, według jednolitej reguły z `graf-scen.md`. Po zabraniu godziny staje w drzwiach Wren (granica pojedynku, dialog `wren-dosyc`).
- **Story Points.** Po nieudanym rzucie ataku albo uniku gracz może wydać 1 Story Point i dorzucić 1D10 (s. 4); jeden punkt na rzut. Za pierwszy pojedynek 1 Story Point, jeśli postać nie dostała go w scenie 04 (s. 4: ważne „pierwsze razy”). RETRORSUM po przegranej rundzie albo po zabranej godzinie: cofa do wskazanej chwili (najwyżej do początku pojedynku), następny rzut to pewne trafienie albo pewny unik ([[zasada.nagrody-z-teaserow]]).

**Szanse (bez Story Points, bez Drained).** Cassian: atak 1D10 + 12 (Wits 6 + Duelling 5 + różdżka 1), unik 1D10 + 10 (Speed 4 + Wits 6).

| Archetyp | Najlepszy atak postaci (rzut) | Trafia w Cassiana | Unik postaci | Cassian trafia | Wygrana pojedynku: sygnał nienazwany, bez / z sekundantem | Sygnał nazwany, bez / z sekundantem |
|---|---|---|---|---|---|---|
| A. Odważny pojedynkowicz | Flipendo +12 | 72% | +10 | 72% | 20% / 32% | 59% / 65% |
| B. Bystry badacz | Expelliarmus +10 | 55% | +8 | 85% | 4% / 8% | 31% / 34% |
| C. Zręczny kombinator | Expelliarmus +11 | 64% | +12 | 55% | 42% / 57% | 64% / 73% |
| D. Empatyczny opiekun | Expelliarmus +7 | 28% | +7 | 90% | 0% / 1% | 8% / 8% |

Szanse z symulacji całego pojedynku (Cassian używa obu Chwil). Wytrącenie zegarka (test `pojedynek-zegarek`) i Story Points podnoszą je dalej. **Rada dla MG:** powiedz graczom wprost, że pojedynek jest trudny, jeśli nie zauważyli sygnału, i że nazwanie sygnału zmienia go z „raczej nie” na „może”. Archetyp D prawie nie wygra na rzutach; jego drogą są sekundant, litość i targ. Gracz z D, który chce walczyć, dostaje to samo uczciwe ostrzeżenie.

```yaml
test:
  id: s1.scena.08.test.pierwsze-spojrzenie
  opis: "Postać patrzy na Cassiana i słucha: czy widzi, że szybkość i wypoczęta twarz biorą się z zegarka (dłoń na kieszonce, za szybkie tykanie, ciepłe srebro). Rzuca tylko gdy nikt wcześniej nie ustawił flaga.sygnal-cassiana-nazwany. Test standardowy (Standard Test, s. 3), rzuca każda postać osobno; kto nie zda, rzuca jeszcze raz po pierwszej Skradzionej Chwili w pojedynku, o ile do niego dojdzie (druga szansa). Wits to bystrość, Observation to spostrzegawczość. Szanse przy Wits + Observation 9-10 i trudności 12: A, C, D 80%, B 90%; w 1a (zegarek w jego dłoniach, tykanie słychać) trudność 9: praktycznie pewny sukces. Sukces tylko daje wiedzę: flagę ustawia dopiero powiedzenie na głos w grze (jak w 04), więc MG pyta: „Mówisz to komuś?”."
  kto: kazdy
  rzut: "1D10 + Wits + Observation"
  trudnosc: "Tricky (12)"
  modyfikatory:
    - warunek: "Wejście 1a: Cassian nakręca zegarek w obu dłoniach, tykanie słychać od początku"
      wartosc: "-3 do trudności"
    - warunek: "Druga próba po pierwszej Skradzionej Chwili w pojedynku (dłoń na kieszonce, wzdrygnięcie, ruch za szybki dla oka)"
      wartosc: "-3 do trudności"
    - warunek: "Wejście 1c: zegarek tyka w kieszeni postaci, więc źródło jest oczywiste"
      wartosc: "bez rzutu: sukces"
    - warunek: "Gracz zapowiedział, że patrzy na ręce Cassiana (nie na twarz)"
      wartosc: "+1 do rzutu"
    - warunek: "Postać ma specjalizację Observation pasującą do sytuacji, np. Observation (Twarze) (s. 13)"
      wartosc: "+1 do rzutu"
    - warunek: "Wariant poniedziałkowy: postać nadal ma Drained po scenie 03 (przed pierwszym posiłkiem)"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: porazka
      efekt: "Postać widzi tylko, że Cassian jest nienaturalnie wypoczęty i szybki w ruchach. Przy pierwszej Chwili w pojedynku rzuca drugi raz. Bez pojedynku nadal ma drabinkę podpowiedzi: Cassian sam dotyka kieszonki przy słowie „zegarek”."
      flagi_ustaw: []
    - wynik: sukces
      efekt: "Tekst z miejsca spotkania plus: dłoń idzie do kieszonki, zanim ruch Cassiana stanie się za szybki; z kieszonki ciepło i ciche, drobne tykanie. Postać rozumie, że szybkość przychodzi z zegarka. MG pyta, czy mówi to głośno; kto powie, ustawia flaga.sygnal-cassiana-nazwany (rozgałęzienie w scenie 04) i dostaje przewagę w pojedynku (zasady wyżej)."
      flagi_ustaw: []
```

```yaml
test:
  id: s1.scena.08.test.czytanie-cassiana
  opis: "Cassian wypowiada kwestię otwierającą dialogu cassian-sekret („Ja wiem o waszym, wy o moim. Czwarty rok, prawda?”). Postać próbuje poznać, czy naprawdę zna sekret, czy blefuje. Test przeciwny (Opposed Test, s. 4), jak u Wrena w scenie 04: postać rzuca 1D10 + Wits + Observation, Cassian 1D10 + Wits + Chicanery (Chicanery to podstęp, tu: kontrola twarzy i blef, s. 21; Wits 6 + Chicanery 5 = 1D10 + 11). Szanse postaci przy Wits + Observation 9: 30%, z nazwanym nawykiem 60%, przy Cassianie przyparty 50%; przy 10: 39%, z nawykiem 69%. MG ustalił zawczasu, czy Cassian zna sekret (odpowiedzi graczy na pytanie startowe 4), i mówi prawdę przy wygranej. Powiedz kwestię otwierającą tak samo w obu przypadkach."
  kto: jeden
  rzut: "1D10 + Wits + Observation"
  trudnosc: "przeciwny: 1D10 + Wits + Chicanery (npc.cassian-vane, 1D10 + 11)"
  modyfikatory:
    - warunek: "Gracz nazwał na głos znak blefu i co z niego wynika: dłoń na kieszonce, gwizd urwany po dwóch nutach, uśmiech spóźniony względem oczu (tylko pierwszy raz)"
      wartosc: "+3 do rzutu"
    - warunek: "Cassian jest już przyparty (padły co najmniej dwa konkrety z dialogu cassian-oskarzony); trudniej mu panować nad twarzą"
      wartosc: "+2 do rzutu"
    - warunek: "Inna postać podpowiada zza pleców (Working Together, s. 4); najwyżej jedna"
      wartosc: "+1 do rzutu"
    - warunek: "Wariant poniedziałkowy: Cassian promienny po kradzieży, pewny siebie; postać nadal ma Drained"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: przegrana
      efekt: "Cassian brzmi tak samo spokojnie jak zawsze. Postać nie wie, czy blefuje. MG nie zdradza prawdy; kwestia wisi w powietrzu, a groźba donosu staje się ryzykiem."
      flagi_ustaw: []
    - wynik: wygrana
      efekt: "MG mówi prawdę jednym zdaniem: Cassian zna sekret (podaje szczegół) albo blefuje (dłoń na kieszonce, gwizd). Przy blefie postać przejrzała go na oczach drużyny: Cassian jest przyparty (kwestia z dialogu cassian-sekret). Przy prawdziwej wiedzy postać wie, co ma do stracenia, i może wybrać spokojną drogę (targ, litość)."
      flagi_ustaw: []
    - wynik: remis
      efekt: "Cassian przez chwilę nie odpowiada, a potem uśmiecha się za wolno. Rzućcie jeszcze raz, a przy drugim remisie wygrywa Cassian (zasada domowa, jak w przedmiot.zegarek-cassiana.test.kradziez)."
      flagi_ustaw: []
```

```yaml
test:
  id: s1.scena.08.test.pojedynek
  opis: "Pojedynek postaci z Cassianem (krok 4), atak postaci. Zasady sceny w części „Pojedynek z Cassianem” wyżej: jedna wymiana na rundę, postać wygrywa przy 2 trafieniach albo wypadnięciu zegarka, Cassian przy 3, najwyżej 4 rundy. Atak w pojedynku to 1D10 + Wits + Duelling (s. 41); jak w scenie 04 bierzemy wyższą z dwóch wartości: Duelling z premią różdżki za Duelling albo umiejętność zaklęcia (Charms dla Expelliarmusa, Rictusempry i Impedimenty; D.A.D.A. dla Flipendo i Trip Jinx), a inne premie różdżek się nie liczą. Tylko zaklęcia opanowane. Cel to unik Cassiana: 1D10 + Speed + Wits (Speed 4 + Wits 6 = 1D10 + 10). Atak trafia, gdy rzut jest równy celowi albo wyższy (s. 165). Wynik 2× i 3× celu daje efekt z tabeli ZD-09 (scena 04): np. przy Flipendo cel traci 3 albo 4 akcje, przy Expelliarmus różdżka leci do ręki rzucającego. Szanse trafienia: A 72% (Flipendo), B 55%, C 64%, D 28% (Expelliarmus); łączne szanse wygranej w tabeli wyżej. Story Point po chybieniu dorzuca 1D10 (s. 4); RETRORSUM daje pewne trafienie."
  kto: jeden
  rzut: "1D10 + Wits + Duelling albo umiejętność zaklęcia (wyższa)"
  trudnosc: "przeciwny: unik 1D10 + Speed + Wits (npc.cassian-vane, 1D10 + 10)"
  modyfikatory:
    - warunek: "Zaklęcie nieopanowane (ZD-06 a: dodaje się aktualna trudność zaklęcia, s. 165); w praktyce nie trafia"
      wartosc: "+12 do trudności"
    - warunek: "Postać atakuje przed Chwilą Cassiana, bo zna sygnał (kolejność, nie premia do rzutu; zob. zasady wyżej)"
      wartosc: "bez zmiany rzutu, zmienia kolejność"
    - warunek: "Cassian po wypadnięciu zegarka: niewyspany, bez Chwil"
      wartosc: "-2 do rzutu Cassiana"
    - warunek: "Wariant poniedziałkowy: postać nadal ma Drained (kary atakującego dodają się do celu, s. 165)"
      wartosc: "+3 do trudności"
    - warunek: "Postać ma wcześniej odniesioną lekką ranę: Shaken (1 kółko ciała, s. 35)"
      wartosc: "+1 do trudności"
  wyniki:
    - wynik: wygrana
      efekt: "Trafienie dla postaci: Cassian traci równowagę, ląduje na macie albo różdżka wyskakuje mu z dłoni (odlatuje do rąk rzucającego przy Expelliarmus). Po drugim trafieniu postać wygrywa: Cassian dotrzymuje słowa (rozgałęzienie pojedynek-wygrany), Rosalind mówi „Dosyć, Cassian”. Przy wyniku 2× albo 3× celu dodaj efekt z tabeli ZD-09 (np. 3× Expelliarmus: Cassian odrzucony na 2-3 m i Shaken)."
      flagi_ustaw: []
    - wynik: przegrana
      efekt: "Cassian schodzi z linii o pół kroku, jakby wiedział wcześniej, a urok rozbija się o manekin albo ścianę. Dokładnie jak w 04: bez ran, kilka osób to widzi."
      flagi_ustaw: []
```

```yaml
test:
  id: s1.scena.08.test.pojedynek-unik
  opis: "Atak Cassiana w pojedynku, obrona postaci. Cassian atakuje 1D10 + 12 (Wits 6 + Duelling 5 + różdżka 1) zaklęciem opanowanym: Flipendo, Trip Jinx, Expelliarmus albo Impedimenta (Impedimenta: cel traci dwie następne akcje, s. 53). W rundzie z Chwilą atakuje dwa razy, zanim postać zaatakuje raz; nazwany sygnał zmienia kolejność i daje -2 do jego drugiego ataku z Chwili. Postać robi unik: 1D10 + Speed + Wits (darmowy, s. 33), albo opanowane Protego (1D10 + Wits + Charms, traci za to swój najbliższy atak, ZD-07). Wynik uniku plus modyfikatory to cel; Cassian trafia przy rzucie równym albo wyższym. Szanse Cassiana (bez sekundanta, sygnał nieważny dla pojedynczego ataku): A 72%, B 85%, C 55%, D 90%. Sekundant, który woła ostrzeżenie, daje +1 do uniku. Story Point po nieudanym uniku dorzuca 1D10 (s. 4). Trzy trafienia Cassiana kończą pojedynek: zabrana godzina (tekst 4)."
  kto: jeden
  rzut: "1D10 + Speed + Wits"
  trudnosc: "przeciwny: atak 1D10 + Wits + Duelling (npc.cassian-vane, 1D10 + 12)"
  modyfikatory:
    - warunek: "Sekundant woła ostrzeżenie na głos (Working Together, s. 4)"
      wartosc: "+1 do rzutu"
    - warunek: "Cassian po nazwanym sygnale wydaje Chwilę: drugi atak z Chwili (zasady wyżej)"
      wartosc: "-2 do rzutu Cassiana"
    - warunek: "Cassian po wypadnięciu zegarka: niewyspany, bez Chwil"
      wartosc: "-2 do rzutu Cassiana"
    - warunek: "Wariant poniedziałkowy: postać nadal ma Drained (obrońca ranny bardziej, cel spada, s. 165)"
      wartosc: "-3 do rzutu"
    - warunek: "Postać zamiast uniku stawia opanowaną tarczę Protego (rzut 1D10 + Wits + Charms) i traci najbliższy atak"
      wartosc: "+0 do rzutu"
  wyniki:
    - wynik: wygrana
      efekt: "Unik się udaje: urok przelatuje obok. Cassian nie zalicza trafienia."
      flagi_ustaw: []
    - wynik: przegrana
      efekt: "Trafienie dla Cassiana: postać ląduje na macie, traci dwie akcje (Flipendo, Impedimenta) albo się przewraca (Trip Jinx). Bez ran. Po trzecim trafieniu Cassian wygrywa i zabiera godzinę: tekst 4, stan Drained (+3 do trudności) do pierwszego posiłku następnego dnia, rozgałęzienie pojedynek-przegrany."
      flagi_ustaw: []
```

```yaml
test:
  id: s1.scena.08.test.pojedynek-zegarek
  opis: "Postać celuje w zegarek Cassiana w pojedynku. Zasady jak w scenie 04 (przedmiot.zegarek-cassiana, „Celowanie w kieszonkę w walce”). (1) Expelliarmus po uprzedzeniu: postać zna sygnał i w chwili dotyku kieszonki działa przed Chwilą Cassiana; zegarek jest w jego palcach, więc bez kary (Expelliarmus wytrąca to, co przeciwnik trzyma, s. 51). (2) Accio na kieszonkę: zaklęcie celowane w mały, osłonięty cel (osłona około 40%, +2 za każde 20%, s. 165). Rzut jak w teście pojedynek. Szanse przy opanowanym Expelliarmusie po uprzedzeniu: A 55%, B 55%, C 64%, D 28%; Accio w ciemno: A 21%, B 21%, C 28%, D 6%. Wytrącony zegarek liczy się jako jedno trafienie, kończy Chwile Cassiana i daje mu -2 do rzutów do końca sceny (tekst 3). Jeśli postać wygrała pojedynek, zegarek jest jej; jeśli wygrał Cassian, podnosi go i chowa."
  kto: jeden
  rzut: "1D10 + Wits + Duelling albo Charms (wyższa)"
  trudnosc: "przeciwny: unik 1D10 + Speed + Wits (npc.cassian-vane, 1D10 + 10)"
  modyfikatory:
    - warunek: "Accio na zegarek w zapiętej kieszonce (bez uprzedzenia)"
      wartosc: "+4 do trudności"
    - warunek: "Postać, którą Cassian zna z wcześniejszej próby zabrania zegarka (flaga.cassian-czujny); pilnuje kieszonki dłonią"
      wartosc: "+2 do trudności"
    - warunek: "Wariant poniedziałkowy: postać nadal ma Drained"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: wygrana
      efekt: "Zegarek wylatuje z kieszonki albo palców Cassiana (tekst 3): Chwile się kończą, Cassian jest wolniejszy (-2) i patrzy na zegarek, nie na postacie. Liczy się jako trafienie postaci. Postać wygrywa pojedynek przy drugim trafieniu albo gdy zegarek zostanie przy niej: zegarek u graczy, zegar kradzieży staje (rozgałęzienie pojedynek-wygrany)."
      flagi_ustaw: [flaga.zegarek-cassiana, flaga.zegarek-u-graczy]
    - wynik: przegrana
      efekt: "Zaklęcie mija kieszonkę o włos. Cassian przyciska dłoń do kamizelki: „W różdżkę się celuje”. Chwile pozostają. Postać może próbować jeszcze raz w następnej rundzie."
      flagi_ustaw: [flaga.cassian-czujny]
```

```yaml
test:
  id: s1.scena.08.test.kradziez-zegarka
  opis: "Postać próbuje niepostrzeżenie wyjąć zegarek Cassianowi z kieszonki, z dłoni albo spod poduszki, podczas rozmowy (krok 5), gdy inna postać go zagaduje. Test przeciwny (Opposed Test, s. 4); liczby z karty przedmiot.zegarek-cassiana.test.kradziez, tu pod scenę 08. Postać rzuca 1D10 + Speed + Concealment (Speed to szybkość, Concealment to ukrywanie, obejmuje niepostrzeżone chowanie drobnych rzeczy w dłoni, s. 21), Cassian 1D10 + Wits + Observation (Observation to spostrzegawczość, razem 1D10 + 10). Wyższy wynik wygrywa; remis: rzut jeszcze raz, przy drugim remisie przegrywa postać (zasada domowa karty). Obowiązuje od wieczoru po scenie 04 (wcześniej próba zawsze się nie udawała). Szanse w obecnym układzie: C (Speed 6 + Concealment 4 = +10) 50%, z dwiema pomagającymi 69%; A (Speed 5, Concealment 0 = +5) 11%, z dwiema pomagającymi 22%; B i D (+3) około 3%, z pomocą 11%. Kto nie ma Concealment, kradnie na desperację: lepsza jest dla niego litość albo targ. Z flaga.cassian-czujny szanse C spadają do 30% (z pomocą 50%), A do 3% (z pomocą 11%)."
  kto: jeden
  rzut: "1D10 + Speed + Concealment"
  trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.cassian-vane, 1D10 + 10)"
  modyfikatory:
    - warunek: "Inna postać odwraca uwagę przytomnego Cassiana (zagaduje, upuszcza książki); najwyżej dwie (Working Together, s. 4)"
      wartosc: "+1 do rzutu"
    - warunek: "Kradnie postać, która już próbowała zabrać zegarek albo celowała w niego różdżką (flaga.cassian-czujny)"
      wartosc: "+2 do rzutu Cassiana"
    - warunek: "Cassian jest przyparty: ręka na kieszonce, gwizd, pilnuje każdej dłoni"
      wartosc: "+2 do rzutu Cassiana"
    - warunek: "Cassian śpi w dormitorium, zegarek pod poduszką (wariant nocny, zasada domowa z karty zegarka)"
      wartosc: "-4 do rzutu Cassiana"
    - warunek: "Cassian drzemie przy kominku w pokoju wspólnym z zegarkiem w dłoni (zasada domowa z karty zegarka)"
      wartosc: "-2 do rzutu Cassiana"
    - warunek: "Cassian jest złamany (tekst 5, siedzi, patrzy na bandaż)"
      wartosc: "bez testu: sam oddaje zegarek na prośbę (dialog cassian-litosc)"
  wyniki:
    - wynik: wygrana
      efekt: "Zegarek jest u postaci. Zegar kradzieży staje. Cassian zauważa stratę po jednej wymianie zdań albo przy pożegnaniu i w następnej chwili stoi w progu (dialog cassian-oddajcie: rozbity, bez Chwil, prosi, targuje się, w końcu pęka)."
      flagi_ustaw: [flaga.zegarek-cassiana, flaga.zegarek-u-graczy]
    - wynik: przegrana
      efekt: "Cassian łapie rękę albo budzi się. Mówi spokojnie: „Rodzinna pamiątka. Nie chodzi.” Od tej chwili nosi zegarek nawet nocą i kolejnej kradzieży nie ma; zostają pojedynek, targ albo litość (wejście na jego warunkach, zob. cassian-wyzwanie)."
      flagi_ustaw: [flaga.cassian-czujny]
    - wynik: remis
      efekt: "Cassian porusza się albo mruczy. Postać cofa rękę bez skutków albo rzuca jeszcze raz; przy drugim remisie przegrywa."
      flagi_ustaw: []
```

```yaml
test:
  id: s1.scena.08.test.zniszczenie-zegarka
  opis: "Postać niszczy zegarek (rozgałęzienie zniszczenie-zegarka, tekst 6). Liczby z karty przedmiot.zegarek-cassiana.test.zniszczenie. Zegarek ma wytrzymałość 15 (magia karty go wzmacnia; podręcznik podaje wytrzymałości tylko dla zaklęć wysadzających, s. 42: meble 10, mocne drzwi 20). Obrażenia porównuje się z wytrzymałością tak samo jak przy wysadzaniu. Reducto (4D + Focus + 20, s. 56), Confringo i Bombarda (6D + Focus + 30, s. 48-49) niszczą go zawsze, o ile zaklęcie się uda; Incendio go nie rusza (srebro), Diffindo przecina tylko łańcuszek. Zwykłe uderzenie (młotek, kamień, rzut o posadzkę): podręcznik nie podaje zasad (brak w podręczniku, s. 35 i 42), propozycja domowa karty: 2D + Vitality obrażeń. Jedna próba to jedna akcja (s. 33); poza walką można próbować do skutku. Skutki udanego zniszczenia: Ansel migocze, część skradzionych godzin wraca do ofiar (godzina drużyny nie wraca: kotwica Ansela), zegar kradzieży staje. Cassian: najpierw ulga, zaraz potem strach przed ojcem."
  kto: jeden
  rzut: "obrażenia: 2D + Vitality (uderzenie, zasada domowa) albo obrażenia zaklęcia wysadzającego"
  trudnosc: "wytrzymałość 15"
  modyfikatory:
    - warunek: "Zegarek leży na kamieniu (np. po tekście 3), a postać uderza czymś ciężkim i twardym"
      wartosc: "+2 do rzutu"
    - warunek: "Cassian jest obok i próbuje przeszkodzić (zamiast tego może być test przeciwny albo walka)"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: sukces
      efekt: "Szkiełko pęka (tekst 6). Zegarek zniszczony: koniec Skradzionych Chwil, część godzin ofiar wraca (np. Maisie nagle pamięta swój kwadrans), Ansel migocze do końca sceny. Reparo składa obudowę, ale nie przywraca magii. Zakończenie „moc” przepada: `flaga.zegarek-cassiana` = zniszczony, `flaga.zegarek-u-graczy` fałsz. Zegarek-u-graczy: fałsz (MG zdejmuje flagę ręcznie; stan wynika z zegarek-cassiana)."
      flagi_ustaw: [flaga.zegarek-cassiana, flaga.zegarek-zniszczony, flaga.cassian-zdemaskowany]
    - wynik: porazka
      efekt: "Zegarek odskakuje, rysa na szkiełku się wydłuża, w środku tyka głośniej. Cassian czuje ukłucie w piersi i wie, że ktoś próbował. Można spróbować znowu."
      flagi_ustaw: []
```

### Rady dla MG: testy w scenie

- **Oko i RETRORSUM.** Oko przechodzi na Sesję 2 (decyzja MG 2026-11-20), więc w tej scenie nie zastępuje testów. RETRORSUM ratuje przegraną rundę albo zabraną godzinę; w teście kradzieży i w czytaniu Cassiana działa jak w [[zasada.nagrody-z-teaserow]] (wygrana w nowej linii). Użyte po zabraniu godziny cofa także Drained.
- **Drained po przegranej.** Dotyczy jednej postaci i trwa do pierwszego posiłku (śniadania). Przypomnij o +3 do trudności przed testami nocnymi (09, 12). Jeśli stół woli lżej, MG może zmniejszyć stan do Dazed (+2), ale domyślnie obowiązuje Drained.
- **Pojedynek nie jest bramką.** Przegrana kosztuje czas i komfort, a pracownia jest osiągalna drogami awaryjnymi; po przegranej powiedz to poza fikcją (zob. „Rady dla MG”).
- **Nie rzucaj wszystkiego.** Rzucaj `pierwsze-spojrzenie`, gdy nikt nie nazwał sygnału; `czytanie-cassiana` tylko gdy gracze chcą sprawdzić blef; `kradziez-zegarka` tylko gdy ktoś naprawdę próbuje.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.pojedynek-wygrany
  rodzaj: glowne
  warunek: "Postać wygrywa pojedynek z Cassianem."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cassian dotrzymuje słowa: mówi o pracowni i oddaje kartę. Zegarek trafia do graczy, jeśli był stawką albo wypadł mu z ręki. Zegar kradzieży staje."
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los, flaga.zegarek-cassiana, flaga.zegarek-u-graczy, flaga.karta-u-graczy, flaga.lokalizacja-pracowni]
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
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los, flaga.zegarek-cassiana, flaga.zegarek-u-graczy, flaga.karta-u-graczy, flaga.lokalizacja-pracowni, flaga.sekret-poruszony]
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
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los, flaga.zegarek-cassiana, flaga.zegarek-u-graczy, flaga.karta-u-graczy, flaga.lokalizacja-pracowni]
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
  efekt: "Ansel na chwilę migocze, gdziekolwiek jest; część skradzionych godzin wraca do ofiar (Maisie nagle pamięta swój kwadrans), ale godzina drużyny nie wraca (kotwica Ansela). Zegar kradzieży staje. Zakończenie „moc” przepada: `flaga.zegarek-cassiana` = zniszczony, `flaga.zegarek-u-graczy` fałsz (zegarek zniszczony nie otwiera „mocy”). Zegarek-u-graczy: fałsz (MG zdejmuje flagę ręcznie; stan wynika z zegarek-cassiana)."
  flagi_ustaw: [flaga.zegarek-cassiana, flaga.zegarek-zniszczony, flaga.cassian-zdemaskowany]
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
  efekt: "Cassian kończy rozmowę uprzejmie („Miłego wieczoru, grupo trzecia”) i odchodzi; nikt go nie zatrzymuje siłą. Świat idzie dalej bez niego: zegar kradzieży rośnie o 1 za każde pół dnia, w którym go nie skonfrontowano, a sceny przestają go ukrywać. Lokalizację pracowni (W5) postacie zdobywają innymi drogami, z których każda jest zwykłą sceną, nie zagadką: (1) rejestr wypożyczeń pani Pince: czytelnia jest czynna do ciszy nocnej, rejestr leży na pulpicie przy wejściu, wpisy „V., trzy razy ten sam tom o zegarmistrzostwie” widać bez testu; (2) śledzenie drżących odczytów Tempus albo zegarków uczniów (bez magii) od przejścia Slytherinu do biblioteki; (3) Ansel, jeśli już go poznano: „Pani profesor nosiła książki do najdalszego regału”; (4) zegar kradzieży = 4: Cassian idzie tam nocą sam i postacie budzi Ansel albo bicie (siatka 6). Rosalind, pilnując Cassiana, może rzucić jedno zdanie na odchodnym tylko gdy ktoś jest wobec niej szczerze troskliwy (dialog rosalind-sekundantka). Żadna z dróg nie wymaga wygranego pojedynku. Ustaw flaga.cassian-los = nie-skonfrontowany, jeśli nie padło oskarżenie w twarz."
  flagi_ustaw: [flaga.cassian-los]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-bojka
  rodzaj: awaryjne
  warunek: "Postacie atakują Cassiana bez pojedynku, przy świadkach."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Przychodzi prefekt albo Wren (w sali Obrony i w pobliżu gabinetu zawsze Wren): rozbrojenie, punkty ujemne, szlaban jako kolor (środa po Sesji 1 albo rozmowa w kantorku Filcha; tylko kolor, nie koliduje z wtorkowym wieczorem). Cassian zostaje zdemaskowany przed postaciami, ale rozmowa o pracowni przesuwa się na później, z ceną czasu: ktoś musi być przy Cassianie, gdy ten wyjdzie. Cassian, wzdrygnięty i zawstydzony (nie bije się „jak w porcie”), pęka szybciej w drugiej rozmowie, o ile nikt go nie poniżył. Jeśli bójkę zaczęły postacie, Rosalind zapamiętuje, kto pierwszy wyciągnął różdżkę (dialog rosalind-sekundantka), i to wraca w scenie 12 jako chłód Ślizgonów, nie kara. Postacie mogą dokończyć scenę kolejnym krokiem (targ, litość) po odejściu nauczyciela."
  flagi_ustaw: [flaga.cassian-zdemaskowany]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-poscig
  rodzaj: awaryjne
  warunek: "Cassian ucieka biegiem (np. po kłamstwie, że Wren już wie) albo postacie gonią go po korytarzu."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Bez rzutu na pościg: z Chwilą Cassian jest szybszy niż ktokolwiek, kogo znacie, i znika za zakrętem. Świat reaguje zamiast blokować: biegnące uczniowskie kroki zwabiają prefekta („Nie biegać!”), a przy drzwiach do lochów staje Rosalind z rękami skrzyżowanymi: „Nie dziś, kochanie”. Jeśli ktoś zamiast przepychać się zapyta ją spokojnie o Cassiana, mówi dwa zdania (nie śpi; nakręca zegarek nocą przy kominku w pokoju wspólnym). To otwiera nocną drogę: kradzież zegarka w pokoju wspólnym (modyfikator −2 do rzutu Cassiana) albo spokojną rozmowę rano. Po pościgu Cassian jest przyparty; jeśli postacie nie zrobiły nic gorszego, przy następnym spotkaniu zaczyna od stopnia przyparty. Lokalizację pracowni zdobywają drogami z awaryjne-milczenie."
  flagi_ustaw: [flaga.cassian-los]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-brak-czasu
  rodzaj: awaryjne
  warunek: "Do końca sesji zostało mniej niż 20 minut przy stole albo scena się ciągnie."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Skrót, który niczego nie odbiera graczom. Zostaw: krok 1 (jedna kwestia wejścia), jeden konkret z kroku 2 i jedną kwestię z kroku 3 (wyzwanie). Pojedynek skróć do dwóch rund; po rundzie 2 zegarek wypada (tekst 3), jeśli postać choć raz trafiła albo nazwała sygnał, w przeciwnym razie wygrywa Cassian (tekst 4). Jeśli stół woli: litość w jednej wymianie (jedno zdanie troski, tekst 5). Czego nie wolno wyciąć: zapowiedzi stawki przed pojedynkiem, tekstu 5 (bandaż jako dowód do W10), zdania Cassiana „Biblioteka. Ostatni rząd.” (albo pokazanie, że Cassian milczy), tekstu 2 i zapisu flag przed Punktem pauzy 3. Wytnij: dialog sekretu z 4. roku, Rosalind jako sekundantkę (Cassian sam zlicza rundy), rozmowę o kartę i dopisek (karta przychodzi przed ciszą nocną, zob. awaryjne-karta-nie-przyszla)."
  flagi_ustaw: [flaga.cassian-los]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-wyzsza-instancja
  rodzaj: awaryjne
  warunek: "Postacie zamiast walczyć albo rozmawiać idą z całą wiedzą do McGonagall albo Dumbledore'a."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Dyrektor wrócił z Londynu przed wieczorem poprzedniego dnia (założenie robocze). Słucha do końca, nie śmieje się i nie rozwiązuje sprawy za graczy: zegarek, o którym nikt nic nie udowodnił, nie jest dowodem („Dowód, nie podejrzenie”), a Dział Ksiąg Zakazanych jest zamknięty dla uczniów bez wyjątków, więc zgody na wejście nie będzie. Prosi, żeby postacie obserwowały Cassiana, i zapowiada, że Wren zostanie uprzedzony. Dumbledore Ansela nie widzi (jeśli postacie o nim wspomną, prosi o spotkanie wyrównujące rano). Cassian dowiaduje się o rozmowie od Wrena następnego dnia i jest przyparty. Pracownię postacie zdobywają drogami z awaryjne-milczenie."
  flagi_ustaw: [flaga.dumbledore-powiadomiony, flaga.wren-podejrzewa]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-zegarek-do-wrena
  rodzaj: awaryjne
  warunek: "Zegarek jest u postaci (kradzież, pojedynek, targ, litość) i postacie niosą go Wrenowi, McGonagall albo Filchowi."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Nauczyciel bierze zegarek, waży go w dłoni, nie otwiera („Zostanie u mnie”). Zegarek u nauczyciela sam nic nie podbiera, więc zegar kradzieży staje, a magia karty bez niego nie działa (decyzja MG). Wren wezwie Cassiana po lekcjach i nie ujawni, kto przyniósł zegarek. Jeśli w targu obiecano Cassianowi milczenie wobec Wrena, jest to złamana umowa: Cassian staje się rywalem, nie dłużnikiem, i nie przynosi karty (ale lokalizacja, jeśli padła, pozostaje). W przeciwnym razie Cassian ma ulgę, strach i brak sił na wrogość. Droga do pracowni zostaje otwarta. Zakończenie „moc” (karta plus zegarek) przepada do czasu, aż ktoś zegarek odzyska. Zegarek-u-graczy: fałsz (MG zdejmuje flagę ręcznie; stan wynika z zegarek-cassiana)."
  flagi_ustaw: [flaga.zegarek-cassiana, flaga.zegarek-skonfiskowany, flaga.wren-podejrzewa, flaga.cassian-los]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-kradziez-wpadka
  rodzaj: awaryjne
  warunek: "Próba kradzieży zegarka się nie udaje (Cassian łapie rękę albo budzi się)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cassian nie krzyczy i nie biegnie do Wrena: mówi spokojnie „Rodzinna pamiątka. Nie chodzi.” i od tej chwili nosi zegarek nawet nocą. Kolejnej kradzieży nie ma, ale nic nie jest utracone: ma to cenę reputacji i kierunku, nie dostępu. Cassian proponuje pojedynek na swoich warunkach („Zróbmy to jak ludzie”, dialog cassian-wyzwanie), zwykle ze świadkiem (Rosalind). Jeśli złapana postać jest uprzejma, Cassian jest chłodny, ale nie zabiera godziny z zemsty. Stawka zegarka i karty nadal jest do wzięcia w pojedynku, targu albo litości."
  flagi_ustaw: [flaga.cassian-czujny]
  prowadzi_do: s1.scena.08
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-karta-bez-zegarka
  rodzaj: awaryjne
  warunek: "Postacie biorą od Cassiana tylko kartę (targ, litość albo pojedynek o kartę), a zegarek zostaje u niego."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Karta leży w kufrze Cassiana, w podszewce, więc „oddaje kartę” znaczy: przynosi ją przed ciszą nocną, tam, gdzie powiedziano (pusta klasa, krużganek), albo przysyła Rosalind, która kładzie złożoną kartę na dłoni i nie mówi ani słowa. Karta bez zegarka nie robi nic (decyzja MG): to wskazówka i pokusa, nie narzędzie. Dopisek na odwrocie jest czytelny bez testu: co da się wziąć, da się też oddać (W7.2). Cassian, jeśli zobaczy dopisek, blednie: „Myślałem, że to ozdobnik”. Zegarek pozostaje przy Cassianie i nadal tyka; jeśli nie jest zdemaskowany, zegar kradzieży biegnie dalej, a zakończenie „moc” jest w tej sesji niedostępne, dopóki postacie nie zdobędą zegarka (kradzież w pokoju wspólnym, targ drugi raz). Droga do pracowni nie zależy od karty."
  flagi_ustaw: [flaga.karta-u-graczy, flaga.lokalizacja-pracowni, flaga.cassian-los]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-karta-nie-przyszla
  rodzaj: awaryjne
  warunek: "Cassian obiecał kartę (targ, wygrany pojedynek, litość), ale do ciszy nocnej jej nie przyniósł."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Słowo Vane'a nie jest unieważnione: Cassian jest po prostu przerażony (Wren zatrzymał go w korytarzu, ręka mu drży, nie umie jej wyjąć z kufra). Przed ciszą nocną pojawia się Rosalind, bo ktoś musi to dokończyć: wsuwa kartę w złożonej serwetce i odchodzi. Jeśli Rosalind nie ma w pobliżu, Cassian zostawia kartę w uzgodnionym miejscu, gdy nikt nie patrzy; w razie braku miejsca karta znajduje się rano w kieszeni szaty postaci, która z nim rozmawiała (świat dotrzymuje słowa, ale Cassian jest wtedy zawstydzony). Po drodze postacie nic nie tracą: lokalizacja pracowni już padła, a na W7 mają jeszcze tabliczkę i Ansela. Brak karty w nocy nie zamyka sceny 09."
  flagi_ustaw: [flaga.karta-u-graczy]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-zniszczenie-wczesne
  rodzaj: awaryjne
  warunek: "Postacie niszczą zegarek od razu, zanim Cassian cokolwiek powie o pracowni."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Nie karzemy decyzji. Czytaj tekst 6, a zaraz potem tekst 5: Cassian, który nie ma już nic do ukrycia ani do obrony, siada i mówi sam, trzema zdaniami: „Biblioteka. Ostatni rząd.”, księga, „wszystko się obudziło”. Gablotę dopowiada tylko, jeśli ktoś zapyta („Ona nie daje się brać”). Prosi o jedno: „Nie mówcie Wrenowi. Nie mówcie ojcu.” Zegarek jest zniszczony, a zakończenie „moc” przepada; karta zostaje w kufrze Cassiana jako wskazówka z dopiskiem na odwrocie (jeśli ją przyniesie, W7.2 pozostaje tylko wskazówką, bo karta bez zegarka nie działa). Ansel migocze, część godzin ofiar wraca, godzina drużyny nie wraca (kotwica Ansela). Cassian jest wolny od Chwil, wyczerpany, z ulgą mieszającą się ze strachem. Jeśli postacie okażą mu troskę, zostaje sojusznikiem; jeśli triumfują, rywalem. Zegarek-u-graczy: fałsz (MG zdejmuje flagę ręcznie; stan wynika z zegarek-cassiana)."
  flagi_ustaw: [flaga.zegarek-cassiana, flaga.zegarek-zniszczony, flaga.cassian-zdemaskowany, flaga.lokalizacja-pracowni, flaga.cassian-los]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-skrzydlo-szpitalne
  rodzaj: awaryjne
  warunek: "Postać nie wstaje po pojedynku albo szarpaninie, jest Shaken (ranna) albo jest wyczerpana bardziej, niż stół chce grać."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Wren (dialog wren-dosyc: „Skrzydło szpitalne. Ty i ty, pod ramiona. Już.”) odsyła postać z dwoma towarzyszami; reszta idzie do dormitoriów. Nie ma wyrzucenia ze szkoły ani zatrzymania gry: pielęgniarka sprawdza postać, każe odpocząć najwyżej do ciszy nocnej i pozwala wrócić do dormitorium. Gracz bez postaci przy stole nie czeka: gra uczniów, którzy tam siedzą (Maisie Lock z kwadransem „bez kawałka”, Gideon Pratt) i dzięki temu ma okazję usłyszeć o dziwnych stratach godzin. Jeśli w skrzydle leży ofiara Cassiana, każdy tykający zegarek w sali na chwilę przyspiesza (ziarno W0). Drained z zabranej godziny trwa do śniadania i dotyczy nocnych testów w 09 i 12."
  flagi_ustaw: [flaga.wren-podejrzewa]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.08.rozgalezienie.awaryjne-mroczna-decyzja
  rodzaj: awaryjne
  warunek: "Postać w konfrontacji sięga po mroczny środek: Niewybaczalne na Cassianie, uczniu albo Anselu, próbuje go zabić albo podpalić lochy."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Nie wychodzi. W Sesji 1 postać nie może zabić Cassiana ani nikogo innego, a Niewybaczalne na Cassianie, uczniu albo Anselu „nie wychodzą”: brak mocy, przerażenie, pustka w różdżce. Imperius nie działa na Ansela: on jest „nieobecny”, zaklęcie przechodzi przez niego jak ręka przez beczkę. Natychmiastowa interwencja Wrena (jeśli jest w pobliżu) albo Filcha, który usłyszał krzyk, zbija różdżkę i prowadzi winowajcę do opiekuna domu. Podpalenie (lochy, zegarek, karta, szata Cassiana): ogień gaśnie, karta i kartki się nie palą, tak jak notatnik. Cassian, wstrząśnięty, może sam przerwać konfrontację i zacząć mówić (litość). Konsekwencje wybrzmiewają tylko jako kolor: zawieszenie i list do domu są zapowiedziane, nie wykonane w Sesji 1; szlaban „tylko kolor” odbywa się w środę po Sesji 1 (zapowiedź Sesji 2) albo skraca się do rozmowy w kantorku Filcha, więc nie koliduje z wtorkowym wieczorem. MG rozmawia z graczem poza fikcją i pyta, czy ta scena mieści się w liniach i zasłonach. Wszystkie drogi z 08 dalej prowadzą do 09."
  flagi_ustaw: []
  prowadzi_do: s1.scena.09
```

## Drabinka podpowiedzi

*Dotyczy głównego zadania sceny: skąd postacie wiedzą, że źródłem jest zegarek (W4), i jak dojdą do pracowni (W5). Używaj stopni po kolei, tylko gdy stół naprawdę stoi; każdy stopień to świat, który coś robi, a nie MG, który prowadzi za rękę. Zasada trzech dróg: do lokalizacji pracowni są cztery niezależne drogi (Cassian, rejestr pani Pince, śledzenie odczytów, Ansel), a zegar kradzieży = 4 jest siatką, gdy żadna nie zadziała.*

```yaml
podpowiedzi:
  id: s1.scena.08.podpowiedzi
  szturchniecie: "Cassian sam dotyka kieszonki przy słowie „zegarek” i gwiżdże pięć nut. Rosalind pociera kciukiem palec i wzdryga się, gdy on się wzdryga. Z lochów, we wnęce pod zegarem, tykanie wydaje się odrobinę za szybkie. Opisz to bez komentarza i zapytaj gracza: „Co robisz, gdy on to robi?”."
  wieksza: "Pani Pince na pulpicie przy wejściu zostawiła rejestr: „V., trzykrotnie ten sam tom o zegarmistrzostwie, Dział Ksiąg Zakazanych (ostatni rząd)”, albo Ansel, jeśli jest przy postaciach: „Pani profesor nosiła książki do najdalszego regału”. Cassian, nawet gdy milczy, mimowolnie zaciska lewą dłoń w pięść przy słowie „biblioteka”. Rosalind, na odchodnym i tylko po szczerej trosce: „On nie śpi. Nakręca ten zegarek nocą przy kominku.”"
  bezposrednia: "Cassian siada i mówi: „Biblioteka. Ostatni rząd.” i dodaje o księdze („wszystko się obudziło”) i gablocie („ona nie daje się brać”), bez targu, bo nie ma już sił na uprzejmość. Jeśli nic nie zadziałało, MG mówi wprost, poza fikcją: „Pracownia jest w ostatnim rzędzie Działu Ksiąg Zakazanych, a wejść można tylko nocą, bez zgody”, i pyta, jak postacie się tam dostaną."
```

## Konsekwencje

Zapisz po scenie (przed Punktem pauzy 3):
- `flaga.cassian-los`: nie-skonfrontowany, sojusznik (litość), dluznik (targ), rywal (upokarzający targ, złamana umowa, triumf po zniszczeniu), uciekl (pościg albo milczenie po oskarżeniu), ranny (tylko gdy stół zagrał ciężki wariant bójki), martwy (nie w tej scenie).
- `flaga.zegarek-cassiana`: u-cassiana, u-graczy (kto go ma, w czyjej kieszeni), zniszczony, skonfiskowany (kto: Wren, McGonagall albo Filch).
- `flaga.karta-u-graczy` (czy karta jest już przy postaciach, czy dopiero przyjdzie przed ciszą nocną albo przez Rosalind) i czy postacie widziały dopisek na odwrocie.
- `flaga.lokalizacja-pracowni` (czy padła i z czyich ust: Cassian, rejestr, odczyty, Ansel).
- `flaga.cassian-zdemaskowany` (czy powiedziano mu w twarz), `flaga.sekret-poruszony` (czy sięgnął po sekret z 4. roku i czy to blef), `flaga.wren-podejrzewa` (donos, szlaban, skrzydło szpitalne), `flaga.dumbledore-powiadomiony`.
- `flaga.s1-zegar-kradziezy`: czy stanął i na ilu (kradzież, pojedynek wygrany, zniszczenie, skonfiskowanie zatrzymują zegar; Cassian z zegarkiem i bez rozmowy go nie zatrzymuje).
- Pojedynek: kto z postaci wygrał albo przegrał, komu Cassian zabrał godzinę (Drained do śniadania, +3 do trudności w scenach 09 i 12), kto był sekundantem, wydane Story Points (nie dubluj punktu z sceny 04), kto jest ranny (Shaken) albo spędził wieczór w skrzydle szpitalnym.
- Szlaban za przemoc (tylko kolor, środa po Sesji 1 albo rozmowa w kantorku), uwaga Wrena o ocenach Vane'a (czy padła), słowa Cassiana na pożegnanie („Biblioteka. Ostatni rząd.” albo cisza).
- Do sceny 09: czy postacie mają zegarek i kartę razem (zakończenie „moc”), a w scenie 12: kto widział zabranie godziny i czy Rosalind pamięta, kto pierwszy wyciągnął różdżkę.

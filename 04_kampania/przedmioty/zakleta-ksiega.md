---
id: przedmiot.zakleta-ksiega
typ: przedmiot
tytul: "Zaklęta księga nad pulpitem"
status: szkic
rodzaj: "artefakt (zaklęta księga o zapomnianej magii czasu, nieznany autor)"
wlasciciel_start: brak
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.09 (pracownia: oglądanie, dotknięcia, ewentualna ucieczka), s1.scena.10 (pośrednio),
#   s1.scena.08 (tylko w opowieści Cassiana)
sceny: []
tylko_mg: true
tagi: [s1, s2, ksiega, pracownia, marrow, zabezpieczenia, zagadki, magia-czasu, w10, karta-pozyczajacego]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG, decyzja MG 2026-11-20)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 08, scena 09, siatka bezpieczeństwa 8, W7, W10, Potrzebne obiekty)"
  - "04_kampania/flagi.yaml (flaga.ksiega-zabezpieczenia, flaga.ksiega-zlapani)"
aktualizacja: 2026-11-20
---
## Opis

Pośrodku [[miejsce.sala-zatrzymanych-godzin]] stoi ozdobny drewniany pulpit czytelniczy: ciemny, wypolerowany latami dłoni, z nogą rzeźbioną w pnące się liście i drobne tarcze zegarowe. Na blacie nie leży nic. Księga wisi nad nim, mniej więcej na szerokość dłoni, otwarta, jakby ktoś właśnie przerwał czytanie. Otacza ją niebieskawa łuna, podobna do światła księżyca na wodzie. Łuna bardzo powoli przygasa i jaśnieje, jak oddech kogoś, kto śpi.

Księga jest duża, gruba i stara. Oprawa z ciemnej, popękanej skóry, narożniki z matowego metalu, na grzbiecie ani tytułu, ani nazwiska. Kartki mają kolor starej kości. Widać tylko jedną rozkładówkę: gęste, obce pismo, starsze niż wszystko w zamku, i rysunki tarcz, kół zębatych i strzałek, które zawracają same do siebie. Litery da się przeliterować, ale zdania nie chcą się złożyć w myśl. Na marginesach, tu i ówdzie, drobne, pochyłe dopiski innym atramentem (ręka Marrow, zob. „Dla MG”).

W grzbiecie, przy samej otwartej rozkładówce, sterczy **wąski, poszarpany pasek po wyrwanej karcie**. Kto ma [[przedmiot.karta-pozyczajacego]], widzi bez rzutu, że jej krawędź pasuje.

Pod pulpitem kamienie posadzki są osmalone w nieregularną gwiazdę, a w kurzu widać rozmazane, długie ślady: ktoś stąd uciekał, ślizgając się (Cassian, trzy tygodnie temu). To ostrzeżenie bez słów (W10.1).

**Krótka wstawka do odczytania (pierwszy widok):**
> Na środku sali stoi pulpit do czytania, rzeźbiony w liście i maleńkie tarcze. Nad nim, w powietrzu, wisi otwarta księga. Otacza ją niebieskawe światło, które wolno przygasa i jaśnieje, jakby oddychało. Strony się nie poruszają, choć w sali czuć lekki przeciąg. Pod pulpitem kamienie są czarne od sadzy, a w kurzu ktoś zostawił długie, rozmazane ślady, jakby biegł i się ślizgał.

## Działanie

**Co wiadomo w Sesji 1.**
- Patrzenie jest bezpieczne i nie wymaga testu. Można obejść pulpit, oświetlić księgę, przerysować rozkładówkę.
- Księgi **nie da się zabrać** ani **przewrócić jej strony**. Pełną treść odblokowują zagadki, które pojawią się dopiero w Sesji 2 i później.
- Siła budzi **stopniowane zabezpieczenia** (`flaga.ksiega-zabezpieczenia`, 0–3). Za dotknięcie uznaje się: dotyk ręką, dotyk różdżką, zaklęcie przyciągające, próbę przewrócenia strony.
  - **Poziom 1, pierwsze dotknięcie.** Delikatne porażenie, mrowienie do łokcia. Łuna ciemnieje, a wszystkie zatrzymane zegary w sali tykają raz, naraz. Bez obrażeń: to sygnał.
  - **Poziom 2, każde kolejne dotknięcie.** Silniejsze porażenie: lekkie obrażenia, odrzut, upuszczona różdżka. Wahadła w galerii same zaczynają się kołysać, robi się głośno. Każde następne dotknięcie na tym poziomie boli mocniej. [[npc.ansel-dray]] (jeśli jest) krzyczy, żeby przestali. **Zanim ktoś spróbuje przejść na poziom 3, MG mówi wprost, poza fikcją:** „To jest to, co zrobił Cassian. Jeśli spróbujecie wyrwać kartkę, pracownia się obudzi i jedynym wyjściem będzie ucieczka”.
  - **Poziom 3, próba wyrwania kartki albo siłowego zabrania księgi.** Pełne zabezpieczenia. Kartka nie puszcza (wariant roboczy, zob. „Dla MG”). Zatrzymane zegary ruszają wszystkie naraz, a sala zaczyna bić trzynaście uderzeń; po trzynastym schody się zamykają. Ucieczka przez galerię wahadeł, które teraz tną szybko, i po tykających schodach do drzwi w bibliotece. Droga jest otwarta, dopóki nie wybije trzynaste uderzenie. Hałas sięga biblioteki: pani Pince albo Filch zaczynają nasłuchiwać.
  - **Kto nie zdąży** (`flaga.ksiega-zlapani`): budzi się na podłodze ostatniego rzędu Działu Ksiąg Zakazanych, ciężko ranny i z zaklęciem zapomnienia na ostatnie minuty w pracowni (siatka bezpieczeństwa 8 w grafie Sesji 1). Śmierć postaci wchodzi w grę tylko jako świadomy wybór gracza po drugim, wyraźnym pytaniu MG. Linie i zasłony ustalone przy stole mają pierwszeństwo.
  - **Po ucieczce** sala uspokaja się po kilku minutach i znów da się do niej wejść, ale księga „pamięta”: następne dotknięcie w tej sesji zaczyna od poziomu 2.
- **Gablota to osobny mechanizm.** Wyłamanie gabloty z notatnikiem nie budzi zabezpieczeń księgi (ma własną cenę, zob. [[przedmiot.dziennik-marrow]]).

**Czego nie wiadomo (i czego MG w Sesji 1 nie zdradza).**
- Kto napisał księgę i kiedy. Nikt w Sesji 1 tego nie wie, łącznie z MG (do ustalenia przed Sesją 2).
- Jakie są zagadki i co otwierają. Rozkładówka nie jest zagadką do rozwiązania w Sesji 1, tylko jej zapowiedzią.
- Czy zabezpieczenia założyła Marrow, czy księga ma je od swojego autora.

**Co mówią o niej inni.**
- [[npc.cassian-vane]] (scena 08, gdy mówi): księga wisi nad pulpitem, zagadek nie umiał rozwiązać, więc wyrwał kartę; „wszystko się obudziło”, wahadła, zegary, schody, ledwo zdążył. Chowa w rękawie oparzoną dłoń (W10.2).
- Ansel boi się łuny i nie podchodzi bliżej niż na kilka kroków. Nie wie dlaczego.
- Notatnik Marrow, gdy gablota jest już otwarta, ostrzega przed siłowym korzystaniem z księgi (W10.4).

## Mechanika

Liczby ustalił mechanik (2026-11-20). Całość to mechanika przedmiotu (nasza), zbudowana z narzędzi Walkera: obrażenia i odporność (s. 35), stany zdrowia i czas powrotu (s. 35–36), współpraca (s. 4), rzut pościgu (s. 37). Terminy: Vitality (żywotność), Speed (szybkość), Balance (zręczność ciała), Shaken / Bruised / Bloodied / Lifeless (kolejne stany ciała: wstrząśnięty, posiniaczony, zakrwawiony, bez życia), Dazed (oszołomiony, stan umysłu).

**Poziom 1 (pierwsze dotknięcie): bez rzutu, bez obrażeń.** Mrowienie do łokcia, zegary tykają raz. MG podnosi `flaga.ksiega-zabezpieczenia` do 1.

**Poziom 2 (każde kolejne dotknięcie): porażenie.** Obrażenia 2D, potem 3D, potem 4D (więcej nie rośnie). Cel rzuca odporność `1D10 + Vitality` (s. 35). Poziom 2 to ostrzeżenie: rany z niego nigdy nie przekraczają stanu Bruised (2 kółka). Accio na księgę nie działa (jak przedmiot chroniony przed kradzieżą, s. 47), ale liczy się jako dotknięcie, a porażenie idzie przez różdżkę.

```yaml
test:
  id: przedmiot.zakleta-ksiega.test.porazenie
  opis: "Poziom 2 zabezpieczeń: postać dotyka księgi (ręką, różdżką, zaklęciem przyciągającym, próbą przewrócenia strony). Rzut odporności na porażenie."
  kto: jeden
  rzut: "1D10 + Vitality"
  trudnosc: "obrażenia: 2D przy pierwszym dotknięciu na poziomie 2, 3D przy drugim, 4D przy każdym następnym"
  modyfikatory:
    - warunek: "Postać dotyka przez rękawicę, szatę albo przedmiot (nie różdżką)"
      wartosc: "+2 do rzutu"
  wyniki:
    - wynik: sukces
      efekt: "Rzut odporności jest wyższy od obrażeń: brak rany. Odrzut o krok, łuna ciemnieje, wahadła w galerii zaczynają się kołysać."
      flagi_ustaw: [flaga.ksiega-zabezpieczenia]
    - wynik: porazka
      efekt: "Obrażenia równe rzutowi albo wyższe: 1 kółko (Shaken, +1 do trudności, mija po kilku sekundach). Odrzut o metr, różdżka wylatuje z dłoni (podniesienie to akcja darmowa, s. 33). Hałas: pani Pince albo Filch na górze zaczynają nasłuchiwać."
      flagi_ustaw: [flaga.ksiega-zabezpieczenia]
    - wynik: porazka-kompromitujaca
      efekt: "Obrażenia co najmniej dwa razy wyższe od rzutu: 2 kółka (Bruised, +2 do trudności, mija po kilku minutach) i test 1D10 + Vitality przeciw 5 (3 + obecna kara, ZD-10), by nie stracić przytomności; nieprzytomny budzi się po Rennervate albo po kilku minutach (ZD-14). Rana nie bywa cięższa niż Bruised."
      flagi_ustaw: [flaga.ksiega-zabezpieczenia]
```

**Poziom 3: ucieczka przed trzynastym uderzeniem.** MG prowadzi **licznik uderzeń** (na kartce albo kośćmi na stole). Sala budzi się z pierwszym uderzeniem: licznik = 1. Ucieczka ma trzy odcinki, każdy to jeden test grupowy: gracze wybierają postać, która prowadzi i rzuca; każda inna postać, która pomaga, daje +1 do rzutu (Working Together, s. 4).

1. **Sala:** zegary ruszają, z gwoździków lecą kieszonkowe zegarki, posadzka drży.
2. **Galeria wahadeł:** wahadła tną szybko, każde w innym rytmie.
3. **Tykające schody:** stopnie zapadają się po kolei, od dołu.

Każdy odcinek dodaje do licznika 3 uderzenia. Porażka dodaje cenę. Bez porażek grupa wychodzi przy uderzeniu 10; jedna porażka z ceną „uderzenia” to 12, więc wciąż zdążą. Gdy licznik osiągnie 13 przed sukcesem na trzecim odcinku (także wtedy, gdy przekroczy go sam trzeci odcinek), każda postać, która jest jeszcze w środku, wykonuje **ostatni skok**.

```yaml
test:
  id: przedmiot.zakleta-ksiega.test.ucieczka
  opis: "Pełne zabezpieczenia (poziom 3). Jeden test grupowy na każdy z trzech odcinków: sala, galeria wahadeł, tykające schody. Ten sam rzut na każdym odcinku. Każdy odcinek: +3 do licznika uderzeń (start: 1)."
  kto: grupa
  rzut: "1D10 + Speed + Balance"
  trudnosc: "Challenging (15)"
  modyfikatory:
    - warunek: "Każda inna postać, która pomaga prowadzącej (Working Together, s. 4)"
      wartosc: "+1 do rzutu"
    - warunek: "Ktoś oświetla drogę albo na galerii ktoś liczy rytm wahadeł na głos (raz na odcinek)"
      wartosc: "+1 do rzutu"
    - warunek: "Rany i stany prowadzącej (s. 35), np. Shaken po porażeniu"
      wartosc: "+1 do trudności"
  wyniki:
    - wynik: sukces-imponujacy
      efekt: "Grupa przebiega odcinek wyjątkowo sprawnie: ten odcinek dodaje tylko 2 uderzenia zamiast 3."
      flagi_ustaw: []
    - wynik: sukces
      efekt: "Grupa przebiega odcinek bez strat (+3 uderzenia). Po trzecim odcinku drzwi w bibliotece zatrzaskują się za nimi, bicie milknie."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "+3 uderzenia i MG wybiera jedną cenę (może oddać wybór graczom): +2 uderzenia; albo obrażenia 2D dla jednej postaci (wahadło, spadający zegar, zapadający się stopień) przeciw 1D10 + Vitality; albo upuszczona rzecz (różdżka zostaje w sali do końca sceny, notatnik zostaje w środku, karta upada na posadzkę). Droga dalej jest otwarta."
      flagi_ustaw: []
    - wynik: porazka-kompromitujaca
      efekt: "+3 uderzenia i dwie różne ceny z listy przy porażce (MG wybiera)."
      flagi_ustaw: []
```

```yaml
test:
  id: przedmiot.zakleta-ksiega.test.ostatni-skok
  opis: "Licznik doszedł do 13, a grupa nie skończyła trzeciego odcinka. Schody się zamykają. Każda postać, która jest jeszcze w środku, rzuca osobno (rzut jak w pościgu pieszym, s. 37). Kolejność dowolna; kto zdążył, może podać rękę następnym."
  kto: kazdy
  rzut: "1D10 + Vitality + Speed"
  trudnosc: "Tricky (12)"
  modyfikatory:
    - warunek: "Każda postać, która już zdała ostatni skok i podaje rękę (Working Together, s. 4)"
      wartosc: "+1 do rzutu"
    - warunek: "Rany i stany skaczącej postaci (s. 35)"
      wartosc: "+1 do trudności"
  wyniki:
    - wynik: sukces
      efekt: "Postać przeciska się przez zamykające się drzwi w ostatniej chwili, z naderwaną szatą."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Drzwi zamykają się przed nią. Siatka bezpieczeństwa 8 (test „złapani” niżej). Po nieudanym rzucie, zanim MG ogłosi skutek, gracz może jeszcze wydać Story Point (dorzut 1D10, s. 4) albo użyć RETRORSUM (zasada.nagrody-z-teaserow)."
      flagi_ustaw: [flaga.ksiega-zlapani]
```

```yaml
test:
  id: przedmiot.zakleta-ksiega.test.zlapani
  opis: "Siatka bezpieczeństwa 8: postać nie zdążyła przed trzynastym uderzeniem. Bez rzutu: skutek stały, żeby porażka kosztowała, ale nie zatrzymywała gry."
  kto: jeden
  rzut: "brak rzutu"
  trudnosc: "brak"
  wyniki:
    - wynik: zawsze
      efekt: "Postać budzi się na podłodze ostatniego rzędu Działu Ksiąg Zakazanych. Ciało: stan Bloodied (3 kółka, +3 do trudności; jeśli ma już gorszy stan, zostaje gorszy). Umysł: Dazed (+2) do końca sceny przebudzenia. Pamięć: brak ostatnich minut w pracowni (od chwili, gdy zaczęło się bicie); to skutek magii pracowni, nie zaklęcie Obliviate, więc nie ma rzutu obronnego ani stanu trwałego (s. 36). Noc i dzień w skrzydle szpitalnym: pani Pomfrey zdejmuje kółka zaklęciami (Vulnera Sanentur, s. 59); do końca Sesji 1 zostaje Shaken (+1). Cena: zegar kradzieży +1 (jeśli jeszcze biegnie), znalezienie przez panią Pince albo Filcha, pytania nauczycieli. Grę zapomnienia MG uzgadnia z graczem na kartce."
      flagi_ustaw: [flaga.ksiega-zlapani, flaga.filch-zlapal, flaga.s1-zegar-kradziezy]
```

**Śmierć (tylko po dwóch ostrzeżeniach).** Pierwsze ostrzeżenie: MG mówi poza fikcją przed próbą wyrwania kartki (poziom 3). Drugie: gdy postać po trzynastym uderzeniu świadomie zostaje albo wraca do księgi, MG pyta: „Jeśli zostanie, może zginąć. Na pewno?”. Dopiero wtedy co rundę (około 3 sekund, s. 33) postać dostaje **3D obrażeń** przeciw `1D10 + Vitality` (skala jak trucizna śmiertelna, s. 38). Szóste kółko (Lifeless, s. 35) oznacza śmierć. Gracz może w każdej rundzie zmienić zdanie: wtedy pracownia wypluwa postać jak w teście „złapani”, z gorszym z dwóch stanów ciała. Linie i zasłony ustalone przy stole mają pierwszeństwo.

**Po ucieczce** księga „pamięta”: następne dotknięcie w tej sesji to poziom 2, od 3D.

## Dla MG

**Prawda.** Księga jest dziełem nieznanego autora o zapomnianej magii czasu. Z niej profesor Marrow wzięła wiedzę o [[przedmiot.klepsydra-daniny]]. Marrow rozwiązała jej zagadki i dopisywała na marginesach własne uwagi tym samym pochyłym pismem co tabliczka gabloty. Odchodząc, zostawiła księgę w pracowni razem z notatnikiem. Około trzech tygodni przed sesją [[npc.cassian-vane]] nie poradził sobie z zagadkami, wyrwał z otwartej rozkładówki jedną kartę ([[przedmiot.karta-pozyczajacego]]), obudził pełne zabezpieczenia i ledwo uciekł.

**Rola w Sesji 1.** Obraz, pokusa i ziarno. Księga **nie jest przeszkodą obowiązkową**. Oglądanie mieści się w 40 minutach sceny 09; ucieczka dodaje 5–10 minut tylko wtedy, gdy gracze ją wywołają (MG odzyskuje czas, pomijając galerię wahadeł w drodze w dół albo skracając scenę 10).

**Ostrzeżenia przed poziomem 3 (W10).** Osmalone kamienie i ślady pod pulpitem; opowieść i oparzona dłoń Cassiana; strach Ansela; notatnik (gdy gablota otwarta); samo porażenie na poziomach 1 i 2. W ostateczności MG mówi wprost poza fikcją, przed próbą wyrwania kartki.

**Warianty robocze (pytania do MG zadaje Reżyser; do decyzji obowiązują warianty robocze z grafu).**
- *Próba wyrwania kartki:* kartka nie puszcza, zostaje tylko ucieczka. Rekomendacja architekta: róg kartki z jednym znakiem w dłoni, ziarno zagadek Sesji 2.
- *Zwrot Karty Pożyczającego do księgi:* w Sesji 1 księga jej nie przyjmuje, łuna tylko jaśnieje, a karta na chwilę robi się ciepła jak dłoń. Zahaczka na Sesję 2.

**Teasery.** Gracze, którzy znaleźli przed kampanią zwój z zaklęciem RETRORSUM, mogą rozpoznać w rozkładówce podobne znaki: to ta sama rodzina magii czasu. MG potwierdza tylko podobieństwo („pismo wygląda znajomo”), niczego więcej.

**Sesja 2.** Jeśli `flaga.ksiega-zabezpieczenia` jest wysoka, księga „pamięta” postacie. Notatnik i księga są sobie nawzajem potrzebne do rozszyfrowania: notatnik odsyła do miejsc w księdze, a księga bez notatnika jest nieczytelna.

**Powiązane flagi:** `flaga.ksiega-zabezpieczenia`, `flaga.ksiega-zlapani`, `flaga.pracownia-otwarta`, `flaga.karta-u-graczy`, `flaga.filch-zlapal`, `flaga.s1-zegar-kradziezy`.

**Powiązane obiekty:** [[miejsce.sala-zatrzymanych-godzin]], [[przedmiot.dziennik-marrow]], [[przedmiot.karta-pozyczajacego]], [[przedmiot.klepsydra-daniny]], [[przedmiot.zegarek-cassiana]], [[npc.cassian-vane]], [[npc.ansel-dray]].

### Do weryfikacji
- Całość jest nasza (`pewnosc: nasze`). Wygląd oprawy, rzeźby pulpitu i dopiski Marrow na marginesach to szczegóły wykonawcze.
- Dopiski Marrow w księdze to wariant roboczy Twórcy NPC (wyjaśnia, skąd na wyrwanej karcie jej ręka; zob. [[przedmiot.karta-pozyczajacego]]). Do potwierdzenia przez MG.
- Autor księgi, treść zagadek, pochodzenie zabezpieczeń: do ustalenia przed Sesją 2.
- Czy [[npc.silas-wymark]] wie o księdze (był asystentem Marrow w 1951): nieustalone.
- Liczby (mechanik, 2026-11-20): do akceptacji MG; zwłaszcza trudność ucieczki Challenging (15) i stan Bloodied dla złapanych.

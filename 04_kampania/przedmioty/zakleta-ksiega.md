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

Przedmiot bez statystyk. Obrażenia i stany dla poziomów 1–3, trudności i liczba odcinków ucieczki, skutki zaklęcia zapomnienia: ustala mechanik (graf Sesji 1, „Do weryfikacji”). Poniższy test to szkielet do uzupełnienia; mechanik może go przenieść do pliku sceny 09.

```yaml
test:
  id: przedmiot.zakleta-ksiega.test.ucieczka
  opis: "Pełne zabezpieczenia (poziom 3): postacie uciekają z sali przez galerię wahadeł i po tykających schodach, zanim wybije trzynaste uderzenie. Propozycja: jeden test grupowy na odcinek, dwa albo trzy odcinki."
  kto: grupa
  rzut: "DO-USTALENIA"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Grupa przebiega odcinek bez strat. Po ostatnim odcinku drzwi w bibliotece zatrzaskują się za nimi, bicie milknie."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "MG wybiera cenę: jedno uderzenie zegara bliżej zamknięcia, obrażenia dla jednej postaci albo upuszczona rzecz. Droga dalej jest otwarta, dopóki nie wybije trzynaste uderzenie. Jeśli wybiło, a ktoś jest jeszcze w środku: siatka bezpieczeństwa 8."
      flagi_ustaw: [flaga.ksiega-zlapani]
```

Uwaga: `flaga.ksiega-zlapani` ustawia się przy porażce tylko wtedy, gdy wybiło trzynaste uderzenie, a postać nie zdążyła. Poziom zabezpieczeń (`flaga.ksiega-zabezpieczenia`) MG podnosi przy każdym dotknięciu, bez rzutu.

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
- Liczby: mechanik.

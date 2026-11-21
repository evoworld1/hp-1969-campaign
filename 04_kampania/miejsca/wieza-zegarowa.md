---
id: miejsce.wieza-zegarowa
typ: miejsce
tytul: "Wieża Zegarowa"
status: szkic
lokalizacja: "Hogwart, zachodnia strona zamku; drewniany kryty most prowadzi na zaniedbany dziedziniec-krużganek u stóp wieży (według mapy Walkera s. 159)"
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.06 (cel przypływu), s1.scena.07 (ślepy zaułek z ziarnem), s1.scena.08 (Cassian o zmierzchu), s1.scena.12
sceny: [s1.scena.06, s1.scena.07, s1.scena.08]
tylko_mg: true
tagi: [s1, hogwart, wieza-zegarowa, crake, plakietka, klepsydra, slepy-zaulek, cassian]
zrodla:
  - "Walker 2e s. 159 (Clock Tower: zabytkowy zegar, duże wahadło między dwiema klatkami schodowymi, cztery dzwony na szczycie; Clock Tower Courtyard: zaniedbany krużganek; kryty most)"
  - "01_kanon/walker-a-kanon-1969.md (w książkach brak opisanej wieży zegarowej; w kampanii element nasz)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 07, wskazówki W3 i W8)"
aktualizacja: 2026-11-20
---
## Do odczytania

Drewniany most skrzypi pod stopami, a na jego końcu otwiera się krużganek, zarośnięty mchem i pusty. Nad nim wznosi się wieża. W środku pachnie olejem do mechanizmów, kurzem i zimnym kamieniem. Wahadło, długie jak drzewo, przelatuje powoli między dwiema klatkami schodowymi i na moment zasłania wam światło. Tik. Tak. Każde wychylenie czujecie w zębach. Wysoko, pod dachem, wiszą cztery dzwony w kolorze starego złota i miedzi.

## Dla MG

**Rola w Sesji 1.** Celowy ślepy zaułek (scena 07). Wszystkie pomiary wskazują tutaj (przypływ, `flaga.przyplyw-ku-wiezy`), a wieża jest **doskonała**: zero przesunięcia, mechanizm bez skazy. Gracze mają wyjść z przekonaniem, że odpowiedź leży gdzie indziej (`flaga.wieza-zbadana`).
- **Ziarno na Sesję 2 (W8):** świeży olej na zębatkach i mosiężna plakietka „Konserwacja: Crake i Córka, ulica Pokątna” (`flaga.plakietka-crake`; przedmiot [[przedmiot.plakietka-crake-i-corka]]).
- **Za dnia** [[npc.hollis-crake]] może właśnie schodzić z wieży z torbą narzędzi (pogawędka ruchoma, jeśli nie było jej wcześniej): „Wieża ostatnio wymaga więcej uwagi”.
- **O zmierzchu** przychodzi tu [[npc.cassian-vane]] podbierać czas. Staje w krużganku u stóp wieży, gdzie przypływ jest najsilniejszy, z zegarkiem w dłoni. Naturalne przejście do sceny 08.
- [[npc.ansel-dray]] nie wejdzie na most ani do wieży. Dochodzi do podnóża wieży, ale zatrzymuje się na początku mostu, wzdryga przy każdym uderzeniu dzwonu: „Ja tu poczekam. Tu jest za głośno”. Nie wie dlaczego.

**Krótka wstawka do odczytania (pomiar Tempus w środku wieży):**
> Cyfry nad różdżką układają się od razu, równo i spokojnie. Zegar wieży wskazuje dokładnie to samo. Ani minuty różnicy. Po całym dniu drżących liczb ta zgodność jest prawie niepokojąca.

**Stan zmienny.**
- Jeśli `flaga.crake-poznany` już ustawiona: Crake'a nie ma, ale olej jest świeży, a na stopniu leży zapomniana szmatka pachnąca miętą.
- Jeśli `flaga.przyplyw-ku-wiezy`: gracze przychodzą z oczekiwaniem; podkreśl kontrast między drżeniem w zamku a ciszą w wieży.
- Gdy `flaga.s1-zegar-kradziezy` wynosi 3 lub więcej, a postacie przychodzą o zmierzchu: Cassian już tu jest i pierwszy ich zauważa.
- Jeśli `flaga.zegarek-cassiana` ≠ `u-cassiana`: Cassian nie przychodzi o zmierzchu (nie ma czym podbierać); krużganek jest pusty.
- Po `flaga.trzynasta-wybila`: dzwony wieży biją trzynasty raz najgłośniej w zamku. Od tej nocy Filch zamyka wejście na klucz (Sesja 2).

**Odczyt do mapy dryfu (propozycja robocza dla sceny 06):** w samej wieży 0 minut, idealnie. W krużganku u stóp wieży zwykłe zegarki uczniów spóźniają się najbardziej w zamku (−6 minut), gładko. Paradoks jest celowy: przypływ płynie **ku** wieży, ale wieża sama nic nie pokazuje. Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.**
- **Wahadło** przelatuje między klatkami schodowymi na wysokości półpiętra. Kto próbuje przejść „na skróty” między schodami, ryzykuje uderzenie (obrażenia ustala mechanik).
- **Dzwonnica** jest za kratą na klucz Filcha. Kto wejdzie wyżej, w chwili bicia zostaje ogłuszony (kandydat: stan Rattled, czyli roztrzęsiony, ustala mechanik).
- Wysokość. Balustrady są stare. Upadek nie powinien być w Sesji 1 realnym zagrożeniem śmierci; to miejsce, gdzie zginął Ansel, i MG decyduje z graczami, jak blisko kadru ma być ten temat (linie i zasłony).
- **Kryjówki:** zakamarki krużganka za filarami (dobre do śledzenia Cassiana o zmierzchu), wnęka pod schodami przy skrzyni z narzędziami.

### Do weryfikacji
- Wieża Zegarowa nie jest opisana w książkach (niepewne w kanonie); w kampanii to nasz element oparty na mapie Walkera s. 159 (zob. [[kanon.walker-a-kanon-1969]]).
- „Zachodnia strona zamku” to nasz wybór kierunku (mapa Walkera nie podaje stron świata w wyciągu tekstu); trzeba go trzymać spójnie w opisach okien i pomiarów.
- Czy wejście do mechanizmu jest za dnia otwarte dla uczniów: przyjmujemy, że tak (drzwi z krużganka), a dzwonnica jest zamknięta. Szczegół wykonawczy.

## Ukryte

Klepsydra Daniny jest związana w mechanizmie wieży „w godzinie, której wieża nie wybija”. W Sesji 1 niczego z niej nie widać i żaden test tego nie ujawnia: wieża jest tylko kotwicą. Crake co tydzień luzuje jej pieczęć, stąd wycieki i przypływ, który podbiera Cassian. Ansel spadł z tej wieży jesienią 1951 roku; nie pamięta upadku, pamięta tylko, że dzwon był bardzo blisko.

## Testy

Terminy Walkera w testach: Wits (bystrość), Speed (szybkość), Observation (spostrzegawczość), Stealth (skradanie się).

```yaml
test:
  id: miejsce.wieza-zegarowa.test.mechanizm
  opis: "Postacie badają mechanizm zegara w poszukiwaniu usterki albo śladów manipulacji."
  kto: grupa
  rzut: "1D10 + Wits + Observation"
  trudnosc: "Tricky (12)"
  modyfikatory:
    - warunek: "Postać nadal ma stan Drained (+3) albo Dazed (+2) po scenie 03 (s. 35)"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: sukces
      efekt: "Mechanizm jest bez skazy. Na osi głównego koła lśni świeży olej, a na obudowie mosiężna plakietka „Konserwacja: Crake i Córka, ulica Pokątna”."
      flagi_ustaw: [flaga.wieza-zbadana, flaga.plakietka-crake]
    - wynik: porazka
      efekt: "Nic tu nie jest zepsute, to jedno widać. Plakietkę i olej i tak zauważa ktoś, kto oprze się o obudowę i ubrudzi rękaw."
      flagi_ustaw: [flaga.wieza-zbadana, flaga.plakietka-crake]
```

```yaml
test:
  id: miejsce.wieza-zegarowa.test.sledzenie-w-kruzganku
  opis: "O zmierzchu postacie obserwują Cassiana zza filarów krużganka, nie zdradzając się."
  kto: grupa
  rzut: "1D10 + Speed + Stealth"
  trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.cassian-vane)"
  wyniki:
    - wynik: wygrana
      efekt: "Widzą, jak Cassian nakręca zatrzymany zegarek, który nie powinien działać, i jak jego twarz nagle się wygładza (W4)."
      flagi_ustaw: []
    - wynik: przegrana
      efekt: "Cassian odwraca się w pół ruchu: „Grupa trzecia. Też mierzycie czas?”. Konfrontacja zaczyna się na jego warunkach (scena 08)."
      flagi_ustaw: []
```

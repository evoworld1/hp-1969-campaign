---
id: przedmiot.zegarek-cassiana
typ: przedmiot
tytul: "Zatrzymany zegarek Cassiana"
status: szkic
rodzaj: "artefakt (zwykły zegarek kieszonkowy, który stał się kanałem magii karty)"
wlasciciel_start: npc.cassian-vane
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.01 (zerka na stojące wskazówki), s1.scena.02, s1.scena.03 (poza kadrem),
#   s1.scena.04 (dotyka kieszonki), s1.scena.07, s1.scena.08, s1.scena.09, s1.scena.12
sceny: []
tylko_mg: true
tagi: [s1, cassian, zegarek, slaby-punkt, sygnal, zegar-kradziezy]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (siatka bezpieczeństwa 1, zegar kradzieży, scena 08)"
  - "03_postacie/npc/cassian-vane.md (pochodzenie zegarka przyjęte przez MG 2026-11-20)"
aktualizacja: 2026-11-20
---
## Opis

Srebrny zegarek kieszonkowy, starszy niż jego właściciel, na długim srebrnym łańcuszku zwisającym z kieszonki zapiętej kamizelki. Koperta wytarta kciukami, z wygrawerowanym ozdobnym „V”. Szkiełko ma jedną cienką rysę przez cyfrę dziewięć. Wskazówki stoją. Kto przyjrzy się z bliska, zobaczy, że sekundnik też stoi, choć w środku coś bardzo cicho tyka.

W dłoni jest cięższy, niż powinien, i lekko ciepły. Tempus rzucony obok niego „tyka” szybciej niż gdziekolwiek indziej w zamku.

Zegarek należał do dziadka Cassiana. Wskazówki stanęły w godzinie jego śmierci. Ojciec dał go Cassianowi po SUM-ach ze słowami, że „Vane'owie się nie spóźniają”.

## Działanie

**Co robi (prawda dla MG).** Przez ten zegarek działa magia [[przedmiot.karta-pozyczajacego]]. Wyciek czasu z Wieży Zegarowej płynie **do zegarka**, gdziekolwiek ten jest. Cassian nakręca go nocą, a podebrane chwile wydaje: na sprawdzianach, w pokazie u Wrena, w pojedynku.

**Ważne reguły z grafu.**
- Godzina drużyny ginie w scenie 03 **zawsze**, także gdy zegarek jest już u postaci. Wtedy godzina wpada do zegarka w ich kieszeni, a nie do Cassiana (siatka bezpieczeństwa 1). Na Obronie (04) Cassian jest wtedy zwyczajny, przegrywa pokaz i maca pustą kieszonkę.
- Zegar kradzieży (`flaga.s1-zegar-kradziezy`) nie rośnie, dopóki zegarek nie jest u Cassiana. Zatrzymuje się na stałe, gdy zegarek trafia do graczy, zostaje skonfiskowany albo zniszczony.
- Skonfiskowany zegarek (np. w szufladzie Flitwicka) nadal przyjmuje wyciek. Cassian próbuje wtedy namówić postacie, żeby pomogły mu go odzyskać.
- Zniszczony zegarek kończy podbieranie, a **część skradzionych godzin wraca do ofiar**; [[npc.ansel-dray]] na chwilę migocze, gdziekolwiek jest (decyzja MG 2026-11-20; szczegóły w „Dla MG”).
- Karta Pożyczającego działa tylko razem z tym zegarkiem (decyzja MG 2026-11-20).

**Co postacie mogą z nim zrobić w Sesji 1.**
- **Zauważyć go** przy śniadaniu (01): Cassian patrzy na stojące wskazówki, jakby sprawdzał godzinę (W0).
- **Nazwać sygnał** na Obronie (04): dotknięcie kieszonki i wzdrygnięcie po każdym nienaturalnym ruchu (`flaga.sygnal-cassiana-nazwany`, W4).
- **Wytrącić albo przywołać go w pojedynku** (np. Expelliarmus, czyli zaklęcie rozbrajające, albo Accio, czyli zaklęcie przywołujące, wymierzone w kieszonkę): Cassian traci przewagę do końca sceny.
- **Ukraść go** (przy śniadaniu, na Zaklęciach, w dormitorium nocą, gdy leży pod poduszką). Test niżej.
- **Oddać go nauczycielowi** (`flaga.zegarek-cassiana` = `skonfiskowany`) albo **zniszczyć** (`zniszczony`).
- **Oddać go Cassianowi** w targu: wtedy zegar kradzieży znów może rosnąć, chyba że Cassian zostaje zdemaskowany i obiecuje przestać.

## Mechanika

Terminy Walkera w testach: Wits (bystrość), Speed (szybkość), Observation (spostrzegawczość), Concealment (ukrywanie), Chicanery (podstęp).

Bez własnych statystyk. W rękach Cassiana zegarek zasila jego zdolność „Skradzione Chwile” (opis w karcie [[npc.cassian-vane]]; dodatkowe akcje ponad zwykłe dwie w rundzie, Walker 2e s. 33; liczby ustala mechanik). Trudność wycelowania zaklęcia w kieszonkę i zniszczenia zegarka: niżej.

```yaml
test:
  id: przedmiot.zegarek-cassiana.test.kradziez
  opis: "Postać próbuje niepostrzeżenie wyjąć zegarek z kieszonki Cassiana albo spod jego poduszki."
  kto: jeden
  rzut: "DO-USTALENIA"
  trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.cassian-vane)"
  modyfikatory:
    - warunek: "Cassian śpi (dormitorium, siatka bezpieczeństwa 5)"
      wartosc: "DO-USTALENIA"
  wyniki:
    - wynik: wygrana
      efekt: "Zegarek jest u postaci. Cassian odkrywa stratę w ciągu godziny i sam przychodzi po zegarek tego wieczoru albo nazajutrz (wejście do sceny 08)."
      flagi_ustaw: [flaga.zegarek-cassiana]
    - wynik: przegrana
      efekt: "Cassian łapie rękę albo budzi się. Od tej chwili jest czujny; zegarek nosi przy sobie nawet nocą. Konfrontacja może zacząć się od razu na jego warunkach."
      flagi_ustaw: []
```

Uwaga dla mechanika: kandydaci na `rzut` to `1D10 + Speed + Concealment` albo `1D10 + Speed + Chicanery` (Speed to szybkość, Concealment to ukrywanie, Chicanery to podstęp; nazwy z listy Walkera, s. 12 i 21–23). `flaga.zegarek-cassiana` ma przy wygranej wartość `u-graczy`.

**Zniszczenie zegarka (liczby: mechanik, 2026-11-20).** Podręcznik ma zasady niszczenia tylko dla zaklęć wysadzających (Blasting Spells, s. 42): obrażenia porównuje się z wytrzymałością materiału (meble 10, mocne drzwi 20). Zwykły zegarek byłby poniżej mebli, ale magia karty go wzmacnia: **wytrzymałość 15**. Dla zwykłego uderzenia (młotek, kamień, rzut o posadzkę) podręcznik nie podaje zasad (brak w podręczniku, s. 35 i 42); propozycja zasady domowej: liczyć je jak cios bronią improwizowaną, **2D + Vitality** obrażeń, i porównać z wytrzymałością tak samo jak przy wysadzaniu. Jedna próba to jedna akcja (s. 33); poza walką próbować można do skutku, ale każda nieudana próba kosztuje hałas i czas.

```yaml
test:
  id: przedmiot.zegarek-cassiana.test.zniszczenie
  opis: "Postać próbuje zniszczyć zegarek. Rzuca obrażenia i porównuje z wytrzymałością 15 (s. 42). Reducto (4D + Focus + 20, s. 56), Confringo i Bombarda (6D + Focus + 30, s. 48–49) niszczą go zawsze, o ile zaklęcie się uda. Incendio go nie rusza (srebro), Diffindo przecina tylko łańcuszek."
  kto: jeden
  rzut: "obrażenia: 2D + Vitality (uderzenie, zasada domowa) albo obrażenia zaklęcia wysadzającego"
  trudnosc: "wytrzymałość 15"
  modyfikatory:
    - warunek: "Zegarek leży na kamieniu, a postać uderza czymś ciężkim i twardym (młotek, kamień)"
      wartosc: "+2 do rzutu"
    - warunek: "Cassian jest obok i próbuje przeszkodzić (zamiast tego może być test przeciwny lub walka)"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: sukces
      efekt: "Obrażenia równe wytrzymałości albo wyższe: szkiełko pęka, z koperty wylatuje ciche, długie westchnienie. Skutki z „Dla MG”: Ansel migocze, część skradzionych godzin wraca do ofiar, zegar kradzieży staje. Reparo (s. 57) składa obudowę, ale magii nie przywraca."
      flagi_ustaw: [flaga.zegarek-cassiana]
    - wynik: porazka
      efekt: "Mniej niż wytrzymałość: zegarek odskakuje, rysa na szkiełku się wydłuża, a w środku tyka głośniej. Jeśli Cassian jest w zamku, czuje to jak ukłucie w piersi i wie, że ktoś próbował. Można spróbować znowu."
      flagi_ustaw: []
```

**Celowanie w kieszonkę w walce (propozycja zasady domowej).** Expelliarmus (s. 51) wytrąca tylko to, co przeciwnik trzyma w dłoni, więc działa na zegarek, gdy Cassian go wyjmie (po każdym użyciu Skradzionych Chwil dotyka kieszonki). Zegarek w kieszonce wyrywa Accio (s. 47) traktowane jak zaklęcie celowane (s. 33, 165): cel to obrona Cassiana **+4 do trudności** (osłona około 40%, +2 za każde 20%, s. 165).


## Dla MG

**Prawda.** Zegarek nie jest magicznym przedmiotem z natury. Stał się kanałem, bo Cassian zrobił z nim to, czego uczy karta. Dlaczego karta wymaga zegara, który stanął, i co to mówi o daninie czasu, wyjaśni się najwcześniej w Sesji 2.

**Cassian i zegarek.** To jego słaby punkt i jego wstyd naraz: prezent od ojca, którego się boi. Odebranie zegarka wstrząsa nim bardziej niż przegrana. Litość i rozmowa o dziadku mogą go złamać szybciej niż groźba.

**Zniszczenie zegarka (decyzja MG 2026-11-20).** Gdy zegarek pęka (zaklęcie, młotek, rzucony o kamień; test `przedmiot.zegarek-cassiana.test.zniszczenie` w „Mechanice”), dzieją się trzy rzeczy naraz:
- **Ansel migocze**, gdziekolwiek jest: brzegi się strzępią, głos dochodzi jak z innego pokoju. Wraca do siebie przed końcem sceny; trwałego skutku brak.
- **Część skradzionych godzin wraca do ofiar.** Przykład do pokazania przy stole: [[npc.maisie-lock]] nagle pamięta swój kwadrans i zaczyna płakać ze śmiechu na korytarzu; drugoroczniak, który „przespał lekcję”, przypomina sobie, co na niej było. Wracają godziny innych ofiar, nie wszystkie.
- **Zegar kradzieży staje** na stałe (`flaga.zegarek-cassiana` = `zniszczony`).

Decyzja MG 2026-11-20: **godzina drużyny nie wraca**, bo jest wpleciona w Ansela jako jego kotwica. Postacie nie odzyskują wspomnień ze straconej godziny. Gdyby MG wybrał inaczej, Ansel słabnie przy zniszczeniu mocniej.

Cassian przy zniszczeniu: najpierw ulga (koniec), zaraz potem strach (ojciec, dziadek). Jeśli to postacie zniszczyły zegarek bez jego zgody, zapamięta to na długo.

**Użycie zegarka razem z kartą (decyzja MG 2026-11-20).** Tylko oba przedmioty naraz. Postacie, które ich użyją, wchodzą w zakończenie „moc” z przeglądu scenariusza.

**Powiązane flagi:** `flaga.zegarek-cassiana`, `flaga.s1-zegar-kradziezy`, `flaga.sygnal-cassiana-nazwany`, `flaga.godzina-stracona`, `flaga.cassian-zdemaskowany`, `flaga.cassian-los`, `flaga.rejestr-godzin`.

**Powiązane obiekty:** [[npc.cassian-vane]], [[npc.filius-flitwick]] (szuflada przy konfiskacie), [[npc.thaddeus-wren]], [[npc.ansel-dray]], [[miejsce.sala-obrony]], [[miejsce.wieza-zegarowa]], [[miejsce.lochy-przejscie-slytherinu]].

### Do weryfikacji
- Grawer „V” i rysa na szkiełku to szczegóły wykonawcze.
- Godzina, na której stoją wskazówki (godzina śmierci dziadka), nieustalona; nie ma wpływu na Sesję 1.

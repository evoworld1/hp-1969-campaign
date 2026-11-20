---
id: przedmiot.zegarek-cassiana
typ: przedmiot
tytul: "Zatrzymany zegarek Cassiana"
status: szkic
rodzaj: "artefakt (zwykły zegarek kieszonkowy, który stał się kanałem magii karty)"
wlasciciel_start: npc.cassian-vane
pewnosc: nasze
# Pozostałe pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo także: s1.scena.02, s1.scena.03 (poza kadrem),
#   s1.scena.04 (dotyka kieszonki), s1.scena.07, s1.scena.08, s1.scena.09, s1.scena.12
sceny: [s1.scena.01, s1.scena.02, s1.scena.03, s1.scena.04]
tylko_mg: true
tagi: [s1, cassian, zegarek, slaby-punkt, sygnal, zegar-kradziezy]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (siatka bezpieczeństwa 1, zegar kradzieży, scena 08)"
  - "03_postacie/npc/cassian-vane.md (pochodzenie zegarka przyjęte przez MG 2026-11-20)"
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-20 (zegarek nie do zdobycia przed 04, wyrwanie w pokazie, zaklęcia ujawniające)"
aktualizacja: 2026-11-20
---
## Opis

Srebrny zegarek kieszonkowy, starszy niż jego właściciel, na długim srebrnym łańcuszku zwisającym z kieszonki zapiętej kamizelki. Koperta wytarta kciukami, z wygrawerowanym ozdobnym „V”. Szkiełko ma jedną cienką rysę przez cyfrę dziewięć. Wskazówki stoją. Kto przyjrzy się z bliska, zobaczy, że sekundnik też stoi, choć w środku coś bardzo cicho tyka.

W dłoni jest cięższy, niż powinien, i lekko ciepły. Tempus rzucony obok niego „tyka” szybciej niż gdziekolwiek indziej w zamku.

**Zaklęcia ujawniające nic nie pokazują** (decyzja MG 2026-11-20, obowiązuje w całej kampanii: zaklęcia ujawniające nie wykrywają magii czasu; zapis z przykładami zaklęć: [[zasada.walker-luki]], ZD-24). Kto rzuci na zegarek zaklęcie wykrywające albo ujawniające magię, widzi zwykłą rodzinną pamiątkę z zepsutym mechanizmem. Najwyżej szkło jest dziwnie zimne pod palcem, choć koperta jest ciepła. To jedyny ślad i nie jest dowodem dla nikogo poza samymi postaciami.

Zegarek należał do dziadka Cassiana. Wskazówki stanęły w godzinie jego śmierci. Ojciec dał go Cassianowi po SUM-ach ze słowami, że „Vane'owie się nie spóźniają”.

## Działanie

**Co robi (prawda dla MG).** Przez ten zegarek działa magia [[przedmiot.karta-pozyczajacego]]. Cassian nakręca go nocą, a zegarek podbiera dla niego czas z wycieków Klepsydry; podebrane chwile Cassian wydaje na sprawdzianach, w pokazie u Wrena, w pojedynku.

**Ważne reguły z grafu (po decyzjach MG z 2026-11-20).**
- **Do końca sceny 04 zegarek jest zawsze przy Cassianie** (`flaga.zegarek-cassiana` = `u-cassiana`). Przy śniadaniu (01) i na Zaklęciach (02) jest tylko sygnałem. Godzina drużyny ginie w scenie 03 i zasila Cassiana w pokazie (04) bez wyjątków.
- Zegar kradzieży (`flaga.s1-zegar-kradziezy`) biegnie co najmniej od sceny 03 do wieczoru po scenie 04. Nie rośnie, gdy zegarek nie jest u Cassiana. Zatrzymuje się, gdy zegarek trafia do graczy, zostaje skonfiskowany albo zniszczony (zniszczenie zatrzymuje go na stałe; zegarek oddany w targu niezdemaskowanemu Cassianowi pozwala mu ruszyć znowu).
- Skonfiskowany zegarek (np. w szufladzie Flitwicka po scenie 08) bez Cassiana nic nie podbiera. Cassian próbuje wtedy namówić postacie, żeby pomogły mu go odzyskać.
- Zniszczony zegarek kończy podbieranie, a **część skradzionych godzin wraca do ofiar**; [[npc.ansel-dray]] na chwilę migocze, gdziekolwiek jest (decyzja MG 2026-11-20; szczegóły w „Dla MG”).
- Karta Pożyczającego działa tylko razem z tym zegarkiem (decyzja MG 2026-11-20).

**Co postacie mogą z nim zrobić w Sesji 1** (zgodnie z grafem scen i siatką bezpieczeństwa 1, decyzje MG z 2026-11-20).

*Sceny 01–02 (śniadanie, Zaklęcia, przerwa): tylko sygnał.*
- **Zauważyć go** przy śniadaniu (01): Cassian patrzy na stojące wskazówki, jakby sprawdzał godzinę (W0). Na Zaklęciach (02) najwyżej widać łańcuszek i dłoń na kieszonce.
- **Zdobyć go się tu nie da.** Cassian trzyma zegarek w zaciśniętej dłoni albo w zapiętej kieszonce i nie odchodzi od stołu Slytherinu. Próba kradzieży kończy się chwyceniem ręki, uwagą prefekta albo nauczyciela. Donos nic nie daje: „rodzinna pamiątka, nie chodzi”, a nikt niczego nie konfiskuje (zob. [[npc.thaddeus-wren]]: „Zepsuty zegarek to nie przestępstwo”). Cena próby: Cassian zapamiętuje twarz postaci i w 04 i 08 jest wobec niej czujny. Szczegóły w sekcjach „Gdy gracze zboczą” plików scen.

*Scena 04 (pokaz u Wrena): odkrycie, ale nie przejęcie.*
- **Zobaczyć, że to zegarek daje Cassianowi szybkość.** Postać, która patrzy na pokaz (walcząca albo z boku), robi test spostrzegawczości (Wits + Observation, czyli bystrość i spostrzegawczość; liczby w pliku sceny 04, ustala mechanik). Sukces: dotyk kieszonki tuż przed każdym podwójnym ruchem, ciepło szkła, tykanie, którego nie powinno być. Kto powie to na głos, ustawia `flaga.sygnal-cassiana-nazwany` (W4) i ma przewagę w scenie 08.
- **Wyrwać go w pokazie.** Postać, która pokona Cassiana, może wyrwać mu zegarek (np. Expelliarmus, czyli zaklęcie rozbrajające, gdy Cassian trzyma go w dłoni, albo Accio, czyli zaklęcie przywołujące, na kieszonkę; zasady niżej). Wren natychmiast odbiera zegarek i oddaje go Cassianowi: „Pamiątka, nie dowód”. Od tej chwili Wren podejrzewa (`flaga.wren-podejrzewa`). Zegarek zostaje `u-cassiana`, zegar kradzieży biegnie dalej.

*Od wieczoru po scenie 04: prawdziwe przejęcie.*
- **Ukraść go**, np. w dormitorium Slytherinu nocą, gdy leży pod poduszką (siatka bezpieczeństwa 5), albo w pokoju wspólnym, gdy Cassian zasypia przy kominku. Test niżej. Zegarek u graczy zatrzymuje zegar kradzieży, a Cassian sam przychodzi po niego jeszcze tego wieczoru albo nazajutrz (wejście do sceny 08).
- **Wytargować go** w scenie 08 (np. milczenie postaci za zegarek albo za kartę).
- **Dostać go z litości:** roztrzęsiony Cassian oddaje zegarek sam, gdy ktoś szczerze mu pomoże (scena 08).
- **Wygrać go w pojedynku** w scenie 08: jako stawkę albo wytrącony z ręki (Cassian traci przewagę do końca sceny).
- Potem: **oddać go nauczycielowi** (`flaga.zegarek-cassiana` = `skonfiskowany`), **zniszczyć** (`zniszczony`) albo **oddać Cassianowi** w targu. Oddany Cassianowi znów może podbierać i zegar kradzieży może ruszyć, chyba że Cassian jest zdemaskowany i obiecuje przestać.

## Mechanika

Terminy Walkera w testach: Wits (bystrość), Speed (szybkość), Observation (spostrzegawczość), Concealment (ukrywanie), Chicanery (podstęp).

Bez własnych statystyk. W rękach Cassiana zegarek zasila jego zdolność „Skradzione Chwile” (opis w karcie [[npc.cassian-vane]]; dodatkowe akcje ponad zwykłe dwie w rundzie, Walker 2e s. 33; liczby ustala mechanik). Trudność wycelowania zaklęcia w kieszonkę i zniszczenia zegarka: niżej.

```yaml
test:
  id: przedmiot.zegarek-cassiana.test.kradziez
  opis: "Postać próbuje niepostrzeżenie wyjąć zegarek z kieszonki Cassiana, z jego dłoni albo spod poduszki. Obowiązuje dopiero od wieczoru po scenie 04 (decyzja MG 2026-11-20). Wcześniej testu się nie rzuca: próba zawsze się nie udaje (siatka bezpieczeństwa 1). Test przeciwny (Opposed Test, s. 4): postać rzuca 1D10 + Speed + Concealment (Concealment obejmuje niepostrzeżone chowanie drobnych rzeczy w dłoni, palming objects, s. 21), Cassian 1D10 + Wits + Observation (1D10 + 10). Wyższy wynik wygrywa. Remis rozstrzyga Narrator (s. 4); zasada domowa: Cassian porusza się albo mruczy przez sen, postać może cofnąć rękę bez skutków albo rzucić jeszcze raz, a przy drugim remisie przegrywa. Szanse przy Speed + Concealment 6–9: Cassian przytomny 15–36% (to ruch na desperację), Cassian śpi 45–72% (trudne, ale do przejścia). Samo dostanie się do dormitorium Slytherinu to osobna sprawa: postać ze Slytherinu śpi tam i wchodzi bez testu (siatka 5); inni potrzebują hasła albo testu skradania, którego tu nie liczymy."
  kto: jeden
  rzut: "1D10 + Speed + Concealment"
  trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.cassian-vane)"
  modyfikatory:
    - warunek: "Cassian śpi w dormitorium, zegarek pod poduszką (siatka bezpieczeństwa 5). Brak w podręczniku zasad dla śpiącego przeciwnika; zasada domowa. Cassian śpi płytko i niespokojnie, a zegarek leży pod jego głową, więc nie jest to automatyczny sukces."
      wartosc: "-4 do rzutu Cassiana"
    - warunek: "Cassian drzemie przy kominku w pokoju wspólnym z zegarkiem w dłoni (wariant siatki 5 dla dziewczyny ze Slytherinu); zasada domowa"
      wartosc: "-2 do rzutu Cassiana"
    - warunek: "Inna postać odwraca uwagę przytomnego Cassiana (zagaduje, upuszcza książki); najwyżej dwie (Working Together, s. 4). Nie działa, gdy Cassian śpi."
      wartosc: "+1 do rzutu za każdą pomagającą postać"
    - warunek: "Kradnie postać, która w scenach 01–04 już próbowała zabrać zegarek albo celowała w niego różdżką (Cassian zna jej twarz i jest czujny); zasada domowa"
      wartosc: "+2 do rzutu Cassiana"
    - warunek: "Cassian jest pod wpływem eliksiru nasennego (Sleeping Draught, s. 64) albo ogłuszony (Stupefy, s. 58)"
      wartosc: "bez testu kradzieży: wygrana; trudność przenosi się na podanie eliksiru albo trafienie zaklęciem (osobne testy, przemoc wobec ucznia ma skutki fabularne)"
  wyniki:
    - wynik: wygrana
      efekt: "Zegarek jest u postaci. Cassian odkrywa stratę w ciągu godziny i sam przychodzi po zegarek tego wieczoru albo nazajutrz (wejście do sceny 08)."
      flagi_ustaw: [flaga.zegarek-cassiana]
    - wynik: przegrana
      efekt: "Cassian łapie rękę albo budzi się. Od tej chwili jest czujny; zegarek nosi przy sobie nawet nocą i kolejnej próby kradzieży nie ma (zostają pojedynek, targ albo litość w scenie 08). Konfrontacja może zacząć się od razu na jego warunkach."
      flagi_ustaw: []
```

**Test kradzieży: liczby (mechanik, 2026-11-20).** Obowiązuje **od wieczoru po scenie 04**; w scenach 01–04 się go nie używa (próba zawsze się nie udaje, bez rzutu, więc nie da się jej ratować RETRORSUM ani Story Points). Rzut: `1D10 + Speed + Concealment` (Speed to szybkość, Concealment to ukrywanie; Walker wymienia „palming objects” w opisie Concealment, s. 21, a osobnej umiejętności kieszonkowca nie ma). Chicanery (podstęp) odrzucona, bo dotyczy kłamstwa i oszustwa słowem, nie ręki. Przeciw: Cassian `1D10 + Wits + Observation` = 1D10 + 10. Śpiący Cassian: −4 do jego rzutu; drzemka przy kominku: −2 (obie wartości to zasady domowe, brak w podręczniku). Po wygranej `flaga.zegarek-cassiana` ma wartość `u-graczy`. Po przegranej Cassian nosi zegarek przy sobie także nocą i kolejnej próby kradzieży już nie ma: zostają pojedynek, targ albo litość w scenie 08. RETRORSUM po przegranej działa normalnie (cofnięcie i pewna wygrana w nowej linii, zasada nasza).

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

**Celowanie w kieszonkę w walce (propozycja zasady domowej; pokaz w 04 i pojedynek w 08).** W pokazie (04) skutek jest tylko chwilowy: Wren oddaje zegarek Cassianowi. Expelliarmus (s. 51) wytrąca tylko to, co przeciwnik trzyma w dłoni, więc działa na zegarek, gdy Cassian go wyjmie (po każdym użyciu Skradzionych Chwil dotyka kieszonki). Zegarek w kieszonce wyrywa Accio (s. 47) traktowane jak zaklęcie celowane (s. 33, 165): cel to obrona Cassiana **+4 do trudności** (osłona około 40%, +2 za każde 20%, s. 165).


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
- Co dzieje się z zegarkiem skonfiskowanym po scenie 08: roboczo bez Cassiana nic nie podbiera (dawna reguła „wyciek płynie do zegarka, gdziekolwiek jest” usunięta po decyzjach MG z 2026-11-20). Do potwierdzenia przez MG.
- Grawer „V” i rysa na szkiełku to szczegóły wykonawcze.
- Godzina, na której stoją wskazówki (godzina śmierci dziadka), nieustalona; nie ma wpływu na Sesję 1.

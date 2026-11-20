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
- Zniszczony zegarek kończy podbieranie, ale skradzione godziny nie wracają (karta [[npc.cassian-vane]]).

**Co postacie mogą z nim zrobić w Sesji 1.**
- **Zauważyć go** przy śniadaniu (01): Cassian patrzy na stojące wskazówki, jakby sprawdzał godzinę (W0).
- **Nazwać sygnał** na Obronie (04): dotknięcie kieszonki i wzdrygnięcie po każdym nienaturalnym ruchu (`flaga.sygnal-cassiana-nazwany`, W4).
- **Wytrącić albo przywołać go w pojedynku** (np. Expelliarmus, czyli zaklęcie rozbrajające, albo Accio, czyli zaklęcie przywołujące, wymierzone w kieszonkę): Cassian traci przewagę do końca sceny.
- **Ukraść go** (przy śniadaniu, na Zaklęciach, w dormitorium nocą, gdy leży pod poduszką). Test niżej.
- **Oddać go nauczycielowi** (`flaga.zegarek-cassiana` = `skonfiskowany`) albo **zniszczyć** (`zniszczony`).
- **Oddać go Cassianowi** w targu: wtedy zegar kradzieży znów może rosnąć, chyba że Cassian zostaje zdemaskowany i obiecuje przestać.

## Mechanika

Terminy Walkera w testach: Wits (bystrość), Speed (szybkość), Observation (spostrzegawczość), Concealment (ukrywanie), Chicanery (podstęp).

Bez własnych statystyk. W rękach Cassiana zegarek zasila jego zdolność „Skradzione Chwile” (opis w karcie [[npc.cassian-vane]]; dodatkowe akcje ponad zwykłe dwie w rundzie, Walker 2e s. 33; liczby ustala mechanik). Trudność wycelowania zaklęcia w kieszonkę ustala mechanik.

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

## Dla MG

**Prawda.** Zegarek nie jest magicznym przedmiotem z natury. Stał się kanałem, bo Cassian zrobił z nim to, czego uczy karta. Dlaczego karta wymaga zegara, który stanął, i co to mówi o daninie czasu, wyjaśni się najwcześniej w Sesji 2.

**Cassian i zegarek.** To jego słaby punkt i jego wstyd naraz: prezent od ojca, którego się boi. Odebranie zegarka wstrząsa nim bardziej niż przegrana. Litość i rozmowa o dziadku mogą go złamać szybciej niż groźba.

**DO DECYZJI MG: czy zniszczenie zegarka dotyka Ansela?** Pytanie nowe, zgłoszone w raporcie dla Reżysera. Wariant roboczy: **Ansel tylko na chwilę migocze** (brzegi się strzępią, głos dochodzi jak z innego pokoju) i wraca do siebie przed końcem sceny; trwałego skutku brak. Do decyzji MG nie przypisuj zniszczeniu zegarka żadnego trwałego skutku dla Ansela.

**DO DECYZJI MG: czy postacie mogą same użyć zegarka (razem z kartą)?** Zob. [[przedmiot.karta-pozyczajacego]]. Wariant roboczy: tylko oba przedmioty naraz, i tylko jako wejście w rozgałęzienie „moc”.

**Powiązane flagi:** `flaga.zegarek-cassiana`, `flaga.s1-zegar-kradziezy`, `flaga.sygnal-cassiana-nazwany`, `flaga.godzina-stracona`, `flaga.cassian-zdemaskowany`, `flaga.cassian-los`, `flaga.rejestr-godzin`.

**Powiązane obiekty:** [[npc.cassian-vane]], [[npc.filius-flitwick]] (szuflada przy konfiskacie), [[npc.thaddeus-wren]], [[npc.ansel-dray]], [[miejsce.sala-obrony]], [[miejsce.wieza-zegarowa]], [[miejsce.lochy-przejscie-slytherinu]].

### Do weryfikacji
- Grawer „V” i rysa na szkiełku to szczegóły wykonawcze.
- Godzina, na której stoją wskazówki (godzina śmierci dziadka), nieustalona; nie ma wpływu na Sesję 1.

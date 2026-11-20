---
id: s1.scena.09
typ: scena
tytul: "Biblioteka: trzynaste drzwi i Sala Zatrzymanych Godzin"
status: szkic
sesja: s1
akt: "III"
kolejnosc: 9
czas_min: 40
cel: "Kulminacja: nocna wyprawa wbrew regulaminowi, drzwi otwierane „godziną, której nie ma”, pracownia Marrow z zaklętą księgą i gablotą, która wydaje notatnik po oddaniu godziny. Najwyżej dwie przeszkody obowiązkowe (drzwi i gablota)."
npc:
  - npc.ansel-dray
  - npc.argus-filch
  - npc.cassian-vane
  - npc.irma-pince
miejsca:
  - miejsce.biblioteka
  - miejsce.sala-zatrzymanych-godzin
przedmioty:
  - przedmiot.zakleta-ksiega
  - przedmiot.dziennik-marrow
  - przedmiot.karta-pozyczajacego
  - przedmiot.zegarek-cassiana
  - przedmiot.zdjecie-1951
  - przedmiot.klepsydra-daniny
handouty:
  - s1.handout.pierwsza-strona-dziennika
  - s1.handout.karta-pozyczajacego
flagi_wejscie:
  - flaga.lokalizacja-pracowni
  - flaga.karta-u-graczy
  - flaga.zegarek-cassiana
  - flaga.cassian-zdemaskowany
  - flaga.s1-zegar-kradziezy
  - flaga.ansel-kontakt
  - flaga.marrow-imie-znane
  - flaga.tempus-opanowane
  - flaga.filch-zlapal
flagi_wyjscie:
  - flaga.pracownia-otwarta
  - flaga.ksiega-zabezpieczenia
  - flaga.ksiega-zlapani
  - flaga.pozyczona-chwila-poznana
  - flaga.gablota-sposob
  - flaga.dziennik-u-graczy
  - flaga.dziennik-miejsce
  - flaga.wymark-slad
  - flaga.filch-zlapal
  - flaga.s1-zegar-kradziezy
nastepne:
  - s1.scena.10
tagi: [s1, kulminacja, noc, biblioteka, pracownia, zakleta-ksiega, gablota]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.09, siatki bezpieczeństwa 6, 8 i 9, W5, W6, W7, W9, W10)"
  - "04_kampania/przedmioty/zakleta-ksiega.md (stopnie zabezpieczeń, ucieczka)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (wymykanie się nocą), tekst 2 (ostatni rząd, przycisk w kształcie klepsydry), tekst 3 (drzwi i tykające schody), tekst 4 (galeria wahadeł), tekst 5 (Sala Zatrzymanych Godzin), tekst 6 (zaklęta księga w niebieskawej łunie), tekst 7 (pełne zabezpieczenia: trzynaście uderzeń), tekst 8 (gablota i tabliczka), tekst 9 (gablota się otwiera).

## Dla MG

**Kiedy w fikcji:** noc z wtorku na środę (23/24 września), po ciszy nocnej.

**Wejście:** `flaga.lokalizacja-pracowni` albo droga awaryjna (Tempus przy półkach, rejestr wypożyczeń, śledzenie Cassiana, zegar kradzieży 4). Zawsze nocą, bez zgody (decyzja MG z 2026-11-20).

**Co się naprawdę dzieje.** TODO. Galeria wahadeł to cena, nie bramka. Księga nie jest przeszkodą obowiązkową. Siłowe otwarcie gabloty nie uruchamia zabezpieczeń księgi.

### Rytm sceny

**Krok 1. Przed wyprawą** (ok. 2 min)
- Krótko: sprawdź `flaga.ansel-kontakt`. Jeśli jest mniejsza niż liczba graczy, najpierw spotkanie wyrównujące z modułu 12 dla każdej brakującej postaci. Przy zegarze kradzieży 4: siatka 6 (Ansel albo bicie budzi postacie, Cassian jest już w środku).

**Krok 2. Nocna wyprawa** (ok. 6 min)
- Czytaj: tekst 1 („TODO…”)
- Test: `s1.scena.09.test.skradanie` (grupowy; przeciwnik: obchód Filcha; kandydat: Zegar Północy)
- Flagi: `flaga.filch-zlapal` (siatka 9)
- Krótko: Ansel może iść przodem jako zwiadowca. Porażka zmienia cenę (minuty, ślad dla pani Pince rano), złapanie: siatka 9.

**Krok 3. Ostatni rząd i drzwi** (ok. 5 min)
- Czytaj: tekst 2 („TODO…”), tekst 3 („TODO…”)
- Test: `s1.scena.09.test.drzwi` (opcjonalnie: nasłuchiwanie albo Tempus przy ścianie, W6)
- Dialog: `s1.scena.09.dialog.ansel-schody-tykaja` — „TODO” (sens: „Schody tykają trzynaście razy”)
- Flagi: `flaga.pracownia-otwarta`
- Krótko: przeszkoda obowiązkowa 1. Drogi: Tempus (tarcza z trzynastoma kreskami), margines karty („XIII”), Ansel, bicie zza ściany.

**Krok 4. Galeria wahadeł** (ok. 4 min)
- Czytaj: tekst 4 („TODO…”)
- Test: `s1.scena.09.test.galeria-wahadel` (grupowy)
- Krótko: cena, nie bramka: hałas, czas albo zadrapanie. Przy czasie goniącym pomiń.

**Krok 5. Sala Zatrzymanych Godzin** (ok. 5 min)
- Czytaj: tekst 5 („TODO…”)
- Test: `s1.scena.09.test.sciana-obliczen` (opcjonalna pokusa: zakazana lekcja pożyczania chwili)
- Flagi: `flaga.wymark-slad` (inicjały „S.W.” obok kredowego podpisu Marrow), `flaga.pozyczona-chwila-poznana`
- Krótko: zatrzymane zegary to chwile „zapłaty” z 1951.

**Krok 6. Zaklęta księga** (ok. 5 min)
- Czytaj: tekst 6 („TODO…”)
- Test: `s1.scena.09.test.ksiega-porazenie` (poziom 2, kolejne dotknięcia)
- Flagi: `flaga.ksiega-zabezpieczenia` (0–3)
- Krótko: patrzenie bezpieczne. Pasek po wyrwanej karcie pasuje do karty. Osmalone kamienie i ślady w kurzu (W10.1). Przed poziomem 3 MG mówi wprost, poza fikcją, co się stanie.

**Krok 7. Ucieczka** (ok. 5–10 min, tylko przy poziomie 3)
- Czytaj: tekst 7 („TODO…”)
- Test: `s1.scena.09.test.ucieczka` (trzy odcinki, test grupowy na każdym)
- Flagi: `flaga.ksiega-zlapani` (siatka 8), `flaga.filch-zlapal`
- Krótko: w dłoni zostaje róg kartki z jednym znakiem. Droga otwarta do trzynastego uderzenia.

**Krok 8. Gablota** (ok. 8 min)
- Czytaj: tekst 8 („TODO…”), tekst 9 („TODO…”)
- Dialog: `s1.scena.09.dialog.ansel-szafka` — „TODO” (W7.3, gdy Ansel jest obecny)
- Dialog: `s1.scena.09.dialog.cassian-gablota` — „TODO” (tylko przy zegarze kradzieży 4, Cassian w środku)
- Test: `s1.scena.09.test.gablota-sila` (siłowe otwarcie, z ceną)
- Flagi: `flaga.gablota-sposob`, `flaga.dziennik-u-graczy`, `flaga.dziennik-miejsce`
- Krótko: przeszkoda obowiązkowa 2. Trzy drogi główne: tabliczka, dopisek na karcie, Ansel; zapasowe: szkic przez szkło, Tempus (luka 60 minut), ściana obliczeń. Handout `s1.handout.pierwsza-strona-dziennika` po otwarciu. Przejście do 10 przy progu.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.09.test.skradanie`, `s1.scena.09.test.drzwi`, `s1.scena.09.test.galeria-wahadel`, `s1.scena.09.test.sciana-obliczen`, `s1.scena.09.test.ksiega-porazenie`, `s1.scena.09.test.ucieczka`, `s1.scena.09.test.gablota-sila` (liczby w kartach księgi i biblioteki).

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.gablota-oddana
  rodzaj: glowne
  warunek: "Postać oddaje gablocie godzinę (sama albo kilka postaci dzieli się kosztem)."
  wymaga_flag: [flaga.pracownia-otwarta]
  wyklucza_flagi: []
  efekt: "Gablota otwiera się czysto; notatnik w całości. Wartość flagi: oddana-godzina albo podzielona-godzina. Koszt oddania ustali mechanik (czas, zmęczenie)."
  flagi_ustaw: [flaga.gablota-sposob, flaga.dziennik-u-graczy, flaga.dziennik-miejsce]
  prowadzi_do: s1.scena.10
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.gablota-zabrana
  rodzaj: glowne
  warunek: "Postacie oddają gablocie godzinę zabraną komuś innemu (przez kartę i zegarek)."
  wymaga_flag: [flaga.pracownia-otwarta, flaga.karta-u-graczy]
  wyklucza_flagi: []
  efekt: "Gablota się otwiera, ale ktoś w zamku traci godzinę (kandydat: Rejestr Danin). Pierwszy krok ku zakończeniu „moc”. Wartość flagi: zabrana-godzina."
  flagi_ustaw: [flaga.gablota-sposob, flaga.dziennik-u-graczy, flaga.dziennik-miejsce]
  prowadzi_do: s1.scena.10
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.gablota-wylamana
  rodzaj: glowne
  warunek: "Postacie otwierają gablotę siłą."
  wymaga_flag: [flaga.pracownia-otwarta]
  wyklucza_flagi: []
  efekt: "Działa, z ceną: część notatnika rozmyta, hałas słychać w bibliotece. Zabezpieczenia księgi się nie budzą. Wartość flagi: wylamana."
  flagi_ustaw: [flaga.gablota-sposob, flaga.dziennik-u-graczy, flaga.dziennik-miejsce]
  prowadzi_do: s1.scena.10
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.gablota-nieotwarta
  rodzaj: glowne
  warunek: "Postacie wychodzą bez notatnika."
  wymaga_flag: []
  wyklucza_flagi: [flaga.dziennik-u-graczy]
  efekt: "Wariant awaryjny cliffhangera: zegary i tak wybijają trzynasty raz o północy (zegar kradzieży albo luzująca się pieczęć). Wartość flagi: nieotwarta."
  flagi_ustaw: [flaga.gablota-sposob, flaga.dziennik-miejsce]
  prowadzi_do: s1.scena.10
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.pelne-zabezpieczenia
  rodzaj: glowne
  warunek: "Postać próbuje wyrwać kartkę albo siłą zabrać księgę (poziom 3), po ostrzeżeniu poza fikcją."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Róg kartki z jednym znakiem zostaje w dłoni. Trzynaście uderzeń, ucieczka trzema odcinkami. Kto nie zdąży: siatka 8. Księga „pamięta”: kolejne dotknięcie w tej sesji zaczyna od poziomu 2."
  flagi_ustaw: [flaga.ksiega-zabezpieczenia]
  prowadzi_do: s1.scena.10
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.cassian-w-srodku
  rodzaj: glowne
  warunek: "Zegar kradzieży doszedł do 4: Cassian poszedł do pracowni pierwszy (siatka 6)."
  wymaga_flag: [flaga.s1-zegar-kradziezy]
  wyklucza_flagi: [flaga.cassian-zdemaskowany]
  efekt: "Postacie zastają Cassiana przy gablocie, która nie daje się okraść. Konfrontacja w skrócie (elementy sceny 08 na miejscu); Cassian podpowiada: „Ona nie daje się brać” (zapasowa droga do W7)."
  flagi_ustaw: [flaga.cassian-zdemaskowany, flaga.cassian-los]
  prowadzi_do: s1.scena.10
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.awaryjne-filch-w-drodze
  rodzaj: awaryjne
  warunek: "Filch łapie część albo całą drużynę w drodze do pracowni (siatka 9)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Część złapana: reszta chowa się, złapana postać może odciągnąć Filcha. Wszyscy złapani: szlaban, zegar kradzieży +1; po północy Ansel budzi postać z najwyższą Więzią i druga próba idzie bez testu skradania, z mniejszą ilością czasu."
  flagi_ustaw: [flaga.filch-zlapal, flaga.s1-zegar-kradziezy]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.awaryjne-ksiega-lapie
  rodzaj: awaryjne
  warunek: "Postać nie zdąży przed trzynastym uderzeniem (siatka 8)."
  wymaga_flag: [flaga.ksiega-zabezpieczenia]
  wyklucza_flagi: []
  efekt: "Pracownia ją „wypluwa” w ostatnim rzędzie: ciężkie obrażenia, zaklęcie zapomnienia na ostatnie minuty, skrzydło szpitalne, Filch ją znajduje, zegar kradzieży +1. Informacja nie ginie (inni pamiętają, Ansel, rzecz w dłoni). Śmierć tylko jako świadomy wybór gracza po dwóch ostrzeżeniach."
  flagi_ustaw: [flaga.ksiega-zlapani, flaga.filch-zlapal]
  prowadzi_do: s1.scena.10
```

```yaml
rozgalezienie:
  id: s1.scena.09.rozgalezienie.awaryjne-za-dnia
  rodzaj: awaryjne
  warunek: "Postacie próbują wejść do Działu Ksiąg Zakazanych za dnia albo proszą o zgodę."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Pani Pince nie wpuszcza za sznur, nauczyciele odmawiają (bez kary). Rozmowa z panią Pince daje rejestr wypożyczeń (W5.2) i zdjęcie z 1951 (W9.2) w module 12. Wejście dopiero nocą."
  flagi_ustaw: []
  prowadzi_do: s1.scena.12
```

## Drabinka podpowiedzi

TODO (drzwi W6 i gablota W7).

## Konsekwencje

TODO. Zapisz: `flaga.pracownia-otwarta`, `flaga.ksiega-zabezpieczenia`, `flaga.ksiega-zlapani`, `flaga.pozyczona-chwila-poznana`, `flaga.gablota-sposob`, `flaga.dziennik-u-graczy`, `flaga.dziennik-miejsce`, `flaga.wymark-slad`, `flaga.filch-zlapal`; kto oddał godzinę; ślady dla pani Pince rano.

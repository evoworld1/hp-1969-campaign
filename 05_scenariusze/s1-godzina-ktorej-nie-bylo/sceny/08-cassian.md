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

TODO (narrator-scen): tekst 1a (postacie znajdują Cassiana), tekst 1b (Cassian przychodzi sam, zegar kradzieży 3), tekst 1c (Cassian przychodzi po zegarek), tekst 2 (zdanie na pauzę 3).

## Dla MG

**Kiedy w fikcji:** zwykle wtorek 23 września, wieczór; wcześniej, jeśli postacie skonfrontowały Cassiana zaraz po Obronie (04).

**Wejście** (co najmniej jedno): `flaga.sygnal-cassiana-nazwany`, `flaga.slad-ukaszen`, `flaga.rejestr-godzin`, `flaga.wieza-zbadana`, zegar kradzieży = 3 (Cassian przychodzi sam) albo zegarek u graczy po kradzieży po 04 (Cassian przychodzi po niego).

**Co się naprawdę dzieje.** TODO. Cassian jest chłodny, potem roztrzęsiony. Karta działa tylko z zegarkiem (decyzja MG z 2026-11-20).

### Rytm sceny

**Krok 1. Spotkanie** (ok. 4 min)
- Czytaj: tekst 1a, 1b albo 1c („TODO…”), według drogi wejścia
- Test: `s1.scena.08.test.pierwsze-spojrzenie` (tylko bez `flaga.sygnal-cassiana-nazwany`: spostrzegawczość, czy źródłem szybkości jest zegarek)
- Krótko: miejsce zależy od drogi: przejście Slytherinu, pusta sala Obrony, schody wieży.

**Krok 2. Oskarżenie** (ok. 6 min)
- Dialog: `s1.scena.08.dialog.cassian-oskarzony` — „TODO”
- Dialog: `s1.scena.08.dialog.cassian-sekret` — „TODO” (opcjonalnie; sens: „Ja wiem o waszym, wy o moim”)
- Test: `s1.scena.08.test.czytanie-cassiana` (czy blefuje o sekrecie; jak u Wrena)
- Flagi: `flaga.cassian-zdemaskowany`, `flaga.sekret-poruszony` (gdy sięgnie po sekret)
- Krótko: zegar kradzieży staje, gdy Cassian jest zdemaskowany.

**Krok 3. Wyzwanie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-wyzwanie` — „TODO” (sens: formalny pojedynek; jeśli przegra, powie, skąd ma kartę)
- Krótko: postacie mogą przyjąć, odmówić albo targować się o stawkę (zegarek, karta, milczenie).

**Krok 4. Pojedynek** (ok. 12 min)
- Test: `s1.scena.08.test.pojedynek`
- Flagi: `flaga.zegarek-cassiana` (wygrany pojedynek: zegarek jako stawka albo wytrącony z ręki)
- Krótko: pierwszy pojedynek w grze. Przegrana kosztuje: Cassian zabiera przegranemu godzinę na oczach wszystkich.

**Krok 5. Zegarek innymi drogami** (ok. 5 min, zamiast pojedynku albo po nim)
- Test: `s1.scena.08.test.kradziez-zegarka`
- Dialog: `s1.scena.08.dialog.cassian-targ` — „TODO”
- Dialog: `s1.scena.08.dialog.cassian-litosc` — „TODO”
- Flagi: `flaga.zegarek-cassiana`, `flaga.karta-u-graczy`
- Krótko: kradzież, targ (np. milczenie za zegarek albo kartę), litość (szczera pomoc). Zniszczenie zegarka: zob. rozgałęzienia.

**Krok 6. Co Cassian wie** (ok. 3 min)
- Dialog: `s1.scena.08.dialog.cassian-pracownia` — „TODO” (sens: „Biblioteka. Ostatni rząd.”; księga wisi nad pulpitem, „wszystko się obudziło”; gablota „nie daje się brać”)
- Flagi: `flaga.lokalizacja-pracowni`
- Krótko: W5.1, W10.2 (oparzona dłoń), zapasowa droga do W7.

**Krok 7. Zamknięcie** (ok. 2 min)
- Czytaj: tekst 2 („TODO…”)
- Flagi: `flaga.cassian-los`
- Krótko: zapada wieczór. Punkt pauzy 3. Dalej nocą do 09 albo za dnia do 12, gdy brakuje lokalizacji.

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

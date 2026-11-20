---
id: s1.scena.01
typ: scena
tytul: "Śniadanie w Wielkiej Sali"
status: szkic
sesja: s1
akt: "I"
kolejnosc: 1
czas_min: 20
cel: "Nauczyć gry (pierwsza rozmowa z bohaterem niezależnym i jeden prosty test), zebrać drużynę jako grupę trzecią profesora Wrena i dać 2–3 pierwsze sygnały, że z czasem w zamku jest coś nie tak, zanim padnie stracona godzina."
npc:
  - npc.tobias-quill
  - npc.thaddeus-wren
  - npc.maisie-lock
  - npc.cassian-vane
  - npc.rosalind-teague
  - npc.argus-filch
  - npc.hollis-crake
  - npc.gruby-mnich
  - npc.ansel-dray
miejsca:
  - miejsce.wielka-sala
  - miejsce.sala-wejsciowa
przedmioty:
  - przedmiot.zegarek-cassiana
handouty: []
flagi_wejscie:
  - flaga.s1-prolog-pokatna
  - flaga.crake-poznany
  - flaga.plotka-o-voldemorcie
flagi_wyjscie:
  - flaga.plotka-o-voldemorcie
  - flaga.plotka-duch-puchona
  - flaga.ansel-odbicie
  - flaga.crake-poznany
  - flaga.crake-dluga-rozmowa
  - flaga.zegarek-cassiana
# Plik sceny s1.scena.02 jeszcze nie istnieje, a walidator wymaga istniejących identyfikatorów.
# Docelowo: nastepne: [s1.scena.02]. Uzupełnić, gdy powstanie plik sceny 02
# (wtedy też pola prowadzi_do w blokach rozgałęzień z dopiskiem „docelowo s1.scena.02”).
nastepne: []
tagi: [s1, nauka-gry, sygnaly-dziwnosci, grupa-wrena, ansel-odbicie, crake, plotka]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.01, pogawędka ruchoma z Crake'iem, grupa Wrena, Kto widzi Ansela, siatka bezpieczeństwa 1)"
  - "04_kampania/stan-kampanii.md, rejestr decyzji do 2026-11-20"
  - "Walker 2e s. 3 (test standardowy i poziomy wyniku)"
aktualizacja: 2026-11-20
---
## Do odczytania

<!-- Dla narratora-scen. Oczekiwane teksty do odczytania na głos, każdy jako osobny akapit z podtytułem:
1. Otwarcie (pełny wariant, bez prologu): poniedziałek 22 września 1969, śniadanie, sklepienie, sowy, gwar szóstego roku po SUM-ach; cień niepokoju po lecie (bez otwartej wojny).
2. Otwarcie skrócone (po prologu): „trzy tygodnie później”, 2–3 zdania, od razu sowia poczta.
3. Wren idzie wzdłuż stołów (krótko, bez dialogu; kwestie napisze dialogista).
4. Krótkie opisy do każdego sygnału dziwności z listy w „Dla MG” (po 2–4 zdania, MG czyta tylko wybrane).
5. Odbicie w szkle zegara: osobny, krótki tekst czytany jednej postaci (najlepiej na osobności albo szeptem).
6. Zamknięcie: dzwon na pierwszą lekcję bije „za późno”, prefekci sprawdzają zegarki.
Bez prozy o straconej godzinie, Klepsydrze ani Marrow: tu tylko nastrój. -->

## Dla MG

**Co się naprawdę dzieje.** Od trzech tygodni Cassian Vane podbiera czas przez zatrzymany zegarek ([[przedmiot.zegarek-cassiana]]). Sygnały przy śniadaniu to skutki tych kradzieży: spóźnione zegary, uczniowie „bez kawałka”, mignięcia Ansela, które ofiary biorą za ducha. Nic z tego nie jest jeszcze zagadką do rozwiązania. Wskazówka W0 („z czasem jest coś nie tak”) to nastrój, nie bramka: stracona godzina w scenie 03 przychodzi niezależnie od tego, co gracze tu zauważą.

**Rytm sceny (pełny wariant, ok. 20 minut).**
1. Otwarcie i sowia poczta (2 min).
2. Rozmowa z [[npc.tobias-quill]]: pierwszy dialog w grze. Gracz mówi w imieniu postaci, MG odpowiada jako Tobias. Tobias jest źródłem plotek i rozmówcą do nauki gry. Dom Tobiasa MG ustala przed sesją: dom postaci z najmniejszą liczbą znajomych albo najbardziej nieśmiałego gracza (decyzja MG z 2026-11-20).
3. **Drużyna się zbiera (stałe):** [[npc.thaddeus-wren]] idzie wzdłuż stołów i zaczepia postacie po kolei, każdą przy jej stole domu: grupa trzecia ma być dziesięć minut przed lekcją pod salą Obrony, a grupa pana Vane'a już się chwaliła. Postacie wymieniają spojrzenia przez salę albo siadają razem na końcu jednego stołu, jeśli gracze tego chcą. Zdanie „wojna nie pyta o dom” zna cały rok; stół Slytherinu prycha.
4. Jeden prosty test przy stole (sekcja „Testy”). Test uczy rzutu; porażka niczego nie zamyka.
5. 2–3 sygnały dziwności z listy poniżej (MG wybiera przed sesją).
6. Plotka o Voldemorcie szeptem od stołu Slytherinu (stałe, ustawia `flaga.plotka-o-voldemorcie`).
7. Wyjście: spóźniony dzwon na Zaklęcia.

**Wariant skrócony (ok. 10 minut), gdy grany był prolog** (`flaga.s1-prolog-pokatna`). Prolog przejął naukę gry, więc tutaj nie ma testu przy stole ani długiej rozmowy z Tobiasem. Zostaje: sowia poczta, Wren zbiera grupę trzecią (to jest stałe w obu wariantach), **jeden** sygnał dziwności (rekomendacja: odbicie w szkle zegara, bo z niego korzysta scena 05) i jedno zdanie plotki o „Czarnym Panu”, jeśli postacie nie usłyszały jej już w prologu. Crake nie stoi przy zegarze, jeśli postacie poznały go na Pokątnej (`flaga.crake-poznany`).

### Sygnały dziwności (MG wybiera 2–3; w wariancie skróconym 1)

Żaden sygnał nie zmienia fabuły i żaden nie jest obowiązkowy. Każdy to jedna z dróg do W0 (tabela trzech dróg w pliku pomocniczym `graf-scen.md`).

| Nr | Sygnał | Gdzie | Kto | Ustawia flagę | Na co działa później |
|---|---|---|---|---|---|
| S1 | Wielki zegar spóźnia się o cztery minuty; dzwon na pierwszą lekcję bije „za późno”, prefekci sprawdzają własne zegarki. Jeśli prologu nie było, przy zegarze stoi Crake z drabiną (pogawędka ruchoma) | [[miejsce.sala-wejsciowa]] | wszyscy | opcjonalnie `flaga.crake-poznany` | W3 (dryf ku wieży), W8 (Crake) |
| S2 | Koleżanki dokuczają [[npc.maisie-lock]], że „zasnęła z otwartymi oczami” na sprawdzianie. Maisie: nie spała, „po prostu tego kawałka nie ma” | stół Hufflepuffu | kto siedzi blisko albo nasłuchuje | brak | W4.3 (dopasowanie godzin w scenie 06) |
| S3 | Plotka o „duchu Puchona”: pierwszoroczniacy widzieli na schodach chłopca w żółtym krawacie, który rozpłynął się, gdy go zawołali; [[npc.gruby-mnich]] urażony, że to nie o nim | dowolny stół, Tobias | wszyscy | `flaga.plotka-duch-puchona` | W2.5, sceny 05 i 06 (rozpoznanie plotki) |
| S4 | [[npc.cassian-vane]] przy stole Slytherinu zerka na zegarek kieszonkowy, którego wskazówki stoją | stół Slytherinu | postać z dobrym widokiem albo z udanym testem | brak | W4 (pierwsze skojarzenie z Cassianem) |
| S5 | **Odbicie w szkle zegara** (osobny blok niżej) | Sala Wejściowa albo zegar ścienny nad stołem nauczycieli | jedna postać | `flaga.ansel-odbicie` | scena 05 (rozpoznanie chłopca) |

### Odbicie Ansela w szkle zegara (decyzja MG z 2026-11-20)

- **Kto:** jedna postać. Najlepiej ta, która nie wygrała testu przy stole, żeby każdy gracz miał „coś swojego”.
- **Gdzie:** szkło wielkiego zegara w Sali Wejściowej (przy wyjściu ze śniadania) albo szybka zegara ściennego nad stołem nauczycieli.
- **Co:** w szkle, tuż za ramieniem postaci, chłopiec w żółtym krawacie. Postać się odwraca: nikogo. W szkle też już go nie ma.
- **Twarda zasada:** przed straconą godziną (scena 03) Ansel **nigdy** nie pojawia się na żywo, tylko jako odbicie w szkle zegara (zegary są kanałami Klepsydry). Nie mówi, nie reaguje, nie da się go zatrzymać. Nie ma testu: odbicie widzi się albo nie, decyduje MG.
- **Nie liczy się** do znacznika kontaktu z Anselem (stopień 0, zob. `graf-scen.md`, „Kontakt każdej postaci”); `flaga.ansel-kontakt` nie rośnie.
- **Teaser:** gracz, który spotkał Ansela w escape roomie przed kampanią, może go tu rozpoznać. Ansel nie potwierdza niczego (nie ma z kim rozmawiać); rozpoznanie wraca w scenie 05.

### Pogawędka z Crake'iem (opcjonalna, ruchoma)

[[npc.hollis-crake]] pojawia się w Sesji 1 **raz**, w pierwszym pasującym miejscu: prolog 11, ta scena albo scena 07. Tutaj stoi na drabinie przy wielkim zegarze w Sali Wejściowej tylko wtedy, gdy postacie go jeszcze nie poznały (brak `flaga.crake-poznany`). Pogawędka trwa 2–3 minuty. Zwykły sukces testu daje miłego starszego pana pachnącego olejem i zdanie, że „wieża ostatnio wymaga więcej uwagi”. **Tylko bardzo wysoki wynik** daje dłuższą rozmowę: zdjęcie dziewczyny w kopercie zegarka i chwila o córce, która „pomagała w sklepie” (`flaga.crake-dluga-rozmowa`). Crake niczego nie zdradza o Klepsydrze ani o „kliencie z Londynu”. Jeśli gracze go zignorują, nic nie ginie: wraca w scenie 07.

### Linie i zasłony

Plotka o „Czarnym Panu” i „panu Notcie” to jedyny moment polityki w tej scenie. Jeśli przy stole ustalono zasłonę na tematy czystości krwi, plotka zostaje jednym zdaniem bez szczegółów.

## Obecni

<!-- Dla tworcy-npc: przy każdej osobie jedno-dwa zdania „czego chce w tej scenie” i jeden sygnał zachowania. Minimum:
Tobias Quill (rozmówca, plotki), prof. Wren (zbiera grupę trzecią), Maisie Lock (S2), Cassian Vane (S4, rywal, lider grupy), Rosalind Teague (szept o „panu Notcie” od stołu Slytherinu), Filch (nowy woźny, przegania kogoś z sali), Hollis Crake (tylko bez prologu), Gruby Mnich (urażony plotką, kolor), Ansel (wyłącznie odbicie w szkle, bez głosu). -->

## Dialogi

<!-- Dla dialogisty. Oczekiwane bloki `dialog` (identyfikatory propozycje):
- s1.scena.01.dialog.quill-powitanie: pierwszy dialog nauczający; warianty od flaga.s1-prolog-pokatna (krótszy).
- s1.scena.01.dialog.quill-plotki: duch Puchona i „bajki” o Czarnym Panu; wariant od flaga.plotka-o-voldemorcie (z prologu: „słyszałeś już, co?”).
- s1.scena.01.dialog.wren-grupa-trzecia: zaczepka przy każdym stole (jedna kwestia na postać).
- s1.scena.01.dialog.maisie-kawalek: tylko gdy MG wybrał sygnał S2.
- s1.scena.01.dialog.crake-drabina: wersja zwykła i wersja dla sukcesu imponującego; wyklucza się z flaga.crake-poznany.
- s1.scena.01.dialog.filch-przegania: jedna kwestia, kolor.
Ansel w tej scenie nie mówi. -->

## Testy

```yaml
test:
  id: s1.scena.01.test.przy-stole
  opis: "Pierwszy test w grze (tylko pełny wariant, bez prologu). Postać rozgląda się po sali albo nasłuchuje przy stole: co jest dziś nie tak? Uczy rzutu; porażka niczego nie zamyka. TODO mechanik: potwierdzić zapis rzutu (z grafu: Wits + Observation), ustalić niski próg, czy rzuca każdy osobno, czy jedna postać, i czy test jest Quick Test."
  kto: kazdy
  rzut: "1D10 + Wits + Observation"
  trudnosc: "DO-USTALENIA"
  modyfikatory:
    - warunek: "Postać z teaserową zdolnością „Oko, które dostrzega ukryte” używa jej tutaj (raz, bez rzutu, wynik sukces; zob. zasada.nagrody-z-teaserow). TODO mechanik: czy zalecać zostawienie Oka na później."
      wartosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "MG wskazuje postaci jeden z wybranych sygnałów dziwności (S1, S2 albo S4), zanim zauważy go reszta."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Postać niczego szczególnego nie zauważa. Nic się nie zamyka: o duchu Puchona i tak gada cały stół, a ta postać jest dobrą kandydatką do odbicia w szkle zegara."
      flagi_ustaw: []
```

```yaml
test:
  id: s1.scena.01.test.crake-pogawedka
  opis: "Pogawędka z Crake'iem przy drabinie (tylko bez flaga.crake-poznany). Postać przygląda się zegarmistrzowi podczas rozmowy. TODO mechanik: próg i dokładny poziom wyniku dla dłuższej rozmowy (propozycja z grafu: sukces imponujący, czyli co najmniej dwa razy trudność, Walker 2e s. 3); ten sam blok posłuży w scenach 11 i 07."
  kto: jeden
  rzut: "1D10 + Wits + Observation"
  trudnosc: "DO-USTALENIA"
  modyfikatory: []
  wyniki:
    - wynik: porazka
      efekt: "Kilka uprzejmych zdań o pogodzie i schodach. Crake jest poznany, nic więcej."
      flagi_ustaw: [flaga.crake-poznany]
    - wynik: sukces
      efekt: "Miły starszy pan, pachnie olejem: „wieża ostatnio wymaga więcej uwagi”."
      flagi_ustaw: [flaga.crake-poznany]
    - wynik: sukces-imponujacy
      efekt: "Jak sukces, a do tego postać zauważa zdjęcie dziewczyny w kopercie zegarka; Crake mówi chwilę dłużej o córce, która „pomagała w sklepie”. Niczego nie zdradza o Klepsydrze."
      flagi_ustaw: [flaga.crake-poznany, flaga.crake-dluga-rozmowa]
```

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.01.rozgalezienie.wariant-pelny
  rodzaj: glowne
  warunek: "Sesja zaczyna się od śniadania (prologu na Pokątnej nie grano)."
  wymaga_flag: []
  wyklucza_flagi: [flaga.s1-prolog-pokatna]
  efekt: "Pełna scena, ok. 20 minut: rozmowa nauczająca z Tobiasem, Wren zbiera grupę trzecią, test przy stole, 2–3 sygnały dziwności, szept o Czarnym Panu. Crake może stać przy zegarze. Wyjście: spóźniony dzwon na Zaklęcia (docelowo s1.scena.02)."
  flagi_ustaw: [flaga.plotka-o-voldemorcie]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.01.rozgalezienie.wariant-skrocony
  rodzaj: glowne
  warunek: "Przed sceną grano prolog na Pokątnej."
  wymaga_flag: [flaga.s1-prolog-pokatna]
  wyklucza_flagi: []
  efekt: "Scena skrócona do ok. 10 minut: sowia poczta, Wren zbiera grupę trzecią, jeden sygnał dziwności (rekomendacja: odbicie w szkle zegara), jedno zdanie plotki. Bez testu przy stole i bez długiej rozmowy z Tobiasem; bez Crake'a przy zegarze, jeśli poznano go w prologu. Wyjście: spóźniony dzwon na Zaklęcia (docelowo s1.scena.02)."
  flagi_ustaw: [flaga.plotka-o-voldemorcie]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.01.rozgalezienie.odbicie-ansela
  rodzaj: poboczne
  warunek: "MG wybrał sygnał S5: jedna postać przechodzi obok wielkiego zegara albo patrzy w szybkę zegara nad stołem nauczycieli."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Postać widzi w szkle za swoim ramieniem chłopca w żółtym krawacie; za plecami i w szkle nikogo. Bez testu, bez rozmowy, bez wzrostu kontaktu z Anselem. W scenie 05 ta postać rozpoznaje chłopca."
  flagi_ustaw: [flaga.ansel-odbicie]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.01.rozgalezienie.duch-puchona
  rodzaj: poboczne
  warunek: "MG wybrał sygnał S3 albo postacie pytają Tobiasa o nowinki."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Plotka o „duchu Puchona” trafia do postaci; Gruby Mnich przelatuje obrażony."
  flagi_ustaw: [flaga.plotka-duch-puchona]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.01.rozgalezienie.crake-przy-zegarze
  rodzaj: poboczne
  warunek: "Postacie zatrzymują się przy wielkim zegarze w Sali Wejściowej, a Crake stoi tam z drabiną (tylko bez wcześniejszego spotkania)."
  wymaga_flag: []
  wyklucza_flagi: [flaga.crake-poznany]
  efekt: "Pogawędka 2–3 minuty i test s1.scena.01.test.crake-pogawedka. Jeśli postacie przejdą obok, Crake wraca w scenie 07 (schodzi z wieży)."
  flagi_ustaw: [flaga.crake-poznany]
  prowadzi_do: brak
```

```yaml
rozgalezienie:
  id: s1.scena.01.rozgalezienie.kradziez-zegarka
  rodzaj: poboczne
  warunek: "Gracze, zaintrygowani zatrzymanym zegarkiem Cassiana (S4), próbują mu go zabrać przy śniadaniu albo donoszą nauczycielowi, który go konfiskuje."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Siatka bezpieczeństwa 1 z graf-scen.md. Godzina i tak ginie w scenie 03, bo Cassian nakręcił kradzież rano, a wyciek płynie do zegarka, gdziekolwiek ten jest. flaga.zegarek-cassiana = u-graczy (kradzież) albo skonfiskowany (donos). Cassian na Obronie jest zwyczajny i maca pustą kieszonkę; przychodzi po zegarek wieczorem albo nazajutrz (wejście do sceny 08). TODO mechanik: test kradzieży (np. kieszonkostwo kontra spostrzegawczość Cassiana). Cena porażki: Cassian zauważa próbę i od rana jest czujnym przeciwnikiem; scena biegnie dalej."
  flagi_ustaw: [flaga.zegarek-cassiana]
  prowadzi_do: brak
```

## Gdy gracze zboczą

<!-- Dla planisty-awaryjnego (po symulatorze graczy). Oczekiwane bloki `rozgalezienie` z `rodzaj: awaryjne`, np.:
- postacie nie idą na śniadanie (śpią, sowiarnia, biblioteka): Wren łapie je na korytarzu, sygnał dziwności przychodzi gdzie indziej (zegar, Maisie na schodach);
- gracze chcą od razu iść za Cassianem albo go zaczepić: krótka, chłodna wymiana, bez konfrontacji (scena 08 wymaga flag ze śledztwa);
- gracze chcą zgłosić dziwny zegar nauczycielowi: Flitwick albo Filch zbywa („wieża się boczy”), droga do W3;
- gracze chcą usiąść razem mimo różnych domów: dozwolone, prefekt robi uwagę, bez kary;
- spóźniony gracz: dołącza w scenie 02 albo 03 (siatka bezpieczeństwa 2).
Każdy blok prowadzi docelowo do s1.scena.02 (na razie `prowadzi_do: brak` z dopiskiem w efekcie). -->

## Drabinka podpowiedzi

```yaml
podpowiedzi:
  id: s1.scena.01.podpowiedzi
  szturchniecie: "Dzwon na pierwszą lekcję bije, a kilku prefektów jednocześnie patrzy na swoje zegarki i marszczy brwi."
  wieksza: "Tobias (albo inny uczeń przy stole) mówi wprost: „Wielki zegar znowu się spóźnia. I znowu ktoś widział tego ducha Puchona”."
  bezposrednia: "MG mówi poza fikcją: dziś w zamku coś jest nie tak z czasem; nie trzeba tego teraz rozwiązywać, wystarczy zapamiętać. Scena 03 i tak to pokaże."
```

## Konsekwencje

Po scenie MG zapisuje (w notatkach sesji, potem w `04_kampania/stan-kampanii.md`):
- `flaga.plotka-o-voldemorcie`: zawsze `true` po tej scenie albo po prologu.
- `flaga.plotka-duch-puchona`: `true`, jeśli padł sygnał S3.
- `flaga.ansel-odbicie`: `true` i **która postać** widziała odbicie (scena 05 tego potrzebuje).
- `flaga.crake-poznany` i ewentualnie `flaga.crake-dluga-rozmowa`; jeśli Crake'a nie poznano, zostaje do sceny 07.
- `flaga.zegarek-cassiana`: zmienia się z `u-cassiana` tylko przy siatce bezpieczeństwa 1.
- Które sygnały dziwności MG już wykorzystał (żeby nie powtarzać ich w scenie 02) i czy postacie usiadły razem.
- Dom przypisany Tobiasowi Quillowi.

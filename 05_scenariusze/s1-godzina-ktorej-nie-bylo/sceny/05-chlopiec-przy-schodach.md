---
id: s1.scena.05
typ: scena
tytul: "Chłopiec przy schodach"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 5
czas_min: 25
cel: "Pierwsza rozmowa każdej postaci z Anselem: chłopiec, z którym mówić mogą tylko one. Budowa Więzi, dowody, że Ansel nie należy do teraźniejszości (W2), imię Marrow i wczesna droga do W7."
npc:
  - npc.ansel-dray
  - npc.maisie-lock
miejsca:
  - miejsce.schody-przy-kuchni
  - miejsce.pokoj-wspolny-hufflepuffu
przedmioty: []
handouty: []
flagi_wejscie:
  - flaga.godzina-stracona
  - flaga.ansel-odbicie
  - flaga.plotka-duch-puchona
  - flaga.tempus-opanowane
flagi_wyjscie:
  - flaga.ansel-spotkany
  - flaga.ansel-kontakt
  - flaga.ansel-poza-spisem
  - flaga.marrow-imie-znane
  - flaga.dumbledore-powiadomiony
  - flaga.sekret-poruszony
nastepne:
  - s1.scena.06
  - s1.scena.12
tagi: [s1, ansel, wiez, rozmowa, punkt-pauzy]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.05, Kontakt z Anselem, siatka bezpieczeństwa 3, W2, W7.3, punkt pauzy 2)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (wieczór przy schodach), tekst 2 (rozpoznanie z odbicia), tekst 3 (ręka przez beczkę), tekst 4 (Maisie mija i mruga), tekst 5 (zdanie na pauzę 2).

## Dla MG

**Kiedy w fikcji:** poniedziałek 22 września, wieczór.

**Co się naprawdę dzieje.** TODO. Ansel jest „utkany” z godziny drużyny (kotwica, prawda dla MG). Rozmawiać z nim mogą wszystkie postacie, które straciły godzinę, i tylko one.

**Powód, żeby tu przyjść** (założenie robocze architekta): obiad przepadł razem z godziną, więc postacie są głodne i schodzą do kuchni; schody przy kuchni leżą po drodze. Postać z Hufflepuffu i tak tędy wraca do pokoju wspólnego.

### Rytm sceny

**Krok 1. Wieczór przy schodach** (ok. 3 min)
- Czytaj: tekst 1 („TODO…”)
- Krótko: ciche schody, zapach z kuchni, chłopiec w żółtym krawacie siedzi na stopniu.

**Krok 2. „Która godzina?”** (ok. 5 min)
- Dialog: `s1.scena.05.dialog.ansel-ktora-godzina` — „TODO” (sens: pani profesor Marrow kazała czekać przy schodach)
- Czytaj: tekst 2 („TODO…”), tylko gdy `flaga.ansel-odbicie`
- Dialog: `s1.scena.05.dialog.ansel-w-zegarze` — „TODO” (sens: „Widziałem pana/panią w zegarze. Wszyscy w zegarach są tacy daleko”)
- Flagi: `flaga.ansel-spotkany`, `flaga.ansel-kontakt` (+1 za każdą postać, która rozmawia z nim pierwszy raz)
- Krótko: teaser: gracz z escape roomu może go rozpoznać; Ansel ma wrażenie, że ich zna („Może. Ja dużo czekam, to dużo widzę”).

**Krok 3. Rozmowa i Więź** (ok. 8 min)
- Dialog: `s1.scena.05.dialog.ansel-rozmowa` — „TODO”
- Dialog: `s1.scena.05.dialog.ansel-szafka` — „TODO” (tylko gdy ktoś pyta o panią profesor; W7.3: szafka „najpierw chce dostać”)
- Dialog: `s1.scena.05.dialog.ansel-okruch-sekretu` — „TODO” (opcjonalnie, okruch wspólnego sekretu z 4. roku)
- Flagi: `flaga.marrow-imie-znane`, `flaga.sekret-poruszony` (gdy padnie okruch sekretu)
- Krótko: życzliwość (jedzenie, słuchanie, imię) buduje Więź; nieuprzejmość płoszy go na resztę wieczoru.

**Krok 4. Coś się nie zgadza** (ok. 4 min)
- Czytaj: tekst 3 („TODO…”), tekst 4 („TODO…”)
- Test: `s1.scena.05.test.tempus-przy-anselu` (tylko gdy ktoś rzuca Tempus)
- Dialog: `s1.scena.05.dialog.maisie-zdawalo-sie` — „TODO” (sens: „Zdawało mi się…”)
- Flagi: `flaga.ansel-poza-spisem` (gdy postacie złożą dowody: cyfry się nie formują, ręka przechodzi przez beczkę, inni go mijają)
- Krótko: W2.1, W2.3, W2.5.

**Krok 5. Pożegnanie** (ok. 3 min)
- Dialog: `s1.scena.05.dialog.ansel-pozegnanie` — „TODO” (sens: „Przyjdziecie jutro? Ja tu będę. Zawsze tu jestem.”)
- Czytaj: tekst 5 („TODO…”)
- Krótko: Ansel znika, gdy ktoś nadchodzi, albo zostaje przy schodach. Punkt pauzy 2.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.05.test.tempus-przy-anselu` (czy w ogóle potrzebny rzut; cyfry i tak się nie formują). Więź z Anselem (kandydat na tracker) rośnie za życzliwość, nie za rzut.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.05.rozgalezienie.zyczliwosc
  rodzaj: glowne
  warunek: "Postacie rozmawiają z Anselem życzliwie (jedzenie, słuchanie, imię, którego może się trzymać)."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Każda rozmawiająca postać liczy się do kontaktu. Więź rośnie (kandydat: tracker.wiez-ansel). Ansel może wspomnieć panią profesor Marrow i jej szafkę."
  flagi_ustaw: [flaga.ansel-spotkany, flaga.ansel-kontakt, flaga.marrow-imie-znane]
  prowadzi_do: s1.scena.06
```

```yaml
rozgalezienie:
  id: s1.scena.05.rozgalezienie.nieuprzejmosc
  rodzaj: glowne
  warunek: "Postać jest wobec Ansela nieuprzejma, straszy go albo próbuje go złapać."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Ansel płoszy się na resztę wieczoru. Postać, która z nim nie porozmawiała, dostaje spotkanie wyrównujące w scenie 12 (przed sceną 09)."
  flagi_ustaw: [flaga.ansel-spotkany]
  prowadzi_do: s1.scena.12
```

```yaml
rozgalezienie:
  id: s1.scena.05.rozgalezienie.do-doroslego
  rodzaj: glowne
  warunek: "Postacie od razu prowadzą Ansela do nauczyciela albo do Dumbledore'a (siatka 3)."
  wymaga_flag: [flaga.ansel-spotkany]
  wyklucza_flagi: []
  efekt: "Dorosły go nie widzi. Dumbledore (wrócił z Londynu przed wieczorem) słucha uprzejmie, patrzy obok i prosi o obserwację. Sprout nie znajduje go w rejestrze Hufflepuffu. Spotkanie rozgrywa się w module 12."
  flagi_ustaw: [flaga.dumbledore-powiadomiony, flaga.ansel-poza-spisem]
  prowadzi_do: s1.scena.12
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.05.rozgalezienie.awaryjne-nie-przychodza
  rodzaj: awaryjne
  warunek: "Postacie nie idą wieczorem w okolice kuchni."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Ansel idzie za tykaniem ich czasu: czeka przy drzwiach pokoju wspólnego, siedzi na schodach do dormitorium albo przy ławce w bibliotece. Scena idzie w innym miejscu, bez zmian w treści."
  flagi_ustaw: []
  prowadzi_do: s1.scena.06
```

```yaml
rozgalezienie:
  id: s1.scena.05.rozgalezienie.awaryjne-po-konfrontacji
  rodzaj: awaryjne
  warunek: "Scena 08 rozegrała się już w poniedziałek (konfrontacja po lekcji Obrony)."
  wymaga_flag: [flaga.cassian-zdemaskowany]
  wyklucza_flagi: []
  efekt: "Ansel czeka mimo wszystko. Jeśli zegarek zniszczono, Ansel przez chwilę migocze w trakcie rozmowy. Po scenie 05 dalej zgodnie z wiedzą graczy: do 09 nocą albo do 12."
  flagi_ustaw: []
  prowadzi_do: s1.scena.12
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: znacznik kontaktu z Anselem dla każdej postaci (brak, mignięcie, rozmowa), Więź (kandydat), `flaga.ansel-kontakt`, `flaga.marrow-imie-znane`, `flaga.sekret-poruszony`, `flaga.dumbledore-powiadomiony`.

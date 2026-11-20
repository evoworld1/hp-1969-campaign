---
id: s1.scena.03
typ: scena
tytul: "Stracona godzina"
status: szkic
sesja: s1
akt: "I"
kolejnosc: 3
czas_min: 15
cel: "Cała drużyna naraz traci godzinę w przerwie obiadowej. Każda postać dostaje osobistą zadrę, świadek wskazuje Ślizgona z zegarkiem, a jedna postać widzi pierwsze mignięcie Ansela."
npc:
  - npc.ansel-dray
  - npc.cassian-vane
miejsca:
  - miejsce.korytarz-straconej-godziny
przedmioty:
  - przedmiot.zegarek-cassiana
handouty: []
flagi_wejscie:
  - flaga.tempus-opanowane
  - flaga.ansel-odbicie
flagi_wyjscie:
  - flaga.godzina-stracona
  - flaga.s1-zegar-kradziezy
nastepne:
  - s1.scena.04
  - s1.scena.12
tagi: [s1, stracona-godzina, zadry, ansel-migniecie, punkt-pauzy]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.03, siatki bezpieczeństwa 2 i 7, W1, W4.2, punkt pauzy 1)"
  - "04_kampania/miejsca/korytarz-straconej-godziny.md (świadek: portret pani Hask albo Irytek)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): tekst 1 (droga z obiadem na wynos), tekst 2 (złote światło, mrugnięcie), tekst 3 (dzwon bije od razu), tekst 4 (zadry, po jednej na postać, MG przygotowuje przed sesją), tekst 5 (mignięcie chłopca na schodach), tekst 6 (zdanie na pauzę 1).

## Dla MG

**Kiedy w fikcji:** poniedziałek 22 września, przerwa obiadowa między Zaklęciami a Obroną.

**Co się naprawdę dzieje.** TODO. Cassian zabiera drużynie godzinę w całości, naraz, blisko schodów Ansela; ta godzina staje się kotwicą chłopca (prawda dla MG, nikt jej tu nie mówi). Brak testu na uniknięcie: strata jest stała.

### Rytm sceny

**Krok 1. Bocznym korytarzem** (ok. 3 min)
- Czytaj: tekst 1 („TODO…”)
- Krótko: grupa trzecia idzie razem pod salę Obrony z jedzeniem z kuchni albo z obiadu na wynos. MG pyta, co kto niesie i o czym rozmawiają.

**Krok 2. Mrugnięcie** (ok. 1 min)
- Czytaj: tekst 2 („TODO…”)
- Krótko: złote światło w oknie, mrugnięcie. Dla postaci nie mija chwila. Bez testu.

**Krok 3. Dzwon od razu** (ok. 2 min)
- Czytaj: tekst 3 („TODO…”)
- Flagi: `flaga.godzina-stracona`, `flaga.s1-zegar-kradziezy` = 0 (start zegara)
- Krótko: dzwon na Obronę bije natychmiast; jedzenie zimne, słońce w innym miejscu. Tempus (jeśli opanowane) pokazuje równo godzinę różnicy wobec własnego zegarka (W1.1).

**Krok 4. Świadek** (ok. 3 min)
- Dialog: `s1.scena.03.dialog.swiadek-portret` — „TODO” (sens: „Staliście jak posągi, a jakiś Ślizgon z zegarkiem przeszedł obok i gwizdał”)
- Dialog: `s1.scena.03.dialog.swiadek-irytek` — „TODO” (wariant, gdy MG woli Irytka)
- Krótko: W1.2 i W4.2. Świadek nie zna nazwiska Ślizgona.

**Krok 5. Zadry** (ok. 4 min)
- Czytaj: tekst 4 („TODO…”), osobno dla każdej postaci
- Krótko: list sprzed miesiąca, skończony esej, atrament na dłoniach, wspomnienie spotkania, na którym postać „była”. Jedna zadra może dotyczyć wspólnego sekretu z 4. roku (rzecz, która powinna leżeć w kufrze). Bez flagi.

**Krok 6. Mignięcie** (ok. 2 min)
- Czytaj: tekst 5 („TODO…”), tylko dla postaci, która się obejrzy
- Krótko: chłopiec w szacie Hufflepuffu na schodach znika. Pierwszy kontakt (stopień 1). Potem biegiem na Obronę; tekst 6 jako zdanie na pauzę 1.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): brak obowiązkowych testów. Do decyzji mechanika: czy Tempus po stracie działa bez rzutu u postaci z `flaga.tempus-opanowane`.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.03.rozgalezienie.strata
  rodzaj: glowne
  warunek: "Zawsze: drużyna idzie razem pod salę Obrony w przerwie obiadowej."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Cała drużyna traci godzinę naraz. Startuje zegar kradzieży (0). Od tej chwili postacie mogą widzieć Ansela i rozmawiać z nim. Punkt pauzy 1."
  flagi_ustaw: [flaga.godzina-stracona, flaga.s1-zegar-kradziezy]
  prowadzi_do: s1.scena.04
```

```yaml
rozgalezienie:
  id: s1.scena.03.rozgalezienie.do-nauczyciela
  rodzaj: glowne
  warunek: "Postacie zamiast na Obronę idą do skrzydła szpitalnego, do Flitwicka albo do opiekuna domu."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Dorosły nie widzi niczego poza zmęczeniem; Flitwick: „Już trzecie zgłoszenie zgubionej godziny w tym tygodniu” (W1 dla NPC). Obrona i tak się odbywa: Wren przychodzi po nich osobiście albo pokaz Cassiana dociera relacją kolegi (siatka 7)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.04
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.03.rozgalezienie.awaryjne-oddzielona-postac
  rodzaj: awaryjne
  warunek: "Postać odłączyła się od grupy przed przerwą (została w sali, poszła do sowiarni, łazienki) albo gracz się spóźnił (siatka 2)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Traci godzinę w tej samej minucie co reszta, poza kadrem. Dostaje jedną zadrę i spotkanie wyrównujące z Anselem w scenie 12, zanim dołączy."
  flagi_ustaw: [flaga.godzina-stracona]
  prowadzi_do: s1.scena.04
```

```yaml
rozgalezienie:
  id: s1.scena.03.rozgalezienie.awaryjne-pogon
  rodzaj: awaryjne
  warunek: "Postacie od razu szukają Ślizgona z zegarkiem, zamiast iść na lekcję."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Korytarz jest pusty, Cassian już siedzi w sali Obrony. Postacie wpadają na lekcję jeszcze później (większa cena spóźnienia), ale widzą go od progu."
  flagi_ustaw: []
  prowadzi_do: s1.scena.04
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz: `flaga.godzina-stracona`, `flaga.s1-zegar-kradziezy` = 0, która postać widziała mignięcie, zadry postaci.

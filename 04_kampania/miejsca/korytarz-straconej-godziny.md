---
id: miejsce.korytarz-straconej-godziny
typ: miejsce
tytul: "Boczny korytarz z oknem (korytarz straconej godziny)"
status: szkic
lokalizacja: "Hogwart, skrzydło lekcyjne, boczny korytarz między salą Zaklęć a salą Obrony przed Czarną Magią; na końcu wąskie schody w dół, schodzące aż do podziemi przy kuchni"
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.03 (stracona godzina), s1.scena.06 (pomiar), s1.scena.12
sceny: [s1.scena.03]
tylko_mg: true
tagi: [s1, hogwart, stracona-godzina, portret, irytek, ansel-migniecie, mapa-dryfu]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 03, wskazówki W1 i W4)"
  - "Rowling, Kamień Filozoficzny, rozdz. 7 (Irytek jako postać); opis własnymi słowami"
aktualizacja: 2026-11-20
---
## Do odczytania

Boczny korytarz jest pusty i cichy; tędy chodzi się na skróty, kiedy nikt nie chce stać w tłoku na głównych schodach. Przez jedno wysokie okno wpada pas popołudniowego słońca, gęsty od kurzu, i kładzie się na posadzce jak złoty dywan. Na ścianie naprzeciw okna drzemie w portrecie starsza dama z robótką na kolanach. Daleko, za szybą, widać tarczę Wieży Zegarowej. Pachnie nagrzanym kamieniem i pieczonym kurczakiem, który ktoś niesie w serwetce.

## Dla MG

**Rola w Sesji 1.** Miejsce straconej godziny (scena 03). Drużyna idzie tędy razem, wcześniej pod salę Obrony, bo Wren kazał grupie trzeciej rozstawić stanowisko.
- **Chwila straty:** złote światło z okna gęstnieje, mrugnięcie, dzwon na Obronę bije od razu. Słońce stoi w innym miejscu, cień ramy okna przesunął się o szerokość dłoni. Obiad przepadł.
- **Świadek (W1, W4):** portret pani Ermentrudy Hask [nasze] albo Irytek (kanon jako postać; karty NPC nie ma). Kwestia do wplecenia: „Staliście jak posągi, kochaneczki. A jakiś Ślizgon z zegarkiem przeszedł obok i gwizdał”.
- **Zadry:** każda postać znajduje osobisty ślad (list w kieszeni, skończony esej, atrament na dłoniach). Jedna może dotyczyć wspólnego sekretu z 4. roku.
- **Mignięcie:** na końcu korytarza, na wąskich schodach w dół, jedna postać (ta, która się obejrzy) widzi chłopca w szacie Hufflepuffu, który znika. Pierwszy kontakt.

**Krótka wstawka do odczytania (chwila po stracie):**
> Mrugacie. Dzwon na Obronę bije tuż nad waszymi głowami, choć dopiero co wyszliście z Zaklęć. Złoty pas światła leży teraz na ścianie, nie na podłodze. Kurczak w serwetce jest zimny jak kamień.

**Stan zmienny.**
- Przed `flaga.godzina-stracona`: zwykły, pusty korytarz. Nic się nie dzieje, nawet gdy gracze chodzą tędy rano.
- Po `flaga.godzina-stracona`: portret pani Hask budzi się, gdy postacie wracają, i pyta, czy „już im przeszło”. Jeśli `flaga.zegarek-cassiana` = `u-graczy` przed sceną 03, świadek nie widzi Ślizgona, tylko słyszy tykanie „z waszej kieszeni” (siatka bezpieczeństwa 1).
- Gdy `flaga.s1-zegar-kradziezy` rośnie: Cassian wraca tu podbierać, a Tempus przy oknie drży coraz mocniej.

**Odczyt do mapy dryfu (propozycja robocza dla sceny 06):** drżący odczyt, cyfry Tempus skaczą o kilka minut w obie strony (ślad podbierania, część wzoru prowadzącego do lochów, `flaga.slad-ukaszen`). Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.** Za dnia brak zagrożeń; to miejsce niepokoju, nie niebezpieczeństwa. Wnęka okienna mieści dwie osoby za ciężką zasłoną. Schody na końcu prowadzą w dół, w stronę zejścia do podziemi.

### Do weryfikacji
- Imię i portret pani Ermentrudy Hask to nasz wymysł (szczegół wykonawczy, do zmiany według uznania MG).
- Irytek jest postacią kanoniczną, ale nie ma karty NPC; jeśli ma mówić więcej niż jedno zdanie, potrzebna krótka karta (propozycja dla tworcy-npc).

## Ukryte

Cassian ustawił się na schodach na końcu korytarza i wziął godzinę wszystkim naraz, na górnym końcu tych samych wąskich schodów, które schodzą aż do podziemi i łączą się ze schodami przy kuchni, gdzie czeka Ansel. Ta wspólnie zabrana godzina stała się kotwicą Ansela (prawda dla MG, w Sesji 1 nikt tego nie mówi). Dlatego mignięcie przychodzi właśnie tu.

## Testy

Terminy Walkera w testach: Wits (bystrość), Persuasion (perswazja).

```yaml
test:
  id: miejsce.korytarz-straconej-godziny.test.swiadek
  opis: "Postacie wypytują portret (albo Irytka), co widział podczas straconej godziny."
  kto: jeden
  rzut: "1D10 + Wits + Persuasion"
  trudnosc: 9
  modyfikatory:
    - warunek: "Postać ma stan Drained po straconej godzinie (s. 35); 9 + 3 = 12, tak jak w scenie 03"
      wartosc: "+3 do trudności"
    - warunek: "Uprzejmość albo pochlebstwo dobrane do świadka (portret: dama dla pani Hask; Irytek: podziw dla jego sprytu)"
      wartosc: "+2 do rzutu"
    - warunek: "Każda inna postać, która pomaga w rozmowie (Working Together, s. 4)"
      wartosc: "+1 do rzutu"
  wyniki:
    - wynik: sukces
      efekt: "Świadek opisuje Ślizgona z zegarkiem: wysoki, ciemne włosy, łańcuszek u kamizelki, gwizdał krótką melodię (W4)."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Świadek mówi tylko: „Staliście jak posągi” i obraża się, że nikt go nie słucha. Godzina zniknęła (W1) i tak."
      flagi_ustaw: []
```

---
id: s1.scena.12
typ: scena
tytul: "Wędrówki po zamku (moduł spotkań)"
status: szkic
sesja: s1
akt: "II"
kolejnosc: 12
czas_min: 30
cel: "Zestaw krótkich spotkań (po ok. 5 minut) do wpięcia, gdy gracze chodzą po zamku. Każde spotkanie daje jedną drogę do wskazówki z tabeli trzech dróg, moment z Anselem albo czysty kolor. Tu działają siatki bezpieczeństwa 3 i 5 oraz spotkania wyrównujące."
npc:
  - npc.ansel-dray
  - npc.gruby-mnich
  - npc.nauczyciel-astronomii
  - npc.argus-filch
  - npc.irma-pince
  - npc.filius-flitwick
  - npc.pomona-sprout
  - npc.maisie-lock
  - npc.gideon-pratt
  - npc.tobias-quill
  - npc.cassian-vane
  - npc.rosalind-teague
  - npc.albus-dumbledore
  - npc.minerva-mcgonagall
miejsca:
  - miejsce.schody-przy-kuchni
  - miejsce.pokoj-wspolny-hufflepuffu
  - miejsce.biblioteka
  - miejsce.lochy-przejscie-slytherinu
  - miejsce.sala-zaklec
  - miejsce.sala-wejsciowa
  - miejsce.wielka-sala
  - miejsce.gabinet-dyrektora
przedmioty:
  - przedmiot.zdjecie-1951
  - przedmiot.zegarek-cassiana
  - przedmiot.karta-pozyczajacego
handouty:
  - s1.handout.karta-pozyczajacego
flagi_wejscie:
  - flaga.godzina-stracona
  - flaga.ansel-kontakt
  - flaga.s1-zegar-kradziezy
  - flaga.zegarek-cassiana
  - flaga.cassian-zdemaskowany
  - flaga.marrow-imie-znane
  - flaga.filch-zlapal
flagi_wyjscie:
  - flaga.tempus-opanowane
  - flaga.plotka-duch-puchona
  - flaga.ansel-spotkany
  - flaga.ansel-kontakt
  - flaga.ansel-poza-spisem
  - flaga.marrow-imie-znane
  - flaga.dumbledore-powiadomiony
  - flaga.sekret-poruszony
  - flaga.przyplyw-ku-wiezy
  - flaga.slad-ukaszen
  - flaga.rejestr-godzin
  - flaga.lokalizacja-pracowni
  - flaga.wymark-slad
  - flaga.zegarek-cassiana
  - flaga.karta-u-graczy
  - flaga.s1-zegar-kradziezy
nastepne:
  - s1.scena.04
  - s1.scena.05
  - s1.scena.06
  - s1.scena.07
  - s1.scena.08
  - s1.scena.09
tagi: [s1, modul, spotkania, elastyczna, ansel, siatki-bezpieczenstwa]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (s1.scena.12, Kontakt z Anselem, siatki bezpieczeństwa 1, 3, 5, zegar kradzieży, tabela trzech dróg)"
aktualizacja: 2026-11-20
---
## Do odczytania

TODO (narrator-scen): po jednym krótkim tekście na spotkanie (A–O), numerowane literą spotkania.

## Dla MG

**Kiedy w fikcji:** dowolnie po straconej godzinie (scena 03); przed nią tylko jako kolor.

**Jak wpiąć.** Jedno spotkanie = jedna wskazówka albo jeden moment z Anselem albo czysty kolor, ok. 5 minut. Po spotkaniu powrót do sceny, z której gracze wyszli, albo do następnej w grafie. Zegar kradzieży rośnie o 1 za każde pół dnia w fikcji, więc długie wędrówki nie zatrzymują świata. Prośba do nauczyciela o wejście do Działu Ksiąg Zakazanych zawsze kończy się odmową (bez kary).

**Konwencja w module.** Kroki to tutaj spotkania (A–O), w dowolnej kolejności; każde ma ten sam układ co krok sceny.

### Rytm sceny

**Spotkanie A. Kuchnia i skrzaty** (ok. 5 min)
- Czytaj: tekst A („TODO…”)
- Dialog: `s1.scena.12.dialog.skrzat-kuchnia` — „TODO”
- Krótko: kolor i jedzenie, które można zanieść Anselowi (Więź). Skrzaty widzą tylko, że ktoś „bierze dwie porcje”.

**Spotkanie B. Gruby Mnich** (ok. 5 min)
- Dialog: `s1.scena.12.dialog.gruby-mnich-imie` — „TODO” (sens: „Znałem chłopca o tym imieniu… nie, to niemożliwe”)
- Flagi: `flaga.ansel-poza-spisem`
- Krótko: W2.4, tylko gdy postacie znają imię Ansela. Bez imienia: obrażony na plotkę o „duchu Puchona”.

**Spotkanie C. Portret przy schodach** (ok. 5 min)
- Dialog: `s1.scena.12.dialog.portret-schody` — „TODO”
- Flagi: `flaga.marrow-imie-znane`
- Krótko: założenie robocze: portret Ansela nie widzi, ale pamięta, że w 1951 „mały Puchon czekał tu na panią profesor od gwiazd, a potem przestał przychodzić”.

**Spotkanie D. Nauczyciel astronomii** (ok. 5 min)
- Dialog: `s1.scena.12.dialog.astronomia-marrow` — „TODO” (sens: „Marrow odeszła wiele lat temu”; „pani od klepsydr”)
- Flagi: `flaga.marrow-imie-znane`
- Krótko: rezerwa dla W2; wspomnienie Marrow z lunetą.

**Spotkanie E. Profesor Sprout i rejestr Hufflepuffu** (ok. 5 min)
- Dialog: `s1.scena.12.dialog.sprout-rejestr` — „TODO”
- Flagi: `flaga.ansel-poza-spisem`
- Krótko: W2.2. Pokój wspólny Hufflepuffu: ręka Ansela przechodzi przez beczkę (W2.3).

**Spotkanie F. Dormitorium i pokój wspólny Slytherinu** (ok. 5 min, siatka 5; kradzież dopiero po scenie 04)
- Test: `s1.scena.12.test.kradziez-dormitorium`
- Flagi: `flaga.zegarek-cassiana`, `flaga.karta-u-graczy`
- Krótko: postać ze Slytherinu widzi, jak Cassian nocą nakręca stojący zegarek i mamrocze liczby (W4.7). Zegarek pod poduszką, karta w podszewce kufra; porażka budzi Cassiana. Na karcie dopisek o oddawaniu (W7.2), handout `s1.handout.karta-pozyczajacego`.

**Spotkanie G. Sowiarnia** (ok. 5 min)
- Krótko: kolor: list do domu, sowa, która nie chce lecieć, gdy obok stoi Ansel (założenie robocze: zwierzęta go wyczuwają, nie widzą).

**Spotkanie H. Filch na obchodzie** (ok. 5 min)
- Dialog: `s1.scena.12.dialog.filch-obchod` — „TODO” (sens: „Zegarmistrz był w czwartek. Znowu”; wieża się boczy)
- Krótko: W8.3 i W3.3. Opcjonalny kolor: wpis w księdze szlabanów sprzed dwóch lat z nazwiskami postaci (tylko gdy sekret z 4. roku wiązał się z przyłapaniem).

**Spotkanie I. Pierwszoroczniak na schodach** (ok. 5 min, przy zegarze kradzieży 2)
- Dialog: `s1.scena.12.dialog.pierwszoroczniak` — „TODO”
- Flagi: `flaga.rejestr-godzin`
- Krótko: zemdlał, „nie wie, kiedy zasnął”, widział „ducha” mignięciem. W4.3.

**Spotkanie J. Maisie Lock i Gideon Pratt** (ok. 5 min)
- Dialog: `s1.scena.12.dialog.maisie-pratt` — „TODO”
- Flagi: `flaga.rejestr-godzin`, `flaga.plotka-duch-puchona`
- Krótko: W4.3: ich stracone godziny pasują do sukcesów Cassiana.

**Spotkanie K. Pani Pince i rejestr wypożyczeń** (ok. 5 min, tylko za dnia)
- Dialog: `s1.scena.12.dialog.pince-rejestr` — „TODO” (sens: „Vane trzy razy prosił o ten sam tom o zegarmistrzostwie”)
- Flagi: `flaga.lokalizacja-pracowni`, `flaga.wymark-slad`
- Krótko: W5.2 (rozmowa, nie zgoda na wejście). Zdjęcie z 1951 w gablocie przy bibliotece (W9.2).

**Spotkanie L. Korepetycje z Tempus u Flitwicka** (ok. 5 min)
- Test: `s1.scena.12.test.tempus-korepetycje`
- Dialog: `s1.scena.12.dialog.flitwick-korepetycje` — „TODO”
- Flagi: `flaga.tempus-opanowane`
- Krótko: druga szansa na Tempus. O Dział Ksiąg Zakazanych pytany odmawia.

**Spotkanie M. Gabinet dyrektora** (ok. 5 min, siatka 3; od wieczoru 22 września, gdy Dumbledore wrócił z Londynu)
- Dialog: `s1.scena.12.dialog.dumbledore-krzeslo` — „TODO”
- Dialog: `s1.scena.12.dialog.mcgonagall-odmowa` — „TODO” (gdy postacie trafiają najpierw do niej)
- Flagi: `flaga.dumbledore-powiadomiony`
- Krótko: Dumbledore proponuje Anselowi krzesło, patrzy pół metra obok, prosi o obserwację, nic nie obiecuje. Zgody na Dział Ksiąg Zakazanych nie daje.

**Spotkanie N. Spotkanie wyrównujące z Anselem** (ok. 5 min, gdy `flaga.ansel-kontakt` jest mniejsza niż liczba graczy)
- Dialog: `s1.scena.12.dialog.ansel-wyrownujace` — „TODO”
- Flagi: `flaga.ansel-spotkany`, `flaga.ansel-kontakt`, `flaga.sekret-poruszony` (opcjonalnie)
- Krótko: Ansel czeka na brakującą postać sam: na jej łóżku o świcie, przy jej ławce, za tykaniem jej zaklęcia. Obowiązkowe przed sceną 09.

**Spotkanie O. Cassian przychodzi po zegarek** (ok. 5 min, gdy zegarek jest u graczy po kradzieży)
- Dialog: `s1.scena.12.dialog.cassian-po-zegarek` — „TODO”
- Krótko: tego samego wieczoru albo nazajutrz Cassian szuka postaci. Wejście do 08.

## Obecni

TODO (tworca-npc).

## Dialogi

TODO (dialogista): bloki o identyfikatorach z „Rytmu sceny”.

## Testy

TODO (mechanik): `s1.scena.12.test.kradziez-dormitorium` (liczby w karcie zegarka), `s1.scena.12.test.tempus-korepetycje`.

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.12.rozgalezienie.kradziez-po-pokazie
  rodzaj: glowne
  warunek: "Po scenie 04 postać kradnie zegarek (dormitorium, pokój wspólny, korytarz)."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Zegarek u graczy, zegar kradzieży staje. Cassian przychodzi po niego jeszcze tego wieczoru albo nazajutrz (spotkanie O, wejście do 08). Karta zostaje u niego, chyba że postać zabrała też ją."
  flagi_ustaw: [flaga.zegarek-cassiana]
  prowadzi_do: s1.scena.08
```

```yaml
rozgalezienie:
  id: s1.scena.12.rozgalezienie.droga-do-pracowni
  rodzaj: glowne
  warunek: "Postacie zdobywają lokalizację pracowni bez Cassiana (pani Pince, Ansel z Więzią, śledzenie drżących odczytów do biblioteki)."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "W5 drogami awaryjnymi. Wyprawa nocą do sceny 09."
  flagi_ustaw: [flaga.lokalizacja-pracowni]
  prowadzi_do: s1.scena.09
```

```yaml
rozgalezienie:
  id: s1.scena.12.rozgalezienie.dumbledore
  rodzaj: glowne
  warunek: "Postacie prowadzą Ansela do gabinetu dyrektora (siatka 3)."
  wymaga_flag: [flaga.ansel-spotkany]
  wyklucza_flagi: []
  efekt: "Dumbledore nie widzi Ansela, prosi o obserwację. Ansel: „On mnie nie widzi. Pani profesor też w końcu przestała”. Bez kary; Sesja 2 zaczyna się od tego, że Dumbledore „zapamiętał”."
  flagi_ustaw: [flaga.dumbledore-powiadomiony]
  prowadzi_do: s1.scena.06
```

```yaml
rozgalezienie:
  id: s1.scena.12.rozgalezienie.wyrownanie-kontaktu
  rodzaj: glowne
  warunek: "Przed sceną 09 liczba postaci po rozmowie z Anselem jest mniejsza niż liczba graczy."
  wymaga_flag: [flaga.godzina-stracona]
  wyklucza_flagi: []
  efekt: "Spotkanie N dla każdej brakującej postaci. Potem scena 09."
  flagi_ustaw: [flaga.ansel-spotkany, flaga.ansel-kontakt]
  prowadzi_do: s1.scena.09
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.12.rozgalezienie.awaryjne-przed-strata
  rodzaj: awaryjne
  warunek: "Gracze chcą wędrować przed straconą godziną (przed sceną 03)."
  wymaga_flag: []
  wyklucza_flagi: [flaga.godzina-stracona]
  efekt: "Tylko kolor (kuchnia, sowiarnia, Filch). Ansel się nie pojawia, wskazówek śledztwa nie ma. Przerwa obiadowa przychodzi i drużyna traci godzinę razem (scena 03)."
  flagi_ustaw: []
  prowadzi_do: s1.scena.04
```

```yaml
rozgalezienie:
  id: s1.scena.12.rozgalezienie.awaryjne-za-dlugo
  rodzaj: awaryjne
  warunek: "Wędrówki trwają dłużej niż 30 minut przy stole."
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: "Świat działa sam: zegar kradzieży rośnie i przy 3 Cassian przychodzi do postaci (scena 08), przy 4 idzie do pracowni pierwszy (siatka 6, scena 09)."
  flagi_ustaw: [flaga.s1-zegar-kradziezy]
  prowadzi_do: s1.scena.08
```

## Drabinka podpowiedzi

TODO.

## Konsekwencje

TODO. Zapisz flagi ustawione w spotkaniach, znaczniki kontaktu z Anselem i wartość zegara kradzieży.

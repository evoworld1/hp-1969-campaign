---
id: miejsce.biblioteka
typ: miejsce
tytul: "Biblioteka i Dział Ksiąg Zakazanych"
status: szkic
lokalizacja: "Hogwart, biblioteka: czytelnia, regały, odgrodzony Dział Ksiąg Zakazanych w głębi; na korytarzu przed wejściem gablota z pamiątkami szkoły"
pewnosc: niepewne
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.02 (Flitwick wspomina o Dziale Ksiąg Zakazanych), s1.scena.09 (trzynaste drzwi), s1.scena.10 (trzynasty raz), s1.scena.12 (pani Pince, rejestr wypożyczeń, gablota ze zdjęciem)
sceny: []
tylko_mg: true
tagi: [s1, hogwart, biblioteka, dzial-ksiag-zakazanych, pince, filch, wymark-slad, kulminacja]
zrodla:
  - "Rowling, Kamień Filozoficzny, rozdz. 12 (Dział Ksiąg Zakazanych odgrodzony liną, nocne wejście); Komnata Tajemnic, rozdz. 10 (w kanonie istnieje podpisana zgoda nauczyciela na książkę z działu; w kampanii nikt jej nie daje, decyzja MG 2026-11-20); opis własnymi słowami"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 09, wskazówki W5, W6, W9)"
  - "03_postacie/npc/irma-pince.md"
aktualizacja: 2026-11-20
---
## Do odczytania

Biblioteka nocą jest wysoka i ciemna, a światło różdżki kończy się na trzeciej półce. Pachnie kurzem, starym klejem introligatorskim i woskiem. Każdy szelest kartki brzmi jak rozdarcie. W głębi, za grubą, wyświechtaną liną, zaczyna się Dział Ksiąg Zakazanych: grzbiety ciemniejsze, regały ciaśniej, a powietrze chłodniejsze o jeden oddech. Gdzieś za drzwiami czytelni szurają kroki i kołysze się światło latarni, zatrzymuje się i rusza znowu.

## Dla MG

**Rola w Sesji 1.** Kulminacja (scena 09) zaczyna się tutaj. Jedyne wejście: **nocą, bez zgody** (decyzja MG 2026-11-20; test skradania, presję daje obchód [[npc.argus-filch]]). Nikt z nauczycieli nie podpisze przepustki, a [[npc.irma-pince]] nie wpuszcza za sznur; nocą nie patroluje (śpi w swoich pokojach), rano zauważa ślady wyprawy. Złapanie w drodze: siatka bezpieczeństwa 9 w grafie.
- **Rejestr wypożyczeń (W5):** pani Pince na szczerą prośbę pokazuje, że „chłopiec od Slughorna”, Vane, trzy razy prosił o ten sam tom o zegarmistrzostwie. Za dnia, w scenie 12; to rozmowa, nie zgoda na wejście.
- **Ostatni rząd Działu Ksiąg Zakazanych (W5, W6):** na końcu regału stoi mosiężny przycisk do książek w kształcie klepsydry. Ściana za regałem wygląda zwyczajnie. Drzwi otwiera „godzina, której nie ma” (szczegóły i test w pliku sceny 09).
- **Gablota na korytarzu przed biblioteką (W9):** puchary, medale, kilka oprawionych zdjęć. Na jednym z 1951 roku profesor Marrow stoi przy teleskopie, a obok niej wysoki prefekt; bez podpisu nazwisk ([[przedmiot.zdjecie-1951]]). Ustawia `flaga.wymark-slad`, jeśli postacie zwrócą uwagę na prefekta.
- [[npc.ansel-dray]] (jeśli idzie z postaciami): „Pani profesor nosiła książki do najdalszego regału” (W5 przy Więzi 2). Przy ścianie ostatniego rzędu przechodzi przez nią i wraca: „Schody tykają trzynaście razy” (W6).

**Krótka wstawka do odczytania (ostatni rząd):**
> Ostatni regał stoi tak blisko ściany, że trzeba iść bokiem. Na jego końcu, zamiast książki, mosiężny przycisk w kształcie klepsydry, zimny w dotyku i bez śladu kurzu. Za regałem jest goła ściana z kamienia. Gdy przyłożycie do niej ucho, słyszycie coś bardzo cichego, jak zegar w sąsiednim pokoju.

**Stan zmienny.**
- Jeśli `flaga.lokalizacja-pracowni`: postacie idą prosto do ostatniego rzędu. Bez niej trafiają tu drogą awaryjną (rejestr, drżące odczyty, Ansel).
- Gdy `flaga.s1-zegar-kradziezy` = 4: Cassian jest tu przed postaciami, nocą; przycisk-klepsydra jest ciepły, a drzwi już raz otwarte (siatka bezpieczeństwa 6).
- Po `flaga.trzynasta-wybila`: bicie zwabia Filcha. Złapane postacie z notatnikiem Marrow tracą go (`flaga.filch-zlapal`, `flaga.dziennik-miejsce` = `skonfiskowany`).

**Odczyt do mapy dryfu (propozycja robocza):** czytelnia −2 minuty, gładko; w ostatnim rzędzie działu odczyt lekko drży (Cassian tędy chodził). Tempus przy samej ścianie pokazuje tarczę z trzynastoma kreskami (W6, scena 09). Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.**
- Za dnia: pani Pince. Hałas, okruchy albo zniszczona książka kończą się wyproszeniem i zgłoszeniem opiekunowi domu. Rano po nocnej wyprawie zauważa ślady (plotka, podejrzliwość, bez kary).
- Nocą: Filch z latarnią, zawsze tą samą trasą (do wykorzystania przy skradaniu); kandydat na Zegar Północy.
- Księgi w dziale bywają niebezpieczne same w sobie (krzyczą, gryzą, parzą). Jedna taka książka to dobry koszt porażki przy skradaniu; nic poważnego.
- Kryjówki: wnęki między regałami, stół pod oknem z długim obrusem, sam Dział (lampy tam nie sięgają).

### Do weryfikacji
- Pani Pince jako bibliotekarka w 1969: niepewne (zob. [[kanon.kadra-hogwartu-1969]]).
- Gablota ze zdjęciami przed biblioteką to nasz element (graf). Kanon zna Izbę Pamięci z pucharami, ale to inne miejsce; nie mieszać.
- Godzina zamknięcia czytelni o dziewiątej to szczegół wykonawczy (wspomina ją McGonagall); do Działu Ksiąg Zakazanych i tak nie daje wstępu.

## Ukryte

Za ścianą ostatniego rzędu są schody w dół, do [[miejsce.sala-zatrzymanych-godzin]]. Pani Pince przy ostatnim rzędzie zawsze przyspiesza kroku i nie wie dlaczego (karta NPC). Robocze wyjaśnienie [nasze, do potwierdzenia przy scenie 09]: Marrow zostawiła tu lekki urok odwracający uwagę. Przycisk-klepsydra jest zawsze czysty, choć nikt go nie odkurza.

## Testy

Terminy Walkera w testach: Wits (bystrość), Speed (szybkość), Observation (spostrzegawczość), Stealth (skradanie się).

```yaml
test:
  id: miejsce.biblioteka.test.skradanie-noca
  opis: "Nocą, bez zgody, postacie przemykają przez czytelnię do Działu Ksiąg Zakazanych. Porażka nie blokuje wejścia."
  kto: grupa
  rzut: "1D10 + Speed + Stealth"
  trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.argus-filch)"
  wyniki:
    - wynik: wygrana
      efekt: "Filch przechodzi korytarzem za drzwiami biblioteki i nie zagląda do środka."
      flagi_ustaw: []
    - wynik: przegrana
      efekt: "Ktoś potrąca książkę, która zaczyna krzyczeć. Postacie zdążą się schować, ale obchód Filcha przyspiesza (kandydat: Zegar Północy, decyzja mechaniczna czeka)."
      flagi_ustaw: []
```

```yaml
test:
  id: miejsce.biblioteka.test.zdjecie-w-gablocie
  opis: "Postać przygląda się zdjęciom z 1951 roku w gablocie przed biblioteką."
  kto: jeden
  rzut: "1D10 + Wits + Observation"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Na zdjęciu z dopiskiem „Obserwatorium, jesień 1951” (bez nazwisk) kobieta przy teleskopie i wysoki prefekt z odznaką, który trzyma jej lunetę. Kobieta raz po raz zerka w bok, poza kadr, jakby ktoś tam stał."
      flagi_ustaw: [flaga.wymark-slad]
    - wynik: porazka
      efekt: "Zwykłe stare zdjęcia. Jeśli postacie wiedzą już o Marrow (flaga.marrow-imie-znane) i szukają jej celowo, MG pokazuje zdjęcie bez rzutu; kim jest prefekt, nikt nie wie."
      flagi_ustaw: []
```

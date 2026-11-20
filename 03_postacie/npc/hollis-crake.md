---
id: npc.hollis-crake
typ: npc
tytul: "Hollis Crake"
status: szkic
imie: "Hollis Crake"
rola: "Zegarmistrz z Pokątnej, który luzuje pieczęć Klepsydry; w Sesji 1 tylko życzliwa pogawędka"
dom: Hufflepuff
rocznik_1969: "dorosły (ok. 60 lat)"
kanon: false
pewnosc: nasze
# Pogawędka ruchoma: s1.scena.11 (witryna) albo s1.scena.01 (drabina) albo s1.scena.07 (schodzi z wieży); epilog w s1.scena.10
# Pliki scen 07, 10 i 11 jeszcze nie istnieją; dopisać je tu, gdy powstaną.
sceny: [s1.scena.01]
tylko_mg: true
tagi: [s1, s2, crake, pokatna, zegarmistrz, lustro-graczy]
zrodla:
  - "04_kampania/zarys-kampanii.md"
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-19"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (pogawędka ruchoma)"
aktualizacja: 2026-11-20
---
## W skrócie

Starszy zegarmistrz z ulicy Pokątnej, właściciel zakładu „Crake i Córka”. Od lat konserwuje zegary Hogwartu, w tym mechanizm Wieży Zegarowej. Jego córka zginęła w niewyjaśnionym incydencie uznanym za wypadek, w czasie zamieszek przy marszach charłaków (decyzja MG z 2026-11-19). Od tygodni na zlecenie Silasa Wymarka rozluźnia pieczęć Klepsydry w wieży, bo wierzy, że cofnie śmierć córki. Życzliwy, smutny i umie kłamać. Lustro graczy: stoi przed tym samym wyborem co oni, tylko po drugiej stronie.

**Rola w Sesji 1.** Jedna przelotna pogawędka w pierwszym pasującym miejscu: witryna sklepu w prologu (11), drabina przy wielkim zegarze w Sali Wejściowej (01) albo schodzi z wieży (07). Dłuższa rozmowa tylko przy bardzo wysokim wyniku testu spostrzegawczości (`flaga.crake-dluga-rozmowa`). W epilogu sceny 10, w Londynie, podnosi głowę znad warsztatu, gdy wybija trzynasty raz.

**Dalej.** Sesja 2: wszystko wskazuje na niego, ale przekonanie graczy o jego niewinności może go ocalić. Sesja 3: zrozpaczony Crake w komnacie Klepsydry.

## Wygląd i sposób bycia

- Niski, krępy, siwe wąsy przycięte nierówno, na szyi lupa zegarmistrzowska na rzemyku. Palce czarne od oleju; wyciera je w szmatkę, której nigdy nie odkłada.
- Pachnie olejem do mechanizmów i miętą. Nosi kamizelkę z kieszonką, z której wystaje dewizka; w kopercie zegarka ma małe zdjęcie córki.
- Mówi do zegarów jak do zwierząt: „no już, już, kochanie”.
- **Do gry przy stole:** ciepły, trochę chrapliwy głos, wolne tempo, uśmiech w każdym zdaniu; przy słowie „córka” jedno zdanie urywa się w pół.

## Głos

- **Tempo:** wolne, z westchnieniami. Lubi zagadywać młodych.
- **Ulubione zwroty:** „Zegar to nie maszyna, to charakter”, „Wieża ostatnio wymaga więcej uwagi”, „Pomagała mi w sklepie” (o córce, w czasie przeszłym, bez wyjaśnień).
- **Czego nigdy nie powie:** nic o Klepsydrze, pieczęci ani o „kliencie z Londynu” (w Sesji 1 zakazane przez graf). Nie powie, że córka nie żyje; ucieka w czas przeszły.

Przykładowe kwestie:
- „Spóźnia się o cztery minuty, a ja ją dopiero co regulowałem. Ten zamek ma swoje humory, młoda damo.”
- „Wieża? Wieża ostatnio wymaga więcej uwagi. Starość, wiecie. Jej i moja.”
- (tylko przy dłuższej rozmowie) „To Nora. Pomagała mi w sklepie. Miała lepsze ręce do sprężyn niż ja.”
## Czego chce

- **Cel jawny:** dobrze wykonywać pracę, utrzymać zakład, „żeby szyld był prawdziwy”.
- **Cel ukryty:** cofnąć śmierć córki. Wierzy, że Klepsydra to umożliwi. Nie wie, że jego zleceniodawca jest śmierciożercą, i nie chce się zastanawiać, komu służy.
- **Co robi bez graczy:** przyjeżdża do zamku mniej więcej co tydzień (Filch: „Zegarmistrz był w czwartek. Znowu”), oliwi mechanizm wieży i za każdym razem luzuje pieczęć odrobinę bardziej. Wycieki, które podbiera Cassian, to skutek jego pracy. W Londynie odpowiada przed Wymarkiem.

## Sekret

- Luzuje pieczęć Klepsydry w mechanizmie Wieży Zegarowej. To on jest źródłem wycieków.
- Nie wierzy w oficjalną wersję śmierci córki („wypadek w tłumie”). Ktoś mu powiedział, że Klepsydra może ją odwrócić.
- **Gdy prawda wyjdzie (nie w Sesji 1):** nie ucieka i nie walczy. Siada i pyta graczy, co by zrobili na jego miejscu. To pytanie jest sednem jego postaci.

## Sygnały

- Świeży olej i mosiężna plakietka „Konserwacja: Crake i Córka, ulica Pokątna” na mechanizmie wieży (`flaga.plakietka-crake`).
- Zdjęcie dziewczyny w kopercie zegarka (widoczne tylko przy dłuższej rozmowie).
- Mówi o córce w czasie przeszłym i zmienia temat na zegary.
- Mimo że zegar w Sali Wejściowej się spóźnia, Crake nie jest zdziwiony, tylko zmartwiony.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość | Rozpromienia się, opowiada o zegarach. Zwykły sukces testu spostrzegawczości: „wieża ostatnio wymaga więcej uwagi” (`flaga.crake-poznany`). Bardzo wysoki wynik: zdjęcie córki i kilka zdań o niej (`flaga.crake-dluga-rozmowa`). |
| Groźba | Uprzejmie się wycofuje, „bo pan woźny czeka”. Zapamiętuje te twarze. W Sesji 1 nic więcej. |
| Przekupstwo | Śmieje się życzliwie: „Synku, ja biorę pieniądze za naprawy, nie za plotki”. |
| Kłamstwo | Kłamstwo wyczuwa nie gorzej niż inni, ale nie daje się wciągnąć w temat wieży. |
| Magia | Dorosły czarodziej-rzemieślnik, nie pojedynkowicz. Zaklęcie rzucone na niego w zamku to skandal i szlaban dla postaci. |
| Przemoc | Nie broni się. Przemoc wobec starszego pana na oczach Filcha kończy się dla postaci bardzo źle, a Crake staje się w Sesji 2 nieufny. |
| Ignorowanie | Robi swoje i wraca do Londynu. Plakietka zostaje w wieży. |

## Mechanika

```yaml
statystyki:
  id: npc.hollis-crake.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}
  zdolnosci_specjalne:
    - nazwa: "Ręce zegarmistrza"
      opis: "Wybitny w rzemiośle (kandydat: Crafting ze specjalizacją w zegarach). Potrzebne dopiero w Sesji 2–3."
    - nazwa: "Życzliwe kłamstwo"
      opis: "Ukrywa prawdę bez wysiłku. W Sesji 1 nie da się go przyłapać na kłamstwie testem; w Sesji 2 test przeciwny (np. Wits + Chicanery, czyli bystrość i podstęp, postaci przeciw jego Chicanery). Liczby ustala mechanik."
```

## Do weryfikacji

- Imię córki („Nora”): przyjęte przez MG. Wiek córki (ok. 25 lat) to szczegół wykonawczy.
- Dom Crake'a w szkole (Hufflepuff) to szczegół wykonawczy, nie wpływa na fabułę.
- Mechanik: próg pogawędki i „bardzo wysokiego wyniku” (propozycja grafu: Impressive success, co najmniej dwa razy trudność, Walker 2e s. 3).

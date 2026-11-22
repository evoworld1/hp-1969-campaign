---
id: npc.albus-dumbledore
typ: npc
tytul: "Albus Dumbledore"
status: szkic
imie: "Albus Dumbledore"
rola: "Dyrektor: pojawia się tylko, jeśli gracze do niego pójdą; nie widzi Ansela"
dom: Gryffindor
rocznik_1969: "dyrektor"
kanon: true
pewnosc: kanon
# Docelowo: s1.scena.12 (gabinet dyrektora, siatka bezpieczeństwa 3), rozgałęzienie „dumbledore”
sceny: [s1.scena.05, s1.scena.12]
tylko_mg: true
tagi: [s1, dyrektor, kanon, siatka-bezpieczenstwa]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (dyrektor w 1969: kanon, wniosek; KP rozdz. 20, WA rozdz. 18)"
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-19 (Dumbledore odkłada sprawę, nie widzi Ansela)"
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-20 (nieobecny przy śniadaniu 22 września, odmowa zgody na Dział Ksiąg Zakazanych)"
aktualizacja: 2026-11-20
---
## W skrócie

Dyrektor czuje, że w zamku coś jest nie tak, ale zajmują go większe zagrożenia, więc odkłada sprawę. Magia czasu go nie dotyka, bo chroni go jego wiedza: nigdy nie widział Ansela (decyzja MG z 2026-11-19). Gdy postacie przyprowadzą chłopca do gabinetu, Dumbledore słucha uprzejmie i uważnie, proponuje Anselowi krzesło, ale patrzy o pół metra obok. Mówi, że wierzy, iż oni kogoś widzą, prosi o obserwację, niczego nie obiecuje. Ustawia `flaga.dumbledore-powiadomiony`. O Dział Ksiąg Zakazanych proszony uprzejmie odmawia: regulamin obowiązuje wszystkich, także ciekawych (decyzja MG 2026-11-20). Nie prowadzi graczy za rękę.

**Poniedziałek 22 września 1969, rano: nieobecny** (decyzja MG 2026-11-20). Wyjechał do Londynu. Przy śniadaniu (scena 01) jego krzesło na środku stołu nauczycieli stoi puste; zapytani nauczyciele i uczniowie wiedzą tylko, że „dyrektor wyjechał”. Kto chce iść do dyrektora od razu rano, zastaje zamknięty gabinet i gargulca, który nie reaguje na hasło. Roboczo wraca przed wieczorem, żeby po scenie 05 postacie mogły przyprowadzić do niego Ansela (siatka bezpieczeństwa 3); godzinę powrotu potwierdza MG.

## Wygląd i sposób bycia

Wysoki, długa kasztanowo-siwa broda, okulary-połówki, szaty w niespodziewanym kolorze. Częstuje cukierkami.

## Głos

Łagodny, niespieszny, z humorem, który nagle przechodzi w powagę: „Wierzę, że kogoś widzicie. To nie to samo, co widzieć go samemu, ale to dużo.”

## Czego chce

Chronić szkołę przed tym, co nadciąga z zewnątrz. Bez graczy: zajmuje się sprawami poza zamkiem (wojna, która jeszcze nie ma nazwy; 22 września rano jest w Londynie) i odkłada „boczącą się wieżę” na później.

## Sekret

Pamięta, że w 1951 w zamku zdarzyła się dziwna noc zgubionych godzin, i nigdy nie połączył jej z żadnym uczniem (propozycja wariantu B z [[kanon.przeniesienie-na-1969]], **nie** decyzja MG; w Sesji 1 nie wychodzi na jaw).

## Sygnały

Przy słowie „Marrow” na moment przestaje się uśmiechać. Na puste krzesło patrzy z życzliwością, jakby ktoś na nim siedział.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Przyprowadzają Ansela | Krzesło dla gościa, uważne słuchanie, wzrok obok. Ansel cicho: „On mnie nie widzi, prawda?” |
| Proszą o zgodę na bibliotekę | Uprzejma odmowa: regulamin obowiązuje wszystkich, także ciekawych (decyzja MG 2026-11-20; wejście do Działu Ksiąg Zakazanych tylko nocą, bez zgody). Bez kary, z uważnym spojrzeniem. |
| Szukają go rano 22 września | Nie ma go: wyjazd do Londynu. Gabinet zamknięty, gargulec milczy. |
| Kłamstwo | Widzi je od razu, nie karze; mówi, że poczeka, aż będą gotowi. |

## Mechanika

```yaml
statystyki:
  id: npc.albus-dumbledore.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Walker 2e s. 117-118 (wpis z lat 90.; w 1969 postać jest młodsza o ok. 25 lat, liczb nie zmieniamy). Wartości z podręcznika. W Sesji 1 niepotrzebne do walki; służą do czytania blefu i oceny siły.
    rodzaj: czarodziej
    poziom: "Uniquely powerful"   # s. 102; cechy 47, umiejętności 283
    lineage: Half-blood
    school: "Hogwarts (1892)"
    house: "Gryffindor"
    profession: "Headmaster of Hogwarts"
    cechy:
      Vitality: 5
      Speed: 7
      Wits: 11
      Knowledge: 12
      Focus: 12
    umiejetnosci:
      Alchemy: 7
      Ancient Runes: 8
      Ancient Studies: 7
      Archivist: 8
      Arithmancy: 8
      Astronomy: 7
      "Authority (Mentor)": 10
      "Balance (Bowling)": 4
      Broomstick Flying: 4
      "Charms (Elemental)": 12
      Chicanery: 6
      Concealment: 6
      Crafting: 7
      Dark Arts: 8
      D.A.D.A.: 10
      Divination: 5
      Duelling: 10
      Herbology: 7
      History of Magic: 9
      Law: 7
      Magical Creatures: 6
      Magical Theory: 10
      Muggle Studies: 7
      Music: 5
      Observation: 9
      Occlumency: 10
      Persuasion: 9
      Potions: 8
      "Prestige (Order of the Phoenix)": 10
      "Strategy (Predictive)": 9
      Skirmishing: 4
      Stealth: 9
      Swimming: 3
      Transfiguration: 10
      Transportation: 9
      "Trivia (Bowling)": 9
      Wandlore: 6
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Expecto Patronum: 0
      Expelliarmus: 0
      Protego: 0
      Protego Totalum: 0
      Finite Incantatem: 0
      Legilimens: 0
      Piertotum Locomotor: 0
      Specialis Revelio: 0
      Incendio: 0
      Aguamenti: 0
    patronus: Phoenix
    rozdzka: "Starsza Różdżka (Elder Wand): Magic +7 (wszystkie zaklęcia), Wand Loyalty +7 (Walker 2e s. 118). Różdżka od 1945 w jego rękach (kanon)"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Poza zasięgiem magii czasu"
      opis: "Kradzież godzin go nie dotyka i Ansela nie widzi (decyzja MG). Statystyki w Sesji 1 niepotrzebne."
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 20; Wykrywanie kłamstwa (Wits + Chicanery): 1D10 + 17; Inicjatywa w pojedynku (Speed + Duelling + różdżka): 1D10 + 24; Atak w pojedynku (Wits + Duelling + różdżka): 1D10 + 28; Protego (Wits + Charms + różdżka): 1D10 + 30; Unik (Speed + Wits): 1D10 + 18. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Funkcja dyrektora w 1969: kanon (wniosek). Dom Gryffindor: kanon (tradycyjnie przyjmowany; do potwierdzenia przez strażnika kanonu, jeśli ma znaczenie).
- Nieobecność rano 22 września (wyjazd do Londynu): decyzja MG 2026-11-20. Godzina powrotu nieustalona; roboczo przed wieczorem (siatka bezpieczeństwa 3 po scenie 05).
- „Pamięć o nocy zgubionych godzin w 1951” to tylko propozycja (P13 w [[kanon.przeniesienie-na-1969]]); MG nie podjął decyzji.

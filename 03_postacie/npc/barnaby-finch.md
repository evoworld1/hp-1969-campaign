---
id: npc.barnaby-finch
typ: npc
tytul: "Barnaby Finch"
status: szkic
imie: "Barnaby Finch"
rola: "Uczeń z grupy Cassiana: ćwiczebny przeciwnik w pierwszym teście przeciwnym"
dom: Gryffindor
rocznik_1969: "6 rok"
kanon: false
pewnosc: nasze
# Docelowo: s1.scena.04, s1.scena.12
sceny: [s1.scena.03, s1.scena.04]
tylko_mg: true
tagi: [s1, uczen, grupa-vane-a, test-przeciwny]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 04, lista NPC)"
aktualizacja: 2026-11-20
---
## W skrócie

Szóstoroczny Gryfon w grupie Cassiana u Wrena (grupy są mieszane). Duży, życzliwy, nerwowy przed każdym ruchem. Na lekcji Obrony (04) to drugi ćwiczebny przeciwnik w pierwszym teście przeciwnym: **zerka na drzwi, zanim zrobi ruch**. Podziwia Cassiana bezkrytycznie („Vane jest genialny w tym roku”) i nie widzi niczego dziwnego. Gryfon, który boi się porażki, a Ślizgon w roli lidera: mały wyłom w stereotypach domów.

## Wygląd i sposób bycia

Wysoki, barczysty, jasne kręcone włosy, szata trochę za krótka w rękawach. Przestępuje z nogi na nogę.

## Głos

Szybki, przepraszający, zaczyna od „Ee…”: „Ee… przepraszam, nie chciałem cię trafić. To znaczy chciałem, ale nie tak mocno.”

## Czego chce

Nie zawieść grupy. Bez graczy: ćwiczy z grupą Cassiana i chwali go przed wszystkimi. Gdy zegar kradzieży rośnie, mówi, że „Vane w ogóle nie śpi, a i tak jest najlepszy” (niechcący potwierdza trop W4).

## Sekret

Brak sekretu fabularnego. Boi się, że wyleci z grupy, jeśli przestanie wygrywać.

## Sygnały

Zerka na drzwi przed każdym zaklęciem (nawyk do testu przeciwnego).

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość | Gada chętnie o grupie i o tym, że Cassian „ostatnio się zmienił, na lepsze”. |
| Docinki o przegranej | Czerwieni się, potem się zacina; Cassian staje w jego obronie. |
| Pytanie o Cassiana wprost | Broni go szczerze, nic nie wie. |

## Mechanika

```yaml
statystyki:
  id: npc.barnaby-finch.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Uczeń przeciętny, jak w tabeli sceny 04. Ukrywanie zamiaru: Wits 3 + Chicanery 1 = 4. Protego jeszcze nieopanowane (12), więc w pojedynku nie tarcza.
    rodzaj: czarodziej
    poziom: "Average student"   # s. 102; cechy 16, umiejętności 34
    lineage: Half-blood
    school: "Hogwarts (1963)"
    year: 6
    house: "Gryffindor"
    cechy:
      Vitality: 4
      Speed: 3
      Wits: 3
      Knowledge: 3
      Focus: 3
    umiejetnosci:
      Chicanery: 1
      Duelling: 3
      Charms: 3
      D.A.D.A.: 3
      Observation: 3
      Transfiguration: 3
      Potions: 2
      Herbology: 2
      Magical Theory: 2
      Broomstick Flying: 4
      Balance: 3
      Skirmishing: 2
      Stealth: 1
      Magical Creatures: 2
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Lumos: 0
      Wingardium Leviosa: 0
      Alohomora: 0
      Reparo: 0
      Diffindo: 0
      Flipendo: 0
      Expelliarmus: 0
      Trip Jinx: 0
      Rictustempra: 0
      Protego: 12
    patronus: brak
    rozdzka: "Kasztanowiec (Chestnut), włos jednorożca, 12 cali, giętka; Herbology +1, Magical Creatures +1, Healing Magic +2, Protective Magic +2 (rdzeń z drewnem Chestnut daje +2 zamiast +1, s. 28-29). Propozycja [nasze]"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Zerkanie na drzwi"
      opis: "Ćwiczebny przeciwnik w teście przeciwnym (Opposed Test, s. 4) na lekcji Wrena. Postać, która zauważy i nazwie nawyk, dostaje premię; wielkość ustala mechanik."
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 6; Ukrywanie zamiaru (Wits + Chicanery): 1D10 + 4; Inicjatywa w pojedynku (Speed + Duelling): 1D10 + 6; Atak w pojedynku (Wits + Duelling): 1D10 + 6; Unik (Speed + Wits): 1D10 + 6; Odporność na obrażenia (1D10 + Vitality): 1D10 + 4. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Dom Gryffindor: przyjęty przez MG.

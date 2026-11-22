---
id: npc.gideon-pratt
typ: npc
tytul: "Gideon Pratt"
status: szkic
imie: "Gideon Pratt"
rola: "Ofiara Cassiana: piątoroczny, który stracił godzinę na korytarzu Eliksirów"
dom: Ravenclaw
rocznik_1969: "5 rok"
kanon: false
pewnosc: nasze
# Docelowo: s1.scena.06, s1.scena.12
sceny: [s1.scena.06, s1.scena.12]
tylko_mg: true
tagi: [s1, uczen, ravenclaw, ofiara-cassiana]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (sceny 06, 12, lista NPC)"
aktualizacja: 2026-11-20
---
## W skrócie

Piątoroczny Krukon, przyszły zdający SUM-y, pedant. Stracił godzinę na korytarzu przy lochach Eliksirów i zapisał to, bo zapisuje wszystko. W scenach 06 i 12 to świadek z precyzyjnymi danymi: dzień, godzina, miejsce (pomaga w `flaga.rejestr-godzin` i `flaga.slad-ukaszen`, bo jego strata leży na trasie do przejścia Slytherinu). Widział „ducha Puchona” mignięciem i uważa, że to „zjawisko optyczne”.

## Wygląd i sposób bycia

Chudy, okulary w drucianej oprawce, mankiety poplamione atramentem, kieszonkowy kalendarzyk z ołówkiem.

## Głos

Rzeczowy, trochę wyniosły, z liczbami: „Czternasta dwanaście. Potem piętnasta jedenaście. Pięćdziesiąt dziewięć minut, nie godzina. Proszę być dokładnym.”

## Czego chce

Wyjaśnienia, które da się zapisać. Bez graczy: przygotowuje się do SUM-ów i pisze skargę do profesora Flitwicka o „anomalii”.

## Sekret

Brak sekretu. Boi się, że strata godziny to objaw choroby, i nikomu się do tego nie przyzna.

## Sygnały

Na każde pytanie wyjmuje kalendarzyk, zanim odpowie.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Rzeczowe pytania, dane za dane | Współpracuje, porównuje notatki z pomiarami dryfu postaci. |
| Ogólniki, plotki | Zniecierpliwiony: „Wróćcie z liczbami”. |
| Kpina | Obraża się chłodno; od tej pory odpowiada tylko na piśmie. |

## Mechanika

```yaml
statystyki:
  id: npc.gideon-pratt.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Piątoroczny pedant, świadek z danymi, nie przeciwnik. Poziom Gifted dla roku 5 (SUM-y).
    rodzaj: czarodziej
    poziom: "Gifted student"   # s. 102; cechy 21, umiejętności 57
    lineage: Half-blood
    school: "Hogwarts (1964)"
    year: 5
    house: "Ravenclaw"
    cechy:
      Vitality: 2
      Speed: 3
      Wits: 4
      Knowledge: 7
      Focus: 5
    umiejetnosci:
      Charms: 5
      Magical Theory: 6
      Transfiguration: 5
      Potions: 5
      Arithmancy: 4
      Archivist: 4
      "Observation (Szczegóły)": 5
      "Trivia (Daty)": 5
      D.A.D.A.: 4
      Herbology: 3
      Astronomy: 4
      History of Magic: 4
      Duelling: 1
      Persuasion: 2
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Lumos: 0
      Wingardium Leviosa: 0
      Alohomora: 0
      Reparo: 0
      Specialis Revelio: 0
      Flipendo: 0
      Expelliarmus: 12
      Protego: 12
    patronus: brak
    rozdzka: "Jodła (Fir), włos jednorożca, 11 cali, sprężysta; Transfiguration +1, Healing Magic +2, Protective Magic +1. Propozycja [nasze]"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 9; Unik (Speed + Wits): 1D10 + 7. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Imię Gideon jest blisko kanonicznego Gideona Prewetta (wiek nieznany, zob. [[kanon.uczniowie-1969]]). Ryzyko pomyłki przy stole jest małe, ale MG może zmienić imię (identyfikator zostaje).
- „Pięćdziesiąt dziewięć minut, nie godzina” to kolor; jeśli mechanika straconej godziny wymaga równej godziny, MG zmienia kwestię.

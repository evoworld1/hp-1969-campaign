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
  wartosci: {}
  zdolnosci_specjalne: []
```

## Do weryfikacji

- Imię Gideon jest blisko kanonicznego Gideona Prewetta (wiek nieznany, zob. [[kanon.uczniowie-1969]]). Ryzyko pomyłki przy stole jest małe, ale MG może zmienić imię (identyfikator zostaje).
- „Pięćdziesiąt dziewięć minut, nie godzina” to kolor; jeśli mechanika straconej godziny wymaga równej godziny, MG zmienia kwestię.

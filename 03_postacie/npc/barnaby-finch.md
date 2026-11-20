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
sceny: [s1.scena.03]
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
  wartosci: {}
  zdolnosci_specjalne:
    - nazwa: "Zerkanie na drzwi"
      opis: "Ćwiczebny przeciwnik w teście przeciwnym (Opposed Test, s. 4) na lekcji Wrena. Postać, która zauważy i nazwie nawyk, dostaje premię; wielkość ustala mechanik."
```

## Do weryfikacji

- Dom Gryffindor: przyjęty przez MG.

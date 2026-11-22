---
id: npc.pomona-sprout
typ: npc
tytul: "Prof. Pomona Sprout"
status: szkic
imie: "Pomona Sprout"
rola: "Opiekunka Hufflepuffu: nie znajduje Ansela w rejestrze domu"
dom: Hufflepuff
rocznik_1969: "nauczyciel"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.12 (rejestr Hufflepuffu, wskazówka W2)
sceny: [s1.scena.05, s1.scena.12]
tylko_mg: true
tagi: [s1, nauczyciel, hufflepuff, zielarstwo, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (Zielarstwo i opiekunka Hufflepuffu 1969: niepewne)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (W2)"
aktualizacja: 2026-11-20
---
## W skrócie

Ciepła, praktyczna nauczycielka Zielarstwa i opiekunka Hufflepuffu. Zapytana o Ansela Draya przegląda rejestr domu i nie znajduje nikogo takiego, ani teraz, ani w latach wstecz (wskazówka W2, `flaga.ansel-poza-spisem`). Martwi się, że „jakiś Puchon” się zgubił, i obiecuje sprawdzić jeszcze raz.

## Wygląd i sposób bycia

Krępa, ziemia pod paznokciami, połatany kapelusz, pachnie mokrą glebą.

## Głos

Serdeczny, konkretny: „Kochaneczko, jeśli to mój Puchon, to ja go znajdę. Ale tu go nie ma.”

## Czego chce

Żeby żaden z jej uczniów nie został sam. Bez graczy: pociesza Maisie Lock po sprawdzianie i jest zaniepokojona „zasypianiem” uczniów.

## Sekret

Brak sekretu fabularnego w Sesji 1. Nie pamięta Ansela, jak nikt.

## Sygnały

Przy słowie „duch Puchona” prycha i mówi, że Gruby Mnich jest jedynym duchem jej domu.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejma prośba o rejestr | Sprawdza przy postaciach, palcem po liście; Ansela brak. |
| Upór („on tu jest, przy schodach!”) | Idzie z postaciami do schodów i nikogo nie widzi; zaczyna się martwić o same postacie. |
| Kłamstwo | Łatwo się na nie nabiera, ale do rejestru niczego nie dopisze. |

## Mechanika

```yaml
statystyki:
  id: npc.pomona-sprout.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Walker 2e s. 121 (wpis z lat 90.). Observation 5 dopisane jako propozycja [nasze]. Opiekunka Hufflepuffu. Cechy 30, umiejętności około 100.
    rodzaj: czarodziej
    poziom: "Professional Wizard"   # s. 102; cechy 30, umiejętności 95
    lineage: Half-blood
    school: "Hogwarts (1955)"
    house: "Hufflepuff"
    profession: "Head of Herbology"
    cechy:
      Vitality: 5
      Speed: 5
      Wits: 6
      Knowledge: 7
      Focus: 7
    umiejetnosci:
      Astronomy: 5
      "Authority (Teaching)": 6
      Broomstick Flying: 4
      Charms: 7
      Herbology: 10
      D.A.D.A.: 6
      Dark Arts: 6
      Duelling: 5
      History of Magic: 6
      Muggle Studies: 4
      Persuasion: 4
      Potions: 8
      "Prestige (Hogwarts)": 7
      Tracking: 5
      Transfiguration: 7
      Observation: 5
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Diffindo: 0
      Incendio: 0
      Expecto Patronum: 0
      Riddikulus: 0
      Protego: 0
      Stupefy: 0
      Expelliarmus: 0
      Engorgio: 0
      Reparo: 0
      Lumos: 0
    patronus: NC
    rozdzka: "Kasztanowiec (Chestnut), łodyga dyptamu; Herbology +3, Magical Creatures +1. Propozycja [nasze]"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 11; Wykrywanie kłamstwa (Wits + Chicanery): 1D10 + 6. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Sprout jako nauczycielka i opiekunka Hufflepuffu w 1969: `niepewne` (zob. [[kanon.kadra-hogwartu-1969]]). Według tekstu Wizarding World jej lata nauki nakładały się z latami McGonagall (ok. 1947–1954), co nie obejmuje roku szkolnego 1951/52 (nakładanie tylko o dwa lata); Walker (s. 120) podaje 1955–1962. Rozstrzygnięcie strażnika kanonu: w 1951 Sprout była uczennicą albo świeżą absolwentką, więc jako nauczycielka Zielarstwa w 1951 jest to mało prawdopodobne (`niepewne`); jeśli wątek 1951 potrzebuje „profesora od zielarstwa”, zostaje bez nazwiska (ewentualnie Herbert Beery, też `niepewne`). Rozbieżność Walkera (1955–1962) to jego błąd lub przybliżenie.

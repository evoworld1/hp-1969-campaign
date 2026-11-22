---
id: npc.minerva-mcgonagall
typ: npc
tytul: "Prof. Minerva McGonagall"
status: szkic
imie: "Minerva McGonagall"
rola: "Nauczycielka Transmutacji: pilnuje regulaminu, przechowuje skonfiskowany notatnik; epizod"
dom: Gryffindor
rocznik_1969: "nauczyciel"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.12, rozgałęzienie „skonfiskowany”
sceny: [s1.scena.01, s1.scena.10, s1.scena.12]
tylko_mg: true
tagi: [s1, nauczyciel, transmutacja, gryffindor, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (Transmutacja: kanon, wniosek; zastępczyni i opiekunka: niepewne)"
  - "WW: Professor McGonagall"
aktualizacja: 2026-11-20
---
## W skrócie

Surowa, sprawiedliwa nauczycielka Transmutacji. Przepustki do Działu Ksiąg Zakazanych na pracę domową szóstego roku nie podpisze (decyzja MG 2026-11-20: do działu wchodzi się wyłącznie nocą, bez zgody). Jeśli Filch skonfiskuje notatnik Marrow, trafia on do niej (rozgałęzienie „skonfiskowany”).

## Wygląd i sposób bycia

Wyprostowana, włosy w ciasnym koku, okulary, które zdejmuje, gdy jest naprawdę zła. Jak na nauczycielkę młoda (po trzydziestce).

## Głos

Krótko i precyzyjnie, bez podnoszenia głosu: „Rozsądna prośba dostaje rozsądną odpowiedź. Następna.”

## Czego chce

Porządku, uczciwości i dobrych wyników. Bez graczy: uczy, sprawdza prace, pilnuje regulaminu.

## Sekret

Brak sekretu fabularnego w Sesji 1. W 1951 była uczennicą piątego roku Gryffindoru (kanon (wniosek)); jak nikt, nie pamięta Ansela.

## Sygnały

Kłamstwo poznaje po pierwszym zdaniu i daje kłamcy jeszcze jedną szansę, zanim ukarze.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Rozsądna, uczciwa prośba o Dział Ksiąg Zakazanych | Odmowa bez kary: „Dział Ksiąg Zakazanych nie służy do prac domowych, panie i panowie. Czytelnia jest otwarta do dziewiątej”. |
| Kłamstwo | Odmowa i uważne spojrzenie przez kolejny tydzień (po nocnej wyprawie pierwsza pyta, gdzie postacie były). |
| Prośba o zwrot skonfiskowanego notatnika | Nie odda bez wyjaśnienia; prawda, opowiedziana w całości, może ją przekonać do rozmowy z dyrektorem (Sesja 2). |

## Mechanika

```yaml
statystyki:
  id: npc.minerva-mcgonagall.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Walker 2e s. 120 (wpis z lat 90.; w 1969 młodsza o ok. 25 lat, liczb nie zmieniamy). Zaklęcia ponad listę Notable Spells to propozycja [nasze]. Cechy 40 (Renowned), umiejętności około 130 (zakres Professional): poziom wg cech. Animagus (kot) bez rzutu.
    rodzaj: czarodziej
    poziom: "Renowned Wizard"   # s. 102; cechy 40, umiejętności 124
    lineage: Half-blood
    school: "Hogwarts (1947)"
    house: "Gryffindor"
    profession: "Head of Transfiguration"
    cechy:
      Vitality: 7
      Speed: 9
      Wits: 8
      Knowledge: 7
      Focus: 9
    umiejetnosci:
      Ancient Runes: 9
      "Authority (Discipline)": 7
      Balance: 6
      Broomstick Flying: 9
      Charms: 7
      D.A.D.A.: 8
      Dark Arts: 7
      Duelling: 9
      History of Magic: 7
      Magical Theory: 8
      Observation: 8
      Persuasion: 6
      Potions: 7
      "Prestige (Hogwarts)": 9
      Strategy: 7
      Transfiguration: 10
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Expecto Patronum: 0
      Piertotum Locomotor: 0
      Stupefy: 0
      Protego: 0
      Expelliarmus: 0
      Evanesco: 0
      Incarcerous: 0
      Fera Verto: 0
      Aguamenti: 0
      Impedimenta: 0
    patronus: Cat
    rozdzka: "Jodła (Fir), włókno ze smoczego serca; Transfiguration +1, Fire Magic +2, Offensive Magic +1 (premie z tabeli s. 28-29; rodzaj różdżki wg kanonu, pewność niepewne)"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 16; Wykrywanie kłamstwa (Wits + Chicanery): 1D10 + 8; Inicjatywa w pojedynku (Speed + Duelling): 1D10 + 18; Atak w pojedynku (Wits + Duelling): 1D10 + 17; Unik (Speed + Wits): 1D10 + 17; Protego (Wits + Charms): 1D10 + 15. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Funkcja zastępczyni dyrektora i opiekunki Gryffindoru w 1969: `niepewne` (Walker s. 152 podaje 1956–1997, to interpretacja Walkera). Nauczanie Transmutacji w 1969: kanon (wniosek).
- Urodzona 4 października 1935, szkoła 1947–1954, jesienią 1951 uczennica piątego roku Gryffindoru: kanon (materiał Wizarding World; rok nauki to wniosek). Zob. [[kanon.weryfikacja-s1]]. Zastępczyni „1956–1997” (Walker s. 152) nie jest kanonem.

---
id: npc.irma-pince
typ: npc
tytul: "Irma Pince"
status: szkic
imie: "Irma Pince"
rola: "Bibliotekarka: strażniczka Działu Ksiąg Zakazanych; za dnia rejestr wypożyczeń, rano ślady nocnej wyprawy"
dom: brak
rocznik_1969: "dorosła, bibliotekarka"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.12 (rejestr wypożyczeń), s1.scena.09 (tylko jako poranny skutek wyprawy)
sceny: [s1.scena.09, s1.scena.12]
tylko_mg: true
tagi: [s1, biblioteka, dzial-ksiag-zakazanych, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (bibliotekarka 1969: niepewne)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (sceny 09, 12; W5)"
aktualizacja: 2026-11-20
---
## W skrócie

Surowa bibliotekarka, mięknie tylko wobec szczerej ciekawości, ale nigdy na tyle, by wpuścić ucznia za sznur Działu Ksiąg Zakazanych bez zgody (decyzja MG 2026-11-20: do działu wchodzi się wyłącznie nocą, bez zgody, a zgody nikt nie daje). W scenie 12, za dnia, skarży się na „chłopca od Slughorna”, który trzy razy prosił o ten sam tom o zegarmistrzostwie (W5, droga do pracowni). **Nocą nie patroluje** (decyzja wykonawcza: biblioteka jest zamknięta, ona śpi w swoich pokojach); zagrożeniem nocnej wyprawy jest Filch. Rano po wyprawie zauważa ślady (przestawiony sznur, zgaszona lampa, okruchy) i głośno o nich mówi: plotka i podejrzliwość, bez kary.

## Wygląd i sposób bycia

Chuda, sztywna, okulary na łańcuszku, palce gładzą grzbiety książek jak sierść kota.

## Głos

Ostry szept, nigdy głośniej: „Książki się nie przetrzymuje. Książki się szanuje.”

## Czego chce

Żeby książki wracały całe. Bez graczy: prowadzi rejestr wypożyczeń i notuje, kto co bierze z działu.

## Sekret

Brak sekretu fabularnego. Lubi uczniów, którzy naprawdę czytają, i nigdy tego nie przyzna.

## Sygnały

Krzywi się na każdy okruch i każdy zagięty róg. Przy ostatnim rzędzie działu zawsze przyspiesza kroku, nie wie dlaczego.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Szczera ciekawość | Wgląd w rejestr wypożyczeń (W5.2). O Dział Ksiąg Zakazanych: „Z podpisem nauczyciela. A podpisu na takie tematy nie dostaniecie”. |
| Kłamstwo albo pochlebstwo | Zimne „nie” i obserwacja przez cały wieczór w czytelni. |
| Hałas lub zniszczona książka (za dnia) | Wyprasza z biblioteki, zgłasza opiekunowi domu. |
| Ślady nocnej wyprawy (rano) | Wypytuje szósty rok, patrzy na postacie dłużej niż trzeba; jeśli zostawiły coś swojego, oddaje to opiekunowi domu (reputacja, bez szlabanu). |

## Mechanika

```yaml
statystyki:
  id: npc.irma-pince.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Walker 2e s. 122 (wpis z lat 90.). Observation 5 i Authority (Biblioteka) 5 dopisane jako propozycja [nasze]. Nocą nie patroluje (karta); liczby przydają się dla rano po wyprawie.
    rodzaj: czarodziej
    poziom: "Professional Wizard"   # s. 102; cechy 27, umiejętności 85
    lineage: Pure-blood
    school: "Hogwarts"
    house: "Ravenclaw"
    profession: "Librarian"
    cechy:
      Vitality: 4
      Speed: 5
      Wits: 5
      Knowledge: 8
      Focus: 5
    umiejetnosci:
      Ancient Runes: 8
      Archivist: 10
      Broomstick Flying: 6
      Charms: 7
      D.A.D.A.: 6
      Dark Arts: 5
      Duelling: 5
      Muggle Studies: 7
      Persuasion: 3
      Potions: 6
      "Prestige (Hogwarts)": 6
      Transfiguration: 6
      Observation: 5
      "Authority (Biblioteka)": 5
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Expecto Patronum: 0
      Quietus: 0
      Reparo: 0
      Accio: 0
      Silencio: 0
      Protego: 0
      Finite Incantatem: 0
      Colloportus: 0
      Scourgify: 0
    patronus: NC
    rozdzka: "Czarny orzech (Black Walnut), kolec kolczastego jesionu (Prickly Ash); Charms +2, Protective Magic +3, Revealing Magic +1. Propozycja [nasze]"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 10; Wykrywanie kłamstwa (Wits + Chicanery): 1D10 + 5; Protego (Wits + Charms + różdżka): 1D10 + 14. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Pince jako bibliotekarka w 1969: `niepewne` (potwierdzona w latach 90.; zob. [[kanon.kadra-hogwartu-1969]]). Imię Irma pochodzi z dodatku „Quidditch przez wieki” [niepewne]. Strażnik kanonu: początek pracy Pince nieznany, brak danych wykluczających 1969; użycie dozwolone jako `niepewne` (alternatywa: „bibliotekarka” bez imienia).

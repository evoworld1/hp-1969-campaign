---
id: npc.minerva-mcgonagall
typ: npc
tytul: "Prof. Minerva McGonagall"
status: szkic
imie: "Minerva McGonagall"
rola: "Nauczycielka Transmutacji: podpisuje przepustki na rozsądne prośby; epizod"
dom: Gryffindor
rocznik_1969: "nauczyciel"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.09 (zgoda na wieczór w bibliotece), s1.scena.12, rozgałęzienie „skonfiskowany”
sceny: []
tylko_mg: true
tagi: [s1, nauczyciel, transmutacja, gryffindor, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (Transmutacja: kanon, wniosek; zastępczyni i opiekunka: niepewne)"
  - "WW: Professor McGonagall"
aktualizacja: 2026-11-20
---
## W skrócie

Surowa, sprawiedliwa nauczycielka Transmutacji. Podpisuje przepustkę na wieczór w Dziale Ksiąg Zakazanych, gdy prośba jest rozsądna („do pracy domowej o dryfie”; `flaga.biblioteka-legalnie`). Jeśli Filch albo pani Pince skonfiskują dziennik, trafia on do niej (rozgałęzienie „skonfiskowany”).

## Wygląd i sposób bycia

Wyprostowana, włosy w ciasnym koku, okulary, które zdejmuje, gdy jest naprawdę zła. Jak na nauczycielkę młoda (po trzydziestce).

## Głos

Krótko i precyzyjnie, bez podnoszenia głosu: „Rozsądna prośba dostaje rozsądną odpowiedź. Następna.”

## Czego chce

Porządku, uczciwości i dobrych wyników. Bez graczy: uczy, sprawdza prace, pilnuje regulaminu.

## Sekret

Brak sekretu fabularnego w Sesji 1. W 1951 była najpewniej uczennicą Gryffindoru (niepewne); jak nikt, nie pamięta Ansela.

## Sygnały

Kłamstwo poznaje po pierwszym zdaniu i daje kłamcy jeszcze jedną szansę, zanim ukarze.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Rozsądna, uczciwa prośba | Przepustka na wieczór do zamknięcia biblioteki. |
| Kłamstwo | Brak przepustki i uważne spojrzenie przez kolejny tydzień. |
| Prośba o zwrot skonfiskowanego dziennika | Nie odda bez wyjaśnienia; prawda, opowiedziana w całości, może ją przekonać do rozmowy z dyrektorem (Sesja 2). |

## Mechanika

```yaml
statystyki:
  id: npc.minerva-mcgonagall.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}
  zdolnosci_specjalne: []
```

## Do weryfikacji

- Funkcja zastępczyni dyrektora i opiekunki Gryffindoru w 1969: `niepewne` (Walker s. 152 podaje 1956–1997, to interpretacja Walkera). Nauczanie Transmutacji w 1969: kanon (wniosek).
- Lata nauki ok. 1947–1954: `niepewne` (zob. [[kanon.kadra-hogwartu-1969]]).

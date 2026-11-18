---
id: s1.scena.00
typ: scena
tytul: ""
status: szkic
sesja: s1
akt: ""
kolejnosc: 0
czas_min: 0
cel: ""
npc: []
miejsca: []
flagi_wejscie: []
flagi_wyjscie: []
nastepne: []
przedmioty: []   # opcjonalne
handouty: []   # opcjonalne
tagi: []   # opcjonalne
zrodla: []   # opcjonalne
---
## Do odczytania



## Dla MG



## Obecni



## Dialogi

Krótki wstęp prozą (opcjonalnie).

```yaml
dialog:
  id: s1.scena.00.dialog.nazwa
  npc: npc.imie-nazwisko
  wyzwalacz: "Kiedy ta kwestia pada"
  ton: ""
  kwestie:
    - ""
  wariant_od: []
```

## Testy

```yaml
test:
  id: s1.scena.00.test.nazwa
  opis: ""
  kto: kazdy
  rzut: "DO-USTALENIA"
  trudnosc: "DO-USTALENIA"
  modyfikatory: []
  wyniki:
    - wynik: "DO-USTALENIA"
      efekt: ""
      flagi_ustaw: []
```

## Rozgałęzienia

```yaml
rozgalezienie:
  id: s1.scena.00.rozgalezienie.nazwa
  rodzaj: glowne
  warunek: ""
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: ""
  flagi_ustaw: []
  prowadzi_do: brak
```

## Gdy gracze zboczą

```yaml
rozgalezienie:
  id: s1.scena.00.rozgalezienie.awaryjne-nazwa
  rodzaj: awaryjne
  warunek: "Gracze robią…"
  wymaga_flag: []
  wyklucza_flagi: []
  efekt: ""
  flagi_ustaw: []
  prowadzi_do: brak
```

## Drabinka podpowiedzi

```yaml
podpowiedzi:
  id: s1.scena.00.podpowiedzi
  szturchniecie: ""
  wieksza: ""
  bezposrednia: ""
```

## Konsekwencje



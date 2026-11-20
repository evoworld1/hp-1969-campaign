---
id: npc.filius-flitwick
typ: npc
tytul: "Prof. Filius Flitwick"
status: szkic
imie: "Filius Flitwick"
rola: "Nauczyciel Zaklęć: uczy Tempus, zadaje pracę domową o dryfie zegarów"
dom: Ravenclaw
rocznik_1969: "nauczyciel"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.02, s1.scena.12 (korepetycje z Tempus)
sceny: []
tylko_mg: true
tagi: [s1, nauczyciel, zaklecia, tempus, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (Zaklęcia 1969: niepewne, bardzo prawdopodobne; WA rozdz. 10)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 02)"
aktualizacja: 2026-11-20
---
## W skrócie

Maleńki, pogodny mistrz Zaklęć. W scenie 02 uczy Tempus (zaklęcia pokazującego prawdziwą chwilę) i marszczy brwi, gdy cyfry nad jego różdżką drżą przy biciu wieży. Zadaje pracę domową: zmierzyć dryf trzech zegarów (`flaga.praca-domowa-dryf`). Ciekawskim podsuwa tytuł książki z Działu Ksiąg Zakazanych i może podpisać przepustkę (`flaga.przepustka-flitwicka`, `flaga.biblioteka-legalnie`). W scenie 12 daje korepetycje z Tempus (`flaga.tempus-opanowane`).

## Wygląd i sposób bycia

Bardzo niski, stoi na stosie książek za katedrą, wymachuje różdżką z entuzjazmem. Chwali starania bardziej niż spryt.

## Głos

Piskliwy, szybki i radosny; przy magii czasu nagle poważnieje i zniża głos: „Z czasem się nie żartuje, panie i panowie”.

## Czego chce

Żeby uczniowie zrozumieli, nie tylko powtórzyli. Bez graczy: martwi się „boczącą się” wieżą (od dwóch tygodni), notuje zgłoszenia zgubionych godzin („już trzecie w tym tygodniu”).

## Sekret

Brak sekretu fabularnego. Zna teorię magii czasu i wie, że Ministerstwo nie toleruje eksperymentatorów; dlatego ostrożnie dawkuje ciekawskim wiedzę.

## Sygnały

Przy każdym biciu z wieży zerka w okno. Na błąd w Tempus reaguje zachętą, nie karą.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość lub szczera ciekawość | Przepustka do jednej książki, korepetycje, dobre słowo u pani Pince. |
| Kłamstwo | Udaje, że wierzy, ale przepustki nie podpisze. |
| Pytania o zgubione godziny | Poważnieje: „Jeśli ktoś bawi się czasem, to nie jest zabawa”. Kieruje do Wrena albo dyrektora. |

## Mechanika

```yaml
statystyki:
  id: npc.filius-flitwick.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}
  zdolnosci_specjalne: []
```

## Do weryfikacji

- Flitwick jako nauczyciel Zaklęć i opiekun Ravenclawu w 1969: `niepewne` (bardzo prawdopodobne; zob. [[kanon.kadra-hogwartu-1969]]). Walker (s. 120) podaje lata nauki 1946–1952, czego kanon nie potwierdza.
- Tempus to zaklęcie kampanii (zasada domowa ZD-21, Charm (urok), trudność 9), nie kanon.

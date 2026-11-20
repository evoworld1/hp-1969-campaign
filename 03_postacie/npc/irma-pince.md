---
id: npc.irma-pince
typ: npc
tytul: "Irma Pince"
status: szkic
imie: "Irma Pince"
rola: "Bibliotekarka: strażniczka Działu Ksiąg Zakazanych, wieczorne zagrożenie przy legalnym wejściu"
dom: brak
rocznik_1969: "dorosła, bibliotekarka"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.09 (wariant wieczorny), s1.scena.10, s1.scena.12
sceny: []
tylko_mg: true
tagi: [s1, biblioteka, dzial-ksiag-zakazanych, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (bibliotekarka 1969: niepewne)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (sceny 09, 12; W5)"
aktualizacja: 2026-11-20
---
## W skrócie

Surowa bibliotekarka, ustępuje wobec szczerej ciekawości. Szczera prośba może dać zgodę na wieczór w Dziale Ksiąg Zakazanych do zamknięcia o dziewiątej (`flaga.biblioteka-legalnie`). W scenie 12 skarży się na „chłopca od Slughorna”, który trzy razy prosił o ten sam tom o zegarmistrzostwie (W5, droga do pracowni; dostępne też przy legalnej prośbie). W wariancie wieczornym sceny 09 zagląda między regały i może złapać postacie z notatnikiem Marrow (scena 10, `flaga.filch-zlapal`).

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
| Szczera ciekawość | Zgoda na wieczór w dziale do dziewiątej i wgląd w rejestr wypożyczeń. |
| Kłamstwo albo pochlebstwo | Zimne „nie” i obserwacja przez cały wieczór. |
| Hałas lub zniszczona książka | Wyprasza z biblioteki, zgłasza opiekunowi domu; przy notatniku Marrow: konfiskata (siatka bezpieczeństwa 4). |

## Mechanika

```yaml
statystyki:
  id: npc.irma-pince.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}
  zdolnosci_specjalne: []
```

## Do weryfikacji

- Pince jako bibliotekarka w 1969: `niepewne` (potwierdzona w latach 90.; zob. [[kanon.kadra-hogwartu-1969]]). Imię Irma pochodzi z dodatku „Quidditch przez wieki” [do potwierdzenia przez strażnika kanonu].

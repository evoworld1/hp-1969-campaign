---
id: npc.albus-dumbledore
typ: npc
tytul: "Albus Dumbledore"
status: szkic
imie: "Albus Dumbledore"
rola: "Dyrektor: pojawia się tylko, jeśli gracze do niego pójdą; nie widzi Ansela"
dom: Gryffindor
rocznik_1969: "dyrektor"
kanon: true
pewnosc: kanon
# Docelowo: s1.scena.12 (gabinet dyrektora, siatka bezpieczeństwa 3), rozgałęzienie „dumbledore”
sceny: []
tylko_mg: true
tagi: [s1, dyrektor, kanon, siatka-bezpieczenstwa]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (dyrektor w 1969: kanon, wniosek; KP rozdz. 20, WA rozdz. 18)"
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-19 (Dumbledore odkłada sprawę, nie widzi Ansela)"
aktualizacja: 2026-11-20
---
## W skrócie

Dyrektor czuje, że w zamku coś jest nie tak, ale zajmują go większe zagrożenia, więc odkłada sprawę. Magia czasu go nie dotyka, bo chroni go jego wiedza: nigdy nie widział Ansela (decyzja MG z 2026-11-19). Gdy postacie przyprowadzą chłopca do gabinetu, Dumbledore słucha uprzejmie i uważnie, proponuje Anselowi krzesło, ale patrzy o pół metra obok. Mówi, że wierzy, iż oni kogoś widzą, prosi o obserwację, niczego nie obiecuje. Ustawia `flaga.dumbledore-powiadomiony`; na prośbę daje zgodę na wieczór w bibliotece (`flaga.biblioteka-legalnie`). Nie prowadzi graczy za rękę.

## Wygląd i sposób bycia

Wysoki, długa kasztanowo-siwa broda, okulary-połówki, szaty w niespodziewanym kolorze. Częstuje cukierkami.

## Głos

Łagodny, niespieszny, z humorem, który nagle przechodzi w powagę: „Wierzę, że kogoś widzicie. To nie to samo, co widzieć go samemu, ale to dużo.”

## Czego chce

Chronić szkołę przed tym, co nadciąga z zewnątrz. Bez graczy: zajmuje się sprawami poza zamkiem (wojna, która jeszcze nie ma nazwy) i odkłada „boczącą się wieżę” na później.

## Sekret

Pamięta, że w 1951 w zamku zdarzyła się dziwna noc zgubionych godzin, i nigdy nie połączył jej z żadnym uczniem (propozycja wariantu B z [[kanon.przeniesienie-na-1969]], **nie** decyzja MG; w Sesji 1 nie wychodzi na jaw).

## Sygnały

Przy słowie „Marrow” na moment przestaje się uśmiechać. Na puste krzesło patrzy z życzliwością, jakby ktoś na nim siedział.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Przyprowadzają Ansela | Krzesło dla gościa, uważne słuchanie, wzrok obok. Ansel cicho: „On mnie nie widzi. Pani profesor też w końcu przestała.” |
| Proszą o zgodę na bibliotekę | Zgoda z jednym warunkiem: „Opowiecie mi potem, co znaleźliście”. |
| Kłamstwo | Widzi je od razu, nie karze; mówi, że poczeka, aż będą gotowi. |

## Mechanika

```yaml
statystyki:
  id: npc.albus-dumbledore.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}
  zdolnosci_specjalne:
    - nazwa: "Poza zasięgiem magii czasu"
      opis: "Kradzież godzin go nie dotyka i Ansela nie widzi (decyzja MG). Statystyki w Sesji 1 niepotrzebne."
```

## Do weryfikacji

- Funkcja dyrektora w 1969: kanon (wniosek). Dom Gryffindor: kanon (tradycyjnie przyjmowany; do potwierdzenia przez strażnika kanonu, jeśli ma znaczenie).
- „Pamięć o nocy zgubionych godzin w 1951” to tylko propozycja (P13 w [[kanon.przeniesienie-na-1969]]); MG nie podjął decyzji.

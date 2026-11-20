---
id: npc.maisie-lock
typ: npc
tytul: "Maisie Lock"
status: szkic
imie: "Maisie Lock"
rola: "Ofiara Cassiana: trzecioroczna, której „brakuje kawałka” sprawdzianu"
dom: Hufflepuff
rocznik_1969: "3 rok"
kanon: false
pewnosc: nasze
# Docelowo: s1.scena.01 (sygnał dziwności), s1.scena.05 (mignięcie Ansela), s1.scena.06, s1.scena.12
sceny: []
tylko_mg: true
tagi: [s1, uczen, hufflepuff, ofiara-cassiana, duch-puchona]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (sceny 01, 05, 06, 12)"
aktualizacja: 2026-11-20
---
## W skrócie

Trzecioroczna Puchonka, która straciła godzinę w dniu sprawdzianu, który Cassian zdał celująco. Koleżanki dokuczają jej, że „zasnęła z otwartymi oczami”; ona się upiera: „Nie spałam. Po prostu mi tego kawałka nie ma” (sygnał w scenie 01). Raz widziała „ducha Puchona” mignięciem. W scenie 05 przechodzi obok Ansela, zatrzymuje się, mruga: „Zdawało mi się…”. W scenach 06 i 12 jest świadkiem, którego godzinę da się dopasować do sukcesu Cassiana (`flaga.rejestr-godzin`).

## Wygląd i sposób bycia

Mała, okrągła twarz, dwa krzywe warkocze, za duży sweter pod szatą. Ściska podręcznik jak tarczę.

## Głos

Cichy, uparty, z drżeniem: „Nie spałam! Ja wiem, jak się śpi. To było… jakby ktoś wyciął stronę.”

## Czego chce

Żeby ktoś jej uwierzył. Bez graczy: poprawia sprawdzian u profesor Sprout i unika schodów, na których widziała „ducha”.

## Sekret

Brak sekretu. Boi się, że „coś jest z nią nie tak”.

## Sygnały

Odruchowo sprawdza zegarek co kilka minut, jakby pilnowała, czy znowu nic nie zginie.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Wysłuchanie, potraktowanie poważnie | Ogromna ulga; podaje dokładny dzień i godzinę straty oraz opis „ducha” (żółty krawat, znikł, gdy się odwróciła). |
| Żart albo zbycie | Zamyka się, odchodzi z płaczem; koleżanki patrzą na postacie krzywo. |
| Pytanie przy innych | Wstydzi się i zaprzecza; mówi wszystko dopiero na osobności. |

## Mechanika

```yaml
statystyki:
  id: npc.maisie-lock.statystyki
  system: walker-2e-draft-2026-04
  wartosci: {}
  zdolnosci_specjalne: []
```

## Do weryfikacji

- Dokładna data i godzina jej straty: do ustalenia razem ze sceną 06 (musi pasować do sprawdzianu Cassiana w ciągu ostatnich trzech tygodni).

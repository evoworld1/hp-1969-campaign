---
id: npc.gruby-mnich
typ: npc
tytul: "Gruby Mnich"
status: szkic
imie: "Gruby Mnich"
rola: "Duch Hufflepuffu: urażony plotką o „duchu Puchona”, coś mu świta przy imieniu Ansela"
dom: Hufflepuff
rocznik_1969: "duch"
kanon: true
pewnosc: kanon
# Docelowo także: s1.scena.12 (spotkanie, wskazówka W2)
sceny: [s1.scena.01, s1.scena.12]
tylko_mg: true
tagi: [s1, duch, hufflepuff, kanon]
zrodla:
  - "KF rozdz. 7 (duch Hufflepuffu, pogodny i skłonny wybaczać)"
  - "01_kanon/kadra-hogwartu-1969.md (duchy domów)"
aktualizacja: 2026-11-20
---
## W skrócie

Pogodny duch Hufflepuffu. W Sesji 1 jest urażony plotką o „duchu Puchona”: przecież to on jest duchem Puchonów (kolor w scenie 01). Zapytany o chłopca o imieniu Ansel, marszczy czoło: „Znałem chłopca o tym imieniu… nie, to niemożliwe” (wskazówka W2, `flaga.ansel-poza-spisem` przy zestawieniu z innymi tropami). Reakcja na Ansela to [nasze]; sama postać jest kanoniczna.

## Wygląd i sposób bycia

Okrągły, przezroczysty mnich w habicie, przepływa przez stoły, macha do uczniów.

## Głos

Dobroduszny, rozwlekły, łatwo się wzrusza: „Duch Puchona! Doprawdy! Tyle wieków służby i takie plotki!”

## Czego chce

Żeby wszyscy się pogodzili i żeby o nim pamiętano. Bez graczy: snuje się po korytarzach Hufflepuffu i dopytuje pierwszoroczniaków, co dokładnie widzieli.

## Sekret

Ma tylko mgliste przeczucie, że znał chłopca z jesieni 1951, i nie umie go uchwycić; duchy żyją obok czasu, więc trzyma się w nim okruch wspomnienia, którego żywi nie mają [nasze]. Pełnej opowieści o 1951 roku nie zna: tę daje Szara Dama w Sesji 2 (decyzja MG). Mnich może tylko odesłać do niej postacie.

## Sygnały

Przy imieniu „Ansel” na moment blednie jeszcze bardziej i traci wątek.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość, pochwała | Rozgaduje się; daje wskazówkę W2 i może poradzić, by zapytać Szarą Damę (zapowiedź Sesji 2). |
| Żarty z „ducha Puchona” | Obraża się na resztę dnia i odpływa przez ścianę. |
| Pytanie o „ducha Puchona”, zanim postacie znają imię Ansela (scena 01) | Rozwlekle narzeka, że jedynym duchem Puchonów jest on. Chłopca w żółtym krawacie nie widział. Na sam „żółty krawat” na chwilę się zamyśla, ale bez imienia nic mu nie świta. |
| Przyprowadzenie Ansela | Nie widzi go, ale czuje chłód „jak przy kimś bardzo smutnym”. |

## Mechanika

```yaml
statystyki:
  id: npc.gruby-mnich.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Duch (Spirit, s. 89). Walker nie podaje wpisu Grubego Mnicha: liczby to propozycja [nasze], potrzebna tylko do czytania go jako świadka.
    rodzaj: stworzenie
    typ_stworzenia: Spirit
    cechy:
      Vitality: "—"
      Speed: 2
      Wits: 4
      Knowledge: 6
      Focus: 5
    move: "1D+2"
    combat: "Nie walczy; nie da się go zranić ani zabić (duch)"
    fear: "—"
    umiejetnosci:
      Persuasion: 5
      Prestige (Hufflepuff): 4
      History of Magic: 5
    zaklecia: {}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): sama Wits, 1D10 + 4. Przekonywanie go (jego obrona w teście przeciwnym, Wits + Persuasion): 1D10 + 9. Nie atakuje, nie unika, nie odnosi obrażeń. [nasze]"
```

## Do weryfikacji

- Czy duch może widzieć Ansela: przyjęto, że **nie** (decyzja MG: z Anselem rozmawiają tylko postacie graczy, reszta zamku go nie widzi). Rozstrzygnięte przez MG: Ansela pamiętają oboje duchowie; Gruby Mnich w Sesji 1 ma tylko mgliste przeczucie, pełną opowieść o 1951 roku daje Szara Dama w Sesji 2.
- Kanon nie podaje daty śmierci Grubego Mnicha; w kwestiach mówionych używać ogólnego „tyle wieków” [niepewne].

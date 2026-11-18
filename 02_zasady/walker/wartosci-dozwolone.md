---
id: zasada.walker-wartosci-dozwolone
typ: zasada
tytul: "Słownik wartości dozwolonych w blokach test i statystyki"
status: recenzja
kategoria: rdzen
pochodzenie: walker
strony: "Walker 2e s. 3-6, 11-13, 35, 39, 41, 89, 165-166"
tagi: [wartosci-dozwolone, kontrakt-danych, test, statystyki, slownik]
zrodla: ["Walker 2e, szkic 2026-04 (EN)", "docs/KONTRAKT-DANYCH.md rozdz. 5"]
aktualizacja: 2026-11-18
---
## Streszczenie

Ten plik ustala, jakie wartości wpisujemy w pola mechaniczne bloków `test` (`rzut`, `trudnosc`, `modyfikatory`, `wyniki`) i `statystyki`. Nazwy cech, umiejętności, progów trudności i stanów zdrowia są **dokładnie takie jak w podręczniku** (angielskie). Poziomy wyniku zapisujemy polskimi identyfikatorami (małe litery, bez polskich znaków, z łącznikami), bo tak zaczyna przykład w kontrakcie danych (`sukces`, `porazka`).

Walidator (`narzedzia/walidator.py`) nie sprawdza dziś tych wartości; blok `wartosci_dozwolone` na końcu pliku jest gotowy do odczytu maszynowego, gdyby panel lub walidator miały to robić.

### Cechy (Attributes, s. 12)
`Vitality`, `Speed`, `Wits`, `Knowledge`, `Focus`.

### Umiejętności (Skills, s. 5, 21–23)
`Alchemy`, `Ancient Runes`, `Ancient Studies`, `Archivist`, `Arithmancy`, `Art`, `Astronomy`, `Authority`, `Balance`, `Broomstick Flying`, `Charms`, `Chicanery`, `Concealment`, `Crafting`, `Dark Arts`, `D.A.D.A.`, `Disguise`, `Divination`, `Duelling`, `Herbology`, `History of Magic`, `Law`, `Magical Creatures`, `Magical Theory`, `Muggle Studies`, `Music`, `Observation`, `Occlumency`, `Persuasion`, `Potions`, `Prestige`, `Riding`, `Strategy`, `Skirmishing`, `Stealth`, `Swimming`, `Tracking`, `Transfiguration`, `Transportation`, `Trivia`, `Wandlore`.

Specjalizację dopisujemy w nawiasie: `Observation (Patrol)`. Nazw spoza listy (np. „Command”, „Cunning”, „Influence”, „Dark Magic”) nie używamy; zob. [[zasada.walker-luki]].

### Progi trudności (Difficulty, s. 3)
| Wartość pola `trudnosc` | Próg |
|---|---|
| `Elementary (3)` | 3 |
| `Straightforward (6)` | 6 |
| `Tricky (12)` | 12 |
| `Challenging (15)` | 15 |
| `Ambitious (18)` | 18 |
| `Formidable (21)` | 21 |
| `Almost Impossible (25)` | 25 |

Liczba bez nazwy (pole przyjmuje też typ liczbowy) jest dozwolona, gdy podręcznik podaje próg spoza skali, np. `9` (lewitacja), `11` (uwolnienie z Immobulus), `16` (wizja jasnowidza).

### Poziomy wyniku (pole `wynik`, s. 3, 41)
| Identyfikator | Walker (EN) | Warunek | Przy zaklęciu (s. 41) |
|---|---|---|---|
| `porazka-kompromitujaca` | Embarrassing failure | rzut < ½ trudności | Spell fumble: możliwy odrzut |
| `porazka` | Failure | rzut < trudności | Spell near miss: połowiczny efekt |
| `sukces` | Success | rzut ≥ trudności | Spell success: pełny efekt |
| `sukces-imponujacy` | Impressive success (x2) | rzut ≥ 2 × trudności | niejasne, s. 41 |
| `sukces-niewiarygodny` | Unbelievable success (x3) | rzut ≥ 3 × trudności | niejasne, s. 41 |

Dla testu przeciwnego (s. 4): `wygrana`, `przegrana`, `remis` (remis rozstrzyga Narrator). Dla efektu niezależnego od wyniku: `zawsze`.

**Konwencja:** jeśli blok wymienia tylko `sukces` i `porazka`, to `sukces` obejmuje też wyższe poziomy, a `porazka` także kompromitującą. Wymienienie wyższego poziomu osobno oznacza, że ma on własny efekt.

### Zapis pola `rzut`
| Sytuacja | Wzór | Strona |
|---|---|---|
| test standardowy | `1D10 + Wits + Observation` | s. 3 |
| dwie cechy albo dwie umiejętności | `1D10 + Wits + Knowledge` | s. 3 |
| Quick Test | `Quick Test: Observation` | s. 4 |
| rzucanie zaklęcia | `1D10 + Focus + Charms (zaklęcie: Alohomora)` | s. 41 |
| zaklęcie celowane w walce | `1D10 + Wits + Charms (zaklęcie celowane: Stupefy)` | s. 33, 165 |
| atak w pojedynku | `1D10 + Wits + Duelling (zaklęcie: Flipendo)` | s. 41 |
| inicjatywa | `1D10 + Speed + Duelling` albo `1D10 + Speed + Skirmishing` | s. 33, 41 |
| odporność na obrażenia | `1D10 + Vitality` | s. 35 |
| strach | `1D10 + Wits (Fear)` | s. 89 |
| warzenie | `1D10 + Knowledge + Potions (eliksir: nazwa)` | s. 60 |

Premie stałe (różdżka, specjalizacja) można dopisać na końcu: `1D10 + Focus + Charms + 1 (różdżka)`.

### Zapis pola `trudnosc`
| Sytuacja | Wzór |
|---|---|
| zwykły próg | `Tricky (12)` albo liczba |
| zaklęcie lub eliksir | `aktualna trudność: Alohomora (start 12)` |
| test przeciwny | `przeciwny: 1D10 + Wits + Observation (npc.identyfikator)` |
| atak (cel to obrona) | `obrona: 1D10 + Speed + Wits` (unik) albo `obrona: 1D10 + Wits + Charms` (Protego) |
| Quick Test | `Quick Test` (sukces, gdy wynik ≤ wartości) |
| strach | `Fear 10` |

### Zapis pola `modyfikatory[].wartosc`
- `+N do rzutu` albo `-N do rzutu`: premie i ułatwienia (pomocnicy, różdżka, lekcja, korepetycje).
- `+N do trudności` albo `-N do trudności`: kary i utrudnienia (rany, dystans, osłona, niewerbalne, cudza różdżka).

W Walkerze kary zawsze podnoszą **trudność**, a premie zwiększają **rzut** (s. 4, 35, 41).

### Stany zdrowia (s. 35)
| Kółko | `body` | `mind` | Kara do trudności |
|---|---|---|---|
| 1 | Shaken | Rattled | +1 |
| 2 | Bruised | Dazed | +2 |
| 3 | Bloodied | Drained | +3 |
| 4 | Broken | Confused | +5 |
| 5 | Fading | Raving | +7 |
| 6 | Lifeless | Mindless | brak akcji |

### Typy zaklęć (s. 39)
`Charm` → `Charms`; `Curse` → `Dark Arts`; `Hex` → `D.A.D.A.`; `Jinx` → `D.A.D.A.`; `Transfiguration` → `Transfiguration`; `Transportation` → `Transportation`.

### Pozostałe wartości
- `kto` (z kontraktu): `kazdy`, `jeden`, `grupa`, `npc`.
- Pochodzenie (s. 6–9, 122): `Muggle-born`, `Half-blood`, `Pure-blood`, `Part-human`, `Squib`.
- Domy (s. 11): `Gryffindor`, `Hufflepuff`, `Ravenclaw`, `Slytherin`.
- Typ stworzenia (s. 89): `Beast`, `Being`, `Spirit`.
- Poziom postaci (s. 102): `Young Wizard`, `Average student`, `Gifted student`, `Top of the class`, `Professional Wizard`, `Veteran Wizard`, `Renowned Wizard`, `Uniquely powerful`.
- System w bloku `statystyki`: `walker-2e-draft-2026-04`.

## Jak używać przy stole

Przykład poprawnego bloku (w pliku sceny zapisany jako ```` ```yaml ````):

```yml
test:
  id: s1.scena.04.test.przeszukanie-gabinetu
  opis: "Uczniowie przeszukują gabinet, zanim wróci profesor."
  kto: grupa
  rzut: "1D10 + Wits + Observation"
  trudnosc: "Tricky (12)"
  modyfikatory:
    - warunek: "Każdy pomagający uczeń"
      wartosc: "+1 do rzutu"
    - warunek: "Prowadzący jest posiniaczony (Bruised)"
      wartosc: "+2 do trudności"
  wyniki:
    - wynik: porazka
      efekt: "Nic nie znajdują, a kroki na korytarzu każą uciekać."
    - wynik: sukces
      efekt: "Znajdują notatkę w szufladzie."
    - wynik: sukces-imponujacy
      efekt: "Znajdują też drugą, ukrytą w okładce książki."
```

## Przykład

Test przeciwny z NPC: `rzut: "1D10 + Speed + Stealth"`, `trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.filch)"`, wyniki `wygrana` i `przegrana`. Identyfikator NPC w nawiasie jest tylko informacją dla MG (pole `trudnosc` nie jest sprawdzane jako odwołanie).

## Uwagi

Blok do odczytu maszynowego (rodzaj bloku spoza kontraktu, więc walidator go pomija):

```yaml
wartosci_dozwolone:
  system: walker-2e-draft-2026-04
  cechy: [Vitality, Speed, Wits, Knowledge, Focus]
  umiejetnosci: [Alchemy, Ancient Runes, Ancient Studies, Archivist, Arithmancy, Art, Astronomy, Authority, Balance, Broomstick Flying, Charms, Chicanery, Concealment, Crafting, Dark Arts, D.A.D.A., Disguise, Divination, Duelling, Herbology, History of Magic, Law, Magical Creatures, Magical Theory, Muggle Studies, Music, Observation, Occlumency, Persuasion, Potions, Prestige, Riding, Strategy, Skirmishing, Stealth, Swimming, Tracking, Transfiguration, Transportation, Trivia, Wandlore]
  trudnosci:
    Elementary: 3
    Straightforward: 6
    Tricky: 12
    Challenging: 15
    Ambitious: 18
    Formidable: 21
    Almost Impossible: 25
  wyniki: [porazka-kompromitujaca, porazka, sukces, sukces-imponujacy, sukces-niewiarygodny, wygrana, przegrana, remis, zawsze]
  stany_body: {Shaken: 1, Bruised: 2, Bloodied: 3, Broken: 5, Fading: 7, Lifeless: X}
  stany_mind: {Rattled: 1, Dazed: 2, Drained: 3, Confused: 5, Raving: 7, Mindless: X}
  typy_zaklec:
    Charm: Charms
    Curse: Dark Arts
    Hex: D.A.D.A.
    Jinx: D.A.D.A.
    Transfiguration: Transfiguration
    Transportation: Transportation
  pochodzenie: [Muggle-born, Half-blood, Pure-blood, Part-human, Squib]
  domy: [Gryffindor, Hufflepuff, Ravenclaw, Slytherin]
  typy_stworzen: [Beast, Being, Spirit]
  poziomy_postaci: [Young Wizard, Average student, Gifted student, Top of the class, Professional Wizard, Veteran Wizard, Renowned Wizard, Uniquely powerful]
  modyfikator_wzor: "^[+-][0-9]+ do (rzutu|trudności)$"
```

- Jeśli MG przyjmie zasadę domową z nazwanym progiem 9 (zob. [[zasada.walker-luki]]), dopiszemy go do tabeli progów.

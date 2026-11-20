---
id: zasada.walker-statystyki-npc
typ: zasada
tytul: "Jak Walker zapisuje statystyki NPC i stworzeń (wzór dla bloku statystyki)"
status: recenzja
kategoria: rdzen
pochodzenie: walker
strony: "Walker 2e s. 89, 102-104, 113, 120, 137"
tagi: [npc, statystyki, stworzenia, poziom-postaci, kontrakt-danych]
zrodla: ["Walker 2e, szkic 2026-04 (EN)"]
aktualizacja: 2026-11-18
---
## Streszczenie

**Postacie (s. 102).** Wpis NPC w podręczniku zawiera:
- nagłówek: **Lineage** (pochodzenie, także „Squib” albo „Part-Goblin”), **School** (szkoła i rok rozpoczęcia, np. „Hogwarts (1961)”), **Year** (rok nauki, u uczniów), **House**, a u dorosłych **Profession**, **Title** albo **Role**;
- pięć cech: Vitality, Speed, Wits, Knowledge, Focus;
- **Skills**: tylko umiejętności powyżej zera, specjalizacja w nawiasie, np. „Observation (Patrol) 6”, „Prestige (Hogwarts) 7”;
- **Notable Spells**: kilka zaklęć, z których postać słynie (nie pełna lista), w tym Expecto Patronum z kształtem patronusa albo „NC” (patronus niecielesny);
- gwiazdka przy umiejętności oznacza zdolność wyjątkową z przypisem.

Podręcznik zakłada, że dorośli czarodzieje znają zaklęcia z pierwszych lat nauki i umieją się teleportować. Postacie książkowe podano w wersjach z różnych lat (np. Harry w wieku 11, 14 i 17 lat). Różdżki, zdrowia ani Story Points w statystykach NPC nie ma.

**Skala poziomów (s. 102).** Sumy punktów cech i umiejętności jako punkt odniesienia:

| Poziom (EN) | Suma cech | Suma umiejętności |
|---|---|---|
| Young Wizard (dziecko) | 5–10 | 10–20 |
| Average student (przeciętny uczeń) | 11–18 | 21–40 |
| Gifted student (zdolny uczeń) | 19–21 | 41–60 |
| Top of the class (najlepszy w klasie) | 22–24 | 61–80 |
| Professional Wizard (zawodowiec) | 25–34 | 81–140 |
| Veteran Wizard (weteran) | 35–39 | 141–170 |
| Renowned Wizard (sława) | 40–44 | 171–200 |
| Uniquely powerful (wyjątkowo potężny) | 45+ | 201+ |

Wartość pojedynczej umiejętności: 1 minimalna wiedza, 3 kompetencja, 5 uzdolnienie, 6 najlepszy w klasie, 7 zawodowiec, 9 ekspert, 10 uznany ekspert, 11+ postać nadzwyczajna (s. 102).

**Przykład 1, uczeń (s. 104, Harry w wieku 11 lat):** półkrwi, Hogwart, 1. rok, Gryffindor; Vitality 2, Speed 4, Wits 3, Knowledge 1, Focus 2; umiejętności m.in. Balance 4, Broomstick Flying (Seeker) 5, Observation 3; trzy znane zaklęcia.

**Przykład 2, dorosły (s. 113, Arthur Weasley):** czystokrwisty, Hogwart od 1961, Gryffindor, Ministry Officer; cechy 4/5/6/7/7; kilkanaście umiejętności z poziomami 5–8 i specjalizacjami (np. Law (Enchanted Objects) 8); sześć znanych zaklęć z patronusem (Weasel).

**Stworzenia (s. 89).** Wpis ma nazwę i typ (Beast, Being, Spirit), pięć cech (brakująca to „—”), **Move** (kość ruchu, np. „2D+1”, do inicjatywy i pościgu), **Combat** (kość ataku i obrony z opisem ataku i obrażeń, np. „1D+7 (Twiggy Fingers 1D)”), **Fear** (wartość strachu albo „—”) i opis. Stworzenie bez Vitality nie odnosi ran fizycznych; u bytów bezcielesnych Focus zastępuje Vitality przy atakach magicznych. Zwierzęta towarzyszące (s. 137) mają ten sam format.

## Jak używać przy stole

**Proponowany kształt pola `wartosci` w bloku `statystyki` (kontrakt danych, rozdział 5.5).** Odwzorowuje wpis z podręcznika i dodaje to, czego potrzebuje kampania: aktualną trudność zaklęć (do pojedynków) i stan zdrowia. Przykład poniżej to wzór, nie dane żadnej postaci:

```yml
statystyki:
  id: npc.przyklad.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    rodzaj: czarodziej            # czarodziej | stworzenie
    poziom: "Average student"     # z tabeli s. 102
    lineage: Half-blood           # wartości: Muggle-born | Half-blood | Pure-blood | Part-human | Squib
    school: "Hogwarts (1966)"
    year: 4                       # tylko uczniowie
    house: Hufflepuff
    profession: ""                # dorośli: Profession / Title / Role
    cechy:
      Vitality: 3
      Speed: 3
      Wits: 4
      Knowledge: 3
      Focus: 3
    umiejetnosci:                 # tylko > 0; specjalizacja w nawiasie
      Charms: 3
      D.A.D.A.: 3
      "Observation (Korytarze)": 5
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Expelliarmus: 0
      Flipendo: 0
      Protego: 12
    patronus: brak                # brak | NC | nazwa zwierzęcia
    rozdzka: "Wierzba, włos jednorożca, 10 cali, giętka; Healing Magic +1, Charms +1"
    zdrowie: {body: 0, mind: 0}   # liczba zaznaczonych kółek
  zdolnosci_specjalne:
    - nazwa: "Nazwa zdolności"
      opis: "Co zmienia w konkretnym kroku zasad Walkera (inicjatywa, akcje, cel ataku itp.)."
```

Dla stworzeń zamiast `lineage`, `school`, `year`, `house`, `zaklecia` używamy: `typ_stworzenia` (Beast | Being | Spirit), `move` (np. „2D+1”), `combat` (np. „1D+7 (Bite 1D+1)”), `fear` (liczba albo „—”).

- Wzorzec zapisuje się w pliku NPC w bloku ```` ```yaml ```` (tu celowo pokazany jako `yml`, żeby walidator nie traktował przykładu jako danych).
- Uczniowie-NPC: dobierz sumy punktów z tabeli s. 102 do roku i talentu postaci, a liczbę opanowanych zaklęć do wiersza tabeli kratek (s. 17). W pojedynku liczy się, które zaklęcia NPC ma **opanowane**, zob. [[zasada.walker-pojedynki]].

## Przykład

Prefekt-Ślizgon z 6. roku, zdolny, ale nie wybitny: poziom „Gifted student”, suma cech 20 (np. 3/4/5/4/4), suma umiejętności około 50, Duelling 4, opanowane Expelliarmus, Impedimenta i Protego, Stupefy z aktualną trudnością 12.

## Uwagi

- Podręcznik nie podaje dla NPC wartości zdrowia, różdżki ani Story Points; pola `zdrowie` i `rozdzka` to nasze rozszerzenie (nie zmieniają zasad).
- Pola `zaklecia` z aktualną trudnością w podręczniku nie ma (podaje tylko „Notable Spells”); dodajemy je, bo zasady pojedynku zależą od opanowania zaklęcia (s. 165).
- Nie jest jasne, jak dokładnie liczy się kość Move i Combat z cech (s. 89 mówi o Vitality + Speed i Vitality + Wits, ale przykłady nie zawsze się zgadzają, np. bowtruckle Move 2D+1 przy Vitality 2 i Speed 9). Przy własnych stworzeniach porównujemy z podobnymi z podręcznika.
- Wpis Flitwicka podaje lata nauki „1946–1952” (s. 120), co zostawiamy strażnikowi kanonu.

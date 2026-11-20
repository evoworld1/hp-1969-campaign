---
id: miejsce.sala-obrony
typ: miejsce
tytul: "Sala Obrony przed Czarną Magią"
status: szkic
lokalizacja: "Hogwart, skrzydło lekcyjne, na końcu bocznego korytarza od sali Zaklęć (umiejscowienie robocze)"
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.04 (pokaz Cassiana), s1.scena.06 (baza grupy, pomiar), s1.scena.08 (możliwa konfrontacja po lekcji), s1.scena.12
sceny: []
tylko_mg: true
tagi: [s1, hogwart, lekcja, wren, grupa-trzecia, cassian, pojedynek, baza-druzyny]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 04, drużyna: grupa Wrena)"
  - "03_postacie/npc/thaddeus-wren.md"
aktualizacja: 2026-11-20
---
## Do odczytania

Ławki zsunięto pod ściany. Na środku sali stoją cztery stanowiska ćwiczeniowe wyznaczone kredą, a przy każdym drewniany manekin w starej szacie, podziurawionej zaklęciami jak sito. Pachnie spalonym materiałem i kredą. Na tablicy ktoś napisał wielkimi literami: PRZECIWNIK ZAWSZE MÓWI, CO ZROBI. Przy oknie, plecami do światła i twarzą do drzwi, stoi profesor Wren.

## Dla MG

**Rola w Sesji 1.** Lekcja czytania przeciwnika i pokaz Cassiana (scena 04), pierwszy test przeciwny. Po lekcjach baza grupy trzeciej: grupa ma prawo ćwiczyć tu razem, więc to wygodny punkt zborny śledztwa (06–08).
- **Stanowiska:** jedno przy oknie jest najlepsze (światło za plecami, widać drzwi). Grupa, która przyszła pierwsza, wybiera. Spóźniona grupa trzecia dostaje stanowisko pod tablicą, ze słońcem w oczach (kolor; ewentualną karę ustala mechanik).
- [[npc.thaddeus-wren]] przyjmuje spóźnionych: „Gdzie byliście?”. Jeśli powiedzą prawdę, pyta, czy Vane był w pobliżu.
- [[npc.rosalind-teague]] (pociera kciuk przed zaklęciem) i [[npc.barnaby-finch]] (zerka na drzwi przed ruchem) z grupy rywali to materiał do ćwiczenia czytania przeciwnika.
- [[npc.cassian-vane]] wygrywa pokaz: działa dwa razy, zanim przeciwnik skończy jeden ruch, potem dotyka kieszonki kamizelki. Zegarek ma przy sobie **zawsze** (decyzja MG 2026-11-20: przed sceną 04 nie da się go zdobyć). Test spostrzegawczości postaci, która patrzy na pokaz, ujawnia, że szybkość daje zegarek; kto nazwie sygnał na głos, ustawia `flaga.sygnal-cassiana-nazwany`.
- Postać, która pokona Cassiana, może wyrwać mu zegarek. Wren od razu go odbiera i oddaje Cassianowi („Pamiątka, nie dowód”), ale od tej chwili podejrzewa (`flaga.wren-podejrzewa`). Szczegóły w [[przedmiot.zegarek-cassiana]].
- Po lekcji Wren może rzucić uwagę o ocenach Vane'a (`flaga.wren-podejrzewa`).

**Stan zmienny.**
- Gdy `flaga.s1-zegar-kradziezy` = 2: Wren zbiera tu swoją grupę i pyta, kto ostatnio „gubi czas”, zanim zapyta publicznie.
- Jeśli `flaga.wren-podejrzewa`: po lekcjach Wren zostawia drzwi uchylone i „przypadkiem” wychodzi, gdy grupa trzecia ćwiczy; nie chce nic wiedzieć oficjalnie.
- Po `flaga.cassian-zdemaskowany` (Sesja 2): grupa rywali ćwiczy przy innym stanowisku i nie patrzy w stronę drużyny, albo przeciwnie, zależnie od `flaga.cassian-los`.

**Odczyt do mapy dryfu (propozycja robocza):** zegar nad drzwiami −2 minuty, gładko. Przy Cassianie (gdy ma zegarek) Tempus tyka szybciej niż gdziekolwiek indziej. Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.** Pokaz to jedyne miejsce w zamku, gdzie wolno ciskać zaklęciami w uczniów: drobne obrażenia są możliwe, Wren przerywa przy pierwszej krwi. Po lekcjach kryjówka: szafa na manekiny w kącie (dwie osoby, ciasno, pachnie naftaliną).

### Do weryfikacji
- Położenie sali w zamku jest robocze. Walker (s. 159) podaje, że pierwszoroczni mają Obronę w Wieży Północnej; dla szóstego roku przyjmujemy osobną salę w skrzydle lekcyjnym (nasze).
- Napis na tablicy i manekiny to szczegóły wykonawcze.

## Ukryte

Nienaturalna szybkość Cassiana na pokazie to dosłownie godzina postaci, zabrana w przerwie. Najbardziej uważny gracz może to poczuć jeszcze przed dowodem: Tempus przy Cassianie tyka szybciej, a postacie są głodne i wybite z rytmu, podczas gdy on jest wypoczęty.

## Testy

Terminy Walkera w testach: Wits (bystrość), Duelling (pojedynkowanie się).

Test przeciwny czytania przeciwnika (Rosalind, Barnaby) i pokaz grup należą do pliku sceny 04; liczby ustala mechanik.

```yaml
test:
  id: miejsce.sala-obrony.test.cwiczenia-grupy
  opis: "Wieczorem grupa trzecia ćwiczy w pustej sali, żeby przygotować się na Cassiana (opcjonalnie, scena 06–08)."
  kto: grupa
  rzut: "1D10 + Wits + Duelling"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Grupa ma plan na sygnał Cassiana. Premię do pierwszego ruchu w pojedynku (scena 08) ustala mechanik."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Ćwiczenie się rozjeżdża, ale Wren, który przechodzi korytarzem, rzuca jedną radę z progu."
      flagi_ustaw: []
```

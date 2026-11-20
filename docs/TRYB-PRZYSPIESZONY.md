# Tryb przyspieszony (decyzja MG, 2026-11-20)

Obowiązuje do końca Scenariusza 1 (sesja jest zaplanowana na 2026-11-21). Nie zmienia `CLAUDE.md`; to doraźne odstępstwo od sekcji 5 (kolejność i równoległość) i 6 (pytania). Zasady, które zostają: język, kontrakt danych, rejestr decyzji, zero zmyślania, status `gotowe` tylko od MG.

## 1. Bez pytań w trakcie pracy
- Decyzje fabularne podejmuje Reżyser sam (wariant najbezpieczniejszy dla rdzenia), zapisuje je jako **założenia robocze** w `04_kampania/stan-kampanii.md` (sekcja „Założenia robocze”). MG skreśla to, z czym się nie zgadza, po lekturze.
- Wyjątek: coś przeczy rejestrowi decyzji. Wtedy wygrywa rejestr.

## 2. Modele i wysiłek
Ustawione w nagłówkach `.claude/agents/*.md` (pole `model`, `effort: medium`):
- **Opus:** `narrator-scen`, `dialogista`, `tworca-npc` (proza, dialogi, karty postaci).
- **Sonnet:** `architekt-fabuly`, `mechanik`, `planista-awaryjny`, `straznik-kanonu`, `symulator-graczy`, `redaktor-ciaglosci`, `kronikarz`.
- Reżyser (sesja główna) działa na modelu wybranym przez MG (zalecany Sonnet). Parametr `model` w wywołaniu agenta ma pierwszeństwo przed nagłówkiem; używać tylko wyjątkowo.
- Przed pierwszą falą po resecie limitu: test doboru modeli (dwa najtańsze wywołania: `narrator-scen` i `mechanik` z poleceniem „podaj jednym zdaniem swój model”). Przed każdą falą sprawdzić `/usage`.

## 3. Praca nad sceną w dwóch etapach (jeden plik, po kolei)
- **Etap A:** `narrator-scen` (Do odczytania, rytm kroków, Dla MG), potem `dialogista` (Obecni, Dialogi).
- **Etap B:** `mechanik` (Testy z liczbami), potem `planista-awaryjny` (Gdy gracze zboczą, Drabinka podpowiedzi, Konsekwencje).
- Różne sceny równolegle, ale **najwyżej 3 naraz** (limit). Jedna scena = jeden plik = jeden agent naraz.
- Każdy nowy agent startuje od zera. Nie wznawiać starych agentów przez `SendMessage`, chyba że to ten sam etap tej samej sceny.

## 4. Wzór prompta agenta
Krótki, ścieżki i identyfikatory zamiast treści:
1. Jaką scenę (`s1.scena.NN`) i jaki etap; plik: `05_scenariusze/s1-godzina-ktorej-nie-bylo/sceny/NN-slug.md`.
2. Przeczytaj: `docs/WZORZEC-SCENY.md`; wpis sceny w `graf-scen.md` i `przeglad.md`; karty obecnych NPC, miejsc, przedmiotów; ostatnie wpisy rejestru decyzji w `04_kampania/stan-kampanii.md` oraz sekcję „Założenia robocze”.
3. Zero pytań; decyzje podejmij sam i wypisz w raporcie jako „Założenia robocze”.
4. Edytuj WYŁĄCZNIE swój plik sceny. Nie ruszaj `flagi.yaml`, grafu, przeglądu, słownika, kart ani innych scen; potrzebne zmiany wypisz w raporcie. Nie commituj.
5. Raport krótki, po polsku: co napisałeś, liczby, zmiany we wspólnych plikach, założenia robocze.

## 5. Po każdym raporcie (Reżyser)
`python3 narzedzia/walidator.py`; powiązanie kart (`sceny:` w kartach NPC, miejsc i przedmiotów wymienionych w nagłówku sceny); flagi i słownik, jeśli agent o to prosi; założenia robocze do `stan-kampanii.md`; commit (po polsku) i push na `claude/zealous-fermi-4kxc8e`.

## 6. Kolejność i zakres
- Fala 1: scena 08 (Cassian), 09 (biblioteka), 06 (mapa dryfu).
- Fala 2: scena 10 (cliffhanger), 07 (wieża), 12 (wędrówki, roboczo 8 najważniejszych spotkań, reszta zostaje szkicem).
- Scena 11 (prolog Pokątna) tylko jeśli limit pozwoli.
- Na końcu: jeden test obciążeniowy całości (`symulator-graczy`), poprawki najważniejszych błędów, `redaktor-ciaglosci`, statusy `recenzja`, krótkie podsumowanie dla MG z listą założeń roboczych.
- Webowy interfejs MG: osobno, po scenach (decyzja MG).

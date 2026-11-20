# Podsumowanie sesji 4 (2026-11-20)

Gałąź: `claude/zealous-fermi-4kxc8e`. Wszystko jest wypchnięte; ostatni commit ze scenami: `2476b72` (scena 04), potem commit z przygotowaniem nowej sesji.

## Cel i kontekst
Faza 3: sceny Scenariusza 1. MG zaakceptował treść sceny 01, a potem poprosił o przyspieszenie (sesja gry jutro, 2026-11-21, a on ma na projekt jeszcze kilka godzin). Przeszliśmy na **tryb przyspieszony** (`docs/TRYB-PRZYSPIESZONY.md`): bez pytań w trakcie, założenia robocze do skreślenia po lekturze.

## Co zrobiono
- **Scena 01** (śniadanie): pełny cykl (architekt → narrator → twórca NPC → dialogista → mechanik → symulator graczy → planista awaryjny → redaktor). Po teście obciążeniowym MG rozstrzygnął pięć kwestii (rejestr decyzji): zegarek Cassiana do zdobycia dopiero od sceny 04, szlaban tylko kolor, Dumbledore nieobecny, zaklęcia ujawniające nie wykrywają magii czasu (ZD-24). Rytm sceny przebudowany na kroki z odsyłaczami do tekstów, dialogów i testów. Status: `recenzja`.
- **Szkielety scen 02–12** (architekt). Nowa flaga `flaga.cassian-czujny`. Rytm sceny w tej samej konwencji kroków.
- **Sceny 02, 03, 05** napisane w całości (0 TODO, walidator czysty). **Scena 04** napisana w całości i też czysta, ale agent zatrzymał się na limicie, zanim oddał raport, więc nie znamy jego założeń roboczych ani ewentualnych próśb o zmiany we wspólnych plikach; trzeba ją przejrzeć (patrz niżej).
- Powiązanie kart: pole `sceny` w kartach NPC, miejsc i przedmiotów dla scen 01–05.
- Przygotowanie nowej sesji: modele w nagłówkach `.claude/agents/*.md`, `docs/WZORZEC-SCENY.md`, `docs/TRYB-PRZYSPIESZONY.md`, ten plik, aktualizacja `stan-kampanii.md`.

## Stan scen
| Scena | Stan |
|---|---|
| 01–03, 05 | gotowe jako szkice, pełne |
| 04 | pełna, bez raportu agenta; przejrzeć założenia (Drained od sceny 03, wyrwanie zegarka, liczby pokazu) |
| 06–12 | szkielety z planowanymi id, 13–21 TODO każdy, bez treści |

## Ustalenia potwierdzone
Rejestr decyzji w `04_kampania/stan-kampanii.md` jest źródłem prawdy (ostatnie wpisy z 2026-11-20: zegarek od sceny 04, Wren oddaje zegarek Cassianowi, szlaban kolor, Dumbledore nieobecny, ZD-24, tryb przyspieszony).

## Założenia robocze (nieskreślone przez MG)
Cała lista w `04_kampania/stan-kampanii.md`, sekcja „Założenia robocze”. Dla scen 01, 02, 03, 05 są już wpisane. Dla sceny 04 do dopisania po przeglądzie pliku.

## Otwarte
- **Limit planu.** Falę 2 (sceny 06–12, sześć agentów naraz) przerwał limit 5-godzinny; reset o 00:20 UTC (01:20 czasu polskiego). Żaden agent nie pracował od 20:49 UTC. Pliki 06–12 są nietknięte (agenci zdążyli tylko czytać).
- **Zużycie.** Jeden agent sceny to ok. 300 tysięcy tokenów, głównie przez czytanie całych scen-wzorców. Stąd `docs/WZORZEC-SCENY.md` i podział modeli.
- **Scena 12** roboczo skrócona do ok. 8 spotkań z 15; scena 11 (prolog) tylko jeśli limit pozwoli.
- Do sprawdzenia przez strażnika kanonu (tańszy Sonnet): obecność pani Pomfrey i pani Pince w 1969, McGonagall jako opiekunka Gryffindoru, nagłówek gazety „Charłacy maszerują pod Ministerstwem” (wymysł kampanii), imię Voldemort w ustach ucznia.
- Karty bez NPC potrzebnych w scenach: `npc.irytek` (kanon), `npc.ermentruda-hask` (nasze); w scenie 03 dwa bloki świadka są w ogrodzeniu `text`, do zmiany na `yaml` po utworzeniu kart.
- Webowy interfejs MG: osobno, po scenach (decyzja MG).

## Następne kroki (nowa sesja)
1. Przeczytać `CLAUDE.md`, `04_kampania/stan-kampanii.md`, ten plik, `docs/TRYB-PRZYSPIESZONY.md`.
2. Test doboru modeli (dwa tanie wywołania), `/usage`.
3. Przejrzeć scenę 04 (założenia, prośby o zmiany we wspólnych plikach), uzupełnić listę założeń roboczych.
4. Fala 1: sceny 08, 09, 06 (etap A Opus → etap B Sonnet; najwyżej 3 naraz).
5. Fala 2: sceny 10, 07, 12; potem 11 (jeśli limit pozwoli).
6. Test obciążeniowy całości, poprawki, redaktor, statusy `recenzja`, podsumowanie dla MG.

## Zdanie otwierające nową sesję
„Przeczytaj CLAUDE.md, 04_kampania/stan-kampanii.md i 99_robocze/summary-session#4.md, a potem wykonaj plan wznowienia z docs/TRYB-PRZYSPIESZONY.md. Pracuj bez pytań.”

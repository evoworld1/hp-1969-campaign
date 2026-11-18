# Workflow: jak pracujesz z zespołem agentów

Instrukcja dla Mistrza Gry. Wszystko odbywa się w aplikacji Claude, w zakładce **Code**, w sesjach w chmurze.

## Jednorazowe przygotowanie

1. Wgraj zawartość tego pakietu do repozytorium. Najprościej zrobić to sesją w chmurze z instrukcji `docs/START.md`.
2. Podziel PDF podręcznika Walkera (2. edycja, szkic z 02.04.2026, wersja angielska) na rozdziały poniżej 25 MB i wgraj je przez przeglądarkę do `00_zrodla/walker-2e-draft-2026-04/` („Add file → Upload files”). Dodaj też kartę postaci i listę zaklęć.
3. W aplikacji: **Code → selektor środowiska → New environment → zakładka Cloud**. Połącz GitHuba, wybierz repozytorium i kliknij **Add environment**.

## Rytm każdej sesji pracy

| # | Co robisz | Co dzieje się po stronie agentów |
|---|---|---|
| 1 | Nowa sesja (Cmd/Ctrl+N), środowisko Cloud, to repozytorium, tryb **Plan** | Reżyser czyta `CLAUDE.md` i `stan-kampanii.md` |
| 2 | Wpisujesz komendę, np. `/faza 1` albo `/scena s1.scena.03` | Reżyser przedstawia plan |
| 3 | Akceptujesz plan i przełączasz tryb na **Accept edits** (lub **Auto**) | Agenci pracują po kolei |
| 4 | Odpowiadasz na pytania twórcze | Bez Twojej odpowiedzi agenci nie zgadują |
| 5 | Przeglądasz zmiany w widoku **Changes** i komentujesz linie | Poprawki |
| 6 | Scalasz gałąź na GitHubie (**Merge**) | Treść trafia do `main` |
| 7 | Archiwizujesz sesję | Pamięć zostaje w plikach |

**Zasada:** jedna faza albo 1–3 sceny na sesję. Sprawdzaj wskaźnik użycia pod polem wpisywania, bo plan Pro dzieli limit między wszystkie sesje.

## Komendy

| Komenda | Co robi |
|---|---|
| `/faza N` | Uruchamia fazę N z planu poniżej |
| `/scena <id>` | Pełny cykl jednej sceny (wszyscy agenci po kolei) |
| `/symuluj <id>` | Tylko test obciążeniowy: dziwne decyzje graczy |
| `/przeglad <id lub folder>` | Kontrola spójności i walidator, bez zmian w treści |
| `/waliduj` | Sam walidator formatu |
| `/po-sesji <notatki>` | Po rozegranej sesji: aktualizacja stanu kampanii |
| `/podsumowanie-sesji` | Plik podsumowania rozmowy do `99_robocze/` przed nową sesją |

## Fazy

| Faza | Cel | Główni agenci | Koniec fazy, gdy… |
|---|---|---|---|
| **0. Weryfikacja** | Sprawdzenie, że szkielet działa | Reżyser, redaktor-ciaglosci | Walidator przechodzi, agenci widoczni, źródła na miejscu |
| **1. Fundamenty** | Kanon 1969, streszczenie zasad Walkera, ocena mechanik fabularnych, zarys kampanii na rok 1969 | straznik-kanonu, mechanik, architekt-fabuly | Pliki w `01_kanon/`, `02_zasady/`, `04_kampania/` mają status `recenzja` i zaakceptowałeś kluczowe decyzje |
| **2. Graf Scenariusza 1** | Lista scen z identyfikatorami, graf, flagi, NPC, miejsca, przedmioty (jako szkice) | architekt-fabuly, symulator-graczy, tworca-npc | Zaakceptowany `graf-scen.md`, flagi zdefiniowane, walidator przechodzi |
| **3. Sceny** | Pełna proza, dialogi, testy i ścieżki awaryjne, scena po scenie | wszyscy wg kolejności z `CLAUDE.md` | Każda scena ma status `gotowe` |
| **4. Kontrola całości** | Spójność, czas gry, handouty, indeks dla panelu | redaktor-ciaglosci, symulator-graczy, planista-awaryjny | Walidator czysty, `indeks.json` wygenerowany |
| **Po grze** | Dziennik sesji, aktualizacja stanu, wnioski do Scenariusza 2 | kronikarz, architekt-fabuly | Dziennik w `06_sesje/` |

## Twoje punkty decyzyjne

Agenci zatrzymują się i pytają, gdy decyzja zmienia fabułę. W każdej scenie decydujesz w dwóch momentach:
- **po raporcie symulatora graczy**, czyli które luki łatamy,
- **na końcu**, czyli czy scena jest `gotowe`.

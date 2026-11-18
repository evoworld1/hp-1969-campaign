---
description: "Pełny cykl pracy nad jedną sceną (wszyscy agenci po kolei)"
argument-hint: "<id sceny, np. s1.scena.03>"
---

Pracujemy nad sceną **$ARGUMENTS**.

1. Przeczytaj `04_kampania/stan-kampanii.md`, graf scenariusza i plik sceny (jeśli istnieje). Przedstaw plan w 3–5 punktach.
2. Po akceptacji uruchom agentów **w tej kolejności**. Każdemu przekaż identyfikator sceny i ścieżki plików, nie całe treści:
   1. `architekt-fabuly`: szkielet, flagi, rozgałęzienia główne
   2. `narrator-scen`: „Do odczytania” i „Dla MG”
   3. `tworca-npc`: karty brakujących lub niepełnych NPC
   4. `dialogista`: dialogi warunkowe
   5. `mechanik`: testy i statystyki
   6. `symulator-graczy`: raport obciążeniowy
3. **Zatrzymaj się** i pokaż mi 3–5 najważniejszych problemów z raportu symulatora. Zapytaj, które łatamy i jak (jeśli wymagają decyzji fabularnej).
4. Następnie:
   7. `planista-awaryjny`: „Gdy gracze zboczą” i plik awaryjne
   8. `redaktor-ciaglosci`: kontrola i walidator
5. Popraw zgłoszone błędy (przez właściwych agentów), ustaw status sceny na `recenzja` i zrób commit.
6. Pokaż mi krótkie podsumowanie i zapytaj, czy scena może dostać status `gotowe`.

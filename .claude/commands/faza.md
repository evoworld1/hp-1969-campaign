---
description: "Uruchom fazę projektu (0–4) według docs/WORKFLOW.md"
argument-hint: "<numer fazy>"
---

Uruchamiamy **fazę $ARGUMENTS** projektu.

1. Przeczytaj `CLAUDE.md`, `docs/WORKFLOW.md` (tabela „Fazy”) i `04_kampania/stan-kampanii.md`.
2. Sprawdź, czy poprzednia faza jest zamknięta. Jeśli nie, powiedz, czego brakuje, i zapytaj, czy kontynuować.
3. Przedstaw plan: zadania, agenci w kolejności, pliki do utworzenia lub zmiany i przewidywane pytania do mnie. Plan ma być krótki.
4. Po mojej akceptacji deleguj zadania subagentom **po kolei**. Pytania twórcze od agentów zbierz i zadaj mi je razem, ponumerowane, z wariantami i rekomendacją.
5. Na końcu: walidator, aktualizacja `04_kampania/stan-kampanii.md` (postęp, decyzje, otwarte pytania), commit i podsumowanie dla mnie w 5–10 punktach.

Jeśli faza jest duża, podziel ją na części i zaproponuj, co zrobić w tej sesji, a co w następnej.

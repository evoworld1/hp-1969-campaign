# Start: wgranie pakietu i Faza 0

## Krok 1. Wgraj archiwum do repozytorium
1. Otwórz repozytorium na github.com.
2. **Add file → Upload files**, przeciągnij `pakiet-startowy.zip` i kliknij **Commit changes**.
   Archiwum zawiera ukryty folder `.claude/`, dlatego wgrywamy plik ZIP, a nie rozpakowane foldery: system mógłby ten folder pominąć.

## Krok 2. Środowisko w chmurze (jeśli jeszcze go nie ma)
W aplikacji Claude: **Code → selektor środowiska → New environment → zakładka Cloud**. Połącz GitHuba, wybierz repozytorium i kliknij **Add environment**.

## Krok 3. Pierwsza sesja: rozpakowanie i weryfikacja
Nowa sesja w zakładce Code, środowisko Cloud, to repozytorium, tryb **Accept edits**. Wklej:

```
W katalogu głównym repozytorium jest plik pakiet-startowy.zip ze szkieletem projektu.
1. Rozpakuj go do katalogu głównego z nadpisaniem istniejących plików (użyj `unzip -o`, a jeśli go nie ma: `python3 -m zipfile -e pakiet-startowy.zip .`). Zachowaj ukryty folder .claude/.
2. Usuń pakiet-startowy.zip. Zastąp testowy README.md wersją z pakietu.
3. Przeczytaj CLAUDE.md i docs/WORKFLOW.md.
4. Uruchom `python3 narzedzia/walidator.py` (jeśli brakuje PyYAML: `pip install pyyaml`) i pokaż wynik.
5. Wypisz agentów z .claude/agents/ i komendy z .claude/commands/ z jednozdaniowym opisem każdego.
6. Sprawdź, co jest w 00_zrodla/walker-2e-draft-2026-04/, i zgłoś, czego brakuje.
7. Zaktualizuj 04_kampania/stan-kampanii.md: Faza 0 zakończona (albo lista problemów), zrób commit z opisem „Faza 0: szkielet projektu” i wypchnij gałąź.
Nie twórz żadnej treści kampanii.
```

## Krok 4. Scal i archiwizuj
Przejrzyj zmiany w widoku **Changes**, scal gałąź na GitHubie (**Merge**) i zarchiwizuj sesję.

## Krok 5. Podręcznik
Wgraj rozdziały PDF Walkera (każdy poniżej 25 MB) do `00_zrodla/walker-2e-draft-2026-04/` przez przeglądarkę.

## Krok 6. Dalej
Nowa sesja, tryb **Plan**, wpisz `/faza 1`.

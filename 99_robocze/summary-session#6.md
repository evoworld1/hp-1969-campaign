# Podsumowanie sesji 6 (2026-11-22)

Gałąź: `claude/amazing-einstein-oos3tv`. Stan: poprawki po pierwszej rozegranej sesji gry zacommitowane na gałęzi. Do sprawdzenia przez MG po publikacji panelu.

## Cel i kontekst
MG rozegrał pierwszą sesję gry (do sceny 05) i zgłosił 13 problemów:
- panel gracza: klik w zaklęcie nie otwierał kalkulatora, brak opisów i trudności zaklęć;
- niejasne rzuty w pojedynku (Duelling, którego postacie nie mają);
- brak statystyk NPC;
- nieczytelne dialogi (ściana tekstu, żargon flag);
- brak ciągłości między krokami scen;
- ściany tekstu w kartach NPC;
- Ctrl+K nie szukał zaklęć;
- scena 04 niejasna (ćwiczenie czy pojedynek);
- brak zasad ran i zdrowia;
- brak instrukcji krok po kroku dla starć;
- kalkulator testów zawsze ustawiał Bystrość;
- za łatwe testy ważnych odkryć (80–90%).

MG zamówił panel starcia: postać, zaklęcie, kość gracza, kość NPC, wynik i obrażenia.

## Co zrobiono
- **Statystyki NPC (mechanik):** wszystkie 20 kart w `03_postacie/npc/*.md` (cechy, umiejętności, zaklęcia, różdżki z premiami „Nazwa +N”, „Typowe rzuty”). Różdżka Cassiana ujednolicona: modrzew (Larch), poprawiona też w scenie 04. Filch według Walkera s. 123 (Wits 3 + Observation (Patrol) 6, suma 9 bez zmian); opisy rozkładu w scenach 09 i 10 do poprawy.
- **Panel MG** (`narzedzia/buduj-panel.py`, `panel/szablon/`): karta statystyk NPC; dialogi z „Powiedz na początek”, ponumerowanymi rozwijanymi reakcjami i schowanym „co wie i czego nie powie”; podgląd „Co dalej” pod krokiem; ramy „Start/Koniec/Dalej” (wyświetlane, gdy są w pliku sceny; jeszcze ich nie ma); przycisk panelu starcia w kroku ze starciem.
- **Panel starcia** (`panel/szablon/starcie.js`, moduł wspólny): presety, wybór postaci i przeciwnika, rodzaj (pokaz, pojedynek, walka), inicjatywa, ataki, test przeciwny, tory zdrowia 2×6 kółek, trafienia, rany, objaśnienie zdrowia bez punktów życia; kalkulator testu z cechą dobieraną do umiejętności; przypadkowy pojedynek z losowaniem.
- **Panel graczy** (`panel-gracze/szablon/gracz.js`, `narzedzia/buduj-panel-gracze.py`): trudność i rok przy zaklęciach, przycisk „Rzuć →”, zakładki „Test umiejętności” i „Pojedynek i starcie”. Gracz widzi tylko minimalny wynik kości, nie statystyki NPC.
- **Starcia:** `04_kampania/starcia.yaml` (16 presetów z instrukcją krok po kroku: 04, 07 ×3, 08 ×3, 09 ×4, 10, 12 ×2, przypadkowy pojedynek, bójka) i `04_kampania/przeciwnicy-losowi.yaml` (7 przeciwników: 2 łatwi, 2 średni, 2 trudni, 1 niemożliwy; opis neutralny).
- **Dialogi scen 05–08** (dialogista): bez żargonu (flagi, identyfikatory, skróty W…), każda reakcja z etykietą.
- **Trudności 7 testów w scenach 05–09** podniesione (np. 06 pomiar 6→15, 08 pierwsze spojrzenie 12→15, 05 zatrzymanie spłoszonego Ansela 12→15). Zsynchronizowano `04_kampania/miejsca/wieza-zegarowa.md`, `02_zasady/mechaniki-fabularne.md` i nagłówek sceny 05.

## Decyzje MG (wpisane do rejestru w `04_kampania/stan-kampanii.md`)
- Scena 04 zostaje (rozegrana); każde możliwe starcie ma w panelu instrukcję krok po kroku.
- Progi szans przeciętnej postaci: szczegóły 60–70%, smaczki 40–60%, kluczowe tropy 40–55%.
- Gracz widzi tylko minimalny wynik.
- 7 przeciwników losowych.
- Dialogi najpierw 05–08.
- Na końcu rozmowy: kradzież zegarka (ok. 17%) bez zmian; dłuższa rozmowa z Crake'iem przy sukcesie imponującym zostaje; przeciwnik „niemożliwy” opisany neutralnie (bez słowa „śmierciożerca” w 1969).

## Otwarte pytania
1. **Skradanie przed Filchem (sceny 09–10):** ok. 27% (Zora 64%, Nell 10%, Luna 6%). MG uważa to za „trochę ekstremalne”. Propozycja: wspólne skradanie (prowadzi najlepsza postać, +1 za każdego pomocnika, Walker s. 4) i/lub premia za ciemność albo Irytka. Decyzja MG.
2. **Remis przy kradzieży zegarka:** gdy obie strony wyrzucą tyle samo, w scenie 07 wygrywa Cassian, a w scenach 08 i 12 rzuca się jeszcze raz. Trzeba wybrać jedną zasadę (rekomendacja: zawsze powtórka).
3. **Odczytanie wzoru w scenie 06 przy 2 pomiarach:** trudność 15 (57%) czy 16 (47%).
4. **Wątpliwości dialogisty w scenach 05–08** (np. „W4.5”, „stopień 3” w scenie 06, Wren i skonfiskowany zegarek w 08).
5. Starsze pytania z księgi zaklęć (Protego, anachronizmy zaklęć itd.) nadal otwarte.

## Następne kroki
1. Publikacja panelu na Netlify z tej gałęzi (albo scalenie z `main`) i sprawdzenie przez MG.
2. Decyzje MG w pytaniach 1–3.
3. Dialogi scen 09–12 bez żargonu.
4. Ramy „Start/Koniec/Dalej” w krokach scen 05–12 (architekt-fabuly).
5. Poprawka opisów Filcha w scenach 09–10.
6. Kolejna sesja gry od sceny 05.

## Język sesji
Polski; terminy mechaniczne Walkera po angielsku.

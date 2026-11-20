---
id: miejsce.sala-zatrzymanych-godzin
typ: miejsce
tytul: "Sala Zatrzymanych Godzin (pracownia profesor Marrow)"
status: szkic
lokalizacja: "Hogwart, pod biblioteką; schody w dół za ścianą ostatniego rzędu Działu Ksiąg Zakazanych"
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.09 (pracownia, gablota), s1.scena.10 (próg, trzynasty raz)
sceny: []
tylko_mg: true
tagi: [s1, hogwart, pracownia, marrow, gablota, dziennik, wahadla, wymark-slad, kulminacja]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 09, wskazówki W6, W7, W9)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG)"
  - "archiwum: modul-s1-v0 (pomysł pracowni; nie fakt)"
aktualizacja: 2026-11-20
---
## Do odczytania

Schody schodzą w dół, wąskie i strome, a każdy stopień odzywa się cichym tyknięciem. Na dole jest długa, niska sala i cisza tak gęsta, że słyszycie własne serca. Na ścianach wiszą dziesiątki zegarów: kieszonkowe na gwoździkach, ścienne, kuchenne, jeden wielki jak drzwi. Wszystkie stoją. Każdy wskazuje inną godzinę. Powietrze jest suche i pachnie kredą, mosiądzem i zgaszoną świecą. Na kamiennej posadzce leży kurz, a w kurzu, od schodów w głąb sali, biegnie ścieżka czyichś niedawnych kroków.

## Dla MG

**Rola w Sesji 1.** Serce kulminacji (scena 09). Najwyżej dwie przeszkody obowiązkowe: drzwi na górze (W6, opisane przy [[miejsce.biblioteka]]) i **gablota z dziennikiem** (W7). Reszta to cena albo pokusa.
- **Ślady w kurzu:** kroki sprzed około trzech tygodni (Cassian) i, jeśli `flaga.s1-zegar-kradziezy` = 4, świeże sprzed godziny. Potwierdzają W4 bez rzutu.
- **Galeria wahadeł** (cena, nie bramka): przejście między zegarami a resztą sali, gdzie z sufitu zwisają rzędy wahadeł, każde w innym rytmie. Jeden test grupowy. Porażka kosztuje hałas, czas albo zadrapanie; przejście jest zawsze.
- **Ściana obliczeń:** kredowe równania, tarcze z trzynastoma kreskami, podpis Marrow. Obok jej podpisu drugie, mniejsze inicjały: „S.W.” (W9, `flaga.wymark-slad`). Nic więcej o nich nie wiadomo.
- **Zakazana lekcja** (opcjonalna pokusa): na fragmencie ściany instrukcja pożyczania chwili. Kto się jej nauczy, ustawia `flaga.pozyczona-chwila-poznana` (mechanika kandydat: Pożyczona Chwila).
- **Gablota** na końcu sali: szkło, mosiądz, w środku gruby dziennik w skórzanej oprawie ([[przedmiot.dziennik-marrow]]). Tabliczka ręką Marrow: „Co dane, można zatrzymać; co zabrane, trzeba zwrócić” (W7). Tempus na gablocie pokazuje lukę równo sześćdziesięciu minut. Otwiera się, gdy ktoś godzinę **odda** (`flaga.gablota-sposob`).
- [[npc.ansel-dray]] (jeśli jest): „Ona czegoś chce, ale nie jest chciwa”. Patrzy na podpis Marrow długo i nic nie mówi.

**Krótka wstawka do odczytania (gablota):**
> Szkło gabloty jest ciepłe, jakby ktoś przed chwilą na nim oparł dłoń. Dziennik w środku leży otwarty na pierwszej stronie, ale litery rozmywają się, gdy próbujecie je przeczytać. Na mosiężnej ramie, drobnym, pochyłym pismem: „Co dane, można zatrzymać; co zabrane, trzeba zwrócić”.

**Stan zmienny.**
- Jeśli `flaga.karta-u-graczy`: postacie mogą przyłożyć Kartę Pożyczającego do ściany obliczeń; margines „XIII” pasuje do kredowych tarcz (W6, W7).
- Gdy `flaga.s1-zegar-kradziezy` = 4: Cassian jest w środku i próbuje **zabrać** godzinę gablocie. Szkło matowieje, a on nie umie jej otworzyć (siatka bezpieczeństwa 6).
- Jeśli `flaga.gablota-sposob` = `wylamana`: dziennik częściowo rozmyty, hałas sięga biblioteki.
- Gdy dziennik przekracza próg sali (`flaga.dziennik-u-graczy`): wszystkie zatrzymane zegary drgną naraz, a w całym zamku wybija trzynasty raz (`flaga.trzynasta-wybila`, scena 10).
- Jeśli `flaga.dziennik-miejsce` = `w-pracowni`: gablota zostaje zamknięta; zegary dalej stoją (zahaczka na Sesję 2).

**Odczyt do mapy dryfu.** Nie dotyczy: tu czas stoi. Tempus formuje cyfry powoli, jakby przez wodę; przy gablocie pokazuje lukę sześćdziesięciu minut.

**Zagrożenia i kryjówki.**
- Galeria wahadeł: uderzenie wahadłem (zadrapanie, siniak; liczby ustala mechanik). Nie zabija.
- Pokusa ściany: nauczenie się pożyczania chwili to ryzyko moralne, nie fizyczne.
- Kryjówki: za wielkim zegarem jak drzwi, w niszy pod schodami. Wieczorem pani Pince tu nie zejdzie (nie widzi drzwi); nocą Filch też nie. Zagrożenie przychodzi dopiero po trzynastym biciu, na górze, w bibliotece.

### Do weryfikacji
- Całe miejsce jest nasze. Liczby wahadeł, gabloty i drzwi ustala mechanik.

## Ukryte

**DO DECYZJI MG: skąd Cassian wziął Kartę Pożyczającego, skoro dziennik jest w zamkniętej gablocie?** Graf mówi, że karta jest „wyrwana z dziennika”, a gablota otwiera się tylko po oddaniu godziny. Wariant roboczy w tej karcie: **(a) karta leżała luzem na pulpicie przy ścianie obliczeń**, wyrwana przez samą Marrow jako ostrzeżenie (albo w pośpiechu) i zostawiona poza gablotą. Pozostałe warianty w raporcie dla Reżysera. Do decyzji MG wolne miejsce na pulpicie opisujemy neutralnie: kurz z prostokątnym, czystym śladem po kartce.

Marrow pracowała tu nad daniną czasu i tu związała dziennik z gablotą, zanim odeszła. Znaczenie zatrzymanych zegarów to **propozycja robocza, nie decyzja MG** (dotyka tego, jak działa magia daniny): każdy zegar zatrzymał się w chwili, w której Klepsydra pobrała z zamku część zapłaty za powrót Ansela w 1951 roku. Jeśli MG woli, mogą być zwykłą kolekcją badawczą Marrow. W Sesji 1 nikt tego nie wyjaśnia.

## Testy

Terminy Walkera w testach: Speed (szybkość), Balance (zręczność ciała).

```yaml
test:
  id: miejsce.sala-zatrzymanych-godzin.test.galeria-wahadel
  opis: "Grupa przechodzi przez galerię wahadeł. Cena, nie bramka: przejście jest zawsze."
  kto: grupa
  rzut: "1D10 + Speed + Balance"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Przechodzą w rytmie wahadeł, cicho i bez strat."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "MG wybiera jedną cenę: hałas (pani Pince albo Filch na górze zaczyna nasłuchiwać), stracone minuty (bliżej zamknięcia biblioteki) albo zadrapanie dla jednej postaci."
      flagi_ustaw: []
```

Test otwarcia gabloty i wybór sposobu (`flaga.gablota-sposob`) należą do pliku sceny 09.

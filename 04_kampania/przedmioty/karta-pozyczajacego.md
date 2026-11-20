---
id: przedmiot.karta-pozyczajacego
typ: przedmiot
tytul: "Karta Pożyczającego"
status: szkic
rodzaj: "dokument magiczny (wyrwana karta z dziennika Marrow)"
wlasciciel_start: npc.cassian-vane
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.08 (Cassian oddaje albo traci kartę), s1.scena.09 (margines XIII, ściana obliczeń),
#   s1.scena.12 (dormitorium Slytherinu, siatka bezpieczeństwa 5)
sceny: []
tylko_mg: true
tagi: [s1, cassian, karta, marrow, pracownia, pokusa, w5, w6]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 08, W5.4, W6.2, siatka bezpieczeństwa 5)"
  - "03_postacie/npc/cassian-vane.md"
  - "04_kampania/miejsca/sala-zatrzymanych-godzin.md (sekcja Ukryte)"
aktualizacja: 2026-11-20
---
## Opis

Jedna karta grubego, pożółkłego pergaminu, złożona na czworo, z nierówną, poszarpaną lewą krawędzią: ktoś ją wyrwał. Zgięcia są wytarte do białości, jakby kartę często rozkładano i składano. Zapisana z obu stron drobnym, pochyłym pismem. Kto widział tabliczkę na gablocie w pracowni albo kredowy podpis na ścianie obliczeń, rozpozna tę samą rękę.

Na karcie:
- tekst o tym, jak „pożyczyć” chwilę z miejsca, w którym czas przecieka, przez zegar, który stanął; pisany jak notatka badacza, nie jak przepis,
- mały rysunek regału z przyciskiem do książek w kształcie klepsydry na końcu (W5.4),
- na marginesie, inną kreską, jakby dopisane później: „XIII. Zapukaj w godzinę, której nie ma” (W6.2),
- tekst na odwrocie urywa się na dole strony w pół zdania; ciąg dalszy był na następnej kartce, której tu nie ma.

Pergamin jest lekko ciepły, jak kamień, na którym leżało słońce. Pełny tekst dla graczy: `s1.handout.karta-pozyczajacego`.

## Działanie

**Co robi.** Karta uczy podbierać czas z wycieków Klepsydry przez zatrzymany zegarek kieszonkowy. Mówi tylko, jak **brać**. Nie mówi, jak oddawać, i nie ostrzega, że każda podebrana chwila to czyjaś stracona godzina. To właśnie przeraża Cassiana.

**Gdzie jest na starcie.** U [[npc.cassian-vane]], w podszewce jego kufra w dormitorium szóstego roku Slytherinu ([[miejsce.lochy-przejscie-slytherinu]]).

**Jak postacie mogą ją zdobyć w Sesji 1** (każda droga ustawia `flaga.karta-u-graczy`):
- Cassian oddaje ją po przegranym pojedynku, w targu „milczenie za kartę i lokalizację” albo z litości (scena 08).
- Postać ze Slytherinu wyjmuje ją z kufra Cassiana (siatka bezpieczeństwa 5; porażka budzi Cassiana i robi z niego czujnego przeciwnika).
- Jeśli Cassian zostanie ciężko ranny, kartę konfiskują nauczyciele, chyba że ktoś przejmie ją pierwszy.

**Co postacie mogą z nią zrobić.**
- **Znaleźć pracownię.** Rysunek regału prowadzi do ostatniego rzędu Działu Ksiąg Zakazanych (`flaga.lokalizacja-pracowni`, W5).
- **Otworzyć drzwi.** Margines „XIII” podpowiada, czym się je otwiera (W6).
- **Przyłożyć ją do ściany obliczeń** w [[miejsce.sala-zatrzymanych-godzin]]: znak „XIII” pasuje do kredowych tarcz z trzynastoma kreskami (W6, W7).
- **Dopasować krawędź do dziennika** (tylko w wariancie roboczym niżej): poszarpany brzeg pasuje do paska po wyrwanej kartce w [[przedmiot.dziennik-marrow]].
- **Spróbować jej użyć.** Zob. „DO DECYZJI MG” niżej.

## Mechanika

Bez statystyk. Odczytanie karty nie wymaga rzutu: tekst jest czytelny, tylko niepokojący. Rzut daje zrozumienie, co z niego wynika.

```yaml
test:
  id: przedmiot.karta-pozyczajacego.test.zrozumienie
  opis: "Postać studiuje kartę i próbuje zrozumieć, co właściwie opisuje."
  kto: jeden
  rzut: "1D10 + Knowledge + Magical Theory"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Postać rozumie, że karta opisuje branie czasu, a o oddawaniu nie ma ani słowa. Tekst urywa się tam, gdzie zaczynało się coś ważnego; reszta została w dzienniku."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Zawiłe notatki o zegarach i przeciekach. Rysunek regału i margines „XIII” są czytelne bez względu na wynik."
      flagi_ustaw: []
```

Objaśnienie: Knowledge (wiedza) to cecha, Magical Theory (teoria magii) to umiejętność (Walker 2e s. 12, 16). Liczby ustala mechanik.

## Dla MG

**DO DECYZJI MG: skąd Cassian ma kartę z dziennika zamkniętego w gablocie?** Graf mówi, że karta jest „wyrwana z dziennika”, a gablota otwiera się tylko komuś, kto godzinę oddaje. Wariant roboczy: **karta leżała luzem na pulpicie przy ścianie obliczeń, wyrwana przez samą Marrow** (jako ostrzeżenie albo w pośpiechu) i zostawiona poza gablotą. Na pulpicie w pracowni został w kurzu czysty prostokątny ślad po kartce (opis neutralny w [[miejsce.sala-zatrzymanych-godzin]]). Cassian, trzy tygodnie temu, chwycił ją i uciekł przed pułapkami. Do czasu decyzji MG trzymaj się tego wariantu i nie mów graczom, kto ją wyrwał.

**DO DECYZJI MG: czy postacie mogą użyć karty w Sesji 1?** Pytanie nowe, zgłoszone w raporcie dla Reżysera. Wariant roboczy: **karta działa tylko razem z zatrzymanym zegarkiem Cassiana** ([[przedmiot.zegarek-cassiana]]). Sama karta to w Sesji 1 wskazówka i pokusa. Jeśli postacie mają oba przedmioty i naprawdę chcą spróbować, to wejście w rozgałęzienie „moc” z przeglądu scenariusza: pierwsza próba wygląda niewinnie, a koszt wychodzi następnego ranka u kogoś z otoczenia. Jak działa danina czasu i kto płaci, nie jest jeszcze ustalone (kandydat: Rejestr Danin).

**Pismo jako wskazówka.** Ręka na karcie, na tabliczce gabloty i na ścianie obliczeń jest ta sama. Kto to zauważy, łączy kartę z Marrow bez rzutu, jeśli zna jej nazwisko (`flaga.marrow-imie-znane`).

**Powiązane flagi:** `flaga.karta-u-graczy`, `flaga.lokalizacja-pracowni`, `flaga.cassian-los`, `flaga.cassian-zdemaskowany`, `flaga.pracownia-otwarta`, `flaga.marrow-imie-znane`, `flaga.s1-wybor`.

**Powiązane obiekty:** [[npc.cassian-vane]], [[przedmiot.dziennik-marrow]], [[przedmiot.zegarek-cassiana]], [[miejsce.biblioteka]], [[miejsce.sala-zatrzymanych-godzin]], [[s1.handout.karta-pozyczajacego]].

### Do weryfikacji
- Całość jest nasza (`pewnosc: nasze`).
- Treść karty nie może zawierać działającej „receptury” mechanicznej, dopóki MG nie zdecyduje o daninie czasu i Pożyczonej Chwili.

---
id: przedmiot.karta-pozyczajacego
typ: przedmiot
tytul: "Karta Pożyczającego"
status: szkic
rodzaj: "dokument magiczny (karta wyrwana z zaklętej księgi w pracowni Marrow)"
wlasciciel_start: npc.cassian-vane
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.08 (Cassian oddaje albo traci kartę), s1.scena.09 (margines XIII, dopisek, księga, ściana obliczeń),
#   s1.scena.12 (dormitorium Slytherinu, siatka bezpieczeństwa 5)
sceny: []
tylko_mg: true
tagi: [s1, cassian, karta, ksiega, marrow, pracownia, pokusa, w5, w6, w7]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG, decyzje MG 2026-11-20)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 08, scena 09, W5.4, W6.2, W7.2, siatka bezpieczeństwa 5)"
  - "03_postacie/npc/cassian-vane.md"
  - "04_kampania/przedmioty/zakleta-ksiega.md"
aktualizacja: 2026-11-20
---
## Opis

Jedna karta grubego pergaminu w kolorze starej kości, złożona na czworo, z nierówną, poszarpaną lewą krawędzią: ktoś ją wyrwał. Zgięcia są wytarte do białości, jakby kartę często rozkładano i składano. W jednym rogu brązowy ślad przypalenia. Pergamin jest lekko ciepły, jak kamień, na którym leżało słońce, i w ciemności bardzo słabo, ledwie dostrzegalnie, świeci na niebiesko przy brzegach.

Na karcie są dwie ręce:
- **Tekst główny** pisany gęstym, obcym, bardzo starym pismem (tym samym co w [[przedmiot.zakleta-ksiega]]): jak „pożyczyć” chwilę z miejsca, w którym czas przecieka, przez zegar, który stanął. Brzmi jak notatka badacza, nie jak przepis. Na odwrocie tekst urywa się na dole strony w pół zdania; ciąg dalszy był na następnej stronie księgi.
- **Dopiski drobnym, pochyłym pismem** (ręka Marrow, ta sama co tabliczka na gablocie i kredowy podpis na ścianie obliczeń):
  - mały rysunek regału z przyciskiem do książek w kształcie klepsydry na końcu (W5.4),
  - na marginesie z przodu: „XIII. Zapukaj w godzinę, której nie ma” (W6.2),
  - na marginesie odwrocia, wyblakłym atramentem, krótki dopisek: zasada działa w obie strony; co da się wziąć, da się też oddać (W7.2). Czytelny bez testu.

Pełny tekst dla graczy: `s1.handout.karta-pozyczajacego`.

## Działanie

**Pochodzenie.** Około trzech tygodni przed sesją [[npc.cassian-vane]] trafił do pracowni Marrow, nie umiał rozwiązać zagadek zaklętej księgi i wyrwał z niej tę kartę. Obudził pełne zabezpieczenia i ledwo uciekł; przypalony róg karty i oparzona dłoń Cassiana to ślady tej nocy.

**Co robi.** Karta uczy podbierać czas z wycieków Klepsydry. **Działa tylko razem z zatrzymanym zegarkiem Cassiana** ([[przedmiot.zegarek-cassiana]]; decyzja MG 2026-11-20). Sama karta to w Sesji 1 wskazówka i pokusa. Tekst główny mówi tylko, jak **brać**, i nie ostrzega, że każda podebrana chwila to czyjaś stracona godzina. Dopisek o oddawaniu jest, ale Cassian nie połączył go z gablotą i nie wie, jak go użyć.

**Gdzie jest na starcie.** U Cassiana, w podszewce jego kufra w dormitorium szóstego roku Slytherinu ([[miejsce.lochy-przejscie-slytherinu]]).

**Jak postacie mogą ją zdobyć w Sesji 1** (każda droga ustawia `flaga.karta-u-graczy`):
- Cassian oddaje ją po przegranym pojedynku, w targu „milczenie za kartę i lokalizację” albo z litości (scena 08).
- Postać ze Slytherinu wyjmuje ją z kufra Cassiana (siatka bezpieczeństwa 5; porażka budzi Cassiana i robi z niego czujnego przeciwnika).
- Jeśli Cassian zostanie ciężko ranny, kartę konfiskują nauczyciele, chyba że ktoś przejmie ją pierwszy.

**Co postacie mogą z nią zrobić.**
- **Znaleźć pracownię.** Rysunek regału prowadzi do ostatniego rzędu Działu Ksiąg Zakazanych (`flaga.lokalizacja-pracowni`, W5).
- **Otworzyć drzwi.** Margines „XIII” podpowiada, czym się je otwiera (W6).
- **Otworzyć gablotę.** Dopisek na odwrocie to jedna z trzech głównych dróg do W7: gablota otwiera się, gdy ktoś godzinę odda.
- **Przyłożyć ją do ściany obliczeń** w [[miejsce.sala-zatrzymanych-godzin]]: znak „XIII” pasuje do kredowych tarcz z trzynastoma kreskami.
- **Dopasować krawędź do księgi.** Poszarpany brzeg pasuje do paska po wyrwanej karcie w grzbiecie zaklętej księgi (bez rzutu).
- **Spróbować zwrócić ją do księgi.** Wariant roboczy: w Sesji 1 księga jej nie przyjmuje; łuna jaśnieje, karta na chwilę robi się ciepła jak dłoń. Przyłożenie karty nie liczy się jako dotknięcie księgi i nie podnosi zabezpieczeń (wariant roboczy Twórcy NPC, do potwierdzenia).
- **Użyć jej.** Tylko razem z zegarkiem Cassiana. Postacie, które użyją obu, wchodzą w zakończenie „moc” z przeglądu scenariusza: pierwsze użycia wyglądają niewinnie, koszt wychodzi następnego ranka u kogoś z otoczenia (kandydat: Rejestr Danin).

## Mechanika

Bez statystyk. Odczytanie dopisków nie wymaga rzutu. Rzut daje zrozumienie, co wynika z tekstu głównego.

```yaml
test:
  id: przedmiot.karta-pozyczajacego.test.zrozumienie
  opis: "Postać studiuje kartę i próbuje zrozumieć, co właściwie opisuje."
  kto: jeden
  rzut: "1D10 + Knowledge + Magical Theory"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Postać rozumie, że tekst główny opisuje tylko branie czasu i urywa się tam, gdzie zaczynało się coś ważnego; reszta została w księdze. Rozumie też, że dopisek na odwrocie to nie ozdobnik: ktoś, kto znał ten tekst, upierał się, że działa w obie strony."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Zawiłe notatki o zegarach i przeciekach w obcym piśmie. Rysunek regału, margines „XIII” i dopisek na odwrocie są czytelne bez względu na wynik."
      flagi_ustaw: []
```

Objaśnienie: Knowledge (wiedza) to cecha, Magical Theory (teoria magii) to umiejętność (Walker 2e s. 12, 16). Liczby ustala mechanik.

## Dla MG

**Dwie ręce na karcie (wariant roboczy Twórcy NPC).** Tekst główny pochodzi od nieznanego autora księgi; rysunek regału, „XIII” i dopisek o oddawaniu to uwagi Marrow na marginesach. To wyjaśnia, dlaczego na karcie z cudzej księgi jest jej pismo i rysunek jej regału. Kto zna nazwisko Marrow (`flaga.marrow-imie-znane`) i widział tabliczkę albo ścianę obliczeń, łączy dopiski z nią bez rzutu.

**Czego nie mówić graczom.** Kim był autor tekstu głównego. Jak dokładnie działa danina czasu. Treść karty nie może zawierać działającej „receptury” mechanicznej.

**Powiązane flagi:** `flaga.karta-u-graczy`, `flaga.zegarek-cassiana`, `flaga.lokalizacja-pracowni`, `flaga.gablota-sposob`, `flaga.ksiega-zabezpieczenia`, `flaga.cassian-los`, `flaga.cassian-zdemaskowany`, `flaga.pracownia-otwarta`, `flaga.marrow-imie-znane`, `flaga.s1-wybor`.

**Powiązane obiekty:** [[npc.cassian-vane]], [[przedmiot.zakleta-ksiega]], [[przedmiot.dziennik-marrow]], [[przedmiot.zegarek-cassiana]], [[miejsce.biblioteka]], [[miejsce.sala-zatrzymanych-godzin]], [[s1.handout.karta-pozyczajacego]].

### Do weryfikacji
- Całość jest nasza (`pewnosc: nasze`).
- Dwie ręce na karcie (autor księgi i Marrow), przypalony róg i słaba niebieska poświata to szczegóły Twórcy NPC; do potwierdzenia przez MG.
- Zwrot karty do księgi: pytanie do MG (graf Sesji 1, „Otwarte po fazie B2b”, pytanie 3).

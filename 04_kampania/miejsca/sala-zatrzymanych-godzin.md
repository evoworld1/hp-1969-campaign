---
id: miejsce.sala-zatrzymanych-godzin
typ: miejsce
tytul: "Sala Zatrzymanych Godzin (pracownia profesor Marrow)"
status: szkic
lokalizacja: "Hogwart, pod biblioteką; schody w dół za ścianą ostatniego rzędu Działu Ksiąg Zakazanych"
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.09 (pracownia, księga, gablota), s1.scena.10 (próg, trzynasty raz)
sceny: []
tylko_mg: true
tagi: [s1, hogwart, pracownia, marrow, ksiega, gablota, notatnik, wahadla, wymark-slad, kulminacja, w10]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 09, siatka bezpieczeństwa 8, wskazówki W6, W7, W9, W10)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG, decyzje MG 2026-11-20)"
  - "archiwum: modul-s1-v0 (pomysł pracowni; nie fakt)"
aktualizacja: 2026-11-20
---
## Do odczytania

Schody schodzą w dół, wąskie i strome, a każdy stopień odzywa się cichym tyknięciem. Na dole jest długa, niska sala i cisza tak gęsta, że słyszycie własne serca. Na ścianach wiszą dziesiątki zegarów: kieszonkowe na gwoździkach, ścienne, kuchenne, jeden wielki jak drzwi. Wszystkie stoją. Każdy wskazuje inną godzinę. Powietrze jest suche i pachnie kredą, mosiądzem i zgaszoną świecą. Pośrodku sali, nad rzeźbionym drewnianym pulpitem, wisi w powietrzu otwarta księga, a wokół niej oddycha powoli niebieskawe światło. To jedyne światło, które nie pochodzi od was. Na kamiennej posadzce leży kurz, a w kurzu, od schodów w głąb sali, biegnie ścieżka czyichś niedawnych kroków.

## Dla MG

**Rola w Sesji 1.** Serce kulminacji (scena 09). Najwyżej dwie przeszkody obowiązkowe: drzwi na górze (W6, opisane przy [[miejsce.biblioteka]]) i **gablota z notatnikiem** (W7). Reszta to cena albo pokusa. Zaklęta księga **nie jest przeszkodą obowiązkową**.

**Układ sali (od schodów w głąb).**
- **Zatrzymane zegary** na ścianach, przy schodach i wzdłuż całej sali. Każdy stoi na innej godzinie.
- **Galeria wahadeł** (cena, nie bramka): przejście, w którym z sufitu zwisają rzędy wahadeł, każde w innym rytmie. Jeden test grupowy. Porażka kosztuje hałas, czas albo zadrapanie; przejście jest zawsze.
- **Pulpit z zaklętą księgą** pośrodku sali ([[przedmiot.zakleta-ksiega]]): ozdobny drewniany pulpit czytelniczy, nad nim księga w niebieskawej łunie. W grzbiecie poszarpany pasek po wyrwanej karcie. Pod pulpitem osmalone kamienie i rozmazane, biegnące ślady w kurzu (ucieczka Cassiana, W10.1). Patrzenie jest bezpieczne; dotyk budzi stopniowane zabezpieczenia (niżej).
- **Ściana obliczeń:** kredowe równania, tarcze z trzynastoma kreskami, podpis Marrow. Obok jej podpisu drugie, mniejsze inicjały: „S.W.” (W9, `flaga.wymark-slad`). Nic więcej o nich nie wiadomo.
- **Zakazana lekcja** (opcjonalna pokusa): na fragmencie ściany instrukcja pożyczania chwili. Kto się jej nauczy, ustawia `flaga.pozyczona-chwila-poznana` (mechanika kandydat: Pożyczona Chwila). Roboczo ta wiedza też działa dopiero z zatrzymanym zegarem, czyli zegarkiem Cassiana (graf, „Do weryfikacji”).
- **Gablota** na końcu sali: szkło, mosiądz, w środku gruby notatnik w skórzanej oprawie ([[przedmiot.dziennik-marrow]]). Tabliczka ręką Marrow: „Co dane, można zatrzymać; co zabrane, trzeba zwrócić” (W7.1). Tempus na gablocie pokazuje lukę równo sześćdziesięciu minut. Otwiera się, gdy ktoś godzinę **odda** (`flaga.gablota-sposob`). To osobny mechanizm: wyłamanie gabloty nie budzi zabezpieczeń księgi.

**Ślady w kurzu:** kroki sprzed około trzech tygodni (Cassian: wejście spokojne, powrót biegiem, poślizgi przy pulpicie) i, jeśli `flaga.s1-zegar-kradziezy` = 4, świeże sprzed godziny. Potwierdzają W4 bez rzutu.

[[npc.ansel-dray]] (jeśli jest): przy gablocie „Ona czegoś chce, ale nie jest chciwa” i powiedzonko pani profesor o szafce, która „najpierw chce dostać” (W7.3). Patrzy na podpis Marrow długo i nic nie mówi. Do pulpitu nie podchodzi bliżej niż na kilka kroków; boi się łuny i nie wie dlaczego. Gdy ktoś dotyka księgi drugi raz, krzyczy, żeby przestali (W10.3).

**Krótka wstawka do odczytania (gablota):**
> Szkło gabloty jest ciepłe, jakby ktoś przed chwilą oparł na nim dłoń. Notatnik w środku leży otwarty na pierwszej stronie, ale litery rozmywają się, gdy próbujecie je przeczytać. Tylko rysunek na marginesie stoi spokojnie: dłoń, która wkłada coś do klepsydry, i obok otwarta kłódka. Na mosiężnej ramie, drobnym, pochyłym pismem: „Co dane, można zatrzymać; co zabrane, trzeba zwrócić”.

**Stan zmienny.**
- Jeśli `flaga.karta-u-graczy`: krawędź Karty Pożyczającego pasuje do paska w grzbiecie księgi; margines „XIII” pasuje do kredowych tarcz na ścianie obliczeń (W6); dopisek na odwrocie karty prowadzi do gabloty (W7.2).
- `flaga.ksiega-zabezpieczenia` (szczegóły w [[przedmiot.zakleta-ksiega]]):
  - *1:* zatrzymane zegary tykają raz, wszystkie naraz; łuna ciemnieje.
  - *2:* wahadła w galerii same zaczynają się kołysać; hałas.
  - *3:* zegary ruszają wszystkie naraz, sala bije trzynaście uderzeń, po trzynastym schody się zamykają. Ucieczka przez galerię wahadeł (teraz tną szybko) i po tykających schodach. Kto nie zdąży: siatka bezpieczeństwa 8 (`flaga.ksiega-zlapani`).
  - *Po ucieczce:* po kilku minutach wszystko wraca do bezruchu; zegary znów stoją, każdy na swojej dawnej godzinie.
- Gdy `flaga.s1-zegar-kradziezy` = 4: Cassian jest w środku i próbuje **zabrać** godzinę gablocie. Szkło matowieje, a on nie umie jej otworzyć (siatka bezpieczeństwa 6). Od księgi trzyma się z daleka.
- Jeśli `flaga.gablota-sposob` = `wylamana`: notatnik częściowo rozmyty, hałas sięga biblioteki.
- Gdy notatnik przekracza próg sali (`flaga.dziennik-u-graczy`): wszystkie zatrzymane zegary drgną naraz, a w całym zamku wybija trzynasty raz (`flaga.trzynasta-wybila`, scena 10).
- Jeśli `flaga.dziennik-miejsce` = `w-pracowni`: gablota zostaje zamknięta; zegary dalej stoją (zahaczka na Sesję 2).

**Odczyt do mapy dryfu.** Nie dotyczy: tu czas stoi. Tempus formuje cyfry powoli, jakby przez wodę; przy gablocie pokazuje lukę sześćdziesięciu minut.

**Zagrożenia i kryjówki.**
- Galeria wahadeł: uderzenie wahadłem (zadrapanie, siniak; liczby ustala mechanik). Nie zabija.
- Zaklęta księga: porażenie przy dotyku, przy próbie wyrwania kartki pełne zabezpieczenia i ucieczka. Ciężkie obrażenia i zaklęcie zapomnienia tylko dla tych, którzy nie zdążą; śmierć wyłącznie jako świadomy wybór gracza po dwóch ostrzeżeniach poza fikcją (zob. [[przedmiot.zakleta-ksiega]]; siatka bezpieczeństwa 8).
- Pokusa ściany: nauczenie się pożyczania chwili to ryzyko moralne, nie fizyczne.
- Kryjówki: za wielkim zegarem jak drzwi, w niszy pod schodami. Filch tu nie zejdzie (nie widzi drzwi). Zagrożenie z góry przychodzi dopiero po trzynastym biciu albo po hałasie zabezpieczeń księgi.

### Do weryfikacji
- Całe miejsce jest nasze. Liczby zabezpieczeń i ucieczki są w karcie [[przedmiot.zakleta-ksiega]]; trudność galerii wahadeł do ustalenia (propozycja mechanika: Tricky, 12).

## Ukryte

**Skąd Cassian ma Kartę Pożyczającego (decyzja MG 2026-11-20).** Około trzech tygodni temu Cassian zszedł tu sam, nie umiał rozwiązać zagadek zaklętej księgi i wyrwał z niej kartę. Obudził pełne zabezpieczenia i ledwo uciekł; osmalone kamienie pod pulpitem i biegnące ślady w kurzu to pamiątka tej nocy. Notatnik w gablocie jest cały.

**Zatrzymane zegary to zapłaty (decyzja MG 2026-11-20).** Każdy zegar stanął w chwili, w której w 1951 roku Klepsydra pobrała z zamku część „zapłaty” za trwanie Ansela. Wiszą tu jak rachunki, których nikt nie spłacił. W Sesji 1 nikt tego graczom nie wyjaśnia; zegary tykają tylko przy zabezpieczeniach księgi i przy progu, który przekracza notatnik.

Marrow pracowała tu nad Klepsydrą, studiując zaklętą księgę, i tu związała notatnik z gablotą, zanim odeszła.

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
      efekt: "MG wybiera jedną cenę: hałas (Filch na górze zaczyna nasłuchiwać), stracone minuty (bliżej kolejnego przejścia Filcha) albo zadrapanie dla jednej postaci."
      flagi_ustaw: []
```

Test ucieczki przed pełnymi zabezpieczeniami księgi (szkielet): [[przedmiot.zakleta-ksiega]]. Test otwarcia gabloty i wybór sposobu (`flaga.gablota-sposob`) należą do pliku sceny 09.

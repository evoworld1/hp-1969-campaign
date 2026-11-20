# Podsumowanie sesji 3 (2026-11-20)

Gałąź: `claude/wizardly-cerf-9smwos`. Ostatni commit z treścią przed tym podsumowaniem: 293f26d.

## Cel i kontekst
Dokończenie Fazy 2 (graf Scenariusza 1). W tej sesji zrobiliśmy część B2a (karty postaci niezależnych) i B2b (karty miejsc, przedmiotów i nagłówki handoutów). Mistrz Gry zaakceptował graf, więc Faza 2 jest zamknięta.

## Co zrobiono i z jakim wynikiem
- **tworca-npc (B2a):** 19 szkiców kart postaci niezależnych w `03_postacie/npc/`.
  - 8 pełnych kart: ansel-dray, cassian-vane, silas-wymark, hollis-crake, thaddeus-wren, nauczyciel-astronomii (prof. Ada Fairweather), tobias-quill, rosalind-teague.
  - 11 krótkich kart.
  - Przegląd zrobił redaktor-ciaglosci, poprawki wprowadził Reżyser.
- **narrator-scen (B2b):** 14 kart miejsc w `04_kampania/miejsca/`.
- **tworca-npc (B2b):** karty przedmiotów w `04_kampania/przedmioty/` oraz nagłówki 4 handoutów w `05_scenariusze/s1-godzina-ktorej-nie-bylo/handouty/`. Treść handoutów powstanie w Fazie 3.
- **architekt-fabuly:** wprowadził do grafu zaklętą księgę, trzy drogi do wskazówki o gablocie i nocne wejście do biblioteki.
- **mechanik:** nowy plik `02_zasady/nagrody-z-teaserow.md` (zaklęcie RETRORSUM i zdolność „Oko, które dostrzega ukryte”) oraz liczby dla zabezpieczeń księgi, ucieczki i zniszczenia zegarka.
- **Odwołania:** usunięto przepustkę Flitwicka, flagi `biblioteka-legalnie` i `przepustka-flitwicka` oraz kartę przepustki.
- **Nowe flagi:** `ksiega-zabezpieczenia`, `ksiega-zlapani`.
- Streszczenie grafu dla Mistrza Gry: `99_robocze/streszczenie-grafu-s1.md`.

## Ustalenia potwierdzone (źródło: `04_kampania/stan-kampanii.md`, rejestr decyzji z 2026-11-20, od wiersza „Astronomii uczy prof. Ada Fairweather” do końca)

**Postacie niezależne**
1. Astronomii uczy prof. Ada Fairweather (około 30 lat). W 1951 była pierwszoroczną z rocznika Ansela. Nie pamięta go, ale na zdjęciu klasy jest puste miejsce.
2. Tobiasa Quilla Mistrz Gry przed sesją przypisuje do domu postaci z najmniejszą liczbą znajomych (albo najbardziej nieśmiałego gracza).
3. Wymark w Scenariuszu 1 to tylko ślad: Fairweather wspomina „wysokiego prefekta, którego wołaliśmy Bocian”.
4. Ansela pamiętają Gruby Mnich (w Scenariuszu 1 mgliście) i Szara Dama (w Scenariuszu 2 opowiada o 1951).
5. Ansel zginął jesienią 1951 (rok szkolny 1951/52). Wymark był wtedy prefektem 7. roku.
6. Przyjęte wersje robocze: Wymark z Ravenclawu (około 35 lat), córka Crake'a to Nora, zegarek Cassiana jest po dziadku, Wren odszedł z biura aurorów po oskarżeniu niewinnego, Barnaby Finch jest z Gryffindoru.

**Księga, notatnik, karta i zegary**

7. W pracowni Marrow jest zaklęta księga nieznanego autora (`przedmiot.zakleta-ksiega`). Nie da się jej zabrać ani przewracać stron. Odblokowują ją zagadki (Scenariusz 2 i później).
8. Zabezpieczenia księgi mają 3 poziomy. Przy wyrywaniu kartki drużyna może uciec, zanim pracownia wybije 13 uderzeń (siatka bezpieczeństwa 8). Śmierć grozi tylko po dwóch ostrzeżeniach. Próba wyrwania zostawia w dłoni róg kartki z jednym znakiem.
9. Notatnik Marrow (`przedmiot.dziennik-marrow`, identyfikator bez zmian) leży w gablocie. Księga i notatnik są sobie nawzajem potrzebne. Gablota otwiera się po oddaniu godziny, a do wskazówki o tym prowadzą trzy drogi (W7).
10. Kartę Pożyczającego wyrwał z księgi Cassian. Działa tylko z jego zegarkiem. Zwrot karty księdze: w Scenariuszu 1 łuna jaśnieje, w Scenariuszu 2 odsłania pierwszą zagadkę.
11. Zatrzymane zegary w pracowni to „zapłaty” z 1951 za trwanie Ansela. Zniszczenie zegarka Cassiana: Ansel migocze i wracają godziny innych ofiar, ale nie godzina drużyny.

**Teasery**

12. RETRORSUM to prawdziwe cofnięcie czasu, które pamięta tylko rzucający. Gracz mówi, jak daleko się cofa, a Mistrz Gry to potwierdza albo sam wybiera chwilę. Rzucający odzyskuje punkty i akcje i dostaje pewny sukces.
13. Pierwsze użycie w sesji zostawia piętno na różdżce bez skutków. Drugie rzuca klątwę „Ten drugi” i zostawia siwe pasmo włosów. Trzecie niszczy różdżkę i zostawia blizny, a zaklęcie wtedy nie działa.
14. Oko działa raz. Niewykorzystane przechodzi na Scenariusz 2.
15. Gracz 1 ma oba teasery, gracze 2 i 3 tylko Oko. Ostatecznie decyduje Mistrz Gry w dniu sesji.

**Biblioteka**

16. Do Działu Ksiąg Zakazanych i pracowni wchodzi się tylko nocą, bez zgody. Legalne wejście jest odwołane.
17. Gdy Filch złapie całą drużynę (siatka 9): szlaban, a po północy Ansel ich budzi i próbują drugi raz tej samej nocy.

**Zamknięcie fazy**

18. Graf Scenariusza 1 jest zaakceptowany, Faza 2 zamknięta.

## Lekcja procesu
Mistrz Gry prosi, żeby przy każdej prośbie o akceptację dostawał link do krótkiego streszczenia albo pliku. Nie zadajemy pytań o rzeczy, których Mistrz Gry nie widział.

## Otwarte hipotezy
- Oddanie godziny w Scenariuszu 3 *może* odebrać Anselowi kotwicę (wniosek architekta, nie decyzja Mistrza Gry).
- Klepsydra z lekcji Fairweather zostaje niejasna do Scenariusza 2.

## Aktualny stan i następne kroki
Następna sesja: Faza 3, komenda `/scena` dla sceny 01 (Śniadanie w Wielkiej Sali).

Zadania odłożone do Fazy 3:
- **mechanik:**
  - stan Drained (wyczerpanie) na lekcji Obrony;
  - rdzeń ze smoczego serca a drewno dębu (s. 29);
  - zasada domowa ZD-09 (wynik 2 i 3 razy wyższy od trudności);
  - zdolności Cassiana;
  - nawyki Rosalind i Barnaby'ego;
  - obchód Filcha;
  - próg pogawędki z Crake'iem;
  - liczby dla Ansela;
  - zasady niszczenia rzeczy uderzeniem i celowania w mały przedmiot;
  - galeria wahadeł (propozycja: trudność Tricky 12).
- **straznik-kanonu:**
  - pani Pomfrey, Slughorn i Fawkes w 1969;
  - klepsydry punktów domów w kanonie;
  - czy w 1951 Dumbledore uczył Transmutacji, a dyrektorem był Dippet.
- **architekt-fabuly:** odczyty dryfu czasu dla miejsc (mapa w scenie 06).

## Otwarte pytania
- Kto dostaje RETRORSUM: Mistrz Gry rozstrzyga w dniu sesji.
- Autor księgi i jej zagadki: Scenariusz 2 i później.

## Język sesji
Polski. Terminy mechaniczne Walkera zostają w oryginale angielskim.

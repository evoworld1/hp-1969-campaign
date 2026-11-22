# Klątwa Luny w Dziale Ksiąg Zakazanych: propozycja do wyboru przez MG

Stan: propozycja mechanika z 2026-11-22. Scena 09 (`05_scenariusze/s1-godzina-ktorej-nie-bylo/sceny/09-biblioteka-sala-zatrzymanych-godzin.md`) NIE została zmieniona. Po wyborze MG wprowadzę wybrany wariant do sceny jako blok `test` i zapis na karcie Luny.

Decyzja MG, od której wychodzę: Luna, jeśli zdecyduje się na lekturę, może w Dziale Ksiąg Zakazanych poznać jedno silniejsze zaklęcie czarnej magii, po trudnym teście, jako zaklęcie nieopanowane (wszystkie kratki puste, z trudnością startową na karcie).

Wszystkie liczby Luny pochodzą z karty v2 (`03_postacie/gracze/luna-lovedog.yaml`): Knowledge 6, Focus 5, Wits 4, Dark Arts 3, Archivist 2, Charms 4, D.A.D.A. 4, różdżka z Curses +1.

## A. Test

**Fikcja.** To zwykła zakazana książka z półki Działu Ksiąg Zakazanych (nie zaklęta księga Marrow z kroku 6 sceny: tamta ma uczyć tylko ostrzeżenia i nie może być źródłem klątwy). Luna czyta ją, gdy reszta pilnuje liny i drzwi. Najlepsze miejsce w scenie: zaraz po przejściu za linę (tekst 2), przed ostatnim rzędem.

**Rekomendowany test: Knowledge + Dark Arts przeciw Challenging (15).**

```yaml
test:
  id: s1.scena.09.test.zakazana-lektura-luny
  opis: "Postać z Dark Arts czyta klątwę w zakazanej książce i próbuje ją zrozumieć na tyle, by ją zapisać w pamięci. Jedna próba trwa 15 minut."
  kto: jeden
  rzut: "1D10 + Knowledge + Dark Arts"
  trudnosc: "Challenging (15)"
  modyfikatory:
    - warunek: "Czyta dwa razy dłużej (30 minut zamiast 15)"
      wartosc: "+2 do rzutu"
    - warunek: "Stan umysłu postaci (Rattled +1, Dazed +2, Drained +3; s. 35)"
      wartosc: "+1 do trudności"
  wyniki:
    - wynik: sukces
      efekt: "Poznaje wybrane zaklęcie: zapisuje je na karcie jako nieopanowane, z trudnością startową (wszystkie kratki puste)."
    - wynik: porazka
      efekt: "Formuła nie składa się w całość. Licznik hałasu +1 (książka szepcze albo trzaska okładką) i ślad dla pani Pince (książka odłożona nie na swoje miejsce)."
    - wynik: porazka-kompromitujaca
      efekt: "Książka reaguje na złe czytanie: krzyk albo ugryzienie kartek. Licznik hałasu +2, ślad dla pani Pince, a czytająca jest Rattled do końca sceny."
```

**Dlaczego Knowledge + Dark Arts.** Czytanie i rozumienie to Knowledge (s. 12), a Dark Arts jest wiedzą o tej konkretnej dziedzinie (s. 22). Rzut z Focus + Dark Arts byłby rzutem rzucania, a tu Luna jeszcze nie rzuca. Rzut Knowledge + Archivist (s. 31) służy do znalezienia pozaprogramowego zaklęcia w bibliotece; tu zaklęcie jest już znalezione, więc Archivist nie jest potrzebny.

**Dlaczego 15, a nie 18.** Walker nazywa próg 15 „Challenging” (trudny), a 18 „Ambitious” (ambitny). MG chce „trudnego testu”, więc 15 jest dosłownym tłumaczeniem. Wariant 18 jest możliwy, ale Luna ma wtedy tylko 20 procent (i 40 procent przy dłuższej lekturze), co przy koszcie czasu i hałasu daje frustrację, a nie napięcie.

**Szansa (1D10 plus suma, wynik musi być równy trudności albo wyższy):**

| Kto | Suma cechy i umiejętności | Przeciw 15 | Przeciw 18 | Uwagi |
|---|---|---|---|---|
| Luna v2 (Knowledge 6, Dark Arts 3) | 9 | **50%** | 20% | pierwsza próba, 15 minut |
| Luna v2, czyta 30 minut (+2) | 11 | **70%** | 40% | koszt: dwa razy więcej czasu |
| Luna v2, dwie próby po 15 minut | 9 | 75% łącznie | 36% łącznie | druga porażka daje licznik hałasu 2, czyli Filch zaczyna nasłuchiwać (scena 09) |
| Przeciętna postać (Knowledge 4, Dark Arts 0) | 4 | 0% | 0% | wynik 1D10 + 4 to najwyżej 14 |
| Dobra uczennica bez Dark Arts (np. Nell: Knowledge 7) | 7 | 30% | 0% | zob. propozycja zasady poniżej |

Poziomów „imponujący” (2x trudności, czyli 30) i „niewiarygodny” nie da się wyrzucić, więc ich nie opisuję. Porażka kompromitująca (wynik poniżej połowy trudności, czyli poniżej 7,5) jest dla Luny niemożliwa (najmniejszy wynik to 10); dla przeciętnej postaci to 30 procent.

**Propozycja zasady domowej (do akceptacji MG; brak w podręczniku): „Bez Dark Arts nie da się.”** Postać z Dark Arts 0 nie może tej lektury w ogóle podjąć: żargon i symbole są dla niej bez sensu. Bez tej zasady Nell (Knowledge 7) miałaby 30 procent na klątwę, a to osłabia wyjątkowość wyboru MG dla Luny. To zasada nasza, nie Walkera.

**Czas.** Jedna próba to 15 minut. Dozwolone najwyżej dwie próby na noc (druga po porażce, bo książka „czeka”). Poza tym pytanie o czas stawia scena: gdy drużyna goni zegar, MG pomija test i mówi jednym zdaniem „nie zdążyłaś”.

**Ryzyko przy porażce (spójne z licznikiem hałasu sceny 09).** Scena prowadzi licznik kresek: porażki dodają +1, przy 2 kreskach Filch zaczyna nasłuchiwać i wyjście wymaga testu `wyjscie-przed-filchem`. Proponuję:
- porażka: +1 do licznika hałasu i jeden ślad dla pani Pince (tak jak inne porażki w scenie);
- porażka kompromitująca: +2 do licznika i stan Rattled do końca sceny (jak inne kary umysłu w scenie 09, nie kumuluje się z Drained);
- brak sukcesu po dwóch próbach: drugą porażką Luna dobija do 2 kresek, czyli lektura może zepsuć wyjście całej drużyny. To jest cena odwagi, a decyzja pozostaje przy graczu.

**Co sukces zmienia na karcie.** Zaklęcie wchodzi jako nieopanowane, z trudnością startową (zob. niżej). Dalsza nauka to zwykłe zasady Walkera (s. 31–32): jedna próba nauki to 1D10 + Focus + Dark Arts + premia różdżki (Curses +1) przeciw aktualnej trudności, czyli Luna ma 9 plus kość. Dla zaklęcia o trudności 15 (kratki 15, 12, 9): 50 procent na pierwszą kratkę, 80 procent na drugą, 100 procent na trzecią. Z książki to 4 godziny na rzut (bez Story Points); w walce nieopanowane zaklęcie prawie nigdy nie trafia (ZD-06). Uwaga techniczna: panel graczy zakłada, że wszystko na karcie jest opanowane, więc nowe zaklęcie na razie zapisuje MG na papierze; zmiana panelu to osobna decyzja.

## B. Kandydaci zaklęć

Kryteria: z podręcznika (s. 47–59), z typem Curse (wymaga Dark Arts, ZD-17), nie z Niewybaczalnych, bez Sectumsempra, Morsmordre i Taboo (wykluczone decyzją MG), bez anachronizmów 1969 i bez klątw raniących ciężko. Wszystkie trzy mają trudność 15 albo wyższą, więc poza uczniami zdolnymi są trudne do opanowania. Wszystkie daty pojawienia się w kanonie: `pewnosc: niepewne`, do sprawdzenia przez strażnika kanonu przed wyborem.

### 1. Conjunctivitis Curse (Klątwa Zapalenia Spojówek), s. 49, Curse, trudność startowa 15: REKOMENDACJA

Efekt (własnymi słowami): oczy ofiary puchną i się zamykają; ofiara ma karę 10 do wszystkich rzutów ataku i obrony. Podręcznik uważa ją za dobrą przeciw stworom z odpornym na magię pancerzem (smokom). Czas trwania nie jest podany (propozycja: do Finite Incantatem albo około godziny, do decyzji MG). Kratki: 15, 12, 9 (3 kratki).
Dlaczego: to najczystszy przykład „silniejszej czarnej magii” bez krwi i bez trwałych szkód: jest groźna (ofiara ślepnie), ale nie zabija, pasuje do „ciągnie ją mrok, ale nie przekracza granicy”, wymaga Dark Arts, więc uzasadnia wyjątek MG, i ma sens przeciw stworzeniom (Luna zna je dobrze). Ryzyko: kara −10 jest ogromna w pojedynku. Proponuję zostawić ją nieopanowaną na całą Sesję 1 i 2 (ZD-06 sprawia, że nieopanowana prawie nie trafia) oraz zakazać jej w formalnych pokazach Wrena (ZD-09 „kolor”).

### 2. Flagrante Curse (Klątwa Płomienia), s. 52, Curse, trudność startowa 15

Efekt: przedmiot, na który rzucono klątwę, parzy żarem każdego, kto go dotknie; obrażeń podręcznik nie podaje. Częściowo chroni przed nią Impervius (trzeba natychmiast puścić przedmiot). Czas trwania nie jest podany (propozycja: do Finite Incantatem). Kratki: 15, 12, 9.
Dlaczego: to klątwa zabezpieczająca, nie bojowa: Luna może „zabezpieczyć” kradziony notatnik albo drzwi, a Cassian, Filch albo prefekt, który sięgnie po przedmiot, poparzy rękę. Dobre dla kampanii o kradzieży (pułapka, dowód, kto komu zawinił), a nie psuje pojedynków. Ryzyko: Luna może zacząć „zabezpieczać” przedmioty w scenach, które MG zaplanował jako kradzież albo przekazanie; MG decyduje, czy to zdarzy się już w Sesji 1.

### 3. Obscuro, s. 55, Transfiguration (nie Curse), trudność startowa 21

Efekt: na oczy celu pojawia się magiczna opaska; działa na każdą żywą istotę, także na żywe portrety. Zdejmuje ją Evanesco albo Finite Incantatem. Mechaniczny skutek podręcznik pomija (propozycja: +5 do trudności testów opartych na wzroku). Kratki: 21, 18, 15.
Dlaczego: to „mroczne”, ale nie klątwa z nazwy, więc rzuca się ją z Transfiguration (Luna 3, trudne) i nie wymaga Dark Arts; pasuje, jeśli MG woli mroczniejszy klimat bez użycia Dark Arts. Odradzam jako główny wybór: najtrudniejsza (21), a przy teście Knowledge + Dark Arts nie ma naturalnego powiązania z jej wyjątkowym Dark Arts.

### Odrzucone (dla porządku)

- Fiendfyre (s. 51, trudność 18): 12D obrażeń i ogień, który wymyka się spod kontroli; w opisie klątwy napisano wprost, że to magia zaawansowana, a indeks mówi „dla uczniów poza zasięgiem”. Nie dawać.
- Mucus Ad Nauseam (s. 54, trudność 12): za słaba, to kolejny psikus, a Luna ma już takie.
- Imperio, Crucio, Avada Kedavra, Sectumsempra, Morsmordre, Taboo Curse: wykluczone decyzją MG.

## C. Co wybrać (skrót)

Rekomenduję **Conjunctivitis Curse** (kandydat 1), test **Knowledge + Dark Arts przeciw 15**, 15 minut na próbę, najwyżej dwie próby, porażka = hałas +1 i ślad dla pani Pince, i zasadę „bez Dark Arts nie da się”. Jeśli MG woli lżejszy ton albo klątwę do rozgrywki „kradzieżowej”, wybierz Flagrante Curse.

Do decyzji MG: (1) który kandydat; (2) próg 15 czy 18; (3) czy przyjąć zasadę „bez Dark Arts nie da się”; (4) czy lektura jest dopuszczona już w Sesji 1.

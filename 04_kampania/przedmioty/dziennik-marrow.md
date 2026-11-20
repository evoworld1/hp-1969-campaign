---
id: przedmiot.dziennik-marrow
typ: przedmiot
tytul: "Dziennik profesor Marrow"
status: szkic
rodzaj: "dokument magiczny (dziennik badawczy związany z gablotą)"
wlasciciel_start: brak
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.09 (gablota), s1.scena.10 (próg, trzynasty raz, ewentualna konfiskata)
sceny: []
tylko_mg: true
tagi: [s1, s2, marrow, dziennik, gablota, pracownia, cliffhanger, "1951"]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG, Rozwidlenie końcowe, zahaczka „Kotwica”)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 09, scena 10, W7, siatka bezpieczeństwa 4)"
  - "04_kampania/miejsca/sala-zatrzymanych-godzin.md"
  - "archiwum: modul-s1-v0 („Foliał”; pomysł, nie fakt)"
aktualizacja: 2026-11-20
---
## Opis

Gruby tom w miękkiej, ciemnej skórze, wytartej na rogach od dłoni, które nosiły go latami. Grzbiet bez tytułu. Zamiast klamry ma mosiężny pasek z małą tarczą zegarową bez wskazówek. Kartki są grube, lekko pożółkłe, zapisane drobnym, pochyłym pismem: tym samym, którym napisano tabliczkę na gablocie i kredowy podpis na ścianie obliczeń. Między stronami tkwią luźne wykresy faz księżyca i paski papieru z rzędami liczb. Pachnie kredą i zgaszoną świecą, jak cała pracownia.

Gdy dziennik leży w zamkniętej gablocie, jest otwarty na pierwszej stronie, ale litery rozmywają się, kiedy ktoś próbuje je przeczytać. Po otwarciu gabloty pierwsza strona staje się czytelna (`s1.handout.pierwsza-strona-dziennika`). Dalsze strony „pływają”: litery przesuwają się jak odbicie na wodzie i nie układają w zdania.

Jeśli MG przyjmie wariant roboczy dotyczący Karty Pożyczającego (zob. „Dla MG”), w środku dziennika, mniej więcej w jednej trzeciej grubości, widać **wąski, poszarpany pasek po wyrwanej kartce**.

## Działanie

**Co postacie mogą z nim zrobić w Sesji 1.**
- **Zobaczyć go w gablocie** na końcu [[miejsce.sala-zatrzymanych-godzin]] (scena 09). Bez otwarcia gabloty: tylko rozmyta strona.
- **Otworzyć gablotę.** Gablota otwiera się, gdy ktoś godzinę **odda**, a nie zabierze (W7). Sposób zapisuje `flaga.gablota-sposob`. Wyłamanie też działa, ale z ceną: część stron rozmywa się na stałe, hałas sięga biblioteki. Test otwarcia należy do pliku sceny 09.
- **Przeczytać pierwszą stronę** (handout). Reszta w Sesji 1 jest nieczytelna bez względu na wynik rzutu, żeby nie wyprzedzać Sesji 2.
- **Wynieść go z pracowni.** Gdy dziennik przekracza próg sali, wszystkie zatrzymane zegary w pracowni drgną naraz, a każdy zegar w zamku wybija trzynasty raz (`flaga.trzynasta-wybila`, scena 10). [[npc.ansel-dray]] zaczyna blednąć.
- **Zostawić go.** Gablota się zamyka, zegary w pracowni dalej stoją (`flaga.dziennik-miejsce` = `w-pracowni`). Wariant awaryjny cliffhangera opisuje przegląd scenariusza.
- **Stracić go.** Jeśli bicie zwabi Filcha (nocą) albo panią Pince (wieczorem) i złapią postacie z dziennikiem, trafia on do McGonagall albo do szuflady Filcha (`flaga.dziennik-miejsce` = `skonfiskowany`, `flaga.filch-zlapal`).
- **Próbować go zniszczyć** (rozgałęzienie „inne” w przeglądzie): dziennik się opiera; przy wielkim wysiłku zostaje osmalony, zegary milkną na jedną noc.

**Czego dziennik nie robi w Sesji 1.** Nie tłumaczy kotwicy Ansela ani tego, jak działa danina czasu. Pierwszy czytelny rozdział (Sesja 2) wyjaśni, że chłopiec trzyma się czasu zabranego „wielu naraz, w jednej chwili”. Kolejne rozdziały otwierają się za cenę (rozgałęzienie „sekret” w przeglądzie); jaka to cena, rozstrzygnie się przy Sesji 2.

## Mechanika

Przedmiot bez statystyk. Liczby dla otwarcia gabloty, wyłamania i ewentualnego niszczenia ustala mechanik w pliku sceny 09. Poniższy test to opcjonalny kolor: pozwala postaci z wiedzą o teorii magii zrozumieć, że dziennik jest „przywiązany”, zanim ktoś spróbuje go wynieść.

```yaml
test:
  id: przedmiot.dziennik-marrow.test.wiazanie
  opis: "Postać przygląda się gablocie i dziennikowi i próbuje zrozumieć, co je łączy, zanim ktoś go dotknie."
  kto: jeden
  rzut: "1D10 + Knowledge + Magical Theory"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Postać czuje, że dziennik jest z czymś związany, jak łódka przycumowana liną: wyniesienie go poza próg pracowni coś pociągnie. Nie wie co."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Zwykła gablota i zwykła książka, tylko litery trudno złapać wzrokiem."
      flagi_ustaw: []
```

Objaśnienie: Knowledge (wiedza) to cecha, Magical Theory (teoria magii) to umiejętność, oba terminy z listy Walkera (s. 12 i 16).

## Dla MG

**Prawda.** Profesor Imelda Marrow prowadziła ten dziennik w czasie badań nad daniną czasu i tuż po 1951 roku. Przed odejściem związała go magią z gablotą, która wydaje go tylko komuś, kto godzinę oddaje. Dziennik jest jedną z kotwic Ansela: gdy opuszcza pracownię, chłopiec traci część oparcia (przegląd scenariusza, „Prawda dla MG”). Na pierwszej stronie pada jedyna w Sesji 1 wzmianka o [[przedmiot.klepsydra-daniny]].

**DO DECYZJI MG: skąd Cassian ma kartę z dziennika zamkniętego w gablocie?** Wariant roboczy: Karta Pożyczającego leżała luzem na pulpicie przy ścianie obliczeń, wyrwana z dziennika przez samą Marrow (jako ostrzeżenie albo w pośpiechu) i zostawiona poza gablotą. W tym wariancie dziennik ma pasek po wyrwanej kartce, a [[przedmiot.karta-pozyczajacego]] pasuje do niego krawędzią. Ten sam wariant opisuje karta [[miejsce.sala-zatrzymanych-godzin]] (sekcja „Ukryte”). Jeśli MG wybierze inny wariant, usuń pasek z opisu.

**Kto go chce.**
- [[npc.cassian-vane]]: wrócić po resztę, bo karta mówi tylko, jak brać, a nie jak oddawać. Przy `flaga.s1-zegar-kradziezy` = 4 próbuje **zabrać** godzinę gablocie; szkło matowieje i nie daje się otworzyć.
- [[npc.silas-wymark]] (poza kadrem): od trzynastego bicia wie, że ktoś dotknął pracowni.
- [[npc.albus-dumbledore]]: przyjmie go, jeśli postacie przyniosą (rozgałęzienie „dumbledore”), i zamknie.

**Powiązane flagi:** `flaga.pracownia-otwarta`, `flaga.gablota-sposob`, `flaga.dziennik-u-graczy`, `flaga.dziennik-miejsce`, `flaga.trzynasta-wybila`, `flaga.filch-zlapal`, `flaga.s1-wybor`, `flaga.marrow-imie-znane`.

**Powiązane miejsca i materiały:** [[miejsce.sala-zatrzymanych-godzin]], [[miejsce.biblioteka]], [[s1.handout.pierwsza-strona-dziennika]].

### Do weryfikacji
- Całość jest nasza (`pewnosc: nasze`). Wygląd okładki i paska z tarczą to szczegół wykonawczy.
- Cena za kolejne rozdziały (Sesja 2) nie jest ustalona.
- Czy Marrow żyje: nieustalone, dziennik niczego o tym nie mówi.

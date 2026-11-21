---
id: przedmiot.dziennik-marrow
typ: przedmiot
tytul: "Notatnik profesor Marrow"
status: szkic
rodzaj: "dokument magiczny (notatnik badawczy związany z gablotą)"
wlasciciel_start: brak
pewnosc: nasze
# Identyfikator bez zmian (decyzja MG 2026-11-20): przedmiot nazywa się teraz „notatnik”.
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.09 (gablota), s1.scena.10 (próg, trzynasty raz, ewentualna konfiskata)
sceny: [s1.scena.09, s1.scena.10]
tylko_mg: true
tagi: [s1, s2, marrow, notatnik, gablota, pracownia, ksiega, klepsydra, cliffhanger, "1951"]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/przeglad.md (Prawda dla MG, Rozwidlenie końcowe, zahaczki „Kotwica” i „Księga i notatnik”)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 09, scena 10, W7, W10, siatka bezpieczeństwa 4)"
  - "04_kampania/miejsca/sala-zatrzymanych-godzin.md"
  - "archiwum: modul-s1-v0 („Foliał”, rozdzielony na księgę i notatnik; pomysł, nie fakt)"
aktualizacja: 2026-11-20
---
## Opis

Gruby notatnik w miękkiej, ciemnej skórze, wytartej na rogach od dłoni, które nosiły go latami. Grzbiet bez tytułu. Zamiast klamry ma mosiężny pasek z małą tarczą zegarową bez wskazówek. Kartki są lekko pożółkłe, zapisane drobnym, pochyłym pismem: tym samym, którym napisano tabliczkę na gablocie i kredowy podpis na ścianie obliczeń. Między stronami tkwią luźne wykresy faz księżyca i paski papieru z rzędami liczb. Pachnie kredą i zgaszoną świecą, jak cała pracownia.

**Co jest w środku.** Przemyślenia profesor Marrow i szkice jej wynalazku, [[przedmiot.klepsydra-daniny]]: rzuty z góry i z boku, przekroje, strzałki, poprawki naniesione na poprawki. Szkice są niezrozumiałe, bo opierają się na zapiskach z [[przedmiot.zakleta-ksiega]]. Co kilka linijek pojawia się odsyłacz do księgi, zapisany znakiem: mała tarcza z zaznaczoną jedną kreską i rzymska liczba obok. Bez księgi te odsyłacze prowadzą donikąd. Notatnik bez księgi rodzi więcej pytań, niż daje odpowiedzi; księga bez notatnika jest nieczytelna.

**Ostrzeżenie.** W notatniku Marrow wyraźnie ostrzega przed siłowym korzystaniem z księgi (W10.4). W Sesji 1 to ostrzeżenie jest czytelne na pierwszej stronie (`s1.handout.pierwsza-strona-dziennika`).

**W zamkniętej gablocie** notatnik leży otwarty na pierwszej stronie, a litery rozmywają się, gdy ktoś próbuje je przeczytać. **Rysunek na marginesie się nie rozmywa:** dłoń, która wkłada coś do klepsydry, i obok otwarta kłódka (zapasowa droga do W7). Postać z teaserową zdolnością „Oko, które dostrzega ukryte” widzi go bez szukania (zob. [[zasada.nagrody-z-teaserow]]). Po otwarciu gabloty pierwsza strona staje się czytelna. Dalsze strony „pływają”: litery przesuwają się jak odbicie na wodzie i nie układają w zdania.

## Działanie

**Co postacie mogą z nim zrobić w Sesji 1.**
- **Zobaczyć go w gablocie** na końcu [[miejsce.sala-zatrzymanych-godzin]] (scena 09). Bez otwarcia gabloty: rozmyta strona i jeden wyraźny rysunek.
- **Otworzyć gablotę.** Gablota otwiera się, gdy ktoś godzinę **odda**, a nie zabierze (W7: tabliczka, dopisek na odwrocie Karty Pożyczającego, powiedzonko Ansela; zapasowo rysunek, Tempus, ściana obliczeń). Sposób zapisuje `flaga.gablota-sposob`. Wyłamanie też działa, ale z ceną: część stron rozmywa się na stałe, hałas sięga biblioteki. Wyłamanie gabloty **nie** budzi zabezpieczeń księgi. Test otwarcia należy do pliku sceny 09.
- **Przeczytać pierwszą stronę** (handout). Reszta w Sesji 1 jest nieczytelna bez względu na wynik rzutu, żeby nie wyprzedzać Sesji 2.
- **Zestawić go z księgą.** W Sesji 1 daje to najwyżej dreszcz: znak odsyłacza z notatnika pasuje do drobnej tarczy na marginesie widocznej rozkładówki księgi. Nic więcej się nie otwiera.
- **Wynieść go z pracowni.** Gdy notatnik przekracza próg sali, wszystkie zatrzymane zegary w pracowni drgną naraz, a każdy zegar w zamku wybija trzynasty raz (`flaga.trzynasta-wybila`, scena 10). [[npc.ansel-dray]] zaczyna blednąć: notatnik był jedną z jego kotwic.
- **Zostawić go.** Gablota się zamyka, zegary w pracowni dalej stoją (`flaga.dziennik-miejsce` = `w-pracowni`). Wariant awaryjny cliffhangera opisuje przegląd scenariusza.
- **Stracić go.** Jeśli bicie zwabi Filcha i złapie on postacie z notatnikiem, trafia on do McGonagall albo do szuflady Filcha (`flaga.dziennik-miejsce` = `skonfiskowany`, `flaga.filch-zlapal`).
- **Próbować go zniszczyć** (rozgałęzienie „inne” w przeglądzie): notatnik się opiera; przy wielkim wysiłku zostaje osmalony, zegary milkną na jedną noc.

**Czego notatnik nie robi w Sesji 1.** Nie tłumaczy kotwicy Ansela ani tego, jak działa danina czasu. Pierwszy czytelny rozdział (Sesja 2) da pierwszy trop: chłopiec trzyma się czasu zabranego „wielu naraz, w jednej chwili”. Pełniejsze wyjaśnienie wymaga zestawienia notatnika z księgą. Kolejne rozdziały otwierają się za cenę (rozgałęzienie „sekret” w przeglądzie); jaka to cena, rozstrzygnie się przy Sesji 2.

## Mechanika

Przedmiot bez statystyk. Otwarcie gabloty i wybór sposobu (bez rzutu, cena godziny) są w pliku sceny 09; wyłamanie gabloty siłą: zaklęcie rozbijające, Reducto (start 15), blok `s1.scena.09.test.gablota-sila`. Niszczenie notatnika: bez testu, opisane wyżej (notatnik się opiera, zostaje osmalony). Poniższy test to opcjonalny kolor: pozwala postaci z wiedzą o teorii magii zrozumieć, że notatnik jest „przywiązany”, zanim ktoś spróbuje go wynieść.

```yaml
test:
  id: przedmiot.dziennik-marrow.test.wiazanie
  opis: "Postać przygląda się gablocie i notatnikowi i próbuje zrozumieć, co je łączy, zanim ktoś go dotknie."
  kto: jeden
  rzut: "1D10 + Knowledge + Magical Theory"
  trudnosc: "Challenging (15)"
  modyfikatory:
    - warunek: "Postać zna nazwisko Marrow (flaga.marrow-imie-znane) albo widziała ścianę obliczeń"
      wartosc: "+2 do rzutu"
    - warunek: "Postać dotyka kredy albo stoi na progu pracowni, gdzie coś ciągnie (zegary milkną)"
      wartosc: "+1 do rzutu"
    - warunek: "Postać ma stan Drained (+3; po scenie 03 albo po przegranym pojedynku w 08), s. 35; Dazed to +2, Rattled +1"
      wartosc: "+3 do trudności"
  wyniki:
    - wynik: sukces
      efekt: "Postać czuje, że notatnik jest z czymś związany, jak łódka przycumowana liną: wyniesienie go poza próg pracowni coś pociągnie. Nie wie co."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Zwykła gablota i zwykły notatnik, tylko litery trudno złapać wzrokiem."
      flagi_ustaw: []
```

Objaśnienie: Knowledge (wiedza) to cecha, Magical Theory (teoria magii) to umiejętność, oba terminy z listy Walkera (s. 12 i 16).

## Dla MG

**Prawda.** Profesor Imelda Marrow prowadziła ten notatnik, gdy studiowała zaklętą księgę i budowała Klepsydrę, a potem tuż po 1951 roku. Przed odejściem związała go magią z gablotą, która wydaje go tylko komuś, kto godzinę oddaje. Notatnik jest jedną z kotwic Ansela: gdy opuszcza pracownię, chłopiec traci część oparcia (przegląd scenariusza, „Prawda dla MG”). Na pierwszej stronie pada jedyna w Sesji 1 wzmianka o Klepsydrze.

**Karta Pożyczającego nie pochodzi z notatnika.** Cassian wyrwał ją z zaklętej księgi (decyzja MG 2026-11-20). Notatnik jest cały.

**Kto go chce.**
- [[npc.cassian-vane]]: chce tego, czego karta nie mówi: jak oddawać. Myśli, że odpowiedź leży w gablocie. Już trzy tygodnie temu próbował ją okraść („Szkło zmatowiało pod ręką. Ona nie daje się brać”). Przy `flaga.s1-zegar-kradziezy` = 4 próbuje znowu **zabrać** godzinę gablocie, z tym samym skutkiem.
- [[npc.silas-wymark]] (poza kadrem): od trzynastego bicia wie, że ktoś dotknął pracowni.
- [[npc.albus-dumbledore]]: przyjmie go, jeśli postacie przyniosą (rozgałęzienie „dumbledore”), i zamknie.

**Powiązane flagi:** `flaga.pracownia-otwarta`, `flaga.gablota-sposob`, `flaga.dziennik-u-graczy`, `flaga.dziennik-miejsce`, `flaga.trzynasta-wybila`, `flaga.filch-zlapal`, `flaga.s1-wybor`, `flaga.marrow-imie-znane`.

**Powiązane miejsca i materiały:** [[miejsce.sala-zatrzymanych-godzin]], [[miejsce.biblioteka]], [[przedmiot.zakleta-ksiega]], [[s1.handout.pierwsza-strona-dziennika]].

### Do weryfikacji
- Całość jest nasza (`pewnosc: nasze`). Wygląd okładki, paska z tarczą i znaku odsyłacza to szczegóły wykonawcze.
- Identyfikatory `przedmiot.dziennik-marrow`, `s1.handout.pierwsza-strona-dziennika` i flagi `flaga.dziennik-*` zostają bez zmian mimo nowej nazwy.
- Cena za kolejne rozdziały (Sesja 2) nie jest ustalona.
- Czy Marrow żyje: nieustalone, notatnik niczego o tym nie mówi.

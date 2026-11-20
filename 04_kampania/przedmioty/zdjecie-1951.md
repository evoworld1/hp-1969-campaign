---
id: przedmiot.zdjecie-1951
typ: przedmiot
tytul: "Zdjęcie „Obserwatorium, jesień 1951”"
status: szkic
rodzaj: "fotografia czarodziejska (ruchoma), pamiątka w gablocie"
wlasciciel_start: brak
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.09 (w drodze do biblioteki), s1.scena.12 (wizyta w bibliotece)
sceny: []
tylko_mg: true
tagi: [s1, s2, wymark-slad, marrow, "1951", biblioteka, patron, w9]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (W9.2)"
  - "04_kampania/miejsca/biblioteka.md (gablota na korytarzu, test zdjęcia)"
  - "03_postacie/npc/silas-wymark.md, 03_postacie/npc/nauczyciel-astronomii.md"
aktualizacja: 2026-11-20
---
## Opis

Czarno-białe, ruchome zdjęcie w prostej drewnianej ramce, za szkłem gabloty na korytarzu przed [[miejsce.biblioteka]], wśród pucharów i medali. Na pożółkłym passe-partout ktoś napisał atramentem tylko: „Obserwatorium, jesień 1951”. Nazwisk brak.

Na zdjęciu, na szczycie wieży, noc i gwiazdy rozmyte w smugi:
- **Kobieta przy teleskopie**, w ciemnej szacie i szalu, z włosami upiętymi wysoko. Raz po raz prostuje się znad okularu i z uśmiechem tłumaczy coś komuś, kogo nie widać.
- **Obok niej bardzo wysoki, chudy prefekt** z odznaką Ravenclawu, lekko przygarbiony. Trzyma jej lunetę jak coś cennego i patrzy na nią, nie w obiektyw.
- Kobieta co kilka chwil zerka w bok, **poza kadr**, na wysokość dziecka, jakby ktoś tam stał. Prefekt tam nie patrzy.

## Działanie

Zwykła czarodziejska fotografia: postacie się ruszają, ale nie odpowiadają i nie wychodzą z ramki.

**Co postacie mogą z nim zrobić w Sesji 1.**
- **Zauważyć je** przy wejściu do biblioteki (test `miejsce.biblioteka.test.zdjecie-w-gablocie` w karcie biblioteki). Jeśli postacie znają już nazwisko Marrow (`flaga.marrow-imie-znane`) i szukają jej celowo, MG pokazuje zdjęcie bez rzutu.
- **Zwrócić uwagę na prefekta.** Ustawia `flaga.wymark-slad` (W9). Kim jest, nikt w Sesji 1 nie wie; nazwisko nie pada.
- **Pokazać je komuś albo o nie zapytać.**
  - [[npc.nauczyciel-astronomii]] (prof. Fairweather) rozpoznaje „panią od klepsydr” i „Bociana, który nosił jej lunetę”; nazwiska prefekta nie pamięta (`flaga.marrow-imie-znane`, `flaga.wymark-slad`).
  - [[npc.ansel-dray]] przykłada dłoń do szkła: „To pani profesor”. Długo patrzy w miejsce poza kadrem i nic nie mówi. Prefekta nie umie nazwać.
  - [[npc.irma-pince]] wzrusza ramionami: gabloty to sprawa woźnego.
- **Wyjąć je z gabloty.** Gablota jest zamknięta na prosty zamek (otworzy go zwykłe zaklęcie otwierające albo spinka). Brak zdjęcia zauważa [[npc.argus-filch]] w Sesji 2; do tego czasu nikt.

## Mechanika

Bez testów własnych. Zauważenie zdjęcia obsługuje test w karcie [[miejsce.biblioteka]].

## Dla MG

**Prawda.** Kobieta to profesor Imelda Marrow, prefekt to [[npc.silas-wymark]], wtedy siódmoroczny asystent Marrow w obserwatorium. Zdjęcie zrobiono jesienią 1951, przed śmiercią Ansela albo tuż po niej; MG nie musi tego rozstrzygać w Sesji 1.

**Zerkanie poza kadr (przyjęte przez MG 2026-11-20).** Marrow na zdjęciu zerka poza kadr, jakby ktoś tam stał: to cichy ślad Ansela. Ansel był wtedy pierwszorocznym na lekcjach Marrow, ale nikt go nie pamięta, więc na zdjęciu „go nie ma”, a ona i tak na niego patrzy. Ten sam opis ma test zdjęcia w karcie [[miejsce.biblioteka]]. Gracze nie dostają wyjaśnienia; to dreszcz, nie wskazówka obowiązkowa.

**Nie mylić z innym zdjęciem.** Prof. Fairweather ma w szufladzie **inne** zdjęcie: swojej klasy z 1951 z pustym miejscem w pierwszym rzędzie (ziarno na Sesję 2). To zdjęcie z gabloty dotyczy Marrow i Wymarka.

**W Sesji 1 to tylko ślad.** Wymark się nie pojawia, a nazwiska nikt nie wymawia (decyzja MG z 2026-11-20). Jeśli gracze bardzo chcą wiedzieć, kim jest prefekt, dowiedzą się tego najwcześniej w Sesji 2.

**Powiązane flagi:** `flaga.wymark-slad`, `flaga.marrow-imie-znane`.

**Powiązane obiekty:** [[npc.silas-wymark]], [[npc.ansel-dray]], [[npc.nauczyciel-astronomii]], [[miejsce.biblioteka]], [[miejsce.sala-zatrzymanych-godzin]] (inicjały „S.W.”, drugi ślad tego samego człowieka).

### Do weryfikacji
- Całe zdjęcie jest nasze. Gablota przed biblioteką to nasz element, nie kanoniczna Izba Pamięci.
- Ruchome zdjęcia czarodziejów to motyw kanoniczny (opisany własnymi słowami).
- Wygląd Marrow (szal, upięte włosy) nie był dotąd nigdzie ustalony; do potwierdzenia przy karcie Marrow, jeśli powstanie.

---
id: miejsce.gabinet-dyrektora
typ: miejsce
tytul: "Gabinet dyrektora"
status: szkic
lokalizacja: "Hogwart, okrągły gabinet na szczycie ruchomych spiralnych schodów, za kamiennym strażnikiem w korytarzu"
pewnosc: niepewne
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.05 (jeśli gracze od razu prowadzą Ansela do dyrektora), s1.scena.12 (siatka bezpieczeństwa 3)
sceny: []
tylko_mg: true
tagi: [s1, hogwart, dumbledore, ansel, siatka-bezpieczenstwa, biblioteka-legalnie]
zrodla:
  - "Rowling, Komnata Tajemnic, rozdz. 11–12 (kamienny strażnik na hasło, ruchome spiralne schody, okrągły gabinet z portretami dyrektorów i srebrnymi przyrządami); opis własnymi słowami"
  - "Walker 2e s. 159 (Headmaster's Office: okrągły gabinet, portrety, biurko, Tiara Przydziału)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (siatka bezpieczeństwa 3)"
  - "03_postacie/npc/albus-dumbledore.md"
aktualizacja: 2026-11-20
---
## Do odczytania

Schody kręcą się pod wami same, cicho, jak koło młyńskie, i wynoszą was pod dębowe drzwi. Gabinet jest okrągły i pełen drobnych dźwięków: coś brzęczy, coś puka, coś wypuszcza obłoczki pary na stoliku o cienkich nóżkach. Z portretów na ścianach patrzą byli dyrektorzy; większość udaje, że śpi. Na półce za wielkim biurkiem leży stara, połatana tiara. Tu wszystkie zegary chodzą równo, co do sekundy.

## Dla MG

**Rola w Sesji 1.** Tylko jeśli gracze sami tu przyjdą (siatka bezpieczeństwa 3). Nie podsuwaj tej drogi; nie karz za nią.
- [[npc.albus-dumbledore]] słucha uprzejmie i uważnie, proponuje Anselowi krzesło, ale patrzy o pół metra obok. Wierzy, że postacie kogoś widzą, prosi o obserwację, niczego nie obiecuje. Ustawia `flaga.dumbledore-powiadomiony`.
- [[npc.ansel-dray]] cicho: „On mnie nie widzi. Pani profesor też w końcu przestała”.
- Na prośbę o bibliotekę: zgoda z warunkiem „Opowiecie mi potem, co znaleźliście” (`flaga.biblioteka-legalnie`).

**Jak tu wejść.** Kamienny strażnik w korytarzu przepuszcza tylko na hasło. Postacie go nie znają. Drogi: poprosić [[npc.minerva-mcgonagall]] albo dowolnego nauczyciela, by ich zaprowadził (najprostsze); poczekać, aż dyrektor sam wyjdzie (kilka minut, jeśli MG chce); próbować haseł (strata czasu, nic więcej). MG może też uznać, że dyrektor „spodziewał się ich” i strażnik odsuwa się sam.

**Krótka wstawka do odczytania (puste krzesło):**
> Dyrektor przysuwa do biurka trzecie krzesło i z uprzejmym skinieniem zaprasza na nie gościa. Patrzy przy tym w punkt nad oparciem, odrobinę za wysoko i odrobinę w lewo. Chłopiec siada na brzegu, z rękami na kolanach, i wpatruje się w dyrektora z nadzieją, która powoli gaśnie.

**Stan zmienny.**
- Przed `flaga.godzina-stracona`: postacie nie mają z czym przyjść poza plotką; dyrektor częstuje cukierkiem i odsyła ich na lekcje.
- Jeśli `flaga.dumbledore-powiadomiony` już ustawiona: drugi raz strażnik ich nie wpuszcza bez nauczyciela; Dumbledore „jest poza zamkiem” (zajmują go większe sprawy). Wyjątek: w scenie 10 (rozgałęzienie „dumbledore”) dyrektor wraca i przyjmuje dziennik.
- Jeśli `flaga.marrow-imie-znane`: przy nazwisku Marrow Dumbledore na moment przestaje się uśmiechać; nic nie wyjaśnia.
- Po `flaga.trzynasta-wybila` (rozgałęzienie „dumbledore”): przyjmuje dziennik i zamyka go w szafce; Sesja 2 zaczyna się od tego, że „zapamiętał”.

**Odczyt do mapy dryfu (propozycja robocza):** 0 minut, idealnie, jak w Wieży Zegarowej, ale z innego powodu: magia czasu nie dotyka dyrektora i jego najbliższego otoczenia (decyzja MG z 2026-11-19 rozciągnięta na gabinet, **do potwierdzenia**). Uwaga: dwa „zera” w zamku mogą zmylić graczy; to w porządku, bo oba miejsca są ślepymi zaułkami.

**Zagrożenia i kryjówki.** Brak zagrożeń fizycznych. Koszt to czas i to, że dyrektor nie rozwiąże sprawy za postacie. Portrety dyrektorów słuchają i plotkują między ramami (kolor na Sesję 2). Kryjówek brak: kto tu wchodzi, jest widziany.

### Do weryfikacji
- Feniks Fawkes w gabinecie w 1969: niepewne (kanon pokazuje go w latach 90.); MG może go pominąć albo dać jako ptaka śpiącego na żerdzi.
- Kamienny strażnik na hasło w 1969: niepewne co do lat, przyjmujemy, że był.
- Zero dryfu w gabinecie to nasza propozycja (zob. wyżej).

## Ukryte

Dumbledore pamięta dziwną noc zgubionych godzin z 1951 roku i nigdy nie połączył jej z żadnym uczniem (propozycja z karty NPC, **nie** decyzja MG; w Sesji 1 nie wychodzi na jaw).

## Testy

Brak testów miejsca. Rozmowa z dyrektorem nie wymaga rzutów; kłamstwo dyrektor widzi od razu i nie karze.

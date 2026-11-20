---
id: miejsce.sala-wejsciowa
typ: miejsce
tytul: "Sala Wejściowa i wielki zegar"
status: szkic
lokalizacja: "Hogwart, parter, za głównymi drzwiami; łączy Wielką Salę, marmurowe schody i zejścia do podziemi"
pewnosc: niepewne
# Pozostałe pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo także: s1.scena.03 (przejście), s1.scena.06, s1.scena.12
sceny: [s1.scena.01]
tylko_mg: true
tagi: [s1, hogwart, zegar, crake, ansel-odbicie, sygnaly-dziwnosci, mapa-dryfu]
zrodla:
  - "Rowling, Kamień Filozoficzny, rozdz. 7 (Sala Wejściowa, marmurowe schody); opis własnymi słowami"
  - "Rowling, Zakon Feniksa (klepsydry z kamieniami punktów domów; numer rozdziału do weryfikacji)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 01, pogawędka ruchoma z Crake'iem)"
aktualizacja: 2026-11-20
---
## Do odczytania

Sala Wejściowa dudni od kroków i głosów, a pod nimi, równo i ciężko, tyka wielki zegar stojący przy schodach: ciemne drewno, tarcza jak księżyc, wahadło za szybką grubą na palec. Obok w czterech wysokich klepsydrach przesypują się kamienie punktów domów. Prefekt przy drzwiach patrzy na swój zegarek, potem na wielki zegar, potem znowu na zegarek, i marszczy brwi.

## Dla MG

**Rola w Sesji 1.** Przejście, przez które wszyscy przechodzą kilka razy dziennie, więc dobre miejsce na sygnały i spotkania ruchome.
- **Wielki zegar spóźnia się o 4 minuty** (wskazówka W0). Przez to dzwon na pierwszą lekcję bije „za późno” i prefekci sprawdzają zegarki.
- **Drabina [[npc.hollis-crake]]**: jeśli prologu nie było, Crake stoi tu rano na drabinie z otwartą skrzynką zegara (pogawędka ruchoma, test spostrzegawczości). Ustawia `flaga.crake-poznany`, przy bardzo wysokim wyniku `flaga.crake-dluga-rozmowa`.
- **Odbicie Ansela**: postać mijająca zegar widzi w szybie wahadła chłopca w żółtym krawacie tuż za swoim ramieniem; odwraca się i nikogo nie ma. Ustawia `flaga.ansel-odbicie`. Najlepiej dać je postaci, która nie wygrała testu przy stole.
- [[npc.argus-filch]] przy każdym przejściu stuka palcem w szybkę zegara, jakby to pomagało.

**Krótka wstawka do odczytania (odbicie, tylko dla jednej postaci):**
> W szybie zegara widzisz siebie, za sobą tłum i, tuż przy twoim ramieniu, chłopca w żółto-czarnym krawacie, zawiązanym starannie jak do zdjęcia. Nie rusza się i nic nie mówi; patrzy na twoje odbicie. Odwracasz się. Za tobą jest tylko pierwszoroczniak z Ravenclawu, który przeprasza, że cię potrącił.

**Stan zmienny.**
- Jeśli `flaga.s1-prolog-pokatna` albo `flaga.crake-poznany` jest już ustawiona: drabina stoi oparta o ścianę, Crake'a nie ma; Filch: „Zegarmistrz był w czwartek. Znowu” (wskazówka W8).
- Po `flaga.godzina-stracona` zegar spóźnia się już o 5 minut; uważna postać to zauważy, jeśli zmierzy go drugi raz.
- Po `flaga.trzynasta-wybila`: wielki zegar wybija trzynaście uderzeń jako pierwszy i najgłośniej; portrety na schodach się budzą.

**Odczyt do mapy dryfu (propozycja robocza dla sceny 06):** −4 minuty rano, −5 po straconej godzinie, gładko. Z Tempus widać, że błąd „pochyla się” w stronę zachodnich okien, czyli ku Wieży Zegarowej. Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.** Za dnia: tłok, prefekci, Filch. Nocą: najbardziej odsłonięte miejsce w zamku, echo niesie każdy krok, a zegar zagłusza zbliżającego się woźnego. Wnęka za wielkim zegarem mieści jedną szczupłą osobę; zejście do podziemi (kuchnia, lochy) zaczyna się w kącie sali.

### Do weryfikacji
- Wielki zegar stojący w Sali Wejściowej to nasz element (nie ma go w książkach).
- Klepsydry z kamieniami punktów domów: kanon (Zakon Feniksa), numer rozdziału do potwierdzenia przez straznika-kanonu. Czy stały w Sali Wejściowej już w 1969, kanon nie mówi (niepewne).

## Ukryte

Zegar spóźnia się, bo czas w zamku płynie ku Wieży Zegarowej (przypływ z rozluźnionej pieczęci Klepsydry). Crake o tym wie i nie jest zdziwiony, tylko zmartwiony. Klepsydry z punktami domów są zwykłe: nie mają nic wspólnego z Klepsydrą Daniny i MG nie powinien sugerować graczom, że mają.

## Testy

Terminy Walkera w testach: Wits (bystrość), Speed (szybkość), Observation (spostrzegawczość), Stealth (skradanie się).

Test spostrzegawczości przy pogawędce z Crake'iem jest opisany w karcie [[npc.hollis-crake]] i w pliku sceny, w której Crake się pojawi.

```yaml
test:
  id: miejsce.sala-wejsciowa.test.za-zegarem
  opis: "Nocą postać chowa się we wnęce za wielkim zegarem przed nadchodzącym woźnym."
  kto: jeden
  rzut: "1D10 + Speed + Stealth"
  trudnosc: "przeciwny: 1D10 + Wits + Observation (npc.argus-filch)"
  wyniki:
    - wynik: wygrana
      efekt: "Filch stuka w szybkę zegara, mruczy coś o zegarmistrzu i idzie dalej."
      flagi_ustaw: []
    - wynik: przegrana
      efekt: "Wahadło stuka o coś miękkiego. Filch podnosi latarnię: „Kto tam?”. Postać może uciekać po schodach; MG podnosi presję w scenie nocnej."
      flagi_ustaw: []
```

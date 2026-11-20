---
id: miejsce.wielka-sala
typ: miejsce
tytul: "Wielka Sala"
status: szkic
lokalizacja: "Hogwart, parter, za Salą Wejściową"
pewnosc: niepewne
# Pozostałe pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo także: s1.scena.03 (obiad, który przepada), s1.scena.12
sceny: [s1.scena.01]
tylko_mg: true
tagi: [s1, hogwart, sniadanie, plotki, sowy, sygnaly-dziwnosci]
zrodla:
  - "Rowling, Kamień Filozoficzny, rozdz. 7 (zaczarowane sklepienie, cztery stoły domów, stół nauczycieli) i rozdz. 8 (poczta sów przy śniadaniu); opis własnymi słowami"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 01, sygnały dziwności)"
  - "Walker 2e s. 159 (Great Hall na mapie zamku)"
aktualizacja: 2026-11-20
---
## Do odczytania

Pod sklepieniem płyną nisko szare, wrześniowe chmury; gdzieś wysoko pada deszcz, który nigdy tu nie dolatuje. Pachnie smażonym boczkiem, owsianką i mokrymi piórami, bo sowy właśnie zrzucają listy prosto w dżem. Nad stołem nauczycieli wisi okrągły zegar w mosiężnej oprawie. Wskazuje kilka minut mniej, niż powinien, i nikt tego nie zauważa.

## Dla MG

**Rola w Sesji 1.** Scena nauczająca (01): rozmowa z [[npc.tobias-quill]] i jeden prosty test. Tu zbiera się drużyna: [[npc.thaddeus-wren]] obchodzi stoły i umawia „grupę trzecią” przed lekcją. Postacie siedzą przy stołach swoich domów, chyba że gracze postanowią usiąść razem na końcu jednego stołu.

**Co tu jest do znalezienia (MG wybiera 2–3 sygnały, wskazówka W0):**
- Stół Slytherinu: szept o „Czarnym Panu”, „śmierciożercach” i „panu Notcie” ([[npc.rosalind-teague]] powtarza go chętnie). Ustawia `flaga.plotka-o-voldemorcie`.
- Stół Hufflepuffu: koleżanki dokuczają [[npc.maisie-lock]], że „zasnęła z otwartymi oczami”.
- Plotka o „duchu Puchona” krąży przy każdym stole; [[npc.gruby-mnich]] przepływa obok urażony. Ustawia `flaga.plotka-duch-puchona`.
- [[npc.cassian-vane]] przy stole Slytherinu zerka na zegarek kieszonkowy ze stojącymi wskazówkami.
- **Zegar nad stołem nauczycieli** to drugie (obok wielkiego zegara w [[miejsce.sala-wejsciowa]]) miejsce, gdzie jedna postać może zobaczyć w szybce chłopca w żółtym krawacie tuż za swoim ramieniem. Ustawia `flaga.ansel-odbicie`. Tylko odbicie, nigdy na żywo.
- [[npc.argus-filch]] przegania kogoś z sali (np. pierwszoroczniaka z łajnobombą).

**Stan zmienny.**
- Jeśli `flaga.s1-prolog-pokatna`: scena skraca się do poczty sów, jednego sygnału i jednego zdania plotki.
- Po `flaga.godzina-stracona` (scena 03): obiad przepadł. Jeśli postacie zajrzą do sali, talerze są już sprzątnięte, a skrzaty zostawiły tylko okruchy (wskazówka W1, świadkowie).
- Gdy `flaga.s1-zegar-kradziezy` wynosi 1: przy kolacji albo śniadaniu we wtorek plotka o drugoroczniaku, który „nie wie, kiedy zasnął”. Przy 2: [[npc.thaddeus-wren]] publicznie pyta, kto ostatnio „gubi czas”.
- Po `flaga.trzynasta-wybila` (Sesja 2): zegar nad stołem nauczycieli bije za każdym razem o jedno uderzenie za dużo, a nauczyciele udają, że tego nie słyszą.

**Odczyt do mapy dryfu (propozycja robocza dla sceny 06):** zegar nad stołem nauczycieli spóźnia się o 3 minuty, gładko, bez drżenia. Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.** W dzień żadnych zagrożeń poza spojrzeniami i reputacją. Pod stołami domów można przeczekać, aż sala opustoszeje; po kolacji sala jest pusta, a drzwi do Sali Wejściowej zostają otwarte do ciszy nocnej.

### Do weryfikacji
- Zegar ścienny nad stołem nauczycieli to nasz szczegół (graf go wymienia), w kanonie go nie ma.

## Ukryte

Zegar nad stołem nauczycieli, tak jak wszystkie zegary w zamku, jest kanałem Klepsydry; dlatego Ansel może się w nim odbić przed straconą godziną. Gracze nie mają jak tego odkryć w Sesji 1.

## Testy

Terminy Walkera w testach: Wits (bystrość), Observation (spostrzegawczość).

```yaml
test:
  id: miejsce.wielka-sala.test.cos-nie-tak
  opis: "Postać rozgląda się przy śniadaniu i zauważa, że coś w sali jest nie w porę (sygnał dziwności). To test nauczający ze sceny 01; plik sceny może go przejąć."
  kto: kazdy
  rzut: "1D10 + Wits + Observation"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "MG wskazuje jeden z sygnałów: spóźniony zegar, Maisie Lock, stojący zegarek Cassiana albo szept przy stole Slytherinu. Plotka o „duchu Puchona” i tak krąży."
      flagi_ustaw: [flaga.plotka-duch-puchona]
    - wynik: porazka
      efekt: "Nic szczególnego, ale o „duchu Puchona” i tak gada cały stół."
      flagi_ustaw: [flaga.plotka-duch-puchona]
```

---
id: miejsce.pokoj-wspolny-hufflepuffu
typ: miejsce
tytul: "Wejście do pokoju wspólnego Hufflepuffu (beczki)"
status: szkic
lokalizacja: "Hogwart, podziemia, korytarz przy kuchni; wejście za stosem beczek we wnęce"
pewnosc: niepewne
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.05 (ręka przez beczkę), s1.scena.12 (pokój wspólny, dormitorium, rejestr Sprout, Gruby Mnich)
sceny: [s1.scena.05, s1.scena.12]
tylko_mg: true
tagi: [s1, hogwart, hufflepuff, ansel, pokoj-wspolny, gruby-mnich]
zrodla:
  - "Wizarding World (Pottermore): pokój wspólny Hufflepuffu, wejście przez beczki przy kuchni, ocet dla intruzów; opis własnymi słowami"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 05, wskazówka W2)"
aktualizacja: 2026-11-20
---
## Do odczytania

We wnęce korytarza leży stos starych beczek, ułożonych w piramidę jak w piwnicy gospody. Drewno jest ciemne, obręcze wytarte do połysku tam, gdzie od pokoleń stukają w nie palce. Pachnie dębem, ziemią z doniczek i odrobinę octem. Zza beczek dolatuje stłumiony śmiech i trzask ognia w kominku.

## Dla MG

**Rola w Sesji 1.** Kilka kroków od [[miejsce.schody-przy-kuchni]], więc naturalne tło sceny 05.
- **Wskazówka W2:** Ansel, odruchowo, próbuje wystukać na beczce rytm, którym otwierało się wejście za jego czasów; ręka przechodzi przez drewno na wylot. Chłopiec patrzy na dłoń i próbuje jeszcze raz.
- **Postać z Hufflepuffu** może wejść do środka: pokój wspólny (niski, okrągły, ciepły, pełen roślin w doniczkach i miedzianych lamp) i dormitorium szóstego roku. Tu może się odbyć spotkanie wyrównujące: Ansel siedzi o świcie na jej łóżku.
- **Rejestr domu:** [[npc.pomona-sprout]] na uprzejmą prośbę przegląda rejestr Hufflepuffu i nie znajduje Ansela Draya ani teraz, ani w latach wstecz (W2, `flaga.ansel-poza-spisem`). Rozmowa może się odbyć przy wejściu albo w jej gabinecie przy cieplarniach.
- [[npc.gruby-mnich]] snuje się po tym korytarzu i wypytuje pierwszoroczniaków o „ducha Puchona”. Zapytany o Ansela: „Znałem chłopca o tym imieniu… nie, to niemożliwe”.

**Stan zmienny.**
- Przed `flaga.godzina-stracona`: zwykłe beczki, zwykły korytarz; Mnich narzeka na plotkę, jeśli `flaga.plotka-duch-puchona`.
- Po `flaga.ansel-spotkany`: Ansel czasem stoi przy beczkach i słucha śmiechu ze środka. Nie wchodzi, „bo nikt nie otwiera”.
- Jeśli `flaga.ansel-poza-spisem`: Sprout martwi się, że „jakiś Puchon się zgubił”, i obiecuje sprawdzić jeszcze raz (zahaczka na Sesję 2).

**Odczyt do mapy dryfu (propozycja robocza):** −1 minuta, gładko (podziemia są daleko od wieży). Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.** Postać spoza Hufflepuffu, która stuka w beczki na chybił trafił, dostaje strumień octu w twarz (kanon): mokra szata, smród i śmiech Puchonów, nic więcej. W środku dla Puchona bezpiecznie; dla innych postaci wejście bez zaproszenia to kłopot z reputacją, a nie z regulaminem szkoły.

### Do weryfikacji
- Szczegóły wejścia i wnętrza pochodzą z Wizarding World (Pottermore), nie z powieści; czy wyglądały tak samo w 1951 i 1969, kanon nie mówi (niepewne, przyjmujemy, że tak).
- Sprout jako opiekunka Hufflepuffu w 1969: zob. [[kanon.kadra-hogwartu-1969]].

## Ukryte

Ansel pamięta rytm z 1951 roku i myli się w nim o jedno uderzenie. Jeśli postać z Hufflepuffu zapyta, jak on to stuka, odkryje, że ten rytm jest „prawie dobry, tylko staroświecki”. Kolor, nie wskazówka.

## Testy

Terminy Walkera w testach: Wits (bystrość), Observation (spostrzegawczość).

```yaml
test:
  id: miejsce.pokoj-wspolny-hufflepuffu.test.beczki
  opis: "Postać spoza Hufflepuffu próbuje sama otworzyć wejście, podglądając rytm stukania."
  kto: jeden
  rzut: "1D10 + Wits + Observation"
  trudnosc: "DO-USTALENIA"
  wyniki:
    - wynik: sukces
      efekt: "Pokrywa się odchyla. W środku robi się cicho, a ktoś z szóstego roku Hufflepuffu pyta uprzejmie, ale twardo, czego tu szukasz."
      flagi_ustaw: []
    - wynik: porazka
      efekt: "Strumień octu prosto w twarz. Do kolacji cały zamek wie, czym pachniesz."
      flagi_ustaw: []
```

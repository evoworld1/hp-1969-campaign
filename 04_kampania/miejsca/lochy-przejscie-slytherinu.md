---
id: miejsce.lochy-przejscie-slytherinu
typ: miejsce
tytul: "Lochy: korytarz Eliksirów i przejście do Slytherinu"
status: szkic
lokalizacja: "Hogwart, lochy; korytarz od sali Eliksirów do gładkiej kamiennej ściany, za którą jest pokój wspólny i dormitoria Slytherinu"
pewnosc: niepewne
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.06 (koniec śladu drżących odczytów), s1.scena.08 (konfrontacja, siatka bezpieczeństwa 5), s1.scena.12 (Gideon Pratt, dormitorium)
sceny: [s1.scena.06, s1.scena.08, s1.scena.12]
tylko_mg: true
tagi: [s1, hogwart, lochy, slytherin, cassian, slad-ukaszen, dormitorium, mapa-dryfu]
zrodla:
  - "Rowling, Komnata Tajemnic, rozdz. 12 (wejście do pokoju wspólnego Slytherinu za kamienną ścianą na hasło, zielonkawe światło); opis własnymi słowami"
  - "Wizarding World (Pottermore): pokój wspólny Slytherinu pod jeziorem"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 06, wskazówka W4, siatka bezpieczeństwa 5)"
aktualizacja: 2026-11-20
---
## Do odczytania

Im niżej schodzicie, tym bardziej chłód wchodzi pod szaty. Ściany są mokre i błyszczą w świetle pochodni, a powietrze pachnie wilgotnym kamieniem i czymś gorzkim, co zostało po porannych Eliksirach. Kroki niosą się daleko. W połowie korytarza, w płytkiej wnęce, wisi stary zegar ścienny z pękniętą szybką. Jego wskazówki stoją. Korytarz kończy się gładką, pustą ścianą, przy której nikt z was nie zatrzymałby się ani na chwilę, gdyby nie wiedział, co za nią jest.

## Dla MG

**Rola w Sesji 1.** Koniec drugiego wzoru z mapy dryfu (scena 06): drżące odczyty układają się w trasę, która kończy się tutaj (`flaga.slad-ukaszen`, W4). To terytorium Cassiana.
- [[npc.gideon-pratt]] stracił godzinę na tym korytarzu przy sali Eliksirów i zapisał dzień, godzinę i miejsce. Jego dane pomagają ustawić `flaga.rejestr-godzin` i `flaga.slad-ukaszen`.
- **Wnęka ze stojącym zegarem:** tu [[npc.cassian-vane]] najczęściej podbiera czas, bo blisko do dormitorium i nikt nie zagląda. Pod zegarem na posadzce widać drobne, świeże rysy, jakby ktoś często stawał w tym samym miejscu (kolor, szczegół wykonawczy).
- **Postać ze Slytherinu** (siatka bezpieczeństwa 5): chłopiec szóstego roku śpi w jednym dormitorium z Cassianem i widzi nocą, jak ten za zaciągniętą kotarą nakręca stojący zegarek i mamrocze liczby (W4). Zegarek leży pod poduszką, Karta Pożyczającego w podszewce kufra. Dziewczyna ze Slytherinu widzi w pokoju wspólnym Cassiana siedzącego do późna przy kominku z zegarkiem w dłoni.

**Krótka wstawka do odczytania (Tempus we wnęce):**
> Cyfry nad różdżką nie chcą się ułożyć. Skaczą: trzy minuty do przodu, pięć wstecz, znowu do przodu, jak igła kompasu przy magnesie. Na chwilę słyszycie tykanie, choć zegar we wnęce stoi.

**Stan zmienny.**
- Przed `flaga.godzina-stracona`: zwykły, zimny korytarz; zegar we wnęce stoi od lat i nikt na niego nie patrzy.
- Gdy `flaga.s1-zegar-kradziezy` rośnie: odczyty we wnęce drżą coraz mocniej. Przy 2 na korytarzu mdleje pierwszoroczniak (albo na schodach, zob. scena 12).
- Jeśli `flaga.zegarek-cassiana` ≠ `u-cassiana`: drżenie słabnie do zera w ciągu pół dnia; Cassian krąży nerwowo po korytarzu i szuka zegarka.
- Po `flaga.cassian-zdemaskowany`: Cassian unika tego korytarza; postać ze Slytherinu zauważa, że wraca do dormitorium ostatni.

**Odczyt do mapy dryfu (propozycja robocza dla sceny 06):** drżący, najsilniejszy w zamku (skoki o kilka minut w obie strony), na tle słabego gładkiego −1. Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.**
- Wieczorem lochy to teren Ślizgonów: obca postać na korytarzu przy ich ścianie ściąga zaczepki i pytania (reputacja, ewentualnie drobny pojedynek słowny). [[npc.rosalind-teague]] chętnie zapyta głośno, kto tu węszy.
- Wejście do pokoju wspólnego wymaga hasła; postacie spoza Slytherinu nie wejdą bez pomocy kogoś z domu.
- Kryjówki: sala Eliksirów (po lekcjach zamknięta, ale drzwi do składziku bywają uchylone), wnęka z zegarem dla jednej osoby, załom korytarza przed ścianą.

### Do weryfikacji
- Kto uczy Eliksirów w 1969 (Slughorn): kanon, do potwierdzenia przez straznika-kanonu (graf wspomina „chłopca od Slughorna”).
- Stary zegar we wnęce to nasz szczegół.

## Ukryte

Cassian nie potrzebuje zegara we wnęce: podbiera przez swój zegarek. Wnęka jest dla niego wygodna, bo stoi tu inny martwy zegar, który „zagłusza” drżenie jego własnego (tak to sobie tłumaczy, karta mu tego nie mówi). Zegar we wnęce nie ma znaczenia fabularnego; jest wizualnym znakiem miejsca.

## Testy

Kradzież zegarka spod poduszki albo karty z kufra (siatka bezpieczeństwa 5) rozstrzyga jeden test opisany w karcie [[przedmiot.zegarek-cassiana]]. Tutaj go nie powtarzamy.

Flagę `flaga.zegarek-cassiana` (`u-graczy`) albo `flaga.karta-u-graczy` ustawia przy wygranej plik sceny, w której do kradzieży dojdzie.

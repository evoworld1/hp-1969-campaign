---
id: przedmiot.przepustka-flitwicka
typ: przedmiot
tytul: "Przepustka profesora Flitwicka"
status: szkic
rodzaj: "dokument (podpisana zgoda nauczyciela)"
wlasciciel_start: npc.filius-flitwick
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.02 (Flitwick podpisuje), s1.scena.09 (wejście wieczorem za zgodą), s1.scena.12
sceny: []
tylko_mg: true
tagi: [s1, flitwick, biblioteka, dzial-ksiag-zakazanych, legalne-wejscie, pince]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 02, scena 09)"
  - "03_postacie/npc/filius-flitwick.md, 03_postacie/npc/irma-pince.md"
  - "Rowling, Komnata Tajemnic, rozdz. 10 (podpisana zgoda nauczyciela na książkę z Działu Ksiąg Zakazanych; motyw opisany własnymi słowami)"
aktualizacja: 2026-11-20
---
## Opis

Kartka wyrwana z notesu profesora Flitwicka, trochę za mała jak na urzędowy papier. Pismo drobne i równe, z kreseczkami jak od linijki, a pod spodem podpis zamaszysty jak machnięcie różdżką, dwa razy większy niż reszta tekstu. Treść, mniej więcej: prośba do bibliotekarki, by okazicielom udostępniła jeden tom z Działu Ksiąg Zakazanych do pracy domowej z Zaklęć, z tytułem książki, datą 22 września 1969 i imionami postaci. Kartka pachnie lekko kredą i dropsami miętowymi z kieszeni profesora.

## Działanie

**Jak ją zdobyć.** Pod koniec Zaklęć (scena 02) Flitwick podsuwa ciekawskim tytuł książki z Działu Ksiąg Zakazanych i może podpisać przepustkę, jeśli prośba jest szczera (`flaga.przepustka-flitwicka`). Kłamstwo nie działa: Flitwick udaje, że wierzy, ale nie podpisuje. Kto opuścił lekcję, może dostać przepustkę na korepetycjach z Tempus (scena 12).

**Co daje.**
- Wejście do Działu Ksiąg Zakazanych **wieczorem, bez testu**, aż do zamknięcia o dziewiątej (`flaga.biblioteka-legalnie`). [[npc.irma-pince]] traktuje ją jako zgodę na pobyt w dziale, ale co jakiś czas zagląda między regały.
- Prawo do **jednej** książki. Branie innych tomów to złamanie zasad: pani Pince wyprasza i zgłasza opiekunowi domu.
- Pretekst, by stać w ostatnim rzędzie działu, nie budząc podejrzeń.

**Czego nie daje.** Nie pozwala zostać po dziewiątej ani wrócić nocą. Nie otwiera drzwi do pracowni.

**Inne drogi do tego samego.** Prośba do [[npc.thaddeus-wren]] albo [[npc.minerva-mcgonagall]] („do pracy domowej o dryfie”), szczera prośba do pani Pince albo zgoda [[npc.albus-dumbledore]] po rozmowie o Anselu. Każda ustawia `flaga.biblioteka-legalnie`; przepustka Flitwicka jest tylko najwcześniejsza.

## Mechanika

Bez testów własnych. Wejście z przepustką nie wymaga rzutu. Jeśli postacie podrobią przepustkę albo dopiszą drugi tytuł, MG może poprosić o test przeciwny z panią Pince (liczby ustala mechanik); porażka kończy się wyproszeniem i listem do opiekuna domu, a droga nocna dalej istnieje.

## Dla MG

**Tytuł książki.** Graf go nie podaje. Propozycja wykonawcza do akceptacji Reżysera: Flitwick poleca **ten sam tom o zegarmistrzostwie**, o który trzy razy prosił Cassian (tytuł roboczy: „Zegary, które się mylą”). Wtedy pani Pince, wydając książkę, sama mówi: „Pan Vane też o nią prosił. Trzy razy” (W5.2 bez dodatkowej sceny). Jeśli Reżyser woli osobne drogi do wskazówki, Flitwick poleca inną książkę o magii czasu.

**Ton.** Flitwick podpisuje z radością, bo chwali starania. Przy podpisie poważnieje na jedno zdanie: „Z czasem się nie żartuje, panie i panowie”.

**Powiązane flagi:** `flaga.przepustka-flitwicka`, `flaga.biblioteka-legalnie`, `flaga.praca-domowa-dryf`, `flaga.tempus-opanowane`, `flaga.filch-zlapal` (wieczorny wariant: pani Pince).

**Powiązane obiekty:** [[npc.filius-flitwick]], [[npc.irma-pince]], [[miejsce.sala-zaklec]], [[miejsce.biblioteka]], [[s1.handout.praca-domowa-dryf]].

### Do weryfikacji
- Pani Pince jako bibliotekarka w 1969: niepewne (zob. [[kanon.kadra-hogwartu-1969]]).
- Godzina zamknięcia o dziewiątej: szczegół wykonawczy z karty pani Pince.

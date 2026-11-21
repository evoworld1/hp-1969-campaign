---
id: miejsce.sala-zaklec
typ: miejsce
tytul: "Sala Zaklęć"
status: szkic
lokalizacja: "Hogwart, skrzydło lekcyjne; okna od strony Wieży Zegarowej (piętro robocze, zob. Do weryfikacji)"
pewnosc: niepewne
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.02 (lekcja Tempus), s1.scena.12 (korepetycje u Flitwicka)
sceny: [s1.scena.02, s1.scena.12]
tylko_mg: true
tagi: [s1, hogwart, lekcja, tempus, flitwick, mapa-dryfu]
zrodla:
  - "Rowling, Kamień Filozoficzny, rozdz. 8 (Flitwick uczy, stojąc na stosie książek); opis własnymi słowami"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 02)"
aktualizacja: 2026-11-20
---
## Do odczytania

Sala jest jasna i trochę za ciepła, bo słońce wpada przez wysokie okna prosto na ławki. Na katedrze piętrzy się stos grubych tomów, a na jego szczycie, jak na mównicy, stoi profesor Flitwick z różdżką w górze. Na ścianie wisi zwykły zegar szkolny o białej tarczy. Za oknem, ponad dachami, widać ciemną sylwetkę Wieży Zegarowej. Kiedy wieża bije, szyby w oknach cichutko brzęczą.

## Dla MG

**Rola w Sesji 1.** Lekcja Tempus (scena 02), pierwszy test magiczny każdej postaci. Później miejsce korepetycji (scena 12), gdy któraś postać chce dopracować zaklęcie.
- [[npc.filius-flitwick]] uczy Tempus: nad różdżką pojawiają się dymne cyfry prawdziwej chwili, nie wskazań zegara.
- **Sygnał dziwności (W0):** gdy wieża bije, cyfry nad różdżką Flitwicka drżą i przeskakują o minutę. Flitwick: „Wieża boczy się od dwóch tygodni”.
- Jeśli [[npc.cassian-vane]] chodzi na Zaklęcia z postaciami, pięć minut przed końcem prosi o wyjście „do skrzydła szpitalnego”.
- Flitwick zadaje pracę domową o dryfie (`flaga.praca-domowa-dryf`); ciekawskim wspomina, że o dryfie pisano poważnie tylko w Dziale Ksiąg Zakazanych, ale przepustki nie podpisze (decyzja MG 2026-11-20: do działu wchodzi się wyłącznie nocą, bez zgody).

**Stan zmienny.**
- Po `flaga.godzina-stracona`: na korepetycjach Flitwick mówi mimochodem: „Już trzecie zgłoszenie zgubionej godziny w tym tygodniu” (droga awaryjna do W1).
- Jeśli `flaga.praca-domowa-dryf` i gracze oddają pomiary: Flitwick przegląda je i rzuca: „Wszystkie wasze błędy pochylają się w jedną stronę” (droga awaryjna do W3).
- Jeśli `flaga.tempus-opanowane` nie jest ustawiona po lekcji: korepetycje tu, po kolacji, dają drugą szansę.

**Odczyt do mapy dryfu (propozycja robocza):** zegar ścienny −2 minuty, gładko; przy biciu wieży Tempus drży o minutę i wraca. Liczby zatwierdza architekt-fabuly.

**Zagrożenia i kryjówki.** Brak zagrożeń. Po lekcjach sala bywa otwarta; za stosem podręczników przy katedrze schowa się jedna osoba, ale Flitwick ma dobry słuch.

### Do weryfikacji
- Piętro sali Zaklęć nie jest ustalone w książkach w sposób, na którym warto polegać (niepewne); okna od strony Wieży Zegarowej to nasz wybór, żeby bicie było słychać na lekcji.
- Flitwick jako nauczyciel Zaklęć w 1969: zob. [[kanon.kadra-hogwartu-1969]].

## Ukryte

Drżenie cyfr przy biciu wieży to oddech przypływu: każde uderzenie dzwonu na moment szarpie czasem w całym zamku. W sali Zaklęć nikt nie podbiera czasu, więc odczyt jest „gładki” poza chwilą bicia.

## Testy

Testy rzucania Tempus należą do pliku sceny 02 (trudność według zasady domowej ZD-21, ustala mechanik).

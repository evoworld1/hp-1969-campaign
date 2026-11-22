---
id: npc.filius-flitwick
typ: npc
tytul: "Prof. Filius Flitwick"
status: szkic
imie: "Filius Flitwick"
rola: "Nauczyciel Zaklęć: uczy Tempus, zadaje pracę domową o dryfie zegarów"
dom: Ravenclaw
rocznik_1969: "nauczyciel"
kanon: true
pewnosc: niepewne
# Docelowo: s1.scena.02, s1.scena.12 (korepetycje z Tempus)
sceny: [s1.scena.01, s1.scena.02, s1.scena.03, s1.scena.06, s1.scena.12]
tylko_mg: true
tagi: [s1, nauczyciel, zaklecia, tempus, kanon]
zrodla:
  - "01_kanon/kadra-hogwartu-1969.md (Zaklęcia 1969: niepewne, bardzo prawdopodobne; WA rozdz. 10)"
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 02)"
aktualizacja: 2026-11-20
---
## W skrócie

Maleńki, pogodny mistrz Zaklęć. W scenie 02 uczy Tempus (zaklęcia pokazującego prawdziwą chwilę) i marszczy brwi, gdy cyfry nad jego różdżką drżą przy biciu wieży. Zadaje pracę domową: zmierzyć dryf trzech zegarów (`flaga.praca-domowa-dryf`). Ciekawskim wspomina, że o dryfie czasu pisano poważnie tylko w Dziale Ksiąg Zakazanych, ale przepustki nie podpisze (decyzja MG 2026-11-20: do działu wchodzi się wyłącznie nocą, bez zgody). Jego wzmianka to motywacja do nocnej wyprawy, nie ułatwienie. W scenie 12 daje korepetycje z Tempus (`flaga.tempus-opanowane`).

## Wygląd i sposób bycia

Bardzo niski, stoi na stosie książek za katedrą, wymachuje różdżką z entuzjazmem. Chwali starania bardziej niż spryt.

## Głos

Piskliwy, szybki i radosny; przy magii czasu nagle poważnieje i zniża głos: „Z czasem się nie żartuje, panie i panowie”.

## Czego chce

Żeby uczniowie zrozumieli, nie tylko powtórzyli. Bez graczy: martwi się „boczącą się” wieżą (od dwóch tygodni), notuje zgłoszenia zgubionych godzin („już trzecie w tym tygodniu”).

## Sekret

Brak sekretu fabularnego. Zna teorię magii czasu i wie, że Ministerstwo nie toleruje eksperymentatorów; dlatego ostrożnie dawkuje ciekawskim wiedzę.

## Sygnały

Przy każdym biciu z wieży zerka w okno. Na błąd w Tempus reaguje zachętą, nie karą.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość lub szczera ciekawość | Korepetycje z Tempus i rozpromieniona uwaga, że „o takich rzeczach pisano tylko w książkach, do których szóstego roku nie wpuszczam, i dobrze”. |
| Prośba o przepustkę do Działu Ksiąg Zakazanych | Uprzejma, stanowcza odmowa: „Nie na ten temat, moi drodzy. Z czasem się nie żartuje”. Bez kary. |
| Kłamstwo | Udaje, że wierzy, ale przestaje dawkować ciekawostki. |
| Pytania o zgubione godziny | Poważnieje: „Jeśli ktoś bawi się czasem, to nie jest zabawa”. Kieruje do Wrena albo dyrektora. |

## Mechanika

```yaml
statystyki:
  id: npc.filius-flitwick.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Walker 2e s. 120-121 (wpis z lat 90.). Cechy 35 (Veteran), umiejętności około 105 (zakres Professional): poziom wg cech. Tempus: zaklęcie kampanii (ZD-21). Mistrz Zaklęć i pojedynków (kanon: mistrz pojedynków).
    rodzaj: czarodziej
    poziom: "Veteran Wizard"   # s. 102; cechy 35, umiejętności 105
    lineage: Part-Goblin
    school: "Hogwarts (1946)"
    house: "Ravenclaw"
    profession: "Charms Master"
    cechy:
      Vitality: 6
      Speed: 7
      Wits: 7
      Knowledge: 7
      Focus: 8
    umiejetnosci:
      "Art (Choral Music)": 7
      "Authority (Teaching)": 6
      Broomstick Flying: 5
      Charms: 10
      D.A.D.A.: 9
      Dark Arts: 7
      Duelling: 9
      History of Magic: 7
      Magical Theory: 7
      Muggle Studies: 5
      Persuasion: 5
      Potions: 6
      "Prestige (Hogwarts)": 7
      "Strategy (Duelling)": 7
      Transfiguration: 8
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Expecto Patronum: 0
      Protego: 0
      Protego Horribilis: 0
      Wingardium Leviosa: 0
      Reparo: 0
      Accio: 0
      Impedimenta: 0
      Stupefy: 0
      Specialis Revelio: 0
      Tempus: 0
    patronus: NC
    rozdzka: "Wierzba (Willow), włos jednorożca; Healing Magic +3, Charms +1, Protective Magic +2. Propozycja [nasze] (kanon nie podaje)"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 7; Wykrywanie kłamstwa (Wits + Chicanery): 1D10 + 7; Inicjatywa w pojedynku (Speed + Duelling): 1D10 + 16; Atak w pojedynku (Wits + Duelling): 1D10 + 16; Unik (Speed + Wits): 1D10 + 14; Protego (Wits + Charms + różdżka): 1D10 + 18. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Flitwick jako nauczyciel Zaklęć i opiekun Ravenclawu w 1969: `niepewne` (bardzo prawdopodobne; zob. [[kanon.kadra-hogwartu-1969]]). Walker (s. 120) podaje lata nauki 1946–1952, czego kanon nie potwierdza.
- Tempus to zaklęcie kampanii (zasada domowa ZD-21, Charm (urok), trudność 9), nie kanon.

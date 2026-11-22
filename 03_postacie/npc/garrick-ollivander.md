---
id: npc.garrick-ollivander
typ: npc
tytul: "Garrick Ollivander"
status: szkic
imie: "Garrick Ollivander"
rola: "Wytwórca różdżek w opcjonalnym prologu na Pokątnej"
dom: brak
rocznik_1969: "dorosły, wytwórca różdżek"
kanon: true
pewnosc: kanon
# Docelowo: s1.scena.11 (prolog, opcjonalny)
sceny: [s1.scena.11]
tylko_mg: true
tagi: [s1, prolog, pokatna, rozdzki, kanon]
zrodla:
  - "KF rozdz. 5 (sklep Ollivandera, pamięć każdej sprzedanej różdżki)"
  - "Walker 2e s. 26 (tabela rdzeni Ollivandera)"
aktualizacja: 2026-11-20
---
## W skrócie

Właściciel sklepu z różdżkami na Pokątnej. W prologu (scena 11) obsługuje postać, która potrzebuje nowej różdżki (złamana w wakacje, odziedziczona, „nie słucha”). Scena nauczająca: rozmowa i jeden prosty test. Dobór różdżki według zasad Walkera (rdzenie Ollivandera: włos jednorożca, włókno smoczego serca, pióro feniksa; s. 26).

## Wygląd i sposób bycia

Szczupły i blady, bardzo jasne oczy, które nie mrugają. Wyrasta zza regałów bez dźwięku. Sklep pełen wąskich pudełek, pachnie kurzem.

## Głos

Cichy, śpiewny, mówi o różdżkach jak o osobach: „To nie pani wybiera różdżkę. Proszę jej dać chwilę do namysłu.”

## Czego chce

Żeby każda różdżka trafiła do właściwej ręki. Bez graczy: pracuje, pamięta każdą sprzedaną różdżkę.

## Sekret

Brak sekretu fabularnego. Postać, której różdżka „nie słucha”, może usłyszeć od niego tylko jedno: „Różdżki źle znoszą rzeczy dziejące się nie w porę”. Kolor, nie wskazówka.

## Sygnały

Bierze w dłoń starą różdżkę postaci i na chwilę milknie, jakby słuchał.

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość i cierpliwość | Dobiera różdżkę staranniej, opowiada o drewnie i rdzeniu. |
| Pośpiech lub lekceważenie | Uprzejmie zwalnia jeszcze bardziej. |
| Pytanie o złamaną różdżkę | Ocenia, czy da się ją naprawić; najczęściej odradza. |

## Mechanika

```yaml
statystyki:
  id: npc.garrick-ollivander.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    # Uzupełnione 2026-11-22 (mechanik). Walker 2e s. 126 (cechy i umiejętności z podręcznika; Reparo, Lumos i Protego dopisane [nasze]). Scena 11: bez walki; liczby tylko dla testów doboru różdżki.
    rodzaj: czarodziej
    poziom: "Professional Wizard"   # s. 102; cechy 30, umiejętności 93
    lineage: Half-blood
    school: "Hogwarts"
    house: "Ravenclaw"
    profession: "Wandmaker"
    cechy:
      Vitality: 3
      Speed: 4
      Wits: 7
      Knowledge: 9
      Focus: 7
    umiejetnosci:
      Ancient Runes: 6
      Charms: 8
      "Crafting (Wands)": 9
      D.A.D.A.: 7
      Dark Arts: 7
      Duelling: 6
      History of Magic: 6
      Magical Theory: 8
      Potions: 6
      "Prestige (Wandmaker)": 8
      "Strategy (Business)": 5
      Transfiguration: 7
      Wandlore: 10
    zaklecia:                     # nazwa: aktualna trudność (0 = opanowane)
      Avis: 0
      Expecto Patronum: 0
      Orchideous: 0
      Reparo: 0
      Lumos: 0
      Protego: 0
    patronus: NC
    rozdzka: "Własna różdżka niepodana (kanon i Walker milczą); bez premii. Zdolność Wand Versatility: kara za cudzą różdżkę mniejsza o 5 (s. 10, 126)"
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 7; Wykrywanie kłamstwa (Wits + Chicanery): 1D10 + 7. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Mechanik: niejasność podręcznika przy rdzeniu ze smoczego serca a drewnie „Oak” (Walker s. 29), zapisana w stanie kampanii.
- Imię Garrick: z materiałów Wizarding World (kanon poza powieściami); do potwierdzenia przez strażnika kanonu.

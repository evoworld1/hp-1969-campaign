---
id: npc.argus-filch
typ: npc
tytul: "Argus Filch"
status: szkic
imie: "Argus Filch"
rola: "Nowy woźny: nocne zagrożenie, świadek wizyt zegarmistrza"
dom: brak
rocznik_1969: "dorosły, woźny (nowy)"
kanon: true
pewnosc: niepewne
# Docelowo także: s1.scena.09 (nocny obchód), s1.scena.10, s1.scena.12
sceny: [s1.scena.01, s1.scena.06, s1.scena.07, s1.scena.09, s1.scena.10, s1.scena.12]
tylko_mg: true
tagi: [s1, wozny, noc, kanon]
zrodla:
  - "04_kampania/stan-kampanii.md, rejestr decyzji 2026-11-19 (Filch jest nowym woźnym)"
  - "01_kanon/kadra-hogwartu-1969.md (Pringle albo Filch, niepewne)"
  - "KT rozdz. 8 (Filch jest charłakiem; kurs korespondencyjny magii)"
aktualizacja: 2026-11-20
---
## W skrócie

Nowy woźny, gorliwy, podejrzliwy, nie zna jeszcze wszystkich tajnych przejść (decyzja MG). W scenie 01 przegania kogoś z sali. Nocą patroluje i jest jedynym strażnikiem nocnej wyprawy do biblioteki (scena 09, jedyne wejście od decyzji MG 2026-11-20; kandydat na Zegar Północy). Może złapać postacie w drodze (siatka bezpieczeństwa 9) albo, zwabiony trzynastym biciem, z notatnikiem Marrow (`flaga.filch-zlapal`, scena 10, siatka 4). W scenie 12: „Zegarmistrz był w czwartek. Znowu” (wskazówka W8) i księga szlabanów po poprzedniku, z której z satysfakcją czyta stare wpisy.

## Wygląd i sposób bycia

Chudy, zgarbiony, latarnia w ręku, klucze u pasa. Nowy, więc wszystko zapisuje w zeszycie i sprawdza dwa razy.

## Głos

Zgrzytliwy szept, który nagle przechodzi w krzyk: „Po ciszy nocnej? Nazwiska. Domy. Teraz.”

## Czego chce

Porządku i szacunku, którego nie dostaje. Bez graczy: patroluje, uczy się przejść, prowadzi księgę szlabanów po poprzedniku (Apollyonie Pringle'u, o którym starsi uczniowie opowiadają anegdoty).

## Sekret

Jest charłakiem (kanon) i to ukrywa. W 1969, w czasie marszów o prawa charłaków, czyta o nich w „Proroku” po kryjomu i nikomu o tym nie mówi [wykorzystanie: nasze].

## Sygnały

Zatrzymuje się przy każdym spóźnionym zegarze i stuka w szybkę, jakby to pomagało. Z obchodu wraca zawsze tą samą trasą (do wykorzystania przy skradaniu).

## Reakcje

| Podejście graczy | Reakcja |
|---|---|
| Uprzejmość | Podejrzliwy, ale mięknie wobec kogoś, kto go wysłucha; może powiedzieć o wizytach zegarmistrza. |
| Zaczepka za dnia (np. przy śniadaniu, scena 01) | Najpierw pyta o nazwisko i dom, zapisuje w zeszycie. Pytanie o spóźniony zegar zbywa burknięciem, że „wieża się boczy, a dzwony za nią”. O zegarmistrzu jeszcze nie mówi (to zostaje na scenę 12). |
| Kłamstwo przy złapaniu | Nie wierzy nikomu po ciszy nocnej. Szlaban i konfiskata (siatka bezpieczeństwa 4). |
| Uwaga o charłakach lub magii w jego obecności | Kpina z niemagicznych rani go głęboko; zapamięta postać na cały rok. |

## Mechanika

```yaml
statystyki:
  id: npc.argus-filch.statystyki
  system: walker-2e-draft-2026-04
  wartosci:
    rodzaj: czarodziej   # charłak (Squib): bez zaklęć, nie rzuca
    poziom: "Average student"   # s. 102; cechy 16, umiejętności 31
    lineage: Squib
    school: "brak"
    profession: "Woźny Hogwartu"
    cechy:
      Vitality: 4
      Speed: 3
      Wits: 3
      Knowledge: 6
      Focus: 0
    umiejetnosci:
      "Art (House Keeping)": 7
      Balance: 4
      "Crafting (Naprawy)": 5
      "Law (Regulamin szkoły)": 5
      "Observation (Patrol)": 6
      "Prestige (Hogwarts)": 1
      Stealth: 3
    zaklecia: {}
    patronus: brak
    zdrowie: {body: 0, mind: 0}
  zdolnosci_specjalne:
    - nazwa: "Obchód"
      opis: "Przeciwnik w teście skradania (test przeciwny: Speed + Stealth, czyli szybkość i skradanie, postaci przeciw jego Wits + Observation, czyli bystrości i spostrzegawczości). Rzut obronny Filcha to 1D10 + 9 (Wits 3 + Observation (Patrol) 6, jak we wpisie Walkera s. 123; sceny 09 i 10 liczą tę samą sumę 9, choć rozkładają ją na Wits 4 + Observation 5). Zegar Północy w scenie 09 zastąpił licznik hałasu (założenie robocze 2026-11-21)."
    - nazwa: "Typowe rzuty"
      opis: "Czujność (Wits + Observation): 1D10 + 9; Unik (Speed + Wits): 1D10 + 6; Odporność na obrażenia (1D10 + Vitality): 1D10 + 4. Sumy gotowe do użycia przy stole (Walker 2e s. 3-4, 33, 41; wzór: 1D10 + cecha + umiejętność)."
```

## Do weryfikacji

- Kiedy Filch zastąpił Pringle'a, kanon nie podaje; „nowy woźny w 1969” to decyzja MG z 2026-11-19 (`niepewne` w kanonie).
- Pani Norris: jeśli jest, to młoda kotka. Kanon jej obecności w 1969 nie potwierdza (zob. [[kanon.kadra-hogwartu-1969]]); MG decyduje, czy ją wprowadzić.
- Sympatia Filcha do marszów charłaków to nasz pomysł na kolor, bez wpływu na fabułę Sesji 1.

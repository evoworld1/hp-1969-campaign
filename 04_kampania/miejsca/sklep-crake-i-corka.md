---
id: miejsce.sklep-crake-i-corka
typ: miejsce
tytul: "Zakład zegarmistrzowski „Crake i Córka”"
status: szkic
lokalizacja: "Londyn, ulica Pokątna, wąska kamienica w bocznej części ulicy"
pewnosc: nasze
# Pliki scen jeszcze nie istnieją (walidator wymaga istniejących identyfikatorów).
# Docelowo: s1.scena.11 (witryna, pogawędka), s1.scena.10 (epilog: Crake w warsztacie słyszy trzynasty raz)
sceny: [s1.scena.10, s1.scena.11]
tylko_mg: true
tagi: [s1, s2, pokatna, crake, zegarmistrz, witryna, ziarno-s2]
zrodla:
  - "05_scenariusze/s1-godzina-ktorej-nie-bylo/graf-scen.md (scena 11, epilog sceny 10, wskazówka W8)"
  - "03_postacie/npc/hollis-crake.md"
aktualizacja: 2026-11-20
---
## Do odczytania

Witryna jest mała i lśni jak gablota w muzeum. Za szybą stoją zegary wszelkich rozmiarów, od kieszonkowych po kominkowe, i wszystkie tykają naraz, równiutko, jakby oddychały jednym rytmem. Nad drzwiami wisi szyld w złoto-zielonych literach: „Crake i Córka. Zegary i mechanizmy”. Słowa „i Córka” są odmalowane świeżej niż reszta. Za szybą starszy pan z lupą na rzemyku przestawia wskazówkę o jedną minutę i mówi do zegara coś czułego.

## Dla MG

**Rola w Sesji 1.** Tylko witryna i próg (prolog, scena 11). Pogawędka ruchoma z [[npc.hollis-crake]]: Crake wychodzi na próg, wycierając palce w szmatkę, i chętnie zagaduje młodych. Zwykły sukces testu spostrzegawczości: „Wieża w Hogwarcie ostatnio wymaga więcej uwagi” (`flaga.crake-poznany`, W8). Bardzo wysoki wynik: zdjęcie dziewczyny w kopercie jego zegarka i kilka zdań o córce, która „pomagała mu w sklepie” (`flaga.crake-dluga-rozmowa`).

**Jeśli gracze chcą wejść do środka.** Crake wpuszcza na minutę: lada, setki tykających zegarów, zapach oleju i mięty. Drzwi do warsztatu z tyłu są zamknięte („tam bałagan, młodzi państwo”). Nic więcej w Sesji 1.

**Epilog sceny 10 (tylko dla MG, do odczytania na koniec sesji, jeśli MG chce):**
> Daleko stąd, w Londynie, w ciemnym warsztacie na Pokątnej, starszy mężczyzna podnosi głowę znad rozłożonego mechanizmu. Wszystkie zegary na ścianach właśnie wybiły trzynaście razy. Mężczyzna długo patrzy w okno. Potem odkłada pęsetę.

**Stan zmienny.**
- Jeśli `flaga.s1-prolog-pokatna` nie jest ustawiona: postacie nie widzą sklepu w Sesji 1, chyba że w epilogu (scena 10).
- Jeśli `flaga.crake-dluga-rozmowa`: w Sesji 2 Crake pamięta postać po imieniu i pyta o jej zegarek.
- Po `flaga.trzynasta-wybila`: epilog jak wyżej. W Sesji 2 zegary w witrynie przestają tykać równo: jeden zawsze się spóźnia.

**Zagrożenia i kryjówki.** Brak w Sesji 1. To miejsce ma być ciepłe i bezpieczne; jego ciężar wyjdzie dopiero w Sesji 2.

### Do weryfikacji
- Całe miejsce jest nasze. Szyld z odmalowanym „i Córka” to szczegół wykonawczy (znak, że Crake trzyma pamięć córki; nie mówi graczom wprost, że nie żyje).

## Ukryte

Propozycja na Sesję 2 (nie decyzja MG): w warsztacie, za zamkniętymi drzwiami, leżą rysunki mechanizmu Wieży Zegarowej z naniesionymi poprawkami i list bez podpisu (zlecenie od Wymarka). Nie do znalezienia w Sesji 1; zahaczka na Sesję 2. Zdjęcie Nory w kopercie zegarka Crake nosi zawsze przy sobie.

## Testy

Test spostrzegawczości przy pogawędce opisuje karta [[npc.hollis-crake]]; liczby ustala mechanik (propozycja grafu: „bardzo wysoki wynik” to `sukces-imponujacy`).

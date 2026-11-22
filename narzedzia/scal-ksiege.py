"""Scala robocze opisy zaklęć (99_robocze/ksiega/pl1-3.yaml) w 02_zasady/walker/ksiega-zaklec.yaml."""
import yaml, pathlib
KORZEN = pathlib.Path(__file__).resolve().parent.parent
R = KORZEN / '99_robocze' / 'ksiega'
L = []
for n in (1, 2, 3):
    p = R / f'pl{n}.yaml'
    if p.exists(): L += yaml.safe_load(p.read_text(encoding='utf-8'))
for z in L:
    z['nazwa'] = z['nazwa'].replace('–', '-') if z['nazwa'].startswith(('Feather', 'Bubble', 'Anti', 'Wound')) else z['nazwa']
    if z['nazwa'] == 'Extinguishing Charm': z['nazwa'] = 'Demitto Ignem'; z.setdefault('rok', 2)
L.sort(key=lambda z: (z['typ'] == 'Potion', z['nazwa'].lower()))
naz = [z['nazwa'] for z in L]; dup = {n for n in naz if naz.count(n) > 1}
print(len(L), 'duplikaty:', dup)
nag = ("# Księga zaklęć i eliksirów (Walker 2e, szkic 2026-04, s. 47–66), opisy po polsku własnymi słowami.\n"
       "# Dane dla panelu MG i panelu graczy (narzedzia/buduj-panel*.py). Pola z dopiskiem „propozycja” nie pochodzą z podręcznika.\n"
       "# status: recenzja\n")
out = KORZEN / '02_zasady' / 'walker' / 'ksiega-zaklec.yaml'
out.write_text(nag + yaml.safe_dump({'zaklecia': L}, allow_unicode=True, sort_keys=False, width=1000), encoding='utf-8')

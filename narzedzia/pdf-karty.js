// Generuje PDF-y kart graczy i ściągi do panel/pdf/ (wymaga Node + Playwright + zbudowanego panel/dist).
// Użycie: python3 narzedzia/buduj-panel.py && (cd panel/dist && python3 -m http.server 8765 &) && NODE_PATH=$(npm root -g) node narzedzia/pdf-karty.js
const { chromium } = require('playwright');
const path = require('path');
const out = path.join(__dirname, '..', 'panel', 'pdf');
const base = 'http://localhost:8765/index.html';
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto(base); await p.waitForTimeout(300);
  const ids = await p.evaluate(() => Object.keys(window.DANE.postacie).filter(k => k !== '_slownik'));
  const zadania = ids.map(id => ['#/postac/' + id, 'karta-' + id.replace('gracz.', '') + '.pdf']).concat([['#/sciaga', 'sciaga-dla-graczy.pdf']]);
  for (const [h, n] of zadania) {
    await p.goto(base + h); await p.reload(); await p.waitForTimeout(400);
    await p.pdf({ path: path.join(out, n), format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('OK', n);
  }
  await b.close();
})();

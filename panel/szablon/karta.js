(function () {
"use strict";
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
var CECHY = ["Vitality", "Speed", "Wits", "Knowledge", "Focus"];
// polskie nazwy zaklęć z oficjalnego przekładu książek (tam, gdzie istnieje); reszta zostaje w oryginale
var ZAKL_PL = { "Stupefy": "Stupefy (pol. Drętwota)" };
var STANY = [
  ["Wstrząśnięty", "Roztrzęsiony", "+1"], ["Posiniaczony", "Oszołomiony", "+2"], ["Zakrwawiony", "Wyczerpany", "+3"],
  ["Złamany", "Zdezorientowany", "+5"], ["Gasnący", "Majaczący", "+7"], ["Bez życia", "Bez świadomości", "brak akcji"]
];
var EKWIPUNEK = [
  "Różdżka (w etui lub przy pasie)",
  "Szaty szkolne: trzy komplety czarnych szat roboczych",
  "Czarna spiczasta tiara na co dzień",
  "Rękawice ochronne (ze smoczej skóry)",
  "Zimowa peleryna (czarna, z zapięciami)",
  "Krawat i szalik swojego domu",
  "Kociołek cynowy (rozmiar 2)",
  "Fiolki szklane lub kryształowe (zestaw)",
  "Mosiężne wagi i zestaw odważników",
  "Teleskop",
  "Podręczniki do przedmiotów 6. roku (wpisz, które masz)",
  "Pergamin, pióra, atrament, suszka",
  "Zwierzę (sowa, kot lub ropucha) i jego klatka albo koszyk",
  "Plecak lub torba na książki",
  "Kieszonkowe: ___ galeonów, ___ sykli, ___ knutów"
];

function kratki(n) { var h = ""; for (var i = 0; i < n; i++) h += '<span class="kratka"></span>'; return h; }
function budujTlumacz(tlum) {
  var sl = window.DANE.postacie._slownik || {};
  var par = [];
  ["grupy_premii_rozdzki", "rdzenie_i_drewna", "umiejetnosci", "przedmioty_6_roku"].forEach(function (g) {
    var o = sl[g] || {};
    Object.keys(o).forEach(function (k) { if (typeof o[k] === "string") par.push([k, o[k]]); });
  });
  par.sort(function (a, b) { return b[0].length - a[0].length; });
  return function (tekst) {
    var s = String(tekst);
    par.forEach(function (p) { s = s.split(p[0]).join("\u0001" + p[1] + "\u0002"); });
    return esc(s.replace(/\u0001/g, "").replace(/\u0002/g, ""));
  };
}
function lin(n) { var h = ""; for (var i = 0; i < n; i++) h += '<div class="pole"></div>'; return h; }

window.renderKarta = function (app, p, tlum) {
  var sl = (window.DANE.postacie._slownik || {}).zaklecia || {};
  var pl = budujTlumacz(tlum);
  var pochod = p.pochodzenie || {};
  var poch = (tlum(pochod.typ) || pochod.typ || "") + (pochod.rod ? ", ród " + pochod.rod : "");
  var um = Object.keys(p.umiejetnosci || {}).sort(function (a, b) { return p.umiejetnosci[b] - p.umiejetnosci[a]; });
  var polowa = Math.ceil(um.length / 2);
  function tabUm(lista) {
    return "<table style='width:100%'><thead><tr><th>Umiejętność</th><th style='width:26px'>Wart.</th></tr></thead><tbody>" +
      lista.map(function (u) { return "<tr><td>" + esc(tlum(u) || u) + " <span class='malo'>(" + esc(u) + ")</span></td><td style='text-align:center'><b>" + p.umiejetnosci[u] + "</b></td></tr>"; }).join("") + "</tbody></table>";
  }
  var cechy = CECHY.map(function (c) { return '<div class="cecha"><span>' + esc(tlum(c) || c) + "</span><b>" + ((p.cechy || {})[c] || 0) + '</b><span class="malo">' + c + "</span></div>"; }).join("");
  var r = p.rozdzka || {};
  var z = p.zwierze || {};
  var zdr = "<table style='width:100%'><thead><tr><th>Kółko</th><th>Ciało (Body)</th><th>Umysł (Mind)</th><th>Kara do trudności</th></tr></thead><tbody>" +
    STANY.map(function (s, i) { return "<tr><td style='text-align:center'><span class='o'></span></td><td><span class='o'></span> " + s[0] + "</td><td><span class='o'></span> " + s[1] + "</td><td style='text-align:center'>" + s[2] + "</td></tr>"; }).join("") + "</tbody></table>";
  var grupy = [["wspolny", "Pakiet wspólny (lata 1–5)"], ["archetyp", "Pakiet typu postaci"], ["wybor", "Do wyboru"], ["zaawansowane", "Magia zaawansowana (lata 6–7, eliksiry)"]];
  var zakl = "", zz = p.zaklecia || {};
  grupy.forEach(function (g) {
    var l = zz[g[0]] || [];
    if (!l.length) return;
    zakl += "<h2>" + g[1] + " (" + l.reduce(function (a, x) { return a + (x.kratki || 0); }, 0) + " kratek)</h2><table style='width:100%'><tbody>" +
      l.map(function (x) { var o = (sl[x.nazwa] || {}).opis || ""; return "<tr><td style='width:36%'><b>" + esc(ZAKL_PL[x.nazwa] || x.nazwa) + "</b></td><td style='width:13%'>" + kratki(x.kratki || 0) + "</td><td class='malo'>" + esc(o) + "</td></tr>"; }).join("") + "</tbody></table>";
  });
  var mg = (p.haczyki_mg || p.notatki_mg) ? '<div class="mgnotatki" hidden><h2>Notatki MG (nie do druku dla gracza)</h2>' + (p.haczyki_mg ? "<b>Haczyki:</b><ul>" + p.haczyki_mg.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") + (p.notatki_mg ? "<b>Do potwierdzenia:</b><ul>" + p.notatki_mg.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") + "</div>" : "";
  var pdf = !window.BEZ_PDF && p.id && /^gracz\./.test(p.id) ? '<a href="pdf/karta-' + esc(p.id.replace("gracz.", "")) + '.pdf" download><button>Pobierz PDF (3 strony A4)</button></a> ' : "";

  app.innerHTML = '<div class="karta-nawig"><a href="#/postacie"><button>← Postacie</button></a>' + pdf + '<button id="druk">Drukuj / zapisz jako PDF</button><a href="#/sciaga"><button>Ściąga dla graczy</button></a>' + (mg ? '<button id="pokaz-mg">Pokaż/ukryj notatki MG</button>' : "") + '</div>' +
    '<div class="karta"><div class="strona">' +
    "<h1>" + esc(p.imie) + "</h1>" +
    '<div class="malo">Hogwart, ' + esc(p.rok) + ". rok · " + esc(p.dom) + " · " + esc(p.wiek || 16) + " lat · " + esc(poch) + (p.cecha_rzadka && p.cecha_rzadka !== "brak" ? " · cecha rzadka: " + esc(p.cecha_rzadka) : "") + "</div>" +
    '<div class="malo">Punkty fabularne (Story Points): <b>' + (p.story_points || 0) + "</b>" + (p.archetyp ? " · Typ postaci: " + esc(p.archetyp) : "") + "</div>" +
    "<h2>Cechy (Attributes)</h2><div class='w3'>" + cechy + "</div>" +
    "<h2>Umiejętności (Skills)</h2><div class='w2'><div>" + tabUm(um.slice(0, polowa)) + "</div><div>" + tabUm(um.slice(polowa)) + "</div></div>" +
    (p.specjalizacje && p.specjalizacje.length ? "<div style='margin-top:3px'><b>Specjalizacje (+1 w wąskim zakresie):</b> " + p.specjalizacje.map(function (x) { return pl(x); }).join("; ") + "</div>" : "") +
    "<div><b>Przedmioty 6. roku:</b> " + (p.przedmioty_6_roku || []).map(function (x) { return esc(tlum(x) || x); }).join(", ") + "</div>" +
    "<div class='w2'><div><h2>Różdżka</h2><div><b>" + esc(tlum(r.drewno) || r.drewno || "") + "</b> <span class='malo'>(" + esc(r.drewno || "") + ")</span>, rdzeń: <b>" + esc(tlum(r.rdzen) || r.rdzen || "") + "</b> <span class='malo'>(" + esc(r.rdzen || "") + ")</span>, " + esc(r.dlugosc_cali || "") + " cali</div>" +
    "<div>Giętkość: " + esc(tlum(r.gietkosc) || r.gietkosc || "") + " · Wytrzymałość: " + esc(r.wytrzymalosc || "") + "</div>" +
    "<div>Premie: " + (r.premie || []).map(function (x) { return pl(x); }).join("; ") + "</div><div class='malo'>" + esc(r.opis || "") + "</div></div>" +
    "<div><h2>Zwierzę</h2><div>" + esc(z.rodzaj || "") + (z.imie ? " „" + esc(z.imie) + "”" : "") + "</div><h2>Wygląd (opisz sam)</h2>" + lin(3) + "</div></div>" +
    "<h2>Zdrowie: zaznaczaj kółka od lewej, ołówkiem</h2>" + zdr +
    "<h2>Charakter i sekret</h2><div><b>Charakter:</b> " + esc(p.charakter || "") + "</div><div><b>Sekret:</b> " + esc(p.sekret || "") + "</div>" +
    "<div><b>Osoba, na której zależy:</b> " + esc(p.osoba_bliska || "") + "</div><div><b>Wakacje 1969:</b> " + esc(p.wakacje_1969 || "") + "</div>" +
    "</div><div class='strona'><h1>" + esc(p.imie) + " · zaklęcia i eliksiry</h1><div class='malo'>Wszystkie wpisane pozycje są opanowane (Mastered): wszystkie kratki zaznaczone. Zaklęcie Tempus poznacie na lekcji w trakcie gry.</div>" +
    zakl + "</div><div class='strona'><h1>" + esc(p.imie) + " · ekwipunek, nagrody, notatki</h1>" +
    "<h2>Podstawowy ekwipunek ucznia 6. roku</h2><div class='ekw'>" + EKWIPUNEK.map(function (e) { return "<div><span class='pudelko'></span> " + esc(e) + "</div>"; }).join("") + "</div>" +
    "<h2>Dodatkowe przedmioty</h2>" + lin(4) +
    "<h2>Nagrody (wpisuje Mistrz Gry)</h2>" + lin(3) +
    "<h2>Wspólny sekret z 4. roku</h2>" + lin(4) +
    "<h2>Notatki</h2>" + lin(11) + "</div></div>" + mg;
  document.getElementById("druk").onclick = function () { window.print(); };
  var b = document.getElementById("pokaz-mg");
  if (b) b.onclick = function () { var m = document.querySelector(".mgnotatki"); m.hidden = !m.hidden; };
};
})();

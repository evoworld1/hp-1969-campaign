/* Księga zaklęć: wspólna dla panelu MG i panelu graczy. Dane: window.DANE.ksiega (z 02_zasady/walker/ksiega-zaklec.yaml). */
(function () {
"use strict";
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function fold(s) { return String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[łŁ]/g, "l").replace(/[–—-]/g, " ").toLowerCase(); }
var TYP_PL = { "Charm": "zaklęcie (Charm)", "Jinx": "urok (Jinx)", "Hex": "urok (Hex)", "Curse": "klątwa (Curse)", "Transfiguration": "transmutacja", "Transportation": "transport", "Counter–Jinx": "przeciwurok", "Potion": "eliksir" };
var UM = { "Charm": "Charms", "Jinx": "D.A.D.A.", "Hex": "D.A.D.A.", "Curse": "Dark Arts", "Transfiguration": "Transfiguration", "Transportation": "Transportation", "Counter–Jinx": "D.A.D.A.", "Potion": "Potions" };
var UM_PL = { "Charms": "Zaklęcia", "D.A.D.A.": "Obrona przed czarną magią", "Dark Arts": "Czarna magia", "Transfiguration": "Transmutacja", "Transportation": "Teleportacja", "Potions": "Eliksiry" };

function lista() { return (window.DANE && window.DANE.ksiega) || []; }
function klucz(n) { return fold(n).replace(/[^a-z0-9]+/g, " ").trim(); }
var MAPA = null;
function znajdz(nazwa) {
  if (!MAPA) { MAPA = {}; lista().forEach(function (z) { MAPA[klucz(z.nazwa)] = z; if (z.nazwa_pl) MAPA[klucz(z.nazwa_pl)] = z; }); MAPA[klucz("Extinguishing Charm")] = MAPA[klucz("Demitto Ignem")]; MAPA[klucz("Rictusempra")] = MAPA[klucz("Rictustempra")]; }
  var k = klucz(nazwa);
  if (MAPA[k]) return MAPA[k];
  if (/^protego/.test(k)) return MAPA["protego"];
  return null;
}
window.znajdzZaklecie = znajdz;

function wiersz(et, w) { return w ? "<tr><th>" + et + "</th><td>" + esc(w) + "</td></tr>" : ""; }
window.kartaZaklecia = function (z, dodatki) {
  if (!z) return "<p class='puste'>Brak opisu w księdze.</p>";
  var um = UM[z.typ] || "Charms";
  return '<div class="zkarta"><div class="zkarta-g"><h3>' + esc(z.nazwa) + (z.nazwa_pl ? ' <small>(' + esc(z.nazwa_pl) + ")</small>" : "") + "</h3>" +
    '<div class="zkarta-meta"><span>' + esc(TYP_PL[z.typ] || z.typ) + "</span><span>trudność startowa <b>" + esc(z.trudnosc) + "</b></span>" +
    (z.rok ? "<span>" + esc(z.rok) + ". rok</span>" : "<span>poza programem</span>") + "<span>rzut: " + (z.typ === "Potion" ? "Knowledge" : "Focus") + " + " + esc(UM_PL[um] || um) + "</span>" +
    (z.strona ? "<span>Walker s. " + esc(z.strona) + "</span>" : "") + "</div></div>" +
    (z.efekt ? '<p class="zkarta-efekt">' + esc(z.efekt) + "</p>" : "") +
    (z.opis ? "<p>" + esc(z.opis) + "</p>" : "") +
    '<table class="zkarta-t">' + wiersz("Cel i zasięg", z.cel) + wiersz("Czas trwania", z.czas_trwania) + wiersz("W walce", z.w_walce) +
    wiersz(z.typ === "Potion" ? "Składniki" : "Wymaga", z.wymaga) + wiersz("Przeciwzaklęcie", z.przeciwzaklecie) + wiersz("Uwagi kampanii", z.uwagi_kampanii) + "</table>" +
    (dodatki || "") + "</div>";
};

/* el: kontener; opt: {moje: [nazwy], naKlik: function(z) (opcjonalnie), tytul} */
window.renderKsiega = function (el, opt) {
  opt = opt || {};
  var L = lista();
  var moje = (opt.moje || []).map(klucz);
  var typy = {}; L.forEach(function (z) { typy[z.typ] = 1; });
  el.innerHTML = '<div class="ksiega">' + (opt.tytul === false ? "" : "<h1>Księga zaklęć</h1>") +
    '<p class="puste">' + L.length + ' pozycji z podręcznika Walkera (s. 47–59, eliksiry s. 60–66), opisy po polsku. Szukaj po nazwie angielskiej, polskiej albo po słowie z opisu (np. „ogień”, „rozbraja”, „leczy”).</p>' +
    '<div class="ksiega-f"><input id="ks-q" type="search" placeholder="Szukaj zaklęcia: Expelliarmus, Protego, leczy…">' +
    '<select id="ks-typ"><option value="">wszystkie rodzaje</option>' + Object.keys(typy).sort().map(function (t) { return '<option value="' + esc(t) + '">' + esc(TYP_PL[t] || t) + "</option>"; }).join("") + "</select>" +
    '<select id="ks-rok"><option value="">każdy rok</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option value="x">poza programem</option></select>' +
    (moje.length ? '<label><input type="checkbox" id="ks-moje"> tylko moje</label>' : "") + "</div>" +
    '<div id="ks-lista"></div></div>';
  var q = el.querySelector("#ks-q"), ft = el.querySelector("#ks-typ"), fr = el.querySelector("#ks-rok"), fm = el.querySelector("#ks-moje");
  function pokaz() {
    var slowa = fold(q.value).split(/\s+/).filter(Boolean);
    var wyn = L.filter(function (z) {
      if (ft.value && z.typ !== ft.value) return false;
      if (fr.value === "x" ? z.rok : fr.value && String(z.rok) !== fr.value) return false;
      if (fm && fm.checked && moje.indexOf(klucz(z.nazwa)) < 0) return false;
      if (!slowa.length) return true;
      var t = z._f || (z._f = fold([z.nazwa, z.nazwa_pl, z.efekt, z.opis, z.w_walce, z.typ, TYP_PL[z.typ]].join(" ")));
      return slowa.every(function (w) { return t.indexOf(w) >= 0; });
    });
    if (slowa.length) {
      var w0 = slowa.join(" ");
      wyn.sort(function (a, b) { var pa = fold(a.nazwa + " " + (a.nazwa_pl || "")).indexOf(w0) >= 0 ? 0 : 1, pb = fold(b.nazwa + " " + (b.nazwa_pl || "")).indexOf(w0) >= 0 ? 0 : 1; return pa - pb; });
    }
    var box = el.querySelector("#ks-lista");
    box.innerHTML = wyn.length ? wyn.map(function (z, i) {
      var moja = moje.indexOf(klucz(z.nazwa)) >= 0;
      return '<details class="ks-poz"' + (wyn.length <= 2 ? " open" : "") + ' data-i="' + L.indexOf(z) + '"><summary><b>' + esc(z.nazwa) + "</b>" + (z.nazwa_pl ? " <small>(" + esc(z.nazwa_pl) + ")</small>" : "") +
        (moja ? ' <span class="znacz">na karcie</span>' : "") + ' <span class="ks-tr">' + esc(z.trudnosc) + "</span><span class='ks-ef'>" + esc(z.efekt || "") + "</span></summary>" +
        window.kartaZaklecia(z, opt.naKlik ? '<p><button class="ks-uzyj">' + esc(opt.przycisk || "Użyj w kalkulatorze") + "</button></p>" : "") + "</details>";
    }).join("") : "<p class='puste'>Nic nie znaleziono.</p>";
    if (opt.naKlik) box.querySelectorAll(".ks-uzyj").forEach(function (b) { b.onclick = function () { opt.naKlik(L[+b.closest(".ks-poz").getAttribute("data-i")]); }; });
  }
  [q, ft, fr].concat(fm ? [fm] : []).forEach(function (x) { x.oninput = pokaz; x.onchange = pokaz; });
  if (opt.szukaj) q.value = opt.szukaj;
  pokaz();
  q.focus();
};
})();

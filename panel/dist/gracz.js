(function () {
"use strict";
var app = null;
var D = window.DANE;
var SL = D.postacie._slownik || {};
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function dek(b64) { var s = atob(b64), a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }
function tlum(n) {
  if (!n) return "";
  var g = ["cechy", "umiejetnosci", "przedmioty_6_roku", "grupy_premii_rozdzki", "rdzenie_i_drewna", "gietkosc", "pochodzenie", "domy", "zwierzeta"];
  for (var i = 0; i < g.length; i++) { var o = SL[g[i]] || {}; if (typeof o[n] === "string") return o[n]; var c = n.charAt(0).toUpperCase() + n.slice(1); if (typeof o[c] === "string") return o[c]; }
  return "";
}

var KARA = [0, 1, 2, 3, 5, 7, "X"];
var STANY = [["", ""], ["Wstrząśnięty", "Roztrzęsiony"], ["Posiniaczony", "Oszołomiony"], ["Zakrwawiony", "Wyczerpany"], ["Złamany", "Zdezorientowany"], ["Gasnący", "Majaczący"], ["Bez życia", "Bez świadomości"]];
var CECHY = ["Vitality", "Speed", "Wits", "Knowledge", "Focus"];

var P = null, ST = null, KLUCZ = "", zakladka = "karta", kalkWstep = null, testWstep = null;
function zapisz() { try { localStorage.setItem(KLUCZ, JSON.stringify(ST)); } catch (e) {} }
var LISTA = [], BAZA = null, SLUG = "", R = null;
function wczytaj() { try { return JSON.parse(localStorage.getItem(KLUCZ)) || {}; } catch (e) { return {}; } }

/* ---------- widok ---------- */
function kara() { var a = KARA[ST.body], b = KARA[ST.mind]; if (a === "X" || b === "X") return "X"; return a + b; }
function widok() {
  var zk = [["karta", "Karta"], ["zaklecia", "Zaklęcia"], ["zdrowie", "Zdrowie i punkty"], ["ksiega", "Księga zaklęć"], ["kalk", "Rzut zaklęcia"], ["test", "Test umiejętności"], ["starcie", "Pojedynek i starcie"], ["notatki", "Ekwipunek i notatki"], ["sciaga", "Ściąga"], ["druk", "Do druku"], ["rozwoj", "Rozwój (MG)"]];
  var k = kara();
  app.innerHTML = '<div class="gpasek"><h1>' + esc(P.imie) + ' <small class="puste">' + esc(P.dom) + '</small></h1><div><span class="flaga">Story Points: ' + ST.sp + '</span> <span class="flaga">Kara zdrowia: ' + (k === 0 ? "brak" : (k === "X" ? "brak akcji" : "+" + k)) + '</span> </div></div>' +
    '<div class="wyb-p gz">' + LISTA.map(function (x) { var s = slugZ(x); return '<button data-p="' + esc(s) + '" class="' + (s === SLUG ? "aktywna" : "") + '">' + esc(x.imie) + ' <small class="puste">' + esc(x.dom || "") + "</small></button>"; }).join("") + "</div>" +
    '<div class="gz">' + zk.map(function (z) { return '<button data-z="' + z[0] + '" class="' + (z[0] === zakladka ? "aktywna" : "") + '">' + z[1] + "</button>"; }).join("") + '</div><div id="tresc"></div>';
  app.querySelectorAll(".gz:not(.wyb-p) button").forEach(function (b) { b.onclick = function () { zakladka = b.getAttribute("data-z"); try { history.replaceState(null, "", "#/gracze/" + SLUG + "/" + zakladka); } catch (e) {} widok(); window.scrollTo(0, 0); }; });
  app.querySelectorAll(".wyb-p button").forEach(function (b) { b.onclick = function () { location.hash = "#/gracze/" + b.getAttribute("data-p") + "/" + zakladka; }; });
  var t = document.getElementById("tresc");
  (({ karta: tKarta, zaklecia: tZaklecia, ksiega: tKsiega, zdrowie: tZdrowie, kalk: tKalk, test: tTest, starcie: tStarcie, notatki: tNotatki, sciaga: tSciaga, druk: tDruk, rozwoj: tRozwoj })[zakladka] || tKarta)(t);
}
function otworzKalk(w) { kalkWstep = w; zakladka = "kalk"; widok(); window.scrollTo(0, 0); }

function tKarta(t) {
  var r = P.rozdzka || {}, z = P.zwierze || {}, pch = P.pochodzenie || {};
  var um = Object.keys(P.umiejetnosci || {}).sort(function (a, b) { return P.umiejetnosci[b] - P.umiejetnosci[a]; });
  t.innerHTML = '<p class="puste">Hogwart, ' + esc(P.rok) + ". rok · " + esc(P.wiek || 16) + " lat · " + esc(tlum(pch.typ) || pch.typ || "") + (pch.rod ? ", ród " + esc(pch.rod) : "") + (P.archetyp ? " · typ postaci: " + esc(P.archetyp) : "") + "</p>" +
    '<div class="karty">' + CECHY.map(function (c) { return '<div class="cechag"><small>' + esc(tlum(c)) + "</small><b>" + ((P.cechy || {})[c] || 0) + "</b><small>" + c + "</small></div>"; }).join("") + "</div>" +
    '<div class="sekg"><h3>Umiejętności <small class="puste">(kliknij, by przeliczyć rzut)</small></h3><div class="umg">' + um.map(function (u) { return '<button class="um" data-u="' + esc(u) + '"><span>' + esc(tlum(u) || u) + " <small class='puste'>" + esc(u) + "</small></span><b>" + P.umiejetnosci[u] + "</b></button>"; }).join("") + "</div>" +
    (P.specjalizacje && P.specjalizacje.length ? "<p><b>Specjalizacje (+1):</b> " + P.specjalizacje.map(esc).join("; ") + "</p>" : "") + "<p><b>Przedmioty 6. roku:</b> " + (P.przedmioty_6_roku || []).map(function (x) { return esc(tlum(x) || x); }).join(", ") + "</p></div>" +
    '<div class="sekg"><h3>Różdżka</h3><p><b>' + esc(tlum(r.drewno) || r.drewno) + "</b> (" + esc(r.drewno) + "), rdzeń: <b>" + esc(tlum(r.rdzen) || r.rdzen) + "</b> (" + esc(r.rdzen) + "), " + esc(r.dlugosc_cali) + " cali · giętkość: " + esc(tlum(r.gietkosc) || r.gietkosc) + " · wytrzymałość: " + esc(r.wytrzymalosc) + "</p>" +
    "<p><b>Premie do rzutu zaklęcia z tej grupy:</b> " + (r.premie || []).map(function (x) { return esc(premiaPL(x)); }).join("; ") + "</p><p class='puste'>" + esc(r.opis || "") + "</p></div>" +
    '<div class="sekg"><h3>Zwierzę, charakter, sekret</h3><p><b>Zwierzę towarzyszące (wpisz własne: sowa, kot lub ropucha i imię):</b> <input id="zw-pole" type="text" style="width:100%;max-width:26rem;padding:.4rem;border:1px solid var(--linia);border-radius:6px;background:var(--bg)" value="' + esc(ST.zwierze != null ? ST.zwierze : ((z.rodzaj || "") + (z.imie ? " " + z.imie : ""))) + '"></p><p><b>Charakter:</b> ' + esc(P.charakter || "") + "</p><p><b>Sekret:</b> " + esc(P.sekret || "") + "</p><p><b>Osoba, na której zależy:</b> " + esc(P.osoba_bliska || "") + "</p><p><b>Wakacje 1969:</b> " + esc(P.wakacje_1969 || "") + "</p></div>";
  t.querySelectorAll(".um").forEach(function (b) { b.onclick = function () { testWstep = { um: b.getAttribute("data-u") }; zakladka = "test"; widok(); window.scrollTo(0, 0); }; });
  var zp = document.getElementById("zw-pole"); if (zp) zp.oninput = function () { ST.zwierze = zp.value; zapisz(); };
}
function premiaPL(s) {
  var par = [];
  ["grupy_premii_rozdzki", "rdzenie_i_drewna", "umiejetnosci"].forEach(function (g) { var o = SL[g] || {}; Object.keys(o).forEach(function (k) { if (typeof o[k] === "string") par.push([k, o[k]]); }); });
  par.sort(function (a, b) { return b[0].length - a[0].length; });
  var x = s; par.forEach(function (p) { x = x.split(p[0]).join("\u0001" + p[1] + "\u0002"); });
  return x.replace(/\u0001|\u0002/g, "");
}

function tZaklecia(t) {
  var zz = P.zaklecia || {}, sl = SL.zaklecia || {};
  var G = [["nowe", "Nowo poznane w trakcie gry"], ["wspolny", "Pakiet wspólny"], ["archetyp", "Pakiet typu postaci"], ["wybor", "Do wyboru"], ["zaawansowane", "Magia zaawansowana i eliksiry"]];
  t.innerHTML = '<p class="puste">Wszystkie zaklęcia na karcie są <b>opanowane</b> (zaznaczone wszystkie kratki): ich aktualna trudność to 0, a poza walką zwykle nie rzucasz kością. „Trudność” przy nazwie to trudność nauki z podręcznika: tyle wynosi, dopóki zaklęcia się nie opanuje (ważne przy nauce nowych zaklęć z Księgi). Kliknij nazwę, żeby zobaczyć opis; „Rzuć →” otwiera kalkulator z gotowymi ustawieniami. Wszystkie zaklęcia z podręcznika są w zakładce „Księga zaklęć”.</p><input id="zf" placeholder="Szukaj zaklęcia…" style="width:100%;padding:.5rem;margin:.4rem 0;border:1px solid var(--linia);border-radius:8px;background:var(--panel)">' +
    G.map(function (g) {
      var l = zz[g[0]] || []; if (!l.length) return "";
      return "<h3>" + g[1] + "</h3><div class='zklg'>" + l.map(function (x) {
        var kr = "", zazn = x.zaznaczone == null ? (x.kratki || 0) : x.zaznaczone; for (var i = 0; i < (x.kratki || 0); i++) kr += i < zazn ? "<span></span>" : '<span class="pusta"></span>';
        var akt = aktTr0(x.nazwa);
        var ks = window.znajdzZaklecie ? window.znajdzZaklecie(x.nazwa) : null;
        var meta = (akt ? '<span class="zk-tr">nieopanowane: aktualna trudność ' + akt + "</span> " : "") + (ks ? '<span class="zk-tr" title="trudność nauki z podręcznika; opanowane zaklęcie ma aktualną trudność 0">trudność ' + esc(ks.trudnosc) + "</span>" + (ks.rok ? '<span class="zk-meta">' + esc(ks.rok) + ". rok</span>" : "") + (ks.w_walce ? '<span class="zk-meta">· do walki</span>' : "") : '<span class="zk-meta">brak w księdze</span>');
        return '<details class="zk" data-n="' + esc(x.nazwa) + '"><summary><b>' + esc(x.nazwa === "Stupefy" ? "Stupefy (Drętwota)" : x.nazwa) + ' </b>' + meta + '<span class="kr">' + kr + '</span><button class="zk-rzuc" type="button">Rzuć →</button><small>' + esc((ks && ks.efekt) || (sl[x.nazwa] || {}).opis || "") + "</small></summary>" +
          window.kartaZaklecia(ks, '<p><button class="zk-kalk">Przelicz rzut w kalkulatorze</button></p>') + "</details>";
      }).join("") + "</div>";
    }).join("");
  t.querySelectorAll(".zk-rzuc").forEach(function (b) { b.onclick = function (e) { e.preventDefault(); e.stopPropagation(); otworzKalk({ zakl: b.closest(".zk").getAttribute("data-n") }); }; });
  t.querySelectorAll(".zk-kalk").forEach(function (b) { b.onclick = function () { otworzKalk({ zakl: b.closest(".zk").getAttribute("data-n") }); }; });
  document.getElementById("zf").oninput = function () { var q = this.value.toLowerCase(); t.querySelectorAll(".zk").forEach(function (b) { b.hidden = q && b.textContent.toLowerCase().indexOf(q) < 0; }); };
}

function tKsiega(t) {
  var moje = [], zz = P.zaklecia || {};
  Object.keys(zz).forEach(function (g) { (zz[g] || []).forEach(function (x) { moje.push(x.nazwa); }); });
  window.renderKsiega(t, { tytul: false, moje: moje, naKlik: function (z) { otworzKalk({ zakl: z.nazwa, ksiega: z }); }, przycisk: "Przelicz rzut w kalkulatorze" });
}
function tZdrowie(t) {
  function tor(nazwa, klucz, idx) {
    var h = '<div class="sekg"><h3>' + nazwa + '</h3><div class="kolka-g">';
    for (var i = 1; i <= 6; i++) h += '<button data-t="' + klucz + '" data-i="' + i + '" class="' + (ST[klucz] >= i ? "on" : "") + '" title="' + esc(STANY[i][idx]) + '">' + i + "</button>";
    var n = ST[klucz];
    return h + '</div><p class="duzy">' + (n ? esc(STANY[n][idx]) : "bez ran") + '</p><p class="puste">Kara do trudności: ' + (n ? (KARA[n] === "X" ? "brak akcji" : "+" + KARA[n]) : "brak") + "</p></div>";
  }
  var k = kara();
  t.innerHTML = '<p class="duzy">Łączna kara do trudności wszystkich rzutów: ' + (k === 0 ? "brak" : (k === "X" ? "brak akcji" : "+" + k)) + '</p><p class="puste">Kliknij numer kółka, żeby je zaznaczyć (ten sam numer drugi raz cofa jedno kółko).</p>' + tor("Ciało (Body)", "body", 0) + tor("Umysł (Mind)", "mind", 1) +
    '<div class="sekg"><h3>Story Points (punkty fabularne)</h3><p class="duzy">' + ST.sp + '</p><button id="sp-m">− wydaj 1</button> <button id="sp-p">+ zdobądź 1</button><p class="puste">Po nieudanym rzucie możesz wydać 1 punkt i dorzucić 1D10 do wyniku (jeden raz na rzut).</p></div>' +
    '<p><button id="reset-z">Wyzeruj kółka zdrowia (odpoczynek)</button></p>';
  t.querySelectorAll(".kolka-g button").forEach(function (b) {
    b.onclick = function () { var kl = b.getAttribute("data-t"), i = parseInt(b.getAttribute("data-i"), 10); ST[kl] = ST[kl] === i ? i - 1 : i; zapisz(); widok(); };
  });
  document.getElementById("sp-m").onclick = function () { ST.sp = Math.max(0, ST.sp - 1); zapisz(); widok(); };
  document.getElementById("sp-p").onclick = function () { ST.sp += 1; zapisz(); widok(); };
  document.getElementById("reset-z").onclick = function () { ST.body = 0; ST.mind = 0; zapisz(); widok(); };
}

/* ---------- kalkulator ---------- */
function num(id) { var v = parseFloat(String(document.getElementById(id).value).replace(",", ".")); return isNaN(v) ? null : v; }
function poziom(suma, tr) {
  if (tr == null || suma == null) return "";
  if (tr <= 0) return "sukces (trudność 0)";
  if (suma >= 3 * tr) return "sukces niewiarygodny (co najmniej 3× trudność)";
  if (suma >= 2 * tr) return "sukces imponujący (co najmniej 2× trudność)";
  if (suma >= tr) return "sukces";
  if (suma < tr / 2) return "porażka kompromitująca";
  return "porażka";
}
function kolkaZRanyIOdp(obr, odp) {
  if (obr == null || odp == null) return null;
  if (odp <= 0) return 3;
  if (obr >= 3 * odp) return 3; if (obr >= 2 * odp) return 2; if (obr >= odp) return 1; return 0;
}
var TYP_GRUPA = { "Charm": "Charms", "Jinx": "Jinxes", "Hex": "Hexes", "Curse": "Curses", "Transfiguration": "Transfiguration" };
function premieRozdzki() {
  var wyn = [];
  ((P.rozdzka || {}).premie || []).forEach(function (x) { var m = String(x).match(/^(.+?)\s\+(\d+)/); if (m) wyn.push({ n: m[1].trim(), v: parseInt(m[2], 10) }); });
  return wyn;
}
function premiaDla(nazwy) {
  var suma = 0, opis = [];
  premieRozdzki().forEach(function (p) { if (nazwy.indexOf(p.n) >= 0) { suma += p.v; opis.push((tlum(p.n) || p.n) + " +" + p.v); } });
  return { suma: suma, opis: opis.join(", ") };
}
function umVal(n) { return (P.umiejetnosci || {})[n] || 0; }
var UM_TYPU = { "Charm": "Charms", "Jinx": "D.A.D.A.", "Hex": "D.A.D.A.", "Curse": "Dark Arts", "Transfiguration": "Transfiguration", "Transportation": "Transportation", "Counter–Jinx": "D.A.D.A.", "Potion": "Potions" };
function infoZakl(n) {
  var z = (D.zaklecia || {})[n], k = window.znajdzZaklecie ? window.znajdzZaklecie(n) : null;
  if (!z && k) z = (D.zaklecia || {})[k.nazwa] || { typ: k.typ, tr: k.trudnosc, um: UM_TYPU[k.typ] || "Charms", grupy: [], cel: false };
  z = z || { typ: "Charm", um: "Charms", grupy: [], cel: false };
  z.ks = k; return z;
}
var NIEKORZYSCI = [["niew", "Zaklęcie niewerbalne", 6], ["cudza", "Cudza różdżka (ZD-01; plus jej lojalność)", 5], ["uszk", "Uszkodzona różdżka", 5], ["bezr", "Bez różdżki", 9]];

function moje(n) { var zz = P.zaklecia || {}; return Object.keys(zz).some(function (g) { return (zz[g] || []).some(function (x) { return x.nazwa === n; }); }); }
function tKalk(t) {
  var w = kalkWstep || {}; kalkWstep = null;
  if (!w.zakl) {
    var zz = []; Object.keys(P.zaklecia || {}).forEach(function (g) { (P.zaklecia[g] || []).forEach(function (x) { zz.push(x.nazwa); }); });
    t.innerHTML = '<div class="sekg"><h3>Rzut zaklęcia</h3><p class="puste">Wybierz zaklęcie z karty (albo kliknij „Rzuć →” na liście zaklęć). Test bez zaklęcia, np. spostrzegawczość czy skradanie, jest w zakładce „Test umiejętności”.</p><div class="pary">' + zz.map(function (n) { var k = window.znajdzZaklecie(n); return '<button type="button" data-z="' + esc(n) + '">' + esc(n) + (k ? " · " + k.trudnosc : "") + "</button>"; }).join("") + "</div></div>";
    t.querySelectorAll("[data-z]").forEach(function (b) { b.onclick = function () { otworzKalk({ zakl: b.getAttribute("data-z") }); }; });
    return;
  }
  var um = Object.keys(P.umiejetnosci || {});
  var info = w.zakl ? infoZakl(w.zakl) : null;
  var tryb = w.zakl ? (info.cel ? "pojedynek" : "rzut") : "test";
  var aktTr = moje(w.zakl) ? aktTr0(w.zakl) : (info && info.tr != null ? info.tr : 0);
  var wybUm = w.um || "Observation";
  if (um.indexOf(wybUm) < 0) wybUm = um[0];
  function opcjeCech(sel) { return CECHY.map(function (c) { return '<option value="' + c + '"' + (c === sel ? " selected" : "") + ">" + esc(tlum(c)) + " (" + ((P.cechy || {})[c] || 0) + ")</option>"; }).join(""); }
  var naglZ = info ? (info.ks && info.ks.efekt ? '<p><b>' + esc(info.ks.efekt) + '</b>' + (info.ks.w_walce ? ' <span class="puste">W walce: ' + esc(info.ks.w_walce) + '</span>' : "") + '</p>' : "") + '<p class="puste">Typ: ' + esc(info.typ) + (info.grupy.length ? " · grupa premii różdżki: " + esc(info.grupy.map(function (g) { return tlum(g) || g; }).join(", ")) : "") + " · trudność startowa: " + (info.tr == null ? "?" : info.tr) + ". " + (moje(w.zakl) ? (aktTr ? "Masz je na karcie, ale nieopanowane: aktualna trudność " + aktTr + "." : "Masz je opanowane, więc aktualna trudność to 0.") : "<b>Tego zaklęcia nie masz na karcie</b>: musisz się go najpierw nauczyć (aktualna trudność = trudność startowa).") + "</p>" : "";
  var radio = info ? '<p><label style="display:inline"><input type="radio" name="tryb" value="rzut"' + (tryb === "rzut" ? " checked" : "") + ' style="width:auto"> Rzucam zaklęcie (' + (info.typ === "Potion" ? "Wiedza" : "Skupienie") + " + " + esc(tlum(info.um) || info.um) + ')</label> &nbsp; <label style="display:inline"><input type="radio" name="tryb" value="pojedynek"' + (tryb === "pojedynek" ? " checked" : "") + ' style="width:auto"> Atak w pojedynku (Bystrość + wyższa z: Pojedynkowanie, umiejętność zaklęcia)</label></p>' : "";
  t.innerHTML = '<div class="sekg kalk"><h3>' + (w.zakl ? esc(w.zakl) : "Test") + "</h3>" + naglZ + radio +
    '<p class="puste" id="k-auto"></p>' +
    '<label>Cecha <select id="k-cecha">' + opcjeCech("Wits") + "</select></label>" +
    '<label>Umiejętność <select id="k-um"><option value="">brak (0)</option>' + um.map(function (u) { return '<option value="' + esc(u) + '"' + (u === wybUm ? " selected" : "") + ">" + esc(tlum(u) || u) + " (" + P.umiejetnosci[u] + ")</option>"; }).join("") + "</select></label>" +
    '<label>Wynik twojej kości (1D10) <input id="k-kosc" type="number" inputmode="numeric"></label>' +
    '<label>Premia różdżki i inne modyfikatory (+/−) <input id="k-mod" type="number" inputmode="numeric" value="0"></label>' +
    '<label><span id="k-trl">Trudność lub cel (od MG)</span> <input id="k-tr" type="number" inputmode="numeric" value="' + (info && tryb === "rzut" ? aktTr : "") + '"></label>' +
    '<label id="k-atrw" hidden>Aktualna trudność zaklęcia (opanowane: 0; nieopanowane: liczba z pierwszej pustej kratki) <input id="k-atr" type="number" inputmode="numeric" value="' + aktTr + '"></label>' +
    '<div class="pudg">' + NIEKORZYSCI.map(function (n) { return '<label><input type="checkbox" class="k-nk" data-v="' + n[2] + '" style="width:auto"> ' + n[1] + " (+" + n[2] + " do trudności)</label>"; }).join("") + "</div>" +
    '<label><input type="checkbox" id="k-kara" checked style="width:auto"> dodaj karę zdrowia do trudności (teraz: ' + (kara() === 0 ? "brak" : (kara() === "X" ? "brak akcji" : "+" + kara())) + ')</label><div id="k-wyn" class="wynikk">Wpisz wynik kości.</div></div>' +
    '<div class="sekg kalk"><h3>Obrażenia, które zadaję</h3><p class="puste">Rzuć kośćmi obrażeń (np. 3D dla iskier), wpisz sumę. Panel doda cechę.</p>' +
    '<label>Suma kości obrażeń <input id="o-kosci" type="number" inputmode="numeric"></label>' +
    '<label>Dodaj cechę <select id="o-cecha">' + opcjeCech("Focus") + '</select></label>' +
    '<label>Inne dodatki (np. +1D z mocnego rzutu: wpisz wynik tej kości) <input id="o-mod" type="number" inputmode="numeric" value="0"></label>' +
    '<label>Rzut obronny celu (1D10 + Żywotność + pancerz) <input id="o-odp" type="number" inputmode="numeric"></label><div id="o-wyn" class="wynikk">Wpisz sumę kości obrażeń.</div></div>' +
    '<div class="sekg kalk"><h3>Obrażenia, które dostaję</h3><label>Obrażenia (od MG) <input id="d-obr" type="number" inputmode="numeric"></label><label>Mój rzut (1D10) <input id="d-kosc" type="number" inputmode="numeric"></label><label>Pancerz (jeśli jest) <input id="d-panc" type="number" inputmode="numeric" value="0"></label><div id="d-wyn" class="wynikk">Wpisz obrażenia i swój rzut.</div><button id="d-zapisz" hidden>Zaznacz te kółka na ciele</button></div>';
  var el = function (id) { return document.getElementById(id); };
  var ustawAuto = function () {
    if (!info) return;
    var tr = (document.querySelector("input[name=tryb]:checked") || {}).value || "rzut";
    var cechy = info.typ === "Potion" ? "Knowledge" : "Focus", umi = info.um, grupy = info.grupy.slice();
    if (TYP_GRUPA[info.typ]) grupy.push(TYP_GRUPA[info.typ]);
    var pr = premiaDla(grupy), opis = "";
    if (tr === "pojedynek") {
      var pd = premiaDla(["Duelling"]), a = umVal("Duelling") + pd.suma, b = umVal(info.um) + pr.suma - pr.suma;
      var wydl = umVal("Duelling"), wzakl = umVal(info.um);
      // wyższa wartość umiejętności (z premią różdżki do jej grupy)
      var sumaD = wydl + pd.suma, sumaZ = wzakl + pr.suma;
      cechy = "Wits";
      if (sumaD >= sumaZ) { umi = "Duelling"; el("k-mod").value = pd.suma; opis = "Atak: Bystrość + Pojedynkowanie " + wydl + (pd.suma ? " + różdżka (" + pd.opis + ")" : "") + " (wyższe niż " + (tlum(info.um) || info.um) + " " + wzakl + (pr.suma ? " + " + pr.suma : "") + ")."; }
      else { el("k-mod").value = pr.suma; opis = "Atak: Bystrość + " + (tlum(info.um) || info.um) + " " + wzakl + (pr.suma ? " + różdżka (" + pr.opis + ")" : "") + " (wyższe niż Pojedynkowanie " + wydl + (pd.suma ? " + " + pd.suma : "") + ")."; }
      el("k-trl").textContent = "Rzut obrony przeciwnika (jego suma: kość + cechy, unik lub Protego; podaje MG)";
      el("k-atrw").hidden = false;
      el("k-tr").value = el("k-tr").value === "0" ? "" : el("k-tr").value;
    } else {
      el("k-mod").value = pr.suma;
      opis = "Rzut zaklęcia: " + (cechy === "Knowledge" ? "Wiedza" : "Skupienie") + " + " + (tlum(umi) || umi) + (pr.suma ? " + różdżka (" + pr.opis + ")" : "") + (aktTr ? ". Nie masz go opanowanego: aktualna trudność = " + aktTr + "." : ". Trudność aktualna = 0 (opanowane).");
      el("k-trl").textContent = "Trudność (opanowane: 0, MG dodaje swoje utrudnienia)";
      el("k-atrw").hidden = true;
      if (el("k-tr").value === "") el("k-tr").value = aktTr;
    }
    el("k-cecha").value = cechy; el("k-um").value = umi;
    el("k-auto").textContent = opis;
  };
  var licz = function () {
    var c = (P.cechy || {})[el("k-cecha").value] || 0, u = el("k-um").value ? (P.umiejetnosci[el("k-um").value] || 0) : 0;
    var kosc = num("k-kosc"), mod = num("k-mod") || 0, tr = num("k-tr"), k = kara(), kv = (el("k-kara").checked && k !== "X") ? k : 0;
    var nk = 0; document.querySelectorAll(".k-nk:checked").forEach(function (x) { nk += parseInt(x.getAttribute("data-v"), 10); });
    var wy = el("k-wyn");
    var duel = info && (document.querySelector("input[name=tryb]:checked") || {}).value === "pojedynek";
    if (kosc == null) { wy.textContent = (info && tr === 0 && !nk && !kv && !duel) ? "Zaklęcie opanowane i nic go nie utrudnia: udaje się bez rzutu." : "Wpisz wynik kości."; }
    else {
      var atr = (duel ? (num("k-atr") || 0) : 0);
      var sum = kosc + c + u + mod, trk = tr == null ? null : tr + atr + kv + nk;
      var skladnik = "(kość " + kosc + " + cecha " + c + " + umiejętność " + u + (mod ? " + modyfikatory " + mod : "") + ")";
      var txt = "<b>Suma: " + sum + "</b> " + skladnik;
      if (trk == null) txt += "<br>Wpisz trudność lub cel, żeby zobaczyć wynik.";
      else {
        txt += "<br>" + (duel ? "Cel ataku = obrona przeciwnika " : "Trudność: ") + tr + (duel ? " + aktualna trudność zaklęcia " + atr : "") + (nk ? " + niekorzyści " + nk : "") + (kv ? " + kara zdrowia " + kv : "") + " = <b>" + trk + "</b><br>";
        if (duel) txt += "<b>" + (sum >= trk ? "Atak trafia" : "Atak chybia") + "</b> (" + (sum >= trk ? "zapas +" + (sum - trk) : "brakuje " + (trk - sum)) + ")" + (sum >= 3 * trk ? "<br>Wynik co najmniej 3× celu: zaklęcie wzmocnione o dwa stopnie (zob. tabela ZD-09)." : sum >= 2 * trk ? "<br>Wynik co najmniej 2× celu: zaklęcie wzmocnione o jeden stopień (zob. tabela ZD-09). W pojedynkach szkolnych tylko opis." : "");
        else txt += "<b>" + poziom(sum, trk) + "</b> (" + (sum >= trk ? "zapas +" + (sum - trk) : "brakuje " + (trk - sum)) + ")";
        if (sum < trk && ST.sp > 0) txt += "<br><span class='puste'>Możesz wydać Story Point: dorzuć jeszcze 1D10 do sumy.</span>";
      }
      if (kara() === "X") txt += "<br><b>6. kółko: postać nie może wykonywać akcji.</b>";
      wy.innerHTML = txt;
    }
    var ok = num("o-kosci"), oc = (P.cechy || {})[el("o-cecha").value] || 0, om = num("o-mod") || 0, odp = num("o-odp"), eo = el("o-wyn");
    if (ok == null) eo.textContent = "Wpisz sumę kości obrażeń.";
    else { var obr = ok + oc + om, kol = kolkaZRanyIOdp(obr, odp); eo.innerHTML = "<b>Obrażenia: " + obr + "</b> (kości " + ok + " + cecha " + oc + (om ? " + dodatki " + om : "") + ")" + (odp == null ? "<br>Wpisz rzut obronny celu, żeby zobaczyć, ile kółek straci." : "<br>Cel traci: <b>" + (kol === 0 ? "nic (obrona wystarcza)" : kol + " kółk" + (kol === 1 ? "o" : "a")) + "</b>" + (kol >= 2 ? " i robi test przytomności" : "")) + "<br><span class='puste'>W pojedynkach szkolnych i pokazach to tylko opis, bez ran.</span>"; }
    var dobr = num("d-obr"), dk = num("d-kosc"), pa = num("d-panc") || 0, ed = el("d-wyn"), bt = el("d-zapisz");
    bt.hidden = true;
    if (dobr == null || dk == null) ed.textContent = "Wpisz obrażenia i swój rzut.";
    else { var odpm = dk + ((P.cechy || {}).Vitality || 0) + pa, kol2 = kolkaZRanyIOdp(dobr, odpm); ed.innerHTML = "Twoja odporność: <b>" + odpm + "</b> (kość " + dk + " + Żywotność " + ((P.cechy || {}).Vitality || 0) + (pa ? " + pancerz " + pa : "") + ")<br>Tracisz: <b>" + (kol2 === 0 ? "nic" : kol2 + " kółk" + (kol2 === 1 ? "o" : "a") + " ciała") + "</b>" + (kol2 >= 2 ? "<br>MG zarządzi test przytomności (1D10 + Żywotność przeciw " + (kol2 === 2 ? 3 : 6) + " + obecna kara)." : ""); if (kol2 > 0) { bt.hidden = false; bt.onclick = function () { ST.body = Math.min(6, ST.body + kol2); zapisz(); widok(); }; } }
  };
  t.addEventListener("input", licz); t.addEventListener("change", function (e) { if (e.target.name === "tryb") ustawAuto(); licz(); });
  ustawAuto(); licz();
}

function tTest(t) {
  var w = testWstep || {}; testWstep = null;
  window.renderTest(t, P, { um: w.um, kara: kara() });
}
function tStarcie(t) {
  t.innerHTML = '<p class="puste">Panel do pojedynków i pokazów. Wybierz zaplanowane starcie (gdy MG powie, która scena), potem zaklęcie. MG rzuca za przeciwnika i podaje wynik kości; wpisz go, a panel pokaże, ile musisz wyrzucić, żeby się udało.</p><div id="st-el"></div>';
  window.renderStarcie(document.getElementById("st-el"), { postacie: [P], stala: P.id, npc: D.npc_staty || {}, starcia: D.starcia || [], losowi: D.losowi || [], gracz: true, storyPoints: ST.sp > 0 });
}

/* ---------- notatki, ściąga, druk ---------- */
var EKW = ["Różdżka (w etui lub przy pasie)", "Szaty szkolne: trzy komplety czarnych szat roboczych", "Czarna spiczasta tiara na co dzień", "Rękawice ochronne (ze smoczej skóry)", "Zimowa peleryna (czarna, z zapięciami)", "Krawat i szalik swojego domu", "Kociołek cynowy (rozmiar 2)", "Fiolki szklane lub kryształowe (zestaw)", "Mosiężne wagi i zestaw odważników", "Teleskop", "Podręczniki do przedmiotów 6. roku", "Pergamin, pióra, atrament, suszka", "Zwierzę i jego klatka albo koszyk", "Plecak lub torba na książki"];
function listaMG() {
  var pr = P.przedmioty_mg || [], na = P.nagrody_mg || [];
  if (!pr.length && !na.length) return "";
  return '<div class="sekg"><h3>Od Mistrza Gry (zakładka „Rozwój”)</h3>' + (pr.length ? "<p><b>Przedmioty:</b></p><ul>" + pr.map(function (x) { return "<li><b>" + esc(x.nazwa) + "</b>" + (x.opis ? ": " + esc(x.opis) : "") + "</li>"; }).join("") + "</ul>" : "") + (na.length ? "<p><b>Nagrody:</b></p><ul>" + na.map(function (x) { return "<li>" + esc(x.opis) + (x.sp ? " (+" + x.sp + " Story Points)" : "") + "</li>"; }).join("") + "</ul>" : "") + "</div>";
}
function tNotatki(t) {
  t.innerHTML = '<div class="sekg pudg"><h3>Podstawowy ekwipunek ucznia 6. roku</h3>' + EKW.map(function (e, i) { return '<label><input type="checkbox" data-e="' + i + '"' + (ST.ekw[i] ? " checked" : "") + "> " + esc(e) + "</label>"; }).join("") + "</div>" +
    listaMG() + '<div class="sekg"><h3>Dodatkowe przedmioty</h3><textarea class="n" data-f="dod"></textarea></div><div class="sekg"><h3>Nagrody (wpisuje Mistrz Gry, możesz przepisać)</h3><textarea class="n" data-f="nagrody"></textarea></div>' +
    '<div class="sekg"><h3>Wygląd postaci</h3><textarea class="n" data-f="wyglad"></textarea></div><div class="sekg"><h3>Wspólny sekret z 4. roku</h3><textarea class="n" data-f="sekret4"></textarea></div><div class="sekg"><h3>Notatki z sesji</h3><textarea class="n" data-f="notatki" style="min-height:14rem"></textarea></div>';
  t.querySelectorAll("textarea").forEach(function (a) { var f = a.getAttribute("data-f"); a.value = ST[f] || ""; a.oninput = function () { ST[f] = a.value; zapisz(); }; });
  t.querySelectorAll("input[type=checkbox]").forEach(function (c) { c.onchange = function () { ST.ekw[c.getAttribute("data-e")] = c.checked; zapisz(); }; });
}
function tSciaga(t) {
  window.renderSciaga(t);
  var n = t.querySelector(".karta-nawig"); if (n) n.remove();
  t.insertAdjacentHTML("afterbegin", '<p><a href="pdf/sciaga-dla-graczy.pdf" download><button>Pobierz ściągę jako PDF</button></a> <button id="druk2">Drukuj</button></p>');
  document.getElementById("druk2").onclick = function () { window.print(); };
}
function tDruk(t) {
  var kopia = JSON.parse(JSON.stringify(P));
  if (ST.zwierze != null) kopia.zwierze = { rodzaj: ST.zwierze, imie: "" };
  window.renderKarta(t, kopia, tlum);
  var n = t.querySelector(".karta-nawig"); if (n) n.remove();
  t.insertAdjacentHTML("afterbegin", '<p><button id="druk3" class="glowny">Drukuj kartę lub zapisz jako PDF</button> <span class="puste">(w oknie druku wybierz „Zapisz jako PDF”)</span></p>');
  document.getElementById("druk3").onclick = function () { window.print(); };
}

/* ---------- rozwój postaci (MG): zmiany nakładane na kartę z repozytorium ---------- */
var KRATKI = { 9: [9], 12: [12, 9], 15: [15, 12, 9], 18: [18, 15, 12], 21: [21, 18, 15] };
function slugZ(p) { return String(p.id || "").replace(/^gracz\./, ""); }
function kluczR(s) { return "hp69mg-rozwoj-" + s; }
function wczytajR(s) { try { var r = JSON.parse(localStorage.getItem(kluczR(s))); if (r && Array.isArray(r.zmiany)) return r; } catch (e) {} return { zmiany: [] }; }
function zapiszR() { try { localStorage.setItem(kluczR(SLUG), JSON.stringify(R)); } catch (e) {} }
function stanZdrowia(s, p) { try { var x = JSON.parse(localStorage.getItem("hp69g-" + s)) || {}; if (x.sp == null) x.sp = p.story_points || 0; return x; } catch (e) { return { sp: p.story_points || 0 }; } }
function trudnoscStartowa(n) {
  var k = window.znajdzZaklecie ? window.znajdzZaklecie(n) : null;
  var t = k ? parseInt(String(k.trudnosc).split("/")[0], 10) : NaN;
  if (isNaN(t)) { var z = (D.zaklecia || {})[n]; t = z && z.tr; }
  return t || null;
}
function aktTr0(n) {
  var nowe = (P.zaklecia || {}).nowe || [];
  for (var i = 0; i < nowe.length; i++) if (nowe[i].nazwa === n) {
    var x = nowe[i], k = KRATKI[x.tr] || [];
    return x.zaznaczone >= x.kratki ? 0 : (k[x.zaznaczone] != null ? k[x.zaznaczone] : x.tr);
  }
  return 0;
}
/* karta z repozytorium + zmiany z dziennika */
function zastosuj(baza, zmiany) {
  var p = JSON.parse(JSON.stringify(baza));
  p.cechy = p.cechy || {}; p.umiejetnosci = p.umiejetnosci || {}; p.zaklecia = p.zaklecia || {}; p.specjalizacje = p.specjalizacje || [];
  p.przedmioty_mg = []; p.nagrody_mg = [];
  (zmiany || []).forEach(function (z) {
    if (z.typ === "cecha") p.cechy[z.nazwa] = (p.cechy[z.nazwa] || 0) + z.o;
    else if (z.typ === "umiejetnosc") p.umiejetnosci[z.nazwa] = (p.umiejetnosci[z.nazwa] || 0) + z.o;
    else if (z.typ === "zaklecie") { p.zaklecia.nowe = p.zaklecia.nowe || []; p.zaklecia.nowe.push({ nazwa: z.nazwa, tr: z.tr, kratki: z.kratki, zaznaczone: z.zaznaczone }); }
    else if (z.typ === "kratka") { (p.zaklecia.nowe || []).forEach(function (x) { if (x.nazwa === z.nazwa) x.zaznaczone = Math.min(x.kratki, x.zaznaczone + 1); }); }
    else if (z.typ === "specjalizacja") p.specjalizacje.push(z.tekst);
    else if (z.typ === "przedmiot") p.przedmioty_mg.push(z);
    else if (z.typ === "nagroda") p.nagrody_mg.push(z);
  });
  return p;
}
function opisZmiany(z) {
  var sp = z.sp ? " (" + (z.sp > 0 ? "+" : "") + z.sp + " Story Points)" : "";
  if (z.typ === "cecha" || z.typ === "umiejetnosc") return (tlum(z.nazwa) || z.nazwa) + " " + z.przed + " → " + (z.przed + z.o) + sp;
  if (z.typ === "zaklecie") return "Nowe zaklęcie: " + z.nazwa + " (trudność " + z.tr + ", zaznaczone kratki " + z.zaznaczone + " z " + z.kratki + ")" + sp;
  if (z.typ === "kratka") return "Kratka nauki: " + z.nazwa + (z.sposob ? " (" + z.sposob + ")" : "") + sp;
  if (z.typ === "specjalizacja") return "Specjalizacja: " + z.tekst + sp;
  if (z.typ === "przedmiot") return "Przedmiot: " + z.nazwa + (z.opis ? " – " + z.opis : "") + sp;
  if (z.typ === "nagroda") return "Nagroda: " + z.opis + sp;
  return z.typ;
}
function dodajZmiane(z) {
  z.data = new Date().toISOString().slice(0, 16).replace("T", " ");
  if (z.sp) { ST.sp = Math.max(0, (ST.sp || 0) + z.sp); zapisz(); }
  R.zmiany.push(z); zapiszR(); P = zastosuj(BAZA, R.zmiany); widok();
}
function wszystkieUmiejetnosci() {
  var o = SL.umiejetnosci || {}, l = Object.keys(o).filter(function (k) { return typeof o[k] === "string"; });
  Object.keys(P.umiejetnosci || {}).forEach(function (u) { if (l.indexOf(u) < 0) l.push(u); });
  return l.sort(function (a, b) { return (tlum(a) || a).localeCompare(tlum(b) || b, "pl"); });
}
function tRozwoj(t) {
  var ks = (D.ksiega || []).map(function (z) { return z.nazwa; });
  var nowe = ((P.zaklecia || {}).nowe || []).filter(function (x) { return x.zaznaczone < x.kratki; });
  var umy = wszystkieUmiejetnosci();
  var instr = (D.dokumenty || {})["zasada.nagradzanie-graczy"] ? '<a href="#/dok/zasada.nagradzanie-graczy">Jak nagradzać graczy (instrukcja) →</a>' : '<span class="puste">Instrukcja nagradzania: 02_zasady/nagradzanie-graczy.md</span>';
  var zm = R.zmiany.slice().reverse();
  t.innerHTML = '<div class="sekg"><h3>Rozwój postaci (tylko MG)</h3><p class="puste">Zmiany zapisują się w tej przeglądarce i nakładają na kartę z repozytorium. Po sesji kliknij „Eksportuj zmiany” i wklej tekst Reżyserowi: wpisze je na stałe do kart i PDF-ów. U Walkera nie ma punktów doświadczenia: rozwój kupuje się za Story Points (s. 31).</p><p>' + instr + '</p>' +
    '<p class="duzy">Story Points: ' + ST.sp + ' <button id="r-sp-m">−1</button> <button id="r-sp-p">+1</button></p></div>' +
    '<div class="sekg kalk"><h3>Nagroda</h3><label>Za co (np. „pierwszy pojedynek u Wrena”) <input id="r-n-opis" type="text" style="width:100%"></label><label>Story Points do dodania <input id="r-n-sp" type="number" inputmode="numeric" value="1"></label><button id="r-n">Dodaj nagrodę</button></div>' +
    '<div class="sekg kalk"><h3>Cecha albo umiejętność +1</h3><p class="puste">Koszt (Walker s. 31): cecha 5 × obecna wartość, umiejętność obecna wartość + 3. Urodziny dają +1 do cechy za darmo.</p>' +
    '<label>Cecha <select id="r-c">' + CECHY.map(function (c) { return '<option value="' + c + '">' + esc(tlum(c)) + " (" + (P.cechy[c] || 0) + ")</option>"; }).join("") + '</select></label><p id="r-c-k" class="puste"></p><label><input type="checkbox" id="r-c-pl" checked style="width:auto"> zapłać Story Points</label><button id="r-c-b">+1 do cechy</button>' +
    '<hr><label>Umiejętność <select id="r-u">' + umy.map(function (u) { return '<option value="' + esc(u) + '">' + esc(tlum(u) || u) + " · " + esc(u) + " (" + (P.umiejetnosci[u] || 0) + ")</option>"; }).join("") + '</select></label><p id="r-u-k" class="puste"></p><label><input type="checkbox" id="r-u-pl" checked style="width:auto"> zapłać Story Points</label><button id="r-u-b">+1 do umiejętności</button></div>' +
    '<div class="sekg kalk"><h3>Nowe zaklęcie albo eliksir</h3><p class="puste">Zaklęcie z Księgi zaklęć trafia do grupy „Nowo poznane”. Zwykle zaczyna od 0 zaznaczonych kratek (nieopanowane); kolejne kratki zaznaczasz niżej po udanym rzucie nauki albo za Story Points.</p>' +
    '<label>Nazwa <input id="r-z" list="r-z-l" type="text" style="width:100%"></label><datalist id="r-z-l">' + ks.map(function (n) { return '<option value="' + esc(n) + '">'; }).join("") + '</datalist><p id="r-z-i" class="puste"></p><label>Zaznaczone kratki <select id="r-z-k"></select></label><button id="r-z-b">Dodaj zaklęcie</button></div>' +
    '<div class="sekg kalk"><h3>Kratka nauki</h3>' + (nowe.length ? nowe.map(function (x, i) { var k = KRATKI[x.tr] || [], akt = k[x.zaznaczone]; return '<p><b>' + esc(x.nazwa) + "</b> · aktualna trudność " + akt + " · kratki " + x.zaznaczone + "/" + x.kratki + '<br><button data-kr="' + esc(x.nazwa) + '" data-s="nauka">Udany rzut nauki (lekcja, książka, korepetycje)</button> <button data-kr="' + esc(x.nazwa) + '" data-s="kupno" data-koszt="' + Math.round(akt / 3) + '">Kup za ' + Math.round(akt / 3) + " Story Points</button></p>"; }).join("") : '<p class="puste">Brak nieopanowanych zaklęć. Rzut nauki: 1D10 + Skupienie + umiejętność zaklęcia przeciw aktualnej trudności; lekcja +1, korepetycje +2 (s. 31–32).</p>') + "</div>" +
    '<div class="sekg kalk"><h3>Specjalizacja</h3><label>Np. „Stealth (Zamek nocą)” (+1 w wąskim zakresie, przy umiejętności 5 lub więcej) <input id="r-s" type="text" style="width:100%"></label><button id="r-s-b">Dodaj specjalizację</button></div>' +
    '<div class="sekg kalk"><h3>Przedmiot</h3><label>Nazwa <input id="r-p" type="text" style="width:100%"></label><label>Opis i działanie <input id="r-p-o" type="text" style="width:100%"></label><button id="r-p-b">Dodaj przedmiot</button></div>' +
    '<div class="sekg"><h3>Dziennik zmian (' + R.zmiany.length + ')</h3>' + (zm.length ? "<ol reversed>" + zm.map(function (z) { return "<li><small class='puste'>" + esc(z.data) + "</small> " + esc(opisZmiany(z)) + "</li>"; }).join("") + "</ol><button id='r-cof'>Cofnij ostatnią zmianę</button>" : "<p class='puste'>Brak zmian.</p>") +
    '</div><div class="sekg"><h3>Eksport i import (wszystkie postacie)</h3><p><button id="r-eks" class="glowny">Eksportuj zmiany</button> <button id="r-imp">Importuj</button></p><textarea class="n" id="r-txt" placeholder="Tu pojawi się eksport. Aby zaimportować, wklej tekst eksportu i kliknij „Importuj”."></textarea><p id="r-komunikat" class="puste"></p></div>';
  var el = function (id) { return document.getElementById(id); };
  el("r-sp-m").onclick = function () { ST.sp = Math.max(0, ST.sp - 1); zapisz(); widok(); };
  el("r-sp-p").onclick = function () { ST.sp += 1; zapisz(); widok(); };
  el("r-n").onclick = function () { var o = el("r-n-opis").value.trim(); if (!o) return; dodajZmiane({ typ: "nagroda", opis: o, sp: parseInt(el("r-n-sp").value, 10) || 0 }); };
  var kc = function () { var c = el("r-c").value, v = P.cechy[c] || 0; el("r-c-k").textContent = "Koszt: " + 5 * v + " Story Points (masz " + ST.sp + ")."; };
  var ku = function () { var u = el("r-u").value, v = P.umiejetnosci[u] || 0; el("r-u-k").textContent = "Koszt: " + (v + 3) + " Story Points (masz " + ST.sp + ")."; };
  el("r-c").onchange = kc; el("r-u").onchange = ku; kc(); ku();
  el("r-c-b").onclick = function () { var c = el("r-c").value, v = P.cechy[c] || 0, k = 5 * v; if (el("r-c-pl").checked && ST.sp < k) { alert("Za mało Story Points (potrzeba " + k + ")."); return; } dodajZmiane({ typ: "cecha", nazwa: c, o: 1, przed: v, sp: el("r-c-pl").checked ? -k : 0 }); };
  el("r-u-b").onclick = function () { var u = el("r-u").value, v = P.umiejetnosci[u] || 0, k = v + 3; if (el("r-u-pl").checked && ST.sp < k) { alert("Za mało Story Points (potrzeba " + k + ")."); return; } dodajZmiane({ typ: "umiejetnosc", nazwa: u, o: 1, przed: v, sp: el("r-u-pl").checked ? -k : 0 }); };
  var zi = function () {
    var n = el("r-z").value.trim(), tr = n ? trudnoscStartowa(n) : null, k = KRATKI[tr] || [];
    el("r-z-i").innerHTML = !n ? "" : (moje(n) ? "<b>To zaklęcie już jest na karcie.</b>" : (tr ? "Trudność startowa " + tr + ", kratki: " + k.join(", ") + "." : "Nie znam trudności tego zaklęcia (sprawdź pisownię w Księdze)."));
    el("r-z-k").innerHTML = k.map(function (_, i) { return '<option value="' + i + '">' + i + (i === 0 ? " (nieopanowane)" : "") + "</option>"; }).join("") + (k.length ? '<option value="' + k.length + '">' + k.length + " (opanowane)</option>" : "");
  };
  el("r-z").oninput = zi; zi();
  el("r-z-b").onclick = function () { var n = el("r-z").value.trim(), tr = trudnoscStartowa(n), k = KRATKI[tr]; if (!n || !k || moje(n)) { zi(); return; } dodajZmiane({ typ: "zaklecie", nazwa: n, tr: tr, kratki: k.length, zaznaczone: parseInt(el("r-z-k").value, 10) || 0 }); };
  t.querySelectorAll("[data-kr]").forEach(function (b) { b.onclick = function () { var koszt = parseInt(b.getAttribute("data-koszt") || "0", 10); if (koszt && ST.sp < koszt) { alert("Za mało Story Points (potrzeba " + koszt + ")."); return; } dodajZmiane({ typ: "kratka", nazwa: b.getAttribute("data-kr"), sposob: b.getAttribute("data-s") === "kupno" ? "kupiona" : "rzut nauki", sp: -koszt }); }; });
  el("r-s-b").onclick = function () { var x = el("r-s").value.trim(); if (x) dodajZmiane({ typ: "specjalizacja", tekst: x }); };
  el("r-p-b").onclick = function () { var x = el("r-p").value.trim(); if (x) dodajZmiane({ typ: "przedmiot", nazwa: x, opis: el("r-p-o").value.trim() }); };
  var cof = el("r-cof"); if (cof) cof.onclick = function () { var z = R.zmiany[R.zmiany.length - 1]; if (!z || !confirm("Cofnąć: " + opisZmiany(z) + "?")) return; R.zmiany.pop(); if (z.sp) { ST.sp = Math.max(0, ST.sp - z.sp); zapisz(); } zapiszR(); P = zastosuj(BAZA, R.zmiany); widok(); };
  el("r-eks").onclick = function () { var tx = eksport(); el("r-txt").value = tx; try { navigator.clipboard.writeText(tx); el("r-komunikat").textContent = "Skopiowano do schowka."; } catch (e) { el("r-komunikat").textContent = "Zaznacz tekst i skopiuj ręcznie."; } };
  el("r-imp").onclick = function () { var w = importuj(el("r-txt").value); el("r-komunikat").textContent = w; if (/^Zaimportowano/.test(w)) { R = wczytajR(SLUG); ST = stanZdrowia(SLUG, BAZA); P = zastosuj(BAZA, R.zmiany); widok(); } };
}
function yq(s) { return '"' + String(s == null ? "" : s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'; }
function eksport() {
  var dane = {}, txt = "# Zmiany z panelu MG (Rozwój postaci). Wklej cały tekst Reżyserowi.\n# Wygenerowano: " + new Date().toISOString().slice(0, 16).replace("T", " ") + "\n";
  LISTA.forEach(function (p) {
    var s = slugZ(p), r = wczytajR(s), st = stanZdrowia(s, p);
    dane[s] = { zmiany: r.zmiany, story_points: st.sp, body: st.body || 0, mind: st.mind || 0 };
    txt += s + ":\n  story_points_teraz: " + st.sp + "\n  zdrowie: {cialo: " + (st.body || 0) + ", umysl: " + (st.mind || 0) + "}\n  zmiany:" + (r.zmiany.length ? "\n" + r.zmiany.map(function (z) { return "  - " + yq(z.data + ": " + opisZmiany(z)); }).join("\n") : " []") + "\n";
  });
  return txt + "# ---JSON (do importu)---\n# " + JSON.stringify(dane) + "\n";
}
function importuj(tx) {
  var i = tx.indexOf("---JSON (do importu)---"); if (i < 0) return "Nie znalazłem części do importu (linia „---JSON (do importu)---”).";
  var j = tx.slice(i).split("\n")[1] || ""; j = j.replace(/^#\s*/, "");
  try {
    var d = JSON.parse(j), n = 0;
    Object.keys(d).forEach(function (s) {
      if (!LISTA.some(function (p) { return slugZ(p) === s; })) return;
      localStorage.setItem(kluczR(s), JSON.stringify({ zmiany: d[s].zmiany || [] }));
      var st = {}; try { st = JSON.parse(localStorage.getItem("hp69g-" + s)) || {}; } catch (e) {}
      st.sp = d[s].story_points; st.body = d[s].body || 0; st.mind = d[s].mind || 0;
      localStorage.setItem("hp69g-" + s, JSON.stringify(st)); n++;
    });
    return "Zaimportowano postacie: " + n + ".";
  } catch (e) { return "Błąd importu: " + e.message; }
}

/* el: kontener; opt: {lista: [karty], slug, zakladka} */
window.renderGracz = function (el, opt) {
  app = el; LISTA = opt.lista || [];
  if (!LISTA.length) { app.innerHTML = "<p class='puste'>Brak kart graczy w 03_postacie/gracze/.</p>"; return; }
  var b = LISTA.filter(function (p) { return slugZ(p) === opt.slug; })[0] || LISTA[0];
  BAZA = b; SLUG = slugZ(b); KLUCZ = "hp69g-" + SLUG;
  ST = stanZdrowia(SLUG, b);
  ST.body = ST.body || 0; ST.mind = ST.mind || 0; ST.ekw = ST.ekw || {}; ST.dod = ST.dod || ""; ST.nagrody = ST.nagrody || ""; ST.sekret4 = ST.sekret4 || ""; ST.wyglad = ST.wyglad || ""; ST.notatki = ST.notatki || "";
  R = wczytajR(SLUG); P = zastosuj(b, R.zmiany);
  zakladka = opt.zakladka || zakladka || "karta";
  widok();
};
})();

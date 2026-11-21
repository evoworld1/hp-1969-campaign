(function () {
"use strict";
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
var CECHY = ["Vitality", "Speed", "Wits", "Knowledge", "Focus"];

function kolka(n) { var h = ""; for (var i = 0; i < n; i++) h += "<span></span>"; return h; }
function kratki(n) { var h = ""; for (var i = 0; i < n; i++) h += '<span class="kratka"></span>'; return h; }

window.renderKarta = function (app, p, tlum) {
  var sl = (window.DANE.postacie._slownik || {}).zaklecia || {};
  var lin = p.pochodzenie || {};
  var poch = (tlum(lin.typ) || lin.typ || "") + (lin.rod ? ", ród " + lin.rod : "");
  var um = Object.keys(p.umiejetnosci || {}).sort(function (a, b) { return p.umiejetnosci[b] - p.umiejetnosci[a]; });
  var polowa = Math.ceil(um.length / 2);
  function tabUm(lista) {
    return "<table style='width:100%'><thead><tr><th>Umiejętność</th><th style='width:26px'>Wart.</th></tr></thead><tbody>" +
      lista.map(function (u) { return "<tr><td>" + esc(tlum(u) || u) + " <span class='malo'>(" + esc(u) + ")</span></td><td style='text-align:center'><b>" + p.umiejetnosci[u] + "</b></td></tr>"; }).join("") + "</tbody></table>";
  }
  var cechy = CECHY.map(function (c) { return '<div class="cecha"><span>' + esc(tlum(c) || c) + "</span><b>" + ((p.cechy || {})[c] || 0) + '</b><span class="malo">' + c + "</span></div>"; }).join("");
  var r = p.rozdzka || {};
  var z = p.zwierze || {};
  var grupy = [["wspolny", "Pakiet wspólny (lata 1–5)"], ["archetyp", "Pakiet archetypu"], ["wybor", "Do wyboru"], ["zaawansowane", "Magia zaawansowana (lata 6–7, eliksiry)"]];
  var zakl = "";
  var zz = p.zaklecia || {};
  grupy.forEach(function (g) {
    var l = zz[g[0]] || [];
    if (!l.length) return;
    zakl += "<h2>" + g[1] + " (" + l.reduce(function (a, x) { return a + (x.kratki || 0); }, 0) + " kratek)</h2><table style='width:100%'><tbody>" +
      l.map(function (x) { var o = (sl[x.nazwa] || {}).opis || ""; return "<tr><td style='width:34%'><b>" + esc(x.nazwa) + "</b></td><td style='width:15%'>" + kratki(x.kratki || 0) + "</td><td class='malo'>" + esc(o) + "</td></tr>"; }).join("") + "</tbody></table>";
  });
  var mg = p.haczyki_mg || p.notatki_mg ? '<div class="mgnotatki" hidden><h2>Notatki MG (nie do druku dla gracza)</h2>' + (p.haczyki_mg ? "<b>Haczyki:</b><ul>" + p.haczyki_mg.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") + (p.notatki_mg ? "<b>Do potwierdzenia:</b><ul>" + p.notatki_mg.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") + "</div>" : "";

  app.innerHTML = '<div class="karta-nawig"><a href="#/postacie"><button>← Postacie</button></a><button id="druk">Drukuj kartę (2 strony A4)</button>' + (mg ? '<button id="pokaz-mg">Pokaż/ukryj notatki MG</button>' : "") + '</div>' +
    '<div class="karta"><div class="strona">' +
    "<h1>" + esc(p.imie) + "</h1>" +
    '<div class="malo">Hogwart, ' + esc(p.rok) + ". rok · " + esc(p.dom) + " · " + esc(p.wiek || 16) + " lat · " + esc(poch) + (p.cecha_rzadka && p.cecha_rzadka !== "brak" ? " · cecha rzadka: " + esc(p.cecha_rzadka) : "") + "</div>" +
    '<div class="malo">Archetyp: ' + esc(p.archetyp || "własna postać") + " · Punkty fabularne (Story Points): <b>" + (p.story_points || 0) + "</b></div>" +
    "<h2>Cechy (Attributes)</h2><div class='w3'>" + cechy + "</div>" +
    "<h2>Umiejętności (Skills)</h2><div class='w2'><div>" + tabUm(um.slice(0, polowa)) + "</div><div>" + tabUm(um.slice(polowa)) + "</div></div>" +
    (p.specjalizacje && p.specjalizacje.length ? "<div><b>Specjalizacje (+1 w wąskim zakresie):</b> " + p.specjalizacje.map(esc).join("; ") + "</div>" : "") +
    "<div><b>Przedmioty 6. roku:</b> " + (p.przedmioty_6_roku || []).map(function (x) { return esc(tlum(x) || x); }).join(", ") + "</div>" +
    "<div class='w2'><div><h2>Różdżka</h2><div><b>" + esc(tlum(r.drewno) || r.drewno || "") + "</b> <span class='malo'>(" + esc(r.drewno || "") + ")</span>, rdzeń: <b>" + esc(tlum(r.rdzen) || r.rdzen || "") + "</b> <span class='malo'>(" + esc(r.rdzen || "") + ")</span>, " + esc(r.dlugosc_cali || "") + " cali</div>" +
    "<div>Giętkość: " + esc(tlum(r.gietkosc) || r.gietkosc || "") + " · Wytrzymałość: " + esc(r.wytrzymalosc || "") + "</div>" +
    "<div>Premie: " + (r.premie || []).map(esc).join("; ") + "</div><div class='malo'>" + esc(r.opis || "") + "</div></div>" +
    "<div><h2>Zwierzę i zdrowie</h2><div>" + esc(z.rodzaj || "") + (z.imie ? " „" + esc(z.imie) + "”" : "") + "</div>" +
    "<div style='margin-top:6px'>Ciało (Body): <span class='kolka'>" + kolka(5) + "</span></div><div style='margin-top:4px'>Umysł (Mind): <span class='kolka'>" + kolka(5) + "</span></div>" +
    "<div class='malo'>Kółka 1–5: Shaken/Rattled (+1), Bruised/Dazed (+2), kolejne rosną; 6. kółko to poważne zagrożenie. Zaznaczaj ołówkiem.</div></div></div>" +
    "<h2>Charakter i sekret</h2><div><b>Charakter:</b> " + esc(p.charakter || "") + "</div><div><b>Sekret:</b> " + esc(p.sekret || "") + "</div>" +
    "<div class='w2'><div><b>Wygląd:</b> " + esc(p.wyglad || "") + "</div><div><b>Osoba, na której zależy:</b> " + esc(p.osoba_bliska || "") + "</div></div>" +
    "<div><b>Wakacje 1969:</b> " + esc(p.wakacje_1969 || "") + "</div>" +
    "</div><div class='strona'><h1>" + esc(p.imie) + " · zaklęcia i eliksiry</h1><div class='malo'>Wszystkie wpisane pozycje są opanowane (Mastered): wszystkie kratki zaznaczone. Tempus poznacie na lekcji w trakcie gry.</div>" +
    zakl +
    "<h2>Wspólny sekret z 4. roku</h2><div class='pole'></div><div class='pole'></div><div class='pole'></div>" +
    "<h2>Nagrody, ekwipunek, notatki</h2><div class='pole'></div><div class='pole'></div><div class='pole'></div><div class='pole'></div><div class='pole'></div></div></div>" + mg;
  document.getElementById("druk").onclick = function () { window.print(); };
  var b = document.getElementById("pokaz-mg");
  if (b) b.onclick = function () { var m = document.querySelector(".mgnotatki"); m.hidden = !m.hidden; };
};
})();

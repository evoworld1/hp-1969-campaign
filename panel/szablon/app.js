(function () {
"use strict";
var D = window.DANE;
var $ = function (s, r) { return (r || document).querySelector(s); };
var app = $("#app");
var KLUCZ = "hp69-panel-v1";

/* ---------- pomocnicze ---------- */
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function fold(s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l").replace(/Ł/g, "l").toLowerCase(); }
function stan() { try { return JSON.parse(localStorage.getItem(KLUCZ)) || {}; } catch (e) { return {}; } }
function zapisz(s) { try { localStorage.setItem(KLUCZ, JSON.stringify(s)); } catch (e) {} }
var S = stan();
S.flagi = S.flagi || {};
S.notatki = S.notatki || "";
function ustaw(k, v) { S[k] = v; zapisz(S); }

var SCENY = D.sceny.slice();
var GLOWNE = SCENY.filter(function (s) { return !s["moduł"]; });
var MODUL = SCENY.filter(function (s) { return s["moduł"]; })[0];
function scena(id) { return SCENY.filter(function (s) { return s.id === id; })[0]; }
function numerSceny(s) { return s.id.split(".").pop(); }

/* ---------- hasło ---------- */
function sha256hex(t) {
  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)).then(function (b) {
    return Array.prototype.map.call(new Uint8Array(b), function (x) { return ("0" + x.toString(16)).slice(-2); }).join("");
  });
}
function start() {
  var motyw = S.motyw; if (motyw) document.documentElement.setAttribute("data-motyw", motyw);
  if (D.haslo_sha256 && sessionStorage.getItem("hp69-ok") !== D.haslo_sha256) {
    var b = $("#brama"); b.hidden = false;
    $("#brama-form").onsubmit = function (e) {
      e.preventDefault();
      sha256hex($("#brama-haslo").value).then(function (h) {
        if (h === D.haslo_sha256) { sessionStorage.setItem("hp69-ok", h); b.hidden = true; uruchom(); }
        else $("#brama-blad").hidden = false;
      });
    };
    return;
  }
  uruchom();
}
function uruchom() {
  $("#pasek").hidden = false;
  window.addEventListener("hashchange", trasa);
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); szukaj(); }
    if (e.key === "Escape") zamknij();
  });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a.wl");
    if (a) { e.preventDefault(); dokument(a.getAttribute("data-id")); }
  });
  $("#b-szukaj").onclick = szukaj;
  $("#b-flagi").onclick = flagiSzuflada;
  $("#b-menu").onclick = menu;
  $("#szuflada-x").onclick = zamknij;
  $("#nakladka").onclick = zamknij;
  trasa();
}

/* ---------- szuflada ---------- */
function otworz(tytul, html) {
  $("#szuflada-tytul").textContent = tytul;
  $("#szuflada-tresc").innerHTML = html;
  $("#szuflada").hidden = false; $("#nakladka").hidden = false;
  $("#szuflada").scrollTop = 0;
}
function zamknij() { $("#szuflada").hidden = true; $("#nakladka").hidden = true; }

function dokument(id) {
  var d = D.dokumenty[id];
  if (!d) { otworz(id, "<p>Brak dokumentu o identyfikatorze <code>" + esc(id) + "</code>.</p>"); return; }
  var znacznik = d.pewnosc ? ' <span class="flaga">pewność: ' + esc(d.pewnosc) + "</span>" : "";
  otworz(d.tytul, "<p><span class='flaga'>" + esc(d.typ) + "</span>" + znacznik + "</p>" + d.html);
}

/* ---------- trasa ---------- */
function trasa() {
  zamknij();
  var h = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  var cz = h[0] || "";
  window.scrollTo(0, 0);
  $("#pasek-scena").textContent = "";
  if (cz === "scena") return krok(h[1], parseInt(h[2] || "0", 10));
  if (cz === "wedrowki") return wedrowki();
  if (cz === "postacie") return postacie();
  if (cz === "postac") return karta(h[1]);
  if (cz === "zasady") return zasady();
  if (cz === "ksiega") return window.renderKsiega(app, { szukaj: h[1] || "" });
  if (cz === "sciaga") return window.renderSciaga(app);
  if (cz === "kreator") return window.kreator ? window.kreator(app, D) : (app.innerHTML = "<p>Kreator niedostępny.</p>");
  if (cz === "dok") { ekranStart(); return dokument(h[1]); }
  ekranStart();
}
function idzDo(sceneId, i) { location.hash = "#/scena/" + sceneId + "/" + i; }

/* ---------- start ---------- */
function ekranStart() {
  var poz = S.pozycja, wznow = "";
  if (poz && scena(poz.scena)) {
    var sc = scena(poz.scena), k = sc.kroki[poz.krok];
    wznow = '<button id="wznow" class="glowny">Wznów: scena ' + numerSceny(sc) + ", krok " + (poz.krok + 1) + (k ? " (" + esc(k.tytul) + ")" : "") + "</button>";
  }
  var kafle = GLOWNE.map(function (s) {
    return '<a class="kafel" href="#/scena/' + s.id + '/0"><strong>' + (numerSceny(s) === "11" ? "Prolog" : "Scena " + numerSceny(s)) + "</strong><br>" + esc(s.tytul.replace(/^Prolog:\s*/, "")) + "<small>" + s.kroki.length + " kroków, ok. " + (s.czas_min || "?") + " min</small></a>";
  }).join("");
  app.innerHTML = '<div class="start"><h1>Godzina, której nie było</h1><div class="podtytul">Hogwart, jesień 1969. Panel Mistrza Gry, Scenariusz 1.</div>' +
    '<div class="rzad"><button id="rozpocznij" class="glowny">ROZPOCZNIJ SESJĘ</button>' + wznow + "</div>" +
    '<label><input type="checkbox" id="bez-prologu"> Zacznij od sceny 01 (bez prologu na Pokątnej)</label>' +
    '<div class="rzad"><a class="kafel" href="#/postacie"><strong>Postacie graczy</strong><small>karty do wydruku</small></a>' +
    '<a class="kafel" href="#/sciaga"><strong>Ściąga dla graczy</strong><small>jak czytać kartę, do PDF</small></a><a class="kafel" href="#/kreator"><strong>Tworzenie postaci</strong><small>szybka i pełna ścieżka</small></a>' +
    '<a class="kafel" href="#/ksiega"><strong>Księga zaklęć</strong><small>opisy, trudności, czas trwania</small></a><a class="kafel" href="#/zasady"><strong>Zasady i kanon</strong><small>przeglądanie i szukanie</small></a>' +
    '<a class="kafel" href="#/wedrowki"><strong>Wędrówki po zamku</strong><small>spotkania A–P</small></a></div>' +
    '<h3 style="text-align:left;margin-top:2rem">Wszystkie sceny</h3><div class="siatka">' + kafle + "</div></div>";
  $("#rozpocznij").onclick = function () {
    S.flagi = {}; S.historia = []; zapisz(S);
    var pierwsza = $("#bez-prologu").checked ? "s1.scena.01" : "s1.scena.11";
    idzDo(pierwsza, 0);
  };
  if ($("#wznow")) $("#wznow").onclick = function () { idzDo(poz.scena, poz.krok); };
}

/* ---------- krok ---------- */
function nastepnaScena(s) {
  var i = GLOWNE.indexOf(s);
  return i >= 0 ? GLOWNE[i + 1] : null;
}
function npcKarta(sc, nid) {
  var n = sc.npc[nid]; if (!n) return "";
  var pelna = n.id && D.dokumenty[n.id] ? '<button data-dok="' + n.id + '">Pełna karta</button>' : "";
  var zwin = n.opis_html && n.opis_html.length > 700;
  return '<div class="npc"><div class="imie">' + esc(n.imie) + '</div>' +
    (zwin ? "<details><summary>Co robi, czego chce, sygnał</summary>" + n.opis_html + "</details>" : n.opis_html) + pelna + "</div>";
}
function krok(sid, i) {
  var sc = scena(sid);
  if (!sc || !sc.kroki[i]) { app.innerHTML = '<div class="start"><p>Nie ma takiego kroku.</p><a href="#/">Ekran startowy</a></div>'; return; }
  var k = sc.kroki[i];
  var modul = sc["moduł"];
  S.pozycja = { scena: sid, krok: i }; zapisz(S);
  var nazwa = numerSceny(sc) === "11" ? "Prolog" : "Scena " + numerSceny(sc);
  $("#pasek-scena").textContent = nazwa + ": " + sc.tytul.replace(/^Prolog:\s*/, "") + " · " + (modul ? "spotkanie " + k.nr : "krok " + (i + 1) + "/" + sc.kroki.length);

  // lewa
  var obecni = k.npc.filter(function (n) { return sc.npc[n]; });
  var reszta = Object.keys(sc.npc).filter(function (n) { return obecni.indexOf(n) < 0; });
  var lewa = '<div class="sekcja-t" style="margin-top:0">Postacie w tym kroku</div>' +
    (obecni.length ? obecni.map(function (n) { return npcKarta(sc, n); }).join("") : '<p class="puste">Nikt z kart. Zob. „W całej scenie”.</p>') +
    (reszta.length ? "<details><summary class='puste'>W całej scenie (" + reszta.length + ")</summary>" + reszta.map(function (n) { return npcKarta(sc, n); }).join("") + "</details>" : "");

  // środek
  var sr = '<div class="naglowek-kroku"><div class="meta">' + esc(nazwa) + " · " + (modul ? "spotkanie " + esc(k.nr) : "krok " + (i + 1) + " z " + sc.kroki.length) + (k.czas ? " · " + esc(k.czas) : "") + "</div><h2>" + esc(k.tytul) + "</h2></div>" +
    '<div class="pasek-postepu"><div style="width:' + Math.round(((i + 1) / sc.kroki.length) * 100) + '%"></div></div>';
  if (k.teksty.length) {
    sr += '<div class="sekcja-t">Czytaj na głos</div>';
    k.teksty.forEach(function (t) {
      sr += '<div class="tekst-tytul">' + esc(t.tytul) + "</div>" + t.glowny;
      t.wstawki.forEach(function (w) { sr += '<details class="wstawka"><summary>' + esc(w.tytul) + "</summary>" + w.html + "</details>"; });
    });
  }
  if (k.uwagi_czytaj.length && !k.teksty.length) sr += '<div class="sekcja-t">Czytaj</div><div class="uwaga-czytaj">' + k.uwagi_czytaj.join("<br>") + "</div>";
  if (k.dialogi.length) {
    sr += '<div class="sekcja-t">Dialogi do odczytania</div>' + k.dialogi.map(function (d) { return sc.bloki[d] || ""; }).join("");
  }
  if (!k.teksty.length && !k.dialogi.length && k.krotko.length) {
    sr += '<div class="sekcja-t">Ten krok prowadzisz własnymi słowami</div><div class="krotko">' + k.krotko.map(function (x) { return "<p>" + x + "</p>"; }).join("") + "</div>";
  }

  // prawa
  var zakl = [];
  var instr = '<div class="krotko">' + (k.krotko.length ? k.krotko.map(function (x) { return "<p>" + x + "</p>"; }).join("") : "<p class='puste'>Brak dodatkowych instrukcji.</p>") + "</div>" +
    k.inne.map(function (p) { return "<p><strong>" + esc(p[0]) + ":</strong> " + p[1] + "</p>"; }).join("") +
    (k.materialy.length ? '<div class="sekcja-t">Materiały</div>' + k.materialy.map(function (m) { return '<p><a class="wl" href="#" data-id="' + m + '">' + esc((D.dokumenty[m] || {}).tytul || m) + "</a></p>"; }).join("") : "") +
    (k.uwagi_czytaj.length && k.teksty.length ? '<div class="sekcja-t">Jak czytać</div><div class="uwaga-czytaj">' + k.uwagi_czytaj.join("<br>") + "</div>" : "");
  zakl.push({ id: "co", nazwa: "Co robię", html: instr, licz: 0 });
  zakl.push({ id: "testy", nazwa: "Testy", html: k.testy.length ? k.testy.map(function (t) { return sc.bloki[t]; }).join("") : "<p class='puste'>W tym kroku nie ma testów. Gdyby gracze chcieli czegoś spróbować, użyj „Szukaj” (Ctrl+K).</p>", licz: k.testy.length });
  var inne = sc.wszystkie_jesli.filter(function (j) { return k.jesli.indexOf(j) < 0; });
  zakl.push({ id: "jesli", nazwa: "Co jeśli…", licz: k.jesli.length,
    html: (k.jesli.length ? k.jesli.map(function (j) { return sc.bloki[j]; }).join("") : "<p class='puste'>Brak ścieżek przypisanych do tego kroku.</p>") +
      (inne.length ? "<details><summary class='puste'>Wszystkie ścieżki awaryjne sceny (" + inne.length + ")</summary>" + inne.map(function (j) { return sc.bloki[j]; }).join("") + "</details>" : "") });
  if (sc.podpowiedzi.length) zakl.push({ id: "podp", nazwa: "Podpowiedzi", html: sc.podpowiedzi.map(function (p) { return sc.bloki[p]; }).join(""), licz: 0 });
  zakl.push({ id: "tlo", nazwa: "Tło sceny", html: "<p><strong>Cel:</strong> " + esc(sc.cel) + "</p>" + sc.dla_mg + "<h4>Konsekwencje</h4>" + sc.konsekwencje, licz: 0 });
  var aktywna = (S.zakladka && S.zakladka.k === sid + "/" + i) ? S.zakladka.z : (k.testy.length ? "testy" : "co");
  var zb = '<div class="zakladki">' + zakl.map(function (z) {
    return '<button data-z="' + z.id + '" class="' + (z.id === aktywna ? "aktywna" : "") + '">' + esc(z.nazwa) + (z.licz ? '<span class="licz">' + z.licz + "</span>" : "") + "</button>";
  }).join("") + "</div>";
  var prawa = zb + zakl.map(function (z) { return '<div class="panel-z" data-p="' + z.id + '"' + (z.id === aktywna ? "" : " hidden") + ">" + z.html + "</div>"; }).join("");

  // dół
  var flagi = k.flagi.map(function (f) {
    return '<button class="flaga-przel' + (S.flagi[f] ? " on" : "") + '" data-f="' + f + '" title="' + esc(D.flagi[f] || "") + '">' + esc(f.replace("flaga.", "")) + "</button>";
  }).join("");
  var prev = "", next = "";
  if (modul) {
    prev = '<button id="wroc-z-wedrowki">← Wróć do głównego wątku</button>';
    next = '<a href="#/wedrowki"><button class="glowny">Następne spotkanie (menu)</button></a>';
  } else {
    if (i > 0) prev = '<a href="#/scena/' + sid + "/" + (i - 1) + '"><button>← Poprzedni krok</button></a>';
    else { var p = GLOWNE[GLOWNE.indexOf(sc) - 1]; if (p) prev = '<a href="#/scena/' + p.id + "/" + (p.kroki.length - 1) + '"><button>← Poprzednia scena</button></a>'; }
    if (i < sc.kroki.length - 1) next = '<a href="#/scena/' + sid + "/" + (i + 1) + '"><button class="glowny">Przejdź do następnego etapu sceny →</button></a>';
    else { var n = nastepnaScena(sc); next = n ? '<a href="#/scena/' + n.id + '/0"><button class="glowny">Przejdź do następnej sceny: ' + esc(n.tytul) + " →</button></a>" : '<a href="#/"><button class="glowny">Koniec scenariusza: ekran startowy</button></a>'; }
  }
  var dol = '<div class="dol">' + prev + '<div class="flagi-krok">' + (flagi ? "<small>Zaznacz, co się wydarzyło (zapisuje się w przeglądarce):</small><br>" + flagi : "") + "</div>" + next + "</div>";
  var wed = (!modul && MODUL) ? '<p><a href="#/wedrowki" id="do-wedrowek">Gracze błądzą po zamku? Wędrówki po zamku (spotkania A–P) →</a></p>' : "";

  app.innerHTML = '<div class="ukl"><aside class="lewa">' + lewa + '</aside><section class="srodek">' + sr + dol + wed + '</section><aside class="prawa">' + prawa + "</aside></div>";

  app.querySelectorAll(".zakladki button").forEach(function (b) {
    b.onclick = function () {
      var z = b.getAttribute("data-z"); S.zakladka = { k: sid + "/" + i, z: z }; zapisz(S);
      app.querySelectorAll(".zakladki button").forEach(function (x) { x.classList.toggle("aktywna", x === b); });
      app.querySelectorAll(".panel-z").forEach(function (p) { p.hidden = p.getAttribute("data-p") !== z; });
    };
  });
  app.querySelectorAll("[data-dok]").forEach(function (b) { b.onclick = function () { dokument(b.getAttribute("data-dok")); }; });
  app.querySelectorAll(".flaga-przel").forEach(function (b) {
    b.onclick = function () { var f = b.getAttribute("data-f"); S.flagi[f] = !S.flagi[f]; zapisz(S); b.classList.toggle("on", !!S.flagi[f]); };
  });
  var wz = $("#wroc-z-wedrowki");
  if (wz) wz.onclick = function () { var r = S.powrot; if (r) idzDo(r.scena, r.krok); else location.hash = "#/"; };
  var dw = $("#do-wedrowek");
  if (dw) dw.onclick = function () { S.powrot = { scena: sid, krok: i }; zapisz(S); };
}

/* ---------- wędrówki ---------- */
function wedrowki() {
  if (!MODUL) { app.innerHTML = "<p>Brak modułu wędrówek.</p>"; return; }
  var kafle = MODUL.kroki.slice().sort(function (a, b) { return a.nr < b.nr ? -1 : 1; }).map(function (k) {
    var idx = MODUL.kroki.indexOf(k);
    return '<a class="kafel" href="#/scena/' + MODUL.id + "/" + idx + '"><strong>' + esc(k.nr) + ". " + esc(k.tytul) + "</strong><small>" + esc(k.czas) + "</small></a>";
  }).join("");
  var r = S.powrot, wr = r && scena(r.scena) ? '<p><a href="#/scena/' + r.scena + "/" + r.krok + '"><button>← Wróć do głównego wątku</button></a></p>' : "";
  app.innerHTML = '<div class="start" style="margin-top:2vh"><h1>Wędrówki po zamku</h1><div class="podtytul">Jedno spotkanie to jedna wskazówka, moment z Anselem albo czysty kolor. Kolejność dowolna.</div>' + wr +
    '<div class="siatka">' + kafle + "</div><details style='text-align:left;margin-top:1.5rem'><summary>Jak wpinać wędrówki (tło)</summary>" + MODUL.dla_mg + "</details></div>";
  var l = $(".start a[href^='#/scena']"); // zapamiętaj powrót przy wejściu w spotkanie
  app.querySelectorAll(".kafel").forEach(function (a) { a.addEventListener("click", function () { if (!S.powrot && S.pozycja && !scena(S.pozycja.scena)["moduł"]) { S.powrot = S.pozycja; zapisz(S); } }); });
}

/* ---------- menu, flagi, szukaj ---------- */
function menu() {
  var h = "<p><a href='#/'><button>Ekran startowy</button></a> <a href='#/postacie'><button>Postacie graczy</button></a> <a href='#/kreator'><button>Tworzenie postaci</button></a> <a href='#/ksiega'><button>Księga zaklęć</button></a> <a href='#/zasady'><button>Zasady i kanon</button></a> <a href='#/wedrowki'><button>Wędrówki po zamku</button></a></p>";
  h += "<h4>Sceny</h4><div class='siatka'>" + GLOWNE.map(function (s) {
    return '<a class="kafel" href="#/scena/' + s.id + '/0"><strong>' + (numerSceny(s) === "11" ? "Prolog" : "Scena " + numerSceny(s)) + "</strong><br>" + esc(s.tytul.replace(/^Prolog:\s*/, "")) + "</a>";
  }).join("") + "</div>";
  h += "<h4>Kroki bieżącej sceny</h4>";
  var p = S.pozycja; if (p && scena(p.scena)) {
    h += "<ol>" + scena(p.scena).kroki.map(function (k, i) { return '<li><a href="#/scena/' + p.scena + "/" + i + '">' + esc(k.tytul) + "</a></li>"; }).join("") + "</ol>";
  }
  h += "<p><button id='motyw'>Przełącz tryb jasny/ciemny</button></p>";
  otworz("Menu", h);
  $("#motyw").onclick = function () {
    var ciemny = document.documentElement.getAttribute("data-motyw") === "ciemny" || (!document.documentElement.getAttribute("data-motyw") && matchMedia("(prefers-color-scheme: dark)").matches);
    var n = ciemny ? "jasny" : "ciemny"; document.documentElement.setAttribute("data-motyw", n); ustaw("motyw", n);
  };
  $("#szuflada-tresc").querySelectorAll("a").forEach(function (a) { a.addEventListener("click", zamknij); });
}
function flagiSzuflada() {
  var ids = Object.keys(D.flagi);
  var h = "<p class='puste'>Klikasz, co się wydarzyło. Zapis w tej przeglądarce. „Wyczyść” zeruje flagi.</p><p><button id='fl-wyczysc'>Wyczyść flagi</button></p>";
  var wlaczone = ids.filter(function (f) { return S.flagi[f]; });
  h += "<h4>Ustawione (" + wlaczone.length + ")</h4><div id='fl-on'>" + (wlaczone.map(function (f) { return flagaWiersz(f); }).join("") || "<p class='puste'>Żadna.</p>") + "</div>";
  h += "<h4>Wszystkie</h4><input id='fl-filtr' placeholder='Filtruj…' style='width:100%;padding:.4rem'><div id='fl-wszystkie'>" + ids.map(flagaWiersz).join("") + "</div>";
  h += "<h4>Notatki z sesji</h4><textarea id='notatki' style='width:100%;min-height:8rem;padding:.5rem;background:var(--bg);border:1px solid var(--linia);border-radius:8px'>" + esc(S.notatki) + "</textarea>";
  otworz("Flagi i notatki", h);
  $("#notatki").oninput = function () { ustaw("notatki", this.value); };
  $("#fl-wyczysc").onclick = function () { S.flagi = {}; zapisz(S); flagiSzuflada(); };
  $("#fl-filtr").oninput = function () { var q = fold(this.value); $("#fl-wszystkie").querySelectorAll(".fw").forEach(function (e) { e.hidden = q && fold(e.textContent).indexOf(q) < 0; }); };
  $("#szuflada-tresc").querySelectorAll(".flaga-przel").forEach(function (b) {
    b.onclick = function () { var f = b.getAttribute("data-f"); S.flagi[f] = !S.flagi[f]; zapisz(S); flagiSzuflada(); };
  });
}
function flagaWiersz(f) {
  return '<div class="fw"><button class="flaga-przel' + (S.flagi[f] ? " on" : "") + '" data-f="' + f + '">' + esc(f.replace("flaga.", "")) + "</button> <small class='puste'>" + esc((D.flagi[f] || "").slice(0, 160)) + "</small></div>";
}

var INDEKS = null;
function zbudujIndeks() {
  INDEKS = [];
  Object.keys(D.dokumenty).forEach(function (id) {
    var d = D.dokumenty[id];
    INDEKS.push({ typ: d.typ, tytul: d.tytul, tekst: d.tytul + " " + d.tekst, hash: "#/dok/" + id, dok: id });
  });
  SCENY.forEach(function (s) {
    s.kroki.forEach(function (k, i) {
      var tr = k.teksty.map(function (t) { return t.glowny.replace(/<[^>]+>/g, " "); }).join(" ") + " " + k.krotko.join(" ").replace(/<[^>]+>/g, " ");
      INDEKS.push({ typ: "krok", tytul: (numerSceny(s) === "11" ? "Prolog" : "Scena " + numerSceny(s)) + ": " + (s["moduł"] ? "spotkanie " + k.nr + ". " : "") + k.tytul, tekst: k.tytul + " " + tr, hash: "#/scena/" + s.id + "/" + i });
    });
    Object.keys(s.bloki).forEach(function (b) {
      var t = s.bloki[b].replace(/<[^>]+>/g, " ");
      var typ = b.indexOf(".test.") > 0 ? "test" : b.indexOf(".dialog.") > 0 ? "dialog" : b.indexOf(".podpowiedzi") > 0 ? "podpowiedzi" : "co jeśli";
      var gdzie = null;
      s.kroki.forEach(function (k, i) { if (gdzie == null && (k.testy.indexOf(b) >= 0 || k.dialogi.indexOf(b) >= 0 || k.jesli.indexOf(b) >= 0)) gdzie = i; });
      INDEKS.push({ typ: typ, tytul: (numerSceny(s) === "11" ? "Prolog" : "Scena " + numerSceny(s)) + ": " + b.split(".").slice(3).join(" "), tekst: b + " " + t, hash: "#/scena/" + s.id + "/" + (gdzie || 0) });
    });
  });
}
function dodajZaklecia() {
  (D.ksiega || []).forEach(function (z, i) {
    INDEKS.push({ typ: z.typ === "Potion" ? "eliksir" : "zaklęcie", tytul: z.nazwa + (z.nazwa_pl ? " (" + z.nazwa_pl + ")" : ""), tekst: z.nazwa + " " + (z.nazwa_pl || "") + " " + z.nazwa + " " + (z.efekt || "") + " " + (z.opis || "") + " " + (z.w_walce || ""), hash: "#/ksiega", zakl: i });
  });
}
function pokazZaklecie(z) { otworz(z.nazwa, window.kartaZaklecia(z, '<p><a href="#/ksiega/' + encodeURIComponent(z.nazwa) + '"><button>Otwórz w Księdze zaklęć</button></a></p>')); }
function szukaj() {
  if (!INDEKS) { zbudujIndeks(); dodajZaklecia(); }
  otworz("Szukaj", '<input id="szuk-wejscie" placeholder="np. Stupefy, pojedynek, Cassian, trudność, Drained…" autofocus><div id="szuk-wyniki"></div>');
  var we = $("#szuk-wejscie"); we.focus();
  we.oninput = function () {
    var q = fold(we.value).split(/\s+/).filter(Boolean), out = [];
    if (!q.length) { $("#szuk-wyniki").innerHTML = ""; return; }
    INDEKS.forEach(function (e) {
      var ft = e._f || (e._f = fold(e.tekst)), ftyt = e._t || (e._t = fold(e.tytul));
      var ok = q.every(function (w) { return ft.indexOf(w) >= 0; });
      if (!ok) return;
      var pkt = q.reduce(function (a, w) { return a + (ftyt.indexOf(w) >= 0 ? 10 : 0) + Math.min(5, ft.split(w).length - 1); }, 0);
      var poz = ft.indexOf(q[0]), fr = e.tekst.substr(Math.max(0, poz - 50), 160).replace(/\s+/g, " ");
      out.push({ e: e, pkt: pkt, fr: fr });
    });
    out.sort(function (a, b) { return b.pkt - a.pkt; });
    $("#szuk-wyniki").innerHTML = (out.length ? "" : "<p class='puste'>Brak wyników.</p>") + out.slice(0, 40).map(function (o) {
      var dok = o.e.dok ? ' data-dok="' + o.e.dok + '"' : o.e.zakl != null ? ' data-zakl="' + o.e.zakl + '"' : "";
      return '<a class="wynik" href="' + o.e.hash + '"' + dok + '><span class="typ">' + esc(o.e.typ) + "</span> <strong>" + esc(o.e.tytul) + "</strong><small>…" + esc(o.fr) + "…</small></a>";
    }).join("");
    $("#szuk-wyniki").querySelectorAll("a").forEach(function (a) {
      a.onclick = function (ev) { var d = a.getAttribute("data-dok"), zk = a.getAttribute("data-zakl"); if (d) { ev.preventDefault(); dokument(d); } else if (zk != null) { ev.preventDefault(); pokazZaklecie(D.ksiega[+zk]); } else zamknij(); };
    });
  };
}

/* ---------- zasady i kanon ---------- */
function zasady() {
  var grupy = { zasada: "Zasady", kanon: "Kanon", npc: "Postacie niezależne", miejsce: "Miejsca", przedmiot: "Przedmioty", handout: "Handouty" };
  var h = '<div class="start" style="margin-top:2vh;text-align:left"><h1>Zasady i kanon</h1><p class="puste">Najpierw szukaj (Ctrl+K). Lista poniżej to wszystko, co jest w repozytorium.</p>';
  Object.keys(grupy).forEach(function (t) {
    var lista = Object.keys(D.dokumenty).map(function (i) { return D.dokumenty[i]; }).filter(function (d) { return d.typ === t; });
    if (!lista.length) return;
    h += "<h3>" + grupy[t] + " (" + lista.length + ")</h3><div class='siatka'>" + lista.map(function (d) {
      return '<a class="kafel wl" href="#" data-id="' + d.id + '">' + esc(d.tytul) + "<small>" + esc(d.status) + (d.pewnosc ? " · " + esc(d.pewnosc) : "") + "</small></a>";
    }).join("") + "</div>";
  });
  app.innerHTML = h + "</div>";
}

/* ---------- postacie ---------- */
function postacie() {
  var lista = Object.keys(D.postacie).filter(function (k) { return k !== "_slownik"; }).map(function (k) { return D.postacie[k]; });
  app.innerHTML = '<div class="start" style="margin-top:2vh"><h1>Postacie graczy</h1><div class="podtytul">Karta do wydruku po polsku (Ctrl+P w przeglądarce).</div><div class="siatka">' +
    (lista.length ? lista.map(function (p) { return '<a class="kafel" href="#/postac/' + esc(p.id) + '"><strong>' + esc(p.imie) + "</strong>" + esc(p.dom) + ", " + esc(p.rok) + ". rok<small>" + esc(p.archetyp || "") + "</small></a>"; }).join("") : "<p class='puste'>Brak zapisanych postaci. Użyj kreatora.</p>") +
    '</div><p><a href="#/kreator"><button class="glowny">Stwórz nową postać</button></a> <a href="#/sciaga"><button>Ściąga dla graczy (PDF)</button></a></p><p class="puste">PDF-y do pobrania: <a href="pdf/sciaga-dla-graczy.pdf" download>ściąga</a>, ' + lista.map(function (p) { return '<a href="pdf/karta-' + esc(p.id.replace("gracz.", "")) + '.pdf" download>' + esc(p.imie) + "</a>"; }).join(", ") + ".</p>" + (S.wlasne && S.wlasne.length ? "<h3>Utworzone w przeglądarce</h3><div class='siatka'>" + S.wlasne.map(function (p, i) { return '<a class="kafel" href="#/postac/wlasna-' + i + '"><strong>' + esc(p.imie || "bez imienia") + "</strong>" + esc(p.archetyp || "") + "</a>"; }).join("") + "</div>" : "") + "</div>";
}
var SL = null;
function tlum(nazwa) {
  if (!SL) {
    SL = {};
    var s = D.postacie._slownik || {};
    (function przejdz(o) {
      if (!o || typeof o !== "object") return;
      Object.keys(o).forEach(function (k) {
        var v = o[k];
        if (typeof v === "string") SL[k] = v;
        else if (v && typeof v === "object" && !Array.isArray(v)) { var t = v.pl || v.polski || v.nazwa; if (typeof t === "string") SL[k] = t; else przejdz(v); }
      });
    })(s);
  }
  if (!nazwa) return "";
  return SL[nazwa] || SL[nazwa.charAt(0).toUpperCase() + nazwa.slice(1)] || "";
}
function karta(id) {
  var p = D.postacie[id];
  if (!p && /^wlasna-/.test(id)) p = (S.wlasne || [])[parseInt(id.split("-")[1], 10)];
  if (!p) { app.innerHTML = "<p>Nie ma takiej postaci.</p>"; return; }
  window.renderKarta(app, p, tlum);
}
window.tlum = tlum;
window.zapiszStan = function (f) { f(S); zapisz(S); };
window.stanPanelu = function () { return S; };

start();
})();

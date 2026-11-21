(function () {
"use strict";
var app = document.getElementById("app");
var D = window.DANE, KARTY = window.KARTY || [];
var SL = D.postacie._slownik || {};
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function dek(b64) { var s = atob(b64), a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }
function tlum(n) {
  if (!n) return "";
  var g = ["cechy", "umiejetnosci", "przedmioty_6_roku", "grupy_premii_rozdzki", "rdzenie_i_drewna", "gietkosc", "pochodzenie", "domy", "zwierzeta"];
  for (var i = 0; i < g.length; i++) { var o = SL[g[i]] || {}; if (typeof o[n] === "string") return o[n]; var c = n.charAt(0).toUpperCase() + n.slice(1); if (typeof o[c] === "string") return o[c]; }
  return "";
}
window.tlum = tlum;

var KARA = [0, 1, 2, 3, 5, 7, "X"];
var STANY = [["", ""], ["Wstrząśnięty", "Roztrzęsiony"], ["Posiniaczony", "Oszołomiony"], ["Zakrwawiony", "Wyczerpany"], ["Złamany", "Zdezorientowany"], ["Gasnący", "Majaczący"], ["Bez życia", "Bez świadomości"]];
var CECHY = ["Vitality", "Speed", "Wits", "Knowledge", "Focus"];
var DADA = ["Flipendo", "Impedimenta", "Trip Jinx", "Stinging Jinx"];
var TRANSM = ["Incendio", "Aguamenti", "Incarcerous"];
function umZaklecia(n) { return DADA.indexOf(n) >= 0 ? "D.A.D.A." : TRANSM.indexOf(n) >= 0 ? "Transfiguration" : "Charms"; }

var P = null, ST = null, KLUCZ = "", zakladka = "karta", kalkWstep = null;
function zapisz() { try { localStorage.setItem(KLUCZ, JSON.stringify(ST)); } catch (e) {} }
function wczytaj() { try { return JSON.parse(localStorage.getItem(KLUCZ)) || {}; } catch (e) { return {}; } }

/* ---------- logowanie ---------- */
function login(blad, wybrana) {
  app.innerHTML = '<div class="login"><h1>Karta gracza</h1><p class="puste">Godzina, której nie było · Hogwart 1969</p><div class="wybor">' +
    KARTY.map(function (k) { return '<button data-s="' + esc(k.slug) + '"' + (wybrana === k.slug ? ' class="aktywna"' : "") + ">" + esc(k.imie) + " <small class='puste'>" + esc(k.dom) + "</small></button>"; }).join("") + "</div>" +
    '<div id="pin-box" ' + (wybrana ? "" : "hidden") + '><input id="pin" type="password" inputmode="numeric" autocomplete="off" placeholder="PIN"><p><button id="wejdz" class="glowny">Wejdź</button></p></div>' +
    (blad ? '<p class="blad">' + esc(blad) + "</p>" : "") + "</div>";
  var wyb = wybrana;
  app.querySelectorAll(".wybor button").forEach(function (b) { b.onclick = function () { login("", b.getAttribute("data-s")); }; });
  if (wyb) {
    var pin = document.getElementById("pin"); pin.focus();
    var go = function () { odszyfruj(wyb, pin.value.trim()); };
    document.getElementById("wejdz").onclick = go;
    pin.onkeydown = function (e) { if (e.key === "Enter") go(); };
  }
}
function odszyfruj(slug, pin) {
  var k = KARTY.filter(function (x) { return x.slug === slug; })[0];
  if (!k || !pin) { login("Podaj PIN.", slug); return; }
  crypto.subtle.importKey("raw", new TextEncoder().encode(pin), "PBKDF2", false, ["deriveKey"])
    .then(function (m) { return crypto.subtle.deriveKey({ name: "PBKDF2", salt: dek(k.sol), iterations: k.iter, hash: "SHA-256" }, m, { name: "AES-GCM", length: 256 }, false, ["decrypt"]); })
    .then(function (key) { return crypto.subtle.decrypt({ name: "AES-GCM", iv: dek(k.iv) }, key, dek(k.ct)); })
    .then(function (buf) {
      P = JSON.parse(new TextDecoder().decode(buf));
      KLUCZ = "hp69g-" + slug; ST = wczytaj();
      if (ST.sp == null) ST.sp = P.story_points || 0;
      ST.body = ST.body || 0; ST.mind = ST.mind || 0; ST.ekw = ST.ekw || {}; ST.dod = ST.dod || ""; ST.nagrody = ST.nagrody || ""; ST.sekret4 = ST.sekret4 || ""; ST.wyglad = ST.wyglad || ""; ST.notatki = ST.notatki || "";
      try { sessionStorage.setItem("hp69g-sesja", JSON.stringify({ s: slug, p: pin })); } catch (e) {}
      zakladka = "karta"; widok();
    })
    .catch(function () { login("Zły PIN albo uszkodzona karta.", slug); });
}

/* ---------- widok ---------- */
function kara() { var a = KARA[ST.body], b = KARA[ST.mind]; if (a === "X" || b === "X") return "X"; return a + b; }
function widok() {
  var zk = [["karta", "Karta"], ["zaklecia", "Zaklęcia"], ["zdrowie", "Zdrowie i punkty"], ["kalk", "Kalkulator"], ["notatki", "Ekwipunek i notatki"], ["sciaga", "Ściąga"], ["druk", "Do druku"]];
  var k = kara();
  app.innerHTML = '<div class="gpasek"><h1>' + esc(P.imie) + ' <small class="puste">' + esc(P.dom) + '</small></h1><div><span class="flaga">Story Points: ' + ST.sp + '</span> <span class="flaga">Kara zdrowia: ' + (k === 0 ? "brak" : (k === "X" ? "brak akcji" : "+" + k)) + '</span> <button id="wyjdz">Wyloguj</button></div></div>' +
    '<div class="gz">' + zk.map(function (z) { return '<button data-z="' + z[0] + '" class="' + (z[0] === zakladka ? "aktywna" : "") + '">' + z[1] + "</button>"; }).join("") + '</div><div id="tresc"></div>';
  app.querySelectorAll(".gz button").forEach(function (b) { b.onclick = function () { zakladka = b.getAttribute("data-z"); widok(); window.scrollTo(0, 0); }; });
  document.getElementById("wyjdz").onclick = function () { try { sessionStorage.removeItem("hp69g-sesja"); } catch (e) {} P = null; login(); };
  var t = document.getElementById("tresc");
  ({ karta: tKarta, zaklecia: tZaklecia, zdrowie: tZdrowie, kalk: tKalk, notatki: tNotatki, sciaga: tSciaga, druk: tDruk })[zakladka](t);
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
    '<div class="sekg"><h3>Zwierzę, charakter, sekret</h3><p><b>Zwierzę:</b> ' + esc(z.rodzaj || "") + (z.imie ? " „" + esc(z.imie) + "”" : "") + "</p><p><b>Charakter:</b> " + esc(P.charakter || "") + "</p><p><b>Sekret:</b> " + esc(P.sekret || "") + "</p><p><b>Osoba, na której zależy:</b> " + esc(P.osoba_bliska || "") + "</p><p><b>Wakacje 1969:</b> " + esc(P.wakacje_1969 || "") + "</p></div>";
  t.querySelectorAll(".um").forEach(function (b) { b.onclick = function () { otworzKalk({ um: b.getAttribute("data-u") }); }; });
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
  var G = [["wspolny", "Pakiet wspólny"], ["archetyp", "Pakiet typu postaci"], ["wybor", "Do wyboru"], ["zaawansowane", "Magia zaawansowana i eliksiry"]];
  t.innerHTML = '<p class="puste">Wszystkie zaklęcia na karcie są <b>opanowane</b> (zaznaczone wszystkie kratki): trudność 0, poza walką nie rzucasz kością. Liczba kratek to „koszt nauki”. Kliknij zaklęcie, żeby przeliczyć rzut.</p><input id="zf" placeholder="Szukaj zaklęcia…" style="width:100%;padding:.5rem;margin:.4rem 0;border:1px solid var(--linia);border-radius:8px;background:var(--panel)">' +
    G.map(function (g) {
      var l = zz[g[0]] || []; if (!l.length) return "";
      return "<h3>" + g[1] + "</h3><div class='zklg'>" + l.map(function (x) {
        var kr = ""; for (var i = 0; i < (x.kratki || 0); i++) kr += "<span></span>";
        return '<div class="zk" data-n="' + esc(x.nazwa) + '"><b>' + esc(x.nazwa === "Stupefy" ? "Stupefy (Drętwota)" : x.nazwa) + ' </b><span class="kr">' + kr + "</span><small>" + esc((sl[x.nazwa] || {}).opis || "") + "</small></div>";
      }).join("") + "</div>";
    }).join("");
  t.querySelectorAll(".zk").forEach(function (b) { b.onclick = function () { otworzKalk({ zakl: b.getAttribute("data-n") }); }; });
  document.getElementById("zf").oninput = function () { var q = this.value.toLowerCase(); t.querySelectorAll(".zk").forEach(function (b) { b.hidden = q && b.textContent.toLowerCase().indexOf(q) < 0; }); };
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
function tKalk(t) {
  var w = kalkWstep || {}; kalkWstep = null;
  var um = Object.keys(P.umiejetnosci || {});
  var wybCecha = w.zakl ? "Focus" : "Wits", wybUm = w.um || (w.zakl ? umZaklecia(w.zakl) : "Observation");
  if (um.indexOf(wybUm) < 0) wybUm = um.indexOf("Observation") >= 0 ? "Observation" : um[0];
  t.innerHTML = '<div class="sekg kalk"><h3>Test' + (w.zakl ? ": " + esc(w.zakl) : "") + '</h3><p class="puste">Rzuć własną kością (1D10) i wpisz wynik. Panel doda cechę i umiejętność.</p>' +
    '<label>Cecha <select id="k-cecha">' + CECHY.map(function (c) { return '<option value="' + c + '"' + (c === wybCecha ? " selected" : "") + ">" + esc(tlum(c)) + " (" + ((P.cechy || {})[c] || 0) + ")</option>"; }).join("") + "</select></label>" +
    '<label>Umiejętność <select id="k-um"><option value="">brak (0)</option>' + um.map(function (u) { return '<option value="' + esc(u) + '"' + (u === wybUm ? " selected" : "") + ">" + esc(tlum(u) || u) + " (" + P.umiejetnosci[u] + ")</option>"; }).join("") + "</select></label>" +
    '<label>Wynik kości (1D10) <input id="k-kosc" type="number" inputmode="numeric"></label>' +
    '<label>Inne modyfikatory (premia różdżki, specjalizacja, pomoc…) <input id="k-mod" type="number" inputmode="numeric" value="0"></label>' +
    '<label>Trudność lub cel (od MG) <input id="k-tr" type="number" inputmode="numeric"></label>' +
    '<label><input type="checkbox" id="k-kara" checked style="width:auto"> dodaj karę zdrowia do trudności (teraz: ' + (kara() === 0 ? "brak" : (kara() === "X" ? "brak akcji" : "+" + kara())) + ')</label><div id="k-wyn" class="wynikk">Wpisz wynik kości.</div></div>' +
    '<div class="sekg kalk"><h3>Obrażenia, które zadaję</h3><p class="puste">Rzuć kośćmi obrażeń (np. 3D dla iskier), wpisz sumę. Panel doda cechę.</p>' +
    '<label>Suma kości obrażeń <input id="o-kosci" type="number" inputmode="numeric"></label>' +
    '<label>Dodaj cechę <select id="o-cecha">' + CECHY.map(function (c) { return '<option value="' + c + '"' + (c === "Focus" ? " selected" : "") + ">" + esc(tlum(c)) + " (" + ((P.cechy || {})[c] || 0) + ")</option>"; }).join("") + '</select></label>' +
    '<label>Inne dodatki (np. +1D z mocnego rzutu, wpisz jako liczbę) <input id="o-mod" type="number" inputmode="numeric" value="0"></label>' +
    '<label>Rzut obronny celu (1D10 + Żywotność + pancerz) <input id="o-odp" type="number" inputmode="numeric"></label><div id="o-wyn" class="wynikk">Wpisz sumę kości obrażeń.</div></div>' +
    '<div class="sekg kalk"><h3>Obrażenia, które dostaję</h3><label>Obrażenia (od MG) <input id="d-obr" type="number" inputmode="numeric"></label><label>Mój rzut (1D10) <input id="d-kosc" type="number" inputmode="numeric"></label><label>Pancerz (jeśli jest) <input id="d-panc" type="number" inputmode="numeric" value="0"></label><div id="d-wyn" class="wynikk">Wpisz obrażenia i swój rzut.</div><button id="d-zapisz" hidden>Zaznacz te kółka na ciele</button></div>';
  function licz() {
    var c = (P.cechy || {})[document.getElementById("k-cecha").value] || 0, u = document.getElementById("k-um").value ? (P.umiejetnosci[document.getElementById("k-um").value] || 0) : 0;
    var kosc = num("k-kosc"), mod = num("k-mod") || 0, tr = num("k-tr"), k = kara(), kv = (document.getElementById("k-kara").checked && k !== "X") ? k : 0;
    var el = document.getElementById("k-wyn");
    if (kosc == null) el.textContent = "Wpisz wynik kości.";
    else {
      var s = kosc + c + u + mod, trk = tr == null ? null : tr + kv;
      el.innerHTML = "<b>Suma: " + s + "</b> (kość " + kosc + " + cecha " + c + " + umiejętność " + u + (mod ? " + modyfikatory " + mod : "") + ")" + (trk == null ? "<br>Wpisz trudność, żeby zobaczyć wynik." : "<br>Trudność: " + tr + (kv ? " + kara zdrowia " + kv : "") + " = <b>" + trk + "</b><br><b>" + poziom(s, trk) + "</b> (" + (s >= trk ? "zapas +" + (s - trk) : "brakuje " + (trk - s)) + ")") + (trk != null && s < trk && ST.sp > 0 ? "<br><span class='puste'>Możesz wydać Story Point: dorzuć jeszcze 1D10 do sumy.</span>" : "") + (kara() === "X" ? "<br><b>Stan 6. kółka: postać nie może wykonywać akcji.</b>" : "");
    }
    var ok = num("o-kosci"), oc = (P.cechy || {})[document.getElementById("o-cecha").value] || 0, om = num("o-mod") || 0, odp = num("o-odp"), eo = document.getElementById("o-wyn");
    if (ok == null) eo.textContent = "Wpisz sumę kości obrażeń.";
    else { var obr = ok + oc + om, kol = kolkaZRanyIOdp(obr, odp); eo.innerHTML = "<b>Obrażenia: " + obr + "</b> (kości " + ok + " + cecha " + oc + (om ? " + dodatki " + om : "") + ")" + (odp == null ? "<br>Wpisz rzut obronny celu, żeby zobaczyć, ile kółek straci." : "<br>Cel traci: <b>" + (kol === 0 ? "nic (obrona wystarcza)" : kol + " kółk" + (kol === 1 ? "o" : "a")) + "</b>" + (kol >= 2 ? " i robi test przytomności" : "")) + "<br><span class='puste'>W pojedynkach szkolnych i pokazach to tylko opis, bez ran.</span>"; }
    var dobr = num("d-obr"), dk = num("d-kosc"), pa = num("d-panc") || 0, ed = document.getElementById("d-wyn"), bt = document.getElementById("d-zapisz");
    bt.hidden = true;
    if (dobr == null || dk == null) ed.textContent = "Wpisz obrażenia i swój rzut.";
    else { var odpm = dk + ((P.cechy || {}).Vitality || 0) + pa, kol2 = kolkaZRanyIOdp(dobr, odpm); ed.innerHTML = "Twoja odporność: <b>" + odpm + "</b> (kość " + dk + " + Żywotność " + ((P.cechy || {}).Vitality || 0) + (pa ? " + pancerz " + pa : "") + ")<br>Tracisz: <b>" + (kol2 === 0 ? "nic" : kol2 + " kółk" + (kol2 === 1 ? "o" : "a") + " ciała") + "</b>" + (kol2 >= 2 ? "<br>MG zarządzi test przytomności (1D10 + Żywotność przeciw " + (kol2 === 2 ? 3 : 6) + " + obecna kara)." : ""); if (kol2 > 0) { bt.hidden = false; bt.onclick = function () { ST.body = Math.min(6, ST.body + kol2); zapisz(); widok(); }; } }
  }
  t.addEventListener("input", licz); t.addEventListener("change", licz); licz();
}

/* ---------- notatki, ściąga, druk ---------- */
var EKW = ["Różdżka (w etui lub przy pasie)", "Szaty szkolne: trzy komplety czarnych szat roboczych", "Czarna spiczasta tiara na co dzień", "Rękawice ochronne (ze smoczej skóry)", "Zimowa peleryna (czarna, z zapięciami)", "Krawat i szalik swojego domu", "Kociołek cynowy (rozmiar 2)", "Fiolki szklane lub kryształowe (zestaw)", "Mosiężne wagi i zestaw odważników", "Teleskop", "Podręczniki do przedmiotów 6. roku", "Pergamin, pióra, atrament, suszka", "Zwierzę i jego klatka albo koszyk", "Plecak lub torba na książki"];
function tNotatki(t) {
  t.innerHTML = '<div class="sekg pudg"><h3>Podstawowy ekwipunek ucznia 6. roku</h3>' + EKW.map(function (e, i) { return '<label><input type="checkbox" data-e="' + i + '"' + (ST.ekw[i] ? " checked" : "") + "> " + esc(e) + "</label>"; }).join("") + "</div>" +
    '<div class="sekg"><h3>Dodatkowe przedmioty</h3><textarea class="n" data-f="dod"></textarea></div><div class="sekg"><h3>Nagrody (wpisuje Mistrz Gry, możesz przepisać)</h3><textarea class="n" data-f="nagrody"></textarea></div>' +
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
  window.renderKarta(t, P, tlum);
  var n = t.querySelector(".karta-nawig"); if (n) n.remove();
  t.insertAdjacentHTML("afterbegin", '<p><button id="druk3" class="glowny">Drukuj kartę lub zapisz jako PDF</button> <span class="puste">(w oknie druku wybierz „Zapisz jako PDF”)</span></p>');
  document.getElementById("druk3").onclick = function () { window.print(); };
}

/* ---------- start ---------- */
(function () {
  try { var s = JSON.parse(sessionStorage.getItem("hp69g-sesja")); if (s && s.s && s.p) { odszyfruj(s.s, s.p); return; } } catch (e) {}
  login();
})();
})();

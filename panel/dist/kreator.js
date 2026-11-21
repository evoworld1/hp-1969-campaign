(function () {
"use strict";
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function S(n, k) { return { nazwa: n, kratki: k }; }
var WSPOLNY = [S("Lumos", 1), S("Nox", 1), S("Wingardium Leviosa", 1), S("Diffindo", 1), S("Locomotor", 1), S("Alohomora", 2), S("Reparo", 2), S("Accio", 2), S("Expelliarmus", 2), S("Aparecium", 2), S("Episkey", 2), S("Protego", 3), S("Finite Incantatem", 3), S("Revelio", 3)];
var ARCH = {
  A: { nazwa: "Odważny pojedynkowicz", opis: "Staje pierwszy do walki i broni słabszych.", cechy: [5, 5, 5, 2, 5],
    um: { "Charms": 5, "D.A.D.A.": 7, "Transfiguration": 3, "Potions": 3, "Astronomy": 1, "Herbology": 1, "History of Magic": 1, "Magical Theory": 1, "Magical Creatures": 3, "Divination": 1, "Duelling": 4, "Skirmishing": 3, "Authority": 3, "Broomstick Flying": 3, "Balance": 5, "Observation": 4, "Strategy": 3, "Stealth": 2 },
    pakiet: [S("Stupefy", 3), S("Impedimenta", 3), S("Petrificus Totalus", 3), S("Stinging Jinx", 3), S("Flipendo", 2), S("Trip Jinx", 2), S("Rennervate", 2)],
    rozdzka: { drewno: "Red Oak", rdzen: "Dragon Heartstring", premie: ["Duelling +2", "Fire Magic +2", "Offensive Magic +1"] } },
  B: { nazwa: "Bystry badacz", opis: "Zauważa szczegóły, zna bibliotekę, łączy fakty.", cechy: [3, 3, 5, 6, 5],
    um: { "Charms": 5, "D.A.D.A.": 3, "Transfiguration": 3, "Potions": 3, "Astronomy": 3, "Herbology": 3, "History of Magic": 4, "Magical Theory": 3, "Ancient Runes": 4, "Arithmancy": 3, "Archivist": 5, "Observation": 5, "Trivia": 4, "Strategy": 2, "Persuasion": 2, "Stealth": 1 },
    pakiet: [S("Specialis Revelio", 3), S("Homenum Revelio", 3), S("Prior Incantato", 3), S("Colloportus", 2), S("Quietus", 2), S("Flagrate", 1), S("Intruder Charm", 1), S("Cistem Aperio", 1), S("Bluebell Flames", 1), S("Obliteration Charm", 1)],
    rozdzka: { drewno: "Vine", rdzen: "Phoenix Feather", premie: ["Revealing Magic +2", "Fire Magic +1", "Transfiguration +1", "Wand Loyalty +1"] } },
  C: { nazwa: "Zręczny kombinator", opis: "Wejdzie wszędzie, wygada się z kłopotów, zna skróty.", cechy: [3, 6, 6, 3, 4],
    um: { "Charms": 5, "D.A.D.A.": 3, "Transfiguration": 4, "Potions": 3, "Astronomy": 1, "Herbology": 1, "History of Magic": 1, "Magical Theory": 1, "Muggle Studies": 2, "Divination": 2, "Stealth": 5, "Chicanery": 5, "Concealment": 4, "Persuasion": 3, "Observation": 3, "Balance": 3, "Broomstick Flying": 3, "Disguise": 2, "Trivia": 2 },
    pakiet: [S("Disillusionment Charm", 3), S("Confundo", 3), S("Silencio", 3), S("Quietus", 2), S("Colloportus", 2), S("Spongify", 2), S("Rictustempra", 2), S("Obliteration Charm", 1)],
    rozdzka: { drewno: "Black Walnut", rdzen: "Phoenix Feather", premie: ["Charms +2", "Fire Magic +1", "Transfiguration +1", "Wand Loyalty +1"] } },
  D: { nazwa: "Empatyczny opiekun", opis: "Leczy, uspokaja, dogaduje się z ludźmi i zwierzętami.", cechy: [5, 3, 4, 5, 5],
    um: { "Charms": 3, "D.A.D.A.": 3, "Transfiguration": 3, "Potions": 4, "Herbology": 5, "Astronomy": 1, "History of Magic": 1, "Magical Theory": 1, "Magical Creatures": 5, "Divination": 1, "Persuasion": 4, "Observation": 5, "Riding": 3, "Music": 3, "Swimming": 2, "Balance": 2, "Tracking": 2, "Authority": 2, "Trivia": 2, "Crafting": 1 },
    pakiet: [S("Salvio Hexia", 3), S("Stupefy", 3), S("Immobulus", 3), S("Rennervate", 2), S("Arresto Momentum", 2), S("Carpe Retractum", 2), S("Cheering Charm", 1), S("Impervius", 1), S("Demitto Ignem", 1)],
    rozdzka: { drewno: "Chestnut", rdzen: "Unicorn Hair", premie: ["Herbology +1", "Magical Creatures +1", "Healing Magic +2", "Protective Magic +2"] } }
};
var WYBOR = [S("Stupefy", 3), S("Impedimenta", 3), S("Petrificus Totalus", 3), S("Confundo", 3), S("Silencio", 3), S("Disillusionment Charm", 3), S("Homenum Revelio", 3), S("Specialis Revelio", 3), S("Salvio Hexia", 3), S("Riddikulus", 3), S("Rennervate", 2), S("Colloportus", 2), S("Quietus", 2), S("Sonorus", 2), S("Depulso", 2), S("Engorgio", 2), S("Arresto Momentum", 2), S("Carpe Retractum", 2), S("Incendio", 2), S("Flagrate", 1), S("Cheering Charm", 1), S("Impervius", 1), S("Intruder Charm", 1), S("Cistem Aperio", 1), S("Obliteration Charm", 1)];
var ZAAW = ["Aguamenti", "Cave Inimicum", "Incarcerous", "Protean Charm", "Ageing Potion", "Calming Draught", "Draught of Peace", "Elixir to Induce Euphoria", "Love Potion Antidote", "Polyjuice Potion", "Shrinking Solution", "Sleeping Draught", "Wound-cleaning Potion"];
var DOMY = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
var CECHY = ["Vitality", "Speed", "Wits", "Knowledge", "Focus"];
var PODSTAWOWE = ["Astronomy", "Charms", "D.A.D.A.", "Herbology", "History of Magic", "Magical Theory", "Potions", "Transfiguration"];
var WSZ_UM = ["Alchemy", "Ancient Runes", "Arithmancy", "Art", "Astronomy", "Authority", "Balance", "Broomstick Flying", "Chicanery", "Charms", "Concealment", "Crafting", "D.A.D.A.", "Disguise", "Divination", "Duelling", "Herbology", "History of Magic", "Magical Creatures", "Magical Theory", "Muggle Studies", "Music", "Observation", "Persuasion", "Potions", "Prestige", "Riding", "Skirmishing", "Stealth", "Strategy", "Swimming", "Tracking", "Transfiguration", "Trivia", "Archivist"];

function sekcjaOgolna(tlum) {
  return '<div class="krok"><h3>1. Kim jest postać?</h3><p><label>Imię i nazwisko <input type="text" id="k-imie" size="28"></label> <label>Dom <select id="k-dom">' + DOMY.map(function (d) { return "<option>" + d + "</option>"; }).join("") + "</select></label></p>" +
    '<p><label>Czego chce? <input type="text" id="k-chce" size="50"></label></p><p><label>Czego się boi (sekret)? <input type="text" id="k-boi" size="50"></label></p><p><label>Kogo lubi? <input type="text" id="k-lubi" size="50"></label></p></div>' +
    '<div class="krok"><h3>2. Pochodzenie</h3><p><label><input type="radio" name="k-poch" value="muggle-born"> Mugolskiego pochodzenia (+5 Muggle Studies, 0 Story Points)</label><br><label><input type="radio" name="k-poch" value="half-blood" checked> Półkrwi (3 Story Points)</label><br><label><input type="radio" name="k-poch" value="pure-blood"> Czystej krwi (ród z listy Walkera s. 7: 3 punkty w umiejętnościach rodu, 0 Story Points)</label></p>' +
    '<p id="k-rod" hidden><label>Ród <input type="text" id="k-rodnazwa"></label> Trzy punkty rodu (po jednym): <input type="text" class="k-rodum" placeholder="umiejętność 1"> <input type="text" class="k-rodum" placeholder="umiejętność 2"> <input type="text" class="k-rodum" placeholder="umiejętność 3"></p>' +
    '<p class="puste">Cechę rzadką (Rare Trait) losujesz przy stole: 1D100, wynik 1–95 to brak.</p></div>';
}
function sekcjaKoniec() {
  return '<div class="krok"><h3>Różdżka, zwierzę i ostatnie szlify</h3><p><label>Drewno <input type="text" id="k-drewno"></label> <label>Rdzeń <input type="text" id="k-rdzen"></label> <label>Długość (cale) <input type="number" id="k-dl" value="11" min="8" max="18" style="width:4rem"></label> <label>Giętkość <input type="text" id="k-giet" value="Springy"></label> <label>Wytrzymałość <input type="text" id="k-wyt" value="2D+2" size="6"></label></p>' +
    '<p><label>Premie różdżki <input type="text" id="k-premie" size="60"></label></p>' +
    '<p><label>Zwierzę <select id="k-zw"><option>sowa</option><option>kot</option><option>ropucha</option></select></label> <label>imię <input type="text" id="k-zwimie"></label></p>' +
    '<p><label>Osoba, na której zależy <input type="text" id="k-osoba" size="50"></label></p><p><label>Jak minęły wakacje 1969 <input type="text" id="k-wakacje" size="50"></label></p></div>' +
    '<p><button class="glowny" id="k-zapisz">Zapisz postać i pokaż kartę</button> <span id="k-bledy" class="blad"></span></p>';
}
function val(id) { var e = document.getElementById(id); return e ? e.value.trim() : ""; }
function pochodzenie() {
  var typ = document.querySelector("input[name=k-poch]:checked").value;
  var wynik = { typ: typ, rod: "", uwagi: "" };
  var bonus = {};
  if (typ === "muggle-born") bonus["Muggle Studies"] = 5;
  if (typ === "pure-blood") {
    wynik.rod = val("k-rodnazwa");
    document.querySelectorAll(".k-rodum").forEach(function (i) { var n = i.value.trim(); if (n) bonus[n] = (bonus[n] || 0) + 1; });
  }
  return { poch: wynik, bonus: bonus, sp: typ === "half-blood" ? 3 : 0 };
}
function pokazRod() { document.getElementById("k-rod").hidden = document.querySelector("input[name=k-poch]:checked").value !== "pure-blood"; }
function wspolne(p) {
  p.imie = val("k-imie"); p.dom = val("k-dom"); p.rok = 6; p.wiek = 16;
  p.cecha_rzadka = "brak";
  p.charakter = "Chce: " + val("k-chce") + ". Lubi: " + val("k-lubi") + ".";
  p.sekret = val("k-boi");
  p.rozdzka = { drewno: val("k-drewno"), dlugosc_cali: parseInt(val("k-dl"), 10) || 11, rdzen: val("k-rdzen"), gietkosc: val("k-giet"), wytrzymalosc: val("k-wyt"), premie: val("k-premie") ? val("k-premie").split(/[;,]\s*/) : [], opis: "" };
  p.zwierze = { rodzaj: val("k-zw"), imie: val("k-zwimie") };
  p.osoba_bliska = val("k-osoba"); p.wakacje_1969 = val("k-wakacje");
  p.zdrowie = { body_kolka: 0, mind_kolka: 0 }; p.pewnosc = "nasze";
  return p;
}
function zapisz(p) {
  window.zapiszStan(function (st) { st.wlasne = st.wlasne || []; st.wlasne.push(p); p._idx = st.wlasne.length - 1; });
  location.hash = "#/postac/wlasna-" + p._idx;
}

window.kreator = function (app, D) {
  var tlum = window.tlum;
  app.innerHTML = '<div class="kreator"><h1>Tworzenie postaci</h1><p class="puste">Postać 6. roku, jesień 1969. Dwie ścieżki. Po zapisie dostajesz kartę do wydruku po polsku. Zasady: instrukcja tworzenia postaci i Walker 2e (zob. Zasady i kanon).</p>' +
    '<div class="arch"><label><input type="radio" name="sciezka" value="szybka" checked> <span><b>Szybka ścieżka</b> (ok. 30 min): wybierasz gotowy typ postaci i kilka rzeczy</span></label><label><input type="radio" name="sciezka" value="pelna"> <span><b>Pełna ścieżka</b> (2–3 godziny): sam rozdzielasz punkty</span></label></div><div id="kr-tresc"></div></div>';
  var wybor = function () { var v = document.querySelector("input[name=sciezka]:checked").value; v === "szybka" ? szybka(tlum) : pelna(tlum); };
  document.querySelectorAll("input[name=sciezka]").forEach(function (r) { r.onchange = wybor; });
  wybor();
};

function szybka(tlum) {
  var el = document.getElementById("kr-tresc");
  el.innerHTML = sekcjaOgolna(tlum) +
    '<div class="krok"><h3>3. Typ postaci (archetyp)</h3><div class="arch">' + Object.keys(ARCH).map(function (k) { var a = ARCH[k]; return '<label><input type="radio" name="k-arch" value="' + k + '"' + (k === "C" ? " checked" : "") + "> <span>" + k + ". " + a.nazwa + "</span><br><small>" + a.opis + "</small></label>"; }).join("") + "</div></div>" +
    '<div class="krok"><h3>4. Przedmioty 6. roku</h3><p class="puste">Zdany SUM to przedmiot, w którym masz co najmniej 3 punkty. Wybierz 4–6.</p><div id="k-przedm"></div><div class="licznik" id="k-przedm-l"></div></div>' +
    '<div class="krok"><h3>5. Zaklęcia</h3><p><b>Masz automatycznie:</b> pakiet wspólny (26 kratek) i pakiet typu postaci (18 kratek). Wszystkie opanowane.</p><div id="k-pakiety" class="puste"></div>' +
    '<h4>Twój wybór: 6 kratek <span class="licznik" id="k-wyb-l"></span></h4><div id="k-wyb"></div>' +
    '<h4>Magia zaawansowana: skreśl dokładnie 3 z 13 <span class="licznik" id="k-zaaw-l"></span></h4><div id="k-zaaw"></div></div>' + sekcjaKoniec();
  var arch = function () { return document.querySelector("input[name=k-arch]:checked").value; };
  function odswiez() {
    var a = ARCH[arch()], pb = pochodzenie();
    var um = {}; Object.keys(a.um).forEach(function (k) { um[k] = a.um[k]; });
    Object.keys(pb.bonus).forEach(function (k) { um[k] = (um[k] || 0) + pb.bonus[k]; });
    var zdane = Object.keys(um).filter(function (k) { return um[k] >= 3 && PODSTAWOWE.concat(["Ancient Runes", "Arithmancy", "Divination", "Magical Creatures", "Muggle Studies", "Music", "Art"]).indexOf(k) >= 0; });
    var zaz = {}; document.querySelectorAll(".k-przedm:checked").forEach(function (c) { zaz[c.value] = 1; });
    document.getElementById("k-przedm").innerHTML = zdane.map(function (k) { return '<label style="margin-right:1rem"><input type="checkbox" class="k-przedm" value="' + esc(k) + '"' + (zaz[k] ? " checked" : "") + "> " + esc(tlum(k) || k) + " (" + um[k] + ")</label>"; }).join("");
    document.getElementById("k-pakiety").innerHTML = "Wspólny: " + WSPOLNY.map(function (s) { return s.nazwa; }).join(", ") + ".<br>Typu " + arch() + ": " + a.pakiet.map(function (s) { return s.nazwa; }).join(", ") + ".";
    var nazwyPak = WSPOLNY.concat(a.pakiet).map(function (s) { return s.nazwa; });
    var w = {}; document.querySelectorAll(".k-wyb:checked").forEach(function (c) { w[c.value] = 1; });
    document.getElementById("k-wyb").innerHTML = WYBOR.filter(function (s) { return nazwyPak.indexOf(s.nazwa) < 0; }).map(function (s) { return '<label style="display:inline-block;margin-right:1rem"><input type="checkbox" class="k-wyb" data-k="' + s.kratki + '" value="' + esc(s.nazwa) + '"' + (w[s.nazwa] ? " checked" : "") + "> " + esc(s.nazwa) + " (" + s.kratki + ")</label>"; }).join("");
    var z = {}; document.querySelectorAll(".k-zaaw:checked").forEach(function (c) { z[c.value] = 1; });
    document.getElementById("k-zaaw").innerHTML = ZAAW.map(function (s) { return '<label style="display:inline-block;margin-right:1rem"><input type="checkbox" class="k-zaaw" value="' + esc(s) + '"' + (z[s] ? " checked" : "") + "> skreślam: " + esc(s) + "</label>"; }).join("");
    if (!document.getElementById("k-drewno").value || document.getElementById("k-drewno").dataset.a !== arch()) {
      document.getElementById("k-drewno").value = a.rozdzka.drewno; document.getElementById("k-drewno").dataset.a = arch();
      document.getElementById("k-rdzen").value = a.rozdzka.rdzen; document.getElementById("k-premie").value = a.rozdzka.premie.join("; ");
    }
    liczniki();
  }
  function liczniki() {
    var p = document.querySelectorAll(".k-przedm:checked").length;
    var l = document.getElementById("k-przedm-l"); l.textContent = "Wybrano: " + p + " (4–6)"; l.className = "licznik " + (p >= 4 && p <= 6 ? "ok" : "zle");
    var k = 0; document.querySelectorAll(".k-wyb:checked").forEach(function (c) { k += parseInt(c.dataset.k, 10); });
    var w = document.getElementById("k-wyb-l"); w.textContent = "(wybrano " + k + " z 6 kratek)"; w.className = "licznik " + (k === 6 ? "ok" : "zle");
    var z = document.querySelectorAll(".k-zaaw:checked").length;
    var zl = document.getElementById("k-zaaw-l"); zl.textContent = "(skreślono " + z + " z 3)"; zl.className = "licznik " + (z === 3 ? "ok" : "zle");
  }
  el.addEventListener("change", function (e) {
    if (e.target.name === "k-poch") pokazRod();
    if (e.target.name === "k-poch" || e.target.name === "k-arch") odswiez(); else liczniki();
  });
  el.addEventListener("input", function () { });
  pokazRod(); odswiez();
  document.getElementById("k-zapisz").onclick = function () {
    var a = ARCH[arch()], pb = pochodzenie(), bl = [];
    var k = 0; document.querySelectorAll(".k-wyb:checked").forEach(function (c) { k += parseInt(c.dataset.k, 10); });
    if (!val("k-imie")) bl.push("Podaj imię.");
    if (k !== 6) bl.push("Wybierz dokładnie 6 kratek zaklęć (masz " + k + ").");
    if (document.querySelectorAll(".k-zaaw:checked").length !== 3) bl.push("Skreśl dokładnie 3 pozycje magii zaawansowanej.");
    var np = document.querySelectorAll(".k-przedm:checked").length; if (np < 4 || np > 6) bl.push("Wybierz 4–6 przedmiotów.");
    document.getElementById("k-bledy").textContent = bl.join(" ");
    if (bl.length) return;
    var um = {}; Object.keys(a.um).forEach(function (n) { um[n] = a.um[n]; });
    Object.keys(pb.bonus).forEach(function (n) { um[n] = (um[n] || 0) + pb.bonus[n]; });
    var p = wspolne({ id: "wlasna", archetyp: arch() + " (" + a.nazwa + ")", pochodzenie: pb.poch, story_points: pb.sp });
    p.cechy = {}; CECHY.forEach(function (c, i) { p.cechy[c] = a.cechy[i]; });
    p.umiejetnosci = um; p.specjalizacje = [];
    p.przedmioty_6_roku = Array.prototype.map.call(document.querySelectorAll(".k-przedm:checked"), function (c) { return c.value; });
    var wyb = Array.prototype.map.call(document.querySelectorAll(".k-wyb:checked"), function (c) { return S(c.value, parseInt(c.dataset.k, 10)); });
    var skreslone = Array.prototype.map.call(document.querySelectorAll(".k-zaaw:checked"), function (c) { return c.value; });
    p.zaklecia = { wspolny: WSPOLNY, archetyp: a.pakiet, wybor: wyb, zaawansowane: ZAAW.filter(function (n) { return skreslone.indexOf(n) < 0; }).map(function (n) { return S(n, 3); }) };
    zapisz(p);
  };
}

function pelna(tlum) {
  var el = document.getElementById("kr-tresc");
  el.innerHTML = sekcjaOgolna(tlum) +
    '<div class="krok"><h3>3. Cechy: rozdziel 22 punktów (każda co najmniej 1, zwykle do 10)</h3><p>' + CECHY.map(function (c) { return '<label>' + esc(tlum(c) || c) + " (" + c + ') <input type="number" class="k-cecha" data-c="' + c + '" min="1" max="10" value="4" style="width:3.5rem"></label> '; }).join("") + '</p><div class="licznik" id="k-cecha-l"></div></div>' +
    '<div class="krok"><h3>4. Umiejętności: 53 punkty (+ premia z pochodzenia)</h3><p class="puste">Pule w instrukcji: 12 z dzieciństwa (Art, Astronomy, Balance, Chicanery, Concealment, Crafting, Music, Observation, Riding, Stealth, Strategy, Swimming, Trivia), 3 dowolne, po 1 w ośmiu przedmiotach podstawowych, 15 na przedmioty i fakultety (min. 2 fakultety), 15 dowolnych. Panel liczy tylko sumę; pilnuj pul według instrukcji.</p><div id="k-um" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.3rem">' +
    WSZ_UM.map(function (u) { return '<label>' + esc(u) + ' <small class="puste">' + esc(tlum(u) || "") + '</small> <input type="number" class="k-um" data-u="' + esc(u) + '" min="0" max="12" value="' + (PODSTAWOWE.indexOf(u) >= 0 ? 1 : 0) + '" style="width:3.2rem"></label>'; }).join("") + '</div><div class="licznik" id="k-um-l"></div><p><label>Specjalizacje (po średniku) <input type="text" id="k-spec" size="50"></label></p></div>' +
    '<div class="krok"><h3>5. Przedmioty 6. roku</h3><div id="k-przedm"></div><div class="licznik" id="k-przedm-l"></div></div>' +
    '<div class="krok"><h3>6. Zaklęcia i eliksiry</h3><p class="puste">Jedno zaklęcie na linię: <code>Nazwa; kratki</code> (np. <code>Protego; 3</code>). Koszt: trudność 9 to 1 kratka, 12 to 2, 15 i więcej to 3 (zob. indeks zaklęć w zasadach). Tempus nie wpisujesz.</p>' +
    '<h4>Lata 1–5: 50 kratek <span class="licznik" id="k-z1-l"></span></h4><textarea id="k-z1" rows="8" style="width:100%"></textarea>' +
    '<h4>Lata 6–7 i eliksiry zaawansowane: 30 kratek <span class="licznik" id="k-z2-l"></span></h4><textarea id="k-z2" rows="5" style="width:100%"></textarea></div>' + sekcjaKoniec();
  function suma(sel, attr) { var s = 0; document.querySelectorAll(sel).forEach(function (i) { s += parseInt(i.value || 0, 10) || 0; }); return s; }
  function kratkiTekst(id) { var s = 0; document.getElementById(id).value.split("\n").forEach(function (l) { var m = l.match(/;\s*(\d+)/); if (m) s += parseInt(m[1], 10); }); return s; }
  function licz() {
    var c = suma(".k-cecha"), l = document.getElementById("k-cecha-l"); l.textContent = "Razem " + c + " z 22"; l.className = "licznik " + (c === 22 ? "ok" : "zle");
    var pb = pochodzenie(), bon = 0; Object.keys(pb.bonus).forEach(function (k) { bon += pb.bonus[k]; });
    var u = suma(".k-um"), lu = document.getElementById("k-um-l"); lu.textContent = "Razem " + u + " z " + (53 + bon) + " (53 + " + bon + " z pochodzenia)"; lu.className = "licznik " + (u === 53 + bon ? "ok" : "zle");
    var um = {}; document.querySelectorAll(".k-um").forEach(function (i) { um[i.dataset.u] = parseInt(i.value || 0, 10) || 0; });
    Object.keys(pb.bonus).forEach(function (k) { um[k] = (um[k] || 0) + pb.bonus[k]; });
    var zaz = {}; document.querySelectorAll(".k-przedm:checked").forEach(function (x) { zaz[x.value] = 1; });
    var zdane = PODSTAWOWE.concat(["Ancient Runes", "Arithmancy", "Divination", "Magical Creatures", "Muggle Studies", "Music", "Art"]).filter(function (k) { return (um[k] || 0) >= 3; });
    var box = document.getElementById("k-przedm"), obecne = Array.prototype.map.call(box.querySelectorAll("input"), function (x) { return x.value; }).join("|");
    if (obecne !== zdane.join("|")) box.innerHTML = zdane.map(function (k) { return '<label style="margin-right:1rem"><input type="checkbox" class="k-przedm" value="' + esc(k) + '"' + (zaz[k] ? " checked" : "") + "> " + esc(tlum(k) || k) + " (" + um[k] + ")</label>"; }).join("") || "<span class='puste'>Brak przedmiotów z co najmniej 3 punktami.</span>";
    var np = document.querySelectorAll(".k-przedm:checked").length, lp = document.getElementById("k-przedm-l"); lp.textContent = "Wybrano: " + np + " (4–6)"; lp.className = "licznik " + (np >= 4 && np <= 6 ? "ok" : "zle");
    var k1 = kratkiTekst("k-z1"), l1 = document.getElementById("k-z1-l"); l1.textContent = "(" + k1 + " z 50)"; l1.className = "licznik " + (k1 === 50 ? "ok" : "zle");
    var k2 = kratkiTekst("k-z2"), l2 = document.getElementById("k-z2-l"); l2.textContent = "(" + k2 + " z 30)"; l2.className = "licznik " + (k2 === 30 ? "ok" : "zle");
  }
  el.addEventListener("change", function (e) { if (e.target.name === "k-poch") pokazRod(); licz(); });
  el.addEventListener("input", licz);
  pokazRod(); licz();
  function wczytajZ(id) { return document.getElementById(id).value.split("\n").map(function (l) { var m = l.match(/^\s*(.+?)\s*;\s*(\d+)/); return m ? S(m[1], parseInt(m[2], 10)) : null; }).filter(Boolean); }
  document.getElementById("k-zapisz").onclick = function () {
    var bl = [], pb = pochodzenie();
    if (!val("k-imie")) bl.push("Podaj imię.");
    if (suma(".k-cecha") !== 22) bl.push("Cechy muszą dać 22 punkty.");
    if (kratkiTekst("k-z1") !== 50) bl.push("Zaklęcia lat 1–5: dokładnie 50 kratek.");
    if (kratkiTekst("k-z2") !== 30) bl.push("Zaklęcia lat 6–7: dokładnie 30 kratek.");
    document.getElementById("k-bledy").textContent = bl.join(" ") + (bl.length ? " (Możesz zapisać mimo to po poprawce.)" : "");
    if (bl.length) return;
    var p = wspolne({ id: "wlasna", archetyp: "pełna ścieżka", pochodzenie: pb.poch, story_points: pb.sp });
    p.cechy = {}; document.querySelectorAll(".k-cecha").forEach(function (i) { p.cechy[i.dataset.c] = parseInt(i.value, 10); });
    p.umiejetnosci = {}; document.querySelectorAll(".k-um").forEach(function (i) { var v = parseInt(i.value || 0, 10) || 0; if (v) p.umiejetnosci[i.dataset.u] = v; });
    Object.keys(pb.bonus).forEach(function (k) { p.umiejetnosci[k] = (p.umiejetnosci[k] || 0) + pb.bonus[k]; });
    p.specjalizacje = val("k-spec") ? val("k-spec").split(/\s*;\s*/) : [];
    p.przedmioty_6_roku = Array.prototype.map.call(document.querySelectorAll(".k-przedm:checked"), function (c) { return c.value; });
    p.zaklecia = { wspolny: wczytajZ("k-z1"), zaawansowane: wczytajZ("k-z2") };
    zapisz(p);
  };
}
})();

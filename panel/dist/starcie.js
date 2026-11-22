/* Starcie: wspólny moduł panelu MG i panelu graczy.
   - statystyki NPC (karta z gotowymi rzutami),
   - kalkulator testu (cecha + umiejętność, para dobrana do umiejętności),
   - panel starcia: postać, zaklęcie, rzut gracza, rzut NPC, wynik i obrażenia.
   Zasady: Walker 2e s. 3-4 (testy), 33-36 i 165 (walka, rany), 41 (pojedynek); zasady domowe ZD-06..ZD-10 (02_zasady/zasady-domowe.md).
   Dane: window.DANE.npc_staty {id: {imie, staty}}, window.DANE.starcia [presety], window.DANE.ksiega. */
(function () {
"use strict";
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
var CECHY = ["Vitality", "Speed", "Wits", "Knowledge", "Focus"];
var CECHY_PL = { Vitality: "Żywotność", Speed: "Szybkość", Wits: "Bystrość", Knowledge: "Wiedza", Focus: "Skupienie" };
var KARA = [0, 1, 2, 3, 5, 7, "X"];
var STANY_B = ["zdrowy", "Shaken (wstrząśnięty)", "Bruised (posiniaczony)", "Bloodied (zakrwawiony)", "Broken (złamany)", "Fading (gasnący)", "Lifeless (bez życia)"];
var STANY_M = ["przytomny", "Rattled (roztrzęsiony)", "Dazed (oszołomiony)", "Drained (wyczerpany)", "Confused (zdezorientowany)", "Raving (majaczący)", "Mindless (bez świadomości)"];
var UM_TYPU = { "Charm": "Charms", "Jinx": "D.A.D.A.", "Hex": "D.A.D.A.", "Curse": "D.A.D.A.", "Transfiguration": "Transfiguration", "Transportation": "Transportation", "Counter–Jinx": "D.A.D.A.", "Potion": "Potions" };
var UM_PL = { "Charms": "Zaklęcia", "D.A.D.A.": "Obrona przed czarną magią", "Dark Arts": "Czarna magia", "Transfiguration": "Transmutacja", "Potions": "Eliksiry", "Duelling": "Pojedynkowanie", "Observation": "Spostrzegawczość", "Stealth": "Skradanie", "Chicanery": "Podstęp", "Persuasion": "Perswazja", "Concealment": "Ukrywanie", "Muggle Studies": "Mugoloznawstwo", "Balance": "Zręczność", "Skirmishing": "Bijatyka", "Authority": "Autorytet", "Trivia": "Ciekawostki", "Archivist": "Praca w bibliotece", "Strategy": "Strategia", "Magical Creatures": "Opieka nad stworzeniami", "Herbology": "Zielarstwo", "History of Magic": "Historia magii", "Magical Theory": "Teoria magii", "Astronomy": "Astronomia", "Divination": "Wróżbiarstwo", "Crafting": "Rzemiosło", "Broomstick Flying": "Latanie na miotle", "Tracking": "Tropienie", "Disguise": "Przebieranie", "Law": "Prawo", "Ancient Runes": "Starożytne runy", "Arithmancy": "Numerologia", "Music": "Muzyka", "Art": "Sztuka", "Swimming": "Pływanie", "Wandlore": "Wiedza o różdżkach", "Occlumency": "Oklumencja", "Prestige": "Prestiż", "Riding": "Jazda", "Transportation": "Teleportacja", "Alchemy": "Alchemia", "Ancient Studies": "Studia starożytne" };
/* Domyślna cecha do umiejętności (Walker s. 3, 21-23, 31, 41, 60, 67; MG może zmienić). */
var CECHA_UM = { Observation: "Wits", Stealth: "Speed", Chicanery: "Wits", Concealment: "Speed", Persuasion: "Wits", Authority: "Wits", Strategy: "Wits", Tracking: "Wits", Disguise: "Wits", Duelling: "Wits", "Magical Creatures": "Wits",
  Balance: "Vitality", Skirmishing: "Vitality", Swimming: "Vitality", Riding: "Speed", "Broomstick Flying": "Speed",
  Trivia: "Knowledge", Archivist: "Knowledge", "History of Magic": "Knowledge", "Magical Theory": "Knowledge", "Muggle Studies": "Knowledge", Herbology: "Knowledge", Potions: "Knowledge", Astronomy: "Knowledge", "Ancient Runes": "Knowledge", Arithmancy: "Knowledge", Law: "Knowledge", Crafting: "Knowledge", Wandlore: "Knowledge", Alchemy: "Knowledge", "Ancient Studies": "Knowledge", Prestige: "Knowledge",
  Charms: "Focus", Transfiguration: "Focus", "D.A.D.A.": "Focus", "Dark Arts": "Focus", Transportation: "Focus", Divination: "Focus", Occlumency: "Focus", Music: "Focus", Art: "Focus" };
/* Gotowe pary do testów przeciwnych (Walker s. 3-4 i sceny Scenariusza 1). */
var PARY = [
  ["Czujność, dostrzeżenie czegoś", "Wits", "Observation"],
  ["Skradanie się", "Speed", "Stealth"],
  ["Kłamstwo, blef, ukrywanie zamiaru", "Wits", "Chicanery"],
  ["Wykrycie kłamstwa", "Wits", "Chicanery"],
  ["Perswazja (szybka gadka)", "Wits", "Persuasion"],
  ["Perswazja (rzeczowa debata)", "Knowledge", "Persuasion"],
  ["Ukrycie przedmiotu, kradzież kieszonkowa", "Speed", "Concealment"],
  ["Autorytet, zastraszenie", "Wits", "Authority"],
  ["Wiedza o mugolach", "Knowledge", "Muggle Studies"],
  ["Ciekawostka, plotka, wiedza o zamku", "Knowledge", "Trivia"],
  ["Szukanie w bibliotece", "Knowledge", "Archivist"],
  ["Zręczność, wspinanie, łapanie", "Vitality", "Balance"],
  ["Bójka bez różdżek", "Vitality", "Skirmishing"],
  ["Unik, wyrwanie się, ucieczka", "Speed", "Wits"]
];
var SKALA = [[3, "Elementary (elementarne)"], [6, "Straightforward (proste)"], [9, "proste zaklęcie (ZD-03)"], [12, "Tricky (podchwytliwe)"], [15, "Challenging (wymagające)"], [18, "Ambitious (ambitne)"], [21, "Formidable (potężne)"], [25, "Almost Impossible (prawie niemożliwe)"]];

function baza(n) { return String(n).split(" (")[0].trim(); }
function um(o, nazwa) { var u = o.umiejetnosci || {}, w = 0; Object.keys(u).forEach(function (k) { if (baza(k) === nazwa) w = Math.max(w, +u[k] || 0); }); return w; }
function ce(o, c) { return +((o.cechy || {})[c]) || 0; }
/* Premie różdżki: z listy P.rozdzka.premie albo z tekstu NPC "Duelling +1, Charms +2". */
function premieRozdzki(o) {
  var r = o.rozdzka, teksty = [];
  if (r && typeof r === "object") teksty = (r.premie || []).map(String); else if (r) teksty = [String(r)];
  var wyn = {};
  teksty.forEach(function (t) {
    var re = /([A-Z][A-Za-z.' ]+?)\s\+(\d+)/g, m;
    while ((m = re.exec(t))) { var n = m[1].trim(); if (!(n in wyn)) wyn[n] = +m[2]; }
  });
  return wyn;
}
function kara(z) { var a = KARA[z.body || 0], b = KARA[z.mind || 0]; if (a === "X" || b === "X") return "X"; return a + b; }
function ksiega(n) { return window.znajdzZaklecie ? window.znajdzZaklecie(n) : null; }
function umZaklecia(n) {
  var k = ksiega(n); if (!k) return "Charms";
  if (/Petrificus/.test(k.nazwa)) return "Charms"; // ZD-18
  return UM_TYPU[k.typ] || "Charms";
}
/* Atak zaklęciem w pojedynku/pokazie: Wits + wyższa z (Duelling + różdżka do Duelling) albo (umiejętność zaklęcia + różdżka do tej umiejętności). Sceny 04 i 08; Walker s. 33, 41, 165. */
function atakZ(o, zakl) {
  var pr = premieRozdzki(o), u = umZaklecia(zakl);
  var d = um(o, "Duelling") + (pr.Duelling || 0), s = um(o, u) + (pr[u] || 0);
  var wits = ce(o, "Wits");
  if (d > s) return { suma: wits + d, opis: "Bystrość " + wits + " + Pojedynkowanie " + um(o, "Duelling") + (pr.Duelling ? " + różdżka " + pr.Duelling : "") };
  return { suma: wits + s, opis: "Bystrość " + wits + " + " + (UM_PL[u] || u) + " " + um(o, u) + (pr[u] ? " + różdżka " + pr[u] : "") };
}
function protegoOpanowane(o, zaklList) {
  if (zaklList) return zaklList.some(function (n) { return /^Protego/.test(n.nazwa || n); });
  var z = o.zaklecia || {}; return Object.keys(z).some(function (k) { return /^Protego/.test(k) && (+z[k] || 0) === 0; });
}
function rzuty(o) {
  var pr = premieRozdzki(o);
  var r = [];
  r.push(["Inicjatywa (Szybkość + Pojedynkowanie)", ce(o, "Speed") + um(o, "Duelling") + (pr.Duelling || 0)]);
  r.push(["Atak w pojedynku (najlepszy)", Math.max(ce(o, "Wits") + um(o, "Duelling") + (pr.Duelling || 0), ce(o, "Wits") + um(o, "Charms") + (pr.Charms || 0), ce(o, "Wits") + um(o, "D.A.D.A.") + (pr["D.A.D.A."] || 0))]);
  r.push(["Unik (Szybkość + Bystrość)", ce(o, "Speed") + ce(o, "Wits")]);
  if (protegoOpanowane(o)) r.push(["Protego (Bystrość + Zaklęcia)", ce(o, "Wits") + um(o, "Charms")]);
  r.push(["Odporność na obrażenia (Żywotność)", ce(o, "Vitality")]);
  r.push(["Czujność (Bystrość + Spostrzegawczość)", ce(o, "Wits") + um(o, "Observation")]);
  if (um(o, "Chicanery")) r.push(["Blef i wykrycie kłamstwa (Bystrość + Podstęp)", ce(o, "Wits") + um(o, "Chicanery")]);
  if (um(o, "Stealth")) r.push(["Skradanie (Szybkość + Skradanie)", ce(o, "Speed") + um(o, "Stealth")]);
  if (um(o, "Persuasion")) r.push(["Perswazja (Bystrość + Perswazja)", ce(o, "Wits") + um(o, "Persuasion")]);
  return r;
}
window.rzutyNPC = rzuty;

/* ---------- karta statystyk NPC ---------- */
window.kartaStatystyk = function (staty, opt) {
  opt = opt || {};
  if (!staty) return "";
  var w = staty.wartosci || {};
  var zd = staty.zdolnosci_specjalne || [];
  var maCechy = w.cechy && Object.keys(w.cechy).length;
  var h = '<div class="stat-karta">';
  if (!maCechy) {
    h += '<p class="puste">Ta postać nie ma jeszcze liczb na karcie.' + (zd.length ? " Zdolności poniżej." : "") + "</p>";
  } else {
    var meta = [w.poziom, w.lineage, w.house, w.year ? w.year + ". rok" : "", w.profession].filter(Boolean).map(esc).join(" · ");
    if (meta) h += '<div class="stat-meta">' + meta + "</div>";
    h += '<div class="stat-cechy">' + CECHY.map(function (c) { var v = w.cechy[c]; return '<div><small>' + CECHY_PL[c] + "</small><b>" + (v == null || v === "" ? "—" : esc(v)) + "</b><small>" + c + "</small></div>"; }).join("") + "</div>";
    h += '<div class="podnagl">Gotowe rzuty (1D10 + liczba)</div><table class="kv stat-rz">' + rzuty(w).map(function (r) { return "<tr><th>" + esc(r[0]) + "</th><td><b>1D10 + " + r[1] + "</b></td></tr>"; }).join("") + "</table>";
    if (opt.krotko) { h += "</div>"; return h; }
    var u = w.umiejetnosci || {};
    var uk = Object.keys(u).sort(function (a, b) { return u[b] - u[a]; });
    if (uk.length) h += '<div class="podnagl">Umiejętności</div><p class="stat-um">' + uk.map(function (k) { return esc((UM_PL[baza(k)] ? UM_PL[baza(k)] + " " : "") + "(" + k + ") ") + "<b>" + esc(u[k]) + "</b>"; }).join(" · ") + "</p>";
    var z = w.zaklecia || {}, zk = Object.keys(z);
    if (zk.length) h += '<div class="podnagl">Zaklęcia, których używa</div><ul class="stat-zakl">' + zk.map(function (k) {
      var ks = ksiega(k), tr = +z[k] || 0;
      return "<li><b>" + esc(k) + "</b> " + (tr === 0 ? '<span class="znacz">opanowane</span>' : '<span class="znacz ostrz">aktualna trudność ' + tr + "</span>") + (ks && (ks.w_walce || ks.efekt) ? ' <small class="puste">' + esc(ks.w_walce || ks.efekt) + "</small>" : "") + "</li>";
    }).join("") + "</ul>";
    if (w.rozdzka) h += "<p><b>Różdżka:</b> " + esc(w.rozdzka) + "</p>";
    if (w.patronus && w.patronus !== "brak") h += "<p><b>Patronus:</b> " + esc(w.patronus) + "</p>";
  }
  if (zd.length && !opt.krotko) h += '<div class="podnagl">Zdolności i ważne liczby</div>' + zd.map(function (x) { return "<details class='stat-zd'><summary>" + esc(x.nazwa) + "</summary><p>" + esc(x.opis) + "</p></details>"; }).join("");
  return h + "</div>";
};

/* ---------- kalkulator testu ---------- */
function poziomWyniku(s, t) {
  if (t <= 0) return "sukces (trudność 0)";
  if (s >= 3 * t) return "Unbelievable success: sukces niewiarygodny (×3)";
  if (s >= 2 * t) return "Impressive success: sukces imponujący (×2)";
  if (s >= t) return "Success: sukces";
  if (s < t / 2) return "Embarrassing failure: porażka kompromitująca";
  return "Failure: porażka";
}
window.poziomWyniku = poziomWyniku;
function opcjeCech(o, sel) { return CECHY.map(function (c) { return '<option value="' + c + '"' + (c === sel ? " selected" : "") + ">" + CECHY_PL[c] + " (" + ce(o, c) + ")</option>"; }).join(""); }
function opcjeUm(o, sel) {
  var u = o.umiejetnosci || {}, k = Object.keys(u).sort(function (a, b) { return (UM_PL[baza(a)] || a).localeCompare(UM_PL[baza(b)] || b, "pl"); });
  return '<option value="">brak (0)</option>' + k.map(function (x) { return '<option value="' + esc(x) + '"' + (x === sel ? " selected" : "") + ">" + esc(UM_PL[baza(x)] || x) + " · " + esc(x) + " (" + u[x] + ")</option>"; }).join("");
}

/* el, o (postać), opt: {um, cecha, kara (liczba lub "X"), naZmiane} */
window.renderTest = function (el, o, opt) {
  opt = opt || {};
  var wybUm = opt.um || "Observation";
  var keys = Object.keys(o.umiejetnosci || {});
  var dopas = keys.filter(function (k) { return baza(k) === baza(wybUm); })[0];
  wybUm = dopas || (keys.indexOf(wybUm) >= 0 ? wybUm : "");
  var wybC = opt.cecha || CECHA_UM[baza(wybUm || "Observation")] || "Wits";
  var kv = opt.kara == null ? 0 : opt.kara;
  el.innerHTML = '<div class="sekg kalk test-kalk"><h3>Test umiejętności (bez zaklęcia)</h3>' +
    '<p class="puste">Walker s. 3: rzuć 1D10, dodaj cechę i umiejętność. Sukces, gdy wynik jest równy trudności albo wyższy. Cecha dobiera się sama do umiejętności (np. Spostrzegawczość z Bystrością, Skradanie z Szybkością); MG może ją zmienić.</p>' +
    '<div class="pary">' + PARY.map(function (p, i) { return '<button type="button" data-p="' + i + '">' + esc(p[0]) + "</button>"; }).join("") + "</div>" +
    '<label>Umiejętność <select class="t-um">' + opcjeUm(o, wybUm) + "</select></label>" +
    '<label>Cecha <select class="t-ce">' + opcjeCech(o, wybC) + "</select></label>" +
    '<label>Wynik kości (1D10) <input class="t-k" type="number" inputmode="numeric"></label>' +
    '<label>Premie do rzutu (pomocnicy +1 każdy, specjalizacja +1, nazwany nawyk itp.) <input class="t-m" type="number" inputmode="numeric" value="0"></label>' +
    '<label>Trudność (podaje MG) <select class="t-trs"><option value="">wpisz liczbę obok…</option>' + SKALA.map(function (s) { return '<option value="' + s[0] + '">' + s[0] + " · " + esc(s[1]) + "</option>"; }).join("") + '</select> <input class="t-tr" type="number" inputmode="numeric" placeholder="np. 12"></label>' +
    '<label><input type="checkbox" class="t-kara" checked style="width:auto"> dodaj karę ze zdrowia do trudności (teraz: ' + (kv === "X" ? "brak akcji" : kv ? "+" + kv : "brak") + ")</label>" +
    '<label><input type="checkbox" class="t-przec" style="width:auto"> to jest test przeciwny (zamiast trudności wpisz wynik przeciwnika: jego kość + liczby)</label>' +
    '<div class="wynikk t-w">Wpisz wynik kości.</div></div>';
  var q = function (s) { return el.querySelector(s); };
  el.querySelectorAll(".pary button").forEach(function (b) {
    b.onclick = function () {
      var p = PARY[+b.getAttribute("data-p")];
      q(".t-ce").value = p[1];
      var k = keys.filter(function (x) { return baza(x) === p[2]; })[0] || "";
      q(".t-um").value = k; licz();
      if (!k) q(".t-w").innerHTML += "<br><span class='puste'>Postać nie ma umiejętności " + esc(UM_PL[p[2]] || p[2]) + ": liczy się 0.</span>";
    };
  });
  q(".t-um").onchange = function () { var u = q(".t-um").value; if (u) q(".t-ce").value = CECHA_UM[baza(u)] || "Wits"; licz(); };
  q(".t-trs").onchange = function () { if (q(".t-trs").value) q(".t-tr").value = q(".t-trs").value; licz(); };
  function n(s) { var v = parseFloat(String(q(s).value).replace(",", ".")); return isNaN(v) ? null : v; }
  function licz() {
    var c = ce(o, q(".t-ce").value), u = q(".t-um").value ? (+(o.umiejetnosci || {})[q(".t-um").value] || 0) : 0;
    var k = n(".t-k"), m = n(".t-m") || 0, tr = n(".t-tr"), przec = q(".t-przec").checked;
    var kk = (q(".t-kara").checked && kv !== "X") ? kv : 0;
    var w = q(".t-w");
    if (k == null) { w.textContent = "Wpisz wynik kości."; return; }
    var s = k + c + u + m;
    var t = "<b>Wynik: " + s + "</b> (kość " + k + " + " + CECHY_PL[q(".t-ce").value] + " " + c + " + " + esc(UM_PL[baza(q(".t-um").value)] || q(".t-um").value || "umiejętność") + " " + u + (m ? " + premie " + m : "") + ")";
    if (tr == null) t += "<br>Wpisz trudność" + (przec ? " (wynik przeciwnika)" : "") + ".";
    else if (przec) {
      var cel = tr + kk;
      t += "<br>Przeciwnik: " + tr + (kk ? " + kara zdrowia " + kk : "") + " = " + cel + "<br><b>" + (s > cel ? "Wygrywasz" : s < cel ? "Przegrywasz" : "Remis: rzućcie jeszcze raz albo rozstrzyga MG (s. 4)") + "</b>";
    } else {
      var tt = tr + kk;
      t += "<br>Trudność: " + tr + (kk ? " + kara zdrowia " + kk : "") + " = " + tt + "<br><b>" + poziomWyniku(s, tt) + "</b> (" + (s >= tt ? "zapas +" + (s - tt) : "brakuje " + (tt - s)) + ")";
    }
    if (kv === "X") t += "<br><b>Szóste kółko zdrowia: postać nie może działać.</b>";
    if (tr != null && s < tr + kk) t += "<br><span class='puste'>Story Point: po porażce możesz dorzucić jeszcze jedną kość 1D10 do wyniku (s. 4). Dopisz ją w polu premii.</span>";
    w.innerHTML = t;
  }
  el.addEventListener("input", licz); el.addEventListener("change", licz);
  licz();
};

/* ---------- panel starcia ---------- */
function minKosc(potrzeba) {
  if (potrzeba <= 1) return "<b>Wystarczy dowolny wynik kości.</b>";
  if (potrzeba > 10) return "<b>Nawet 10 na kości nie wystarczy</b> (brakuje " + (potrzeba - 10) + "); pomóc może tylko Story Point (dodatkowa kość).";
  return "<b>Musisz wyrzucić na kości co najmniej " + potrzeba + ".</b>";
}
function kolka(obr, odp) { if (obr == null || odp == null) return null; if (obr < odp) return 0; if (obr >= 3 * odp) return 3; if (obr >= 2 * odp) return 2; return 1; }
var RODZAJE = {
  pokaz: { nazwa: "Pokaz albo ćwiczenie na lekcji", rany: false, opis: "Liczysz trafienia, nikt nie odnosi ran (Wren pilnuje siły zaklęć). Wzmocnienie ×2 i ×3 to tylko opis (ZD-09)." },
  pojedynek: { nazwa: "Formalny pojedynek uczniów", rany: false, opis: "Ukłon, sekundanci, liczysz trafienia do limitu. Rany tylko wtedy, gdy stół tego chce (wtedy przełącz na „walka na serio”). Wzmocnienie ×2 i ×3 to tylko opis (ZD-09)." },
  walka: { nazwa: "Walka na serio (potyczka, rany)", rany: true, opis: "Trafienie zadaje obrażenia; cel rzuca 1D10 + Żywotność i traci kółka zdrowia (Walker s. 35)." }
};
var KLUCZ = "hp69-starcie-v1";
function wczytajS() { try { return JSON.parse(localStorage.getItem(KLUCZ)) || {}; } catch (e) { return {}; } }
function zapiszS(s) { try { localStorage.setItem(KLUCZ, JSON.stringify(s)); } catch (e) {} }

function zakleciaPostaci(p) {
  var zz = p.zaklecia || {}, out = [];
  Object.keys(zz).forEach(function (g) { (zz[g] || []).forEach(function (x) { if (out.indexOf(x.nazwa) < 0) out.push(x.nazwa); }); });
  return out;
}
function bojowe(n) { var k = ksiega(n); return !!(k && k.w_walce && k.typ !== "Potion"); }
function opisZakl(n) {
  var k = ksiega(n); if (!k) return "<span class='puste'>Brak opisu w księdze zaklęć (sprawdź pisownię).</span>";
  return "<b>" + esc(k.nazwa) + "</b>" + (k.nazwa_pl ? " (" + esc(k.nazwa_pl) + ")" : "") + " · trudność nauki " + esc(k.trudnosc) + (k.rok ? " · " + esc(k.rok) + ". rok" : "") + "<br>" + esc(k.w_walce || k.efekt || "");
}
function obrazeniaZakl(n) { var k = ksiega(n); if (!k) return ""; var m = String(k.w_walce || "").match(/(\d+D(?:\+\d+)?)\s*\+\s*(Focus|Wits|Vitality|Speed)/); return m ? m[1] + " + " + m[2] : ""; }

/* el, opt: {postacie: [obiekty kart], npc: {id: {imie, staty}}, starcia: [...], stala: id postaci (panel graczy), mg: bool} */
window.renderStarcie = function (el, opt) {
  opt = opt || {};
  var S = wczytajS();
  var post = opt.postacie || [], npc = opt.npc || {}, pres = opt.starcia || [];
  if (opt.stala) S.p = opt.stala;
  if (!S.p || !post.some(function (p) { return p.id === S.p; })) S.p = post[0] ? post[0].id : null;
  (opt.losowi || []).forEach(function (l) { npc[l.id] = { imie: l.imie + " (" + ({ latwy: "łatwy", sredni: "średni", trudny: "trudny", niemozliwy: "niemożliwy" }[l.poziom_trudnosci] || l.poziom_trudnosci) + ")", staty: l.staty, los: l }; });
  var G = !!opt.gracz;
  var npcIds = Object.keys(npc).filter(function (i) { var w = (npc[i].staty || {}).wartosci || {}; return w.cechy && Object.keys(w.cechy).length; });
  if (!S.n || npcIds.indexOf(S.n) < 0) S.n = npcIds[0] || null;
  S.rodzaj = S.rodzaj || "pojedynek"; S.akcja = S.akcja || "atakP";
  S.zp = S.zp || {}; S.zn = S.zn || { body: 0, mind: 0 }; S.tp = S.tp || 0; S.tn = S.tn || 0; S.log = S.log || [];
  var P = function () { return post.filter(function (p) { return p.id === S.p; })[0]; };
  var N = function () { return S.n ? (npc[S.n].staty || {}).wartosci : null; };
  var NI = function () { return S.n ? npc[S.n].imie : "przeciwnik"; };
  var preset = function () { return pres.filter(function (x) { return x.id === S.preset; })[0]; };
  function zp() { if (!S.zp[S.p]) S.zp[S.p] = { body: 0, mind: 0 }; return S.zp[S.p]; }

  function rysuj() {
    zapiszS(S);
    var p = P(), w = N(), pr = preset();
    if (!p) { el.innerHTML = "<p class='puste'>Brak postaci graczy.</p>"; return; }
    var h = '<div class="starcie">';
    // 0. zaplanowane starcie
    if (pres.length) {
      h += '<div class="sekg"><h3>Zaplanowane starcie</h3><select id="st-pr"><option value="">wybierz scenę… (albo starcie dowolne)</option>' + pres.map(function (x) { return '<option value="' + esc(x.id) + '"' + (x.id === S.preset ? " selected" : "") + ">" + esc(x.tytul) + "</option>"; }).join("") + "</select>";
      if (pr) {
        h += '<div class="st-pr"><p><b>' + esc((RODZAJE[pr.rodzaj] || {}).nazwa || pr.rodzaj) + "</b>" + (pr.limit_trafien ? " · wygrywa: postać przy " + esc(pr.limit_trafien.postac) + " trafieniach, " + esc(NI()) + " przy " + esc(pr.limit_trafien.przeciwnik) : "") + (pr.rundy_max ? " · najwyżej " + esc(pr.rundy_max) + " rundy" : "") + "</p>" +
          (pr.inicjatywa === false ? "<p class='uwaga-czytaj'>W tym starciu <b>nie rzuca się inicjatywy</b>: " + esc(pr.inicjatywa_opis || "") + "</p>" : "") +
          (pr.zasady ? "<ol class='st-kroki'>" + pr.zasady.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") + "</ol>" : "") +
          (pr.uwagi ? "<p class='puste'>" + esc(pr.uwagi) + "</p>" : "") + "</div>";
      }
      h += "</div>";
    }
    if ((opt.losowi || []).length && !G) {
      h += '<div class="sekg"><h3>Przypadkowy pojedynek</h3><p class="puste">Gracze nagle z kimś walczą? Wybierz poziom i wylosuj przeciwnika albo wybierz go z listy „Przeciwnik” niżej.</p>' +
        '<select id="st-lp"><option value="">dowolny poziom</option><option value="latwy">łatwy (młodsi uczniowie)</option><option value="sredni">średni (6.–7. rok)</option><option value="trudny">trudny (dorośli, zakapiory)</option><option value="niemozliwy">niemożliwy (profesor, auror, śmierciożerca)</option></select> <button id="st-los">Losuj przeciwnika</button>';
      var L = S.n && npc[S.n] && npc[S.n].los;
      if (L) h += '<div class="st-pr"><p><b>' + esc(L.imie) + "</b>: " + esc(L.opis || "") + "</p><p><b>Jak prowadzić:</b> " + esc(L.styl || "") + "</p></div>";
      h += "</div>";
    }
    // 1-2. kto z kim
    h += '<div class="sekg st-kto"><div><h3>1. Postać</h3>' + (opt.stala ? "<p><b>" + esc(p.imie) + "</b></p>" : '<div class="wyb-p">' + post.map(function (x) { return '<button data-p="' + esc(x.id) + '" class="' + (x.id === S.p ? "aktywna" : "") + '">' + esc(x.imie) + "</button>"; }).join("") + "</div>") +
      "<p class='puste'>Unik 1D10 + " + (ce(p, "Speed") + ce(p, "Wits")) + (protegoOpanowane(p, zakleciaPostaci(p)) ? " · Protego 1D10 + " + (ce(p, "Wits") + um(p, "Charms")) : "") + " · Inicjatywa 1D10 + " + (ce(p, "Speed") + um(p, "Duelling") + (premieRozdzki(p).Duelling || 0)) + " · Odporność 1D10 + " + ce(p, "Vitality") + "</p></div>" +
      '<div><h3>Przeciwnik</h3>' + (npcIds.length ? '<select id="st-n">' + npcIds.map(function (i) { return '<option value="' + esc(i) + '"' + (i === S.n ? " selected" : "") + ">" + esc(npc[i].imie) + "</option>"; }).join("") + "</select>" : "<p class='puste'>Brak NPC z liczbami.</p>") +
      (w && G ? "<p class='puste'>Liczby przeciwnika zna MG. Panel pokaże, ile musisz wyrzucić.</p>" : "") +
      (w && !G ? "<p class='puste'>" + rzuty(w).slice(0, 5).map(function (r) { return esc(r[0].split(" (")[0]) + " 1D10 + " + r[1]; }).join(" · ") + "</p>" + (opt.mg ? '<details><summary class="puste">Pełne statystyki</summary>' + window.kartaStatystyk(npc[S.n].staty) + "</details>" : "") : "") + "</div></div>";
    // rodzaj
    h += '<div class="sekg"><h3>Rodzaj starcia</h3><div class="wyb-r">' + Object.keys(RODZAJE).map(function (r) { return '<label><input type="radio" name="st-r" value="' + r + '"' + (r === S.rodzaj ? " checked" : "") + ' style="width:auto"> ' + esc(RODZAJE[r].nazwa) + "</label>"; }).join("") + "</div><p class='puste'>" + esc(RODZAJE[S.rodzaj].opis) + "</p></div>";
    // stan
    h += '<div class="sekg st-stan">' + stanHTML(p.imie, zp(), S.tp, "p", pr && pr.limit_trafien ? pr.limit_trafien.postac : null) + stanHTML(NI(), S.zn, S.tn, "n", pr && pr.limit_trafien ? pr.limit_trafien.przeciwnik : null) +
      '<p><button id="st-reset">Nowe starcie (wyzeruj trafienia i zdrowie przeciwnika)</button></p></div>';
    // akcja
    var AK = [["inic", "Inicjatywa"], ["atakP", "2. " + p.imie + " rzuca zaklęcie"], ["atakN", NI() + " atakuje"], ["przec", "Test przeciwny"]];
    h += '<div class="sekg"><div class="gz st-ak">' + AK.map(function (a) { return '<button data-a="' + a[0] + '" class="' + (a[0] === S.akcja ? "aktywna" : "") + '">' + esc(a[1]) + "</button>"; }).join("") + '</div><div id="st-akcja"></div></div>';
    if (S.log.length) h += '<div class="sekg"><h3>Przebieg</h3><ol class="st-log">' + S.log.slice(-12).map(function (l) { return "<li>" + l + "</li>"; }).join("") + '</ol><button id="st-log-x">Wyczyść przebieg</button></div>';
    h += '<details class="sekg"><summary><b>Jak działają rany i zdrowie (krótko)</b></summary>' + ZDROWIE_HTML + "</details>";
    el.innerHTML = h + "</div>";
    podepnij();
    akcja();
  }
  function stanHTML(imie, z, traf, kto, limit) {
    var k = kara(z);
    var tor = function (kl, nazwy) { var s = ""; for (var i = 1; i <= 6; i++) s += '<button class="kolko' + (i <= (z[kl] || 0) ? " on" : "") + '" data-k="' + kto + '" data-t="' + kl + '" data-i="' + i + '" title="' + esc(nazwy[i]) + '"></button>'; return s; };
    return '<div class="st-osoba"><h3>' + esc(imie) + "</h3>" +
      '<div class="tor"><small>Ciało</small>' + tor("body", STANY_B) + " <small>" + esc(STANY_B[z.body || 0]) + "</small></div>" +
      '<div class="tor"><small>Umysł</small>' + tor("mind", STANY_M) + " <small>" + esc(STANY_M[z.mind || 0]) + "</small></div>" +
      "<p>Kara do trudności: <b>" + (k === "X" ? "nie może działać" : (k ? "+" + k : "brak")) + "</b> · Trafienia: <b>" + traf + "</b>" + (limit ? " / " + esc(limit) : "") +
      ' <button data-tr="' + kto + '" data-d="1">+1</button> <button data-tr="' + kto + '" data-d="-1">−1</button></p></div>';
  }
  function podepnij() {
    var q = function (s) { return el.querySelector(s); };
    if (q("#st-pr")) q("#st-pr").onchange = function () {
      S.preset = this.value; var pr = preset();
      if (pr) {
        if (pr.rodzaj) S.rodzaj = pr.rodzaj;
        if (pr.przeciwnicy && pr.przeciwnicy[0] && npc[pr.przeciwnicy[0]]) S.n = pr.przeciwnicy[0];
        S.tp = 0; S.tn = 0; S.zn = { body: 0, mind: 0 }; S.log = [];
        if (pr.stan_postaci) post.forEach(function (x) { S.zp[x.id] = { body: pr.stan_postaci.body || 0, mind: pr.stan_postaci.mind || 0 }; });
        S.akcja = pr.inicjatywa === false ? "atakN" : "inic";
      }
      rysuj();
    };
    if (q("#st-los")) q("#st-los").onclick = function () {
      var poz = q("#st-lp").value, pula = (opt.losowi || []).filter(function (l) { return !poz || l.poziom_trudnosci === poz; });
      if (!pula.length) return;
      S.n = pula[Math.floor(Math.random() * pula.length)].id; S.tn = 0; S.tp = 0; S.zn = { body: 0, mind: 0 }; S.log = []; S.akcja = "inic";
      S.preset = pres.some(function (x) { return x.id === "s1.starcie.00-przypadkowy-pojedynek"; }) ? "s1.starcie.00-przypadkowy-pojedynek" : "";
      rysuj();
    };
    el.querySelectorAll(".wyb-p button").forEach(function (b) { b.onclick = function () { S.p = b.getAttribute("data-p"); rysuj(); }; });
    if (q("#st-n")) q("#st-n").onchange = function () { S.n = this.value; rysuj(); };
    el.querySelectorAll("input[name=st-r]").forEach(function (r) { r.onchange = function () { S.rodzaj = r.value; rysuj(); }; });
    el.querySelectorAll(".st-ak button").forEach(function (b) { b.onclick = function () { S.akcja = b.getAttribute("data-a"); rysuj(); }; });
    el.querySelectorAll(".kolko").forEach(function (b) {
      b.onclick = function () { var z = b.getAttribute("data-k") === "p" ? zp() : S.zn, t = b.getAttribute("data-t"), i = +b.getAttribute("data-i"); z[t] = z[t] === i ? i - 1 : i; rysuj(); };
    });
    el.querySelectorAll("[data-tr]").forEach(function (b) { b.onclick = function () { var k = b.getAttribute("data-tr") === "p" ? "tp" : "tn"; S[k] = Math.max(0, S[k] + (+b.getAttribute("data-d"))); rysuj(); }; });
    q("#st-reset").onclick = function () { S.tp = 0; S.tn = 0; S.zn = { body: 0, mind: 0 }; S.log = []; var pr = preset(); zp(); if (pr && pr.stan_postaci) S.zp[S.p] = { body: pr.stan_postaci.body || 0, mind: pr.stan_postaci.mind || 0 }; rysuj(); };
    if (q("#st-log-x")) q("#st-log-x").onclick = function () { S.log = []; rysuj(); };
  }
  function dopisz(t) { S.log.push(t); }
  function wygrana() {
    var pr = preset(); if (!pr || !pr.limit_trafien) return "";
    if (S.tp >= pr.limit_trafien.postac) return "<p class='st-koniec'><b>" + esc(P().imie) + " wygrywa starcie.</b> " + esc(pr.po_wygranej_postaci || "") + "</p>";
    if (S.tn >= pr.limit_trafien.przeciwnik) return "<p class='st-koniec'><b>" + esc(NI()) + " wygrywa starcie.</b> " + esc(pr.po_wygranej_przeciwnika || "") + "</p>";
    return "";
  }

  function akcja() {
    var box = el.querySelector("#st-akcja"), p = P(), w = N();
    if (!w && S.akcja !== "przec") { box.innerHTML = "<p class='puste'>Wybierz przeciwnika z liczbami.</p>"; return; }
    var kp = kara(zp()), kn = w ? kara(S.zn) : 0;
    var numer = function (id, et, val) { return '<label>' + et + ' <input id="' + id + '" type="number" inputmode="numeric"' + (val != null ? ' value="' + val + '"' : "") + "></label>"; };
    var n = function (id) { var e = el.querySelector("#" + id); if (!e) return null; var v = parseFloat(String(e.value).replace(",", ".")); return isNaN(v) ? null : v; };
    var mod = '<details class="st-mod"><summary>Modyfikatory (rzadziej)</summary>' +
      numer("m-rzut", "Premia do rzutu atakującego (np. nazwany sygnał +3, Story Point: wynik dodatkowej kości)", 0) +
      numer("m-cel", "Dodatek do celu (osłona +2 za każde 20%, daleki cel +3, cel w biegu +1, w locie +3; s. 165)", 0) +
      '<label><input type="checkbox" id="m-niew" style="width:auto"> zaklęcie niewerbalne (+6 do celu)</label>' +
      '<label><input type="checkbox" id="m-cudza" style="width:auto"> cudza albo uszkodzona różdżka (+5 do celu, ZD-01)</label>' +
      '<label><input type="checkbox" id="m-bez" style="width:auto"> bez różdżki (+9 do celu)</label></details>';
    var pr = preset();

    if (S.akcja === "inic") {
      var ip = ce(p, "Speed") + um(p, "Duelling") + (premieRozdzki(p).Duelling || 0), iN = ce(w, "Speed") + um(w, "Duelling") + (premieRozdzki(w).Duelling || 0);
      box.innerHTML = (pr && pr.inicjatywa === false ? "<p class='uwaga-czytaj'>W tym zaplanowanym starciu inicjatywy się nie rzuca. " + esc(pr.inicjatywa_opis || "") + "</p>" : "") +
        "<p class='puste'>Walker s. 41: obie strony rzucają 1D10 + Szybkość + Pojedynkowanie. Wyższy wynik działa pierwszy. Remis: zaklęcia się zwierają.</p>" +
        numer("i-p", p.imie + ": kość (1D10 + " + ip + ")") + numer("i-n", NI() + ": kość" + (G ? " (podaje MG)" : " (1D10 + " + iN + ")")) + '<div id="i-w" class="wynikk">Wpisz obie kości.</div>';
      var li = function () {
        var a = n("i-p"), b = n("i-n"), e = el.querySelector("#i-w");
        if (b != null && a == null) { e.innerHTML = "Żeby działać pierwsza: " + minKosc(b + iN - ip + 1); return; }
        if (a == null || b == null) { e.textContent = G ? "Poproś MG o rzut przeciwnika i wpisz go: panel pokaże, ile potrzebujesz." : "Wpisz obie kości."; return; }
        var sa = a + ip, sb = b + iN;
        e.innerHTML = p.imie + ": <b>" + sa + "</b> · " + (G ? "przeciwnik" : esc(NI())) + ": <b>" + sb + "</b><br><b>" + (sa > sb ? p.imie + " działa pierwsza. Wybierz „rzuca zaklęcie”." : sa < sb ? esc(NI()) + " działa pierwszy. Wybierz „" + esc(NI()) + " atakuje”." : "Remis: zwarcie zaklęć (s. 41). Co rundę obie strony rzucają 1D10 + Skupienie + umiejętność zaklęcia; zwarcie trwa, aż ktoś przebije drugiego o 5 i więcej. Przegrany przyjmuje zaklęcie zwycięzcy.") + "</b>";
      };
      box.oninput = li; li(); return;
    }

    if (S.akcja === "przec") {
      var o2 = w || {};
      box.innerHTML = "<p class='puste'>Obie strony rzucają 1D10 + cecha + umiejętność; wyższy wygrywa, remis: powtórka albo decyzja MG (s. 4). Kary ze zdrowia odejmij od rzutu.</p>" +
        '<label>Co sprawdzamy <select id="pz-para">' + PARY.map(function (x, i) { return '<option value="' + i + '">' + esc(x[0]) + " (" + CECHY_PL[x[1]] + " + " + esc(UM_PL[x[2]] || CECHY_PL[x[2]] || x[2]) + ")</option>"; }).join("") + "</select></label>" +
        '<label' + (G ? " hidden" : "") + '>Przeciwnik broni się parą <select id="pz-para-n">' + PARY.map(function (x, i) { return '<option value="' + i + '">' + esc(x[0]) + " (" + CECHY_PL[x[1]] + " + " + esc(UM_PL[x[2]] || x[2]) + ")</option>"; }).join("") + "</select></label>" +
        numer("pz-p", p.imie + ": kość") + numer("pz-n", NI() + ": kość") + numer("pz-m", "Premia postaci (nazwany nawyk +3, pomocnik +1 itp.)", 0) + '<div id="pz-w" class="wynikk">Wpisz obie kości.</div>';
      var sp = el.querySelector("#pz-para"), sn = el.querySelector("#pz-para-n");
      sp.value = S.pz || "0"; sn.value = S.pzn || "0";
      sp.onchange = function () { S.pz = sp.value; var x = PARY[+sp.value]; var odp = { "Skradanie się": 0, "Kłamstwo, blef, ukrywanie zamiaru": 3, "Ukrycie przedmiotu, kradzież kieszonkowa": 0 }; if (x[0] in odp) sn.value = String(odp[x[0]]); S.pzn = sn.value; zapiszS(S); lp(); };
      sn.onchange = function () { S.pzn = sn.value; zapiszS(S); lp(); };
      var lp = function () {
        var a = n("pz-p"), b = n("pz-n"), m = n("pz-m") || 0, e = el.querySelector("#pz-w");
        var x = PARY[+sp.value], y = PARY[+sn.value];
        var dr = function (o, n) { return CECHY.indexOf(n) >= 0 ? ce(o, n) : um(o, n); };
        var vp = ce(p, x[1]) + dr(p, x[2]), vn = ce(o2, y[1]) + dr(o2, y[2]);
        var kpp = kp === "X" ? 0 : kp, knn = kn === "X" ? 0 : kn;
        var info = p.imie + ": 1D10 + " + vp + (m ? " + " + m : "") + (kpp ? " − kara " + kpp : "") + (G ? "" : " · " + esc(NI()) + ": 1D10 + " + vn + (knn ? " − kara " + knn : ""));
        if (b != null && a == null) { e.innerHTML = info + "<br>Żeby wygrać: " + minKosc(b + vn - knn - vp - m + kpp + 1); return; }
        if (a == null || b == null) { e.innerHTML = info + "<br>Wpisz obie kości" + (G ? " (kość przeciwnika podaje MG)" : "") + "."; return; }
        var sa = a + vp + m - kpp, sb = b + vn - knn;
        e.innerHTML = info + "<br>" + p.imie + ": <b>" + sa + "</b> · " + esc(NI()) + ": <b>" + sb + "</b><br><b>" + (sa > sb ? p.imie + " wygrywa." : sa < sb ? esc(NI()) + " wygrywa." : "Remis: rzućcie jeszcze raz.") + "</b>";
      };
      box.oninput = lp; lp(); return;
    }

    var atakujeP = S.akcja === "atakP";
    var A = atakujeP ? p : w, O = atakujeP ? w : p;
    var listaA = atakujeP ? zakleciaPostaci(p) : Object.keys(w.zaklecia || {});
    var trA = function (z) { return atakujeP ? 0 : (+((w.zaklecia || {})[z]) || 0); };
    listaA.sort(function (a, b) { return (bojowe(b) ? 1 : 0) - (bojowe(a) ? 1 : 0); });
    var wybZ = (atakujeP ? S.zp_z : S.zn_z) || listaA.filter(bojowe)[0] || listaA[0] || "";
    var mozeProtego = atakujeP ? protegoOpanowane(w) : protegoOpanowane(p, zakleciaPostaci(p));
    var obr = S.obr && (S.obr !== "protego" || mozeProtego) ? S.obr : "unik";
    var imA = atakujeP ? p.imie : NI(), imO = atakujeP ? NI() : p.imie;
    box.innerHTML = '<label>Zaklęcie (' + esc(imA) + ') <select id="a-z">' + listaA.map(function (z) {
      var k = ksiega(z); return '<option value="' + esc(z) + '"' + (z === wybZ ? " selected" : "") + ">" + esc(z) + (k ? " · trudność nauki " + k.trudnosc : "") + (trA(z) ? " · NIEOPANOWANE (+" + trA(z) + ")" : " · opanowane") + (bojowe(z) ? " · do walki" : "") + "</option>";
    }).join("") + '</select></label><p id="a-opis" class="puste"></p>' +
      '<label>Obrona (' + esc(imO) + ') <select id="a-o"><option value="unik"' + (obr === "unik" ? " selected" : "") + ">Unik: 1D10 + Szybkość + Bystrość (darmowy)</option>" + (mozeProtego ? '<option value="protego"' + (obr === "protego" ? " selected" : "") + ">Protego: 1D10 + Bystrość + Zaklęcia (zabiera najbliższą akcję, ZD-07)</option>" : "") + "</select></label>" +
      '<div class="st-kosci">' + numer("a-k", "3. Kość " + esc(imA) + " (atak)" + (G && !atakujeP ? ", podaje MG" : "")) + numer("a-ko", "4. Kość " + esc(imO) + " (obrona)" + (G && atakujeP ? ", podaje MG" : "")) + "</div>" + mod +
      '<div id="a-w" class="wynikk">Wpisz obie kości.</div><div id="a-obr"></div>';
    var sel = el.querySelector("#a-z"), so = el.querySelector("#a-o");
    var pisz = function () { el.querySelector("#a-opis").innerHTML = opisZakl(sel.value); };
    sel.onchange = function () { if (atakujeP) S.zp_z = sel.value; else S.zn_z = sel.value; zapiszS(S); pisz(); la(); };
    so.onchange = function () { S.obr = so.value; zapiszS(S); la(); };
    pisz();
    var ostatni = null;
    var la = function () {
      var z = sel.value, at = atakZ(A, z), e = el.querySelector("#a-w"), eo = el.querySelector("#a-obr");
      var ob = so.value === "protego" ? { s: ce(O, "Wits") + um(O, "Charms"), o: "Protego: Bystrość " + ce(O, "Wits") + " + Zaklęcia " + um(O, "Charms") } : { s: ce(O, "Speed") + ce(O, "Wits"), o: "Unik: Szybkość " + ce(O, "Speed") + " + Bystrość " + ce(O, "Wits") };
      var ka = atakujeP ? kp : kn, ko = atakujeP ? kn : kp;
      if (ka === "X") { e.innerHTML = "<b>" + esc(imA) + " ma szóste kółko: nie może działać.</b>"; eo.innerHTML = ""; return; }
      var kaN = ka || 0, koN = ko === "X" ? 0 : (ko || 0);
      var roznica = kaN - koN; // s. 165: liczy się różnica kar; gdy obrońca ranny bardziej, cel spada
      var niek = (el.querySelector("#m-niew").checked ? 6 : 0) + (el.querySelector("#m-cudza").checked ? 5 : 0) + (el.querySelector("#m-bez").checked ? 9 : 0);
      var mr = n("m-rzut") || 0, mc = n("m-cel") || 0, aktTr = trA(z);
      var info = (G && !atakujeP) ? "Atak przeciwnika: kość podaje MG" : "Atak " + esc(imA) + ": 1D10 + " + at.suma + " (" + esc(at.opis) + (mr ? " + premia " + mr : "") + ")" + ((G && atakujeP) ? "" : "<br>Obrona " + esc(imO) + ": 1D10 + " + ob.s + " (" + esc(ob.o) + ")") +
        "<br>Do celu dochodzi: aktualna trudność zaklęcia " + aktTr + (roznica ? ", różnica kar ze zdrowia " + (roznica > 0 ? "+" : "") + roznica : "") + (niek ? ", niekorzyści +" + niek : "") + (mc ? ", inne +" + mc : "");
      var ka1 = n("a-k"), ko1 = n("a-ko");
      var stale = aktTr + roznica + niek + mc;
      if (ka1 == null || ko1 == null) {
        var pom = "";
        if (atakujeP && ko1 != null) pom = "<br>Żeby trafić: " + minKosc(ko1 + ob.s + stale - at.suma - mr);
        if (!atakujeP && ka1 != null) pom = "<br>Żeby uniknąć trafienia: " + minKosc(ka1 + at.suma + mr - ob.s - stale + 1);
        e.innerHTML = info + (pom || "<br><b>Wpisz obie kości" + (G ? " (kość przeciwnika podaje MG; wpisz ją najpierw, panel pokaże, ile potrzebujesz)" : "") + ".</b>"); eo.innerHTML = ""; return;
      }
      var sa = ka1 + at.suma + mr, cel = ko1 + ob.s + aktTr + roznica + niek + mc;
      var traf = sa >= cel;
      var x = traf && cel > 0 ? (sa >= 3 * cel ? 3 : sa >= 2 * cel ? 2 : 1) : 0;
      var rz = RODZAJE[S.rodzaj];
      var t = info + "<br>5. Wynik ataku <b>" + sa + "</b> przeciw celowi <b>" + cel + "</b>: <b class='" + (traf ? "ok" : "zle") + "'>" + (traf ? "TRAFIENIE" : "PUDŁO") + "</b> (" + (traf ? "zapas +" + (sa - cel) : "brakuje " + (cel - sa)) + ")";
      if (traf) {
        var k = ksiega(z);
        t += "<br>Skutek: " + esc((k && (k.w_walce || k.efekt)) || "według opisu zaklęcia");
        if (x >= 2) t += "<br>Wynik " + (x === 3 ? "co najmniej 3×" : "co najmniej 2×") + " celu: zaklęcie wzmocnione o " + (x - 1) + (x === 3 ? " stopnie" : " stopień") + " (ZD-09: +1D obrażeń, +1 stracona akcja celu albo +2 do progu uwolnienia)" + (rz.rany ? "." : ". W pokazie i pojedynku uczniów tylko opis, bez ran i bez dodatkowych trafień.");
        if (so.value === "protego") t += "<br><span class='puste'>Protego przebite, ale tarcza i tak zmniejsza obrażenia o 30 (s. 56).</span>";
        t += '<br><button id="a-zap">Zapisz trafienie</button>';
      } else {
        t += '<br><span class="puste">' + (atakujeP && ST_SP() ? "Story Point: dorzuć jeszcze 1D10 do rzutu ataku (wpisz w „Premia do rzutu”)." : "Nic się nie dzieje albo zaklęcie mija cel o włos: opisz to.") + "</span>";
      }
      if (ka1 + at.suma + mr === cel) t += "<br><span class='puste'>Remis w ataku liczy się jako trafienie (wynik równy celowi, s. 3).</span>";
      e.innerHTML = t + wygrana();
      ostatni = { z: z, traf: traf, sa: sa, cel: cel };
      var b = el.querySelector("#a-zap");
      if (b) b.onclick = function () {
        if (atakujeP) S.tp++; else S.tn++;
        dopisz(esc(imA) + ": " + esc(z) + " " + sa + " przeciw " + cel + " — trafienie");
        rysuj();
      };
      // obrażenia
      var formula = obrazeniaZakl(z);
      if (traf && rz.rany) {
        eo.innerHTML = '<div class="sekg"><h3>Obrażenia</h3><p class="puste">' + (formula ? "To zaklęcie zadaje " + esc(formula) + " (rzuć kości i wpisz ich sumę; cechę panel doda sam)." : "To zaklęcie nie ma liczby obrażeń w opisie; jego skutek to efekt z opisu (np. utrata akcji). Obrażenia wpisz tylko, gdy MG tak postanowi (np. upadek: 2D).") + "</p>" +
          numer("o-s", "Suma kości obrażeń") + numer("o-r", "Kość odporności celu (1D10 + Żywotność " + ce(O, "Vitality") + ")") + numer("o-p", "Pancerz celu (zwykle 0; Protego: odejmij 30 od obrażeń)", 0) + '<div id="o-w" class="wynikk"></div></div>';
        var lo = function () {
          var s = n("o-s"), r = n("o-r"), pz = n("o-p") || 0, eo2 = el.querySelector("#o-w");
          if (s == null || r == null) { eo2.textContent = "Wpisz sumę kości obrażeń i kość odporności."; return; }
          var cecha = formula ? (formula.split("+ ").pop()) : "";
          var dod = cecha ? ce(A, cecha) : 0;
          var obrz = s + dod - (so.value === "protego" ? 30 : 0), odp = r + ce(O, "Vitality") + pz, kk = kolka(Math.max(0, obrz), odp);
          eo2.innerHTML = "Obrażenia: <b>" + Math.max(0, obrz) + "</b> (kości " + s + (dod ? " + " + esc(cecha) + " " + dod : "") + (so.value === "protego" ? " − Protego 30" : "") + ") · Odporność: <b>" + odp + "</b><br>" + esc(imO) + " traci: <b>" + (kk === 0 ? "nic (odporność wystarcza)" : kk + (kk === 1 ? " kółko" : " kółka") + " ciała") + "</b>" +
            (kk >= 2 ? "<br>Test przytomności: 1D10 + Żywotność przeciw " + (kk === 2 ? 3 : 6) + " + kara po zaznaczeniu nowych kółek (ZD-10)." : "") + (kk ? ' <button id="o-zap">Zaznacz kółka</button>' : "");
          var bz = el.querySelector("#o-zap");
          if (bz) bz.onclick = function () { var zz = atakujeP ? S.zn : zp(); zz.body = Math.min(6, (zz.body || 0) + kk); dopisz(esc(imO) + " traci " + kk + " kółko(a) ciała"); rysuj(); };
        };
        eo.oninput = lo; lo();
      } else eo.innerHTML = "";
    };
    box.oninput = la; box.onchange = function (ev) { if (ev.target.id !== "a-z" && ev.target.id !== "a-o") la(); };
    la();
  }
  var ST_SP = function () { return !!opt.storyPoints; };
  rysuj();
};

var ZDROWIE_HTML = "<p><b>W tej grze nie ma punktów życia (HP).</b> Każda postać ma dwa tory po 6 kółek: <b>Ciało</b> (rany) i <b>Umysł</b> (zmęczenie, strach, oszołomienie). Kółka zaznacza się od lewej (Walker s. 35).</p>" +
  "<table class='kv'><tr><th>Kółko</th><th>Ciało</th><th>Umysł</th><th>Kara do trudności</th></tr>" +
  [1, 2, 3, 4, 5, 6].map(function (i) { return "<tr><td>" + i + "</td><td>" + STANY_B[i] + "</td><td>" + STANY_M[i] + "</td><td>" + (i === 6 ? "żadnych akcji" : "+" + KARA[i]) + "</td></tr>"; }).join("") + "</table>" +
  "<p><b>Kary z obu torów się sumują</b> i dodają do trudności każdego testu (np. Drained w umyśle = +3 do wszystkiego).</p>" +
  "<p><b>Jak się traci kółka:</b> po trafieniu atakujący rzuca obrażenia (np. iskry: 3D + Skupienie). Cel rzuca 1D10 + Żywotność (+ pancerz). Obrażenia mniejsze niż ten wynik: nic. Równe lub większe: 1 kółko. Co najmniej 2×: 2 kółka i test przytomności (1D10 + Żywotność przeciw 3 + kara). Co najmniej 3×: 3 kółka i test przeciw 6 + kara.</p>" +
  "<p><b>Zaklęcia bez liczby obrażeń</b> (Expelliarmus, Flipendo, Impedimenta, Rictusempra) nie zabierają kółek: robią to, co mówi ich opis (wytrącona różdżka, stracone akcje, śmiech).</p>" +
  "<p><b>Pokaz i formalny pojedynek uczniów:</b> liczymy <b>trafienia</b>, nie kółka (decyzja MG, ZD-09). Kółka zaznaczasz tylko w walce na serio.</p>" +
  "<p><b>Leczenie:</b> 1–2 kółka mijają po sekundach lub minutach; 3 i więcej to skrzydło szpitalne. Episkey leczy drobne urazy, Vulnera Sanentur zdejmuje 1 kółko (s. 36, 59).</p>";
window.ZDROWIE_HTML = ZDROWIE_HTML;
window.CECHA_UM = CECHA_UM;
})();

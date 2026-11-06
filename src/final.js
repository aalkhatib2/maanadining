// Final combined site: Redline look + Showroom light sections + Quick Book conversion tools.
// Run: node src/final.js            -> ./index.html (with embedded maps)
//      ART=<dir> node src/final.js  -> <dir>/index.html for the private link (no iframes, no page skeleton)
const fs = require('fs');
const path = require('path');
const { C, IMG, i, S, pages, header, footer, script, btnBook, btnCall, TPA, ZEP, stars } = require('./parts');
const BASE = fs.readFileSync(path.join(__dirname, 'base.css'), 'utf8');

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,700;1,800;1,900&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">`;
const meta = `<div class="hero-meta"><div>${i('shield')}24-Month/24,000 Mile Warranty</div><div>${i('truck')}24 Hour Mobile Tire Repair</div><div>${i('check')}Lifetime Warranty on Brake Pads</div></div>`;

const css = `
/* Redline base (dark) */
:root{--hero-img:url(${IMG.hero});--bg:#0b0b0d;--bg2:#141417;--card:#17171b;--text:#f4f4f5;--muted:#a1a1aa;--line:#2a2a30;--accent:#e11d2a;--fh:'Barlow Condensed',Impact,sans-serif;--fb:Barlow,system-ui,sans-serif;--hw:800;--htt:uppercase;--hls:.01em;--r:16px;--br:10px;--tb-bg:#e11d2a;--hd-bg:rgba(11,11,13,.94);--mt-bg:#e11d2a;--mt-c:#fff;--cta-bg:#e11d2a;--ft-bg:#060607;--ic-bg:rgba(225,29,42,.12);color-scheme:dark}
h1,h2,h3,.big,.num,.tile,.mobile-tire b,.make b{font-style:italic}
.mobile-tire .i{color:#fff}
.sh h2:after,.h2:after{content:"";display:block;width:64px;height:6px;background:var(--accent);margin-top:14px;transform:skewX(-20deg)}

/* Showroom light sections */
.svc-home,.recent-sec,.locs-sec,.amen-sec,.svc-page,.appt,.estimates,.spec-page,.tips,.rev-page,.rrr-sec,.contact,.makes-sec{
  --bg:#fff;--bg2:#f4f5f7;--card:#fff;--text:#0b0d12;--muted:#565d6b;--line:#e6e8ec;--shadow:0 10px 30px rgba(16,24,40,.07);--ic-bg:#fdecee;--input-bg:#fff;
  background:var(--bg);color:var(--text);color-scheme:light}
.recent-sec,.amen-sec,.estimates,.rrr-sec{--bg:#f4f5f7;--card:#fff}
.svc-home .card,.recent-sec .card,.locs-sec .card,.rrr-sec .card,.rev-page .card,.makes-sec .card,.svc-page .card,.appt .card,.contact .card,.amen-sec .am,.amen-sec .partners{border-color:transparent}
.svc-page .svc-cat{border:1px solid var(--line)}

/* hero: Redline photo + Quick Book shop picker */
.hero{background:linear-gradient(100deg,rgba(11,11,13,.97) 32%,rgba(11,11,13,.6) 64%,rgba(225,29,42,.28)),var(--hero-img) center/cover}
.hero:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:70px;background:var(--bg);clip-path:polygon(0 100%,100% 0,100% 100%)}
.hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center;padding-top:64px;padding-bottom:130px}
.hero h1{font-size:clamp(46px,6.6vw,90px)}
.hero h1 em{color:var(--accent);font-style:italic}
.hero .lead{color:#d4d4d8;font-weight:500}
.slash{display:inline-block;background:var(--accent);color:#fff;font:italic 800 14px var(--fh);letter-spacing:.1em;text-transform:uppercase;padding:6px 14px;transform:skewX(-12deg);margin-bottom:18px}
.book{background:#fff;color:#0b0d12;border-radius:22px;padding:24px;box-shadow:0 30px 70px rgba(0,0,0,.5);--text:#0b0d12;--muted:#5b6170;--line:#e6e8ec;--bg:#f4f5f7;color-scheme:light}
.book h3{font-size:28px;margin-bottom:2px}
.book>p{font-size:14px}
.seg{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:#f1f2f4;padding:5px;border-radius:14px;margin:16px 0}
.seg button{border:0;background:none;padding:11px;border-radius:10px;font:700 15px var(--fb);color:#5b6170;cursor:pointer}
.seg button.on{background:#fff;color:#0b0d12;box-shadow:0 4px 14px rgba(16,24,40,.1)}
.seg button:focus-visible{outline:2px solid var(--accent)}
.lp{display:none}.lp.on{display:block}
.lp p{color:#0b0d12;font-weight:600;margin:0 0 8px!important;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.lp .i{color:var(--accent)}
.big-btns{display:grid;gap:8px;margin-top:16px}
.big-btns .btn{padding:15px;font-size:16px;width:100%}
.big-btns .btn-s{background:#0b0d12;color:#fff}
.big-btns .btn-g{color:#0b0d12;border-color:#e6e8ec}
.tiles-wrap{margin-top:-74px}

/* why: Showroom floating badges on the photo */
.why-media{position:relative}
.why-media img{width:100%;border-radius:var(--r);aspect-ratio:4/3.3;object-fit:cover}
.float{position:absolute;background:#fff;color:#5b6170;border-radius:16px;padding:12px 16px;box-shadow:0 20px 40px rgba(0,0,0,.35);font-size:13px}
.float b{display:block;color:#0b0d12;font-size:16px}
.f1{left:-18px;bottom:28px}.f2{right:-14px;top:24px}
.coupon{background:linear-gradient(135deg,rgba(225,29,42,.16),transparent 60%)}
.phero{background:linear-gradient(100deg,#0b0b0d 40%,rgba(225,29,42,.35)),var(--hero-img) center/cover}

/* Quick Book sticky dock on phones */
.dock{display:none}
@media(max-width:900px){.hero .wrap{grid-template-columns:1fr;padding-top:44px}.f1{left:10px}.f2{right:10px}}
@media(max-width:640px){
  .dock{display:grid;grid-template-columns:repeat(4,1fr);position:fixed;left:0;right:0;bottom:0;z-index:150;background:#0b0b0d;border-top:1px solid #2a2a30;padding-bottom:env(safe-area-inset-bottom,0px)}
  .dock a{display:flex;flex-direction:column;align-items:center;gap:3px;padding:10px 2px 12px;font-size:11.5px;font-weight:700;color:#f4f4f5}
  .dock a.dk-book{background:var(--accent);color:#fff}
  .dock .i{width:22px;height:22px}
  body{padding-bottom:72px}
}`;

const hero = () => `<section class="hero"><div class="wrap">
  <div><span class="slash">${C.tagline}</span>
    <h1>Tampa’s tire &amp;<br>auto repair <em>experts.</em></h1>
    <p class="lead">Brakes, oil changes, tires, A/C, engine and electrical, handled by trained technicians at two locations. ${C.mobileTire}.</p>
    <div class="row">${btnBook()}<a class="btn btn-g" href="#services">Explore Services</a></div>${meta}</div>
  <div class="book"><h3>Choose your shop</h3><p>Book online and we’ll call to confirm your time.</p>
    <div class="seg" role="tablist">${C.locations.map((l, n) => `<button type="button" class="${n ? '' : 'on'}" onclick="pick(${n},this)">${l.city}</button>`).join('')}</div>
    ${C.locations.map((l, n) => `<div class="lp ${n ? '' : 'on'}"><p>${i('pin')}${l.street}, ${l.csz}</p><p>${i('clock')}Mon-Fri 9am-6pm · Sat 9am-5pm <span class="open-badge" data-open></span></p>
      <div class="big-btns"><a class="btn btn-p" href="#appointments">${i('cal')}Schedule Appointment</a><a class="btn btn-s" href="tel:${l.tel}">${i('phone')}Call ${l.phone}</a><a class="btn btn-g" href="${l.map}" target="_blank" rel="noopener">${i('pin')}Get Directions</a></div></div>`).join('')}
  </div></div></section>
  <script>function pick(n,b){document.querySelectorAll('.seg button').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.querySelectorAll('.lp').forEach((p,i)=>p.classList.toggle('on',i===n))}</script>`;

const why = () => `<section class="why"><div class="wrap"><div class="split">
  <div class="why-media"><img src="${IMG.why}" alt="Tire Tech technician mounting a tire"><div class="float f1">${stars(5)}<b>5-star reviews</b>from real repair orders</div><div class="float f2"><b>Lifetime Warranty</b>on brake pads &amp; shoes</div></div>
  <div><div class="sh"><span class="kicker">Why Choose Us</span><h2>${C.why.title}</h2></div>${C.why.p.map(p => `<p>${p}</p>`).join('')}
    <ul class="ticks">${C.why.bullets.map(b => `<li>${i('check')}${b}</li>`).join('')}</ul></div>
  </div></div></section>`;

const order = ['tiles', 'specials', 'services', 'mobile', 'WHY', 'recent', 'ttt', 'locations', 'amenities', 'welcome', 'cta'];
const home = hero() + order.map(k => (k === 'WHY' ? why() : S[k]())).join('');
const dock = `<nav class="dock" aria-label="Quick actions"><a href="tel:${TPA.tel}">${i('phone')}Tampa</a><a href="tel:${ZEP.tel}">${i('phone')}Zephyrhills</a><a class="dk-book" href="#appointments">${i('cal')}Book</a><a href="#contact">${i('pin')}Directions</a></nav>`;

const head = `<title>Tire Tech And Auto Repair</title>
<meta name="description" content="${C.tagline}. Tires, brakes, oil changes, A/C, engine and electrical repair. 24 Hour Mobile Tire Repair. Tampa (813) 833-4914 · Zephyrhills (813) 900-3507.">
${fonts}<style>${BASE}\n/* ===== Final ===== */${css}</style>`;
const body = `${header()}
<main class="page" id="p-home">${home}</main>
${Object.entries(pages).map(([k, f]) => `<main class="page" id="p-${k}">${f()}</main>`).join('\n')}
${footer()}
${dock}
<div class="toast" id="toast"></div>
${script()}`;

const art = process.env.ART;
const out = art
  ? `${head}\n${body}`
  : `<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n${head}</head>\n<body class="d-final">\n${body}\n</body></html>`;
const file = art ? path.join(art, 'index.html') : path.join(__dirname, '..', 'index.html');
fs.writeFileSync(file, out);
console.log(file, (out.length / 1024).toFixed(0) + 'KB');

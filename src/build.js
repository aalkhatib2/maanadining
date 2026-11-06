// Builds 7 complete website designs + a gallery page.  Run: node src/build.js
const fs = require('fs');
const path = require('path');
const X = require('./parts');
const { C, IMG, i, S, pages, header, footer, script, switcher, btnBook, btnCall, TPA, ZEP, stars } = X;
const BASE = fs.readFileSync(path.join(__dirname, 'base.css'), 'utf8');
const gf = q => `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?${q}&display=swap" rel="stylesheet">`;
const meta = `<div class="hero-meta"><div>${i('shield')}24-Month/24,000 Mile Warranty</div><div>${i('truck')}24 Hour Mobile Tire Repair</div><div>${i('pin')}Tampa & Zephyrhills</div></div>`;

const designs = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'redline', name: 'Redline', blurb: 'Dark, bold and fast. Black and red pulled straight from the logo, full-photo hero, italic racing type.',
    fonts: gf('family=Barlow+Condensed:ital,wght@1,700;1,800;1,900&family=Barlow:wght@400;500;600;700'),
    css: `:root{--bg:#0b0b0d;--bg2:#141417;--card:#17171b;--text:#f4f4f5;--muted:#a1a1aa;--line:#2a2a30;--accent:#e11d2a;--fh:'Barlow Condensed',sans-serif;--fb:Barlow,sans-serif;--hw:800;--htt:uppercase;--hls:.01em;--r:6px;--br:4px;--tb-bg:#e11d2a;--hd-bg:rgba(11,11,13,.92);--mt-bg:#e11d2a;--mt-c:#fff;--cta-bg:#e11d2a;--ft-bg:#060607}
    h1,h2,h3,.big,.num,.tile,.mobile-tire b,.make b{font-style:italic}
    .mobile-tire .i{color:#fff}
    .hero{min-height:640px;display:flex;align-items:center;background:linear-gradient(100deg,rgba(11,11,13,.97) 30%,rgba(11,11,13,.55) 62%,rgba(225,29,42,.25)),var(--hero-img) center/cover}
    .hero:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:80px;background:var(--bg);clip-path:polygon(0 100%,100% 0,100% 100%)}
    .hero .wrap{position:relative;z-index:2;padding-top:80px;padding-bottom:120px;width:100%}
    .hero h1 em{color:var(--accent);font-style:italic}
    .hero .lead{color:#d4d4d8;font-weight:500}
    .slash{display:inline-block;background:var(--accent);color:#fff;font:italic 800 14px Barlow Condensed;letter-spacing:.12em;padding:6px 14px;transform:skewX(-12deg);margin-bottom:18px}
    .tiles-wrap{margin-top:-70px}
    .tile>.i:first-child{border-radius:4px;transform:skewX(-8deg)}
    .phero{background:linear-gradient(100deg,#0b0b0d 40%,rgba(225,29,42,.35)),var(--hero-img) center/cover}
    .sh h2:after,.h2:after{content:"";display:block;width:70px;height:6px;background:var(--accent);margin-top:14px;transform:skewX(-20deg)}
    .coupon{background:linear-gradient(135deg,rgba(225,29,42,.14),transparent 60%)}
    .why{background:var(--bg2)}`,
    hero: () => `<section class="hero"><div class="wrap"><span class="slash">${C.tagline}</span>
      <h1>Tampa’s tire &amp;<br>auto repair <em>experts.</em></h1>
      <p class="lead">Brakes, oil changes, tires, A/C, engine and electrical — handled by trained technicians at two locations. ${C.mobileTire}.</p>
      <div class="row">${btnBook()}${btnCall(TPA, 'Tampa ' + TPA.phone)}${btnCall(ZEP, 'Zephyrhills ' + ZEP.phone)}</div>${meta}</div></section>`,
    order: ['tiles', 'welcome', 'services', 'mobile', 'why', 'specials', 'ttt', 'recent', 'locations', 'amenities', 'cta'],
  },
  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'showroom', name: 'Showroom', blurb: 'Clean, bright and premium, like a dealership site. Lots of white space, soft shadows, rounded photos.',
    fonts: gf('family=Manrope:wght@400;500;600;700;800'),
    css: `:root{--bg:#ffffff;--bg2:#f5f6f8;--card:#fff;--text:#0b0d12;--muted:#5b6170;--line:#e6e8ec;--accent:#d7141f;--fh:Manrope,sans-serif;--fb:Manrope,sans-serif;--hw:800;--hls:-.03em;--r:22px;--br:999px;--shadow:0 10px 30px rgba(16,24,40,.07);--tb-bg:#0b0d12;--hd-bg:rgba(255,255,255,.9);--mt-bg:#0b0d12;--mt-c:#fff;--cta-bg:#0b0d12;--cta-btn:#d7141f;--cta-btn-c:#fff;--ic-bg:#fdecee;--phero-bg:#f5f6f8}
    .hero{padding:70px 0 90px;background:radial-gradient(900px 500px at 90% 10%,#fdecee,transparent 60%)}
    .hero .wrap{display:grid;grid-template-columns:1fr 1.05fr;gap:50px;align-items:center}
    .hero h1{font-size:clamp(44px,6vw,78px)}
    .hero h1 em{font-style:normal;color:var(--accent)}
    .pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:40px;background:#fff;border:1px solid var(--line);font-weight:700;font-size:13px;box-shadow:var(--shadow);margin-bottom:20px}
    .hero-img{position:relative}
    .hero-img img{border-radius:32px;aspect-ratio:1.05;object-fit:cover;object-position:62% center;box-shadow:0 30px 60px rgba(16,24,40,.18)}
    .float{position:absolute;background:#fff;border-radius:18px;padding:14px 18px;box-shadow:0 20px 40px rgba(16,24,40,.15);font-size:13px;color:var(--muted)}
    .float b{display:block;color:var(--text);font-size:16px}
    .f1{left:-30px;bottom:40px}.f2{right:-14px;top:30px}
    .tiles{gap:18px}.tile{border:0}
    .svc-home,.recent-sec,.amen-sec{background:var(--bg2)}
    .svc,.tt,.job,.loc,.am,.make{border-color:transparent}
    .coupon{border-style:solid;border-width:1px;border-color:var(--line);box-shadow:var(--shadow)}
    .coupon:before{content:"";position:absolute;left:0;top:28px;bottom:28px;width:5px;border-radius:0 6px 6px 0;background:var(--accent)}
    @media(max-width:900px){.hero .wrap{grid-template-columns:1fr}.f1{left:10px}.f2{right:10px}}`,
    hero: () => `<section class="hero"><div class="wrap"><div><span class="pill"><span class="open-badge" data-open></span>Tampa · Zephyrhills</span>
      <h1>Auto repair you can <em>actually trust.</em></h1><p class="lead">${C.tagline}. Honest, up-front estimates and a 24-Month/24,000 Mile Warranty on our work.</p>
      <div class="row">${btnBook()}<a class="btn btn-g" href="#services">Explore Services</a></div>${meta}</div>
      <div class="hero-img"><img src="${IMG.hero}" alt="Technician servicing a car"><div class="float f1">${stars(5)}<b>5-star reviews</b>from real repair orders</div><div class="float f2"><b>Lifetime Warranty</b>on brake pads &amp; shoes</div></div></div></section>`,
    order: ['tiles', 'services', 'welcome', 'specials', 'recent', 'why', 'ttt', 'mobile', 'locations', 'amenities', 'cta'],
  },
  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'workshop', name: 'Workshop', blurb: 'Industrial garage feel: diamond-plate texture, stencil type and red hazard stripes. Rugged and no-nonsense.',
    fonts: gf('family=Saira+Stencil+One&family=Saira+Condensed:wght@600;700;800&family=IBM+Plex+Mono:wght@500;600&family=Inter:wght@400;500;600;700'),
    css: `:root{--bg:#1c1d1f;--bg2:#232427;--card:#26282b;--text:#ecebe7;--muted:#a3a39d;--line:#3a3c40;--accent:#e3262f;--fh:'Saira Condensed',sans-serif;--fb:Inter,sans-serif;--hw:800;--htt:uppercase;--hls:.02em;--r:4px;--br:2px;--ir:2px;--tb-bg:#111;--tb-c:#ecebe7;--hd-bg:#151617;--mt-bg:repeating-linear-gradient(-45deg,#e3262f 0 22px,#111 22px 44px);--mt-c:#fff;--cta-bg:#111;--ft-bg:#111;--ic-bg:#1c1d1f}
    body{background-image:radial-gradient(rgba(255,255,255,.035) 1px,transparent 1px);background-size:6px 6px}
    h1,.sh h2,.h2,.phero h1,.big,.num{font-family:'Saira Stencil One',sans-serif;font-weight:400}
    .kicker{font-family:'IBM Plex Mono',monospace;letter-spacing:.06em}
    .kicker:before{content:"//";color:var(--muted)}
    .mobile-tire .wrap{background:#111;padding:16px 20px;margin:14px auto;border-radius:2px}
    .hero{background:#111;padding:0}
    .hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:0;padding:0;max-width:none}
    .hero-txt{padding:80px 50px 80px max(24px,calc((100vw - 1220px)/2 + 24px));background:linear-gradient(135deg,#1c1d1f,#111);border-right:8px solid var(--accent)}
    .hero h1{font-size:clamp(46px,6.3vw,90px)}
    .hero-img{background:var(--hero-img) 62% center/cover;filter:grayscale(.6) contrast(1.1);min-height:420px;position:relative}
    .stamp{position:absolute;right:30px;bottom:30px;border:3px solid var(--accent);color:#fff;background:rgba(17,17,17,.7);font:700 14px 'IBM Plex Mono';padding:10px 14px;transform:rotate(-4deg);text-transform:uppercase}
    .plate{font-family:'IBM Plex Mono';display:inline-block;background:var(--accent);color:#fff;padding:4px 10px;font-size:13px;margin-bottom:18px}
    .card,.tile,.am,.partners,.coupon{background:linear-gradient(180deg,#2a2c30,#232528)}
    .tile{border-left:5px solid var(--accent)}
    .coupon{border:2px dashed #e3262f;}
    .ttt .tt{border-top:5px solid var(--accent)}
    .phero{background:linear-gradient(90deg,#111 50%,transparent),var(--hero-img) center/cover;filter:grayscale(.2)}
    @media(max-width:900px){.hero .wrap{grid-template-columns:1fr}.hero-txt{padding:56px 16px;border-right:0;border-bottom:8px solid var(--accent)}.hero-img{min-height:260px}}`,
    hero: () => `<section class="hero"><div class="wrap"><div class="hero-txt"><span class="plate">BAY OPEN · ${C.hours[0].join(' ')}</span>
      <h1>Built on trust.<br>Backed by warranty.</h1><p class="lead">Full-service tire &amp; auto repair in Tampa and Zephyrhills. Brakes, engines, exhaust, A/C, electrical and tires — done right by trained technicians.</p>
      <div class="row">${btnBook()}${btnCall(TPA, 'Call Tampa')}${btnCall(ZEP, 'Call Zephyrhills')}</div>${meta}</div>
      <div class="hero-img"><div class="stamp">24-Month / 24,000 Mile Warranty</div></div></div></section>`,
    order: ['mobile', 'tiles', 'services', 'why', 'specials', 'recent', 'ttt', 'welcome', 'locations', 'amenities', 'cta'],
  },
  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'sunshine', name: 'Sunshine', blurb: 'Warm and friendly Florida neighborhood shop. Cream background, rounded shapes, coral red and teal.',
    fonts: gf('family=Poppins:wght@500;600;700;800&family=Nunito:wght@400;600;700;800'),
    css: `:root{--bg:#fffaf3;--bg2:#fff1e2;--card:#fff;--text:#2b2118;--muted:#6f6257;--line:#f0e2d2;--accent:#e63946;--accent2:#1a9e8f;--fh:Poppins,sans-serif;--fb:Nunito,sans-serif;--hw:800;--hls:-.02em;--r:26px;--br:999px;--ir:14px;--shadow:0 12px 30px rgba(120,70,20,.08);--tb-bg:#1a9e8f;--hd-bg:rgba(255,250,243,.92);--mt-bg:#1a9e8f;--mt-c:#fff;--cta-bg:#e63946;--ft-bg:#2b2118;--ic-bg:#fff1e2;--phero-bg:#fff1e2}
    .mobile-tire .i{color:#fff}
    .hero{padding:60px 0 120px;background:radial-gradient(circle at 80% 20%,#ffd6a5 0,transparent 35%),radial-gradient(circle at 10% 90%,#bde8e1 0,transparent 30%)}
    .hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
    .hero h1{font-size:clamp(44px,6vw,80px)}
    .hero h1 em{font-style:normal;color:var(--accent);position:relative;white-space:nowrap}
    .hero h1 em:after{content:"";position:absolute;left:0;right:0;bottom:4px;height:14px;background:#ffd6a5;z-index:-1;border-radius:8px}
    .wave{display:inline-block;padding:8px 16px;border-radius:40px;background:#fff;font-weight:800;color:var(--accent2);margin-bottom:18px;box-shadow:var(--shadow)}
    .blob{border-radius:58% 42% 50% 50%/48% 52% 48% 52%;overflow:hidden;aspect-ratio:1;box-shadow:0 30px 60px rgba(120,70,20,.2);border:10px solid #fff}
    .blob img{width:100%;height:100%;object-fit:cover;object-position:65% center}
    .hero:after{content:"";position:absolute;left:0;right:0;bottom:0;height:70px;background:var(--bg);border-radius:50% 50% 0 0/100% 100% 0 0}
    .tiles-wrap{margin-top:-50px}
    .tile>.i:first-child{border-radius:50%}
    .tile:nth-child(2)>.i:first-child{background:var(--accent2)}
    .tile:nth-child(3)>.i:first-child{background:#f4a261}
    .svc .ic,.svc-cat .ic{border-radius:50%}
    .coupon{border-color:var(--accent2);background:#fff}
    .coupon .big{color:var(--accent2)}
    .am .i{color:var(--accent2)}
    .why,.recent-sec{background:var(--bg2)}
    .btn-s{background:var(--accent2);color:#fff}
    @media(max-width:900px){.hero .wrap{grid-template-columns:1fr}.blob{max-width:360px;margin:0 auto}}`,
    hero: () => `<section class="hero"><div class="wrap"><div><span class="wave">👋 Your neighborhood shop in Tampa &amp; Zephyrhills</span>
      <h1>Car trouble? <em>We’ve got you.</em></h1><p class="lead">Friendly, honest tire &amp; auto repair where everyone is treated with respect. Free WiFi, coffee &amp; snacks, a courtesy shuttle and loaners while you wait.</p>
      <div class="row">${btnBook()}${btnCall(ZEP, 'Call Now For An Appointment')}</div>${meta}</div>
      <div class="blob"><img src="${IMG.why}" alt="Technician working on a tire"></div></div></section>`,
    order: ['tiles', 'welcome', 'amenities', 'services', 'specials', 'mobile', 'recent', 'why', 'ttt', 'locations', 'cta'],
  },
  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'chrome', name: 'Chrome', blurb: 'Sleek, high-end look inspired by the chrome logo: metallic text, glass cards and a red glow.',
    fonts: gf('family=Exo+2:ital,wght@0,600;0,700;0,800;1,800&family=Inter:wght@400;500;600;700'),
    css: `:root{--bg:#07090c;--bg2:#0d1117;--card:rgba(255,255,255,.04);--text:#e8ecf1;--muted:#8d97a5;--line:rgba(255,255,255,.09);--accent:#ff2d3b;--fh:'Exo 2',sans-serif;--fb:Inter,sans-serif;--hw:800;--htt:uppercase;--hls:.02em;--r:18px;--br:12px;--tb-bg:linear-gradient(90deg,#8c0d16,#ff2d3b);--hd-bg:rgba(7,9,12,.75);--mt-bg:linear-gradient(90deg,#1a1f27,#0d1117);--mt-c:#e8ecf1;--cta-bg:linear-gradient(120deg,#8c0d16,#ff2d3b);--ft-bg:#040507;--ic-bg:rgba(255,45,59,.1);--input-bg:rgba(255,255,255,.03)}
    body{background:radial-gradient(1200px 600px at 80% -10%,rgba(255,45,59,.12),transparent),var(--bg)}
    .card,.tile,.am,.partners{backdrop-filter:blur(10px)}
    .chrome,.sh h2,.h2,.phero h1{background:linear-gradient(180deg,#fff 0%,#c9d1db 45%,#6b7685 52%,#e6ebf0 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
    .hero{padding:60px 0 80px}
    .hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}
    .hero h1{font-size:clamp(46px,6.4vw,88px);font-style:italic}
    .hero .lead{color:#c3cad4;font-weight:500}
    .hero-img{position:relative;border-radius:28px;overflow:hidden;aspect-ratio:1.1;border:1px solid var(--line);box-shadow:0 0 80px rgba(255,45,59,.25)}
    .hero-img img{width:100%;height:100%;object-fit:cover;object-position:62% center}
    .hero-img:after{content:"";position:absolute;inset:0;background:linear-gradient(200deg,transparent 50%,rgba(7,9,12,.85))}
    .glass{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .glass div{background:rgba(255,255,255,.08);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:12px 14px;font-size:13px;color:#c3cad4}
    .glass b{display:block;color:#fff;font-size:15px}
    .btn-p{box-shadow:0 8px 30px rgba(255,45,59,.4)}
    .tile>.i:first-child{background:linear-gradient(135deg,#ff2d3b,#8c0d16)}
    .coupon{background:linear-gradient(135deg,rgba(255,45,59,.12),rgba(255,255,255,.02));border-style:solid;border-width:1px}
    .coupon .big{background:linear-gradient(180deg,#fff,#ff2d3b);-webkit-background-clip:text;background-clip:text;color:transparent}
    .phero{background:radial-gradient(800px 300px at 80% 0,rgba(255,45,59,.18),transparent),var(--bg2)}
    .partner{background:linear-gradient(180deg,#fff,#8d97a5);-webkit-background-clip:text;background-clip:text;color:transparent}
    @media(max-width:900px){.hero .wrap{grid-template-columns:1fr}}`,
    hero: () => `<section class="hero"><div class="wrap"><div><span class="kicker">${C.tagline}</span>
      <h1 class="chrome">Precision service.<br>Premium results.</h1><p class="lead">Computer diagnostics, engine performance, brakes, A/C and tires from highly-skilled technicians — with a 24-Month/24,000 Mile Warranty on every repair.</p>
      <div class="row">${btnBook()}<a class="btn btn-g" href="#specials">View Specials</a></div>${meta}</div>
      <div class="hero-img"><img src="${IMG.hero}" alt="Technician servicing brakes"><div class="glass"><div><b>Lifetime</b>warranty on brake pads</div><div><b>24 Hour</b>mobile tire repair</div></div></div></div></section>`,
    order: ['tiles', 'services', 'why', 'ttt', 'mobile', 'specials', 'recent', 'welcome', 'locations', 'amenities', 'cta'],
  },
  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'editorial', name: 'Editorial', blurb: 'Magazine-style layout: huge type, strict grid lines, black, white and one red. Confident and modern.',
    fonts: gf('family=Archivo:wght@400;500;600;700;800;900&family=Archivo+Narrow:wght@600;700'),
    css: `:root{--bg:#fff;--bg2:#f2f2f0;--card:#fff;--text:#0a0a0a;--muted:#545454;--line:#0a0a0a;--accent:#e10600;--fh:Archivo,sans-serif;--fb:Archivo,sans-serif;--hw:900;--htt:uppercase;--hls:-.04em;--r:0;--br:0;--ir:0;--tb-bg:#0a0a0a;--hd-bg:#fff;--mt-bg:#e10600;--mt-c:#fff;--cta-bg:#0a0a0a;--cta-btn:#e10600;--cta-btn-c:#fff;--ft-bg:#0a0a0a;--ic-bg:#fff;--phero-bg:#fff}
    .mobile-tire .i{color:#fff}
    .hd{border-bottom:2px solid #000}
    .nv a{text-transform:uppercase;font-size:13px;letter-spacing:.06em;font-weight:800;border-radius:0}
    .kicker{color:var(--text);font-family:'Archivo Narrow'}
    .kicker:before{content:"";width:22px;height:3px;background:var(--accent)}
    .hero{padding:50px 0 0;border-bottom:2px solid #000}
    .hero h1{font-size:clamp(54px,11vw,170px);line-height:.86}
    .hero h1 span{color:var(--accent)}
    .hero-grid{display:grid;grid-template-columns:2fr 1fr 1fr;border-top:2px solid #000;margin-top:40px}
    .hero-grid>div{padding:24px;border-right:2px solid #000}
    .hero-grid>div:last-child{border-right:0}
    .hero-grid b{display:block;font:900 30px Archivo;text-transform:uppercase;letter-spacing:-.03em}
    .hero-strip{height:340px;background:var(--hero-img) center 40%/cover;border-top:2px solid #000;filter:grayscale(1) contrast(1.15)}
    .hero-strip:hover{filter:none;transition:.6s}
    .card,.tile,.am,.partners,.chip,.svc-jump a,.tiplist li,.pay span,.social a{border:2px solid #000;border-radius:0;box-shadow:none}
    .tile>.i:first-child{border-radius:0}
    .svc:hover,.tile:hover{background:#000;color:#fff;transform:none}
    .svc:hover p{color:#ccc}
    .sh{border-top:2px solid #000;padding-top:16px;max-width:none}
    section>.wrap>.sh{display:grid;grid-template-columns:200px 1fr;gap:0 20px}
    section>.wrap>.sh .kicker{grid-row:span 3;align-self:start}
    .sh h2{font-size:clamp(34px,5.5vw,72px)}
    .coupon{border:2px solid #000;background:#fff}
    .coupon:nth-child(2){background:#000;color:#fff}.coupon:nth-child(2) p,.coupon:nth-child(2) .exp{color:#ddd!important}
    .coupon .btn-g{border-color:currentColor;color:inherit}
    .tt .num{font-size:90px;color:#000;-webkit-text-stroke:0}
    .phero{border-bottom:2px solid #000}
    .phero h1{font-size:clamp(38px,9vw,130px);line-height:.9}
    .media img{filter:grayscale(1)}
    .ticks .i{border-radius:0}
    @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-grid>div{border-right:0;border-bottom:2px solid #000}section>.wrap>.sh{grid-template-columns:1fr}.hero-strip{height:220px}}`,
    hero: () => `<section class="hero"><div class="wrap"><span class="kicker">Tire Tech And Auto Repair Inc. — Zephyrhills &amp; Tampa, FL</span>
      <h1>Tires.<br>Brakes.<br><span>Trust.</span></h1>
      <div class="hero-grid"><div><p class="lead">${C.tagline}. Two shops, trained technicians, honest estimates.</p><div class="row">${btnBook()}<a class="btn btn-g" href="#services">All Services</a></div></div>
      <div><b>24/24</b><p>24-Month / 24,000 Mile Warranty</p></div><div><b>24 HR</b><p>Mobile Tire Repair</p></div></div></div>
      <div class="hero-strip" role="img" aria-label="Technician servicing a car"></div></section>`,
    order: ['tiles', 'services', 'welcome', 'ttt', 'specials', 'mobile', 'why', 'recent', 'locations', 'amenities', 'cta'],
  },
  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'quickbook', name: 'Quick Book', blurb: 'Built to get calls and bookings. Phone-first, with a location picker, open/closed status and a sticky call/book/directions bar.',
    fonts: gf('family=Plus+Jakarta+Sans:wght@400;500;600;700;800'),
    css: `:root{--bg:#f3f5f9;--bg2:#e9edf4;--card:#fff;--text:#0f172a;--muted:#5b6478;--line:#e2e7ef;--accent:#dc2626;--navy:#0f172a;--fh:'Plus Jakarta Sans',sans-serif;--fb:'Plus Jakarta Sans',sans-serif;--hw:800;--hls:-.03em;--r:20px;--br:14px;--ir:12px;--shadow:0 6px 20px rgba(15,23,42,.06);--tb-bg:#0f172a;--hd-bg:rgba(255,255,255,.95);--mt-bg:#0f172a;--mt-c:#fff;--cta-bg:#0f172a;--cta-btn:#dc2626;--cta-btn-c:#fff;--ft-bg:#0f172a;--ic-bg:#fee2e2;--phero-bg:#0f172a;--input-bg:#fff}
    .phero{color:#fff}.phero p,.phero .crumbs{color:#cbd5e1}
    .hero{background:linear-gradient(180deg,#0f172a,#1e293b);color:#fff;padding:50px 0 110px}
    .hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
    .hero h1{font-size:clamp(40px,5.5vw,70px)}
    .hero .lead{color:#cbd5e1;font-weight:500}
    .hero .hero-meta{color:#cbd5e1}
    .book{background:#fff;color:var(--text);border-radius:24px;padding:24px;box-shadow:0 30px 60px rgba(0,0,0,.35)}
    .book h3{font-size:22px;margin-bottom:4px}
    .seg{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:var(--bg);padding:5px;border-radius:14px;margin:16px 0}
    .seg button{border:0;background:none;padding:11px;border-radius:10px;font:700 14px var(--fb);color:var(--muted);cursor:pointer}
    .seg button.on{background:#fff;color:var(--text);box-shadow:var(--shadow)}
    .lp{display:none}.lp.on{display:block}
    .lp p{color:var(--text);font-weight:600;margin:0 0 6px!important;display:flex;gap:8px;align-items:center}
    .lp .i{color:var(--accent)}
    .big-btns{display:grid;gap:8px;margin-top:16px}
    .big-btns .btn{padding:16px;font-size:16px;width:100%}
    .tiles-wrap{margin-top:-60px}
    .dock{display:none}
    @media(max-width:900px){.hero .wrap{grid-template-columns:1fr}}
    @media(max-width:640px){.dock{display:grid;grid-template-columns:repeat(3,1fr);position:fixed;left:0;right:0;bottom:0;z-index:150;background:#fff;border-top:1px solid var(--line);box-shadow:0 -10px 30px rgba(15,23,42,.12)}
      .dock a{display:flex;flex-direction:column;align-items:center;gap:3px;padding:10px 4px 12px;font-size:12px;font-weight:800}
      .dock a:nth-child(2){background:var(--accent);color:#fff}
      .dock .i{width:22px;height:22px}
      .ds-bar{bottom:78px}body{padding-bottom:140px}}`,
    hero: () => `<section class="hero"><div class="wrap"><div><span class="kicker" style="color:#fca5a5">${C.tagline}</span>
      <h1>Get back on the road — fast.</h1><p class="lead">Book online in under a minute or call the shop nearest you. ${C.mobileTire}.</p>${meta}</div>
      <div class="book"><h3>Choose your shop</h3><p>We’ll confirm your time by phone.</p>
        <div class="seg"><button class="on" onclick="pick(0,this)">Tampa</button><button onclick="pick(1,this)">Zephyrhills</button></div>
        ${C.locations.map((l, n) => `<div class="lp ${n ? '' : 'on'}"><p>${i('pin')}${l.street}, ${l.csz}</p><p>${i('clock')}Mon-Fri 9am-6pm · Sat 9am-5pm <span class="open-badge" data-open></span></p>
          <div class="big-btns"><a class="btn btn-p" href="#appointments">${i('cal')}Schedule Appointment</a><a class="btn btn-s" href="tel:${l.tel}">${i('phone')}Call ${l.phone}</a><a class="btn btn-g" href="${l.map}" target="_blank" rel="noopener">${i('pin')}Get Directions</a></div></div>`).join('')}
      </div></div></section>
      <script>function pick(n,b){document.querySelectorAll('.seg button').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.querySelectorAll('.lp').forEach((p,i)=>p.classList.toggle('on',i===n))}</script>`,
    extra: () => `<nav class="dock"><a href="tel:${TPA.tel}">${i('phone')}Call</a><a href="#appointments">${i('cal')}Book</a><a href="${TPA.map}" target="_blank" rel="noopener">${i('pin')}Directions</a></nav>`,
    order: ['tiles', 'specials', 'services', 'mobile', 'recent', 'locations', 'amenities', 'why', 'ttt', 'welcome', 'cta'],
  },
];

const KEEP = ['redline', 'showroom', 'quickbook'];
designs.splice(0, designs.length, ...designs.filter(d => KEEP.includes(d.slug)));
designs.forEach((d, n) => { d.file = `${n + 1}-${d.slug}.html`; });
const outDir = process.env.ART ? path.join(process.env.ART, 'designs') : path.join(__dirname, '..', 'designs');
fs.mkdirSync(outDir, { recursive: true });

designs.forEach((d, n) => {
  const home = d.hero() + d.order.map(k => S[k]()).join('');
  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tire Tech And Auto Repair Inc. | Auto Repair Tampa &amp; Zephyrhills, FL</title>
<meta name="description" content="${C.tagline}. Tires, brakes, oil changes, A/C, engine and electrical repair. 24 Hour Mobile Tire Repair. Call (813) 833-4914.">
${d.fonts}<style>:root{--hero-img:url(${IMG.hero})}\n${BASE}\n/* ===== ${d.name} ===== */\n${d.css}</style></head>
<body class="d-${d.slug}">
${header(d)}
<main class="page" id="p-home">${home}</main>
${Object.entries(pages).map(([k, f]) => `<main class="page" id="p-${k}">${f()}</main>`).join('\n')}
${footer()}
${d.extra ? d.extra() : ''}
${switcher(n, designs)}
<div class="toast" id="toast"></div>
${script()}
</body></html>`;
  fs.writeFileSync(path.join(outDir, d.file), html);
  console.log(d.file, (html.length / 1024).toFixed(0) + 'KB');
});

// gallery
const gallery = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tire Tech Website Designs</title>${gf('family=Inter:wght@400;600;800')}
<style>:root{--bg:#0d0e10;--card:#17181b;--t:#f3f4f6;--m:#9ca3af;--l:#2a2c31;--a:#e11d2a}
*{box-sizing:border-box;margin:0;padding:0}body{background:var(--bg);color:var(--t);font-family:Inter,sans-serif;padding:48px 20px 80px}
.w{max-width:1240px;margin:0 auto}img.logo{height:64px;margin-bottom:22px}h1{font-size:clamp(32px,5vw,52px);font-weight:800;letter-spacing:-.03em}
.sub{color:var(--m);max-width:760px;margin:10px 0 34px;font-size:17px;line-height:1.6}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:22px}
.c{background:var(--card);border:1px solid var(--l);border-radius:18px;overflow:hidden;transition:.2s;display:flex;flex-direction:column}
.c:hover{border-color:var(--a);transform:translateY(-4px)}
.c .shot{aspect-ratio:16/10;background:#000 center top/cover;border-bottom:1px solid var(--l)}
.c .b{padding:18px 20px 22px;flex:1;display:flex;flex-direction:column}
.c h2{font-size:22px;font-weight:800;display:flex;gap:10px;align-items:center}
.c h2 span{font-size:12px;background:var(--a);color:#fff;border-radius:6px;padding:3px 8px}
.c p{color:var(--m);font-size:14px;line-height:1.55;margin:8px 0 14px;flex:1}
.c .go{display:flex;gap:8px}.c .go a{flex:1;text-align:center;padding:10px;border-radius:10px;font-weight:700;font-size:14px;background:var(--t);color:#111;text-decoration:none}
.c .go a+a{background:transparent;color:var(--t);border:1px solid var(--l)}
.inv{margin-top:48px;background:var(--card);border:1px solid var(--l);border-radius:18px;padding:26px}
.inv h3{font-size:20px;margin-bottom:12px}.inv ul{columns:3 240px;color:var(--m);font-size:14px;line-height:1.9;padding-left:18px}
</style></head><body><div class="w">
<img class="logo" src="${IMG.logo}" alt="Tire Tech & Auto Repair">
<h1>3 website designs for Tire Tech &amp; Auto Repair</h1>
<p class="sub">Every design is a complete website with all 7 pages and everything on the current site. Click a design to open it, use the menu to move between pages, and use the bar at the bottom to switch designs.</p>
<div class="g">${designs.map((d, n) => `<a class="c" href="designs/${d.file}" style="text-decoration:none;color:inherit"><div class="shot" style="background-image:url(shots/${d.slug}.jpg)"></div><div class="b"><h2><span>${n + 1}</span>${d.name}</h2><p>${d.blurb}</p><div class="go"><span style="flex:1;text-align:center;padding:10px;border-radius:10px;font-weight:700;font-size:14px;background:#f3f4f6;color:#111">Open design →</span></div></div></a>`).join('')}</div>
<div class="inv"><h3>Included in every design (carried over from the current site)</h3><ul>
<li>Pages: Home, Services, Appointments, Specials, Reviews, Contact, Vehicles Serviced</li><li>Both locations: Tampa (10867 Cross Creek Blvd, (813) 833-4914) &amp; Zephyrhills (6437 23rd St, (813) 900-3507)</li>
<li>Hours: Mon-Fri 9am-6pm · Sat 9am-5pm · Sun closed, plus live open/closed status</li><li>24 Hour Mobile Tire Repair</li><li>Full services catalog: all 6 categories and every listed service</li>
<li>3 coupons: Free Tire Rotation, Free Brake Inspection, 10% Off Maintenance &amp; Repair (exp 2/4/2027)</li><li>Warranties: 24-Month/24,000 Mile and Lifetime Brake Pads &amp; Shoes</li>
<li>Amenities: Free WiFi, Courtesy Shuttle, Coffee &amp; Snacks, Loaners</li><li>Shop partner: Bridgestone</li><li>Trust / Talent / Time and the 3Rs of Auto Repair</li>
<li>Recently serviced vehicles with their real 5-star reviews</li><li>All 52 vehicle makes serviced, with search</li><li>Appointment request form + link to the current Mitchell1 booking system</li>
<li>Estimates articles, money-saving tips and all page copy</li><li>Contact form (name, email, subject, message) + Google Maps for both shops</li><li>Social: SureCritic, Facebook, Yelp, Google · Payments: Visa, MasterCard, Discover, AmEx, Check</li></ul></div>
</div></body></html>`;
fs.writeFileSync(path.join(__dirname, '..', 'index.html'), gallery);
fs.writeFileSync(path.join(__dirname, 'designs.json'), JSON.stringify(designs.map(d => ({ slug: d.slug, file: d.file, name: d.name }))));
console.log('index.html written');

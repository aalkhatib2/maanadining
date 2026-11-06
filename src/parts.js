// Shared page structure. Every design renders all of these pages and sections.
const C = require('./content');
const fs = require('fs');
const path = require('path');

const b64 = f => fs.readFileSync(path.join(__dirname, '..', 'assets', f)).toString('base64');
const IMG = {
  logo: 'data:image/png;base64,' + b64('logo.png'),
  hero: 'data:image/jpeg;base64,' + b64('hero-sm.jpg'),
  why: 'data:image/jpeg;base64,' + b64('why-sm.jpg'),
};

const P = {
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  engine: '<path d="M4 10h2V8h3V6h6v2h2l2 3h2v5h-2l-2 3H9l-2-2H4z"/><path d="M1 12h3"/>',
  snow: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  exhaust: '<path d="M2 14h12a3 3 0 0 0 0-6H8"/><circle cx="18" cy="14" r="3"/><path d="M22 10c1 1 1 6 0 8"/>',
  tire: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/>',
  wifi: '<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0"/><circle cx="12" cy="20" r="1"/>',
  shuttle: '<rect x="2" y="5" width="20" height="12" rx="2"/><path d="M2 11h20M7 17v2M17 17v2"/>',
  coffee: '<path d="M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
  key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m11.5 11.5 10-10M18 5l3 3M15 8l2 2"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  car: '<path d="M5 17h14v-5l-2-5H7l-2 5z"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M5 12h14"/>',
  truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
};
const i = (k, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[k]}</svg>`;
const stars = n => `<span class="stars" aria-label="${n} stars">${'★'.repeat(n)}</span>`;
const [TPA, ZEP] = C.locations;

// ---------- small reusable pieces ----------
const btnBook = (t = 'Schedule Appointment') => `<a class="btn btn-p" href="#appointments">${i('cal')}${t}</a>`;
const btnCall = (l = ZEP, t) => `<a class="btn btn-s" href="tel:${l.tel}">${i('phone')}${t || l.phone}</a>`;
const hoursList = () => `<ul class="hours">${C.hours.map(([d, h]) => `<li><span>${d}</span><b>${h}</b></li>`).join('')}</ul>`;
const locCard = (l, map = false) => `
  <div class="loc card">
    <div class="loc-h"><span class="kicker">${l.city} Location</span><span class="open-badge" data-open></span></div>
    <h3>${C.name}</h3>
    <p class="addr">${i('pin')}<span>${l.street}<br>${l.csz}</span></p>
    <p class="addr">${i('phone')}<a href="tel:${l.tel}">${l.phone}</a></p>
    <div class="loc-hours"><span class="kicker">${i('clock')}Shop Hours</span>${hoursList()}</div>
    ${map ? (process.env.ART ? `<a class="map map-link" href="${l.map}" target="_blank" rel="noopener">${i('pin')}<span><b>${l.street}, ${l.csz}</b>Open in Google Maps</span></a>` : `<div class="map"><iframe loading="lazy" title="Map of ${l.city} location" src="${l.embed}"></iframe></div>`) : ''}
    <div class="row">${btnBook()}<a class="btn btn-s" href="${l.map}" target="_blank" rel="noopener">${i('pin')}Directions</a><a class="btn btn-g" href="#contact">Contact Us</a></div>
  </div>`;
const social = () => `<div class="social">${C.social.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join('')}</div>`;
const mobileBanner = () => `<div class="mobile-tire"><div class="wrap">${i('truck')}<b>${C.mobileTire}</b><a class="btn btn-p" href="tel:${ZEP.tel}">${i('phone')}Call ${ZEP.phone}</a></div></div>`;
const pageHero = (title, crumb, sub = '') => `<div class="phero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a> / ${crumb}</div><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div></div>`;
const sec = (cls, inner) => `<section class="${cls}"><div class="wrap">${inner}</div></section>`;
const head = (kicker, title, p = '') => `<div class="sh"><span class="kicker">${kicker}</span><h2>${title}</h2>${p ? `<p>${p}</p>` : ''}</div>`;

const quickTiles = () => `
  <div class="tiles">
    <a class="tile" href="#appointments">${i('cal')}<span><small>Schedule</small>Appointment</span>${i('arrow', 'go')}</a>
    <a class="tile" href="#specials">${i('tag')}<span><small>Money Saving</small>Promotions</span>${i('arrow', 'go')}</a>
    <a class="tile" href="#reviews">${i('star')}<span><small>Customers</small>Reviews</span>${i('arrow', 'go')}</a>
  </div>`;

const recentCard = r => `
  <article class="job card">
    <div class="job-h">${i('car')}<div><h4>${r.car}</h4><small>${r.miles} mi · Serviced ${r.date}</small></div></div>
    <ul class="job-w">${r.work.map(w => `<li>${w}</li>`).join('')}</ul>
    <p class="job-r">${stars(5)} <b>${r.who}</b> gave our service a 5 star review on ${r.rdate}</p>
  </article>`;

// ---------- home sections ----------
const S = {
  tiles: () => `<div class="wrap tiles-wrap">${quickTiles()}</div>`,
  mobile: mobileBanner,
  welcome: () => sec('welcome', `
    <div class="split">
      <div>${head('Welcome', C.welcome.title)}<p class="lead">${C.tagline}</p>${C.welcome.p.map(p => `<p>${p}</p>`).join('')}
        <div class="row">${btnBook()}${btnCall(ZEP, 'Call Now For An Appointment')}</div></div>
      <div class="media"><img src="${IMG.why}" alt="Tire Tech technician mounting a tire"></div>
    </div>`),
  services: () => sec('svc-home', `
    ${head('Services', 'Complete & Reliable Auto Service', 'Brakes, oil, tires, exhaust, engine, A/C and electrical — if you don’t see the service you’re looking for, just ask!')}
    <div class="svc-grid">${C.services.map(s => `<a class="svc card" href="#services">${i(s.icon, 'ic')}<h3>${s.title}</h3><p>${s.items.slice(0, 4).join(' · ')}</p><span class="more">See all ${i('arrow')}</span></a>`).join('')}</div>
    <div class="quick">${C.quickServices.map(q => `<span class="chip">${q}</span>`).join('')}<a class="btn btn-g" href="#services">See All Services ${i('arrow')}</a></div>`),
  locations: () => sec('locs-sec', `${head('Locations', 'Tire Tech and Auto Repair Inc. Locations Serving the Tampa Area')}<div class="locs">${C.locations.map(l => locCard(l)).join('')}</div>`),
  amenities: () => sec('amen-sec', `
    <div class="amen-row">
      <div>${head('Shop Amenities', 'Comfort while you wait')}<div class="amen">${C.amenities.map(([k, t]) => `<div class="am">${i(k)}<span>${t}</span></div>`).join('')}</div></div>
      <div class="partners"><span class="kicker">Shop Partners</span><div class="partner">BRIDGESTONE</div><span class="kicker">We accept</span><div class="pay">${C.payments.map(p => `<span>${p}</span>`).join('')}</div></div>
    </div>`),
  why: () => sec('why', `
    <div class="split rev">
      <div class="media"><img src="${IMG.hero}" alt="Technician servicing brakes on a lifted car"></div>
      <div>${head('Why Choose Us', C.why.title)}${C.why.p.map(p => `<p>${p}</p>`).join('')}
        <ul class="ticks">${C.why.bullets.map(b => `<li>${i('check')}${b}</li>`).join('')}</ul></div>
    </div>`),
  ttt: () => sec('ttt-sec', `${head('What sets us apart', C.ttt.title, C.ttt.intro)}<div class="ttt">${C.ttt.items.map(([t, p], n) => `<div class="tt card"><span class="num">0${n + 1}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}</div>`),
  recent: () => sec('recent-sec', `${head('Recently Serviced Vehicles', 'Real jobs. Real 5-star reviews.')}<div class="jobs">${C.recent.slice(0, 6).map(recentCard).join('')}</div><div class="center"><a class="btn btn-g" href="#reviews">Read more reviews ${i('arrow')}</a></div>`),
  specials: () => sec('spec-home', `${head('Specials & Coupons', 'Money Saving Promotions')}${coupons()}`),
  cta: () => `<section class="cta"><div class="wrap"><div><h2>Call Now For An Appointment</h2><p>${C.mobileTire}.</p></div><div class="row">${btnBook()}${btnCall(TPA, 'Tampa ' + TPA.phone)}${btnCall(ZEP, 'Zephyrhills ' + ZEP.phone)}</div></div></section>`,
};

const coupons = () => `<div class="coupons">${C.coupons.map(c => `
  <div class="coupon"><span class="kicker">Coupon</span><div class="big">${c.big}</div><h3>${c.title}</h3><p>${C.couponFine}</p><p class="exp">${i('clock')}${C.couponExp}</p>
  <div class="row"><a class="btn btn-p" href="#appointments">Redeem</a>${process.env.ART ? '' : '<button class="btn btn-g" onclick="window.print()">Print</button>'}</div></div>`).join('')}</div>`;

// ---------- pages ----------
const pages = {
  services: () => `${pageHero('Services', 'Services', C.servicesIntro.p)}
    ${mobileBanner()}
    ${sec('svc-page', `<h2 class="h2">${C.servicesIntro.title}</h2>
      <nav class="svc-jump">${C.services.map((s, n) => `<a href="#services" data-jump="svc-${n}">${i(s.icon)}${s.title}</a>`).join('')}</nav>
      ${C.services.map((s, n) => `<article class="svc-cat card" id="svc-${n}"><div class="svc-cat-h">${i(s.icon, 'ic')}<h3>${s.title}</h3></div><p>${s.p}</p><ul class="svc-items">${s.items.map(x => `<li>${i('check')}${x}</li>`).join('')}</ul><div class="row">${btnBook('Book ' + s.title)}</div></article>`).join('')}
      <div class="note card"><h3>${C.servicesIntro.outroTitle}</h3><p>${C.servicesIntro.outro}</p><div class="row">${btnBook()}<a class="btn btn-g" href="#contact">Contact Us</a></div></div>`)}`,
  appointments: () => `${pageHero('Appointments', 'Appointments', 'Request an appointment or an honest, up-front estimate.')}
    ${sec('appt', `<div class="appt-grid">
      <div class="card appt-form"><h2 class="h2">${C.appt.title}</h2><p>${C.appt.p}</p>
        <form onsubmit="event.preventDefault();toast('Request sent — we will call to confirm your time.');this.reset()">
          <div class="fg"><label>Location<select required><option>Tampa — 10867 Cross Creek Blvd</option><option>Zephyrhills — 6437 23rd St</option></select></label>
          <label>Service<select>${C.quickServices.slice(0, 6).map(q => `<option>${q}</option>`).join('')}<option>24 Hour Mobile Tire Repair</option><option>Estimate / Quote only</option><option>Other</option></select></label>
          <label>First name<input required></label><label>Last name<input required></label>
          <label>Phone<input type="tel" required></label><label>Email<input type="email"></label>
          <label>Year / Make / Model<input placeholder="e.g. 2020 Chevrolet Equinox"></label><label>Preferred date<input type="date"></label>
          <label class="full">What’s going on with your vehicle?<textarea rows="3" placeholder="Tell us anything you’ve seen, heard or felt that is different."></textarea></label>
          <label class="full chk"><input type="checkbox"> I need drop-off instructions or transportation assistance (courtesy shuttle / loaner)</label></div>
          <button class="btn btn-p">${i('cal')}Request Appointment</button>
          <p class="small">Prefer the current booking system? <a href="${C.appt.widget}" target="_blank" rel="noopener">Open the Mitchell1 appointment request</a>.</p>
        </form></div>
      <aside class="appt-side">${C.locations.map(l => `<div class="card mini-loc"><span class="kicker">${l.city} Location</span><b>${l.street}</b><span>${l.csz}</span><a href="tel:${l.tel}">${i('phone')}${l.phone}</a></div>`).join('')}<div class="card mini-loc"><span class="kicker">Hours</span>${hoursList()}</div></aside>
    </div>`)}
    ${sec('estimates', `<div class="articles">${C.estimates.map(([h, p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`)}`,
  specials: () => `${pageHero('Specials & Coupons', 'Specials & Coupons', C.specialsIntro.p)}
    ${sec('spec-page', `<h2 class="h2">${C.specialsIntro.title}</h2>${coupons()}`)}
    ${sec('tips', `<div class="split top"><div><h2 class="h2">${C.tipsTitle}</h2><p>${C.tipsIntro}</p></div><ol class="tiplist">${C.tips.map(t => `<li>${t}</li>`).join('')}</ol></div>
      <div class="articles two">${C.specialsMore.map(([h, p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`)}`,
  reviews: () => `${pageHero('Reviews', 'Reviews', C.reviewsPage.sub)}
    ${sec('rev-page', `<div class="split top"><div><h2 class="h2">${C.reviewsPage.title}</h2>${C.reviewsPage.p.map(p => `<p>${p}</p>`).join('')}</div><div class="card surecritic"><span class="kicker">Verified reviews</span>${stars(5)}<p>Every review on this page comes from a real repair order through SureCritic.</p><a class="btn btn-p" href="${C.social[0][1]}" target="_blank" rel="noopener">Read more reviews at SureCritic</a>${social()}</div></div>
      <div class="jobs">${C.recent.map(recentCard).join('')}</div>`)}
    ${sec('rrr-sec', `${head('Our promise', C.reviewsPage.rrrTitle, C.reviewsPage.rrrIntro)}<div class="ttt">${C.reviewsPage.rrr.map(([t, p], n) => `<div class="tt card"><span class="num">R${n + 1}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}</div>
      <div class="note card"><h3>${C.reviewsPage.loyaltyTitle}</h3><p>${C.reviewsPage.loyalty}</p><p>${C.reviewsPage.outro}</p>${btnBook('Make an appointment today')}</div>`)}`,
  contact: () => `${pageHero('Contact', 'Contact', C.contactPage.p)}
    ${sec('contact', `<div class="contact-grid">
      <div class="card"><h2 class="h2">${C.contactPage.title}</h2><p>${C.contactPage.p}</p>
        <form onsubmit="event.preventDefault();toast('Thanks! Your message was sent.');this.reset()"><div class="fg">
        <label>First name *<input required></label><label>Last name *<input required></label>
        <label class="full">Email *<input type="email" required></label><label class="full">Subject *<input required></label>
        <label class="full">Message *<textarea rows="5" required></textarea></label></div>
        <button class="btn btn-p">${i('mail')}Send Message</button></form></div>
      <div class="stack">${C.locations.map(l => locCard(l, true)).join('')}</div></div>
      <div class="articles two">${C.contactPage.more.map(([h, p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`)}`,
  vehicles: () => `${pageHero('Vehicles Serviced', 'Vehicles Serviced', 'We service and repair all makes and models — domestic, Asian and European, cars and trucks.')}
    ${sec('makes-sec', `<input class="make-search" placeholder="Search your make…" oninput="filterMakes(this.value)"><div class="makes">${C.makes.map(m => `<div class="make card" data-m="${m.toLowerCase()}"><b>${m}</b><small>We service and repair all ${m} vehicles</small></div>`).join('')}</div>`)}
    ${sec('recent-sec', `${head('Recently Serviced Vehicles', 'Recent work from our bays')}<div class="jobs">${C.recent.map(recentCard).join('')}</div>`)}`,
};

const header = (d) => `
  <div class="tb"><div class="wrap">
    <span class="tb-m">${i('truck')}${C.mobileTire}</span>
    <span class="tb-l"><a href="tel:${TPA.tel}">${i('phone')}Tampa ${TPA.phone}</a><a href="tel:${ZEP.tel}">${i('phone')}Zephyrhills ${ZEP.phone}</a></span>
  </div></div>
  <header class="hd"><div class="wrap">
    <a class="logo" href="#home"><img src="${IMG.logo}" alt="Tire Tech & Auto Repair"></a>
    <nav class="nv" id="nv">${C.nav.map(([k, t]) => `<a href="#${k}" data-p="${k}">${t}</a>`).join('')}<a class="btn btn-p nv-cta" href="#appointments">Book Now</a></nav>
    <div class="hd-r"><a class="btn btn-p" href="#appointments">${i('cal')}<span>Schedule</span></a><button class="burger" aria-label="Menu" onclick="document.getElementById('nv').classList.toggle('open')">${i('menu')}</button></div>
  </div></header>`;

const footer = () => `
  <footer class="ft"><div class="wrap">
    <div class="ft-cols">
      <div><img class="ft-logo" src="${IMG.logo}" alt="Tire Tech & Auto Repair"><p>${C.tagline}.</p>${social()}</div>
      <div><h5>Services</h5><ul>${C.quickServices.map(q => `<li><a href="#services">${q}</a></li>`).join('')}</ul><a href="#services" class="ft-more">See All Services</a></div>
      ${C.locations.map(l => `<div><h5>${l.city}</h5><p>${C.name}<br>${l.street}<br>${l.csz}<br><a href="tel:${l.tel}">${l.phone}</a></p><p class="ft-links"><a href="#appointments">Schedule Appointment</a> · <a href="#contact">Contact Us</a></p></div>`).join('')}
      <div><h5>Hours</h5>${hoursList()}<h5 class="mt">We accept</h5><p>${C.payments.join(' · ')}</p></div>
    </div>
    <div class="ft-b"><span>© 2026 ${C.name} · All Rights Reserved</span><span><a href="#home">Sitemap</a> · <a href="#contact">Privacy Policy</a></span></div>
  </div></footer>`;

const script = (designIdx, total, names) => `
<script>
function route(){const p=(location.hash||'#home').slice(1);const id=document.getElementById('p-'+p)?p:'home';
 document.querySelectorAll('.page').forEach(x=>x.classList.toggle('show',x.id==='p-'+id));
 document.querySelectorAll('[data-p]').forEach(a=>a.classList.toggle('on',a.dataset.p===id));
 document.getElementById('nv').classList.remove('open');window.scrollTo(0,0);}
addEventListener('hashchange',route);route();
document.addEventListener('click',e=>{const j=e.target.closest('[data-jump]');if(j){e.preventDefault();document.getElementById(j.dataset.jump).scrollIntoView({behavior:'smooth',block:'start'})}});
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function filterMakes(v){v=v.toLowerCase();document.querySelectorAll('.make').forEach(m=>m.style.display=m.dataset.m.includes(v)?'':'none')}
(function(){try{const now=new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}));const d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
 const open=(d>=1&&d<=5&&h>=9&&h<18)||(d===6&&h>=9&&h<17);
 document.querySelectorAll('[data-open]').forEach(e=>{e.textContent=open?'Open now':'Closed now';e.classList.add(open?'is-open':'is-closed')});}catch(e){}})();
</script>`;

const switcher = (idx, designs) => `
  <div class="ds-bar"><a href="${process.env.ART ? '../' : '../index.html'}" title="All designs">All designs</a>
  <a href="${designs[(idx + designs.length - 1) % designs.length].file}" aria-label="Previous design">‹</a>
  <span>${idx + 1}/${designs.length} · ${designs[idx].name}</span>
  <a href="${designs[(idx + 1) % designs.length].file}" aria-label="Next design">›</a></div>`;

module.exports = { C, IMG, i, stars, S, pages, header, footer, script, switcher, btnBook, btnCall, mobileBanner, TPA, ZEP, quickTiles };

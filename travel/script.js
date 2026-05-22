/* ===================================================
   VOYANCE — App JS
   =================================================== */

// ---------------------- DATA ----------------------
const PROMO_ITEMS = [
  'Enjoy Family Holiday Packages with Flexible Payment Options',
  'Free cancellation on most tours · Book today, pay later',
  'Now boarding — Spring departures from $389. Limited seats.',
  'Worldwide deals every Friday · Subscribe to The Dispatch',
];

const HERO_SLIDES = [
  { title: 'Your Gateway To The World.', subtitle: 'Ideal for explorers seeking seamless booking and expert travel support every step of the way.' },
  { title: 'Where Stories Begin.', subtitle: 'Hand-picked routes designed with locals who know every shortcut, secret, and best sunset spot.' },
  { title: 'Travel That Feels Yours.', subtitle: 'From the first hello to the last airport hug, a single trip designer is with you every step of the way.' },
];

const POPULAR = [
  { id:1, title:'Culture & Cuisine Discovery', location:'Saudi Arabia', duration:'02 Hours', price:65, img:'img-4', tags:['Solo Tour'], dots:3, activeDot:2 },
  { id:2, title:'Vatican & Christian Heritage', location:'Qatar', duration:'5 Days / 6 Nights', price:380, img:'img-7', tags:['Family Tour'] },
  { id:3, title:'Norway Northern Lights', location:'United Kingdom', duration:'5 Days / 6 Nights', price:599, img:'img-11', tags:['Group Tour'] },
  { id:4, title:'Coastal Sunset Sailing', location:'Greece', duration:'4 Days / 3 Nights', price:420, img:'img-2', tags:['Family Tour'] },
  { id:5, title:'Sahara Desert Crossing', location:'Morocco', duration:'6 Days / 5 Nights', price:540, img:'img-5', tags:['Group Tour'] },
  { id:6, title:'Alpine Wellness Retreat', location:'Switzerland', duration:'4 Days / 3 Nights', price:720, img:'img-3', tags:['Solo Tour'] },
];

const TOP_DESTINATIONS = [
  { name:'Jordan', tours:'01', img:'img-4' },
  { name:'Qatar', tours:'02', img:'img-11' },
  { name:'Oman', tours:'00', img:'img-2' },
  { name:'Saudi Arabia', tours:'02', img:'img-1' },
  { name:'Egypt', tours:'03', img:'img-5' },
  { name:'Greece', tours:'02', img:'img-12' },
];

const ONE_DAY_TRIPS = [
  { id:1, title:'The French Alps Adventure', locations:['Australia','Jamaica'], duration:'8 Days / 7 Nights', price:580, img:'img-2', tags:['Adventure Tour','Featured'] },
  { id:2, title:'Loire Valley & Central France', locations:['Saudi Arabia'], duration:'5 Days / 4 Nights', price:488, img:'img-7', tags:['Group Tour','Featured'] },
  { id:3, title:'Kiwi Adventures Await', locations:['New Zealand','Canada'], duration:'5 Days / 4 Nights', price:449, original:780, img:'img-11', tags:['Adventure Tour','Sale on!'] },
];

const LAST_MINUTE = [
  { id:1, title:'Culture & Cuisine Discovery', location:'Saudi Arabia', duration:'02 Hours', price:65, img:'img-4', tags:['Solo Tour'], dots:3, activeDot:0 },
  { id:2, title:'Art, Music & Heritage Tour', location:'Arab Emirates', duration:'03 Hours', price:69, img:'img-1', tags:['Family Tour'] },
  { id:3, title:'Eco-Friendly City Ride', location:'Tokyo, Japan', duration:'05 Hours', price:120, img:'img-6', tags:['Adventure Tour','Featured'], dots:3, activeDot:0 },
];

const SERVICES = [
  { name:'Hotel Booking', icon:'bi-building' },
  { name:'Top Destinations', icon:'bi-pin-map-fill' },
  { name:'Visa Processing', icon:'bi-file-earmark-text' },
  { name:'Tour Experiences', icon:'bi-compass' },
  { name:'Customize Package', icon:'bi-plus-circle' },
  { name:'Adventure Travel', icon:'bi-car-front' },
];

const PARTNER_LOGOS = [
  { mark:'B', name:'Borcelle', sub:'Tour & Travel', color:'#E03A3A' },
  { mark:'G', name:'GoTrip', sub:'Global Agency', color:'#1A73E8' },
  { mark:'t', name:'travel', sub:'Co', color:'#5DAEEA' },
  { mark:'G', name:'G-Fly', sub:'Global Agency', color:'#2A8866' },
  { mark:'T', name:'TRAVERSE', sub:'Tour & Travel', color:'#1A73E8' },
  { mark:'T', name:'TripZone', sub:'Traveler.co', color:'#0E1B2C' },
];

const INSPIRATIONS = [
  { day:'12', mon:'Sep.', country:'Brazil', title:"Wildlife Safari Adventures You Can't Miss.", img:'img-elephants' },
  { day:'12', mon:'Sep.', country:'Brazil', title:'Hiking, Trekking & Thrill-Seeking.', img:'img-snow' },
  { day:'11', mon:'Sep.', country:'Brazil', title:'Top 10 Beaches to Visit This Summer Season.', img:'img-aurora' },
];

const TESTIMONIALS = [
  { title:'Average Experience', quote:'The tour was well-organised, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own. Overall, a great experience!', name:'James Bonde', role:'Voyance Traveler', initials:'JB' },
  { title:'Average Experience', quote:'The tour was well-organised, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own. Overall, a great experience!', name:'Michael D Linda', role:'Voyance Traveler', initials:'ML' },
  { title:'Average Experience', quote:'The tour was well-organised, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own. Overall, a great experience!', name:'Amber Lashley', role:'Voyance Traveler', initials:'AL' },
];

const STATS = [
  { icon:'bi-airplane-fill', num:'26K+', label:'Tours Completed' },
  { icon:'bi-compass-fill',  num:'12+',  label:'Travel Experience' },
  { icon:'bi-emoji-smile-fill', num:'20+', label:'Happy Travelers' },
  { icon:'bi-award-fill',  num:'98%',  label:'Retention Rate' },
];

// ---------------------- HELPERS ----------------------
const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

function badgeClass(t){
  if (t === 'Featured') return 'featured';
  if (t === 'Sale on!') return 'sale';
  const lc = t.toLowerCase();
  if (lc.includes('solo')) return 'solo';
  if (lc.includes('family')) return 'family';
  if (lc.includes('group')) return 'group';
  if (lc.includes('adventure')) return 'adventure';
  return '';
}

function packageCardHTML(p){
  const locLabel = p.location || (p.locations && p.locations[0]) || 'location';
  const locText = p.locations ? p.locations.join(' , ') : p.location;
  const badges = p.tags.map(t => `<span class="pkg-badge ${badgeClass(t)}">${t}</span>`).join('');
  const dots = p.dots ? `
    <div class="pkg-dots">
      ${Array.from({length: p.dots}).map((_,i) => `<span class="pkg-dot ${i === (p.activeDot ?? 0) ? 'active':''}"></span>`).join('')}
    </div>` : '';
  const priceLine = `${p.original ? `<span class="pp through">$${p.original.toFixed(2)}</span>` : ''}$${p.price.toFixed(2)}`;
  return `
    <article class="pkg-card">
      <div class="pkg-img">
        <div class="img-ph ${p.img}" data-label="${locLabel}"></div>
        <div class="pkg-badges">${badges}</div>
        ${dots}
      </div>
      <div class="pkg-body">
        <h3>${p.title}</h3>
        <div class="pkg-meta">
          <span class="item"><i class="bi bi-geo-alt"></i> ${locText}</span>
          <span class="arrow-sep">⟷</span>
          <span class="item">${p.duration}</span>
        </div>
        <div class="pkg-cta-row">
          <a href="#" class="pkg-book">Book Now <i class="bi bi-arrow-up-right"></i></a>
          <div class="pkg-price">
            <div class="pp">per person</div>
            <div class="amount">${priceLine}</div>
          </div>
        </div>
      </div>
      <div class="pkg-foot">
        <span class="pkg-foot-item"><i class="bi bi-mic"></i> Experience</span>
        <span class="pkg-foot-item"><i class="bi bi-plus-circle"></i> Inclusion</span>
      </div>
    </article>`;
}

// ---------------------- RENDER ----------------------
function renderPopular(){
  $('#popularTrack').innerHTML = POPULAR.map(packageCardHTML).join('');
  // Pagination dots
  const pages = Math.max(1, Math.ceil(POPULAR.length / 3));
  const dotsEl = $('#popularDots');
  dotsEl.innerHTML = '';
  let page = 0;
  for (let i = 0; i < pages; i++){
    const b = document.createElement('button');
    b.className = 'car-dot' + (i === 0 ? ' active' : '');
    b.setAttribute('aria-label', `Page ${i+1}`);
    b.addEventListener('click', () => {
      page = i;
      $$('#popularDots .car-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
      $('#popularTrack').style.transform = `translateX(calc(-${page} * (100% + 28px)))`;
    });
    dotsEl.appendChild(b);
  }
}

function renderOneDay(){
  $('#oneDayTrack').innerHTML = ONE_DAY_TRIPS.map(packageCardHTML).join('');
}
function renderLastMinute(){
  $('#lastMinTrack').innerHTML = LAST_MINUTE.map(packageCardHTML).join('');
}

function renderTopDestinations(){
  let start = 0;
  const visible = 4;
  const max = Math.max(0, TOP_DESTINATIONS.length - visible);
  const draw = () => {
    const view = TOP_DESTINATIONS.slice(start, start + visible);
    $('#topDestTrack').innerHTML = view.map(d => `
      <a href="#" class="top-dest-card">
        <div class="top-dest-img"><div class="img-ph ${d.img}" data-label="${d.name}"></div></div>
        <div class="top-dest-name"><b>${d.name}</b><span>Tours (${d.tours})</span></div>
      </a>`).join('');
    $('#topDestPrev').disabled = start === 0;
    $('#topDestNext').disabled = start === max;
  };
  $('#topDestPrev').addEventListener('click', () => { start = Math.max(0, start - 1); draw(); });
  $('#topDestNext').addEventListener('click', () => { start = Math.min(max, start + 1); draw(); });
  draw();
}

function renderServices(){
  $('#servicesRow').innerHTML = SERVICES.map(s => `
    <a href="#" class="service-cell">
      <div class="service-cell-icon"><i class="bi ${s.icon}"></i></div>
      <div class="service-cell-text">${s.name}</div>
    </a>`).join('');
}

function renderLogos(){
  $('#logosRow').innerHTML = PARTNER_LOGOS.map(p => `
    <div class="logo-pill">
      <div class="lp-mark" style="background:${p.color}">${p.mark}</div>
      <div class="lp-text"><b>${p.name}</b><span>${p.sub}</span></div>
    </div>`).join('');
}

function renderInspirations(){
  $('#inspGrid').innerHTML = INSPIRATIONS.map(p => `
    <a href="#" class="insp-card">
      <div class="insp-img">
        <div class="img-ph ${p.img}" data-label="${p.country.toLowerCase()}"></div>
        <div class="insp-date">
          <div class="day">${p.day}</div>
          <div class="mon">${p.mon}</div>
        </div>
      </div>
      <div class="insp-body">
        <span class="insp-tag"><i class="bi bi-geo-alt-fill"></i> ${p.country}</span>
        <h3>${p.title}</h3>
      </div>
    </a>`).join('');
}

function renderTestimonials(){
  $('#testGrid').innerHTML = TESTIMONIALS.map(t => `
    <article class="test-card">
      <div class="test-tp-stars">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
      </div>
      <h4>${t.title}</h4>
      <p class="quote">${t.quote}</p>
      <div class="test-user">
        <div class="ava">${t.initials}</div>
        <div>
          <div class="name">${t.name}</div>
          <div class="role">${t.role}</div>
        </div>
      </div>
    </article>`).join('');
}

function renderStats(){
  $('#statsInner').innerHTML = STATS.map((s, i) => `
    <div class="stat-cell">
      <div class="stat-cell-icon"><i class="bi ${s.icon}"></i></div>
      <div>
        <div class="stat-cell-num" data-target="${parseInt(s.num)}" data-suffix="${s.num.replace(/[0-9]/g,'')}">0${s.num.replace(/[0-9]/g,'')}</div>
        <div class="stat-cell-label">${s.label}</div>
      </div>
    </div>`).join('');
}

// ---------------------- INTERACTIONS ----------------------

// Sticky nav shadow
function initNavScroll(){
  const nav = $('#topnav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// Mobile menu
function initMobMenu(){
  $('#mobBurger').addEventListener('click', () => $('#mobMenu').classList.add('open'));
  $('#mobClose').addEventListener('click', () => $('#mobMenu').classList.remove('open'));
  $$('.mob-menu a').forEach(a => a.addEventListener('click', () => $('#mobMenu').classList.remove('open')));
}

// Promo bar carousel
function initPromoBar(){
  let i = 0;
  const text = $('#promoText');
  const set = (idx) => {
    i = (idx + PROMO_ITEMS.length) % PROMO_ITEMS.length;
    text.style.opacity = 0;
    setTimeout(() => {
      text.innerHTML = `<b>${PROMO_ITEMS[i]}</b>`;
      text.style.opacity = 1;
    }, 200);
  };
  $('#promoPrev').addEventListener('click', () => set(i - 1));
  $('#promoNext').addEventListener('click', () => set(i + 1));
  setInterval(() => set(i + 1), 4500);
}

// Hero slider
function initHero(){
  let i = 0;
  const title = $('#heroTitle');
  const sub = $('#heroSubtitle');
  const dotsBox = $('#heroDots');
  HERO_SLIDES.forEach((_, idx) => {
    const b = document.createElement('button');
    b.className = 'hero-dot' + (idx === 0 ? ' active' : '');
    b.addEventListener('click', () => set(idx));
    dotsBox.appendChild(b);
  });
  const set = (idx) => {
    i = (idx + HERO_SLIDES.length) % HERO_SLIDES.length;
    const s = HERO_SLIDES[i];
    title.style.animation = 'none'; sub.style.animation = 'none';
    void title.offsetWidth;
    title.style.animation = ''; sub.style.animation = '';
    title.textContent = s.title;
    sub.textContent = s.subtitle;
    $$('#heroDots .hero-dot').forEach((d, idx2) => d.classList.toggle('active', idx2 === i));
  };
  $('#heroPrev').addEventListener('click', () => set(i - 1));
  $('#heroNext').addEventListener('click', () => set(i + 1));
  setInterval(() => set(i + 1), 6500);
}

// Search tabs
function initSearchTabs(){
  $$('#searchTabs .search-tab').forEach(t => {
    t.addEventListener('click', () => {
      $$('#searchTabs .search-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });
}

// Stat counters
function initCounters(){
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    const nums = $$('.stat-cell-num');
    nums.forEach(el => {
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix;
      const dur = 1500;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * ease) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.3 });
  obs.observe($('#statsRow'));
}

// Scroll reveal
function initReveal(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => obs.observe(el));
}

// Newsletter form
function initNewsletter(){
  const form = $('#newsForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const old = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check2"></i> Subscribed';
    setTimeout(() => { btn.innerHTML = old; form.reset(); }, 2200);
  });
}

// ---------------------- INIT ----------------------
document.addEventListener('DOMContentLoaded', () => {
  // Render content first
  renderPopular();
  renderOneDay();
  renderLastMinute();
  renderTopDestinations();
  renderServices();
  renderLogos();
  renderInspirations();
  renderTestimonials();
  renderStats();

  // Wire up interactions
  initNavScroll();
  initMobMenu();
  initPromoBar();
  initHero();
  initSearchTabs();
  initCounters();
  initReveal();
  initNewsletter();
});

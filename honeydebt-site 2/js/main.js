/* ════════════════════════════════════════
   HONEYDEBT — Global JavaScript
   Shared across all pages
════════════════════════════════════════ */

// ── CURSOR ──
const cur  = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cur) cur.style.transform = `translate(${mx - 5}px,${my - 5}px)`;
});

(function loop() {
  rx += (mx - rx) * .1;
  ry += (my - ry) * .1;
  if (curR) curR.style.transform = `translate(${rx - 16}px,${ry - 16}px)`;
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .step, .vc, .story, .kcard, .mini-calc').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (!cur) return;
    cur.style.width = '18px';
    cur.style.height = '18px';
    cur.style.borderRadius = '3px';
  });
  el.addEventListener('mouseleave', () => {
    if (!cur) return;
    cur.style.width = '8px';
    cur.style.height = '8px';
    cur.style.borderRadius = '50%';
  });
});

// ── PROGRESS BAR + NAV ──
const pb  = document.getElementById('pb');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (pb) pb.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + '%';
  if (nav) nav.classList.toggle('scrolled', scrollY > 60);
}, { passive: true });

// ── ACTIVE NAV LINK ──
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.na').forEach(link => {
    if (link.getAttribute('href') && path.endsWith(link.getAttribute('href').replace('.html', ''))) {
      link.classList.add('active');
    }
  });
})();

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: .1 });

document.querySelectorAll('.rv, .sp').forEach(el => revealObs.observe(el));

// ── SHARED LOGO SVG ──
function renderLogo(size = 28, bgColor = '#0A0A0A') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 140 140" fill="none">
    <defs><linearGradient id="logoGrad" x1="30" y1="115" x2="110" y2="20" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7A5510"/>
      <stop offset="35%" stop-color="#C9952A"/>
      <stop offset="70%" stop-color="#E4B150"/>
      <stop offset="100%" stop-color="#F5D870"/>
    </linearGradient></defs>
    <path d="M70,12L118,40L118,96L70,124L22,96L22,40Z" stroke="url(#logoGrad)" stroke-width="8" fill="none" stroke-linejoin="round"/>
    <line x1="40" y1="100" x2="120" y2="26" stroke="url(#logoGrad)" stroke-width="7" stroke-linecap="round"/>
    <circle cx="40" cy="100" r="7" fill="#8B6514"/>
    <circle cx="120" cy="26" r="12" fill="#E4B150"/>
    <circle cx="120" cy="26" r="7" fill="${bgColor}"/>
    <circle cx="120" cy="26" r="3.5" fill="#F5D870"/>
  </svg>`;
}

// ── MOUSE PARALLAX (hero only) ──
document.addEventListener('mousemove', e => {
  const xp = (e.clientX / innerWidth  - .5);
  const yp = (e.clientY / innerHeight - .5);

  const stack = document.getElementById('cardStack');
  if (stack) {
    stack.style.transform = `perspective(1000px) rotateY(${xp * -6}deg) rotateX(${yp * 4}deg)`;
  }

  document.querySelectorAll('.fl-dot').forEach((el, i) => {
    const spd = 14 + i * 4;
    el.style.transform = `translate(${xp * spd * (i % 2 ? 1 : -1)}px,${yp * spd * .7}px)`;
  });
});

// ── HERO FLOOR PARALLAX ──
window.addEventListener('scroll', () => {
  const floor = document.getElementById('hexFloor');
  if (!floor) return;
  const pct = Math.min(scrollY / window.innerHeight, 1);
  floor.style.transform = `translateX(-50%) perspective(700px) rotateX(58deg) translateY(${pct * 60}px)`;
}, { passive: true });

// ── LIVE CALCULATOR (hero) ──
const slider   = document.getElementById('loanSlider');
if (slider) {
  const emiEl    = document.getElementById('emiVal');
  const badge    = document.getElementById('mcBadge');
  const verdEl   = document.getElementById('verdictWord');
  const verdSub  = document.getElementById('verdictSub');
  const kmDtiV   = document.getElementById('kmDtiVal');
  const kmFoirV  = document.getElementById('kmFoirVal');
  const kmBufV   = document.getElementById('kmBufVal');
  const kmIntV   = document.getElementById('kmIntVal');
  const midDtiV  = document.getElementById('midDtiVal');
  const midFoirV = document.getElementById('midFoirVal');
  const kmDti    = document.getElementById('kmDti');
  const kmFoir   = document.getElementById('kmFoir');
  const kmBuf    = document.getElementById('kmBuf');
  const kmInt    = document.getElementById('kmInt');
  const midDti   = document.getElementById('midDti');
  const midFoir  = document.getElementById('midFoir');

  const INCOME = 75000, EXP = 20000, SAVINGS = 500000;
  const RATE = 11.5, MONTHS = 36;

  function calcEMI(p) {
    const r = RATE / 12 / 100;
    return Math.round(p * r * Math.pow(1 + r, MONTHS) / (Math.pow(1 + r, MONTHS) - 1));
  }

  function fmtK(n) {
    if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + 'L';
    if (n >= 1000)   return '₹' + Math.round(n / 1000) + 'K';
    return '₹' + Math.round(n);
  }

  function setClass(el, classes) {
    if (!el) return;
    el.classList.remove('safe', 'warn', 'risk', 'neu');
    el.classList.add(classes);
  }

  function updateAll() {
    const loan = parseInt(slider.value);
    const emi  = calcEMI(loan);
    const dti  = (emi / INCOME) * 100;
    const foir = ((emi + EXP) / INCOME) * 100;
    const totalInterest = (emi * MONTHS) - loan;
    const bufMonths = SAVINGS / (emi + EXP);

    let verdict, sub, color;
    if (dti < 28 && foir < 50) {
      verdict = 'YES';
      sub = 'You can responsibly take this loan. Walk in knowing more than your lender expects.';
      color = '#2ECC9A';
    } else if (dti < 42 && foir < 62) {
      verdict = 'STRETCHED';
      sub = 'One financial setback away from trouble. Consider a smaller loan or longer tenure.';
      color = '#E4B150';
    } else {
      verdict = 'NO';
      sub = 'This loan creates serious risk given your income. Here is why — in your numbers.';
      color = '#E74C3C';
    }

    if (emiEl)   emiEl.textContent   = '₹' + emi.toLocaleString('en-IN');
    if (badge)   { badge.textContent = verdict; badge.className = 'mc-badge ' + (verdict === 'YES' ? 'ok' : verdict === 'STRETCHED' ? 'warn' : 'bad'); }
    if (verdEl)  { verdEl.textContent = verdict; verdEl.style.color = color; }
    if (verdSub) verdSub.textContent = sub;

    const dtiStr  = dti.toFixed(1) + '%';
    const foirStr = foir.toFixed(1) + '%';
    const bufStr  = bufMonths.toFixed(1) + 'M';

    if (kmDtiV)  kmDtiV.textContent  = dtiStr;
    if (midDtiV) midDtiV.textContent = dtiStr;
    if (kmFoirV) kmFoirV.textContent = foirStr;
    if (midFoirV)midFoirV.textContent = foirStr;
    if (kmBufV)  kmBufV.textContent  = bufStr;
    if (kmIntV)  kmIntV.textContent  = fmtK(totalInterest);

    setClass(kmDti,  dti < 28 ? 'safe' : dti < 42 ? 'warn' : 'risk');
    setClass(midDti, dti < 28 ? 'safe' : dti < 42 ? 'warn' : 'risk');
    setClass(kmFoir, foir < 50 ? 'safe' : foir < 62 ? 'warn' : 'risk');
    setClass(midFoir,foir < 50 ? 'safe' : foir < 62 ? 'warn' : 'risk');
    setClass(kmBuf,  bufMonths >= 6 ? 'safe' : bufMonths >= 3 ? 'warn' : 'risk');
    setClass(kmInt,  totalInterest < 50000 ? 'safe' : totalInterest < 150000 ? 'warn' : 'risk');
  }

  updateAll();
  slider.addEventListener('input', updateAll);
}

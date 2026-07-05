/* ════════════════════════════════════════
   HONEYDEBT — Shared Components
   Nav + Footer + Store Badges injected on every page
════════════════════════════════════════ */

// ── STORE LINKS — single source of truth ──
// Edit here → updates every badge on every page
const HD_STORES = {
  ios:     'https://apps.apple.com/in/app/honeydebt/id6766440288',
  android: 'https://play.google.com/store/apps/details?id=com.transformingindia.honeydebt'
};

// ── OFFICIAL STORE BADGES ──
// Rendered wherever a <div data-badges></div> exists
const APPLE_ICON = `<svg viewBox="0 0 24 24" fill="#fff"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.31.07 2.23.73 2.98.77 1.14-.24 2.24-.93 3.44-.84 1.46.12 2.56.69 3.28 1.74-3.01 1.77-2.46 5.77.44 6.9-.51 1.4-1.19 2.79-2.14 4.31zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`;

const PLAY_ICON = `<svg viewBox="0 0 100 110">
  <g stroke-linejoin="round">
    <path fill="#4285F4" d="M8,6 L57,55 L8,104 Z"/>
    <path fill="#34A853" d="M8,6 L70.4,41.6 L57,55 Z"/>
    <path fill="#FBBC04" d="M70.4,41.6 L94,55 L70.4,68.4 L57,55 Z"/>
    <path fill="#EA4335" d="M57,55 L70.4,68.4 L8,104 Z"/>
  </g>
</svg>`;

const BADGES_HTML = `
  <a class="sbadge" href="${HD_STORES.ios}" target="_blank" rel="noopener" aria-label="Download on the App Store">
    ${APPLE_ICON}
    <span class="sb-txt"><span class="sb-top">Download on the</span><span class="sb-bot">App Store</span></span>
  </a>
  <a class="sbadge" href="${HD_STORES.android}" target="_blank" rel="noopener" aria-label="Get it on Google Play">
    ${PLAY_ICON}
    <span class="sb-txt"><span class="sb-top">Get it on</span><span class="sb-bot">Google Play</span></span>
  </a>`;

// ── NAV HTML ──
// To add a new nav link: add an <a> inside .nav-r below
const NAV_HTML = `
<nav id="nav">
  <a href="/index.html" class="nav-logo">
    <svg width="28" height="28" viewBox="0 0 140 140" fill="none">
      <defs><linearGradient id="ng" x1="30" y1="115" x2="110" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="#7A5510"/>
        <stop offset="35%"  stop-color="#C9952A"/>
        <stop offset="70%"  stop-color="#E4B150"/>
        <stop offset="100%" stop-color="#F5D870"/>
      </linearGradient></defs>
      <path d="M70,12L118,40L118,96L70,124L22,96L22,40Z" stroke="url(#ng)" stroke-width="8" fill="none" stroke-linejoin="round"/>
      <line x1="40" y1="100" x2="120" y2="26" stroke="url(#ng)" stroke-width="7" stroke-linecap="round"/>
      <circle cx="40" cy="100" r="7" fill="#8B6514"/>
      <circle cx="120" cy="26" r="12" fill="#E4B150"/>
      <circle cx="120" cy="26" r="7" fill="#0A0A0A"/>
      <circle cx="120" cy="26" r="3.5" fill="#F5D870"/>
    </svg>
    <span class="wm"><span class="h">Honey</span><span class="d">Debt</span></span>
  </a>
  <div class="nav-r">
    <a href="/index.html"     class="na">Home</a>
    <a href="/how-it-works.html" class="na">How It Works</a>
    <a href="/index.html#languages" class="na">Languages</a>
    <a href="/download.html"  class="na">Download</a>
    <!-- ADD NEW NAV LINKS HERE -->
    <a href="/download.html"  class="nav-btn">Get Free →</a>
  </div>
</nav>`;

// ── FOOTER HTML ──
// To update social links or email: edit the anchors below
const FOOTER_HTML = `
<footer>
  <div class="fi">
    <div style="display:flex;flex-direction:column;gap:16px;">
      <a href="/index.html" style="text-decoration:none;display:flex;align-items:center;gap:9px;">
        <svg width="26" height="26" viewBox="0 0 140 140" fill="none">
          <defs><linearGradient id="fg" x1="30" y1="115" x2="110" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stop-color="#7A5510"/>
            <stop offset="35%"  stop-color="#C9952A"/>
            <stop offset="70%"  stop-color="#E4B150"/>
            <stop offset="100%" stop-color="#F5D870"/>
          </linearGradient></defs>
          <path d="M70,12L118,40L118,96L70,124L22,96L22,40Z" stroke="url(#fg)" stroke-width="8" fill="none" stroke-linejoin="round"/>
          <line x1="40" y1="100" x2="120" y2="26" stroke="url(#fg)" stroke-width="7" stroke-linecap="round"/>
          <circle cx="40" cy="100" r="7" fill="#8B6514"/>
          <circle cx="120" cy="26" r="12" fill="#E4B150"/>
          <circle cx="120" cy="26" r="7" fill="#0A0A0A"/>
          <circle cx="120" cy="26" r="3.5" fill="#F5D870"/>
        </svg>
        <span class="wm"><span class="h">Honey</span><span class="d">Debt</span></span>
      </a>
      <div class="footer-links">
        <!-- ADD / EDIT FOOTER LINKS HERE -->
        <a href="/how-it-works.html">How It Works</a>
        <a href="/download.html">Download</a>
        <a href="${HD_STORES.ios}" target="_blank" rel="noopener">App Store</a>
        <a href="${HD_STORES.android}" target="_blank" rel="noopener">Google Play</a>
        <a href="mailto:honeydebtindia@gmail.com">Contact</a>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Use</a>
      </div>
    </div>
    <div class="fr">
      honeydebtindia@gmail.com · @HoneydebtIndia<br>
      English · हिंदी · मराठी · தமிழ்<br>
      Not a lender. Not a financial advisor. Just clarity.<br>
      <span>© 2026 HoneyDebt · Clarity Before Credit</span>
    </div>
  </div>
</footer>`;

// ── INJECT on DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav at top of body
  const navEl = document.createElement('div');
  navEl.innerHTML = NAV_HTML;
  document.body.insertBefore(navEl.firstElementChild, document.body.firstChild);

  // Inject footer at end of body
  const footEl = document.createElement('div');
  footEl.innerHTML = FOOTER_HTML;
  document.body.appendChild(footEl.firstElementChild);

  // Inject official store badges into every [data-badges] container
  document.querySelectorAll('[data-badges]').forEach(el => {
    el.classList.add('store-badges');
    el.innerHTML = BADGES_HTML;
  });

  // cursor + pb are injected directly in each page HTML
});

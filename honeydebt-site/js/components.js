/* ════════════════════════════════════════
   HONEYDEBT — Shared Components
   Nav + Footer injected on every page
════════════════════════════════════════ */

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
        <a href="mailto:honeydebtindia@gmail.com">Contact</a>
        <a href="/privacy.html">Privacy Policy</a>
      </div>
    </div>
    <div class="fr">
      honeydebtindia@gmail.com · @HoneydebtIndia<br>
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

  // Inject cursor + progress bar
  document.body.insertAdjacentHTML('afterbegin', `
    <div id="pb"></div>
    <div class="cur" id="cur"></div>
    <div class="cur-r" id="curR"></div>
  `);
});

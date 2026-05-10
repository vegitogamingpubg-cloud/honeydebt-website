# HoneyDebt Website

## Folder Structure
```
honeydebt-site/
├── index.html          ← Landing page
├── how-it-works.html   ← How it works page
├── download.html       ← App download page
├── privacy.html        ← Add this when needed
├── vercel.json         ← Vercel config (don't touch)
├── css/
│   ├── style.css       ← Global styles (colours, nav, footer)
│   └── home.css        ← Homepage-only styles (hero, cards)
├── js/
│   ├── components.js   ← Nav + Footer (edit links here)
│   └── main.js         ← Calculator + animations
└── assets/
    ├── favicon.ico     ← Add your app icon here
    └── og-image.png    ← Social share image (1200x630px)
```

## How to edit common things

### Change nav links
→ Open `js/components.js`
→ Find the `NAV_HTML` section
→ Add/remove `<a href="..." class="na">Link</a>` lines

### Change footer links / email
→ Open `js/components.js`
→ Find the `FOOTER_HTML` section
→ Edit the anchor tags

### Change brand colours
→ Open `css/style.css`
→ Edit the `:root { }` block at the top

### Add a new page
1. Copy `how-it-works.html`
2. Rename it (e.g. `blog.html`)
3. Edit the content
4. Add link in `js/components.js` NAV_HTML

### Update App Store links (when live)
→ Open `download.html`
→ Find the two `<a href="...">` buttons
→ Replace `https://apps.apple.com` and `https://play.google.com` with real links

## Deploy to Vercel

1. Push this folder to GitHub
2. Go to vercel.com → Import project
3. Select the repo → Deploy
4. Connect domain in Vercel dashboard

## Deploy to Netlify (alternative)

1. Go to netlify.com/drop
2. Drag this entire folder
3. Done — live in 60 seconds

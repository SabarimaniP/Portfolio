# Sabarimani P — Portfolio Website

Same dark theme, split into **one file per section** for easy customisation.

---

## 📁 File Structure

```
portfolio/
│
├── index.html              ← All HTML content (sections, text, links)
│
├── css/
│   ├── base.css            ← 🎨 Colors, fonts, buttons, global layout
│   ├── loader.css          ← ⏳ Page loader animation
│   ├── nav.css             ← 🧭 Navigation bar + mobile menu
│   ├── home.css            ← 🏠 Home / Hero section
│   ├── about.css           ← 👤 About Me section
│   ├── skills.css          ← 🛠  Skills chips + filter buttons
│   ├── experience.css      ← 💼 Experience timeline
│   ├── projects.css        ← 📦 Project cards + banners
│   ├── education.css       ← 🎓 Education cards
│   ├── contact.css         ← 📬 Contact + social links
│   └── footer.css          ← 🔻 Footer, toast, back-to-top button
│
├── js/
│   ├── main.js             ← ⚙️  Loader, cursor, nav, scroll, copy, back-to-top
│   ├── home.js             ← 🌐 Constellation canvas animation
│   ├── skills.js           ← 🔍 Skills filter button logic
│   └── projects.js         ← 🖼  Project banner SVG illustrations
│
└── README.md
```

---

## ✏️ What to edit and where

| What you want to change | File to open |
|-------------------------|-------------|
| Name, bio, links, text  | `index.html` |
| All colors / accent color | `css/base.css` → `--accent` variable |
| Hero name size / layout | `css/home.css` |
| About text, stat numbers | `index.html` (About section) |
| Skill chips             | `index.html` (Skills section) |
| Experience bullets      | `index.html` (Experience section) |
| Project cards           | `index.html` + `js/projects.js` (banner art) |
| Education               | `index.html` (Education section) |
| Email, phone, socials   | `index.html` (Contact section) |
| Constellation nodes     | `js/home.js` → `NODE_DEFS` array |
| Footer text             | `index.html` + `css/footer.css` |

---

## 🚀 Quickstart

### Open locally
Double-click `index.html` — works in any modern browser.

### VS Code + Live Server (recommended)
1. Open the `portfolio/` folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

---

## 🌐 Deploy (Free)

### Netlify (easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `portfolio/` folder into the browser
3. Live in 30 seconds! Then connect your custom domain.

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from branch (`main`, `/root`)

### Vercel
```bash
npm i -g vercel
cd portfolio
vercel
```

---

## 🎨 Quick Rebrand

Open `css/base.css` and change just ONE line:

```css
--accent: #7c5cfc;  /* ← change this hex to any color */
```

That single variable controls: nav active state, buttons, dots, highlights, canvas glow — everything.

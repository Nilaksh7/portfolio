# Nilaksh Berwal — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Unzip and enter the folder
cd nilaksh-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```
nilaksh-portfolio/
├── public/
│   ├── profile.jpeg        ← Your profile photo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── AchievementsEducation.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /dist — ready to deploy on Vercel, Netlify, etc.
```

### Deploy to Vercel (recommended)

```bash
npm install -g vercel
vercel
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Personal info & links | Each component file |
| Profile photo | Replace `public/profile.jpeg` |
| Color scheme | `tailwind.config.js` + `src/index.css` |
| Fonts | `index.html` Google Fonts link |
| Add/remove sections | `src/App.jsx` |

---

## 🎨 Design Highlights

- **Dark theme** with emerald `#6ee7b7` + indigo `#818cf8` accent system
- **Syne** display font + **DM Sans** body + **JetBrains Mono** for code
- Scroll-triggered reveal animations (Intersection Observer)
- Animated particle canvas background in hero
- Custom SVG project visuals (no external image dependencies)
- Fully responsive — mobile, tablet, desktop
- Sticky navbar with active section tracking

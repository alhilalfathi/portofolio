# Gazanuha Alhilal Fathiakbar — Fullstack Developer Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark Mode** — Sleek dark editorial design by default
- **Smooth Animations** — Framer Motion for section reveals, hover effects, and page transitions  
- **Fully Responsive** — Mobile-first, works on all screen sizes
- **SEO Optimized** — Meta tags, OpenGraph, Twitter cards
- **Performance** — Static export (SSG), no backend required
- **Project Modal** — Click any project card to see full details
- **Typewriter Effect** — Hero section rotates through role titles
- **Scrolling Tech Strip** — Animated skill badges ticker
- **Active Nav Tracking** — Navbar highlights current section

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles, CSS vars, custom utilities
│   ├── layout.tsx          # Root layout with metadata & fonts
│   └── page.tsx            # Main page, assembles all sections
├── components/
│   ├── Navbar.tsx           # Sticky navbar with mobile menu
│   ├── Footer.tsx           # Footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero with typewriter & stats
│   │   ├── AboutSection.tsx     # Bio, skill cards, code terminal
│   │   ├── ProjectsSection.tsx  # Project cards grid
│   │   ├── SkillsSection.tsx    # Skill bars + scrolling strip
│   │   └── ContactSection.tsx  # Contact form + social links
│   └── ui/
│       ├── SectionHeader.tsx    # Reusable section title component
│       └── ProjectModal.tsx     # Project detail modal
└── lib/
    ├── data.ts              # ⭐ All portfolio content (edit this!)
    ├── utils.ts             # clsx + tailwind-merge utility
    └── useScrollReveal.ts   # Scroll intersection observer hook
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory — deploy to any static host (Vercel, Netlify, GitHub Pages, etc.)

## ✏️ Customization

**All content lives in `lib/data.ts`** — edit just that file to make it yours:

- `personalInfo` — Name, tagline, email, social links
- `projects` — Project cards with tech stack, descriptions, links
- `skillCategories` — Skill bars with proficiency levels
- `stats` — Hero section stats row

## 🎨 Design Tokens

Colors and fonts are defined as CSS variables in `globals.css`:

```css
/* Accent color */
--accent: #00ff87

/* Edit fonts */
font-family: 'Syne' (display/body) + 'JetBrains Mono' (code)
```

## 📦 Deploy to Vercel

```bash
npx vercel --prod
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).

## 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts | Syne + JetBrains Mono |

---

Built with ❤️ — clean, minimal, production-ready.

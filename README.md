# Next.js based Psychology Portfolio

### Hosted in Vercel: https://psychology-portfolio.vercel.app/

## Overview

This project is a modern **Next.js (App Router)** based personal/academic portfolio website. It focuses on elegant UI, smooth reveal animations, responsive layouts, and interactive components like infinite carousels and timelines.

The codebase is structured for clarity, scalability, and professional deployment (Vercel-ready).

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** CSS Modules / Global CSS (custom animations)
* **Animations:** IntersectionObserver-based Reveal component
* **Icons:** Emoji-based (can be replaced with SVGs)
* **Deployment:** Vercel / Netlify compatible

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Reveal.tsx
│   ├── AcademicWork.tsx
│   ├── Timeline.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
│
├── public/
│   └── assets/
│
├── package.json
├── package-lock.json
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## Core Concepts

### 1. Reveal Animation System

The `Reveal` component is a wrapper that animates elements when they enter the viewport.

**Key features:**

* Uses `IntersectionObserver`
* Supports staggered child animations
* Lightweight and reusable

**Usage:**

```tsx
<Reveal>
  <section>...</section>
</Reveal>
```

**Best components to wrap:**

* Sections (`section`, `div` blocks)
* Card grids
* Timeline items
* Skill lists
* Contact blocks

Avoid wrapping single inline elements like text spans.

---

### 2. Infinite Carousel (Academic Work)

The Academic Work section uses a **scroll-based infinite carousel**.

**How it works:**

* Items are duplicated 3 times
* Scroll starts from the middle set
* Scroll position is corrected silently

**Key logic:**

* Prevents hard edges
* Works across screen sizes
* Touch + mouse compatible

---

### 3. Timeline (Education + Experience)

* Vertical layout
* Alternating alignment
* Elegant separators
* Scroll-reveal enabled

**Ideal content:**

* Education history
* Work experience
* Certifications

---

### 4. Skills Section

* Categorized skill groups
* Minimal UI
* Focus on readability
* Can be extended with proficiency bars

---

### 5. Contact Section

**Design goals:**

* Human
* Inviting
* High contrast
* Soft CTA

**Includes:**

* Short copy
* Email / socials
* Optional form

---

## Styling Guidelines

* Prefer spacing over borders
* Use contrast via background layers
* Avoid heavy gradients
* Keep animations subtle (<400ms)

---

## Environment Variables

Create a `.env.local` file for secrets:

```
NEXT_PUBLIC_SITE_URL=
EMAIL_API_KEY=
```

Never commit real `.env` files.

---

## Git & Version Control

### What to commit

* Source code
* Config files
* Lock files

### What NOT to commit

```
node_modules/
.next/
.env
```

These are rebuilt automatically.

---

## Local Development

```bash
git clone <repo-url>
cd project
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## Production Build

```bash
npm run build
npm start
```

---

## Deployment (Vercel Recommended)

1. Push repo to GitHub
2. Import into Vercel
3. Set environment variables
4. Deploy

Zero config required.

---

## Future Enhancements

* Dark/light theme toggle
* MDX-powered content
* Blog section
* CMS integration
* Framer Motion upgrade

---

## Philosophy

This project prioritizes:

* Clarity over cleverness
* Emotion over noise
* Elegance over excess

The site should feel **quietly confident**, not loud.

---

## License

Private

---

*Built with intention and restraint.*

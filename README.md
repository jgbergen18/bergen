# Jamie Bergen — Personal Portfolio

Personal website and portfolio of **Jamie Bergen**, a graduate student in neuroscience and computer science researching neuroAI, cognition, and data science.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

> **Live site:** _add your production URL here_

<!-- Tip: drop a homepage screenshot at docs/screenshot.png and uncomment the line below
![Homepage](docs/screenshot.png)
-->

## Highlights

- **Interactive crossword** — a custom-built puzzle with clues about my background and live answer checking
- **Reading log** — every book I read, by month, color-coded to the average NYC temperature when I read it
- **Research & projects** — work across multi-agent LLMs, NLP, and neuroscience, linked to publications (arXiv, *Neuron*)
- **CV page** — academic and research background at a glance
- **Light / dark theme** with system-preference detection
- Responsive, accessible, fast

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for build and dev
- **Tailwind CSS** with a custom theme/token system
- **shadcn/ui** + **Radix UI** primitives
- **React Router** for routing
- Deployed on **Vercel**

## Running locally

Prerequisites: **Node.js 18+**

```bash
git clone https://github.com/jgbergen18/bergen.git
cd bergen
npm install
npm run dev
```

The site runs at `http://localhost:8080`.

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # lint
```

## Project structure

```
src/
├── pages/
│   ├── Index.tsx          # Home: hero, about, crossword, projects, contact
│   ├── Blog.tsx           # Reading log
│   ├── CV.tsx             # CV / resume
│   ├── ProjectDetail.tsx  # Individual project pages
│   └── NotFound.tsx       # 404
├── components/
│   ├── Hero.tsx           # Landing hero
│   ├── About.tsx          # Bio
│   ├── Crossword.tsx      # Interactive crossword
│   ├── ProjectsGallery.tsx# Project grid
│   ├── Contact.tsx        # Contact details
│   ├── ThemeToggle.tsx    # Light/dark switch
│   └── ui/                # shadcn/ui primitives
├── assets/                # images and media
└── index.css              # design tokens + theme
```

## License

© Jamie Bergen. This is a personal project. You're welcome to read the code and learn from it, but please don't republish the site or its content as your own.

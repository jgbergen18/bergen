# Jamie Bergen — Portfolio

A modern, minimalist personal portfolio website showcasing research in neuroscience, AI, and data science.

## About

This is the personal portfolio of **Jamie Bergen**, a graduate student focused on the intersection of neuroscience, artificial intelligence, and data science. The site presents research projects, academic work, writing, and professional background with an emphasis on clean design and accessibility.

**Research Interests:**
- NeuroAI and computational neuroscience
- Machine learning and NLP applications to neuroscience
- Cognition and brain imaging
- Research methodology and data science

## Features

- **Dark/Light Theme Toggle**: Seamless theme switching with system preference detection
- **Project Showcase**: Detailed gallery of research and development projects with links to publications and external resources
- **Blog Section**: Writing and research articles
- **CV/Resume Page**: Academic credentials and professional experience
- **Responsive Design**: Fully mobile-optimized interface
- **Modern UI Components**: Built with shadcn/ui and Radix UI
- **Accessible**: WCAG-compliant with proper semantic HTML

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom theme system
- **UI Components**: shadcn/ui and Radix UI primitives
- **Routing**: React Router
- **State Management**: React Query
- **Theme Management**: next-themes
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jgbergen18/bergen.git
cd bergen

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx          # Home page (hero, about, projects, contact)
│   ├── Blog.tsx           # Blog section
│   ├── CV.tsx             # Resume/CV page
│   ├── ProjectDetail.tsx  # Individual project pages
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with name
│   ├── About.tsx          # About section with bio
│   ├── ProjectsGallery.tsx # Project grid display
│   ├── Contact.tsx        # Contact information
│   ├── ThemeToggle.tsx    # Dark/light mode switcher
│   └── ui/                # shadcn/ui components
├── assets/                # Images and media files
└── App.tsx                # Main app with routing
```

## Pages

- **Home** (`/`) - Main landing page with hero, about, projects, and contact
- **Blog** (`/blog`) - Blog posts and research articles
- **CV** (`/cv`) - Academic and professional background
- **Project Detail** (`/project/:id`) - Deep dive into individual projects
- **404** - Page not found

## Featured Projects

The portfolio showcases several research projects:

1. **Depression Detection in Reddit Posts** — NLP-based replication study using machine learning for mental health detection
2. **Parkinson's Disease Research** — Neuroscience research on immune system's role in disease progression (published in Neuron)
3. **SASS Research Group** — Co-founded research group focused on sex and sexuality studies with IRB-approved protocols

## Customization

### Update Profile Information
- **Profile Photo**: Replace `src/assets/profile-photo.jpg`
- **Contact Photo**: Replace `src/assets/contact-photo.jpg`
- **Projects**: Edit project data in `src/components/ProjectsGallery.tsx`
- **About Section**: Modify `src/components/About.tsx`

### Styling & Theme
- **Colors**: Customize in `src/globals.css` and `tailwind.config.ts`
- **Typography**: Adjust font sizes and weights in TailwindCSS config
- **Dark/Light Theme**: Manage via `next-themes` in `App.tsx`

## Deployment

Build for production:

```bash
npm run build
```

The `dist` folder contains all static files ready for deployment to:
- **Vercel** (recommended for React)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## Analytics

The site includes Google Analytics integration via Google Tag Manager. To customize:
- Update the Google Analytics ID in `index.html`
- Or remove the analytics script entirely if not needed

## License

See LICENSE file for details.

---

Built with React, TypeScript, and TailwindCSS. Designed for clarity, accessibility, and professional presentation.

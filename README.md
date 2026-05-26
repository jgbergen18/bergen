# Jamie Bergen - Personal Portfolio

A modern, responsive personal portfolio website showcasing research projects, writing, and academic background.

## Overview

This is the personal portfolio of Jamie Bergen, a graduate student in neuroscience and computer science with research interests in cognition, neuroAI, and data science. The site features project showcases, a blog, CV, and contact information.

## Features

- **Dark/Light Theme Toggle**: Seamless theme switching with `next-themes`
- **Project Gallery**: Showcase of research and development projects with descriptions and external links
- **Blog Section**: Writing and research articles
- **CV Page**: Academic and professional background
- **Responsive Design**: Mobile-optimized with TailwindCSS
- **Modern UI**: Built with shadcn/ui components and Radix UI primitives

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, shadcn/ui
- **Routing**: React Router
- **State Management**: React Query
- **Theme**: next-themes (dark/light mode)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview Build**: `npm run preview`

## Project Structure

```
src/
├── pages/              # Main pages (Index, Blog, CV, ProjectDetail)
├── components/         # Reusable components (Header, Hero, About, ProjectsGallery, etc.)
├── assets/            # Images and static files
├── ui/                # shadcn/ui component library
└── App.tsx            # Main app component with routing
```

## Pages

- **Home** (`/`) - Main portfolio page with hero, about, projects, and contact
- **Blog** (`/blog`) - Blog posts and articles
- **CV** (`/cv`) - Academic and professional background
- **Project Detail** (`/project/:id`) - Detailed project information
- **404** - Not found page

## Customization

The portfolio uses a custom color scheme and spacing. Key areas to customize:

- **Profile Photo**: Replace `src/assets/profile-photo.jpg`
- **Project Images**: Update images in `src/assets/`
- **Project Data**: Edit project information in `ProjectsGallery.tsx`
- **Colors/Theme**: Modify Tailwind configuration in `tailwind.config.ts`

## Deployment

Build for production:

```bash
npm run build
```

The `dist` folder contains the production-ready files ready for deployment to Vercel, Netlify, or any static host.

## License

See LICENSE file for details.

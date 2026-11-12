# BuildIt Construction: Landing Page

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

A responsive landing page for **BuildIt Construction**, a construction company offering residential building, commercial projects and site planning. Built with the Next.js App Router, React 19 and Tailwind CSS.

## Features

- **Hero, About and Services** sections presenting the company and its three service lines
- **Projects gallery** showcasing completed work
- **Contact form** with loading and success states, posting to [Formspree](https://formspree.io)
- **Light / dark theme** toggle with `next-themes`, remembered between visits
- **Responsive layout** with a sticky navigation bar, from phone to desktop
- Icons from `lucide-react`

## Project structure

```text
src/
  app/
    layout.tsx        # metadata, fonts and theme provider
    page.tsx          # assembles the page sections
    globals.css       # Tailwind CSS
  components/
    Navbar.tsx  Hero.tsx  About.tsx  Services.tsx
    ProjectsGallery.tsx  ContactForm.tsx  Footer.tsx
    ThemeProvider.tsx  ThemeToggle.tsx
```

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Contact form setup

The form posts to Formspree. Create a form at [formspree.io](https://formspree.io), then replace `your_id_here` in `src/components/ContactForm.tsx` with your form ID:

```ts
fetch("https://formspree.io/f/your_id_here", { ... })
```

## Deployment

The site is a standard Next.js app and deploys to [Vercel](https://vercel.com) or any Node.js host with `npm run build` and `npm run start`.

## License

[MIT](LICENSE) © 2026 Cheah Ken Win

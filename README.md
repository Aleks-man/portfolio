пше # Fullstack Developer Portfolio

Bilingual personal portfolio for Alexandr Manuylov. The project is a frontend-only React application with Russian and English content, project case studies, responsive layouts, and image galleries.

## Stack

- React 19 and TypeScript
- Vite
- React Router
- Lucide React and React Icons
- Vitest, Testing Library, and jsdom

## Getting started

The project is currently verified with Node.js 20.19.

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Scripts

```bash
npm run dev        # Start the development server
npm run build      # Type-check and create a production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm test           # Run the test suite once
npm run test:watch # Run tests in watch mode
```

Before publishing changes, run:

```bash
npm run lint
npm test
npm run build
```

## Project structure

```text
public/                 Static images, fonts, logos, and project screenshots
src/components/         Reusable sections and UI components
src/components/layout/  Shared page layout
src/components/projects Project gallery and navigation components
src/content/            Russian and English portfolio content
src/hooks/              Metadata and lightbox behaviour
src/pages/              Route-level components
src/styles/             Global and page-specific styles
src/test/               Shared test setup
```

Page components are loaded lazily. Page-specific CSS is imported by its corresponding page so it does not increase the initial stylesheet unnecessarily.

## Editing content

All portfolio copy and project data is stored in `src/content/portfolio.ts` under the `en` and `ru` keys. Keep both language versions structurally identical when adding or removing fields.

To add a case study:

1. Add the cover and gallery images under `public/projects/<project-slug>/`.
2. Add a project object with the same `slug` to both language sections.
3. Keep image URLs root-relative, for example `/projects/project-slug/cover.jpg`.
4. Run the lint, test, and build commands before publishing.

Files in `public` are copied to the production build unchanged. Prefer compressed WebP or efficiently encoded JPEG images and remove unused source variants before deployment.

## Language behaviour

Russian is used by default. The language selected by the visitor is stored in `localStorage` under `portfolio-language` and restored on the next visit.

## Deployment

The production output is written to `dist` and is intentionally excluded from Git.

The application uses `BrowserRouter`. Configure the hosting platform to serve `index.html` as a fallback for routes that do not match a physical file. Without this rewrite, opening a nested URL such as `/projects/barbershop` directly can return a server-side 404.

The application is frontend-only. Contact links and demo credentials are public data included in the client bundle.

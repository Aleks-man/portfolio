# Manuylov — Fullstack Developer Portfolio

Bilingual portfolio and service website for Alexandr Manuylov, available at
[manuylov.com](https://manuylov.com/).

The application presents fullstack development services, project case studies,
pricing, contact options, and responsive image galleries in Russian and English.
It is a frontend React application with build-time prerendering for search engines
and social sharing.

## Technology

- React 19 and TypeScript
- Vite 8
- React Router
- CSS with shared design tokens and page-level styles
- Lucide React and React Icons
- Yet Another React Lightbox
- Vitest, Testing Library, and jsdom
- Yandex Metrika

## Local development

The project is verified with Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Available scripts

```bash
npm run dev        # Start the development server
npm run build      # Type-check, build, prerender, and validate SEO output
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm test           # Run the test suite once
npm run test:watch # Run tests in watch mode
npm run seo:generate # Regenerate robots.txt and sitemap.xml
```

Before publishing:

```bash
npm run lint
npm test
npm run build
```

## Project structure

```text
public/                    Static images, fonts, logos, and verification files
scripts/                   Sitemap generation, prerendering, and build validation
src/components/            Shared sections and UI components
src/components/about/      About-page components
src/components/home/       Home-page components
src/components/layout/     Shared page layout
src/components/projects/   Project lightbox and navigation
src/components/routing/    Routing behaviour and analytics
src/components/services/   Services-page components
src/config/                Shared indexable-page registry
src/content/               Localized site content
src/content/projects/      Localized project case studies
src/hooks/                 Metadata and lightbox hooks
src/pages/                 Route-level components
src/routing/               Language-aware routing utilities
src/seo/                   Shared metadata and structured-data generation
src/styles/                Global, page-level, and responsive styles
src/test/                  Shared test setup
```

Route components are loaded lazily. Services, projects, and about-page styles are
bundled with their corresponding routes.

## Localized content

Russian is the default language. English pages use the `/en` prefix. The selected
language is represented by the URL and is not stored in browser storage.

General content is located in:

```text
src/content/portfolio.ru.ts
src/content/portfolio.en.ts
```

Project case studies are located in:

```text
src/content/projects/portfolio.projects.ru.ts
src/content/projects/portfolio.projects.en.ts
```

The build enforces matching Russian and English content structures. A missing or
incompatible field in either language causes a TypeScript error.

## Adding a project

1. Add optimized cover and gallery images under `public/projects/<project-folder>/`.
2. Add the project with the same `slug` and structure to both project content files.
3. Add the slug once to `projectSlugs` in `src/config/sitePages.js`.
4. Use root-relative asset paths such as `/projects/project-folder/cover.jpg`.
5. Run lint, tests, and the production build.

The build verifies that Russian projects, English projects, indexable routes,
sitemap entries, and prerendered pages remain synchronized.

## SEO and prerendering

`src/seo/pageMetadata.ts` is the single source for:

- page titles and descriptions;
- canonical and hreflang URLs;
- Open Graph and Twitter Card metadata;
- Person, Service, WebPage, CreativeWork, and Breadcrumb structured data.

The same metadata is used by the React client and build-time prerendering.
`npm run build` also:

1. generates `robots.txt` and `sitemap.xml`;
2. creates the client and SSR bundles;
3. prerenders every Russian and English indexable route;
4. validates page content, canonical URLs, alternate languages, and social metadata.

The production origin defaults to `https://manuylov.com`. It can be overridden:

```env
VITE_SITE_URL=https://example.com
```

Only HTTPS production origins are accepted by the SEO generator.

## Static assets

Files under `public` are copied to the production build unchanged. Prefer WebP or
efficiently encoded JPEG images. Keep editable SVG sources for branded assets when
a raster version is used by social platforms.

Search-engine verification HTML files are intentionally public and contain no
credentials or private keys.

## Deployment

The production output is written to `dist` and excluded from Git. The site is
deployed from GitHub to Timeweb App Platform.

The application uses `BrowserRouter`, while indexable routes also receive physical
prerendered `index.html` files. The hosting platform should still fall back to the
root `index.html` for unknown client-side routes.

The application has no private backend. Contact links, public project information,
and demo credentials included in content files are visible in the client bundle.

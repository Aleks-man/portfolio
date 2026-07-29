import { renderToString } from 'react-dom/server'
import { Route, Routes, StaticRouter } from 'react-router'
import { SiteLayout } from './components/layout/SiteLayout'
import { content, type Language } from './content/portfolio'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { LanguageProvider } from './routing/LanguageProvider'
import { getLanguageFromPath, stripLanguagePrefix } from './routing/localizedRoutes'
import { prerenderPaths, projectSlugs } from './config/sitePages.js'
import { createPageMetadata, type PageMetadata } from './seo/pageMetadata'

export type PrerenderResult = {
  basePath: string
  html: string
  language: Language
  seo: PageMetadata
}

export function render(pathname: string): PrerenderResult {
  const language = getLanguageFromPath(pathname)
  const portfolio = content[language]
  const basePath = stripLanguagePrefix(pathname)
  const html = renderToString(
    <StaticRouter location={pathname}>
      <LanguageProvider language={language}>
        <SiteLayout
          currentLanguage={language}
          portfolio={portfolio}
          onLanguageChange={() => undefined}
        >
          <Routes>
            <Route path="/" element={<HomePage portfolio={portfolio} />} />
            <Route path="/projects" element={<ProjectsPage portfolio={portfolio} />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage portfolio={portfolio} />} />
            <Route path="/services" element={<ServicesPage portfolio={portfolio} />} />
            <Route path="/about" element={<AboutPage portfolio={portfolio} />} />
            <Route path="/en" element={<HomePage portfolio={portfolio} />} />
            <Route path="/en/projects" element={<ProjectsPage portfolio={portfolio} />} />
            <Route path="/en/projects/:slug" element={<ProjectDetailPage portfolio={portfolio} />} />
            <Route path="/en/services" element={<ServicesPage portfolio={portfolio} />} />
            <Route path="/en/about" element={<AboutPage portfolio={portfolio} />} />
          </Routes>
        </SiteLayout>
      </LanguageProvider>
    </StaticRouter>,
  )

  const origin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '') || 'https://manuylov.com'
  const seo = createPageMetadata({ origin, pathname, portfolio })

  return { basePath, html, language, seo }
}

const contentProjectSlugs = content.ru.projects.items.map(({ slug }) => slug)

if (
  projectSlugs.length !== contentProjectSlugs.length
  || projectSlugs.some((slug, index) => slug !== contentProjectSlugs[index])
) {
  throw new Error('Project routes and Russian project content are out of sync')
}

if (
  content.en.projects.items.length !== contentProjectSlugs.length
  || content.en.projects.items.some(({ slug }, index) => slug !== contentProjectSlugs[index])
) {
  throw new Error('Russian and English project content are out of sync')
}

export { prerenderPaths }

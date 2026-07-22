import { renderToString } from 'react-dom/server'
import { Route, Routes, StaticRouter } from 'react-router'
import { SiteLayout } from './components/layout/SiteLayout'
import { content, type Language, type PortfolioContent } from './content/portfolio'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { LanguageProvider } from './routing/LanguageProvider'
import { getLanguageFromPath, localizePath, stripLanguagePrefix } from './routing/localizedRoutes'

type SeoData = {
  description: string
  image: string
  title: string
  type: 'article' | 'website'
}

export type PrerenderResult = {
  basePath: string
  html: string
  language: Language
  seo: SeoData
}

function getSeoData(pathname: string, portfolio: PortfolioContent, language: Language): SeoData {
  const basePath = stripLanguagePrefix(pathname)
  const isRussian = language === 'ru'
  const projectSlug = basePath.match(/^\/projects\/([^/]+)$/)?.[1]
  const project = projectSlug
    ? portfolio.projects.items.find((item) => item.slug === projectSlug)
    : undefined

  if (project) {
    return {
      title: `${project.title} — Manuylov Studio`,
      description: project.solution,
      image: project.cover,
      type: 'article',
    }
  }

  if (basePath === '/services') {
    return {
      title: isRussian
        ? 'Разработка сайтов и веб-приложений для бизнеса — услуги'
        : 'Website and web application development services',
      description: isRussian
        ? 'Создание корпоративных сайтов, веб-приложений, админ-панелей, backend, API и интеграций. Полный цикл разработки от задачи до запуска.'
        : portfolio.servicesPage.lead,
      image: '/developer-workspace-v3.webp',
      type: 'website',
    }
  }

  if (basePath === '/projects') {
    return {
      title: isRussian
        ? 'Портфолио веб-разработчика — сайты и веб-приложения'
        : 'Web developer portfolio — websites and web applications',
      description: isRussian
        ? 'Примеры разработанных сайтов, веб-приложений, личных кабинетов и бизнес-систем: задачи, решения, функциональность и технологии.'
        : portfolio.projects.page.lead,
      image: portfolio.projects.items[0]?.cover || '/developer-workspace-v3.webp',
      type: 'website',
    }
  }

  if (basePath === '/about') {
    return {
      title: isRussian
        ? 'Fullstack-разработчик Александр Мануйлов — обо мне'
        : 'Fullstack developer Alexandr Manuylov — about me',
      description: isRussian
        ? 'Проектирую и разрабатываю сайты, веб-приложения и внутренние системы для бизнеса: frontend, backend, базы данных и интеграции.'
        : portfolio.aboutPage.lead,
      image: '/alexandr-portrait-448.jpg',
      type: 'website',
    }
  }

  return {
    title: isRussian
      ? 'Разработка сайтов и веб-приложений — Александр Мануйлов'
      : 'Websites and web application development — Alexandr Manuylov',
    description: isRussian
      ? 'Fullstack-разработка сайтов, веб-приложений, личных кабинетов, backend, API и интеграций для бизнеса. От проектирования до запуска.'
      : 'Fullstack development of websites, web applications, customer portals, backend systems, APIs, and integrations for businesses.',
    image: '/developer-workspace-v3.webp',
    type: 'website',
  }
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

  return { basePath, html, language, seo: getSeoData(pathname, portfolio, language) }
}

export const prerenderPaths = [
  '/',
  '/services',
  '/projects',
  '/projects/gentlemans-room',
  '/projects/projectflow',
  '/projects/1c-crimea',
  '/projects/transgaz',
  '/about',
].flatMap((path) => [path, localizePath(path, 'en')])

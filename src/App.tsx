import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { YandexMetrika } from './components/routing/YandexMetrika'
import { content, type Language } from './content/portfolio'
import { getLanguageFromPath, stripLanguagePrefix, switchLanguagePath } from './routing/localizedRoutes'
import { LanguageProvider } from './routing/LanguageProvider'
import { PortfolioRoutes, type PortfolioRouteComponents } from './routing/PortfolioRoutes'

const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })))
const HomePage = lazy(() => import('./pages/HomePage').then(({ HomePage }) => ({ default: HomePage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(({ ProjectDetailPage }) => ({ default: ProjectDetailPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })))

const clientRouteComponents: PortfolioRouteComponents = {
  about: AboutPage,
  home: HomePage,
  notFound: NotFoundPage,
  projectDetail: ProjectDetailPage,
  projects: ProjectsPage,
  services: ServicesPage,
}

function AppRoutes() {
  const location = useLocation()
  const navigate = useNavigate()
  const language = getLanguageFromPath(location.pathname)
  const portfolio = content[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const handleLanguageChange = (nextLanguage: Language) => {
    navigate(`${switchLanguagePath(location.pathname, nextLanguage)}${location.search}${location.hash}`)
  }

  return (
    <LanguageProvider language={language}>
      <ScrollToTop />
      <YandexMetrika />
      <SiteLayout
        currentLanguage={language}
        portfolio={portfolio}
        onLanguageChange={handleLanguageChange}
      >
        <Suspense fallback={<div className="route-loader" role="status" aria-label="Loading" />}>
          <div
            className={`route-stage${stripLanguagePrefix(location.pathname) === '/' ? ' route-stage--home' : ''}`}
            key={location.pathname}
          >
            <PortfolioRoutes
              components={clientRouteComponents}
              language={language}
              portfolio={portfolio}
            />
          </div>
        </Suspense>
      </SiteLayout>
    </LanguageProvider>
  )
}

function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}

export default App

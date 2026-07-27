import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { YandexMetrika } from './components/routing/YandexMetrika'
import { content, type Language } from './content/portfolio'
import { getLanguageFromPath, stripLanguagePrefix, switchLanguagePath } from './routing/localizedRoutes'
import { LanguageProvider } from './routing/LanguageProvider'

const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })))
const HomePage = lazy(() => import('./pages/HomePage').then(({ HomePage }) => ({ default: HomePage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(({ ProjectDetailPage }) => ({ default: ProjectDetailPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })))

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
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/en/home" element={<Navigate to="/en" replace />} />
              <Route path="*" element={<NotFoundPage language={language} />} />
            </Routes>
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

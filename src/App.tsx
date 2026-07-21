import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { content, type Language } from './content/portfolio'

const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })))
const HomePage = lazy(() => import('./pages/HomePage').then(({ HomePage }) => ({ default: HomePage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(({ ProjectDetailPage }) => ({ default: ProjectDetailPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })))

const languageStorageKey = 'portfolio-language'

function getInitialLanguage(): Language {
  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey)
    if (storedLanguage === 'en' || storedLanguage === 'ru') return storedLanguage
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }

  return 'ru'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const portfolio = content[language]

  useEffect(() => {
    document.documentElement.lang = language

    try {
      window.localStorage.setItem(languageStorageKey, language)
    } catch {
      // The language still works for the current session without storage.
    }
  }, [language])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout
        currentLanguage={language}
        portfolio={portfolio}
        onLanguageChange={setLanguage}
      >
        <Suspense fallback={<div className="route-loader" role="status" aria-label="Loading" />}>
          <Routes>
            <Route path="/" element={<HomePage portfolio={portfolio} />} />
            <Route path="/projects" element={<ProjectsPage portfolio={portfolio} />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage portfolio={portfolio} />} />
            <Route path="/services" element={<ServicesPage portfolio={portfolio} />} />
            <Route path="/about" element={<AboutPage portfolio={portfolio} />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage language={language} />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App

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

function App() {
  const [language, setLanguage] = useState<Language>('ru')
  const portfolio = content[language]

  useEffect(() => {
    document.documentElement.lang = language
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

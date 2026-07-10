import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ScrollToTop } from './components/routing/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { content, type Language } from './content/portfolio'
import './App.css'

function App() {
  const [language, setLanguage] = useState<Language>('en')
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
        <Routes>
          <Route path="/" element={<HomePage portfolio={portfolio} />} />
          <Route path="/projects" element={<ProjectsPage portfolio={portfolio} />} />
          <Route path="/services" element={<ServicesPage portfolio={portfolio} />} />
          <Route path="/about" element={<AboutPage portfolio={portfolio} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage language={language} />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App

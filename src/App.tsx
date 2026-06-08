import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ApproachSection } from './components/ApproachSection'
import { ContactSection } from './components/ContactSection'
import { HeroBrand } from './components/HeroBrand'
import { HeroSection } from './components/HeroSection'
import { MobileBottomNavigation } from './components/MobileBottomNavigation'
import { Navigation } from './components/Navigation'
import { PageFooter } from './components/PageFooter'
import { ProcessSection } from './components/ProcessSection'
import { ProjectsSection } from './components/ProjectsSection'
import { StackSection } from './components/StackSection'
import { OverviewSection } from './components/OverviewSection'
import { content, type Language } from './content/portfolio'
import './App.css'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const t = content[language]

  return (
    <main lang={language}>
      <MobileBottomNavigation nav={t.nav} />

      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img src="/hero-workspace.png" alt="" />
          <div className="hero__shade" />
        </div>

        <Navigation
          currentLanguage={language}
          nav={t.nav}
          onLanguageChange={setLanguage}
        />
        <HeroBrand />
        <HeroSection hero={t.hero} />
      </section>

      <OverviewSection overview={t.overview} />
      <AboutSection about={t.about} />
      <StackSection stack={t.stack} />
      <ApproachSection approach={t.approach} />
      <ProcessSection process={t.process} />
      <ProjectsSection projects={t.projects} />
      <ContactSection contact={t.contact} />
      <PageFooter footer={t.footer} />
    </main>
  )
}

export default App

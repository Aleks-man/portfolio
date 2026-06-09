import { useEffect, useState } from 'react'
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
  const [activeSection, setActiveSection] = useState<string>(t.nav.links[0].href)

  useEffect(() => {
    const sectionIds = t.nav.links.map((link) => link.href.slice(1))

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.34
      const currentSectionId = sectionIds.findLast((id) => {
        const section = document.getElementById(id)

        return section ? section.offsetTop <= scrollPosition : false
      })

      if (currentSectionId) {
        setActiveSection(`#${currentSectionId}`)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [t.nav.links])

  return (
    <main lang={language}>
      <MobileBottomNavigation activeSection={activeSection} nav={t.nav} />

      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img src="/hero-workspace.png" alt="" />
          <div className="hero__shade" />
        </div>

        <Navigation
          activeSection={activeSection}
          currentLanguage={language}
          nav={t.nav}
          onLanguageChange={setLanguage}
        />
        <HeroBrand brand={t.brand} />
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

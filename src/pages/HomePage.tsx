import { HeroSection } from '../components/HeroSection'
import { HomeAboutSection } from '../components/HomeAboutSection'
import { OverviewSection } from '../components/OverviewSection'
import { ProjectsSection } from '../components/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { getLanguageFromPath } from '../routing/localizedRoutes'

type HomePageProps = {
  portfolio: PortfolioContent
}

export function HomePage({ portfolio }: HomePageProps) {
  const isRussian = getLanguageFromPath(window.location.pathname) === 'ru'

  useDocumentMetadata(
    isRussian
      ? 'Разработка сайтов и веб-приложений — Александр Мануйлов'
      : 'Websites and web application development — Alexandr Manuylov',
    isRussian
      ? 'Fullstack-разработка сайтов, веб-приложений, личных кабинетов, backend, API и интеграций для бизнеса. От проектирования до запуска.'
      : 'Fullstack development of websites, web applications, customer portals, backend systems, APIs, and integrations for businesses.',
  )

  return (
    <>
      <section className="hero" id="top">
        <HeroSection hero={portfolio.hero} telegramHref={portfolio.contact.telegramHref} />
      </section>
      <OverviewSection overview={portfolio.overview} />
      <HomeAboutSection about={portfolio.homeAbout} />
      <ProjectsSection projects={portfolio.projects} />
    </>
  )
}

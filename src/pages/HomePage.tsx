import { HeroSection } from '../components/HeroSection'
import { HomeAboutSection } from '../components/HomeAboutSection'
import { OverviewSection } from '../components/OverviewSection'
import { ProjectsSection } from '../components/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useCurrentLanguage } from '../routing/useCurrentLanguage'

type HomePageProps = {
  portfolio: PortfolioContent
}

export function HomePage({ portfolio }: HomePageProps) {
  const isRussian = useCurrentLanguage() === 'ru'

  useDocumentMetadata(
    isRussian
      ? 'Создание сайтов в Симферополе и Крыму — Александр Мануйлов'
      : 'Websites and web application development — Alexandr Manuylov',
    isRussian
      ? 'Разработка сайтов и веб-приложений для бизнеса в Симферополе, Крыму и по всей России: frontend, backend, API, интеграции и запуск.'
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

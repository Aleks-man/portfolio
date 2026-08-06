import { HeroSection } from '../components/HeroSection'
import { HomeAboutSection } from '../components/HomeAboutSection'
import { OverviewSection } from '../components/OverviewSection'
import { ProjectsSection } from '../components/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import '../styles/home-page.css'

type HomePageProps = {
  portfolio: PortfolioContent
}

export function HomePage({ portfolio }: HomePageProps) {
  useDocumentMetadata(portfolio)

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

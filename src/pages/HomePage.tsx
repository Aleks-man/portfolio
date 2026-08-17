import { HeroSection } from '../components/home/HeroSection'
import { HomeAboutSection } from '../components/home/HomeAboutSection'
import { OverviewSection } from '../components/home/OverviewSection'
import { ProjectsSection } from '../components/home/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import '../styles/hero.css'
import '../styles/hero-visual.css'
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

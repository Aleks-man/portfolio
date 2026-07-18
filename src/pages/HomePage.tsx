import { HeroSection } from '../components/HeroSection'
import { OverviewSection } from '../components/OverviewSection'
import { ProjectsSection } from '../components/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'

type HomePageProps = {
  portfolio: PortfolioContent
}

export function HomePage({ portfolio }: HomePageProps) {
  return (
    <>
      <section className="hero" id="top">
        <HeroSection hero={portfolio.hero} telegramHref={portfolio.contact.telegramHref} />
      </section>
      <OverviewSection overview={portfolio.overview} />
      <ProjectsSection projects={portfolio.projects} />
    </>
  )
}

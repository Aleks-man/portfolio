import { ContactSection } from '../components/ContactSection'
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
        <HeroSection hero={portfolio.hero} />
      </section>
      <OverviewSection overview={portfolio.overview} />
      <ProjectsSection projects={portfolio.projects} />
      <ContactSection contact={portfolio.contact} />
    </>
  )
}

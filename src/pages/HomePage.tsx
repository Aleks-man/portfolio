import { ContactSection } from '../components/ContactSection'
import { HeroBrand } from '../components/HeroBrand'
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
        <div className="hero__media" aria-hidden="true">
          <img src="/hero-workspace.png" alt="" />
          <div className="hero__shade" />
        </div>
        <HeroBrand brand={portfolio.brand} />
        <HeroSection hero={portfolio.hero} />
      </section>
      <OverviewSection overview={portfolio.overview} />
      <ProjectsSection projects={portfolio.projects} />
      <ContactSection contact={portfolio.contact} />
    </>
  )
}

import { AboutSection } from '../components/AboutSection'
import { ApproachSection } from '../components/ApproachSection'
import { ContactSection } from '../components/ContactSection'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'

type AboutPageProps = {
  portfolio: PortfolioContent
}

export function AboutPage({ portfolio }: AboutPageProps) {
  return (
    <div className="page-content" id="top">
      <AboutSection about={portfolio.about} />
      <ApproachSection approach={portfolio.approach} />
      <StackSection stack={portfolio.stack} />
      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

import { AboutOverview } from '../components/AboutOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'

type AboutPageProps = {
  portfolio: PortfolioContent
}

export function AboutPage({ portfolio }: AboutPageProps) {
  return (
    <div className="page-content about-page" id="top">
      <AboutOverview about={portfolio.aboutPage} />
      <StackSection stack={portfolio.stack} />
    </div>
  )
}

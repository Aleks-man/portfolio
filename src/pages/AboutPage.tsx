import { AboutOverview } from '../components/about/AboutOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import '../styles/about-page.css'

type AboutPageProps = {
  portfolio: PortfolioContent
}

export function AboutPage({ portfolio }: AboutPageProps) {
  useDocumentMetadata(portfolio)

  return (
    <div className="page-content about-page" id="top">
      <AboutOverview about={portfolio.aboutPage} />
      <StackSection stack={portfolio.stack} />
    </div>
  )
}

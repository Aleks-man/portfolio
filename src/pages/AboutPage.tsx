import { AboutOverview } from '../components/AboutOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'

type AboutPageProps = {
  portfolio: PortfolioContent
}

export function AboutPage({ portfolio }: AboutPageProps) {
  useDocumentMetadata(
    `${portfolio.aboutPage.title} — Manuylov Studio`,
    portfolio.aboutPage.lead,
  )

  return (
    <div className="page-content about-page" id="top">
      <AboutOverview about={portfolio.aboutPage} />
      <StackSection stack={portfolio.stack} />
    </div>
  )
}

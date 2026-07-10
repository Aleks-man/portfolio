import { ContactSection } from '../components/ContactSection'
import { OverviewSection } from '../components/OverviewSection'
import { ProcessSection } from '../components/ProcessSection'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'

type ServicesPageProps = {
  portfolio: PortfolioContent
}

export function ServicesPage({ portfolio }: ServicesPageProps) {
  return (
    <div className="page-content" id="top">
      <OverviewSection overview={portfolio.overview} />
      <ProcessSection process={portfolio.process} />
      <StackSection stack={portfolio.stack} />
      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

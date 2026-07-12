import { ContactSection } from '../components/ContactSection'
import { ProcessSection } from '../components/ProcessSection'
import { ServicesOverview } from '../components/ServicesOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'

type ServicesPageProps = {
  portfolio: PortfolioContent
}

export function ServicesPage({ portfolio }: ServicesPageProps) {
  return (
    <div className="page-content services-page" id="top">
      <ServicesOverview services={portfolio.servicesPage} />
      <ProcessSection process={portfolio.process} />
      <StackSection stack={portfolio.stack} />
      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

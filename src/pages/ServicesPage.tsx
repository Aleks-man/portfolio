import { ProcessSection } from '../components/ProcessSection'
import { ServiceStartSection } from '../components/ServiceStartSection'
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
      <ServiceStartSection start={portfolio.servicesPage.start} telegramHref={portfolio.contact.telegramHref} />
      <ProcessSection process={portfolio.process} />
      <StackSection stack={portfolio.stack} />
    </div>
  )
}

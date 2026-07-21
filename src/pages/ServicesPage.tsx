import { ProcessSection } from '../components/ProcessSection'
import { ServiceStartSection } from '../components/ServiceStartSection'
import { ServicesOverview } from '../components/ServicesOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'

type ServicesPageProps = {
  portfolio: PortfolioContent
}

export function ServicesPage({ portfolio }: ServicesPageProps) {
  useDocumentMetadata(
    `${portfolio.servicesPage.title} — Manuylov Studio`,
    portfolio.servicesPage.lead,
  )

  return (
    <div className="page-content services-page" id="top">
      <ServicesOverview services={portfolio.servicesPage} />
      <ServiceStartSection start={portfolio.servicesPage.start} telegramHref={portfolio.contact.telegramHref} />
      <ProcessSection process={portfolio.process} />
      <StackSection stack={portfolio.stack} />
    </div>
  )
}

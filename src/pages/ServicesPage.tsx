import { ProcessSection } from '../components/ProcessSection'
import { IndividualTasks } from '../components/services/IndividualTasks'
import { ServiceAreaSection } from '../components/services/ServiceAreaSection'
import { ServicePricing } from '../components/services/ServicePricing'
import { ServiceSupport } from '../components/services/ServiceSupport'
import { ServiceStartSection } from '../components/services/ServiceStartSection'
import { ServicesOverview } from '../components/services/ServicesOverview'
import { ServicesFaq } from '../components/services/ServicesFaq'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import '../styles/services-page.css'
import '../styles/service-pricing.css'
import '../styles/service-details.css'

type ServicesPageProps = {
  portfolio: PortfolioContent
}

export function ServicesPage({ portfolio }: ServicesPageProps) {
  useDocumentMetadata(portfolio)

  return (
    <div className="page-content services-page" id="top">
      <ServicesOverview services={portfolio.servicesPage} />
      <IndividualTasks tasks={portfolio.servicesPage.individualTasks} telegramHref={portfolio.contact.telegramHref} />
      <ServicePricing pricing={portfolio.servicesPage.pricing} />
      <ServiceSupport support={portfolio.servicesPage.support} telegramHref={portfolio.contact.telegramHref} />
      <ServiceAreaSection area={portfolio.servicesPage.serviceArea} />
      <ServiceStartSection start={portfolio.servicesPage.start} telegramHref={portfolio.contact.telegramHref} />
      <ProcessSection process={portfolio.process} />
      <ServicesFaq faq={portfolio.servicesPage.faq} />
    </div>
  )
}

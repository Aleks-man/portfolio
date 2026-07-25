import { ProcessSection } from '../components/ProcessSection'
import { ServiceStartSection } from '../components/ServiceStartSection'
import { ServicesOverview } from '../components/ServicesOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useCurrentLanguage } from '../routing/useCurrentLanguage'
import '../styles/services-page.css'

type ServicesPageProps = {
  portfolio: PortfolioContent
}

export function ServicesPage({ portfolio }: ServicesPageProps) {
  const isRussian = useCurrentLanguage() === 'ru'

  useDocumentMetadata(
    isRussian
      ? 'Разработка и поддержка сайтов в Симферополе и Крыму'
      : 'Website and web application development services',
    isRussian
      ? 'Создание, доработка и техническая поддержка сайтов и веб-приложений для бизнеса в Симферополе, Крыму и по всей России.'
      : portfolio.servicesPage.lead,
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

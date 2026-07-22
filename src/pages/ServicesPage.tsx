import { ProcessSection } from '../components/ProcessSection'
import { ServiceStartSection } from '../components/ServiceStartSection'
import { ServicesOverview } from '../components/ServicesOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { getLanguageFromPath } from '../routing/localizedRoutes'
import '../styles/services-page.css'

type ServicesPageProps = {
  portfolio: PortfolioContent
}

export function ServicesPage({ portfolio }: ServicesPageProps) {
  const isRussian = getLanguageFromPath(window.location.pathname) === 'ru'

  useDocumentMetadata(
    isRussian
      ? 'Разработка сайтов и веб-приложений для бизнеса — услуги'
      : 'Website and web application development services',
    isRussian
      ? 'Создание корпоративных сайтов, веб-приложений, админ-панелей, backend, API и интеграций. Полный цикл разработки от задачи до запуска.'
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

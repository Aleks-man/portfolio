import { AboutOverview } from '../components/AboutOverview'
import { StackSection } from '../components/StackSection'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { getLanguageFromPath } from '../routing/localizedRoutes'
import '../styles/about-page.css'

type AboutPageProps = {
  portfolio: PortfolioContent
}

export function AboutPage({ portfolio }: AboutPageProps) {
  const isRussian = getLanguageFromPath(window.location.pathname) === 'ru'

  useDocumentMetadata(
    isRussian
      ? 'Fullstack-разработчик Александр Мануйлов — обо мне'
      : 'Fullstack developer Alexandr Manuylov — about me',
    isRussian
      ? 'Проектирую и разрабатываю сайты, веб-приложения и внутренние системы для бизнеса: frontend, backend, базы данных и интеграции.'
      : portfolio.aboutPage.lead,
  )

  return (
    <div className="page-content about-page" id="top">
      <AboutOverview about={portfolio.aboutPage} />
      <StackSection stack={portfolio.stack} />
    </div>
  )
}

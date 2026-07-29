import { Link } from 'react-router-dom'
import type { Language, PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { localizePath } from '../routing/localizedRoutes'

type NotFoundPageProps = {
  language: Language
  portfolio: PortfolioContent
}

export function NotFoundPage({ language, portfolio }: NotFoundPageProps) {
  const isRussian = language === 'ru'

  useDocumentMetadata(portfolio, {
    title: isRussian ? 'Страница не найдена — Manuylov Studio' : 'Page not found — Manuylov Studio',
    description: isRussian
      ? 'Запрошенная страница не найдена.'
      : 'The requested page could not be found.',
    noIndex: true,
  })

  return (
    <section className="not-found" id="top">
      <p className="section__kicker">404</p>
      <h1>{isRussian ? 'Страница не найдена' : 'Page not found'}</h1>
      <Link className="button button--primary" to={localizePath('/', language)}>
        {isRussian ? 'Вернуться на главную' : 'Back to home'}
      </Link>
    </section>
  )
}

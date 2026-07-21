import { Link } from 'react-router-dom'
import type { Language } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'

type NotFoundPageProps = {
  language: Language
}

export function NotFoundPage({ language }: NotFoundPageProps) {
  const isRussian = language === 'ru'

  useDocumentMetadata(
    isRussian ? 'Страница не найдена — Manuylov Studio' : 'Page not found — Manuylov Studio',
    isRussian
      ? 'Запрошенная страница не найдена.'
      : 'The requested page could not be found.',
  )

  return (
    <section className="not-found" id="top">
      <p className="section__kicker">404</p>
      <h1>{isRussian ? 'Страница не найдена' : 'Page not found'}</h1>
      <Link className="button button--primary" to="/">
        {isRussian ? 'Вернуться на главную' : 'Back to home'}
      </Link>
    </section>
  )
}

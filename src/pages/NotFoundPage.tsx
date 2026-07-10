import { Link } from 'react-router-dom'
import type { Language } from '../content/portfolio'

type NotFoundPageProps = {
  language: Language
}

export function NotFoundPage({ language }: NotFoundPageProps) {
  return (
    <section className="not-found" id="top">
      <p className="section__kicker">404</p>
      <h1>{language === 'ru' ? 'Страница не найдена' : 'Page not found'}</h1>
      <Link className="button button--primary" to="/">
        {language === 'ru' ? 'Вернуться на главную' : 'Back to home'}
      </Link>
    </section>
  )
}

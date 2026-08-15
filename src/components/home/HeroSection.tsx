import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeroVisual } from './HeroVisual'
import type { PortfolioContent } from '../../content/portfolio'
import { localizePath } from '../../routing/localizedRoutes'
import { useCurrentLanguage } from '../../routing/useCurrentLanguage'
import { metrikaGoals, reachMetrikaGoal } from '../../analytics/yandexMetrika'

type HeroSectionProps = {
  hero: PortfolioContent['hero']
  telegramHref: string
}

export function HeroSection({ hero, telegramHref }: HeroSectionProps) {
  const language = useCurrentLanguage()

  return (
    <div className="hero__content">
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1>{hero.title}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={telegramHref} target="_blank" rel="noreferrer" onClick={() => reachMetrikaGoal(metrikaGoals.telegram)}>
            {hero.primaryAction}
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <Link className="button button--secondary" to={localizePath('/projects', language)}>
            {hero.secondaryAction}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <p className="hero__response-note">
          <span aria-hidden="true" />
          {hero.responseNote}
        </p>
        <div className="hero__highlights" aria-label={hero.highlightsLabel}>
          {hero.highlights.map((highlight) => (
            <div className="hero__highlight" key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual-wrap">
        <HeroVisual visual={hero.visual} />
      </div>
    </div>
  )
}

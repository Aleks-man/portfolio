import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react'
import type { PortfolioContent } from '../../content/portfolio'
import { metrikaGoals, reachMetrikaGoal } from '../../analytics/yandexMetrika'

type ServiceStartSectionProps = {
  start: PortfolioContent['servicesPage']['start']
  telegramHref: string
}

export function ServiceStartSection({ start, telegramHref }: ServiceStartSectionProps) {
  return (
    <section className="service-start" aria-labelledby="service-start-title">
      <div className="service-start__copy">
        <p className="section__kicker">{start.kicker}</p>
        <h2 id="service-start-title">{start.title}</h2>
        <p>{start.text}</p>
        <a className="button button--primary service-start__action" href={telegramHref} target="_blank" rel="noreferrer" onClick={() => reachMetrikaGoal(metrikaGoals.telegram)}>
          <MessageCircle size={18} aria-hidden="true" />
          {start.action}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>

      <ul className="service-start__points">
        {start.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

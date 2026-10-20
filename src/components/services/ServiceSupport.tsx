import { ArrowUpRight, Check } from 'lucide-react'
import type { PortfolioContent } from '../../content/portfolio'
import { metrikaGoals, reachMetrikaGoal } from '../../analytics/yandexMetrika'

type ServiceSupportProps = {
  support: PortfolioContent['servicesPage']['support']
  telegramHref: string
}

export function ServiceSupport({ support, telegramHref }: ServiceSupportProps) {
  return (
    <section className="service-support" id="website-support" aria-labelledby="service-support-title">
      <header className="service-support__heading">
        <p className="section__kicker">{support.kicker}</p>
        <h2 id="service-support-title">{support.title}</h2>
      </header>
      <div className="service-support__cards">
        {support.items.map((item) => {
          const url = new URL(telegramHref)
          url.searchParams.set('text', item.message)
          return (
            <article className="service-support__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.includes.map((point) => (
                  <li key={point}><Check size={16} aria-hidden="true" /><span>{point}</span></li>
                ))}
              </ul>
              <a
                className="text-link"
                href={url.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => reachMetrikaGoal(metrikaGoals.telegram)}
              >
                {item.action}<ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>
          )
        })}
      </div>
      <p className="service-support__note">{support.note}</p>
    </section>
  )
}
import type { PortfolioContent } from '../content/portfolio'

type OverviewSectionProps = {
  overview: PortfolioContent['overview']
}

export function OverviewSection({ overview }: OverviewSectionProps) {
  return (
    <section className="section section--intro overview-section" aria-label={overview.kicker}>
      <div className="section__header">
        <p className="section__kicker">{overview.kicker}</p>
        <h2>{overview.title}</h2>
      </div>
      <ol className="overview-list">
        {overview.services.map((service, index) => (
          <li className="overview-list__item" key={service.title}>
            <details className="overview-list__details">
              <summary>
                <span className="overview-list__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="overview-list__title">{service.title}</span>
                <span className="overview-list__toggle" aria-hidden="true" />
              </summary>
              <p>{service.description}</p>
            </details>
          </li>
        ))}
      </ol>
    </section>
  )
}

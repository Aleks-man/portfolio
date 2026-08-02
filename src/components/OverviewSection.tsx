import type { PortfolioContent } from '../content/portfolio'
import { useDisclosureSet } from '../hooks/useDisclosureSet'

type OverviewSectionProps = {
  overview: PortfolioContent['overview']
}

export function OverviewSection({ overview }: OverviewSectionProps) {
  const disclosures = useDisclosureSet()

  return (
    <section className="section section--intro overview-section" aria-label={overview.kicker}>
      <div className="section__header">
        <p className="section__kicker">{overview.kicker}</p>
        <h2>{overview.title}</h2>
      </div>
      <ol className="overview-list">
        {overview.services.map((service, index) => {
          const isOpen = disclosures.isOpen(index)
          const contentId = `overview-description-${index + 1}`

          return (
          <li className="overview-list__item" key={service.title}>
            <div className={`overview-list__details${isOpen ? ' is-open' : ''}`}>
              <button
                className="overview-list__summary"
                type="button"
                aria-controls={contentId}
                aria-expanded={isOpen}
                onClick={() => disclosures.toggleItem(index)}
              >
                <span className="overview-list__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="overview-list__title">{service.title}</span>
                <span className="overview-list__toggle" aria-hidden="true" />
              </button>
              <div
                className="overview-list__content disclosure-content"
                id={contentId}
                aria-hidden={!isOpen}
              >
                <div><p>{service.description}</p></div>
              </div>
            </div>
          </li>
          )
        })}
      </ol>
    </section>
  )
}

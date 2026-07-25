import { Globe2, MapPin } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type ServiceAreaSectionProps = {
  area: PortfolioContent['servicesPage']['serviceArea']
}

export function ServiceAreaSection({ area }: ServiceAreaSectionProps) {
  return (
    <section className="service-area" aria-labelledby="service-area-title">
      <div className="service-area__copy">
        <p className="section__kicker">{area.kicker}</p>
        <h2 id="service-area-title">{area.title}</h2>
        <p>{area.text}</p>
        <p>{area.services}</p>
      </div>

      <dl className="service-area__details">
        <div>
          <MapPin aria-hidden="true" />
          <dt>{area.locationLabel}</dt>
          <dd>{area.location}</dd>
        </div>
        <div>
          <Globe2 aria-hidden="true" />
          <dt>{area.coverageLabel}</dt>
          <dd>{area.coverage}</dd>
        </div>
      </dl>
    </section>
  )
}

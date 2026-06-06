import { CheckCircle2 } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type OverviewSectionProps = {
  overview: PortfolioContent['overview']
}

export function OverviewSection({ overview }: OverviewSectionProps) {
  return (
    <section className="section section--intro" aria-label={overview.kicker}>
      <div className="section__header">
        <p className="section__kicker">{overview.kicker}</p>
        <h2>{overview.title}</h2>
      </div>
      <div className="service-grid">
        {overview.services.map((service) => (
          <div className="service" key={service}>
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

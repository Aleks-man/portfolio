import { Check, Globe2, LayoutDashboard, PanelsTopLeft, ServerCog, Wrench } from 'lucide-react'
import type { PortfolioContent, ServiceIconId } from '../content/portfolio'

type ServicesOverviewProps = {
  services: PortfolioContent['servicesPage']
}

const serviceIcons = {
  website: Globe2,
  app: PanelsTopLeft,
  dashboard: LayoutDashboard,
  backend: ServerCog,
  maintenance: Wrench,
} satisfies Record<ServiceIconId, typeof Globe2>

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <>
      <header className="services-page__intro">
        <p className="section__kicker">{services.kicker}</p>
        <h1>{services.title}</h1>
        <p>{services.lead}</p>
      </header>

      <section className="service-catalog" aria-label={services.kicker}>
        {services.items.map((service, index) => {
          const Icon = serviceIcons[service.id]

          return (
            <article className="service-offer" key={service.id}>
              <div className="service-offer__number">0{index + 1}</div>
              <div className="service-offer__icon"><Icon size={26} aria-hidden="true" /></div>
              <div className="service-offer__copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="service-offer__fit">
                <span>{services.fitLabel}</span>
                <p>{service.fit}</p>
              </div>
              <div className="service-offer__includes">
                <span>{services.includesLabel}</span>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

import type { PortfolioContent } from '../content/portfolio'

type ServicePricingProps = {
  pricing: PortfolioContent['servicesPage']['pricing']
}

export function ServicePricing({ pricing }: ServicePricingProps) {
  return (
    <section className="service-pricing" aria-labelledby="service-pricing-title">
      <div className="service-pricing__heading">
        <div>
          <p className="section__kicker">{pricing.kicker}</p>
          <h2 id="service-pricing-title">{pricing.title}</h2>
        </div>
        <p>{pricing.lead}</p>
      </div>

      <div className="service-pricing__list">
        {pricing.items.map((item, index) => (
          <article className="service-pricing__item" key={item.title}>
            <span className="service-pricing__number">0{index + 1}</span>
            <div className="service-pricing__service">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <dl className="service-pricing__details">
              <div>
                <dt>{pricing.priceLabel}</dt>
                <dd>{item.price}</dd>
              </div>
              <div>
                <dt>{pricing.timelineLabel}</dt>
                <dd>{item.timeline}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <p className="service-pricing__note">{pricing.note}</p>
    </section>
  )
}

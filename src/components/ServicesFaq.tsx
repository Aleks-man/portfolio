import type { PortfolioContent } from '../content/portfolio'

type ServicesFaqProps = {
  faq: PortfolioContent['servicesPage']['faq']
}

export function ServicesFaq({ faq }: ServicesFaqProps) {
  return (
    <section className="services-faq" aria-labelledby="services-faq-title">
      <div className="services-faq__heading">
        <p className="section__kicker">{faq.kicker}</p>
        <h2 id="services-faq-title">{faq.title}</h2>
        <p>{faq.lead}</p>
      </div>

      <div className="services-faq__list">
        {faq.items.map((item) => (
          <details className="services-faq__item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <i aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

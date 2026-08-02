import type { PortfolioContent } from '../content/portfolio'
import { useDisclosureSet } from '../hooks/useDisclosureSet'

type ServicesFaqProps = {
  faq: PortfolioContent['servicesPage']['faq']
}

export function ServicesFaq({ faq }: ServicesFaqProps) {
  const disclosures = useDisclosureSet()

  return (
    <section className="services-faq" aria-labelledby="services-faq-title">
      <div className="services-faq__heading">
        <p className="section__kicker">{faq.kicker}</p>
        <h2 id="services-faq-title">{faq.title}</h2>
        <p>{faq.lead}</p>
      </div>

      <div className="services-faq__list">
        {faq.items.map((item, index) => {
          const isOpen = disclosures.isOpen(index)
          const answerId = `services-faq-answer-${index + 1}`

          return (
          <div className={`services-faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <button
              className="services-faq__summary"
              type="button"
              aria-controls={answerId}
              aria-expanded={isOpen}
              onClick={() => disclosures.toggleItem(index)}
            >
              <span>{item.question}</span>
              <i aria-hidden="true" />
            </button>
            <div className="services-faq__content" id={answerId} aria-hidden={!isOpen}>
              <div><p>{item.answer}</p></div>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

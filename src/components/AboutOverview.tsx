import { Check, CircleDot } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type AboutOverviewProps = {
  about: PortfolioContent['aboutPage']
}

export function AboutOverview({ about }: AboutOverviewProps) {
  return (
    <>
      <header className="about-page__intro">
        <div className="about-page__headline">
          <p className="section__kicker">{about.kicker}</p>
          <h1>{about.title}</h1>
          <figure className="about-page__portrait">
            <img
              src="/alexandr-portrait.png"
              alt="Alexandr Manuylov"
              width="1129"
              height="1393"
            />
          </figure>
        </div>
        <div className="about-page__bio">
          <p className="about-page__lead">{about.lead}</p>
          <p>{about.bio}</p>
          <div className="availability-card">
            <CircleDot size={18} aria-hidden="true" />
            <span>{about.availabilityLabel}</span>
            <strong>{about.availabilityValue}</strong>
          </div>
        </div>
      </header>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="principles-section__header">
          <p className="section__kicker">{about.principlesKicker}</p>
          <h2 id="principles-title">{about.principlesTitle}</h2>
        </div>
        <div className="principles-grid">
          {about.principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="collaboration-section">
        <div>
          <p className="section__kicker">{about.collaborationKicker}</p>
          <h2>{about.collaborationTitle}</h2>
          <p className="collaboration-section__text">{about.collaborationText}</p>
        </div>
        <ul>
          {about.collaborationItems.map((item) => (
            <li key={item}><Check size={17} aria-hidden="true" />{item}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

import type { PortfolioContent } from '../content/portfolio'

type AboutSectionProps = {
  about: PortfolioContent['about']
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="section about" id="about">
      <div className="about__copy">
        <p className="section__kicker">{about.kicker}</p>
        <h2>{about.title}</h2>
        <p>{about.text}</p>
      </div>
      <div className="focus-list">
        {about.focusAreas.map(([title, text]) => (
          <article className="focus-item" key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

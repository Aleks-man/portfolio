import { Code2 } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type ApproachSectionProps = {
  approach: PortfolioContent['approach']
}

export function ApproachSection({ approach }: ApproachSectionProps) {
  return (
    <section className="section section--split">
      <div className="section__header">
        <p className="section__kicker">{approach.kicker}</p>
        <h2>{approach.title}</h2>
      </div>
      <div className="approach">
        <Code2 size={28} aria-hidden="true" />
        <p>{approach.text}</p>
      </div>
    </section>
  )
}

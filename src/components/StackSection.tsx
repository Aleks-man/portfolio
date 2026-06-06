import { Database, MonitorSmartphone, Server, TerminalSquare } from 'lucide-react'
import type { PortfolioContent, StackIconId } from '../content/portfolio'

type StackSectionProps = {
  stack: PortfolioContent['stack']
}

const stackIcons = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: Database,
  workflow: TerminalSquare,
} satisfies Record<StackIconId, typeof MonitorSmartphone>

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section className="section" id="stack">
      <div className="section__header">
        <p className="section__kicker">{stack.kicker}</p>
        <h2>{stack.title}</h2>
      </div>
      <div className="stack-grid">
        {stack.groups.map(([id, title, items]) => {
          const Icon = stackIcons[id]

          return (
            <article className="stack-card" key={id}>
              <div className="stack-card__head">
                <Icon size={22} aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <div className="tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

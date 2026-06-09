import { Cpu, Rocket, ShieldCheck, Workflow } from 'lucide-react'
import type { PortfolioContent, ProcessIconId } from '../content/portfolio'

type ProcessSectionProps = {
  process: PortfolioContent['process']
}

const processIcons = {
  understand: Workflow,
  build: Cpu,
  polish: ShieldCheck,
  ship: Rocket,
} satisfies Record<ProcessIconId, typeof Workflow>

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section className="section process" aria-label={process.aria}>
      <div className="section__header">
        <p className="section__kicker">{process.kicker}</p>
        <h2>{process.title}</h2>
      </div>
      <div className="process-grid">
        {process.steps.map((step, index) => {
          const Icon = processIcons[step.id]

          return (
            <article className="process-card" key={step.id}>
              <div className="process-card__index">0{index + 1}</div>
              <Icon size={24} aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

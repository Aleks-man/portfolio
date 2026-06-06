import { ArrowUpRight, Layers3 } from 'lucide-react'
import type { PortfolioContent } from '../content/portfolio'

type ProjectsSectionProps = {
  projects: PortfolioContent['projects']
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section" id="projects">
      <div className="section__header section__header--row">
        <div>
          <p className="section__kicker">{projects.kicker}</p>
          <h2>{projects.title}</h2>
        </div>
        <a className="text-link" href="#contact">
          {projects.action}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="project-grid">
        {projects.items.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card__top">
              <span>{project.type}</span>
              <Layers3 size={20} aria-hidden="true" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

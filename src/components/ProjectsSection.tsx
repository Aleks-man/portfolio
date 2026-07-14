import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioContent } from '../content/portfolio'

type ProjectsSectionProps = {
  projects: PortfolioContent['projects']
}

type ProjectPreviewProps = {
  variant: PortfolioContent['projects']['items'][number]['visual']
  image?: string
  alt?: string
}

export function ProjectPreview({ variant, image, alt = '' }: ProjectPreviewProps) {
  if (image) {
    return (
      <div className="project-preview project-preview--image">
        <img src={image} alt={alt} width="1906" height="917" loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-preview project-preview--${variant}`} aria-hidden="true">
      <div className="project-preview__window">
        <div className="project-preview__toolbar"><i /><i /><i /><span /></div>
        <div className="project-preview__layout">
          <aside><i /><i /><i /><i /></aside>
          <div className="project-preview__canvas">
            <div className="project-preview__heading"><span /><span /></div>
            <div className="project-preview__metrics"><i /><i /><i /></div>
            <div className="project-preview__content"><span /><span /><span /></div>
          </div>
        </div>
      </div>
      <div className="project-preview__phone">
        <i /><span /><strong /><span />
      </div>
      <div className="project-preview__badge"><i /> API</div>
    </div>
  )
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section featured-projects" id="projects">
      <div className="section__header section__header--row">
        <div>
          <p className="section__kicker">{projects.kicker}</p>
          <h2>{projects.title}</h2>
        </div>
        <Link className="text-link" to="/projects">
          {projects.action}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <div className="project-showcase">
        {projects.items.map((project, index) => (
          <article className={`project-case${index === 0 ? ' project-case--featured' : ''}`} key={project.title}>
            <ProjectPreview variant={project.visual} image={project.cover} alt={project.title} />
            <div className="project-case__body">
              <div className="project-case__meta">
                <span>0{index + 1}</span>
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <dl className="project-case__details">
                <div><dt>{projects.challengeLabel}</dt><dd>{project.challenge}</dd></div>
                <div><dt>{projects.solutionLabel}</dt><dd>{project.solution}</dd></div>
              </dl>
              <div className="tags">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioContent } from '../content/portfolio'
import { localizePath } from '../routing/localizedRoutes'
import { useCurrentLanguage } from '../routing/useCurrentLanguage'

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
        <img src={image} alt={alt} width="1906" height="917" loading="lazy" decoding="async" />
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
  const language = useCurrentLanguage()

  return (
    <section className="section featured-projects" id="projects">
      <div className="section__header">
        <div>
          <p className="section__kicker">{projects.kicker}</p>
          <h2>{projects.title}</h2>
        </div>
      </div>

      <div className="project-showcase">
        {projects.items.slice(0, 2).map((project, index) => (
          <Link
            className={`project-case${index === 0 ? ' project-case--featured' : ''}`}
            to={localizePath(`/projects/${project.slug}`, language)}
            aria-label={`${projects.page.detailsAction}: ${project.title}`}
            key={project.title}
          >
            <ProjectPreview variant={project.visual} image={project.cover} alt={project.title} />
            <div className="project-case__body">
              <div className="project-case__meta">
                <span>0{index + 1}</span>
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="project-case__summary">
                <p>{project.solution}</p>
              </div>
              <span className="project-case__cta text-link">
                {projects.page.detailsAction}
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
              <div className="tags">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="project-showcase__footer">
        <Link className="text-link" to={localizePath('/projects', language)}>
          {projects.action}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

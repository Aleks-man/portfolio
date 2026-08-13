import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioContent } from '../content/portfolio'
import { localizePath } from '../routing/localizedRoutes'
import { useCurrentLanguage } from '../routing/useCurrentLanguage'

type ProjectsSectionProps = {
  projects: PortfolioContent['projects']
}

type ProjectPreviewProps = {
  image: string
  thumbnail?: string
  thumbnailSmall?: string
  alt?: string
}

export function ProjectPreview({ image, thumbnail, thumbnailSmall, alt = '' }: ProjectPreviewProps) {
  return (
    <div className="project-preview">
      <picture>
        {thumbnail && (
          <source
            media="(max-width: 820px)"
            srcSet={thumbnailSmall ? `${thumbnailSmall} 480w, ${thumbnail} 800w` : thumbnail}
            sizes="calc(100vw - 28px)"
          />
        )}
        <img src={image} alt={alt} width="1906" height="917" loading="lazy" decoding="async" />
      </picture>
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
            <ProjectPreview
              image={project.cover}
              thumbnail={project.thumbnail}
              thumbnailSmall={project.thumbnailSmall}
              alt={project.title}
            />
            <div className="project-case__body">
              <div className="project-case__meta">
                <span>0{index + 1}</span>
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="project-case__summary">
                <span>{projects.page.resultLabel}</span>
                <p>{project.result}</p>
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

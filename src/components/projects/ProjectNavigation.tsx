import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioContent } from '../../content/portfolio'

type Project = PortfolioContent['projects']['items'][number]
type ProjectPage = PortfolioContent['projects']['page']

type ProjectNavigationProps = {
  nextProject: Project | null
  page: ProjectPage
  previousProject: Project | null
}

export function ProjectNavigation({ nextProject, page, previousProject }: ProjectNavigationProps) {
  return (
    <nav className="project-detail__navigation" aria-label={page.projectNavigationLabel}>
      {previousProject ? (
        <Link className="project-detail__navigation-link project-detail__navigation-link--previous" to={`/projects/${previousProject.slug}`}>
          <ArrowLeft aria-hidden="true" />
          <span><small>{page.previousProjectLabel}</small><strong>{previousProject.title}</strong></span>
        </Link>
      ) : <span />}
      {nextProject && (
        <Link className="project-detail__navigation-link project-detail__navigation-link--next" to={`/projects/${nextProject.slug}`}>
          <span><small>{page.nextProjectLabel}</small><strong>{nextProject.title}</strong></span>
          <ArrowRight aria-hidden="true" />
        </Link>
      )}
    </nav>
  )
}

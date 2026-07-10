import { ContactSection } from '../components/ContactSection'
import { ProjectsSection } from '../components/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'

type ProjectsPageProps = {
  portfolio: PortfolioContent
}

export function ProjectsPage({ portfolio }: ProjectsPageProps) {
  return (
    <div className="page-content" id="top">
      <ProjectsSection projects={portfolio.projects} />
      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

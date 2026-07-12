import { ExternalLink, Plus } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { ContactSection } from '../components/ContactSection'
import { ProjectPreview } from '../components/ProjectsSection'
import type { PortfolioContent } from '../content/portfolio'

type ProjectsPageProps = {
  portfolio: PortfolioContent
}

type ProjectActionProps = {
  href: string
  label: string
  placeholder: string
  type: 'demo' | 'repository'
}

function ProjectAction({ href, label, placeholder, type }: ProjectActionProps) {
  const Icon = type === 'repository' ? SiGithub : ExternalLink

  if (!href) {
    return (
      <span className="case-study__action is-placeholder" title={placeholder}>
        <Plus size={16} aria-hidden="true" />
        {label}
      </span>
    )
  }

  return (
    <a className="case-study__action" href={href} target="_blank" rel="noreferrer">
      <Icon size={16} aria-hidden="true" />
      {label}
    </a>
  )
}

export function ProjectsPage({ portfolio }: ProjectsPageProps) {
  const { projects } = portfolio

  return (
    <div className="page-content projects-page" id="top">
      <header className="projects-page__intro">
        <p className="section__kicker">{projects.page.kicker}</p>
        <h1>{projects.page.title}</h1>
        <p>{projects.page.lead}</p>
      </header>

      <section className="case-study-list" aria-label={projects.page.kicker}>
        {projects.items.map((project, index) => (
          <article className="case-study" key={project.title}>
            <div className="case-study__visual">
              <ProjectPreview variant={project.visual} />
            </div>

            <div className="case-study__content">
              <div className="case-study__topline">
                <span>0{index + 1}</span>
                <span>{project.type}</span>
                <span>{projects.placeholderLabel}</span>
              </div>
              <h2>{project.title}</h2>

              <div className="case-study__facts">
                <div><span>{projects.page.roleLabel}</span><strong>{project.role}</strong></div>
                <div><span>{projects.page.yearLabel}</span><strong>{project.year}</strong></div>
              </div>

              <dl className="case-study__story">
                <div><dt>{projects.challengeLabel}</dt><dd>{project.challenge}</dd></div>
                <div><dt>{projects.solutionLabel}</dt><dd>{project.solution}</dd></div>
              </dl>

              <div className="case-study__features">
                <h3>{projects.page.featuresLabel}</h3>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>

              <div className="tags">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>

              <div className="case-study__actions">
                <ProjectAction
                  href={project.demoHref}
                  label={projects.page.demoAction}
                  placeholder={projects.page.linkPlaceholder}
                  type="demo"
                />
                <ProjectAction
                  href={project.repositoryHref}
                  label={projects.page.repositoryAction}
                  placeholder={projects.page.linkPlaceholder}
                  type="repository"
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

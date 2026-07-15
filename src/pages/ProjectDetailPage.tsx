import { ArrowLeft, ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ContactSection } from '../components/ContactSection'
import type { PortfolioContent } from '../content/portfolio'

type ProjectDetailPageProps = { portfolio: PortfolioContent }

export function ProjectDetailPage({ portfolio }: ProjectDetailPageProps) {
  const { slug } = useParams()
  const project = portfolio.projects.items.find((item) => item.slug === slug)

  useEffect(() => {
    if (!project) return
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = description?.content
    document.title = `${project.title} — Alex Manuylov`
    if (description) description.content = project.solution
    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.content = previousDescription
    }
  }, [project])

  if (!project) return <Navigate to="/projects" replace />

  const { projects } = portfolio
  return (
    <div className="project-detail" id="top">
      <header className="project-detail__hero">
        <Link className="project-detail__back" to="/projects"><ArrowLeft size={18} />{projects.page.backAction}</Link>
        <div className="project-detail__heading">
          <div>
            <p className="section__kicker">{project.type}</p>
            <h1>{project.title}</h1>
          </div>
          <p>{project.solution}</p>
        </div>
        <div className="project-detail__facts">
          <div><span>{projects.page.roleLabel}</span><strong>{project.role}</strong></div>
          <div><span>{projects.page.yearLabel}</span><strong>{project.year}</strong></div>
          <div><span>{projects.page.statusLabel}</span><strong>{project.status}</strong></div>
        </div>
        <img className="project-detail__cover" src={project.cover} alt={`${project.title} — cover`} width="1906" height="917" decoding="async" fetchPriority="high" />
      </header>

      <main className="project-detail__content">
        <section className="project-detail__summary">
          <div><p className="section__kicker">{projects.challengeLabel}</p><h2>{project.challenge}</h2></div>
          <div className="project-detail__features">
            <h3>{projects.page.featuresLabel}</h3>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            {(project.demoHref || project.repositoryHref) && <div className="project-detail__actions">
              {project.demoHref && <a href={project.demoHref} target="_blank" rel="noreferrer"><ExternalLink size={17} />{projects.page.demoAction}</a>}
              {project.repositoryHref && <a href={project.repositoryHref} target="_blank" rel="noreferrer"><SiGithub size={17} />{projects.page.repositoryAction}</a>}
            </div>}
          </div>
        </section>

        <section className="project-detail__gallery" aria-label={projects.page.galleryLabel}>
          <div className="project-detail__gallery-head"><p className="section__kicker">{projects.page.galleryLabel}</p><span>{String(project.gallery.length).padStart(2, '0')}</span></div>
          {project.gallery.map((image, index) => <figure key={image}><img src={image} alt={`${project.title} — ${index + 1}`} width="1906" height="917" loading="lazy" decoding="async" /></figure>)}
        </section>
      </main>
      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

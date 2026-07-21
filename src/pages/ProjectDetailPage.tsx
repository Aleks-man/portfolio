import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ProjectLightbox } from '../components/projects/ProjectLightbox'
import { ProjectNavigation } from '../components/projects/ProjectNavigation'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useLightbox } from '../hooks/useLightbox'
import '../styles/projects-page.css'

type ProjectDetailPageProps = { portfolio: PortfolioContent }

export function ProjectDetailPage({ portfolio }: ProjectDetailPageProps) {
  const { slug } = useParams()
  const project = portfolio.projects.items.find((item) => item.slug === slug)
  const lightbox = useLightbox(project?.gallery.length ?? 0)

  useDocumentMetadata(
    project ? `${project.title} — Manuylov Studio` : undefined,
    project?.solution,
  )

  if (!project) return <Navigate to="/projects" replace />

  const { projects } = portfolio
  const projectIndex = projects.items.findIndex((item) => item.slug === project.slug)
  const previousProject = projectIndex > 0 ? projects.items[projectIndex - 1] : null
  const nextProject = projectIndex < projects.items.length - 1 ? projects.items[projectIndex + 1] : null

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

      <div className="project-detail__content">
        <section className="project-detail__summary">
          <div className="project-detail__story">
            <p className="section__kicker">{projects.challengeLabel}</p>
            <h2>{project.challenge}</h2>
            <div className="project-detail__result">
              <p className="section__kicker">{projects.page.resultLabel}</p>
              <p>{project.result}</p>
            </div>
          </div>
          <div className="project-detail__features">
            <h3>{projects.page.featuresLabel}</h3>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            {project.demoHref && <div className="project-detail__actions">
              {project.demoHref && <a href={project.demoHref} target="_blank" rel="noreferrer"><ExternalLink size={17} />{projects.page.demoAction}</a>}
            </div>}
            {project.demoAccess && (
              <aside className="project-detail__demo-access">
                <div className="project-detail__demo-access-head">
                  <span>{projects.page.demoAccessLabel}</span>
                  <a href={project.demoAccess.href} target="_blank" rel="noreferrer">
                    {projects.page.demoAdminAction}<ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
                <dl>
                  <div>
                    <dt>{projects.page.demoLoginLabel}</dt>
                    <dd>{project.demoAccess.login}</dd>
                  </div>
                  <div>
                    <dt>{projects.page.demoPasswordLabel}</dt>
                    <dd>{project.demoAccess.password}</dd>
                  </div>
                </dl>
              </aside>
            )}
          </div>
        </section>

        <section className="project-detail__gallery" aria-label={projects.page.galleryLabel}>
          <div className="project-detail__gallery-head"><p className="section__kicker">{projects.page.galleryLabel}</p><span>{String(project.gallery.length).padStart(2, '0')}</span></div>
          {project.gallery.map((image, index) => (
            <figure key={image}>
              <button
                className="project-detail__gallery-button"
                type="button"
                aria-label={`${projects.page.openImageLabel}: ${project.title}, ${index + 1}`}
                onClick={() => lightbox.open(index)}
              >
                <img src={image} alt={`${project.title} — ${index + 1}`} width="1906" height="917" loading="lazy" decoding="async" />
              </button>
            </figure>
          ))}
        </section>

        <ProjectNavigation page={projects.page} previousProject={previousProject} nextProject={nextProject} />
      </div>
      {lightbox.activeIndex !== null && (
        <ProjectLightbox
          activeIndex={lightbox.activeIndex}
          closeLabel={projects.page.closeImageLabel}
          galleryLabel={projects.page.galleryLabel}
          images={project.gallery}
          nextLabel={projects.page.nextImageLabel}
          previousLabel={projects.page.previousImageLabel}
          projectTitle={project.title}
          onClose={lightbox.close}
          onNext={lightbox.showNext}
          onPrevious={lightbox.showPrevious}
        />
      )}
    </div>
  )
}

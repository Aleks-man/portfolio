import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectLightbox } from '../components/projects/ProjectLightbox'
import type { PortfolioContent } from '../content/portfolio'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useLightbox } from '../hooks/useLightbox'
import '../styles/projects-page.css'

type ProjectsPageProps = {
  portfolio: PortfolioContent
}

export function ProjectsPage({ portfolio }: ProjectsPageProps) {
  const { projects } = portfolio
  const additionalWorkImages = projects.more.items.map((item) => item.image)
  const lightbox = useLightbox()

  useDocumentMetadata(
    `${projects.page.title} — Manuylov Studio`,
    projects.page.lead,
  )

  return (
    <>
      <div className="page-content projects-page" id="top">
      <header className="projects-page__intro">
        <p className="section__kicker">{projects.page.kicker}</p>
        <h1>{projects.page.title}</h1>
        <p>{projects.page.lead}</p>
      </header>

      <section className="project-index" aria-label={projects.page.kicker}>
        {projects.items.map((project, index) => (
          <article className="project-index__card" key={project.slug}>
            <Link className="project-index__visual" to={`/projects/${project.slug}`} aria-label={`${projects.page.detailsAction}: ${project.title}`}>
              <img src={project.cover} alt="" width="1906" height="917" loading={index ? 'lazy' : 'eager'} decoding="async" fetchPriority={index ? 'auto' : 'high'} />
            </Link>
            <div className="project-index__body">
              <div className="project-index__meta"><span>{project.type}</span><span>{project.status}</span></div>
              <h2><Link to={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.challenge}</p>
              <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <Link className="project-index__link" to={`/projects/${project.slug}`}>
                {projects.page.detailsAction}<ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="project-collage" aria-labelledby="more-projects-title">
        <header className="project-collage__header">
          <div><p className="section__kicker">{projects.more.kicker}</p><h2 id="more-projects-title">{projects.more.title}</h2></div>
          <div><p>{projects.more.lead}</p><span>{projects.more.stackLabel}</span></div>
        </header>
        <div className="project-collage__grid">
          {projects.more.items.map((item, index) => (
            <figure className={`project-collage__item project-collage__item--${index + 1}`} key={item.image}>
              <button
                className="project-collage__button"
                type="button"
                aria-label={`${projects.page.openImageLabel}: ${item.title}`}
                onClick={() => lightbox.open(index)}
              >
                <img src={item.image} alt={`${item.title} — ${item.category}`} width="1600" height="1067" loading="lazy" decoding="async" />
              </button>
              <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      </div>
      {lightbox.activeIndex !== null && (
        <ProjectLightbox
          activeIndex={lightbox.activeIndex}
          closeLabel={projects.page.closeImageLabel}
          galleryLabel={projects.more.kicker}
          images={additionalWorkImages}
          nextLabel={projects.page.nextImageLabel}
          previousLabel={projects.page.previousImageLabel}
          onClose={lightbox.close}
        />
      )}
    </>
  )
}

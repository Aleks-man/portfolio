import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import type { PortfolioContent } from '../content/portfolio'

type ProjectsPageProps = {
  portfolio: PortfolioContent
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

      <section className="project-index" aria-label={projects.page.kicker}>
        {projects.items.map((project, index) => (
          <article className="project-index__card" key={project.slug}>
            <Link className="project-index__visual" to={`/projects/${project.slug}`} aria-label={`${projects.page.detailsAction}: ${project.title}`}>
              <img src={project.cover} alt="" width="1906" height="917" loading={index ? 'lazy' : 'eager'} />
              <span className="project-index__number">0{index + 1}</span>
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
              <img src={item.image} alt={`${item.title} — ${item.category}`} width="1600" height="1067" loading="lazy" />
              <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContactSection contact={portfolio.contact} />
    </div>
  )
}

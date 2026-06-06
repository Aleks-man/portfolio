import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Server,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import './App.css'

const stackGroups = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Animation'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'REST API', 'Auth flows', 'Integrations'],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Schema design', 'Queries'],
  },
  {
    title: 'Workflow',
    icon: TerminalSquare,
    items: ['Git', 'Deploy', 'Clean code', 'Testing mindset', 'Docs'],
  },
]

const services = [
  'Landing pages and portfolio websites',
  'Fullstack web apps with API and database',
  'Admin panels, dashboards, and internal tools',
  'Adaptive interfaces for desktop and mobile',
  'Backend services, integrations, and automation',
  'Polished UI with clear structure and motion',
]

const projects = [
  {
    title: 'Portfolio Platform',
    type: 'Personal brand',
    description:
      'A fast portfolio site focused on fullstack skills, elegant presentation, and easy future expansion.',
    stack: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'API Service Concept',
    type: 'Backend',
    description:
      'Express-based service architecture with routes, validation, authentication, and database-ready structure.',
    stack: ['Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Product Dashboard',
    type: 'Frontend app',
    description:
      'A clean dashboard direction for analytics, tables, filters, forms, and practical business workflows.',
    stack: ['React', 'Charts', 'REST API'],
  },
]

const stats = [
  ['Fullstack', 'role'],
  ['React + Node', 'core stack'],
  ['UI + API', 'delivery'],
]

function App() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img src="/hero-workspace.png" alt="" />
          <div className="hero__shade" />
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <a className="nav__brand" href="#top">
            <Braces size={20} aria-hidden="true" />
            <span>Fullstack.dev</span>
          </a>
          <div className="nav__links">
            <a href="#stack">Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero__content">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Fullstack Developer
            </p>
            <h1>Building sharp websites, clean APIs, and polished web products.</h1>
            <p className="hero__lead">
              I create modern interfaces with React and TypeScript, build backend
              services with Node.js and Express, and connect ideas into complete,
              production-minded web experiences.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View projects
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--secondary" href="#contact">
                Contact me
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__panel"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            {stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--intro" aria-label="Overview">
        <div className="section__header">
          <p className="section__kicker">What I do</p>
          <h2>From visual idea to working fullstack product.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div className="service" key={service}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section__header">
          <p className="section__kicker">Stack</p>
          <h2>Tools I use to design, build, and ship.</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map(({ title, icon: Icon, items }) => (
            <article className="stack-card" key={title}>
              <div className="stack-card__head">
                <Icon size={22} aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <div className="tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="section__header">
          <p className="section__kicker">Approach</p>
          <h2>Readable code, stable structure, and interfaces people can actually use.</h2>
        </div>
        <div className="approach">
          <Code2 size={28} aria-hidden="true" />
          <p>
            I like building products where the frontend feels fast and clear, the
            backend has a predictable shape, and every screen has a reason to exist.
            The goal is simple: useful software that looks confident and behaves well.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section__header section__header--row">
          <div>
            <p className="section__kicker">Projects</p>
            <h2>Selected directions and build ideas.</h2>
          </div>
          <a className="text-link" href="#contact">
            Start a project
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__top">
                <span>{project.type}</span>
                <Layers3 size={20} aria-hidden="true" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section__kicker">Contact</p>
          <h2>Ready to build something clean and useful?</h2>
          <p>
            I am open to frontend, backend, and fullstack web projects. Replace
            these links with your real contacts and this page is ready to ship.
          </p>
        </div>
        <div className="contact__actions">
          <a className="button button--primary" href="mailto:your.email@example.com">
            Email
            <Mail size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="https://github.com/" target="_blank">
            GitHub
            <Code2 size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default App

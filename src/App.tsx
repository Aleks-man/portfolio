import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers3,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
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
    title: 'Developer Portfolio',
    type: 'Live website',
    description:
      'A personal landing page with a strong hero, responsive sections, motion, and clean content structure.',
    stack: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    title: 'Express API Starter',
    type: 'Backend concept',
    description:
      'A backend direction for REST routes, validation, auth, database models, and predictable service layers.',
    stack: ['Node.js', 'Express', 'Prisma'],
  },
  {
    title: 'Product Dashboard UI',
    type: 'App concept',
    description:
      'A dense interface idea for analytics, tables, filters, forms, and repeated business workflows.',
    stack: ['React', 'TypeScript', 'REST API'],
  },
]

const stats = [
  ['Fullstack', 'role'],
  ['React + Node', 'core stack'],
  ['UI + API', 'delivery'],
]

const processSteps = [
  {
    title: 'Understand',
    icon: Workflow,
    text: 'Clarify the goal, users, screens, data, and the smallest useful version of the product.',
  },
  {
    title: 'Build',
    icon: Cpu,
    text: 'Create a stable frontend and backend structure with readable components, routes, and state.',
  },
  {
    title: 'Polish',
    icon: ShieldCheck,
    text: 'Improve responsiveness, loading states, edge cases, accessibility, and visual rhythm.',
  },
  {
    title: 'Ship',
    icon: Rocket,
    text: 'Prepare the project for deploy, document the basics, and keep the code ready for growth.',
  },
]

const focusAreas = [
  ['Frontend quality', 'Interfaces that feel fast, readable, adaptive, and pleasant to use.'],
  ['Backend logic', 'APIs, validation, auth flows, database access, and integrations.'],
  ['Product thinking', 'Screens and features chosen around the real user task, not decoration.'],
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
            <a href="#about">About</a>
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

      <section className="section about" id="about">
        <div className="about__copy">
          <p className="section__kicker">About</p>
          <h2>A developer who can think through both the screen and the system behind it.</h2>
          <p>
            I work across the full web stack: from responsive React interfaces to
            backend APIs, database models, integrations, and deployment-ready project
            structure. I care about clean code, clear UI, and practical features that
            make a product easier to use.
          </p>
        </div>
        <div className="focus-list">
          {focusAreas.map(([title, text]) => (
            <article className="focus-item" key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
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

      <section className="section process" aria-label="Process">
        <div className="section__header">
          <p className="section__kicker">Process</p>
          <h2>How I move from idea to a usable release.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map(({ title, icon: Icon, text }, index) => (
            <article className="process-card" key={title}>
              <div className="process-card__index">0{index + 1}</div>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
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
            I am open to frontend, backend, and fullstack web projects. Replace the
            placeholders with your real email, GitHub, Telegram, and project links when
            you are ready to publish.
          </p>
        </div>
        <div className="contact__actions">
          <a className="button button--primary" href="mailto:your.email@example.com">
            Email
            <Mail size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="https://t.me/" target="_blank">
            Telegram
            <Send size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="https://github.com/" target="_blank">
            GitHub
            <Code2 size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>Fullstack Developer Portfolio</span>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  )
}

export default App

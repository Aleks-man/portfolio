import { useState } from 'react'
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

type Language = 'en' | 'ru'

const stackIcons = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: Database,
  workflow: TerminalSquare,
}

const processIcons = {
  understand: Workflow,
  build: Cpu,
  polish: ShieldCheck,
  ship: Rocket,
}

const content = {
  en: {
    nav: {
      brand: 'Fullstack.dev',
      aria: 'Primary navigation',
      links: [
        ['About', '#about'],
        ['Stack', '#stack'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
      ],
      languageLabel: 'Switch language',
    },
    hero: {
      eyebrow: 'Fullstack Developer',
      title: 'Building sharp websites, clean APIs, and polished web products.',
      lead: 'I create modern interfaces with React and TypeScript, build backend services with Node.js and Express, and connect ideas into complete, production-minded web experiences.',
      primaryAction: 'View projects',
      secondaryAction: 'Contact me',
      stats: [
        ['Fullstack', 'role'],
        ['React + Node', 'core stack'],
        ['UI + API', 'delivery'],
      ],
    },
    overview: {
      kicker: 'What I do',
      title: 'From visual idea to working fullstack product.',
      services: [
        'Landing pages and portfolio websites',
        'Fullstack web apps with API and database',
        'Admin panels, dashboards, and internal tools',
        'Adaptive interfaces for desktop and mobile',
        'Backend services, integrations, and automation',
        'Polished UI with clear structure and motion',
      ],
    },
    about: {
      kicker: 'About',
      title: 'A developer who can think through both the screen and the system behind it.',
      text: 'I work across the full web stack: from responsive React interfaces to backend APIs, database models, integrations, and deployment-ready project structure. I care about clean code, clear UI, and practical features that make a product easier to use.',
      focusAreas: [
        ['Frontend quality', 'Interfaces that feel fast, readable, adaptive, and pleasant to use.'],
        ['Backend logic', 'APIs, validation, auth flows, database access, and integrations.'],
        ['Product thinking', 'Screens and features chosen around the real user task, not decoration.'],
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Tools I use to design, build, and ship.',
      groups: [
        ['frontend', 'Frontend', ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Animation']],
        ['backend', 'Backend', ['Node.js', 'Express', 'REST API', 'Auth flows', 'Integrations']],
        ['data', 'Data', ['PostgreSQL', 'MongoDB', 'Prisma', 'Schema design', 'Queries']],
        ['workflow', 'Workflow', ['Git', 'Deploy', 'Clean code', 'Testing mindset', 'Docs']],
      ],
    },
    approach: {
      kicker: 'Approach',
      title: 'Readable code, stable structure, and interfaces people can actually use.',
      text: 'I like building products where the frontend feels fast and clear, the backend has a predictable shape, and every screen has a reason to exist. The goal is simple: useful software that looks confident and behaves well.',
    },
    process: {
      kicker: 'Process',
      title: 'How I move from idea to a usable release.',
      aria: 'Process',
      steps: [
        ['understand', 'Understand', 'Clarify the goal, users, screens, data, and the smallest useful version of the product.'],
        ['build', 'Build', 'Create a stable frontend and backend structure with readable components, routes, and state.'],
        ['polish', 'Polish', 'Improve responsiveness, loading states, edge cases, accessibility, and visual rhythm.'],
        ['ship', 'Ship', 'Prepare the project for deploy, document the basics, and keep the code ready for growth.'],
      ],
    },
    projects: {
      kicker: 'Projects',
      title: 'Selected directions and build ideas.',
      action: 'Start a project',
      items: [
        {
          title: 'Developer Portfolio',
          type: 'Live website',
          description: 'A personal landing page with a strong hero, responsive sections, motion, and clean content structure.',
          stack: ['React', 'TypeScript', 'Framer Motion'],
        },
        {
          title: 'Express API Starter',
          type: 'Backend concept',
          description: 'A backend direction for REST routes, validation, auth, database models, and predictable service layers.',
          stack: ['Node.js', 'Express', 'Prisma'],
        },
        {
          title: 'Product Dashboard UI',
          type: 'App concept',
          description: 'A dense interface idea for analytics, tables, filters, forms, and repeated business workflows.',
          stack: ['React', 'TypeScript', 'REST API'],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Ready to build something clean and useful?',
      text: 'I am open to frontend, backend, and fullstack web projects.',
      email: 'Email',
      telegram: 'Telegram',
      github: 'GitHub',
    },
    footer: {
      title: 'Fullstack Developer Portfolio',
      top: 'Back to top',
    },
  },
  ru: {
    nav: {
      brand: 'Fullstack.dev',
      aria: 'Основная навигация',
      links: [
        ['Обо мне', '#about'],
        ['Стек', '#stack'],
        ['Проекты', '#projects'],
        ['Контакты', '#contact'],
      ],
      languageLabel: 'Переключить язык',
    },
    hero: {
      eyebrow: 'Fullstack разработчик',
      title: 'Разрабатываю современные сайты, надежные API и продуманные веб-продукты.',
      lead: 'Создаю интерфейсы на React и TypeScript, проектирую backend на Node.js и Express, работаю с базами данных и помогаю превращать идеи в цельные веб-приложения, которые готовы расти вместе с продуктом.',
      primaryAction: 'Смотреть проекты',
      secondaryAction: 'Связаться',
      stats: [
        ['Fullstack', 'роль'],
        ['React + Node', 'основной стек'],
        ['UI + API', 'полный цикл'],
      ],
    },
    overview: {
      kicker: 'Что я делаю',
      title: 'Помогаю пройти путь от идеи до работающего fullstack-продукта.',
      services: [
        'Лендинги, сайты-визитки и портфолио',
        'Fullstack-приложения с API и базой данных',
        'Админки, дашборды и внутренние инструменты',
        'Адаптивные интерфейсы для компьютеров и смартфонов',
        'Backend-сервисы, интеграции и автоматизация процессов',
        'Аккуратный UI с понятной структурой и уместной анимацией',
      ],
    },
    about: {
      kicker: 'Обо мне',
      title: 'Я смотрю на продукт целиком: от первого экрана до логики на сервере.',
      text: 'Работаю со всем веб-стеком: создаю адаптивные React-интерфейсы, backend API, модели данных, интеграции и структуру проекта, которую удобно развивать и поддерживать. В работе для меня важны чистый код, понятный интерфейс и функции, которые действительно решают задачу пользователя.',
      focusAreas: [
        ['Качественный frontend', 'Интерфейсы, которые быстро работают, хорошо выглядят и остаются удобными на разных устройствах.'],
        ['Продуманная backend-логика', 'API, валидация, авторизация, работа с базой данных, интеграции и понятная структура сервиса.'],
        ['Продуктовый подход', 'Экраны и функции проектируются вокруг реальных задач пользователя, а не ради лишней сложности.'],
      ],
    },
    stack: {
      kicker: 'Стек',
      title: 'Инструменты, с которыми я проектирую, разрабатываю и запускаю веб-проекты.',
      groups: [
        ['frontend', 'Frontend', ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Animation']],
        ['backend', 'Backend', ['Node.js', 'Express', 'REST API', 'Auth flows', 'Integrations']],
        ['data', 'Data', ['PostgreSQL', 'MongoDB', 'Prisma', 'Schema design', 'Queries']],
        ['workflow', 'Workflow', ['Git', 'Deploy', 'Clean code', 'Testing mindset', 'Docs']],
      ],
    },
    approach: {
      kicker: 'Подход',
      title: 'Пишу читаемый код, собираю устойчивую структуру и делаю интерфейсы, которыми удобно пользоваться.',
      text: 'Мне нравится создавать продукты, в которых frontend ощущается быстрым и понятным, backend устроен предсказуемо, а каждый экран выполняет конкретную задачу. Моя цель - делать полезные веб-приложения, которые выглядят уверенно и работают надежно.',
    },
    process: {
      kicker: 'Процесс',
      title: 'Как я веду проект от идеи до готовой версии.',
      aria: 'Процесс',
      steps: [
        ['understand', 'Разобраться', 'Уточняю цель проекта, аудиторию, ключевые экраны, данные и минимальную версию, которая уже приносит пользу.'],
        ['build', 'Разработать', 'Собираю frontend и backend на понятной основе: компоненты, роуты, состояние, API и работа с данными.'],
        ['polish', 'Доработать', 'Улучшаю адаптивность, состояния загрузки, крайние сценарии, доступность и общий визуальный ритм.'],
        ['ship', 'Запустить', 'Готовлю проект к деплою, описываю базовые детали и оставляю код в состоянии, с которым удобно двигаться дальше.'],
      ],
    },
    projects: {
      kicker: 'Проекты',
      title: 'Примеры направлений, в которых я могу быть полезен.',
      action: 'Обсудить проект',
      items: [
        {
          title: 'Developer Portfolio',
          type: 'Live website',
          description: 'Персональный сайт-визитка с выразительным первым экраном, адаптивными секциями, анимацией и понятной подачей навыков.',
          stack: ['React', 'TypeScript', 'Framer Motion'],
        },
        {
          title: 'Express API Starter',
          type: 'Backend concept',
          description: 'Основа backend-архитектуры с REST-роутами, валидацией, авторизацией, моделями данных и отдельными сервисными слоями.',
          stack: ['Node.js', 'Express', 'Prisma'],
        },
        {
          title: 'Product Dashboard UI',
          type: 'App concept',
          description: 'Концепт рабочего интерфейса для аналитики, таблиц, фильтров, форм и повторяющихся бизнес-процессов.',
          stack: ['React', 'TypeScript', 'REST API'],
        },
      ],
    },
    contact: {
      kicker: 'Контакты',
      title: 'Нужен сайт, backend или полноценное веб-приложение?',
      text: 'Открыт к frontend, backend и fullstack-проектам.',
      email: 'Email',
      telegram: 'Telegram',
      github: 'GitHub',
    },
    footer: {
      title: 'Fullstack Developer Portfolio',
      top: 'Наверх',
    },
  },
} as const

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const t = content[language]

  return (
    <main lang={language}>
      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img src="/hero-workspace.png" alt="" />
          <div className="hero__shade" />
        </div>

        <nav className="nav" aria-label={t.nav.aria}>
          <a className="nav__brand" href="#top">
            <Braces size={20} aria-hidden="true" />
            <span>{t.nav.brand}</span>
          </a>
          <div className="nav__links">
            {t.nav.links.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="language-toggle" aria-label={t.nav.languageLabel}>
            {(['en', 'ru'] as const).map((item) => (
              <button
                className={item === language ? 'is-active' : ''}
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                aria-pressed={item === language}
              >
                {item.toUpperCase()}
              </button>
            ))}
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
              {t.hero.eyebrow}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                {t.hero.primaryAction}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--secondary" href="#contact">
                {t.hero.secondaryAction}
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
            {t.hero.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--intro" aria-label={t.overview.kicker}>
        <div className="section__header">
          <p className="section__kicker">{t.overview.kicker}</p>
          <h2>{t.overview.title}</h2>
        </div>
        <div className="service-grid">
          {t.overview.services.map((service) => (
            <div className="service" key={service}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about__copy">
          <p className="section__kicker">{t.about.kicker}</p>
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
        </div>
        <div className="focus-list">
          {t.about.focusAreas.map(([title, text]) => (
            <article className="focus-item" key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section__header">
          <p className="section__kicker">{t.stack.kicker}</p>
          <h2>{t.stack.title}</h2>
        </div>
        <div className="stack-grid">
          {t.stack.groups.map(([id, title, items]) => {
            const Icon = stackIcons[id]

            return (
              <article className="stack-card" key={id}>
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
            )
          })}
        </div>
      </section>

      <section className="section section--split">
        <div className="section__header">
          <p className="section__kicker">{t.approach.kicker}</p>
          <h2>{t.approach.title}</h2>
        </div>
        <div className="approach">
          <Code2 size={28} aria-hidden="true" />
          <p>{t.approach.text}</p>
        </div>
      </section>

      <section className="section process" aria-label={t.process.aria}>
        <div className="section__header">
          <p className="section__kicker">{t.process.kicker}</p>
          <h2>{t.process.title}</h2>
        </div>
        <div className="process-grid">
          {t.process.steps.map(([id, title, text], index) => {
            const Icon = processIcons[id]

            return (
              <article className="process-card" key={id}>
                <div className="process-card__index">0{index + 1}</div>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section__header section__header--row">
          <div>
            <p className="section__kicker">{t.projects.kicker}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <a className="text-link" href="#contact">
            {t.projects.action}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="project-grid">
          {t.projects.items.map((project) => (
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
          <p className="section__kicker">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>
        <div className="contact__actions">
          <a className="button button--primary" href="mailto:your.email@example.com">
            {t.contact.email}
            <Mail size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="https://t.me/" target="_blank">
            {t.contact.telegram}
            <Send size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="https://github.com/" target="_blank">
            {t.contact.github}
            <Code2 size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>{t.footer.title}</span>
        <a href="#top">{t.footer.top}</a>
      </footer>
    </main>
  )
}

export default App

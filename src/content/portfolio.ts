export type Language = 'en' | 'ru'

export const content = {
  en: {
    brand: {
      logoAlt: 'Alex Manuylov',
      role: 'Fullstack Developer',
    },
    nav: {
      aria: 'Primary navigation',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Stack', href: '#stack' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
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
        { value: 'Fullstack', label: 'role' },
        { value: 'React + Node', label: 'core stack' },
        { value: 'UI + API', label: 'delivery' },
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
        {
          title: 'Frontend quality',
          text: 'Interfaces that feel fast, readable, adaptive, and pleasant to use.',
        },
        {
          title: 'Backend logic',
          text: 'APIs, validation, auth flows, database access, and integrations.',
        },
        {
          title: 'Product thinking',
          text: 'Screens and features chosen around the real user task, not decoration.',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Tools I use to design, build, and ship.',
      groups: [
        {
          id: 'frontend',
          title: 'Frontend',
          items: ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Animation'],
        },
        {
          id: 'backend',
          title: 'Backend',
          items: ['Node.js', 'Express', 'REST API', 'Auth flows', 'Integrations'],
        },
        {
          id: 'data',
          title: 'Data',
          items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Schema design', 'Queries'],
        },
        {
          id: 'workflow',
          title: 'Workflow',
          items: ['Git', 'Deploy', 'Clean code', 'Testing mindset', 'Docs'],
        },
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
        {
          id: 'understand',
          title: 'Understand',
          text: 'Clarify the goal, users, screens, data, and the smallest useful version of the product.',
        },
        {
          id: 'build',
          title: 'Build',
          text: 'Create a stable frontend and backend structure with readable components, routes, and state.',
        },
        {
          id: 'polish',
          title: 'Polish',
          text: 'Improve responsiveness, loading states, edge cases, accessibility, and visual rhythm.',
        },
        {
          id: 'ship',
          title: 'Ship',
          text: 'Prepare the project for deploy, document the basics, and keep the code ready for growth.',
        },
      ],
    },
    projects: {
      kicker: 'Projects',
      title: 'Websites, fullstack apps, and practical product interfaces.',
      action: 'Start a project',
      items: [
        {
          title: 'Websites & Landing Pages',
          type: 'Web presence',
          description: 'Business websites, landing pages, portfolios, service pages, and personal brand sites with responsive layouts and polished presentation.',
          stack: ['React', 'TypeScript', 'Framer Motion'],
        },
        {
          title: 'Fullstack Web Apps',
          type: 'Product build',
          description: 'Complete web applications with frontend screens, backend API, authentication flows, database models, and room for real product logic.',
          stack: ['React', 'Node.js', 'Database'],
        },
        {
          title: 'Dashboards & Tools',
          type: 'Internal systems',
          description: 'Admin panels, dashboards, forms, tables, filters, analytics views, and practical interfaces for everyday business workflows.',
          stack: ['React', 'TypeScript', 'REST API'],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Ready to build something clean and useful?',
      text: 'I am open to frontend, backend, and fullstack web projects.',
      email: 'Email',
      emailHref: 'mailto:manuylovaleks@icloud.com',
      telegram: 'Telegram',
      telegramHref: 'https://t.me/Aleks_Manuilov',
      github: 'GitHub',
      githubHref: 'https://github.com/Aleks-man',
    },
    footer: {
      title: 'Fullstack Developer Alex_Manuylov',
      top: 'Back to top',
    },
  },
  ru: {
    brand: {
      logoAlt: 'Alex Manuylov',
      role: 'Fullstack разработчик',
    },
    nav: {
      aria: 'Основная навигация',
      links: [
        { label: 'Обо мне', href: '#about' },
        { label: 'Стек', href: '#stack' },
        { label: 'Проекты', href: '#projects' },
        { label: 'Контакты', href: '#contact' },
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
        { value: 'Fullstack', label: 'роль' },
        { value: 'React + Node', label: 'основной стек' },
        { value: 'UI + API', label: 'полный цикл' },
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
        {
          title: 'Качественный frontend',
          text: 'Интерфейсы, которые быстро работают, хорошо выглядят и остаются удобными на разных устройствах.',
        },
        {
          title: 'Продуманная backend-логика',
          text: 'API, валидация, авторизация, работа с базой данных, интеграции и понятная структура сервиса.',
        },
        {
          title: 'Продуктовый подход',
          text: 'Экраны и функции проектируются вокруг реальных задач пользователя, а не ради лишней сложности.',
        },
      ],
    },
    stack: {
      kicker: 'Стек',
      title: 'Инструменты, с которыми я проектирую, разрабатываю и запускаю веб-проекты.',
      groups: [
        {
          id: 'frontend',
          title: 'Frontend',
          items: ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Animation'],
        },
        {
          id: 'backend',
          title: 'Backend',
          items: ['Node.js', 'Express', 'REST API', 'Auth flows', 'Integrations'],
        },
        {
          id: 'data',
          title: 'Data',
          items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Schema design', 'Queries'],
        },
        {
          id: 'workflow',
          title: 'Workflow',
          items: ['Git', 'Deploy', 'Clean code', 'Testing mindset', 'Docs'],
        },
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
        {
          id: 'understand',
          title: 'Разобраться',
          text: 'Уточняю цель проекта, аудиторию, ключевые экраны, данные и минимальную версию, которая уже приносит пользу.',
        },
        {
          id: 'build',
          title: 'Разработать',
          text: 'Собираю frontend и backend на понятной основе: компоненты, роуты, состояние, API и работа с данными.',
        },
        {
          id: 'polish',
          title: 'Доработать',
          text: 'Улучшаю адаптивность, состояния загрузки, крайние сценарии, доступность и общий визуальный ритм.',
        },
        {
          id: 'ship',
          title: 'Запустить',
          text: 'Готовлю проект к деплою, описываю базовые детали и оставляю код в состоянии, с которым удобно двигаться дальше.',
        },
      ],
    },
    projects: {
      kicker: 'Проекты',
      title: 'Сайты, fullstack-приложения и интерфейсы для реальных задач.',
      action: 'Обсудить проект',
      items: [
        {
          title: 'Сайты и лендинги',
          type: 'Web presence',
          description: 'Разрабатываю разные виды сайтов: лендинги, сайты-визитки, портфолио, страницы услуг, промо-сайты и аккуратные представления личного или коммерческого бренда.',
          stack: ['React', 'TypeScript', 'Framer Motion'],
        },
        {
          title: 'Fullstack-приложения',
          type: 'Product build',
          description: 'Собираю полноценные веб-приложения: интерфейс, backend API, авторизацию, работу с базой данных и логику, которую можно развивать дальше.',
          stack: ['React', 'Node.js', 'Database'],
        },
        {
          title: 'Дашборды и инструменты',
          type: 'Internal systems',
          description: 'Делаю админки, панели управления, таблицы, фильтры, формы, аналитические экраны и интерфейсы для повседневных рабочих процессов.',
          stack: ['React', 'TypeScript', 'REST API'],
        },
      ],
    },
    contact: {
      kicker: 'Контакты',
      title: 'Нужен сайт, backend или полноценное веб-приложение?',
      text: 'Открыт к frontend, backend и fullstack-проектам.',
      email: 'Email',
      emailHref: 'mailto:manuylovaleks@icloud.com',
      telegram: 'Telegram',
      telegramHref: 'https://t.me/Aleks_Manuilov',
      github: 'GitHub',
      githubHref: 'https://github.com/Aleks-man',
    },
    footer: {
      title: 'Fullstack Developer Alex_Manuylov',
      top: 'Наверх',
    },
  },
} as const

export type PortfolioContent = (typeof content)[Language]
export type StackIconId = PortfolioContent['stack']['groups'][number]['id']
export type ProcessIconId = PortfolioContent['process']['steps'][number]['id']

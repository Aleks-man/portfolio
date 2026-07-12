export type Language = 'en' | 'ru'

export const content = {
  en: {
    brand: {
      logoAlt: "Alex Manuylov",
      role: "Fullstack Developer",
    },
    nav: {
      aria: "Primary navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
      ],
      languageLabel: "Switch language",
    },
    hero: {
      eyebrow: "Fullstack development for real business tasks",
      title: "Web products that look sharp and work end to end.",
      lead: "I design and build websites, web applications, and admin systems — from responsive interfaces to APIs, databases, and production-ready architecture.",
      primaryAction: "Explore projects",
      secondaryAction: "Discuss a project",
      highlightsLabel: "Core capabilities",
      highlights: [
        { value: "React", label: "Product interfaces" },
        { value: "Node.js", label: "Backend and API" },
        { value: "PostgreSQL", label: "Data and logic" },
      ],
      visual: {
        ariaLabel: "A responsive commerce dashboard connected to an API and database",
        workspace: "Product workspace",
        dashboardKicker: "Overview",
        dashboardTitle: "Commerce dashboard",
        status: "Live",
        metricLabel: "Conversion",
        metricValue: "+24%",
        ordersLabel: "Orders",
        ordersValue: "1,284",
        mobileLabel: "Mobile experience",
        mobileValue: "Responsive",
        apiLabel: "API & database",
        apiValue: "Connected",
      },
    },
    overview: {
      kicker: "What I do",
      title: "From visual idea to working fullstack product.",
      services: [
        "Landing pages and portfolio websites",
        "Fullstack web apps with API and database",
        "Admin panels, dashboards, and internal tools",
        "Adaptive interfaces for desktop and mobile",
        "Backend services, integrations, and automation",
        "Polished UI with clear structure and motion",
      ],
    },
    about: {
      kicker: "About",
      title:
        "A developer who can think through both the screen and the system behind it.",
      text: "I work across the full web stack: from responsive React interfaces to backend APIs, database models, integrations, and deployment-ready project structure. I care about clean code, clear UI, and practical features that make a product easier to use.",
      focusAreas: [
        {
          title: "Frontend quality",
          text: "Interfaces that feel fast, readable, adaptive, and pleasant to use.",
        },
        {
          title: "Backend logic",
          text: "APIs, validation, auth flows, database access, and integrations.",
        },
        {
          title: "Product thinking",
          text: "Screens and features chosen around the real user task, not decoration.",
        },
      ],
    },
    stack: {
      kicker: "Stack",
      title: "Tools I use to design, build, and ship.",
      groups: [
        {
          id: "frontend",
          title: "Frontend",
          items: ["React", "TypeScript", "Vite", "Responsive UI", "Animation"],
        },
        {
          id: "backend",
          title: "Backend",
          items: [
            "Node.js",
            "Express",
            "REST API",
            "Auth flows",
            "Integrations",
          ],
        },
        {
          id: "data",
          title: "Data",
          items: [
            "PostgreSQL",
            "MongoDB",
            "Prisma",
            "Schema design",
            "Queries",
          ],
        },
        {
          id: "workflow",
          title: "Workflow",
          items: ["Git", "Deploy", "Clean code", "Testing mindset", "Docs"],
        },
      ],
    },
    approach: {
      kicker: "Approach",
      title:
        "Readable code, stable structure, and interfaces people can actually use.",
      text: "I like building products where the frontend feels fast and clear, the backend has a predictable shape, and every screen has a reason to exist. The goal is simple: useful software that looks confident and behaves well.",
    },
    process: {
      kicker: "Process",
      title: "How I move from idea to a usable release.",
      aria: "Process",
      steps: [
        {
          id: "understand",
          title: "Understand",
          text: "Clarify the goal, users, screens, data, and the smallest useful version of the product.",
        },
        {
          id: "build",
          title: "Build",
          text: "Create a stable frontend and backend structure with readable components, routes, and state.",
        },
        {
          id: "polish",
          title: "Polish",
          text: "Improve responsiveness, loading states, edge cases, accessibility, and visual rhythm.",
        },
        {
          id: "ship",
          title: "Ship",
          text: "Prepare the project for deploy, document the basics, and keep the code ready for growth.",
        },
      ],
    },
    projects: {
      kicker: "Selected work",
      title: "Product case studies — ready for your real projects.",
      action: "View all projects",
      placeholderLabel: "Concept template",
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      items: [
        {
          title: "Commerce Control Center",
          type: "Fullstack dashboard",
          visual: "dashboard",
          challenge: "Bring orders, customers, and business metrics into one clear workspace.",
          solution: "A responsive admin interface with roles, filters, analytics, API, and database-ready structure.",
          stack: ["React", "Node.js", "PostgreSQL"],
        },
        {
          title: "Service Platform",
          type: "Business website",
          visual: "website",
          challenge: "Present a complex service clearly and turn traffic into qualified enquiries.",
          solution: "A fast multi-page website with focused content, reusable sections, forms, and technical SEO foundation.",
          stack: ["React", "TypeScript", "SEO"],
        },
        {
          title: "Operations Mobile App",
          type: "Web application",
          visual: "mobile",
          challenge: "Give a distributed team quick access to tasks and live operational data.",
          solution: "A mobile-first application with authentication, statuses, notifications, and API synchronization.",
          stack: ["React", "Express", "REST API"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Ready to build something clean and useful?",
      text: "I am open to frontend, backend, and fullstack web projects.",
      email: "Email",
      emailHref: "mailto:manuylovaleks@icloud.com",
      telegram: "Telegram",
      telegramHref: "https://t.me/Aleks_Manuilov",
      github: "GitHub",
      githubHref: "https://github.com/Aleks-man",
    },
    footer: {
      title: "Fullstack Developer Alex_Manuylov",
      top: "Back to top",
    },
  },
  ru: {
    brand: {
      logoAlt: "Alex Manuylov",
      role: "Fullstack разработчик",
    },
    nav: {
      aria: "Основная навигация",
      links: [
        { label: "Главная", href: "/" },
        { label: "Проекты", href: "/projects" },
        { label: "Услуги", href: "/services" },
        { label: "Обо мне", href: "/about" },
      ],
      languageLabel: "Переключить язык",
    },
    hero: {
      eyebrow: "Fullstack-разработка для реальных задач бизнеса",
      title: "Веб-продукты, которые хорошо выглядят и стабильно работают.",
      lead: "Проектирую и разрабатываю сайты, веб-приложения и админ-системы: от адаптивного интерфейса до API, базы данных и готовой к развитию архитектуры.",
      primaryAction: "Смотреть проекты",
      secondaryAction: "Обсудить проект",
      highlightsLabel: "Основные компетенции",
      highlights: [
        { value: "React", label: "Интерфейсы продукта" },
        { value: "Node.js", label: "Backend и API" },
        { value: "PostgreSQL", label: "Данные и логика" },
      ],
      visual: {
        ariaLabel: "Адаптивная панель управления, подключённая к API и базе данных",
        workspace: "Рабочая область",
        dashboardKicker: "Обзор",
        dashboardTitle: "Панель управления",
        status: "Онлайн",
        metricLabel: "Конверсия",
        metricValue: "+24%",
        ordersLabel: "Заказы",
        ordersValue: "1 284",
        mobileLabel: "Мобильная версия",
        mobileValue: "Адаптивно",
        apiLabel: "API и база данных",
        apiValue: "Подключены",
      },
    },
    overview: {
      kicker: "Что я делаю",
      title: "Помогаю пройти путь от идеи до работающего fullstack-продукта.",
      services: [
        "Лендинги, сайты-визитки и портфолио",
        "Fullstack-приложения с API и базой данных",
        "Админки, дашборды и внутренние инструменты",
        "Адаптивные интерфейсы для компьютеров и смартфонов",
        "Backend-сервисы, интеграции и автоматизация процессов",
        "Аккуратный UI с понятной структурой и уместной анимацией",
      ],
    },
    about: {
      kicker: "Обо мне",
      title:
        "Я смотрю на продукт целиком: от первого экрана до логики на сервере.",
      text: "Работаю со всем веб-стеком: создаю адаптивные React-интерфейсы, backend API, модели данных, интеграции и структуру проекта, которую удобно развивать и поддерживать. В работе для меня важны чистый код, понятный интерфейс и функции, которые действительно решают задачу пользователя.",
      focusAreas: [
        {
          title: "Качественный frontend",
          text: "Интерфейсы, которые быстро работают, хорошо выглядят и остаются удобными на разных устройствах.",
        },
        {
          title: "Продуманная backend-логика",
          text: "API, валидация, авторизация, работа с базой данных, интеграции и понятная структура сервиса.",
        },
        {
          title: "Продуктовый подход",
          text: "Экраны и функции проектируются вокруг реальных задач пользователя, а не ради лишней сложности.",
        },
      ],
    },
    stack: {
      kicker: "Стек",
      title:
        "Инструменты, с которыми я проектирую, разрабатываю и запускаю веб-проекты.",
      groups: [
        {
          id: "frontend",
          title: "Frontend",
          items: ["React", "TypeScript", "Vite", "Responsive UI", "Animation"],
        },
        {
          id: "backend",
          title: "Backend",
          items: [
            "Node.js",
            "Express",
            "REST API",
            "Auth flows",
            "Integrations",
          ],
        },
        {
          id: "data",
          title: "Data",
          items: [
            "PostgreSQL",
            "MongoDB",
            "Prisma",
            "Schema design",
            "Queries",
          ],
        },
        {
          id: "workflow",
          title: "Workflow",
          items: ["Git", "Deploy", "Clean code", "Testing mindset", "Docs"],
        },
      ],
    },
    approach: {
      kicker: "Подход",
      title:
        "Пишу читаемый код, собираю устойчивую структуру и делаю интерфейсы, которыми удобно пользоваться.",
      text: "Мне нравится создавать продукты, в которых frontend ощущается быстрым и понятным, backend устроен предсказуемо, а каждый экран выполняет конкретную задачу. Моя цель - делать полезные веб-приложения, которые выглядят уверенно и работают надежно.",
    },
    process: {
      kicker: "Процесс",
      title: "Как я веду проект от идеи до готовой версии.",
      aria: "Процесс",
      steps: [
        {
          id: "understand",
          title: "Разобраться",
          text: "Уточняю цель проекта, аудиторию, ключевые экраны, данные и минимальную версию, которая уже приносит пользу.",
        },
        {
          id: "build",
          title: "Разработать",
          text: "Собираю frontend и backend на понятной основе: компоненты, роуты, состояние, API и работа с данными.",
        },
        {
          id: "polish",
          title: "Доработать",
          text: "Улучшаю адаптивность, состояния загрузки, крайние сценарии, доступность и общий визуальный ритм.",
        },
        {
          id: "ship",
          title: "Запустить",
          text: "Готовлю проект к деплою, описываю базовые детали и оставляю код в состоянии, с которым удобно двигаться дальше.",
        },
      ],
    },
    projects: {
      kicker: "Избранные проекты",
      title: "Продуктовые кейсы — заготовки для твоих реальных проектов.",
      action: "Все проекты",
      placeholderLabel: "Концепт-шаблон",
      challengeLabel: "Задача",
      solutionLabel: "Решение",
      items: [
        {
          title: "Центр управления продажами",
          type: "Fullstack dashboard",
          visual: "dashboard",
          challenge: "Объединить заказы, клиентов и бизнес-показатели в одном понятном рабочем пространстве.",
          solution: "Адаптивная админ-панель с ролями, фильтрами, аналитикой, API и структурой под базу данных.",
          stack: ["React", "Node.js", "PostgreSQL"],
        },
        {
          title: "Платформа услуг",
          type: "Сайт для бизнеса",
          visual: "website",
          challenge: "Понятно представить сложную услугу и превращать посещения сайта в целевые обращения.",
          solution: "Быстрый многостраничный сайт с продуманным контентом, формами и технической SEO-основой.",
          stack: ["React", "TypeScript", "SEO"],
        },
        {
          title: "Мобильное приложение команды",
          type: "Веб-приложение",
          visual: "mobile",
          challenge: "Дать распределённой команде быстрый доступ к задачам и актуальным рабочим данным.",
          solution: "Mobile-first приложение с авторизацией, статусами, уведомлениями и синхронизацией через API.",
          stack: ["React", "Express", "REST API"],
        },
      ],
    },
    contact: {
      kicker: "Контакты",
      title: "Нужен сайт, backend или полноценное веб-приложение?",
      text: "Открыт к frontend, backend и fullstack-проектам.",
      email: "Email",
      emailHref: "mailto:manuylovaleks@icloud.com",
      telegram: "Telegram",
      telegramHref: "https://t.me/Aleks_Manuilov",
      github: "GitHub",
      githubHref: "https://github.com/Aleks-man",
    },
    footer: {
      title: "Fullstack Developer Alex_Manuylov",
      top: "Наверх",
    },
  },
} as const;

export type PortfolioContent = (typeof content)[Language]
export type StackIconId = PortfolioContent['stack']['groups'][number]['id']
export type ProcessIconId = PortfolioContent['process']['steps'][number]['id']

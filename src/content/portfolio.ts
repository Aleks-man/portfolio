export type Language = "en" | "ru";

export const content = {
  en: {
    brand: {
      logoAlt: "Manuylov Studio",
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
      primaryAction: "Discuss a project",
      secondaryAction: "Explore projects",
      highlightsLabel: "Why work with me",
      highlights: [
        { value: "Full cycle", label: "Interface, backend, and launch" },
        {
          value: "Work in stages",
          label: "You see progress throughout the project",
        },
        { value: "Built to grow", label: "Easy to maintain and extend" },
      ],
      visual: {
        ariaLabel:
          "A responsive commerce dashboard connected to an API and database",
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
        "Business websites and product pages",
        "Fullstack web applications",
        "Customer portals, admin panels, and dashboards",
        "Backend, APIs, and integrations",
      ],
    },
    servicesPage: {
      kicker: "Services",
      title: "From first screen to backend logic — one connected product.",
      lead: "I help turn a business task into a clear, responsive, and maintainable web product. The scope can start with one interface or cover the complete fullstack build.",
      includesLabel: "What is included",
      fitLabel: "Best for",
      start: {
        kicker: "Getting started",
        title: "Start with the task — a finished brief is not required.",
        text: "Tell me what you want to launch or improve. I will ask the right questions, outline a practical scope, and suggest the next step.",
        points: [
          "An idea, reference, or short description is enough to begin",
          "Scope, priorities, and stages are agreed before development",
          "You see working results throughout the project",
        ],
        action: "Discuss your project",
      },
      items: [
        {
          id: "website",
          title: "Websites & product pages",
          description:
            "Fast multi-page websites, portfolios, landing pages, and service platforms with strong structure and a clear path to enquiry.",
          fit: "Businesses, experts, services, and product launches",
          includes: [
            "Information architecture",
            "Responsive UI",
            "Forms and integrations",
            "SEO-ready markup",
          ],
        },
        {
          id: "app",
          title: "Fullstack web applications",
          description:
            "Complete products with interface, authentication, business logic, API, database models, and a structure ready for future development.",
          fit: "MVPs, customer portals, SaaS ideas, and internal products",
          includes: [
            "React application",
            "Backend API",
            "Authentication",
            "Database integration",
          ],
        },
        {
          id: "dashboard",
          title: "Admin panels & dashboards",
          description:
            "Practical management interfaces with tables, filters, forms, roles, analytics, and workflows built around daily operations.",
          fit: "Operations, sales, content, analytics, and support teams",
          includes: [
            "Data-heavy UI",
            "Roles and permissions",
            "Charts and metrics",
            "Complex forms",
          ],
        },
        {
          id: "backend",
          title: "Backend, API & integrations",
          description:
            "Reliable server-side foundations for existing or new interfaces: API design, validation, data access, and external service connections.",
          fit: "Products that need stable logic, data, or automation",
          includes: [
            "REST API",
            "Data validation",
            "Database access",
            "Third-party integrations",
          ],
        },
      ],
    },
    aboutPage: {
      kicker: "About",
      title: "I connect product thinking with fullstack execution.",
      lead: "I am Alexandr Manuylov, a fullstack developer focused on websites, web applications, admin systems, and the infrastructure behind them.",
      bio: "I do more than build individual screens — I help shape a complete web product. I understand the task, design a clear user journey, and connect the interface with the required logic. I value straightforward communication, well-reasoned decisions, and attention to detail, so the product is easy to use today and ready to grow tomorrow.",
      principlesKicker: "Working principles",
      principlesTitle: "A practical approach to building digital products.",
      principles: [
        {
          number: "01",
          title: "Clarity before complexity",
          text: "Start with the real task, user flow, and smallest useful version before adding features.",
        },
        {
          number: "02",
          title: "One connected system",
          text: "Treat UI, backend, data, and deployment as parts of the same product rather than isolated layers.",
        },
        {
          number: "03",
          title: "Structure that can grow",
          text: "Use readable components, predictable APIs, and project boundaries that remain maintainable.",
        },
        {
          number: "04",
          title: "Polish where it matters",
          text: "Pay attention to responsive behavior, states, accessibility, performance, and everyday usability.",
        },
      ],
      collaborationKicker: "Collaboration",
      collaborationTitle:
        "A clear working format from first discussion to launch.",
      collaborationText:
        "I can build a product from scratch, continue an existing one, or take responsibility for a focused frontend, backend, or fullstack scope.",
      collaborationItems: [
        {
          id: "scope",
          title: "What you can delegate",
          text: "A website or web application from scratch, a new product feature, interface redesign, backend, API, or integration.",
        },
        {
          id: "communication",
          title: "How we stay aligned",
          text: "We agree on priorities and stages before development, then discuss progress and working results as the project moves forward.",
        },
        {
          id: "handoff",
          title: "What you receive",
          text: "A deployed product, source code, required access, and clear project basics for future maintenance and development.",
        },
        {
          id: "support",
          title: "After launch",
          text: "I can fix launch issues, support the product, and continue with new stages under a separately agreed scope.",
        },
      ],
      availabilityLabel: "Current focus",
      availabilityValue: "Open to selected web projects",
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
          items: [
            "Figma",
            "Git",
            "Deploy",
            "Clean code",
            "Testing mindset",
            "Docs",
          ],
        },
      ],
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
      title: "Selected products, built from interface to infrastructure.",
      action: "View all projects",
      challengeLabel: "Challenge",
      page: {
        kicker: "Project archive",
        title: "Fullstack work, documented as product case studies.",
        lead: "A growing collection of websites and fullstack products — from public interfaces to APIs, databases, and role-based admin systems.",
        roleLabel: "Role",
        yearLabel: "Year",
        statusLabel: "Status",
        resultLabel: "Result",
        featuresLabel: "Key features",
        demoAction: "Live demo",
        repositoryAction: "Repository",
        detailsAction: "View case study",
        backAction: "All projects",
        projectNavigationLabel: "More projects",
        previousProjectLabel: "Previous project",
        nextProjectLabel: "Next project",
        galleryLabel: "Product screens",
        openImageLabel: "Open image",
        previousImageLabel: "Previous image",
        nextImageLabel: "Next image",
        closeImageLabel: "Close image",
      },
      more: {
        kicker: "More work",
        title: "And many other digital products.",
        lead: "A selection of frontend concepts and business interfaces across logistics, hospitality, healthcare, construction, automotive, and commerce.",
        stackLabel: "React · TypeScript · Responsive UI · SEO",
        items: [
          {
            title: "Fuel Trans",
            category: "Logistics",
            image: "/projects/design-projects/fuel-trans.jpg",
          },
          {
            title: "Nova Trans",
            category: "Logistics",
            image: "/projects/design-projects/nova-trans.jpg",
          },
          {
            title: "Mare",
            category: "Restaurant",
            image: "/projects/design-projects/mare.jpg",
          },
          {
            title: "TeamHub",
            category: "Dashboard",
            image: "/projects/design-projects/teamhub.jpg",
          },
          {
            title: "Dentalis",
            category: "Healthcare",
            image: "/projects/design-projects/dentalis.jpg",
          },
          {
            title: "Drive & Go",
            category: "Car rental",
            image: "/projects/design-projects/drive-and-go.jpg",
          },
          {
            title: "Мясо & Огонь",
            category: "Restaurant",
            image: "/projects/design-projects/meat-and-fire.jpg",
          },
          {
            title: "СтройПроект",
            category: "Construction",
            image: "/projects/design-projects/stroyproject.jpg",
          },
          {
            title: "TechNova",
            category: "E-commerce",
            image: "/projects/design-projects/technova.jpg",
          },
        ],
      },
      items: [
        {
          slug: "gentlemans-room",
          title: "Gentleman's Room",
          type: "Fullstack booking platform",
          visual: "dashboard",
          status: "Live product",
          cover: "/projects/barbershop/cover.jpg",
          gallery: [
            "/projects/barbershop/booking.jpg",
            "/projects/barbershop/admin-dashboard.jpg",
            "/projects/barbershop/master-dashboard.jpg",
          ],
          challenge:
            "Create more than a presentation website: give clients a direct booking flow and the barbershop its own operational system without relying on third-party booking services.",
          solution:
            "A fullstack platform with public pages, booking without registration, automatic free-slot calculation, separate admin and barber accounts, schedule management, and Telegram alerts for new appointments.",
          result:
            "The barbershop received its own booking channel and a shared operational system: clients book directly, while the team manages schedules and appointments without a third-party platform.",
          stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
          role: "Fullstack development",
          year: "2026",
          features: [
            "Online booking and slot calculation",
            "Admin and barber roles",
            "Schedules and closed periods",
            "Telegram booking alerts",
          ],
          demoHref: "",
          repositoryHref: "",
        },
        {
          slug: "projectflow",
          title: "ProjectFlow",
          type: "Fullstack project management app",
          visual: "dashboard",
          status: "Live demo",
          cover: "/projects/construction-app/projects.jpg",
          gallery: [
            "/projects/construction-app/login.jpg",
            "/projects/construction-app/team-tasks.jpg",
            "/projects/construction-app/users.jpg",
            "/projects/construction-app/activity.jpg",
            "/projects/construction-app/team-documents.jpg",
            "/projects/construction-app/project-stages.jpg",
          ],
          challenge:
            "Bring projects, teams, stages, tasks, documents, and progress tracking into one role-aware workspace instead of scattered operational tools.",
          solution:
            "A responsive fullstack dashboard with JWT authentication, PostgreSQL persistence, scoped permissions, task workflows, document storage, and a complete activity history.",
          result:
            "Projects, stages, tasks, documents, and team activity now live in one role-aware workspace that makes current progress and responsibility easy to track.",
          stack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
          ],
          role: "Fullstack development",
          year: "2026",
          features: [
            "Admin, manager, and worker roles",
            "Projects, stages, and assigned tasks",
            "Status, priority, assignee, and date filters",
            "Project, stage, and task documents",
            "Activity history",
            "English and Russian interface",
          ],
          demoHref: "https://construction-app-mauve.vercel.app",
          repositoryHref: "https://github.com/Aleks-man/construction-app",
        },
        {
          slug: "1c-crimea",
          title: "1C Crimea",
          type: "Frontend business website",
          visual: "website",
          status: "Frontend MVP",
          cover: "/projects/1s-project/cover.jpg",
          gallery: [
            "/projects/1s-project/catalog.jpg",
            "/projects/1s-project/industries.jpg",
            "/projects/1s-project/catalog-page.jpg",
            "/projects/1s-project/services.jpg",
          ],
          challenge:
            "Present 1C software sales, implementation, setup, and support as a clear regional service and help businesses quickly choose a suitable configuration.",
          solution:
            "A responsive multi-page frontend with a structured product catalog, industry scenarios, service pages, conversion-focused contact paths, and an API-ready architecture for future backend development.",
          result:
            "A complex range of 1C products and services became a clear customer journey, helping businesses find the relevant solution and move directly to an enquiry.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Responsive UI",
            "SEO",
          ],
          role: "Frontend development",
          year: "2026",
          features: [
            "Filterable 1C product catalog",
            "Industry-specific solution navigation",
            "Service and support presentation",
            "Conversion-focused calls to action",
            "Semantic markup and SEO metadata",
            "Architecture prepared for API integration",
          ],
          demoHref: "",
          repositoryHref: "",
        },
        {
          slug: "transgaz",
          title: "TransGaz Service",
          type: "Frontend service website",
          visual: "website",
          status: "Production business website",
          cover: "/projects/ugtransgas/cover.jpg",
          gallery: [
            "/projects/ugtransgas/services.jpg",
            "/projects/ugtransgas/works.jpg",
            "/projects/ugtransgas/pricing.jpg",
            "/projects/ugtransgas/request-form.jpg",
            "/projects/ugtransgas/vehicle-gallery.jpg",
            "/projects/ugtransgas/contacts.jpg",
            "/projects/ugtransgas/cta-footer.jpg",
          ],
          challenge:
            "Turn an established LPG installation service with real expertise, completed work, reviews, and regional demand into a convincing digital sales channel.",
          solution:
            "A conversion-focused multi-page frontend that explains the service, presents equipment packages and real installations, builds trust through business facts and reviews, and guides visitors to a calculation or inspection request.",
          result:
            "The company received a focused sales website that packages its expertise, real work, and offers into a credible path from first visit to a calculation request.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Responsive UI",
            "SEO",
          ],
          role: "Frontend development",
          year: "2026",
          features: [
            "Service and equipment presentation",
            "Real installation portfolio by vehicle brand",
            "Package and pricing comparison",
            "Inspection and calculation request forms",
            "Business contacts and trust signals",
            "Semantic SEO structure and API-ready forms",
          ],
          demoHref: "",
          repositoryHref: "",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Ready to build something clean and useful?",
      text: "I am open to frontend, backend, and fullstack web projects.",
      email: "Email",
      emailAddress: "manuylovaleks@icloud.com",
      emailHref: "mailto:manuylovaleks@icloud.com",
      phone: "+7 (978) 011-06-17",
      phoneHref: "tel:+79780110617",
      phonesLabel: "Phone",
      telegram: "Telegram",
      telegramHref: "https://t.me/Aleks_Manuilov",
      whatsappHref: "https://wa.me/79780110617",
      viberHref: "viber://chat?number=%2B79780110617",
      messengersLabel: "Messengers",
    },
    footer: {
      title: "Fullstack Developer Alex_Manuylov",
      top: "Back to top",
    },
  },
  ru: {
    brand: {
      logoAlt: "Manuylov Studio",
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
      eyebrow: "Сайты и веб-приложения для бизнеса",
      title: "Создаю веб-продукты, которые работают на ваш бизнес.",
      lead: "Беру на себя полный цикл разработки: продумываю структуру и дизайн, создаю интерфейс и серверную часть, подключаю базу данных и интеграции, готовлю проект к запуску.",
      primaryAction: "Обсудить проект",
      secondaryAction: "Посмотреть проекты",

      highlightsLabel: "Почему со мной удобно работать",
      highlights: [
        {
          value: "Полный цикл",
          label: "Структура, дизайн, разработка и запуск",
        },
        {
          value: "Понятные этапы",
          label: "Вы видите результат на каждом этапе",
        },
        {
          value: "Готовность к развитию",
          label: "Проект удобно поддерживать и расширять",
        },
      ],

      visual: {
        ariaLabel:
          "Адаптивная панель управления, подключённая к API и базе данных",
        workspace: "Рабочая область",
        dashboardKicker: "Обзор системы",
        dashboardTitle: "Панель управления",
        status: "Онлайн",
        metricLabel: "Интерфейс",
        metricValue: "Готов",
        ordersLabel: "Backend",
        ordersValue: "Работает",
        mobileLabel: "Мобильная версия",
        mobileValue: "Адаптивна",
        apiLabel: "API и база данных",
        apiValue: "Подключены",
      },
    },
    overview: {
      kicker: "Что я разрабатываю",
      title: "От сайта для бизнеса до полноценного веб-приложения.",
      services: [
        "Корпоративные сайты и лендинги",
        "Веб-приложения и онлайн-сервисы",
        "Личные кабинеты, админ-панели и дашборды",
        "Backend, API и интеграции",
      ],
    },
    servicesPage: {
      kicker: "Услуги",
      title: "Разработка веб-продукта, от идеи до запуска.",
      lead: "Создаю сайты, веб-приложения и внутренние системы: продумываю структуру и интерфейс, реализую необходимую логику, подключаю базу данных и интеграции. Могу разработать проект целиком или подключиться на отдельном этапе.",

      includesLabel: "Что входит",
      fitLabel: "Подходит для",

      start: {
        kicker: "Начало работы",
        title: "Для старта достаточно описать задачу.",
        text: "Расскажите, что хотите создать или улучшить. Я уточню детали, помогу определить необходимый функционал и предложу понятный план реализации.",
        points: [
          "Готовое техническое задание не требуется",
          "До начала согласуем объём, этапы и сроки",
          "Вы видите результат на каждом этапе работы",
        ],
        action: "Обсудить проект",
      },

      items: [
        {
          id: "website",
          title: "Сайты для бизнеса",
          description:
            "Корпоративные сайты, лендинги, портфолио и сайты услуг с продуманной структурой, адаптивным дизайном и удобным способом оставить заявку.",
          fit: "Компаний, экспертов, сервисного бизнеса и запуска новых продуктов",
          includes: [
            "Структура и контент",
            "Адаптивный дизайн",
            "Формы и интеграции",
            "Техническая SEO-основа",
          ],
        },
        {
          id: "app",
          title: "Веб-приложения и онлайн-сервисы",
          description:
            "Полноценные продукты с авторизацией, личными кабинетами, бизнес-логикой, API и базой данных — для клиентов или внутренней работы команды.",
          fit: "MVP, онлайн-сервисов, личных кабинетов и внутренних систем",
          includes: [
            "Frontend на React",
            "Backend и API",
            "Авторизация и роли",
            "База данных",
          ],
        },
        {
          id: "dashboard",
          title: "Админ-панели и дашборды",
          description:
            "Интерфейсы для управления заявками, пользователями, контентом, расписанием и показателями бизнеса в одной системе.",
          fit: "Отделов продаж, сервисных компаний и внутренних команд",
          includes: [
            "Таблицы и фильтры",
            "Роли и доступы",
            "Графики и метрики",
            "Формы и рабочие сценарии",
          ],
        },
        {
          id: "backend",
          title: "Backend, API и интеграции",
          description:
            "Серверная часть для нового или существующего продукта: обработка данных, работа с базой, API и подключение внешних сервисов.",
          fit: "Сайтов и приложений, которым нужны данные, интеграции или автоматизация",
          includes: [
            "REST API",
            "Бизнес-логика и валидация",
            "Работа с базой данных",
            "Внешние интеграции",
          ],
        },
      ],
    },
    aboutPage: {
      kicker: "Обо мне",
      title: "Системный подход к разработке, от задачи до запуска.",
      lead: "Я Александр Мануйлов, fullstack-разработчик. Создаю сайты, веб-приложения и внутренние системы для бизнеса.",
      bio: "Мне важно понимать не только что нужно разработать, но и какую задачу должен решить продукт. Поэтому сначала определяю цели и пользовательские сценарии, затем проектирую структуру, интерфейс и техническую основу. Работаю по согласованным этапам, показываю промежуточный результат и готовлю проект так, чтобы его было удобно поддерживать и развивать.",

      principlesKicker: "Принципы работы",
      principlesTitle: "Осмысленная разработка без лишней сложности.",
      principles: [
        {
          number: "01",
          title: "Сначала задача",
          text: "Определяю цель, аудиторию и основные сценарии использования, прежде чем добавлять функции и выбирать технологии.",
        },
        {
          number: "02",
          title: "Понятные этапы",
          text: "Заранее согласовываю объём и порядок работы, регулярно показываю промежуточный результат.",
        },
        {
          number: "03",
          title: "Цельный продукт",
          text: "Проектирую интерфейс, backend, данные и интеграции как части одной связанной системы.",
        },
        {
          number: "04",
          title: "Качество в деталях",
          text: "Прорабатываю мобильную версию, скорость работы, состояния загрузки и ошибок, а также удобство использования.",
        },
      ],

      collaborationKicker: "Сотрудничество",
      collaborationTitle:
        "Понятный процесс — от первого обсуждения до запуска.",
      collaborationText:
        "Могу разработать продукт с нуля, продолжить существующий проект или выполнить отдельную часть — интерфейс, backend, API или интеграцию.",

      collaborationItems: [
        {
          id: "scope",
          title: "С чем можно обратиться",
          text: "Сайт или веб-приложение с нуля, развитие существующего продукта, переработка интерфейса, backend, API или интеграция.",
        },
        {
          id: "communication",
          title: "Как проходит работа",
          text: "До начала согласуем задачу, объём и этапы. В процессе я показываю промежуточные результаты и обсуждаю необходимые изменения.",
        },
        {
          id: "handoff",
          title: "Что вы получаете",
          text: "Готовый результат в согласованном объёме, исходный код, необходимые доступы и основу для дальнейшего развития.",
        },
        {
          id: "support",
          title: "После запуска",
          text: "По отдельной договорённости могу поддерживать продукт, устранять возникающие проблемы и добавлять новые функции.",
        },
      ],

      availabilityLabel: "Доступность",
      availabilityValue: "Принимаю новые проекты",
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
          items: [
            "Figma",
            "Git",
            "Deploy",
            "Clean code",
            "Testing mindset",
            "Docs",
          ],
        },
      ],
    },
    process: {
      kicker: "Процесс",
      title: "От первого обсуждения до работающего продукта.",
      aria: "Этапы работы над проектом",
      steps: [
        {
          id: "understand",
          title: "Задача и план",
          text: "Обсуждаем цели, аудиторию и необходимый функционал. Определяем объём, приоритеты и этапы работы.",
        },
        {
          id: "build",
          title: "Проектирование и разработка",
          text: "Продумываю структуру и пользовательские сценарии, разрабатываю интерфейс, серверную часть, базу данных и интеграции.",
        },
        {
          id: "polish",
          title: "Проверка и доработка",
          text: "Проверяю основные сценарии, мобильную версию, скорость работы, состояния загрузки и ошибок. Устраняю обнаруженные проблемы.",
        },
        {
          id: "ship",
          title: "Запуск и передача",
          text: "Размещаю проект, проверяю его после запуска, передаю исходный код и необходимые доступы.",
        },
      ],
    },
    projects: {
      kicker: "Избранные проекты",
      title: "От сайтов для бизнеса до полноценных веб-систем.",
      action: "Все проекты",
      challengeLabel: "Задача",

      page: {
        kicker: "Проекты",
        title: "Сайты и веб-приложения, которые я разработал.",
        lead: "В каждом проекте показываю поставленную задачу, разработанное решение, ключевые функции и использованные технологии.",
        roleLabel: "Роль",
        yearLabel: "Год",
        statusLabel: "Статус",
        resultLabel: "Результат",
        featuresLabel: "Ключевые функции",
        demoAction: "Открыть демо",
        repositoryAction: "Исходный код",
        detailsAction: "Подробнее о проекте",
        backAction: "Все проекты",
        projectNavigationLabel: "Другие проекты",
        previousProjectLabel: "Предыдущий проект",
        nextProjectLabel: "Следующий проект",
        galleryLabel: "Экраны проекта",
        openImageLabel: "Открыть изображение",
        previousImageLabel: "Предыдущее изображение",
        nextImageLabel: "Следующее изображение",
        closeImageLabel: "Закрыть изображение",
      },

      more: {
        kicker: "Другие работы",
        title: "Сайты и интерфейсы для разных направлений бизнеса.",
        lead: "Подборка сайтов и интерфейсных концепций для логистики, ресторанов, медицины, строительства, автосервисов и электронной коммерции.",
        stackLabel: "React · TypeScript · Адаптивная вёрстка · SEO",
        items: [
          {
            title: "Fuel Trans",
            category: "Логистика",
            image: "/projects/design-projects/fuel-trans.jpg",
          },
          {
            title: "Nova Trans",
            category: "Логистика",
            image: "/projects/design-projects/nova-trans.jpg",
          },
          {
            title: "Mare",
            category: "Ресторан",
            image: "/projects/design-projects/mare.jpg",
          },
          {
            title: "TeamHub",
            category: "Админ-панель",
            image: "/projects/design-projects/teamhub.jpg",
          },
          {
            title: "Dentalis",
            category: "Медицина",
            image: "/projects/design-projects/dentalis.jpg",
          },
          {
            title: "Drive & Go",
            category: "Аренда автомобилей",
            image: "/projects/design-projects/drive-and-go.jpg",
          },
          {
            title: "Мясо & Огонь",
            category: "Ресторан",
            image: "/projects/design-projects/meat-and-fire.jpg",
          },
          {
            title: "СтройПроект",
            category: "Строительство",
            image: "/projects/design-projects/stroyproject.jpg",
          },
          {
            title: "TechNova",
            category: "Интернет-магазин",
            image: "/projects/design-projects/technova.jpg",
          },
        ],
      },

      items: [
        {
          slug: "gentlemans-room",
          title: "Gentleman's Room",
          type: "Сервис онлайн-записи для барбершопа",
          visual: "dashboard",
          status: "Рабочий MVP",
          cover: "/projects/barbershop/cover.jpg",
          gallery: [
            "/projects/barbershop/booking.jpg",
            "/projects/barbershop/admin-dashboard.jpg",
            "/projects/barbershop/master-dashboard.jpg",
          ],
          challenge:
            "Объединить презентационный сайт, онлайн-запись и управление расписанием в одном продукте без зависимости от сторонних сервисов бронирования.",
          solution:
            "Fullstack-система с публичными страницами, записью без регистрации, автоматическим расчётом свободного времени, кабинетами администратора и мастера, управлением расписанием и Telegram-уведомлениями.",
          result:
            "Создан единый сервис, в котором клиент выбирает услугу, мастера и время, а команда управляет расписанием и записями через собственную систему.",
          stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
          role: "Fullstack-разработка",
          year: "2026",
          features: [
            "Онлайн-запись и расчёт свободного времени",
            "Роли администратора и мастера",
            "Управление расписанием и закрытыми периодами",
            "Telegram-уведомления о новых записях",
          ],
          demoHref: "",
          repositoryHref: "",
        },
        {
          slug: "projectflow",
          title: "ProjectFlow",
          type: "Система управления проектами",
          visual: "dashboard",
          status: "Доступно демо",
          cover: "/projects/construction-app/projects.jpg",
          gallery: [
            "/projects/construction-app/login.jpg",
            "/projects/construction-app/team-tasks.jpg",
            "/projects/construction-app/users.jpg",
            "/projects/construction-app/activity.jpg",
            "/projects/construction-app/team-documents.jpg",
            "/projects/construction-app/project-stages.jpg",
          ],
          challenge:
            "Объединить проекты, команды, этапы, задачи, документы и контроль прогресса в одном рабочем пространстве с разграничением доступа.",
          solution:
            "Fullstack-приложение с аутентификацией на основе JWT, ролевым доступом, управлением задачами, хранением документов и историей действий пользователей.",
          result:
            "Все ключевые процессы собраны в одной системе, где участники видят текущий прогресс, назначенные задачи, сроки и зоны ответственности.",
          stack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
          ],
          role: "Fullstack-разработка",
          year: "2026",
          features: [
            "Роли администратора, менеджера и исполнителя",
            "Проекты, этапы и назначенные задачи",
            "Фильтры по статусу, приоритету, исполнителю и срокам",
            "Документы проектов, этапов и задач",
            "История действий пользователей",
            "Русский и английский интерфейс",
          ],
          demoHref: "https://construction-app-mauve.vercel.app",
          repositoryHref: "https://github.com/Aleks-man/construction-app",
        },
        {
          slug: "1c-crimea",
          title: "1С в Крыму",
          type: "Сайт услуг для бизнеса",
          visual: "website",
          status: "Готовый frontend",
          cover: "/projects/1s-project/cover.jpg",
          gallery: [
            "/projects/1s-project/catalog.jpg",
            "/projects/1s-project/industries.jpg",
            "/projects/1s-project/catalog-page.jpg",
            "/projects/1s-project/services.jpg",
          ],
          challenge:
            "Понятно представить продажу, внедрение, настройку и сопровождение 1С и помочь бизнесу быстро подобрать подходящую конфигурацию.",
          solution:
            "Адаптивный многостраничный сайт с каталогом продуктов, отраслевыми решениями, страницами услуг и понятными сценариями перехода к обращению.",
          result:
            "Продукты и услуги 1С собраны в понятную структуру, которая помогает посетителю выбрать решение и перейти к консультации.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Адаптивная вёрстка",
            "SEO",
          ],
          role: "Frontend-разработка",
          year: "2026",
          features: [
            "Каталог продуктов 1С с фильтрацией",
            "Навигация по отраслевым решениям",
            "Презентация внедрения и сопровождения",
            "Сценарии перехода к обращению",
            "Семантическая разметка и SEO-метаданные",
            "Архитектура под подключение API",
          ],
          demoHref: "",
          repositoryHref: "",
        },
        {
          slug: "transgaz",
          title: "СТО ТрансГаз",
          type: "Сайт автомобильного сервиса",
          visual: "website",
          status: "Готовый сайт",
          cover: "/projects/ugtransgas/cover.jpg",
          gallery: [
            "/projects/ugtransgas/services.jpg",
            "/projects/ugtransgas/works.jpg",
            "/projects/ugtransgas/pricing.jpg",
            "/projects/ugtransgas/request-form.jpg",
            "/projects/ugtransgas/vehicle-gallery.jpg",
            "/projects/ugtransgas/contacts.jpg",
            "/projects/ugtransgas/cta-footer.jpg",
          ],
          challenge:
            "Создать современный сайт, который понятно представляет услуги по установке ГБО, показывает реальные работы и помогает получать заявки на осмотр и расчёт стоимости.",
          solution:
            "Адаптивный многостраничный сайт с описанием услуг, комплектами оборудования, галереей установок, отзывами, ценами и формами обращения.",
          result:
            "Услуги, оборудование, реальные работы и отзывы объединены в понятный путь от знакомства с компанией до записи на осмотр или запроса расчёта.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Адаптивная вёрстка",
            "SEO",
          ],
          role: "Frontend-разработка",
          year: "2026",
          features: [
            "Презентация услуг и оборудования",
            "Галерея установок по маркам автомобилей",
            "Сравнение комплектов и стоимости",
            "Формы записи на осмотр и запроса расчёта",
            "Контакты и элементы доверия",
            "Семантическая SEO-структура",
          ],
          demoHref: "",
          repositoryHref: "",
        },
      ],
    },
    contact: {
      kicker: "Контакты",
      title: "Нужен сайт, backend или полноценное веб-приложение?",
      text: "Открыт к frontend, backend и fullstack-проектам.",
      email: "Email",
      emailAddress: "manuylovaleks@icloud.com",
      emailHref: "mailto:manuylovaleks@icloud.com",
      phone: "+7 (978) 011-06-17",
      phoneHref: "tel:+79780110617",
      phonesLabel: "Телефон",
      telegram: "Telegram",
      telegramHref: "https://t.me/Aleks_Manuilov",
      whatsappHref: "https://wa.me/79780110617",
      viberHref: "viber://chat?number=%2B79780110617",
      messengersLabel: "Мессенджеры",
    },
    footer: {
      title: "Fullstack Developer Alex_Manuylov",
      top: "Наверх",
    },
  },
} as const;

export type PortfolioContent = (typeof content)[Language];
export type StackIconId = PortfolioContent["stack"]["groups"][number]["id"];
export type ProcessIconId = PortfolioContent["process"]["steps"][number]["id"];
export type ServiceIconId =
  PortfolioContent["servicesPage"]["items"][number]["id"];

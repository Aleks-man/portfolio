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
      contact: "Contact",
    },
    hero: {
      eyebrow: "Websites and web applications for business",
      title: "I build web products that work for your business.",
      lead: "I handle the full development cycle: plan the structure and design, build the interface and backend, connect databases and integrations, and prepare the project for launch.",
      primaryAction: "Discuss a project",
      secondaryAction: "View projects",
      highlightsLabel: "Why clients find it easy to work with me",
      highlights: [
        {
          value: "Full cycle",
          label: "Structure, design, development, and launch",
        },
        {
          value: "Clear stages",
          label: "You see results at every stage",
        },
        { value: "Ready to grow", label: "Easy to maintain and extend" },
      ],
      visual: {
        ariaLabel:
          "A responsive commerce dashboard connected to an API and database",
        workspace: "Product workspace",
        dashboardKicker: "System overview",
        dashboardTitle: "Commerce dashboard",
        status: "Live",
        metricLabel: "Interface",
        metricValue: "Ready",
        ordersLabel: "Orders",
        ordersValue: "Running",
        mobileLabel: "Mobile experience",
        mobileValue: "Responsive",
        apiLabel: "API & database",
        apiValue: "Connected",
      },
    },
    overview: {
      kicker: "What I build",
      title: "From business websites to complete web applications.",
      services: [
        "Corporate websites and landing pages",
        "Web applications and online services",
        "Customer portals, admin panels, and dashboards",
        "Backend, APIs, and integrations",
      ],
    },
    homeAbout: {
      kicker: "About me",
      title: "One specialist responsible for the product as a whole.",
      lead: "I am Alexandr Manuylov, a fullstack developer. I design and build websites, web applications, and internal business systems.",
      text: "I work across the entire product: from structure and interface to backend, data, integrations, and launch. This keeps the solution consistent and gives you one clear point of contact throughout the project.",
      action: "More about me and my approach",
      availability: "Accepting new projects",
      portraitAlt:
        "A fullstack developer workspace with code and web interfaces across several displays",
    },
    servicesPage: {
      kicker: "Services",
      title: "Web product development, from idea to launch.",
      lead: "I build websites, web applications, and internal systems: plan the structure and interface, implement the required logic, and connect databases and integrations. I can deliver the entire project or join at a specific stage.",
      includesLabel: "What is included",
      fitLabel: "Best for",
      start: {
        kicker: "Getting started",
        title: "A description of the task is enough to get started.",
        text: "Tell me what you want to create or improve. I will clarify the details, help define the required functionality, and propose a clear implementation plan.",
        points: [
          "A finished technical specification is not required",
          "We agree on the scope, stages, and timeline before starting",
          "You see results at every stage of the work",
        ],
        action: "Discuss your project",
      },
      items: [
        {
          id: "website",
          title: "Business websites",
          description:
            "Corporate websites, landing pages, portfolios, and service websites with a clear structure, responsive design, and an easy way to make an enquiry.",
          fit: "Companies, experts, service businesses, and new product launches",
          includes: [
            "Structure and content",
            "Responsive design",
            "Forms and integrations",
            "Technical SEO foundation",
          ],
        },
        {
          id: "app",
          title: "Web applications and online services",
          description:
            "Complete products with authentication, user accounts, business logic, APIs, and databases — for customers or internal team workflows.",
          fit: "MVPs, online services, customer portals, and internal systems",
          includes: [
            "React frontend",
            "Backend and API",
            "Authentication and roles",
            "Database",
          ],
        },
        {
          id: "dashboard",
          title: "Admin panels & dashboards",
          description:
            "Interfaces for managing enquiries, users, content, schedules, and business metrics in one system.",
          fit: "Sales departments, service companies, and internal teams",
          includes: [
            "Tables and filters",
            "Roles and permissions",
            "Charts and metrics",
            "Forms and workflows",
          ],
        },
        {
          id: "backend",
          title: "Backend, API & integrations",
          description:
            "Server-side development for new or existing products: data processing, database access, APIs, and external service connections.",
          fit: "Websites and applications that need data, integrations, or automation",
          includes: [
            "REST API",
            "Business logic and validation",
            "Database access",
            "External integrations",
          ],
        },
      ],
    },
    aboutPage: {
      kicker: "About",
      title: "A systematic approach to development, from task to launch.",
      lead: "I am Alexandr Manuylov, a fullstack developer. I build websites, web applications, and internal systems for businesses.",
      bio: "It is important for me to understand not only what needs to be built, but also which problem the product should solve. I start by defining goals and user scenarios, then design the structure, interface, and technical foundation. I work in agreed stages, share progress along the way, and prepare the project so it is easy to maintain and develop further.",
      principlesKicker: "Working principles",
      principlesTitle: "Thoughtful development without unnecessary complexity.",
      principles: [
        {
          number: "01",
          title: "The task comes first",
          text: "I define the goal, audience, and key usage scenarios before adding features or choosing technologies.",
        },
        {
          number: "02",
          title: "Clear stages",
          text: "I agree on the scope and sequence of work in advance and regularly share progress along the way.",
        },
        {
          number: "03",
          title: "One complete product",
          text: "I design the interface, backend, data, and integrations as parts of one connected system.",
        },
        {
          number: "04",
          title: "Quality in the details",
          text: "I refine the mobile experience, performance, loading and error states, and overall usability.",
        },
      ],
      collaborationKicker: "Collaboration",
      collaborationTitle: "A clear process, from first discussion to launch.",
      collaborationText:
        "I can build a product from scratch, continue an existing project, or deliver a specific part — interface, backend, API, or integration.",
      collaborationItems: [
        {
          id: "scope",
          title: "What you can bring to me",
          text: "A website or web application from scratch, development of an existing product, interface redesign, backend, API, or integration.",
        },
        {
          id: "communication",
          title: "How the work is organised",
          text: "Before starting, we agree on the task, scope, and stages. During development, I share intermediate results and discuss any necessary changes.",
        },
        {
          id: "handoff",
          title: "What you receive",
          text: "The agreed deliverables, source code, required access, and a solid foundation for further development.",
        },
        {
          id: "support",
          title: "After launch",
          text: "By separate agreement, I can support the product, resolve issues, and add new functionality.",
        },
      ],
      availabilityLabel: "Availability",
      availabilityValue: "Accepting new projects",
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
      title: "From the first discussion to a working product.",
      aria: "Project workflow",
      steps: [
        {
          id: "understand",
          title: "Task and plan",
          text: "We discuss the goals, audience, and required functionality, then define the scope, priorities, and stages of work.",
        },
        {
          id: "build",
          title: "Design and development",
          text: "I plan the structure and user scenarios, then build the interface, backend, database, and integrations.",
        },
        {
          id: "polish",
          title: "Testing and refinement",
          text: "I test the main scenarios, mobile experience, performance, loading states, and error handling, then resolve any issues found.",
        },
        {
          id: "ship",
          title: "Launch and handoff",
          text: "I deploy the project, verify it after launch, and hand over the source code and required access.",
        },
      ],
    },
    projects: {
      kicker: "Selected work",
      title: "From business websites to complete web systems.",
      action: "View all projects",
      challengeLabel: "Challenge",
      page: {
        kicker: "Projects",
        title: "Websites and web applications I have developed.",
        lead: "Each project presents the original task, the solution I developed, key functionality, and the technologies used.",
        roleLabel: "Role",
        yearLabel: "Year",
        statusLabel: "Status",
        resultLabel: "Result",
        featuresLabel: "Key features",
        demoAction: "Open demo",
        demoAccessLabel: "Demo access",
        demoAdminAction: "Open admin panel",
        demoLoginLabel: "Login",
        demoPasswordLabel: "Password",
        detailsAction: "Project details",
        backAction: "All projects",
        projectNavigationLabel: "More projects",
        previousProjectLabel: "Previous project",
        nextProjectLabel: "Next project",
        galleryLabel: "Project screens",
        openImageLabel: "Open image",
        previousImageLabel: "Previous image",
        nextImageLabel: "Next image",
        closeImageLabel: "Close image",
      },
      more: {
        kicker: "More work",
        title: "Websites and interfaces for different business sectors.",
        lead: "A selection of frontend concepts and business interfaces across logistics, hospitality, healthcare, construction, automotive, and commerce.",
        stackLabel: "React · TypeScript · Responsive layout · SEO",
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
            category: "Admin panel",
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
            category: "Online store",
            image: "/projects/design-projects/technova.jpg",
          },
        ],
      },
      items: [
        {
          slug: "gentlemans-room",
          title: "Gentleman's Room",
          type: "Online booking service for a barbershop",
          visual: "dashboard",
          status: "Working MVP",
          cover: "/projects/barbershop/cover.jpg",
          gallery: [
            "/projects/barbershop/booking.jpg",
            "/projects/barbershop/admin-dashboard.jpg",
            "/projects/barbershop/master-dashboard.jpg",
          ],
          challenge:
            "Combine a presentation website, online booking, and schedule management in one product without relying on third-party booking services.",
          solution:
            "A fullstack system with public pages, booking without registration, automatic availability calculation, admin and barber accounts, schedule management, and Telegram notifications.",
          result:
            "A single service where clients choose a service, barber, and time, while the team manages schedules and appointments through its own system.",
          stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
          role: "Fullstack development",
          year: "2026",
          features: [
            "Online booking and availability calculation",
            "Admin and barber roles",
            "Schedule and closed-period management",
            "Telegram notifications for new bookings",
          ],
          demoHref: "https://barbershop-man.vercel.app/",
          demoAccess: {
            href: "https://barbershop-man.vercel.app/admin",
            login: "admin",
            password: "admin123",
          },
        },
        {
          slug: "projectflow",
          title: "ProjectFlow",
          type: "Project management system",
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
            "A fullstack application with JWT-based authentication, role-based access, task management, document storage, and user activity history.",
          result:
            "All key processes are brought together in one system where participants can see current progress, assigned tasks, deadlines, and areas of responsibility.",
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
            "User activity history",
            "English and Russian interface",
          ],
          demoHref: "https://construction-app-mauve.vercel.app",
          demoAccess: {
            href: "https://construction-app-mauve.vercel.app",
            login: "admin@test.com",
            password: "DemoAdmin_2026_App_passW",
          },
        },
        {
          slug: "1c-crimea",
          title: "1C Crimea",
          type: "Business services website",
          visual: "website",
          status: "Completed frontend",
          cover: "/projects/1s-project/cover.jpg",
          gallery: [
            "/projects/1s-project/catalog.jpg",
            "/projects/1s-project/industries.jpg",
            "/projects/1s-project/catalog-page.jpg",
            "/projects/1s-project/services.jpg",
          ],
          challenge:
            "Clearly present 1C software sales, implementation, setup, and support, and help businesses quickly choose the right configuration.",
          solution:
            "A responsive multi-page website with a product catalog, industry solutions, service pages, and clear paths to making an enquiry.",
          result:
            "1C products and services are organised into a clear structure that helps visitors choose a solution and request a consultation.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Responsive layout",
            "SEO",
          ],
          role: "Frontend development",
          year: "2026",
          features: [
            "Filterable 1C product catalog",
            "Industry-specific solution navigation",
            "Service and support presentation",
            "Clear paths to enquiry",
            "Semantic markup and SEO metadata",
            "Architecture prepared for API integration",
          ],
          demoHref: "https://1s-project-vet.vercel.app/",
          demoAccess: null,
        },
        {
          slug: "transgaz",
          title: "TransGaz Service",
          type: "Automotive service website",
          visual: "website",
          status: "Completed website",
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
            "Create a modern website that clearly presents LPG installation services, showcases real work, and helps generate inspection and price estimate requests.",
          solution:
            "A responsive multi-page website with service descriptions, equipment packages, an installation gallery, reviews, pricing, and enquiry forms.",
          result:
            "Services, equipment, completed work, and reviews are combined into a clear journey from discovering the company to booking an inspection or requesting an estimate.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Responsive layout",
            "SEO",
          ],
          role: "Frontend development",
          year: "2026",
          features: [
            "Service and equipment presentation",
            "Installation gallery by vehicle brand",
            "Package and pricing comparison",
            "Inspection and calculation request forms",
            "Contact details and trust signals",
            "Semantic SEO structure",
          ],
          demoHref: "https://ugtransgas.vercel.app/",
          demoAccess: null,
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Ready to build something clean and useful?",
      text: "I am open to frontend, backend, and fullstack web projects.",
      terms: "Contract, transparent estimate, and milestone-based payments.",
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
      title: "© 2026 Alexandr Manuylov",
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
      contact: "Связаться",
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
    homeAbout: {
      kicker: "Обо мне",
      title: "Один специалист отвечает за продукт целиком.",
      lead: "Я Александр Мануйлов, fullstack-разработчик. Проектирую и создаю сайты, веб-приложения и внутренние системы для бизнеса.",
      text: "Работаю со всем продуктом: от структуры и интерфейса до backend, данных, интеграций и запуска. Благодаря этому решение получается цельным, а у заказчика остаётся одна понятная точка контакта на протяжении всего проекта.",
      action: "Подробнее обо мне и подходе",
      availability: "Принимаю новые проекты",
      portraitAlt:
        "Рабочее место fullstack-разработчика с кодом и веб-интерфейсами на нескольких экранах",
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
        demoAccessLabel: "Доступ к демо",
        demoAdminAction: "Открыть админ-панель",
        demoLoginLabel: "Логин",
        demoPasswordLabel: "Пароль",
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
          demoHref: "https://barbershop-man.vercel.app/",
          demoAccess: {
            href: "https://barbershop-man.vercel.app/admin",
            login: "admin",
            password: "admin123",
          },
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
          demoAccess: {
            href: "https://construction-app-mauve.vercel.app",
            login: "admin@test.com",
            password: "DemoAdmin_2026_App_passW",
          },
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
          demoHref: "https://1s-project-vet.vercel.app/",
          demoAccess: null,
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
          demoHref: "https://ugtransgas.vercel.app/",
          demoAccess: null,
        },
      ],
    },
    contact: {
      kicker: "Контакты",
      title: "Расскажите о задаче — предложу решение.",
      text: "Кратко опишите, что хотите создать или улучшить. Я уточню детали, предложу подходящий формат реализации и сориентирую по этапам, срокам и стоимости.",
      terms: "Договор, прозрачная смета и поэтапная оплата.",
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
      title: "© 2026 Alexandr Manuylov",
      top: "Наверх",
    },
  },
} as const;

export type PortfolioContent = (typeof content)[Language];
export type StackIconId = PortfolioContent["stack"]["groups"][number]["id"];
export type ProcessIconId = PortfolioContent["process"]["steps"][number]["id"];
export type ServiceIconId =
  PortfolioContent["servicesPage"]["items"][number]["id"];

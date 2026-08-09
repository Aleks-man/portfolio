import { englishProjects } from './projects/portfolio.projects.en'

export const englishContent = {
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
        {
          title: "Corporate websites and landing pages",
          description:
            "They clearly present a company, service, or product, build trust, and help generate enquiries, calls, and orders.",
        },
        {
          title: "Web applications and online services",
          description:
            "Online products where users can sign in, place orders, make calculations, or work with data directly in their browser.",
        },
        {
          title: "Customer portals, admin panels, and dashboards",
          description:
            "Dedicated workspaces where clients and teams can manage enquiries, users, documents, tasks, and business metrics.",
        },
        {
          title: "Backend, APIs, and integrations",
          description:
            "The server-side foundation that stores and processes data, connects the website to payments, CRM, and other services, and automates routine workflows.",
        },
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
      pricing: {
        kicker: "Pricing & timeline",
        title: "A useful estimate before we discuss the project.",
        lead: "The final budget depends on structure, design, and functionality. These starting points help set expectations and choose the right format.",
        priceLabel: "Budget",
        timelineLabel: "Timeline",
        items: [
          {
            title: "Landing page or small business site",
            description: "A focused one-page website for a service, professional, campaign, or new business direction.",
            price: "from ₽20,000",
            timeline: "2–5 business days",
          },
          {
            title: "Multi-page business website",
            description: "A company or service website with a clear structure, multiple sections, and enquiry forms.",
            price: "from ₽35,000",
            timeline: "1–4 weeks",
          },
          {
            title: "Web application or MVP",
            description: "An interface with business logic, authentication, user accounts, backend, and a database.",
            price: "from ₽70,000",
            timeline: "from 2 weeks",
          },
          {
            title: "Improvements & support",
            description: "Issue resolution, feature development, integrations, and ongoing technical support.",
            price: "from ₽1,500/hour",
            timeline: "from 1 business day",
          },
        ],
        note: "The starting timelines assume an agreed scope and ready-to-use materials. The exact cost and launch date are confirmed after a short project discussion. Domain, hosting, paid third-party services, and extensive content production are estimated separately.",
      },

      serviceArea: {
        kicker: "Service area",
        title: "Website development for businesses in Simferopol, Sevastopol, and across Crimea.",
        text: "I am based in Simferopol and work with companies and professionals across Crimea, including Sevastopol. Projects are not limited by location: discovery, milestone reviews, and delivery are structured for effective remote collaboration throughout Russia.",
        services: "If you need to commission a website in Simferopol or Sevastopol, launch a web application, or develop an existing product, I can help with full-cycle development, improvements, technical support, backend, APIs, and integrations.",
        locationLabel: "Primary region",
        location: "Simferopol, Sevastopol, and the Republic of Crimea",
        coverageLabel: "Project coverage",
        coverage: "Crimea and all of Russia",
      },

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
        {
          id: "maintenance",
          title: "Website improvements & technical support",
          description:
            "Ongoing development of an existing website: fixing issues, improving its interface and performance, adding features, updating the technical foundation, and providing post-launch support.",
          fit: "Businesses that need to keep an existing website reliable and develop it over time",
          includes: [
            "Audit and issue resolution",
            "New functionality",
            "Responsive design and performance",
            "Dependency updates",
            "APIs and integrations",
            "Post-launch support",
          ],
        },
      ],
      faq: {
        kicker: "Frequently asked questions",
        title: "What to know before we start.",
        lead: "A quick overview of timelines, pricing, and collaboration.",
        items: [
          {
            question: "How long does website development take?",
            answer:
              "The timeline depends on the scope, number of pages, available content, and required functionality. After our first discussion, I divide the project into stages and provide a realistic timeline before work begins.",
          },
          {
            question: "Can I get in touch without a technical specification?",
            answer:
              "Yes. To get started, it is enough to describe your task, goals, and preferences in your own words. I will help define the required functionality, plan the structure, and document the scope.",
          },
          {
            question: "What determines the project cost?",
            answer:
              "The cost depends on design complexity, the number of screens, business logic, integrations, and backend scope. I first clarify the task and then provide a transparent estimate broken down by stages.",
          },
          {
            question: "Can you improve an existing website?",
            answer:
              "Yes. I can audit the website, fix issues, improve responsiveness and performance, update the interface, and add new functionality, APIs, or integrations.",
          },
          {
            question: "What happens after launch?",
            answer:
              "I test the project across key screen sizes, help publish it, and hand over the required access and instructions. After launch, I provide two months of technical support at no additional cost, monitor the project's stability, and help with technical questions. New features and further development are discussed separately.",
          },
          {
            question: "Can we work entirely remotely?",
            answer:
              "Yes. Discussions, milestone reviews, demonstrations, and project handover can all take place online. I work with clients across Crimea and other regions of Russia.",
          },
        ],
      },
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
      descriptions: {
        React: "Builds fast interactive interfaces that can evolve as the product grows.",
        JavaScript: "The browser's core language, responsible for a site's logic and interactivity.",
        TypeScript: "Adds type checks to JavaScript and catches mistakes early in complex products.",
        "Redux Toolkit": "Keeps shared data and interface state predictable in larger applications.",
        Vite: "Speeds up development and creates an optimized production build.",
        "Responsive UI": "Adapts the interface to phones, tablets, and desktop screens.",
        Animation: "Makes transitions and interface feedback smooth and easy to understand.",
        "Node.js": "Runs the application's server-side logic with JavaScript.",
        Express: "Provides the server, API endpoints, and request handling for a product.",
        "REST API": "Connects the interface to the server, database, and external services.",
        "Auth flows": "Handles secure sign-in, registration, roles, and user permissions.",
        Integrations: "Connects payments, CRM systems, notifications, and other services.",
        PostgreSQL: "A reliable database for structured and related business data.",
        MongoDB: "A flexible database suited to documents and rapidly changing data structures.",
        Prisma: "Makes database access from the server safer and easier to maintain.",
        "Schema design": "A considered data structure that remains maintainable as a product grows.",
        Queries: "Retrieves, filters, and processes the data an application needs.",
        Figma: "Used for layouts, prototypes, and agreeing on an interface before development.",
        Git: "Keeps a history of changes and makes ongoing development safer.",
        Deploy: "Publishes the finished product and supports reliable future updates.",
        "Clean code": "Clear, organized code that is easier to support and extend.",
        "Testing mindset": "Checks important scenarios and prevents fixed issues from returning.",
        Docs: "Documentation makes a project easier to understand, maintain, and hand over.",
      },
      groupDescriptions: {
        frontend: "Everything users see and interact with: pages, buttons, forms, and animations.",
        backend: "The server-side part that handles requests, business logic, and data behind the interface.",
        data: "How a product stores and organizes users, requests, products, settings, and other information.",
        workflow: "The tools and practices used to design, test, publish, and maintain a product.",
      },
      groups: [
        {
          id: "frontend",
          title: "Frontend",
          items: ["React", "JavaScript", "TypeScript", "Redux Toolkit", "Vite", "Responsive UI", "Animation"],
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
    projects: englishProjects,
    contact: {
      kicker: "Contact",
      title: "Ready to build something clean and useful?",
      text: "I am open to frontend, backend, and fullstack web projects.",
      terms: "Contract, transparent estimate, and milestone-based payments.",
      locationLabel: "Location and service area",
      location: "Simferopol, Republic of Crimea",
      serviceArea: "Available for projects across Crimea and Russia",
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
      tagline: "WEB & APP DEVELOPMENT",
      top: "Back to top",
    },
  } as const

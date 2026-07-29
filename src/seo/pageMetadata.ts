import type { Language, PortfolioContent } from '../content/portfolio'
import { getLanguageFromPath, localizePath, stripLanguagePrefix } from '../routing/localizedRoutes'

export type OpenGraphType = 'article' | 'website'

export type PageMetadata = {
  canonicalUrl: string
  description: string
  englishUrl: string
  imageUrl: string
  language: Language
  openGraphType: OpenGraphType
  robots: string
  russianUrl: string
  structuredData: {
    '@context': 'https://schema.org'
    '@graph': Record<string, unknown>[]
  }
  title: string
}

export type PageMetadataOverrides = {
  description?: string
  image?: string
  noIndex?: boolean
  openGraphType?: OpenGraphType
  title?: string
}

type PageMetadataInput = {
  origin: string
  pathname: string
  portfolio: PortfolioContent
  overrides?: PageMetadataOverrides
}

function getPageUrl(origin: string, path: string) {
  return `${origin}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`
}

function getStaticSeo(
  basePath: string,
  language: Language,
  portfolio: PortfolioContent,
) {
  const isRussian = language === 'ru'

  if (basePath === '/services') {
    return {
      title: isRussian
        ? 'Разработка и поддержка сайтов в Симферополе и Крыму'
        : 'Website and web application development services',
      description: isRussian
        ? 'Создание, доработка и техническая поддержка сайтов и веб-приложений для бизнеса в Симферополе, Крыму и по всей России.'
        : portfolio.servicesPage.lead,
      image: '/manuylov-social-cover.png',
      openGraphType: 'website' as const,
    }
  }

  if (basePath === '/projects') {
    return {
      title: isRussian
        ? 'Портфолио веб-разработчика — сайты и веб-приложения'
        : 'Web developer portfolio — websites and web applications',
      description: isRussian
        ? 'Примеры разработанных сайтов, веб-приложений, личных кабинетов и бизнес-систем: задачи, решения, функциональность и технологии.'
        : portfolio.projects.page.lead,
      image: portfolio.projects.items[0]?.cover || '/manuylov-social-cover.png',
      openGraphType: 'website' as const,
    }
  }

  if (basePath === '/about') {
    return {
      title: isRussian
        ? 'Fullstack-разработчик Александр Мануйлов — обо мне'
        : 'Fullstack developer Alexandr Manuylov — about me',
      description: isRussian
        ? 'Проектирую и разрабатываю сайты, веб-приложения и внутренние системы для бизнеса: frontend, backend, базы данных и интеграции.'
        : portfolio.aboutPage.lead,
      image: '/alexandr-portrait-448.jpg',
      openGraphType: 'website' as const,
    }
  }

  return {
    title: isRussian
      ? 'Создание сайтов в Симферополе и Крыму — Александр Мануйлов'
      : 'Websites and web application development — Alexandr Manuylov',
    description: isRussian
      ? 'Разработка сайтов и веб-приложений для бизнеса в Симферополе, Крыму и по всей России: frontend, backend, API, интеграции и запуск.'
      : 'Fullstack development of websites, web applications, customer portals, backend systems, APIs, and integrations for businesses.',
    image: '/manuylov-social-cover.png',
    openGraphType: 'website' as const,
  }
}

function createPersonSchema(origin: string, language: Language) {
  const isRussian = language === 'ru'

  return {
    '@type': 'Person',
    '@id': `${origin}/#person`,
    name: isRussian ? 'Александр Мануйлов' : 'Alexandr Manuylov',
    url: `${origin}/`,
    image: new URL('/alexandr-portrait-448.jpg', `${origin}/`).href,
    jobTitle: isRussian ? 'Fullstack-разработчик' : 'Fullstack Developer',
    telephone: '+79780110617',
    email: 'mailto:manuylovaleks@icloud.com',
    sameAs: ['https://t.me/Aleks_Manuilov'],
    workLocation: {
      '@type': 'Place',
      name: isRussian ? 'Симферополь, Республика Крым' : 'Simferopol, Republic of Crimea',
      address: {
        '@type': 'PostalAddress',
        addressLocality: isRussian ? 'Симферополь' : 'Simferopol',
        addressRegion: isRussian ? 'Республика Крым' : 'Republic of Crimea',
        addressCountry: 'RU',
      },
    },
    knowsAbout: [
      'Website development',
      'Web applications',
      'Technical website support',
      'React',
      'TypeScript',
      'Backend',
      'API',
      'Databases',
    ],
  }
}

function createServiceSchema(
  origin: string,
  canonicalUrl: string,
  language: Language,
  description: string,
) {
  const isRussian = language === 'ru'

  return {
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: isRussian ? 'Разработка и поддержка сайтов' : 'Website development and support',
    description,
    url: canonicalUrl,
    mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
    provider: { '@id': `${origin}/#person` },
    serviceType: isRussian
      ? ['Создание сайтов', 'Разработка веб-приложений', 'Доработка и техническая поддержка сайтов', 'Backend, API и интеграции']
      : ['Website development', 'Web application development', 'Website improvements and technical support', 'Backend, APIs, and integrations'],
    areaServed: [
      { '@type': 'City', name: isRussian ? 'Симферополь' : 'Simferopol' },
      { '@type': 'City', name: isRussian ? 'Севастополь' : 'Sevastopol' },
      { '@type': 'AdministrativeArea', name: isRussian ? 'Республика Крым' : 'Republic of Crimea' },
      { '@type': 'Country', name: isRussian ? 'Россия' : 'Russia' },
    ],
  }
}

export function createPageMetadata({
  origin,
  pathname,
  portfolio,
  overrides = {},
}: PageMetadataInput): PageMetadata {
  const language = getLanguageFromPath(pathname)
  const basePath = stripLanguagePrefix(pathname)
  const projectSlug = basePath.match(/^\/projects\/([^/]+)$/)?.[1]
  const project = projectSlug
    ? portfolio.projects.items.find((item) => item.slug === projectSlug)
    : undefined
  const defaultSeo = project
    ? {
        title: `${project.title} — Manuylov Studio`,
        description: project.solution,
        image: project.cover,
        openGraphType: 'article' as const,
      }
    : getStaticSeo(basePath, language, portfolio)
  const title = overrides.title || defaultSeo.title
  const description = overrides.description || defaultSeo.description
  const openGraphType = overrides.openGraphType || defaultSeo.openGraphType
  const canonicalUrl = getPageUrl(origin, localizePath(basePath, language))
  const russianUrl = getPageUrl(origin, localizePath(basePath, 'ru'))
  const englishUrl = getPageUrl(origin, localizePath(basePath, 'en'))
  const imageUrl = new URL(overrides.image || defaultSeo.image, `${origin}/`).href
  const robots = overrides.noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large'
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: 'Manuylov Studio',
      inLanguage: ['ru', 'en'],
    },
    {
      '@type': openGraphType === 'article' ? 'CreativeWork' : 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      image: imageUrl,
      inLanguage: language,
      isPartOf: { '@id': `${origin}/#website` },
    },
  ]

  if (basePath === '/' || basePath === '/services') {
    graph.push(createPersonSchema(origin, language))
  }

  if (basePath === '/services') {
    graph.push(createServiceSchema(origin, canonicalUrl, language, description))
  }

  if (basePath !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: language === 'ru' ? 'Главная' : 'Home',
          item: language === 'ru' ? `${origin}/` : `${origin}/en/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title.replace(/ — .*$/, ''),
          item: canonicalUrl,
        },
      ],
    })
  }

  return {
    canonicalUrl,
    description,
    englishUrl,
    imageUrl,
    language,
    openGraphType,
    robots,
    russianUrl,
    structuredData: { '@context': 'https://schema.org', '@graph': graph },
    title,
  }
}

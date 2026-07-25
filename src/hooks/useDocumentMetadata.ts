import { useEffect } from 'react'
import { getLanguageFromPath, localizePath, stripLanguagePrefix } from '../routing/localizedRoutes'

type OpenGraphType = 'article' | 'website'

type MetadataOptions = {
  image?: string
  noIndex?: boolean
}

function getSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
  return configuredOrigin || 'https://manuylovweb.ru'
}

function getPageUrl(origin: string, path: string) {
  return `${origin}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.append(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value))
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.append(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value))
}

function createPersonSchema(origin: string, language: 'ru' | 'en') {
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
  language: 'ru' | 'en',
  description: string,
) {
  const isRussian = language === 'ru'

  return {
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: isRussian
      ? 'Разработка и поддержка сайтов'
      : 'Website development and support',
    description,
    url: canonicalUrl,
    mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
    provider: { '@id': `${origin}/#person` },
    serviceType: isRussian
      ? ['Создание сайтов', 'Разработка веб-приложений', 'Доработка и техническая поддержка сайтов', 'Backend, API и интеграции']
      : ['Website development', 'Web application development', 'Website improvements and technical support', 'Backend, APIs, and integrations'],
    areaServed: [
      { '@type': 'City', name: isRussian ? 'Симферополь' : 'Simferopol' },
      { '@type': 'AdministrativeArea', name: isRussian ? 'Республика Крым' : 'Republic of Crimea' },
      { '@type': 'Country', name: isRussian ? 'Россия' : 'Russia' },
    ],
  }
}

export function useDocumentMetadata(
  title?: string,
  description?: string,
  openGraphType: OpenGraphType = 'website',
  options: MetadataOptions = {},
) {
  const { image, noIndex = false } = options

  useEffect(() => {
    if (!title || !description) return

    const origin = getSiteOrigin()
    const language = getLanguageFromPath(window.location.pathname)
    const basePath = stripLanguagePrefix(window.location.pathname)
    const canonicalUrl = getPageUrl(origin, localizePath(basePath, language))
    const russianUrl = getPageUrl(origin, localizePath(basePath, 'ru'))
    const englishUrl = getPageUrl(origin, localizePath(basePath, 'en'))
    const imageUrl = new URL(image || '/developer-workspace-v3.webp', `${origin}/`).href
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: robots })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: openGraphType })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: title })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: language === 'ru' ? 'ru_RU' : 'en_US' })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })
    upsertLink('link[rel="alternate"][hreflang="ru"]', { rel: 'alternate', hreflang: 'ru', href: russianUrl })
    upsertLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: englishUrl })
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: russianUrl })

    let structuredData = document.head.querySelector<HTMLScriptElement>('#seo-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'seo-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.append(structuredData)
    }
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

    structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  }, [description, image, noIndex, openGraphType, title])
}

import { useEffect } from 'react'
import { getLanguageFromPath, localizePath, stripLanguagePrefix } from '../routing/localizedRoutes'

type OpenGraphType = 'article' | 'website'

type MetadataOptions = {
  image?: string
  noIndex?: boolean
}

function getSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
  return configuredOrigin || window.location.origin
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
    const canonicalUrl = `${origin}${localizePath(basePath, language)}`
    const russianUrl = `${origin}${localizePath(basePath, 'ru')}`
    const englishUrl = `${origin}${localizePath(basePath, 'en')}`
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

    if (basePath === '/') {
      graph.push({
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: language === 'ru' ? 'Александр Мануйлов' : 'Alexandr Manuylov',
        url: russianUrl,
        image: new URL('/alexandr-portrait-448.jpg', `${origin}/`).href,
        jobTitle: language === 'ru' ? 'Fullstack-разработчик' : 'Fullstack Developer',
        sameAs: ['https://t.me/Aleks_Manuilov'],
        knowsAbout: ['Web development', 'React', 'TypeScript', 'Backend', 'API', 'Databases'],
      })
    } else {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: language === 'ru' ? 'Главная' : 'Home',
            item: language === 'ru' ? `${origin}/` : `${origin}/en`,
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

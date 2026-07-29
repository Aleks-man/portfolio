import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { PortfolioContent } from '../content/portfolio'
import {
  createPageMetadata,
  type PageMetadataOverrides,
} from '../seo/pageMetadata'

function getSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
  return configuredOrigin || 'https://manuylov.com'
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
  portfolio: PortfolioContent,
  overrides: PageMetadataOverrides = {},
) {
  const location = useLocation()
  const {
    description,
    image,
    noIndex,
    openGraphType,
    title,
  } = overrides

  useEffect(() => {
    const metadata = createPageMetadata({
      origin: getSiteOrigin(),
      pathname: location.pathname,
      portfolio,
      overrides: { description, image, noIndex, openGraphType, title },
    })

    document.title = metadata.title
    upsertMeta('meta[name="description"]', { name: 'description', content: metadata.description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: metadata.robots })
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: metadata.robots })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: metadata.description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: metadata.openGraphType })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: metadata.canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: metadata.imageUrl })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: metadata.title })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: metadata.language === 'ru' ? 'ru_RU' : 'en_US' })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: metadata.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: metadata.imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: metadata.canonicalUrl })
    upsertLink('link[rel="alternate"][hreflang="ru"]', { rel: 'alternate', hreflang: 'ru', href: metadata.russianUrl })
    upsertLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: metadata.englishUrl })
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: metadata.russianUrl })

    let structuredData = document.head.querySelector<HTMLScriptElement>('#seo-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'seo-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.append(structuredData)
    }
    structuredData.textContent = JSON.stringify(metadata.structuredData)
  }, [description, image, location.pathname, noIndex, openGraphType, portfolio, title])
}

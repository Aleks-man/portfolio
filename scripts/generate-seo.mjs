import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { localizedPageEntries } from '../src/config/sitePages.js'

const rawSiteUrl = process.env.VITE_SITE_URL?.trim() || 'https://manuylov.com'

const siteUrl = rawSiteUrl.replace(/\/$/, '')
const parsedSiteUrl = new URL(siteUrl)

if (parsedSiteUrl.protocol !== 'https:') {
  console.error('VITE_SITE_URL must use HTTPS in production.')
  process.exit(1)
}

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const pageUrl = (path) => `${siteUrl}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`

const urlEntries = localizedPageEntries.map(({ basePath, path }) => {
  const russianUrl = pageUrl(basePath)
  const englishUrl = pageUrl(basePath === '/' ? '/en' : `/en${basePath}`)
  const currentPageUrl = pageUrl(path)

  return `  <url>
    <loc>${escapeXml(currentPageUrl)}</loc>
    <xhtml:link rel="alternate" hreflang="ru" href="${escapeXml(russianUrl)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(englishUrl)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(russianUrl)}" />
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`

const robots = `User-agent: *
Allow: /

User-agent: Yandex
Allow: /
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term&yclid&gclid&from

Sitemap: ${siteUrl}/sitemap.xml
`

const publicDirectory = resolve('public')
await mkdir(publicDirectory, { recursive: true })
await Promise.all([
  writeFile(resolve(publicDirectory, 'sitemap.xml'), sitemap, 'utf8'),
  writeFile(resolve(publicDirectory, 'robots.txt'), robots, 'utf8'),
])

console.log(`SEO files generated for ${siteUrl}`)

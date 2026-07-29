import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const distDirectory = resolve('dist')
const serverEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href
const template = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
const { prerenderPaths, render } = await import(serverEntry)

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

function createSeoBlock({ language, seo }) {
  return `
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="${escapeHtml(seo.robots)}" />
    <link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />
    <link rel="alternate" hreflang="ru" href="${escapeHtml(seo.russianUrl)}" />
    <link rel="alternate" hreflang="en" href="${escapeHtml(seo.englishUrl)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(seo.russianUrl)}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:type" content="${seo.openGraphType}" />
    <meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(seo.imageUrl)}" />
    <meta property="og:image:alt" content="${escapeHtml(seo.title)}" />
    <meta property="og:locale" content="${language === 'ru' ? 'ru_RU' : 'en_US'}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${escapeHtml(seo.imageUrl)}" />
    <script id="seo-structured-data" type="application/ld+json">${JSON.stringify(seo.structuredData).replaceAll('<', '\\u003c')}</script>`
}

function stripTemplateSeo(html) {
  const selectors = [
    'description', 'robots', 'googlebot', 'twitter:card', 'twitter:title',
    'twitter:description', 'twitter:image',
  ]
  const properties = [
    'og:title', 'og:description', 'og:type', 'og:url', 'og:image',
    'og:image:alt', 'og:image:width', 'og:image:height', 'og:locale',
  ]

  let result = html.replace(/\s*<title>[\s\S]*?<\/title>/i, '')
  selectors.forEach((name) => {
    result = result.replace(new RegExp(`\\s*<meta[^>]+name=["']${name}["'][^>]*>`, 'gi'), '')
  })
  properties.forEach((property) => {
    result = result.replace(new RegExp(`\\s*<meta[^>]+property=["']${property}["'][^>]*>`, 'gi'), '')
  })
  return result
}

const cleanTemplate = stripTemplateSeo(template)

for (const pathname of prerenderPaths) {
  const result = render(pathname)
  const document = cleanTemplate
    .replace('<html lang="ru">', `<html lang="${result.language}">`)
    .replace('</head>', `${createSeoBlock(result)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${result.html}</div>`)
  const outputPath = pathname === '/'
    ? resolve(distDirectory, 'index.html')
    : resolve(distDirectory, pathname.slice(1), 'index.html')

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, document, 'utf8')
}

console.log(`Prerendered ${prerenderPaths.length} routes`)

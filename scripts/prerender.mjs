import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const distDirectory = resolve('dist')
const serverEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href
const template = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
const { prerenderPaths, render } = await import(serverEntry)
const configuredOrigin = process.env.VITE_SITE_URL?.trim().replace(/\/$/, '') || 'https://manuylovweb.ru'

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

function absoluteUrl(path) {
  return `${configuredOrigin}${path === '/' ? '/' : path}`
}

function absolutePageUrl(path) {
  return absoluteUrl(path === '/' ? '/' : `${path.replace(/\/$/, '')}/`)
}

function createSeoBlock({ basePath, language, seo }) {
  const currentPath = language === 'ru' ? basePath : basePath === '/' ? '/en' : `/en${basePath}`
  const russianPath = basePath
  const englishPath = basePath === '/' ? '/en' : `/en${basePath}`
  const canonical = absolutePageUrl(currentPath)
  const russianUrl = absolutePageUrl(russianPath)
  const englishUrl = absolutePageUrl(englishPath)
  const imageUrl = absoluteUrl(seo.image)
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${absolutePageUrl('/')}#website`,
      url: absolutePageUrl('/'),
      name: 'Manuylov Studio',
      inLanguage: ['ru', 'en'],
    },
    {
      '@type': seo.type === 'article' ? 'CreativeWork' : 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: seo.title,
      description: seo.description,
      image: imageUrl,
      inLanguage: language,
      isPartOf: { '@id': `${absoluteUrl('/')}#website` },
    },
  ]

  if (basePath === '/') {
    graph.push({
      '@type': 'Person',
      '@id': `${absoluteUrl('/')}#person`,
      name: language === 'ru' ? 'Александр Мануйлов' : 'Alexandr Manuylov',
      url: russianUrl,
      image: absoluteUrl('/alexandr-portrait-448.jpg'),
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
          item: language === 'ru' ? absolutePageUrl('/') : absolutePageUrl('/en'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seo.title.replace(/ — .*$/, ''),
          item: canonical,
        },
      ],
    })
  }

  return `
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <link rel="alternate" hreflang="ru" href="${escapeHtml(russianUrl)}" />
    <link rel="alternate" hreflang="en" href="${escapeHtml(englishUrl)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(russianUrl)}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:type" content="${seo.type}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:image:alt" content="${escapeHtml(seo.title)}" />
    <meta property="og:locale" content="${language === 'ru' ? 'ru_RU' : 'en_US'}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <script id="seo-structured-data" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')}</script>`
}

function stripTemplateSeo(html) {
  const selectors = [
    'description', 'robots', 'googlebot', 'twitter:card', 'twitter:title',
    'twitter:description', 'twitter:image',
  ]
  const properties = [
    'og:title', 'og:description', 'og:type', 'og:url', 'og:image',
    'og:image:alt', 'og:locale',
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

console.log(`Prerendered ${prerenderPaths.length} routes${configuredOrigin ? ` for ${configuredOrigin}` : ''}`)

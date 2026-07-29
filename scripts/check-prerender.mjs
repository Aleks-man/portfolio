import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { localizedPageEntries } from '../src/config/sitePages.js'

const serverEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href
const { render } = await import(serverEntry)

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

for (const { language, path: pathname } of localizedPageEntries) {
  const outputPath = pathname === '/'
    ? resolve('dist/index.html')
    : resolve('dist', pathname.slice(1), 'index.html')
  const html = await readFile(outputPath, 'utf8')
  const { seo } = render(pathname)
  const requirements = [
    [`lang="${language}"`, 'document language'],
    ['<h1', 'H1 content'],
    [`<title>${escapeHtml(seo.title)}</title>`, 'page title'],
    [`name="description" content="${escapeHtml(seo.description)}"`, 'meta description'],
    [`rel="canonical" href="${escapeHtml(seo.canonicalUrl)}"`, 'canonical URL'],
    [`hreflang="ru" href="${escapeHtml(seo.russianUrl)}"`, 'Russian hreflang'],
    [`hreflang="en" href="${escapeHtml(seo.englishUrl)}"`, 'English hreflang'],
    [`hreflang="x-default" href="${escapeHtml(seo.russianUrl)}"`, 'x-default hreflang'],
    [`property="og:url" content="${escapeHtml(seo.canonicalUrl)}"`, 'Open Graph URL'],
    [`property="og:image" content="${escapeHtml(seo.imageUrl)}"`, 'Open Graph image'],
    ['application/ld+json', 'structured data'],
  ]

  if (html.includes('<div id="root"></div>')) {
    throw new Error(`${pathname}: prerendered root is empty`)
  }

  requirements.forEach(([token, label]) => {
    if (!html.includes(token)) throw new Error(`${pathname}: missing ${label}`)
  })
}

console.log(`Validated ${localizedPageEntries.length} prerendered routes`)

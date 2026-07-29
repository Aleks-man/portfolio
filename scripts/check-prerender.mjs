import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { localizedPageEntries } from '../src/config/sitePages.js'

for (const { language, path: pathname } of localizedPageEntries) {
  const outputPath = pathname === '/'
    ? resolve('dist/index.html')
    : resolve('dist', pathname.slice(1), 'index.html')
  const html = await readFile(outputPath, 'utf8')
  const requirements = [
    [`lang="${language}"`, 'document language'],
    ['<h1', 'H1 content'],
    ['rel="canonical"', 'canonical URL'],
    ['hreflang="ru"', 'Russian hreflang'],
    ['hreflang="en"', 'English hreflang'],
    ['hreflang="x-default"', 'x-default hreflang'],
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

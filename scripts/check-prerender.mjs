import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const basePaths = [
  '/',
  '/services',
  '/projects',
  '/projects/gentlemans-room',
  '/projects/projectflow',
  '/projects/1c-crimea',
  '/projects/transgaz',
  '/about',
]
const paths = basePaths.flatMap((path) => [path, path === '/' ? '/en' : `/en${path}`])

for (const pathname of paths) {
  const outputPath = pathname === '/'
    ? resolve('dist/index.html')
    : resolve('dist', pathname.slice(1), 'index.html')
  const html = await readFile(outputPath, 'utf8')
  const expectedLanguage = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru'
  const requirements = [
    [`lang="${expectedLanguage}"`, 'document language'],
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

console.log(`Validated ${paths.length} prerendered routes`)

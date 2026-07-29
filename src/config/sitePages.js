/** @typedef {'en' | 'ru'} SiteLanguage */

export const staticPagePaths = Object.freeze([
  '/',
  '/services',
  '/projects',
  '/about',
])

export const projectSlugs = Object.freeze([
  'gentlemans-room',
  'projectflow',
  '1c-crimea',
  'transgaz',
])

export const basePagePaths = Object.freeze([
  ...staticPagePaths,
  ...projectSlugs.map((slug) => `/projects/${slug}`),
])

/**
 * @param {string} path
 * @param {SiteLanguage} language
 */
export function getLocalizedPagePath(path, language) {
  if (language === 'ru') return path
  return path === '/' ? '/en' : `/en${path}`
}

export const localizedPageEntries = Object.freeze(
  basePagePaths.flatMap((basePath) => /** @type {const} */ ([
    { basePath, language: 'ru', path: getLocalizedPagePath(basePath, 'ru') },
    { basePath, language: 'en', path: getLocalizedPagePath(basePath, 'en') },
  ])),
)

export const prerenderPaths = Object.freeze(
  localizedPageEntries.map(({ path }) => path),
)

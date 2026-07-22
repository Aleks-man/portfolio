import type { Language } from '../content/portfolio'

export function getLanguageFromPath(pathname: string): Language {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru'
}

export function stripLanguagePrefix(pathname: string) {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3)
  return pathname
}

export function localizePath(path: string, language: Language) {
  const normalizedPath = path === '' ? '/' : path
  if (language === 'ru') return normalizedPath
  return normalizedPath === '/' ? '/en' : `/en${normalizedPath}`
}

export function switchLanguagePath(pathname: string, language: Language) {
  return localizePath(stripLanguagePrefix(pathname), language)
}

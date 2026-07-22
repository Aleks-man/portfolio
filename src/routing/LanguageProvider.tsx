import type { ReactNode } from 'react'
import type { Language } from '../content/portfolio'
import { LanguageContext } from './languageContext'

type LanguageProviderProps = {
  children: ReactNode
  language: Language
}

export function LanguageProvider({ children, language }: LanguageProviderProps) {
  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>
}

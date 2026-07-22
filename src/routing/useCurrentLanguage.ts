import { useContext } from 'react'
import { LanguageContext } from './languageContext'

export function useCurrentLanguage() {
  return useContext(LanguageContext)
}

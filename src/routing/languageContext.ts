import { createContext } from 'react'
import type { Language } from '../content/portfolio'

export const LanguageContext = createContext<Language>('ru')

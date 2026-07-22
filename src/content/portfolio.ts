import { englishContent } from './portfolio.en'
import { russianContent } from './portfolio.ru'

export type Language = 'en' | 'ru'

export const content = {
  en: englishContent,
  ru: russianContent,
} as const

export type PortfolioContent = (typeof content)[Language]
export type StackIconId = PortfolioContent["stack"]["groups"][number]["id"];
export type ProcessIconId = PortfolioContent["process"]["steps"][number]["id"];
export type ServiceIconId =
  PortfolioContent["servicesPage"]["items"][number]["id"];

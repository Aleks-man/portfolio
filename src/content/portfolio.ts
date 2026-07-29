import { englishContent } from './portfolio.en'
import { russianContent } from './portfolio.ru'

export type Language = 'en' | 'ru'

type ContentShape<T> =
  T extends string ? string
    : T extends number ? number
      : T extends boolean ? boolean
        : T extends null ? null
          : T extends readonly (infer Item)[] ? readonly ContentShape<Item>[]
            : T extends object ? { readonly [Key in keyof T]: ContentShape<T[Key]> }
              : T

type EnglishMatchesRussian =
  typeof englishContent extends ContentShape<typeof russianContent> ? true : false

type RussianMatchesEnglish =
  typeof russianContent extends ContentShape<typeof englishContent> ? true : false

const contentStructuresMatch:
  EnglishMatchesRussian & RussianMatchesEnglish = true

export const content = {
  en: englishContent,
  ru: russianContent,
} as const

void contentStructuresMatch

export type PortfolioContent = (typeof content)[Language]
export type StackIconId = PortfolioContent["stack"]["groups"][number]["id"];
export type ProcessIconId = PortfolioContent["process"]["steps"][number]["id"];
export type ServiceIconId =
  PortfolioContent["servicesPage"]["items"][number]["id"];

export const yandexMetrikaCounterId = 111158629

export const metrikaGoals = {
  email: 'contact_email',
  phone: 'contact_phone',
  projectDemo: 'project_demo',
  telegram: 'contact_telegram',
  whatsapp: 'contact_whatsapp',
} as const

type MetrikaCommand = 'hit' | 'init' | 'reachGoal'
type Metrika = (id: number, command: MetrikaCommand, ...parameters: unknown[]) => void

declare global {
  interface Window {
    ym?: Metrika & {
      a?: Parameters<Metrika>[]
      l?: number
    }
    __yandexMetrikaInitialized?: boolean
    __yandexMetrikaLastUrl?: string
  }
}

export function reachMetrikaGoal(goal: (typeof metrikaGoals)[keyof typeof metrikaGoals]) {
  window.ym?.(yandexMetrikaCounterId, 'reachGoal', goal)
}

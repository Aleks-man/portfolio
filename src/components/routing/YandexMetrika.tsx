import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const counterId = 111059447
const scriptId = 'yandex-metrika'

type MetrikaCommand = 'hit' | 'init'
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

function initializeMetrika(url: string) {
  if (!window.ym) {
    const ym: NonNullable<Window['ym']> = function (...parameters: Parameters<Metrika>) {
      ;(ym.a ??= []).push(parameters)
    }

    ym.l = Date.now()
    window.ym = ym
  }

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`
    document.head.appendChild(script)
  }

  if (!window.__yandexMetrikaInitialized) {
    window.ym(counterId, 'init', {
      accurateTrackBounce: true,
      clickmap: true,
      defer: false,
      trackLinks: true,
      url,
      webvisor: true,
    })
    window.__yandexMetrikaInitialized = true
    window.__yandexMetrikaLastUrl = url
  }
}

export function YandexMetrika() {
  const location = useLocation()

  useEffect(() => {
    const url = window.location.href
    initializeMetrika(url)

    if (window.__yandexMetrikaLastUrl !== url) {
      window.ym?.(counterId, 'hit', url, {
        referer: window.__yandexMetrikaLastUrl,
        title: document.title,
      })
      window.__yandexMetrikaLastUrl = url
    }
  }, [location.pathname, location.search])

  return null
}

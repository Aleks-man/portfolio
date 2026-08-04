import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { yandexMetrikaCounterId } from '../../analytics/yandexMetrika'

const scriptId = 'yandex-metrika'

function ensureMetrikaQueue(url: string) {
  if (!window.ym) {
    const ym: NonNullable<Window['ym']> = function (
      ...parameters: Parameters<NonNullable<Window['ym']>>
    ) {
      ;(ym.a ??= []).push(parameters)
    }

    ym.l = Date.now()
    window.ym = ym
  }

  if (!window.__yandexMetrikaInitialized) {
    window.ym(yandexMetrikaCounterId, 'init', {
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

function loadMetrikaScript() {
  if (document.getElementById(scriptId)) return

  const script = document.createElement('script')
  script.id = scriptId
  script.async = true
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaCounterId}`
  document.head.appendChild(script)
}

export function YandexMetrika() {
  const location = useLocation()

  useEffect(() => {
    ensureMetrikaQueue(window.location.href)

    let idleCallbackId: number | null = null
    let fallbackTimerId: number | null = null

    const removeInteractionListeners = () => {
      window.removeEventListener('pointerdown', loadOnInteraction)
      window.removeEventListener('keydown', loadOnInteraction)
    }

    const load = () => {
      loadMetrikaScript()
      removeInteractionListeners()
    }

    const loadOnInteraction = () => {
      if (idleCallbackId !== null) {
        window.cancelIdleCallback(idleCallbackId)
        idleCallbackId = null
      }
      if (fallbackTimerId !== null) {
        window.clearTimeout(fallbackTimerId)
        fallbackTimerId = null
      }
      load()
    }

    const scheduleIdleLoad = () => {
      if ('requestIdleCallback' in window) {
        idleCallbackId = window.requestIdleCallback(load, { timeout: 2000 })
        return
      }

      fallbackTimerId = globalThis.setTimeout(load, 1000)
    }

    if (document.readyState === 'complete') scheduleIdleLoad()
    else window.addEventListener('load', scheduleIdleLoad, { once: true })

    window.addEventListener('pointerdown', loadOnInteraction, { once: true, passive: true })
    window.addEventListener('keydown', loadOnInteraction, { once: true })

    return () => {
      window.removeEventListener('load', scheduleIdleLoad)
      removeInteractionListeners()
      if (idleCallbackId !== null) window.cancelIdleCallback(idleCallbackId)
      if (fallbackTimerId !== null) window.clearTimeout(fallbackTimerId)
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    ensureMetrikaQueue(url)

    if (window.__yandexMetrikaLastUrl !== url) {
      window.ym?.(yandexMetrikaCounterId, 'hit', url, {
        referer: window.__yandexMetrikaLastUrl,
        title: document.title,
      })
      window.__yandexMetrikaLastUrl = url
    }
  }, [location.hash, location.pathname, location.search])

  return null
}

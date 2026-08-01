import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { yandexMetrikaCounterId } from '../../analytics/yandexMetrika'

const scriptId = 'yandex-metrika'

function initializeMetrika(url: string) {
  if (!window.ym) {
    const ym: NonNullable<Window['ym']> = function (
      ...parameters: Parameters<NonNullable<Window['ym']>>
    ) {
      ;(ym.a ??= []).push(parameters)
    }

    ym.l = Date.now()
    window.ym = ym
  }

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaCounterId}`
    document.head.appendChild(script)
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

export function YandexMetrika() {
  const location = useLocation()

  useEffect(() => {
    const url = window.location.href
    initializeMetrika(url)

    if (window.__yandexMetrikaLastUrl !== url) {
      window.ym?.(yandexMetrikaCounterId, 'hit', url, {
        referer: window.__yandexMetrikaLastUrl,
        title: document.title,
      })
      window.__yandexMetrikaLastUrl = url
    }
  }, [location.pathname, location.search])

  return null
}

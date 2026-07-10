import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView()
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [hash, pathname])

  return null
}

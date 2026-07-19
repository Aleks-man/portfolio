import { useCallback, useEffect, useState } from 'react'

export function useLightbox(imageCount: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const open = useCallback((index: number) => setActiveIndex(index), [])
  const showPrevious = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index - 1 + imageCount) % imageCount)
  }, [imageCount])
  const showNext = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index + 1) % imageCount)
  }, [imageCount])

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, close, showNext, showPrevious])

  return { activeIndex, close, open, showNext, showPrevious }
}

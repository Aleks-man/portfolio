import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

type BackToTopButtonProps = {
  label: string
}

const visibilityThreshold = 500

export function BackToTopButton({ label }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > visibilityThreshold)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      className="back-to-top"
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUp aria-hidden="true" />
    </button>
  )
}

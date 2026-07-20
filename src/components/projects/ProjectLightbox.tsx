import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, type KeyboardEvent } from 'react'
import { createPortal } from 'react-dom'

type ProjectLightboxProps = {
  activeIndex: number
  closeLabel: string
  galleryLabel: string
  images: readonly string[]
  nextLabel: string
  previousLabel: string
  projectTitle: string
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ProjectLightbox({
  activeIndex,
  closeLabel,
  galleryLabel,
  images,
  nextLabel,
  previousLabel,
  projectTitle,
  onClose,
  onNext,
  onPrevious,
}: ProjectLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    const appRoot = document.getElementById('root')

    if (appRoot) appRoot.inert = true
    closeButtonRef.current?.focus()

    return () => {
      if (appRoot) appRoot.inert = false
      previouslyFocusedElement?.focus()
    }
  }, [])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')
    if (!focusableElements?.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return createPortal(
    <div
      className="project-lightbox"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={galleryLabel}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div className="project-lightbox__viewer">
        <button ref={closeButtonRef} className="project-lightbox__close" type="button" aria-label={closeLabel} onClick={(event) => { event.stopPropagation(); onClose() }}>
          <X aria-hidden="true" />
        </button>
        <button className="project-lightbox__arrow project-lightbox__arrow--previous" type="button" aria-label={previousLabel} onClick={(event) => { event.stopPropagation(); onPrevious() }}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <img src={images[activeIndex]} alt={`${projectTitle} — ${activeIndex + 1}`} onClick={(event) => event.stopPropagation()} />
        <button className="project-lightbox__arrow project-lightbox__arrow--next" type="button" aria-label={nextLabel} onClick={(event) => { event.stopPropagation(); onNext() }}>
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <span className="project-lightbox__counter" aria-hidden="true">
        {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </span>
    </div>,
    document.body,
  )
}

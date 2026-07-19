import { ChevronLeft, ChevronRight, X } from 'lucide-react'

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
  return (
    <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={galleryLabel} onClick={onClose}>
      <div className="project-lightbox__viewer">
        <button className="project-lightbox__close" type="button" aria-label={closeLabel} onClick={(event) => { event.stopPropagation(); onClose() }}>
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
    </div>
  )
}

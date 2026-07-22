import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'

type ProjectLightboxProps = {
  activeIndex: number
  closeLabel: string
  galleryLabel: string
  images: readonly string[]
  nextLabel: string
  previousLabel: string
  onClose: () => void
}

export function ProjectLightbox({
  activeIndex,
  closeLabel,
  galleryLabel,
  images,
  nextLabel,
  previousLabel,
  onClose,
}: ProjectLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex)
  const controlsTimerRef = useRef<number | null>(null)
  const positionTimerRef = useRef<number | null>(null)
  const isZoomedRef = useRef(false)
  const swipeRef = useRef<{ pointerId: number; x: number; y: number } | null>(null)
  const slides = useMemo(
    () => images.map((src, index) => ({
      src,
      alt: `${galleryLabel} — ${index + 1}`,
    })),
    [galleryLabel, images],
  )

  const updateControlPositions = useCallback(() => {
    const root = document.querySelector<HTMLElement>('.project-lightbox')
    const image = root?.querySelector<HTMLElement>('.yarl__slide_current .yarl__slide_image')
    if (!root || !image) return

    const rect = image.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const rootRect = root.getBoundingClientRect()
    const inset = 8
    root.style.setProperty('--project-lightbox-image-top', `${rect.top - rootRect.top}px`)
    root.style.setProperty('--project-lightbox-image-right', `${rootRect.right - rect.right}px`)
    root.style.setProperty('--project-lightbox-dots-top', `${rect.bottom - rootRect.top + 12}px`)
    root.style.setProperty('--project-lightbox-dots-left', `${rect.left - rootRect.left + rect.width / 2}px`)
    root.style.setProperty('--project-lightbox-control-top', `${rect.top - rootRect.top + inset}px`)
    root.style.setProperty('--project-lightbox-control-right', `${rootRect.right - rect.right + inset}px`)
    root.style.setProperty('--project-lightbox-control-left', `${rect.left - rootRect.left + inset}px`)
    root.style.setProperty('--project-lightbox-arrow-top', `${rect.top - rootRect.top + rect.height / 2}px`)
  }, [])

  const scheduleControlPositionUpdate = useCallback(() => {
    if (positionTimerRef.current !== null) window.clearTimeout(positionTimerRef.current)
    positionTimerRef.current = window.setTimeout(() => {
      updateControlPositions()
      positionTimerRef.current = null
    }, 440)
  }, [updateControlPositions])

  const hideControlsDuringTransition = useCallback(() => {
    const root = document.querySelector<HTMLElement>('.project-lightbox')
    if (!root) return

    root.classList.add('is-swiping')
    if (controlsTimerRef.current !== null) window.clearTimeout(controlsTimerRef.current)
    controlsTimerRef.current = window.setTimeout(() => {
      root.classList.remove('is-swiping')
      controlsTimerRef.current = null
    }, 440)
  }, [])

  const showControlsAfterSwipe = useCallback(() => {
    const root = document.querySelector<HTMLElement>('.project-lightbox')
    swipeRef.current = null
    if (!root?.classList.contains('is-swiping')) return

    if (controlsTimerRef.current !== null) window.clearTimeout(controlsTimerRef.current)
    controlsTimerRef.current = window.setTimeout(() => {
      root.classList.remove('is-swiping')
      controlsTimerRef.current = null
    }, 440)
  }, [])

  const handleZoom = useCallback(({ zoom }: { zoom: number }) => {
    const root = document.querySelector<HTMLElement>('.project-lightbox')
    if (!root) return

    const isZoomed = zoom > 1.01
    if (isZoomed === isZoomedRef.current) return

    isZoomedRef.current = isZoomed
    root.classList.toggle('is-zoomed', isZoomed)

    if (isZoomed && controlsTimerRef.current !== null) {
      window.clearTimeout(controlsTimerRef.current)
      controlsTimerRef.current = null
    }

    if (!isZoomed) scheduleControlPositionUpdate()
  }, [scheduleControlPositionUpdate])

  const handleView = useCallback(({ index }: { index: number }) => {
    setCurrentIndex(index)
    scheduleControlPositionUpdate()
  }, [scheduleControlPositionUpdate])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const target = event.target
    if (target instanceof Element && target.closest('.yarl__button')) return

    swipeRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    }
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const swipe = swipeRef.current
    if (!swipe || swipe.pointerId !== event.pointerId) return

    const deltaX = Math.abs(event.clientX - swipe.x)
    const deltaY = Math.abs(event.clientY - swipe.y)
    if (deltaX > 6 && deltaX > deltaY) {
      document.querySelector('.project-lightbox')?.classList.add('is-swiping')
    }
  }

  const handleControlsClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target
    if (target instanceof Element && target.closest('.yarl__navigation_prev, .yarl__navigation_next')) {
      hideControlsDuringTransition()
    }
  }

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    const handleImageLoad = (event: Event) => {
      const target = event.target
      if (target instanceof HTMLImageElement && target.closest('.project-lightbox')) {
        const root = document.querySelector<HTMLElement>('.project-lightbox')
        if (root?.style.getPropertyValue('--project-lightbox-control-top')) scheduleControlPositionUpdate()
        else updateControlPositions()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('resize', updateControlPositions)
    document.addEventListener('load', handleImageLoad, true)

    return () => {
      if (controlsTimerRef.current !== null) window.clearTimeout(controlsTimerRef.current)
      if (positionTimerRef.current !== null) window.clearTimeout(positionTimerRef.current)
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('resize', updateControlPositions)
      document.removeEventListener('load', handleImageLoad, true)
    }
  }, [scheduleControlPositionUpdate, updateControlPositions])

  return (
    <Lightbox
      open
      close={onClose}
      index={activeIndex}
      slides={slides}
      plugins={[Counter, Zoom]}
      className="project-lightbox"
      animation={{ fade: 220, swipe: 420, navigation: 360 }}
      carousel={{
        padding: 16,
        spacing: '12%',
        imageFit: 'contain',
      }}
      controller={{ closeOnBackdropClick: true }}
      counter={{ separator: ' / ' }}
      labels={{
        Close: closeLabel,
        Lightbox: galleryLabel,
        Next: nextLabel,
        'Photo gallery': galleryLabel,
        Previous: previousLabel,
      }}
      noScroll={{ disabled: true }}
      on={{ entered: updateControlPositions, view: handleView, zoom: handleZoom }}
      portal={{
        container: {
          onClickCapture: handleControlsClick,
          onPointerCancel: showControlsAfterSwipe,
          onPointerDown: handlePointerDown,
          onPointerMove: handlePointerMove,
          onPointerUp: showControlsAfterSwipe,
        },
      }}
      render={{
        buttonZoom: () => null,
        controls: () => (
          <div className="project-lightbox__dots" aria-hidden="true">
            {images.map((image, index) => (
              <span
                className={index === currentIndex ? 'is-active' : undefined}
                key={`${image}-${index}`}
              />
            ))}
          </div>
        ),
      }}
      zoom={{ maxZoomPixelRatio: 2, pinchZoomV4: true }}
    />
  )
}

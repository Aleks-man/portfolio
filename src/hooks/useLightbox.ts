import { useCallback, useState } from 'react'

export function useLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const open = useCallback((index: number) => setActiveIndex(index), [])

  return { activeIndex, close, open }
}

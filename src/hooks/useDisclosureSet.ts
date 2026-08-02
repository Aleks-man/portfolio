import { useState } from 'react'

export function useDisclosureSet() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set())

  const toggleItem = (index: number) => {
    setOpenItems((currentItems) => {
      const nextItems = new Set(currentItems)
      if (nextItems.has(index)) nextItems.delete(index)
      else nextItems.add(index)
      return nextItems
    })
  }

  return {
    isOpen: (index: number) => openItems.has(index),
    toggleItem,
  }
}

import { useEffect } from 'react'

export function useDocumentMetadata(title?: string, description?: string) {
  useEffect(() => {
    if (!title) return

    const descriptionElement = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousTitle = document.title
    const previousDescription = descriptionElement?.content

    document.title = title
    if (descriptionElement && description) descriptionElement.content = description

    return () => {
      document.title = previousTitle
      if (descriptionElement && previousDescription) descriptionElement.content = previousDescription
    }
  }, [description, title])
}

import { useEffect } from 'react'

type OpenGraphType = 'article' | 'website'

export function useDocumentMetadata(
  title?: string,
  description?: string,
  openGraphType: OpenGraphType = 'website',
) {
  useEffect(() => {
    if (!title) return

    const previousTitle = document.title
    const metadata = [
      { selector: 'meta[name="description"]', content: description },
      { selector: 'meta[property="og:title"]', content: title },
      { selector: 'meta[property="og:description"]', content: description },
      { selector: 'meta[property="og:type"]', content: openGraphType },
      { selector: 'meta[name="twitter:title"]', content: title },
      { selector: 'meta[name="twitter:description"]', content: description },
    ].map(({ selector, content }) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      const previousContent = element?.content

      if (element && content) element.content = content

      return { element, previousContent }
    })

    document.title = title

    return () => {
      document.title = previousTitle
      metadata.forEach(({ element, previousContent }) => {
        if (element && previousContent !== undefined) element.content = previousContent
      })
    }
  }, [description, openGraphType, title])
}

import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.history.replaceState({}, '', '/')
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    vi.mocked(window.scrollTo).mockClear()
    document.head.innerHTML = `
      <title>Manuylov Studio</title>
      <meta name="description" content="Default description" />
      <meta property="og:title" content="Manuylov Studio" />
      <meta property="og:description" content="Default description" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Manuylov Studio" />
      <meta name="twitter:description" content="Default description" />
    `
  })

  it('renders Russian by default', async () => {
    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'Создаю веб-продукты, которые работают на ваш бизнес.',
    })).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('lang', 'ru')
  })

  it('renders the English version at its own URL', async () => {
    window.history.replaceState({}, '', '/en')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'I build web products that work for your business.',
    })).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('lang', 'en')
  })

  it('navigates to the localized URL when the language changes', async () => {
    render(<App />)

    fireEvent.click(await screen.findByRole('button', { name: 'EN' }))

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'I build web products that work for your business.',
    })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/en')
  })

  it('renders the not-found page for an unknown route', async () => {
    window.history.replaceState({}, '', '/missing-page')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'Страница не найдена',
    })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Вернуться на главную' })).toHaveAttribute('href', '/')
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
  })

  it('uses article metadata for a project page', async () => {
    window.history.replaceState({}, '', '/projects/gentlemans-room')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: "Gentleman's Room",
    })).toBeInTheDocument()
    expect(document.title).toBe("Gentleman's Room — Manuylov Studio")
    expect(document.querySelector('meta[property="og:type"]')).toHaveAttribute('content', 'article')
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      "Gentleman's Room — Manuylov Studio",
    )
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://manuylov.com/projects/gentlemans-room/',
    )
    expect(document.querySelector('link[hreflang="en"]')).toHaveAttribute(
      'href',
      'https://manuylov.com/en/projects/gentlemans-room/',
    )
  })

  it('describes the provider and service area on the services page', async () => {
    window.history.replaceState({}, '', '/services')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'Разработка веб-продукта, от идеи до запуска.',
    })).toBeInTheDocument()

    const structuredData = document.querySelector<HTMLScriptElement>('#seo-structured-data')
    const schema = JSON.parse(structuredData?.textContent || '{}')
    const service = schema['@graph']?.find((item: { '@type': string }) => item['@type'] === 'Service')
    const person = schema['@graph']?.find((item: { '@type': string }) => item['@type'] === 'Person')

    expect(service).toMatchObject({
      name: 'Разработка и поддержка сайтов',
      provider: { '@id': 'https://manuylov.com/#person' },
      areaServed: expect.arrayContaining([
        expect.objectContaining({ '@type': 'City', name: 'Симферополь' }),
        expect.objectContaining({ '@type': 'Country', name: 'Россия' }),
      ]),
    })
    expect(person).toMatchObject({
      telephone: '+79780110617',
      workLocation: {
        address: {
          addressLocality: 'Симферополь',
          addressCountry: 'RU',
        },
      },
    })
  })

  it('keeps the lightbox open when showing the next image', async () => {
    window.history.replaceState({}, '', '/en/projects/gentlemans-room')

    render(<App />)

    fireEvent.click(await screen.findByRole('button', {
      name: "Open image: Gentleman's Room, 1",
    }))

    const dialog = await screen.findByRole('dialog', { name: 'Project screens' })
    const firstImage = within(dialog).getByRole('img', { name: /Project screens.*1/ })
    expect(firstImage).toHaveAttribute('src', '/projects/barbershop/booking.jpg')

    fireEvent.click(screen.getByRole('button', { name: 'Next image' }))

    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByRole('img', { name: /Project screens.*2/ })).toHaveAttribute(
      'src',
      '/projects/barbershop/admin-dashboard.jpg',
    )
  })

  it('shows a back-to-top button after scrolling', async () => {
    render(<App />)

    expect(screen.queryByRole('button', { name: 'Наверх' })).not.toBeInTheDocument()

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 600 })
    fireEvent.scroll(window)
    fireEvent.click(await screen.findByRole('button', { name: 'Наверх' }))

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('closes the mobile menu on a pointer press outside it', async () => {
    render(<App />)

    const menuButton = await screen.findByRole('button', { name: 'Открыть меню' })
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.pointerDown(document.body)

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})

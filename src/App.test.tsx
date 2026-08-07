import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { metrikaGoals, yandexMetrikaCounterId } from './analytics/yandexMetrika'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.history.replaceState({}, '', '/')
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    vi.mocked(window.scrollTo).mockClear()
    window.ym = undefined
    window.__yandexMetrikaInitialized = false
    window.__yandexMetrikaLastUrl = undefined
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

  it('reports a Telegram contact goal to Yandex Metrika', async () => {
    const ym = vi.fn()
    window.ym = ym
    window.history.replaceState({}, '', '/en')

    render(<App />)

    fireEvent.click(await screen.findByRole('link', { name: 'Discuss a project' }))

    expect(ym).toHaveBeenCalledWith(
      yandexMetrikaCounterId,
      'reachGoal',
      metrikaGoals.telegram,
    )
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
    await waitFor(() => {
      expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
    })
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

  it('copies a project link instead of opening native sharing on desktop', async () => {
    const share = vi.fn()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'share', { configurable: true, value: share })
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    window.history.replaceState({}, '', '/en/projects/gentlemans-room')

    render(<App />)

    fireEvent.click(await screen.findByRole('button', { name: 'Share project' }))

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith(expect.stringMatching(/\/en\/projects\/gentlemans-room$/))
    })
    expect(share).not.toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Link copied' })).toBeInTheDocument()
  })

  it('copies demo login and password separately', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    window.history.replaceState({}, '', '/projects/gentlemans-room')

    render(<App />)

    fireEvent.click(await screen.findByRole('button', { name: 'Скопировать логин' }))

    await waitFor(() => {
      expect(writeText).toHaveBeenLastCalledWith('admin')
    })
    expect(screen.getByRole('button', { name: 'Скопировано' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Скопировать пароль' }))

    await waitFor(() => {
      expect(writeText).toHaveBeenLastCalledWith('admin123')
    })
    expect(writeText).toHaveBeenCalledTimes(2)
    expect(screen.getByRole('button', { name: 'Скопировано' })).toBeInTheDocument()
  })

  it('updates project metadata after client-side navigation', async () => {
    window.history.replaceState({}, '', '/en/projects/gentlemans-room')

    render(<App />)

    fireEvent.click(await screen.findByRole('link', { name: /Next project.*ProjectFlow/i }))

    expect(await screen.findByRole('heading', { level: 1, name: 'ProjectFlow' })).toBeInTheDocument()
    expect(document.title).toBe('ProjectFlow — Manuylov Studio')
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://manuylov.com/en/projects/projectflow/',
    )
  })

  it('describes the provider and service area on the services page', async () => {
    window.history.replaceState({}, '', '/services')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'Разработка веб-продукта, от идеи до запуска.',
    })).toBeInTheDocument()

    await waitFor(() => {
      const structuredData = document.querySelector<HTMLScriptElement>('#seo-structured-data')
      const schema = JSON.parse(structuredData?.textContent || '{}')
      const service = schema['@graph']?.find((item: { '@type': string }) => item['@type'] === 'Service')
      const person = schema['@graph']?.find((item: { '@type': string }) => item['@type'] === 'Person')

      expect(service).toMatchObject({
        name: 'Разработка и поддержка сайтов',
        provider: { '@id': 'https://manuylov.com/#person' },
        areaServed: expect.arrayContaining([
          expect.objectContaining({ '@type': 'City', name: 'Симферополь' }),
          expect.objectContaining({ '@type': 'City', name: 'Севастополь' }),
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
  })

  it('keeps the lightbox open when showing the next image', async () => {
    window.history.replaceState({}, '', '/en/projects/gentlemans-room')

    render(<App />)

    fireEvent.click(await screen.findByRole('button', {
      name: "Open image: Gentleman's Room, Project cover",
    }))

    const dialog = await screen.findByRole('dialog', { name: 'Project screens' })
    const firstImage = within(dialog).getByRole('img', { name: /Project screens.*1/ })
    expect(firstImage).toHaveAttribute('src', '/projects/barbershop/cover.jpg')

    fireEvent.click(screen.getByRole('button', { name: 'Next image' }))

    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByRole('img', { name: /Project screens.*2/ })).toHaveAttribute(
      'src',
      '/projects/barbershop/booking.jpg',
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

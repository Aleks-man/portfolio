import { fireEvent, render, screen } from '@testing-library/react'
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

  it('restores the saved English language', async () => {
    window.localStorage.setItem('portfolio-language', 'en')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'I build web products that work for your business.',
    })).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('lang', 'en')
  })

  it('persists a language selected by the user', async () => {
    render(<App />)

    fireEvent.click(await screen.findByRole('button', { name: 'EN' }))

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'I build web products that work for your business.',
    })).toBeInTheDocument()
    expect(window.localStorage.getItem('portfolio-language')).toBe('en')
  })

  it('renders the not-found page for an unknown route', async () => {
    window.history.replaceState({}, '', '/missing-page')

    render(<App />)

    expect(await screen.findByRole('heading', {
      level: 1,
      name: 'Страница не найдена',
    })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Вернуться на главную' })).toHaveAttribute('href', '/')
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

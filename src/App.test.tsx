import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.history.replaceState({}, '', '/')
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
})

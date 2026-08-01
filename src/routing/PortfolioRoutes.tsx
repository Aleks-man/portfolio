import type { ComponentType } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import type { Language, PortfolioContent } from '../content/portfolio'

type PortfolioPageProps = {
  portfolio: PortfolioContent
  preloadProjectDetailPage?: () => void
}

type NotFoundPageProps = PortfolioPageProps & {
  language: Language
}

export type PortfolioRouteComponents = {
  about: ComponentType<PortfolioPageProps>
  home: ComponentType<PortfolioPageProps>
  notFound: ComponentType<NotFoundPageProps>
  projectDetail: ComponentType<PortfolioPageProps>
  projects: ComponentType<PortfolioPageProps>
  services: ComponentType<PortfolioPageProps>
}

type PortfolioRoutesProps = {
  components: PortfolioRouteComponents
  language: Language
  portfolio: PortfolioContent
  preloadProjectDetailPage?: () => void
}

const pageRoutes = [
  { component: 'home', paths: ['/', '/en'] },
  { component: 'projects', paths: ['/projects', '/en/projects'] },
  { component: 'projectDetail', paths: ['/projects/:slug', '/en/projects/:slug'] },
  { component: 'services', paths: ['/services', '/en/services'] },
  { component: 'about', paths: ['/about', '/en/about'] },
] as const satisfies ReadonlyArray<{
  component: keyof PortfolioRouteComponents
  paths: readonly string[]
}>

const redirects = [
  { from: '/home', to: '/' },
  { from: '/en/home', to: '/en' },
] as const

export function PortfolioRoutes({
  components,
  language,
  portfolio,
  preloadProjectDetailPage,
}: PortfolioRoutesProps) {
  const NotFoundPage = components.notFound

  return (
    <Routes>
      {pageRoutes.flatMap(({ component, paths }) => {
        const Page = components[component]

        return paths.map((path) => (
          <Route
            key={path}
            path={path}
            element={(
              <Page
                portfolio={portfolio}
                preloadProjectDetailPage={preloadProjectDetailPage}
              />
            )}
          />
        ))
      })}
      {redirects.map(({ from, to }) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route
        path="*"
        element={<NotFoundPage language={language} portfolio={portfolio} />}
      />
    </Routes>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './index.css'
import './styles/base.css'
import './styles/typography.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/responsive.css'
import './styles/navigation.css'
import './styles/projects-page.css'
import './styles/services-page.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { BarChart3, Check, Database, Globe2, Smartphone } from 'lucide-react'
import type { PortfolioContent } from '../../content/portfolio'

type HeroVisualProps = {
  visual: PortfolioContent['hero']['visual']
}

export function HeroVisual({ visual }: HeroVisualProps) {
  return (
    <div className="product-visual" role="img" aria-label={visual.ariaLabel}>
      <div className="product-visual__glow" aria-hidden="true" />

      <div className="dashboard-card">
        <div className="dashboard-card__bar">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span>{visual.workspace}</span>
          <Globe2 size={15} aria-hidden="true" />
        </div>
        <div className="dashboard-card__body">
          <aside className="dashboard-sidebar" aria-hidden="true">
            <span className="is-active" />
            <span /><span /><span />
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-heading">
              <div>
                <small>{visual.dashboardKicker}</small>
                <strong>{visual.dashboardTitle}</strong>
              </div>
              <span className="status-pill"><Check size={12} />{visual.status}</span>
            </div>
            <div className="metric-grid">
              <div className="metric-card metric-card--accent">
                <span>{visual.metricLabel}</span>
                <strong>{visual.metricValue}</strong>
                <div className="mini-chart" aria-hidden="true">
                  <i /><i /><i /><i /><i /><i />
                </div>
              </div>
              <div className="metric-card">
                <BarChart3 size={18} aria-hidden="true" />
                <span>{visual.ordersLabel}</span>
                <strong>{visual.ordersValue}</strong>
              </div>
            </div>
            <div className="dashboard-table" aria-hidden="true">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-card" aria-hidden="true">
        <div className="mobile-card__notch" />
        <Smartphone size={18} />
        <span>{visual.mobileLabel}</span>
        <strong>{visual.mobileValue}</strong>
        <div className="mobile-card__button" />
      </div>

      <div className="api-card" aria-hidden="true">
        <Database size={18} />
        <div><span>{visual.apiLabel}</span><strong>{visual.apiValue}</strong></div>
        <i />
      </div>
    </div>
  )
}

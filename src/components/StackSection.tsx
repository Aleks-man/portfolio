import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { PortfolioContent } from '../content/portfolio'
import { stackIcons, stackItemColors, stackItemIcons } from './stack/stackIcons'
import '../styles/stack-section.css'

type StackSectionProps = {
  stack: PortfolioContent['stack']
}

export function StackSection({ stack }: StackSectionProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!sectionRef.current?.contains(event.target as Node)) {
        setActiveTooltip(null)
        return
      }

      if (!(event.target as Element).closest('.stack-tag, .stack-card__head')) {
        setActiveTooltip(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveTooltip(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function positionTooltip(button: HTMLButtonElement) {
    const buttonRect = button.getBoundingClientRect()
    const tooltipWidth = Math.min(260, window.innerWidth - 48)
    const tooltipCenter = buttonRect.left + buttonRect.width / 2
    const viewportInset = 14
    const leftEdge = tooltipCenter - tooltipWidth / 2
    const rightEdge = tooltipCenter + tooltipWidth / 2
    const shift = leftEdge < viewportInset
      ? viewportInset - leftEdge
      : rightEdge > window.innerWidth - viewportInset
        ? window.innerWidth - viewportInset - rightEdge
        : 0

    button.style.setProperty('--stack-tooltip-shift', `${shift}px`)
  }

  function toggleTooltip(tooltipId: string, event: MouseEvent<HTMLButtonElement>) {
    positionTooltip(event.currentTarget)
    setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId)
  }

  return (
    <section className="section" id="stack" ref={sectionRef}>
      <div className="section__header">
        <p className="section__kicker">{stack.kicker}</p>
        <h2>{stack.title}</h2>
      </div>
      <div className="stack-grid">
        {stack.groups.map((group) => {
          const Icon = stackIcons[group.id]
          const groupTooltipId = `stack-group-tooltip-${group.id}`
          const isGroupActive = activeTooltip === groupTooltipId

          return (
            <article className="stack-card" key={group.id}>
              <button
                className={`stack-card__head${isGroupActive ? ' is-active' : ''}`}
                type="button"
                aria-describedby={groupTooltipId}
                aria-expanded={isGroupActive}
                onMouseEnter={(event) => positionTooltip(event.currentTarget)}
                onClick={(event) => toggleTooltip(groupTooltipId, event)}
              >
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title}</h3>
                <span className="stack-tooltip stack-tooltip--group" id={groupTooltipId} role="tooltip">
                  <strong>{group.title}</strong>
                  <span>{stack.groupDescriptions[group.id]}</span>
                </span>
              </button>
              <div className="tags">
                {group.items.map((item) => {
                  const ItemIcon = stackItemIcons[item]
                  const itemClassName = item.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')
                  const tooltipId = `stack-tooltip-${itemClassName}`
                  const isActive = activeTooltip === tooltipId

                  return (
                    <button
                      className={`stack-tag${isActive ? ' is-active' : ''}`}
                      type="button"
                      key={item}
                      aria-describedby={tooltipId}
                      aria-expanded={isActive}
                      onMouseEnter={(event) => positionTooltip(event.currentTarget)}
                      onClick={(event) => toggleTooltip(tooltipId, event)}
                    >
                      <ItemIcon
                        className={`stack-tag__icon stack-tag__icon--${itemClassName}`}
                        size={15}
                        style={{ color: stackItemColors[item] }}
                        aria-hidden="true"
                      />
                      {item}
                      <span className="stack-tooltip" id={tooltipId} role="tooltip">
                        {stack.descriptions[item]}
                      </span>
                    </button>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

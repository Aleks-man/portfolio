import { useEffect, useRef, useState } from 'react'
import type { AriaAttributes, ComponentType, CSSProperties, MouseEvent } from 'react'
import {
  BookOpen,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  KeyRound,
  MonitorSmartphone,
  Plug,
  Server,
  Sparkles,
  TerminalSquare,
  TestTube2,
} from 'lucide-react'
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiVite,
} from 'react-icons/si'
import type { PortfolioContent, StackIconId } from '../content/portfolio'

type StackSectionProps = {
  stack: PortfolioContent['stack']
}

type StackItem = PortfolioContent['stack']['groups'][number]['items'][number]
type StackItemIconProps = {
  size?: number
  className?: string
  style?: CSSProperties
  'aria-hidden'?: AriaAttributes['aria-hidden']
}
type StackItemIcon = ComponentType<StackItemIconProps>

type TechnologyBadgeIconProps = StackItemIconProps & {
  label: string
  textColor: string
}

function TechnologyBadgeIcon({
  className,
  label,
  size = 15,
  style,
  textColor,
  'aria-hidden': ariaHidden,
}: TechnologyBadgeIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <rect width="24" height="24" rx="2.5" fill="currentColor" />
      <text
        x="12"
        y="12.75"
        fill={textColor}
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="900"
        letterSpacing="-0.65"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {label}
      </text>
    </svg>
  )
}

function JavaScriptIcon(props: StackItemIconProps) {
  return <TechnologyBadgeIcon {...props} label="JS" textColor="#111827" />
}

function TypeScriptIcon(props: StackItemIconProps) {
  return <TechnologyBadgeIcon {...props} label="TS" textColor="#ffffff" />
}

const stackIcons = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: Database,
  workflow: TerminalSquare,
} satisfies Record<StackIconId, typeof MonitorSmartphone>

const stackItemIcons = {
  React: SiReact,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  'Redux Toolkit': SiRedux,
  Vite: SiVite,
  'Responsive UI': MonitorSmartphone,
  Animation: Sparkles,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'REST API': Braces,
  'Auth flows': KeyRound,
  Integrations: Plug,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  'Schema design': Database,
  Queries: Code2,
  Git: SiGit,
  Figma: SiFigma,
  Deploy: GitBranch,
  'Clean code': FileCode2,
  'Testing mindset': TestTube2,
  Docs: BookOpen,
} satisfies Record<StackItem, StackItemIcon>

const stackItemColors: Partial<Record<StackItem, string>> = {
  React: '#61dafb',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  'Redux Toolkit': '#764abc',
  Vite: '#646cff',
  'Node.js': '#5fa04e',
  Express: '#111827',
  PostgreSQL: '#4169e1',
  MongoDB: '#47a248',
  Prisma: '#2d3748',
  Git: '#f05032',
  Figma: '#f24e1e',
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

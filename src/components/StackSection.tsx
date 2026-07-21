import type { AriaAttributes, ComponentType, CSSProperties } from 'react'
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
  return (
    <section className="section" id="stack">
      <div className="section__header">
        <p className="section__kicker">{stack.kicker}</p>
        <h2>{stack.title}</h2>
      </div>
      <div className="stack-grid">
        {stack.groups.map((group) => {
          const Icon = stackIcons[group.id]

          return (
            <article className="stack-card" key={group.id}>
              <div className="stack-card__head">
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title}</h3>
              </div>
              <div className="tags">
                {group.items.map((item) => {
                  const ItemIcon = stackItemIcons[item]
                  const itemClassName = item.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')

                  return (
                    <span className="stack-tag" key={item}>
                      <ItemIcon
                        className={`stack-tag__icon stack-tag__icon--${itemClassName}`}
                        size={15}
                        style={{ color: stackItemColors[item] }}
                        aria-hidden="true"
                      />
                      {item}
                    </span>
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

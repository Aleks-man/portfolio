import type { ComponentType, CSSProperties } from 'react'
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
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import type { PortfolioContent, StackIconId } from '../content/portfolio'

type StackSectionProps = {
  stack: PortfolioContent['stack']
}

type StackItem = PortfolioContent['stack']['groups'][number]['items'][number]
type StackItemIcon = ComponentType<{
  size?: number
  className?: string
  style?: CSSProperties
  'aria-hidden'?: boolean
}>

const stackIcons = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: Database,
  workflow: TerminalSquare,
} satisfies Record<StackIconId, typeof MonitorSmartphone>

const stackItemIcons = {
  React: SiReact,
  TypeScript: SiTypescript,
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
  Deploy: GitBranch,
  'Clean code': FileCode2,
  'Testing mindset': TestTube2,
  Docs: BookOpen,
} satisfies Record<StackItem, StackItemIcon>

const stackItemColors: Partial<Record<StackItem, string>> = {
  React: '#61dafb',
  TypeScript: '#3178c6',
  Vite: '#646cff',
  'Node.js': '#5fa04e',
  Express: '#111827',
  PostgreSQL: '#4169e1',
  MongoDB: '#47a248',
  Prisma: '#2d3748',
  Git: '#f05032',
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

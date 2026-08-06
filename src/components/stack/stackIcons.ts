import type { ComponentType } from 'react'
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
import type { PortfolioContent, StackIconId } from '../../content/portfolio'
import {
  JavaScriptIcon,
  TypeScriptIcon,
  type StackItemIconProps,
} from './TechnologyBadgeIcons'

type StackItem = PortfolioContent['stack']['groups'][number]['items'][number]
type StackItemIcon = ComponentType<StackItemIconProps>

export const stackIcons = {
  frontend: MonitorSmartphone,
  backend: Server,
  data: Database,
  workflow: TerminalSquare,
} satisfies Record<StackIconId, typeof MonitorSmartphone>

export const stackItemIcons = {
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

export const stackItemColors: Partial<Record<StackItem, string>> = {
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

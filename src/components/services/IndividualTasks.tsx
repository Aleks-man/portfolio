import { ArrowUpRight } from 'lucide-react'
import type { PortfolioContent } from '../../content/portfolio'
import { metrikaGoals, reachMetrikaGoal } from '../../analytics/yandexMetrika'

type IndividualTasksProps = {
  tasks: PortfolioContent['servicesPage']['individualTasks']
  telegramHref: string
}

export function IndividualTasks({ tasks, telegramHref }: IndividualTasksProps) {
  return (
    <section className="individual-tasks" aria-labelledby="individual-tasks-title">
      <header className="individual-tasks__heading">
        <p className="section__kicker">{tasks.kicker}</p>
        <h2 id="individual-tasks-title">{tasks.title}</h2>
      </header>
      <ul className="individual-tasks__list">
        {tasks.items.map((task) => {
          const url = new URL(telegramHref)
          url.searchParams.set('text', tasks.message.replace('{task}', task))
          return (
            <li key={task}>
              <a
                href={url.href}
                target="_blank"
                rel="noreferrer"
                aria-label={tasks.actionLabel + ': ' + task}
                onClick={() => reachMetrikaGoal(metrikaGoals.telegram)}
              >
                <span>{task}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
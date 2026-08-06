import { useEffect, useRef, useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'

type CopyField = 'login' | 'password'

type DemoAccessProps = {
  access: {
    href: string
    login: string
    password: string
  }
  labels: {
    title: string
    open: string
    login: string
    password: string
    copyLogin: string
    copyPassword: string
    copied: string
  }
}

export function DemoAccess({ access, labels }: DemoAccessProps) {
  const [copiedField, setCopiedField] = useState<CopyField | null>(null)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current)
  }, [])

  const copyValue = async (field: CopyField, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(field)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopiedField(null), 1800)
    } catch {
      setCopiedField(null)
    }
  }

  const credential = (field: CopyField, label: string, value: string, copyLabel: string) => {
    const copied = copiedField === field

    return (
      <div>
        <dt>{label}</dt>
        <dd>
          <span>{value}</span>
          <button
            type="button"
            aria-label={copied ? labels.copied : copyLabel}
            title={copied ? labels.copied : copyLabel}
            onClick={() => copyValue(field, value)}
          >
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </button>
        </dd>
      </div>
    )
  }

  return (
    <aside className="project-detail__demo-access">
      <div className="project-detail__demo-access-head">
        <span>{labels.title}</span>
        <a href={access.href} target="_blank" rel="noreferrer">
          {labels.open}<ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
      <dl>
        {credential('login', labels.login, access.login, labels.copyLogin)}
        {credential('password', labels.password, access.password, labels.copyPassword)}
      </dl>
    </aside>
  )
}

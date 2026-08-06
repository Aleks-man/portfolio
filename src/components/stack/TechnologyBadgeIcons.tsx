import type { AriaAttributes, CSSProperties } from 'react'

export type StackItemIconProps = {
  size?: number
  className?: string
  style?: CSSProperties
  'aria-hidden'?: AriaAttributes['aria-hidden']
}

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

export function JavaScriptIcon(props: StackItemIconProps) {
  return <TechnologyBadgeIcon {...props} label="JS" textColor="#111827" />
}

export function TypeScriptIcon(props: StackItemIconProps) {
  return <TechnologyBadgeIcon {...props} label="TS" textColor="#ffffff" />
}

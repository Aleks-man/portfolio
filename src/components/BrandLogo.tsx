type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      className={className}
      width="340"
      height="96"
      viewBox="0 0 340 96"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(12 16) scale(0.8)">
          <rect width="80" height="80" rx="22" fill="#151817" />
          <path d="M16 62V20h12l12 19v20L28 40v22H16Z" fill="#F1EFE8" />
          <path d="M40 39l12-19h12v42H52V40L40 59V39Z" fill="#0F766E" />
          <rect x="60" y="14" width="8" height="8" rx="2" fill="#E45F52" />
        </g>
        <g fill="#151817">
          <text x="92" y="42" fontFamily="Satoshi, Segoe UI, sans-serif" fontSize="27" fontWeight="900" letterSpacing="-1.15">
            MANUYLOV
          </text>
          <text x="92" y="70" fill="#0F766E" fontFamily="Satoshi, Segoe UI, sans-serif" fontSize="18" fontWeight="500" letterSpacing="-0.15">
            WEB &amp; APP DEVELOPMENT
          </text>
        </g>
      </g>
    </svg>
  )
}

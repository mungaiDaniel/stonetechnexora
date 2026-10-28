import { brand } from '../content.js'

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${brand.name} home`}>
      <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
        <rect x="4" y="21" width="24" height="6" rx="2" fill="var(--teal)" />
        <rect x="7" y="13" width="18" height="6" rx="2" fill="var(--pink)" />
        <path d="M16 1.5l1.8 4.6 4.7 1.4-4.7 1.4L16 13.5l-1.8-4.6-4.7-1.4 4.7-1.4z" fill="var(--gold)" />
      </svg>
      <span>Stone<b>Tech</b> Nexora</span>
    </a>
  )
}

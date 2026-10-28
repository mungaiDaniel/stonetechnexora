import { useState } from 'react'
import Logo from './Logo.jsx'
import { nav } from '../content.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header" id="top">
      <div className="wrap header__inner">
        <Logo />
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#book" className="btn btn--small" onClick={() => setOpen(false)}>
            Book a call
          </a>
        </nav>
      </div>
    </header>
  )
}

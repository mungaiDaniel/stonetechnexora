import Logo from './Logo.jsx'
import { brand, nav, services } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>{brand.tagline}</p>
          <p className="footer__muted">{brand.location}</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.slice(0, 4).map((s) => (
              <li key={s.title}><a href="#services">{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
            <li><a href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}>{brand.phone}</a></li>
            <li><a href={brand.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <p><a href="#">Privacy policy</a> <a href="#">Terms</a></p>
      </div>
    </footer>
  )
}

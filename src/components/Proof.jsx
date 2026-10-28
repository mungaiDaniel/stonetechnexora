import { clientLogos, testimonials } from '../content.js'

export default function Proof() {
  return (
    <section className="section proof">
      <div className="wrap">
        <h2 className="section__title">What clients say</h2>

        <ul className="logos" aria-label="Clients">
          {clientLogos.map((logo, i) => (
            <li key={i} className={logo.endsWith('.png') || logo.endsWith('.svg') ? '' : 'is-placeholder'}>
              {logo.endsWith('.png') || logo.endsWith('.svg') ? <img src={logo} alt="" /> : logo}
            </li>
          ))}
        </ul>

        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure key={i} className={`quote ${t.placeholder ? 'is-placeholder' : ''}`}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="cta">
          <h2>See where your business sits on the Nexora Path.</h2>
          <a href="#book" className="btn">Book my roadmap call</a>
        </div>
      </div>
    </section>
  )
}

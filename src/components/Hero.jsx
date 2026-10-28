import BookingForm from './BookingForm.jsx'
import { hero, phases } from '../content.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1>{hero.title}</h1>
          <p className="hero__lede">{hero.body}</p>
          <ul className="ticks">
            {hero.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <BookingForm />
      </div>

      {/* The signature visual: three strata of the Nexora Path, topped by a star. */}
      <div className="strata" aria-hidden="true">
        <svg className="strata__star" viewBox="0 0 100 100">
          <path d="M50 0l7 36 43 14-43 14-7 36-7-36L0 50l43-14z" />
        </svg>
        {[...phases].reverse().map((p, i) => (
          <div key={p.key} className={`strata__layer strata__layer--${p.key}`} style={{ '--i': i }}>
            <span>{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

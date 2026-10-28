import { services, platforms } from '../content.js'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section__head">
          <h2 className="section__title">What we do</h2>
          <p className="section__intro">
            From first assessment to years after go-live, one team owns the whole journey.
          </p>
        </div>
        <dl className="services__list">
          {services.map((s) => (
            <div key={s.title}>
              <dt>{s.title}</dt>
              <dd>{s.body}</dd>
            </div>
          ))}
        </dl>
        <p className="platforms">
          <span>Platforms we work with</span>
          {platforms.map((p) => (
            <b key={p}>{p}</b>
          ))}
        </p>
      </div>
    </section>
  )
}

import { phases, takeaways } from '../content.js'

export default function Roadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="wrap">
        <div className="section__head">
          <h2 className="section__title">The Nexora Path</h2>
          <p className="section__intro">
            Every business we work with sits somewhere on three layers. Knowing yours tells you what to fix first,
            and what can wait.
          </p>
        </div>

        <div className="layers">
          {phases.map((p, i) => (
            <article key={p.key} className="layer" style={{ '--c': p.color }}>
              <div className="layer__name">
                <span className="layer__step">Phase {i + 1}</span>
                <h3>{p.name}</h3>
              </div>
              <div className="layer__body">
                <p className="layer__headline">{p.headline}</p>
                <p>{p.body}</p>
              </div>
              <div className="layer__signs">
                <p className="layer__signs-label">You’re here if</p>
                <ul>
                  {p.signs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="takeaways">
          <h3>On your call, you’ll get</h3>
          <ul>
            {takeaways.map((t) => (
              <li key={t.title}>
                <strong>{t.title}</strong>
                <span>{t.body}</span>
              </li>
            ))}
          </ul>
          <a href="#book" className="btn">Find my phase</a>
        </div>
      </div>
    </section>
  )
}

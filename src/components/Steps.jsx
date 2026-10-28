import { steps } from '../content.js'

export default function Steps() {
  return (
    <section className="section steps">
      <div className="wrap">
        <h2 className="section__title">How the call works</h2>
        <ol className="steps__list">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="steps__num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { brand, reasons } from '../content.js'

export default function Why() {
  return (
    <section className="section why" id="why">
      <div className="wrap why__grid">
        <div>
          <h2 className="section__title">Why {brand.name}</h2>
          <p className="why__big">Built for businesses that have outgrown their systems, not their ambition.</p>
        </div>
        <ul className="why__list">
          {reasons.map((r) => (
            <li key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

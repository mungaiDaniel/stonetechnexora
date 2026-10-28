import { industries } from '../content.js'

export default function Industries() {
  return (
    <section className="section industries" id="industries">
      <div className="wrap">
        <h2 className="section__title">Who we serve</h2>
        <ul className="industries__list">
          {industries.map((ind) => (
            <li key={ind.name}>
              <h3>{ind.name}</h3>
              <p>{ind.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

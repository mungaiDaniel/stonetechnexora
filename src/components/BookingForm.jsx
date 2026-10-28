import { useState } from 'react'
import { FORM_ENDPOINT, phases } from '../content.js'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  size: '',
  phase: '',
  message: '',
}

function validate(v) {
  const e = {}
  if (!v.firstName.trim()) e.firstName = 'Enter your first name.'
  if (!v.lastName.trim()) e.lastName = 'Enter your last name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid work email, like you@company.com.'
  if (!v.company.trim()) e.company = 'Enter your company name.'
  if (!v.size) e.size = 'Choose your company size.'
  return e
}

export default function BookingForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed

  const set = (field) => (ev) => setValues({ ...values, [field]: ev.target.value })

  async function onSubmit(ev) {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        await new Promise((r) => setTimeout(r, 700)) // demo mode
      }
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div className="book book--done" id="book" role="status">
        <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="none" stroke="var(--teal)" strokeWidth="3" />
          <path d="M14 25l7 7 13-15" fill="none" stroke="var(--teal)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2>Call requested</h2>
        <p>
          Thanks, {values.firstName}. We’ll email {values.email} within one business day to confirm a time
          and send a short questionnaire.
        </p>
      </div>
    )
  }

  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      <input
        id={`f-${name}`}
        value={values[name]}
        onChange={set(name)}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `e-${name}` : undefined}
        {...props}
      />
      {errors[name] && <p className="field__error" id={`e-${name}`}>{errors[name]}</p>}
    </div>
  )

  return (
    <form className="book" id="book" onSubmit={onSubmit} noValidate>
      <h2>Book your free roadmap call</h2>
      <div className="book__row">
        {field('firstName', 'First name', { autoComplete: 'given-name' })}
        {field('lastName', 'Last name', { autoComplete: 'family-name' })}
      </div>
      {field('email', 'Work email', { type: 'email', autoComplete: 'email' })}
      <div className="book__row">
        {field('company', 'Company', { autoComplete: 'organization' })}
        {field('phone', 'Phone (optional)', { type: 'tel', autoComplete: 'tel' })}
      </div>

      <div className={`field ${errors.size ? 'has-error' : ''}`}>
        <label htmlFor="f-size">Company size</label>
        <select id="f-size" value={values.size} onChange={set('size')} aria-invalid={!!errors.size}>
          <option value="">Choose one</option>
          <option>1–25 employees</option>
          <option>26–100 employees</option>
          <option>101–500 employees</option>
          <option>500+ employees</option>
        </select>
        {errors.size && <p className="field__error">{errors.size}</p>}
      </div>

      <fieldset className="phase-pick">
        <legend>Where are you today?</legend>
        <div className="phase-pick__opts">
          {[...phases.map((p) => ({ key: p.key, name: p.name, color: p.color })), { key: 'unsure', name: 'Not sure', color: 'var(--muted)' }].map((p) => (
            <label key={p.key} style={{ '--c': p.color }}>
              <input type="radio" name="phase" value={p.name} checked={values.phase === p.name} onChange={set('phase')} />
              <span>{p.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="f-message">What’s slowing you down? (optional)</label>
        <textarea id="f-message" rows="3" value={values.message} onChange={set('message')} />
      </div>

      {status === 'failed' && (
        <p className="book__fail" role="alert">
          Your request didn’t send. Check your connection and try again, or email us directly.
        </p>
      )}

      <button className="btn btn--block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Booking…' : 'Book my roadmap call'}
      </button>
      <p className="book__fine">We only use your details to arrange this call.</p>
    </form>
  )
}

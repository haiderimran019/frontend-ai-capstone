import { useState, type FormEvent } from 'react'
import { validateSettings, type SettingsErrors, type SettingsValues } from './validateSettings'

const initialValues: SettingsValues = {
  name: 'Alex Morgan',
  email: 'alex@example.com',
  productUpdates: false,
}

export default function App() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<SettingsErrors>({})
  const [saved, setSaved] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateSettings(values)
    setErrors(nextErrors)
    setSaved(false)

    if (Object.keys(nextErrors).length > 0) return

    setValues((current) => ({ ...current, name: current.name.trim(), email: current.email.trim() }))
    setSaved(true)
  }

  function updateField<K extends keyof SettingsValues>(field: K, value: SettingsValues[K]) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSaved(false)
  }

  return (
    <main className="page">
      <section className="settings-card" aria-labelledby="settings-title">
        <p className="eyebrow">ACCOUNT</p>
        <h1 id="settings-title">Settings</h1>
        <p className="intro">Manage your account details and preferences.</p>

        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              autoComplete="name"
              id="name"
              name="name"
              value={values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              onChange={(event) => updateField('name', event.target.value)}
            />
            {errors.name && <p className="error" id="name-error">{errors.name}</p>}
          </div>

          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              type="email"
              value={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              onChange={(event) => updateField('email', event.target.value)}
            />
            {errors.email && <p className="error" id="email-error">{errors.email}</p>}
          </div>

          <label className="check-row" htmlFor="product-updates">
            <input
              checked={values.productUpdates}
              id="product-updates"
              name="productUpdates"
              type="checkbox"
              onChange={(event) => updateField('productUpdates', event.target.checked)}
            />
            Email me product updates
          </label>

          <button type="submit">Save settings</button>
          <p className="form-note">This demo shows local form feedback; it does not save to a server.</p>
          <p className="saved" role="status" aria-live="polite">{saved ? 'Settings saved.' : ''}</p>
        </form>
      </section>
    </main>
  )
}

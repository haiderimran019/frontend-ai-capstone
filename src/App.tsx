import { useState } from 'react'

export default function App() {
  const [saved, setSaved] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <main className="page">
      <section className="settings-card">
        <p className="eyebrow">ACCOUNT</p>
        <h1>Settings</h1>
        <p className="intro">Manage your account details and preferences.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" defaultValue="Haider Imran" />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" defaultValue="haider@example.com" />
          <label className="check-row">
            <input name="updates" type="checkbox" defaultChecked />
            Email me product updates
          </label>
          <button type="submit">Save settings</button>
          {saved && <p className="saved">Settings saved.</p>}
        </form>
      </section>
    </main>
  )
}

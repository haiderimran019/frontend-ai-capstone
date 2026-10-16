export type SettingsValues = {
  name: string
  email: string
  productUpdates: boolean
}

export type SettingsErrors = Partial<Record<'name' | 'email', string>>

export function validateSettings(values: SettingsValues): SettingsErrors {
  const errors: SettingsErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()

  if (!name) {
    errors.name = 'Enter your name.'
  }

  if (!email) {
    errors.email = 'Enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter an email address in the format name@example.com.'
  }

  return errors
}

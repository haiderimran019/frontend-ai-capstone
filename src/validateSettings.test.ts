import { describe, expect, it } from 'vitest'
import { validateSettings } from './validateSettings'

describe('validateSettings', () => {
  it('rejects a blank or whitespace-only name', () => {
    expect(validateSettings({ name: '   ', email: 'alex@example.com', productUpdates: false })).toEqual({
      name: 'Enter your name.',
    })
  })

  it('requires an email address', () => {
    expect(validateSettings({ name: 'Alex Morgan', email: ' ', productUpdates: false })).toEqual({
      email: 'Enter your email address.',
    })
  })

  it('rejects an email without a valid address shape', () => {
    expect(validateSettings({ name: 'Alex Morgan', email: 'alex.example.com', productUpdates: false })).toEqual({
      email: 'Enter an email address in the format name@example.com.',
    })
  })

  it('accepts a valid name and email, including surrounding whitespace', () => {
    expect(validateSettings({ name: ' Alex Morgan ', email: ' alex@example.com ', productUpdates: true })).toEqual({})
  })
})

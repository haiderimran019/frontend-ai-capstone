# Project instructions

## Planned stack

- React for the user interface
- TypeScript for application code
- Vite for local development and builds

The app uses React, TypeScript, and Vite. Keep the account-settings form local-only unless a future task explicitly adds persistence.

## Conventions

- Keep changes small and explain them in beginner-friendly language.
- Use clear names and straightforward components.
- Prefer accessible HTML elements and responsive layouts.
- Do not add dependencies unless the project needs them.
- Keep secrets in local environment files; never commit them.
- Use Conventional Commits, such as `feat: add search form` or `docs: update setup notes`.

## Project rules learned in Assignment 3

- Keep forms controlled when validation depends on the current field values; do not show a saved state until every required field passes validation.
- Put field validation in a small pure TypeScript function and cover blank, whitespace-only, malformed, and valid inputs with tests.
- Connect each inline error to its input with `aria-describedby`, set `aria-invalid` when needed, and announce successful submission with a status role.
- Make demo persistence explicit in the interface; local form feedback must not imply data was saved to a server.

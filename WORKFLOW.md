# AI-Assisted Workflow Comparison

## Experiment setup

I built the same capstone feature on two branches from clean `main`: a React account-settings form with a name, email, product-update preference, and save action. Both use React, TypeScript, and Vite. Round one used one vague prompt: “Build a simple account settings form for this capstone.” Round two started fresh from `main` with file references, requirements, constraints, example behavior, and verification:

> In `src/App.tsx`, build a controlled settings form using `src/validateSettings.ts`: required name and email, unchecked updates checkbox, trim values, and show specific errors for blank/whitespace name, missing email, or malformed email. Keep values after errors. Link errors with `aria-describedby` and `aria-invalid`; announce success only after valid submission. State that this demo does not save to a server. Keep responsive styling and visible keyboard focus. Add tests in `src/validateSettings.test.ts` for blank, whitespace, malformed, and valid inputs; run `npm test` and `npm run build`. Add no unrelated features or backend persistence.

## What changed in the code

The vague branch has one `App.tsx`, uncontrolled `defaultValue` fields, a native email input, and a handler that immediately displays “Settings saved.” It lacks required-field checks, field errors, and tests. Its build passed, but review caught an AI mistake: an empty name still produced success feedback, and an empty email could pass.

The precise branch adds pure `validateSettings` and four Vitest cases. It uses controlled state, trims whitespace, checks missing or malformed values, keeps values after errors, and links inline messages with `aria-describedby` and `aria-invalid`. A `role="status"` message appears only after valid input. The interface clarifies that feedback is local. Both branches build; the precise branch’s tests and build pass.

## Workflow assessment

The vague prompt was faster and produced a visual starting point, but missing requirements increased review effort: the success message proved nothing and there was no test evidence. Native `type="email"` does not require a value. The precise prompt took longer and added files, but named edge cases, accessibility, and checks up front. Tests made validation repeatable and the build caught TypeScript and bundling issues, making review more focused.

Correctness means rejecting blank names and missing or malformed emails, trimming accepted values, and only reporting success after validation. Accessibility means labels, visible focus, errors tied to controls, and a status announcement. Edge cases include whitespace, malformed email, preserved input, and an unchecked preference. Tests lower review effort, but a person still needs to inspect the UI. No backend save or authentication exists.

## Reusable rules

The updated `CLAUDE.md` records four project rules from this comparison: controlled state for validated forms; pure, tested validation; accessible field errors and success messages; and honest wording about persistence.

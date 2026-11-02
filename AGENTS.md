# Repository working agreement

This repository publishes a public personal website. Accuracy, accessibility, maintainability, and disclosure safety are requirements.

## Workflow

1. Create a GitHub Issue with scope and acceptance criteria.
2. Create a numbered branch such as `feature/12-add-writing-section`.
3. Keep the change within the Issue scope.
4. Run formatting, linting, type checks, and a production build.
5. Open a pull request that closes the Issue.
6. Review public-content safety and the rendered site.
7. Squash merge and delete the branch.

Do not commit directly to `main`.

## Code style

- Use Astro components for reusable presentation and TypeScript for structured content.
- Keep public facts in `src/content/site.ts`; do not scatter personal data through templates.
- Prefer semantic HTML, progressive enhancement, and CSS over client-side JavaScript.
- Use design tokens from `src/styles/global.css`; avoid one-off colors and spacing values in components.
- Keep components focused and pages responsible for composition.
- Maintain keyboard navigation, visible focus, reduced-motion behavior, and responsive layouts.
- Run Prettier instead of manually aligning code.

## Public-content safety

- Publish only facts explicitly approved for public use or supported by public evidence.
- Do not include private contact details, finance records, evidence files, internal repositories, confidential projects, internal metrics, or unverified claims.
- A sanitized project name does not automatically authorize publication of the underlying project.
- Preserve uncertainty; never strengthen a role, metric, result, or responsibility without evidence and approval.
- External links must point to public, stable destinations.

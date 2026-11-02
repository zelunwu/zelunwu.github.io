# Architecture

The site is a static Astro application. It intentionally has no database, runtime API, analytics dependency, or client-side framework.

## Boundaries

- `src/content/site.ts` is the public content projection and the only place for structured personal facts.
- `src/components/` renders reusable content units without owning personal data.
- `src/pages/` composes routes and selects content.
- `src/layouts/` owns document metadata, navigation, and shared page chrome.
- `src/styles/global.css` owns the visual system and responsive behavior.

## Deployment

GitHub Actions runs formatting, linting, Astro type checks, and a production build. Only the generated `dist/` artifact is deployed to GitHub Pages.

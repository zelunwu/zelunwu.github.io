# Architecture

The site is a static Astro application. It intentionally has no database, runtime API, analytics dependency, or client-side framework.

## Boundaries

- `src/content/site.ts` is the public content projection and the only place for structured personal facts. It stores shared publication metadata and localized English and Simplified Chinese content.
- `src/components/` renders reusable content units without owning personal data.
- `src/pages/` composes the English routes; `src/pages/zh/` mirrors them with reviewed Simplified Chinese copy.
- `src/layouts/` owns localized document metadata, navigation, language alternates, and shared page chrome.
- `src/styles/global.css` owns the visual system and responsive behavior.

## Deployment

GitHub Actions runs formatting, linting, Astro type checks, and a production build. Only the generated `dist/` artifact is deployed to GitHub Pages.

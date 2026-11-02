# zelunwu.github.io

The public personal website of Zelun Wu, built with Astro and deployed to GitHub Pages.

## Development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Before opening a pull request, run:

```bash
npm run format:check
npm run lint
npm run build
```

## Structure

```text
src/
├── components/      Reusable presentation components
├── content/         Auditable public site data
├── layouts/         Shared document structure
├── pages/           English routes and mirrored Simplified Chinese routes
└── styles/          Global visual system and responsive rules
public/              Static assets copied without processing
docs/                Architecture and public-content policy
.github/workflows/   Continuous integration and Pages deployment
```

## Publishing

Changes are developed on an Issue-linked branch, reviewed in a pull request, and squash-merged to `main`. The deployment workflow validates formatting, linting, types, and the production build before publishing to GitHub Pages.

## Public-content boundary

This is a public repository. Site content is an explicit, reviewed public projection rather than a copy of any private career database. See [docs/content-policy.md](docs/content-policy.md).

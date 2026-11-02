# Contributing

## Branches

- `feature/<issue>-<topic>` for site capabilities and sections
- `content/<issue>-<topic>` for public profile and publication updates
- `fix/<issue>-<topic>` for defects
- `docs/<issue>-<topic>` for documentation-only changes
- `chore/<issue>-<topic>` for maintenance

## Quality checks

```bash
npm run format:check
npm run lint
npm run build
```

## Review checklist

- The change matches the linked Issue.
- Public facts are verified and permitted for disclosure.
- Keyboard and mobile layouts remain usable.
- Links, metadata, and production output are correct.
- No private source files or generated secrets are committed.

# Changelog

All notable changes to `@kape-theme/palette` will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-06-11

### Added

- Initial release of the Kape color palette.
- Dual ESM + CJS build via `tsup`.
- Full TypeScript type declarations (`KapePalette`, `Color`, `RGB`, `HSL`, `BaseColors`, `AccentColors`, `AnsiColors`, `UIColors`, `VisualColors`, `DiffColors`, `AnsiNormalColors`, `AnsiBrightColors`).
- Named tree-shakeable exports: `base`, `accents`, `ansi`, `ui`.
- Convenience helpers: `hex(path)` and `color(path)` for dot-path lookups.
- Raw JSON accessible via `@kape-theme/palette/colors.json`.
- GitHub Actions workflow for automated npm publishing on GitHub Release.

# @kape-theme/palette

> The Kape color palette — a dark theme rooted in coffee, earth, and amber.

```bash
npm install @kape-theme/palette
```

---

## Usage

### Default import (full palette)

```ts
import palette from "@kape-theme/palette";

console.log(palette.accents.yellow.hex); // "#e7bb5c"
console.log(palette.base.background.rgb); // { r: 24, g: 22, b: 22 }
```

### Named imports (tree-shakeable)

```ts
import { base, accents, ansi, ui } from "@kape-theme/palette";

console.log(base.foreground.hex);  // "#d4be98"
console.log(accents.blue.hex);     // "#7b8fd4"
console.log(ansi.normal.cyan.hex); // "#689d8a"
console.log(ui.visual.red.hex);    // "#3c1f1e"
```

### Hex helper

```ts
import { hex } from "@kape-theme/palette";

hex("accents.yellow");      // "#e7bb5c"
hex("base.background");     // "#181616"
hex("ansi.bright.magenta"); // "#c8889a"
```

### Color object helper

```ts
import { color } from "@kape-theme/palette";

color("accents.orange");
// {
//   hex: "#c87941",
//   rgb: { r: 200, g: 121, b: 65 },
//   hsl: { h: 28, s: 57, l: 52 },
//   description: "Decorators, attributes, special variables"
// }
```

### Raw JSON (no build step)

If you just want the raw data without any JS processing:

```ts
import colors from "@kape-theme/palette/colors.json";
```

Or from a non-bundled environment:

```js
const colors = require("@kape-theme/palette/colors.json");
```

---

## Palette Overview

### Base

| Role | Hex |
|---|---|
| `base.background` | `#181616` |
| `base.surface` | `#1e1b1b` |
| `base.foreground` | `#d4be98` |
| `base.second_text` | `#bdae8b` |
| `base.third_text` | `#928374` |

### Accents

| Name | Hex | Use |
|---|---|---|
| `accents.red` | `#b53535` | Errors, deletions |
| `accents.green` | `#b4c76e` | Success, strings |
| `accents.yellow` | `#e7bb5c` | Constants, warnings |
| `accents.blue` | `#7b8fd4` | Keywords, links |
| `accents.purple` | `#b06880` | Functions |
| `accents.aqua` | `#689d8a` | Types, tags |
| `accents.white` | `#c2c2c2` | Punctuation |
| `accents.orange` | `#c87941` | Decorators |

See [`colors.json`](./colors.json) for the full palette including ANSI and UI support colors.

---

## TypeScript

Full type definitions are included. The main types exported:

```ts
import type {
  KapePalette,
  Color,
  RGB,
  HSL,
  BaseColors,
  AccentColors,
  AnsiColors,
  UIColors,
} from "@kape-theme/palette";
```

---

## Links

- [kape-theme/kape](https://github.com/kape-theme/kape) — Main repository (port registry, docs, contributing guide)
- [kape-theme](https://github.com/kape-theme) — GitHub organization

---

## License

MIT © [gabiuz](https://github.com/gabiuz)

// ─── Primitive types ─────────────────────────────────────────────────────────

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface Color {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  description?: string;
}

// ─── Base ─────────────────────────────────────────────────────────────────────

export interface BaseColors {
  /** Main editor/app background */
  background: Color;
  /** Raised surfaces: sidebars, tabs, inlay hints */
  surface: Color;
  /** Primary text — default color for all readable content */
  foreground: Color;
  /** Secondary / subdued text, comments */
  second_text: Color;
  /** Muted text, hints, metadata, line numbers */
  third_text: Color;
}

// ─── Accents ─────────────────────────────────────────────────────────────────

export interface AccentColors {
  /** Errors, deletions, warnings */
  red: Color;
  /** Success, additions, strings */
  green: Color;
  /** Warnings, constants, highlights */
  yellow: Color;
  /** Keywords, links, info */
  blue: Color;
  /** Functions, attributes, special */
  purple: Color;
  /** Types, parameters, tags */
  aqua: Color;
  /** Punctuation, operators, plain text */
  white: Color;
  /** Decorators, attributes, special variables */
  orange: Color;
}

// ─── ANSI ─────────────────────────────────────────────────────────────────────

export interface AnsiNormalColors {
  black: Color;
  red: Color;
  green: Color;
  yellow: Color;
  blue: Color;
  magenta: Color;
  cyan: Color;
  white: Color;
}

export interface AnsiBrightColors extends AnsiNormalColors {
  bright_orange: Color;
}

export interface AnsiColors {
  description: string;
  normal: AnsiNormalColors;
  bright: AnsiBrightColors;
}

// ─── UI ──────────────────────────────────────────────────────────────────────

export interface VisualColors {
  /** Tinted background for error diagnostics */
  red: Color;
  /** Tinted background for warning diagnostics */
  yellow: Color;
  /** Tinted background for hints and additions */
  green: Color;
  /** Tinted background for info and modifications */
  blue: Color;
  /** Tinted background for purple accent regions */
  purple: Color;
}

export interface DiffColors {
  /** Removed-line background */
  red: Color;
  /** Inserted-line background */
  green: Color;
  /** Modified-line background */
  blue: Color;
}

export interface UIColors {
  description: string;
  /** Selected text and word-highlight background */
  selection_background: Color;
  visual: VisualColors;
  diff: DiffColors;
}

// ─── Root palette ────────────────────────────────────────────────────────────

export interface KapePalette {
  name: string;
  description: string;
  version: string;
  author: string;
  license: string;
  base: BaseColors;
  accents: AccentColors;
  ansi: AnsiColors;
  ui: UIColors;
}

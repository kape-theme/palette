import paletteData from "../colors.json" assert { type: "json" };
import type { KapePalette, Color, BaseColors, AccentColors, AnsiColors, UIColors } from "./types.js";

export type { KapePalette, Color, BaseColors, AccentColors, AnsiColors, UIColors };
export type { RGB, HSL, VisualColors, DiffColors, AnsiNormalColors, AnsiBrightColors } from "./types.js";

// ─── Typed palette ───────────────────────────────────────────────────────────

const palette = paletteData as KapePalette;

// ─── Named exports (tree-shakeable) ─────────────────────────────────────────

/** Base colors — background, surface, and text layers */
export const base: BaseColors = palette.base;

/** Accent colors — named semantic colors for syntax and UI highlights */
export const accents: AccentColors = palette.accents;

/** ANSI terminal colors — 16-color normal and bright sets */
export const ansi: AnsiColors = palette.ansi;

/** UI support colors — extended colors for richer editor integrations */
export const ui: UIColors = palette.ui;

// ─── Convenience helpers ─────────────────────────────────────────────────────

/**
 * Returns the hex value of any color by dot-path lookup.
 *
 * @example
 * hex("accents.yellow")  // "#e7bb5c"
 * hex("base.background") // "#181616"
 * hex("ansi.normal.cyan") // "#689d8a"
 */
export function hex(path: string): string {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = palette;
  for (const part of parts) {
    node = node?.[part];
  }
  if (typeof node?.hex !== "string") {
    throw new Error(`[kape] No color found at path: "${path}"`);
  }
  return node.hex as string;
}

/**
 * Returns the full Color object at any dot-path.
 *
 * @example
 * color("accents.blue")
 * // { hex: "#7b8fd4", rgb: { r: 123, g: 143, b: 212 }, hsl: { h: 227, s: 47, l: 66 }, description: "..." }
 */
export function color(path: string): Color {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = palette;
  for (const part of parts) {
    node = node?.[part];
  }
  if (typeof node?.hex !== "string") {
    throw new Error(`[kape] No color found at path: "${path}"`);
  }
  return node as Color;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default palette;

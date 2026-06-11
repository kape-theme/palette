import { describe, it, expect } from "vitest";
import palette, { base, accents, ansi, ui, hex, color } from "../src/index.js";

// ─── Named exports ────────────────────────────────────────────────────────────

describe("base", () => {
  it("has a background hex color", () => {
    expect(base.background.hex).toBe("#181616");
  });

  it("has rgb values for foreground", () => {
    expect(base.foreground.rgb).toEqual({ r: 212, g: 190, b: 152 });
  });

  it("exposes all five base keys", () => {
    expect(Object.keys(base)).toEqual([
      "background",
      "surface",
      "foreground",
      "second_text",
      "third_text",
    ]);
  });
});

describe("accents", () => {
  it("has correct yellow hex", () => {
    expect(accents.yellow.hex).toBe("#e7bb5c");
  });

  it("has correct blue hsl", () => {
    expect(accents.blue.hsl).toEqual({ h: 227, s: 47, l: 66 });
  });

  it("exposes all eight accent keys", () => {
    expect(Object.keys(accents)).toEqual([
      "red", "green", "yellow", "blue", "purple", "aqua", "white", "orange",
    ]);
  });
});

describe("ansi", () => {
  it("has a normal cyan hex", () => {
    expect(ansi.normal.cyan.hex).toBe("#689d8a");
  });

  it("has a bright magenta hex", () => {
    expect(ansi.bright.magenta.hex).toBe("#c8889a");
  });

  it("has the bright_orange extension", () => {
    expect(ansi.bright.bright_orange.hex).toBe("#d4975a");
  });
});

describe("ui", () => {
  it("has selection_background", () => {
    expect(ui.selection_background.hex).toBe("#2e2a2a");
  });

  it("has visual.red tint", () => {
    expect(ui.visual.red.hex).toBe("#3c1f1e");
  });

  it("has diff.green tint", () => {
    expect(ui.diff.green.hex).toBe("#2a3120");
  });
});

// ─── hex() helper ────────────────────────────────────────────────────────────

describe("hex()", () => {
  it("resolves a shallow accent path", () => {
    expect(hex("accents.yellow")).toBe("#e7bb5c");
  });

  it("resolves a base path", () => {
    expect(hex("base.background")).toBe("#181616");
  });

  it("resolves a deep ansi path", () => {
    expect(hex("ansi.normal.cyan")).toBe("#689d8a");
  });

  it("resolves a ui path", () => {
    expect(hex("ui.visual.red")).toBe("#3c1f1e");
  });

  it("throws for an invalid path", () => {
    expect(() => hex("accents.doesnotexist")).toThrowError(/\[kape\]/);
  });
});

// ─── color() helper ───────────────────────────────────────────────────────────

describe("color()", () => {
  it("returns a full Color object", () => {
    expect(color("accents.orange")).toMatchObject({
      hex: "#c87941",
      rgb: { r: 200, g: 121, b: 65 },
      hsl: { h: 28, s: 57, l: 52 },
    });
  });

  it("returns a color with a description field", () => {
    const c = color("accents.orange");
    expect(c.description).toBeTypeOf("string");
  });

  it("throws for an invalid path", () => {
    expect(() => color("base.nonexistent")).toThrowError(/\[kape\]/);
  });
});

// ─── Default export ───────────────────────────────────────────────────────────

describe("default export (palette)", () => {
  it("has the palette name", () => {
    expect(palette.name).toBe("Kape");
  });

  it("has all top-level sections", () => {
    expect(palette).toHaveProperty("base");
    expect(palette).toHaveProperty("accents");
    expect(palette).toHaveProperty("ansi");
    expect(palette).toHaveProperty("ui");
  });
});

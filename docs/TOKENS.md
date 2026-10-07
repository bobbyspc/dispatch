# Token reference, with measured resolutions

Every `clamp()` in `src/app/globals.css` was solved for the same two anchors:
the floor value at a 390px viewport and the ceiling value at 1440px
(HOUSE-STYLE 2.17).

The formula, for a token going from `min` at 390 to `max` at 1440:

```
slope  = (max - min) / 1050          px per px of viewport
vw     = slope * 100                 the vw coefficient
offset = min - slope * 390           the rem constant
       -> clamp(min, offset + vw, max)
```

## Measured, not asserted

The table below is `getComputedStyle` read off a **production build** served by
`next start`, on `/style-probe`, at exactly 390 and exactly 1440. It is not the
source re-read back to you.

Why that distinction matters here specifically: Tailwind v4 hoists an `@theme`
block out of a `@media` wrapper into `:root`. A previous build in this vault
defined `--spacing-gutter` as 16px inside a mobile media query and 24px
outside, and the desktop value won at every width. The source read correctly.
The browser did not. Twice.

### Type, professional pole

| Token | @390 measured | @1440 measured | intended |
|---|---|---|---|
| `text-micro` | 12px | 12px | 12 / 12 fixed |
| `text-small` | 14px | 14px | 14 / 14 fixed |
| `text-body` | 16px | 16px | 16 / 16 fixed |
| `text-lead` | 18px | 19.984px | 18 / 20 |
| `text-h4` | 20px | 23.998px | 20 / 24 |
| `text-h3` | 24px | 31.997px | 24 / 32 |
| `text-h2` | 40px | 51.995px | 40 / 52 |
| `text-h2-alt` | 44.006px | 64px | 44 / 64 |
| `text-display` | 56px | 88px | 56 / 88 |
| `text-lockup-sm` | 56px | 207.99px | 56 / 208 |
| `text-lockup-lg` | 72.003px | 287.998px | 72 / 288 |

Sub-pixel drift (51.995 rather than 52) is the rounded `rem` constants in the
house style's own published clamps resolving through the browser. It is under
0.01% and it is not worth a "cleaner" number that no longer traces to the
document.

Line-height and tracking resolve through the same tokens and were measured
alongside: `text-display` reads `88px / 96.8px / -1.76px` at 1440, which is
exactly 1.10 line-height and -0.02em tracking. `text-lockup-lg` reads
`287.998 / 287.998`, line-height 1.00 (HOUSE-STYLE 4.5).

### Type, trendy pole (same file, one flag)

| Token | @390 | @1440 | intended |
|---|---|---|---|
| `text-h2` | 32.008px | 48px | 32 / 48 |
| `text-display` | 44.001px | 95.997px | 44 / 96 (the `h1` sentence tier) |
| `text-body` line-height | 22.4px | 22.4px | 1.40, against professional's 1.50 |
| `text-display` line-height | 46.2px | 100.797px | 1.05, against professional's 1.10 |
| `text-display` tracking | -1.54px | -3.36px | -0.035em, against professional's -0.02em |

### Space

| Token | pole | @390 | @1440 | intended |
|---|---|---|---|---|
| `micro` (`p-micro`, `gap-micro`) | both | 8px | 8px | 8 fixed |
| `layout` | both | 40px | 80px | 40 / 80 |
| `gutter` | professional | 24.003px | 48px | 24 / 48 |
| `gutter` | trendy | 20.006px | 40px | 20 / 40 |
| `section`, rhythm `default` | both | 48px | 80px | 48 / 80 |
| `section`, rhythm `air` | trendy | 80.002px | 160px | 80 / 160 |

### Geometry

| Token | professional | trendy |
|---|---|---|
| `max-w-page` | 1200px | 1360px |
| `measure` | 680px | 800px |
| `rounded-token` | 8px | 16px |
| `rounded-pill` | 999px | 999px |
| hairline alpha | 0.14 | 0.09 |

### Colour, measured as rendered

| Token | value |
|---|---|
| `ink` | `rgb(28, 26, 24)` |
| `ink-64` | `rgba(28, 26, 24, 0.64)` |
| `ground` | `rgb(246, 243, 236)` |
| `ground-alt` | `rgb(237, 232, 220)` |
| `ground-invert` | `rgb(28, 26, 24)` |
| `accent-lg` | `rgb(181, 101, 74)` |
| `accent-sm` | `rgb(156, 78, 54)` |
| `hairline` | `rgba(28, 26, 24, 0.14)` |

Contrast against `ground`, computed by the WCAG relative-luminance formula:

| Pair | Ratio | Bar |
|---|---|---|
| `ink` on `ground` | **15.65:1** | liked-set body band is 14 to 18:1 |
| `ink-64` on `ground` | **5.00:1** | secondary text, floor 4.5:1 |
| `accent-lg` on `ground` | **3.85:1** | >= 24px only, bar 3:1 |
| `accent-sm` on `ground` | **5.33:1** | < 24px, bar 4.5:1 |

Temperature: every neutral sits at hue 30 to 41 degrees and saturation 8 to
36%. That is a WARM set (HOUSE-STYLE 2.9 / G17). If you swap to a 0%-saturation
neutral set, swap all of them. Mixed fails the gate, and a warm cream ground
beside a 0%-saturation grey card is the single most common tell of a template
that was recoloured rather than designed.

### Easing

| Token | value |
|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-move` | `cubic-bezier(0.96, 0, 0.38, 1)` |
| `ease-overshoot` | `cubic-bezier(0.96, -0.02, 0.38, 1.01)` |

## Re-running the measurement

```bash
NEXT_PUBLIC_STYLE_PROBE=1 npx next build
npx next start -p 3311
py <vault>/scripts/cdp-eval.py --url http://localhost:3311/style-probe --width 1440 --js-file scripts/token-probe.js --json
py <vault>/scripts/cdp-eval.py --url http://localhost:3311/style-probe --width 390  --js-file scripts/token-probe.js --json
```

Two things about that command line that are not incidental:

- It is a **production** build. `next dev` can fail to emit a newly used
  arbitrary or named utility class that a production build emits, so a token
  verified in dev is not verified.
- Do not pass `--mobile` for the 390 run. Device emulation makes
  `window.innerWidth` report the visual viewport (553 in one run here) while the
  layout viewport is still 390, so the reading looks wrong when it is not.
  Verify the width from a token whose clamp is not at its floor: `text-h2-alt`
  resolved to 44.0055px, which back-solves to exactly 3.9vw.

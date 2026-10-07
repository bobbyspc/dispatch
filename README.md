# onepanel-site-starter

The template every One Panel website project scaffolds from.

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + `motion`,
deployed to Vercel. It encodes `HOUSE-STYLE.md` as **code**, not as
documentation: an agent scaffolding from this gets the spine for free and has to
work at it to violate the spine casually.

Related reading, in order: `docs/TOKENS.md` (the measured token table),
`docs/GOTCHAS.md` (twelve things that have already cost time), `docs/3D.md`.

---

## Scaffolding a new project

```bash
cp -r Templates/onepanel-site-starter <destination>/<client-slug>-site
cd <destination>/<client-slug>-site
npm install
```

Destination: `Work/Clients/<Client>/` for a Production House client,
`Projects/Personal/One Panel Studio/Clients/<Client>/` for a One Panel client.

Then, in order:

1. **`site.config.ts`**: name, url, description, `pole`, `rhythm`.
2. **Palette**: the `:root` block at the bottom of `src/app/globals.css`.
3. **Fonts**: the two `next/font/google` calls at the top of
   `src/app/layout.tsx`.
4. **Delete `src/app/page.tsx`** and build the real site.
5. `npm run verify` (production build plus the banned-library scan).

---

## Setting the pole

One line in `site.config.ts`:

```ts
pole: "professional",   // or "trendy"
```

That is the whole change. It reaches the DOM as `<html data-pole>` and every
token in `globals.css` keys off it. **Changing poles requires zero component
edits**, which is the point: if you find yourself writing
`pole === "trendy" ? a : b` inside a component, the token layer is missing a
token. Add the token.

Measured effect of flipping the flag, read off a production build:

| | professional | trendy |
|---|---|---|
| `max-w-page` | 1200px | 1360px |
| `px-gutter` @1440 | 48px | 40px |
| `measure` | 680px | 800px |
| `text-display` @1440 | 88px | 96px |
| `text-h2` @1440 | 52px | 48px |
| display line-height | 1.10 | 1.05 |
| display tracking | -0.02em | -0.035em |
| body line-height | 1.50 | 1.40 |
| `rounded-token` | 8px | 16px |
| hairline alpha | 0.14 | 0.09 |
| motion budget | 2 behaviours | 5 behaviours |
| `rhythm: "air"` @1440 | 120px | 160px |

`src/lib/pole.ts` also **throws at build time** on an illegal combination: a
loader on the trendy pole, a custom cursor or texture or 3D on the professional
pole, `rhythm: "tight"` on trendy. You get a named error, not a shipped
violation.

### Rhythm

`rhythm` picks the one vertical section padding value for the whole site
(HOUSE-STYLE 6.2). `tight` (64px) for a lead-gen page, `default` (80px)
otherwise, `air` (120 professional / 160 trendy) for editorial. Repeat it; do
not vary it per section. That uniformity is what reads as intentional.

---

## Replacing the palette

Everything lives in one `:root` block at the bottom of `src/app/globals.css`.
The ship values are real measurements from the reference library, so the
scaffold is legal on day one. They are still placeholders.

```css
--ink-rgb:            28 26 24;      /* never #000 */
--ground-rgb:        246 243 236;    /* never #FFF */
--ground-alt-rgb:    237 232 220;
--ground-invert-rgb:  28 26 24;
--on-invert-rgb:     246 243 236;
--accent-lg-rgb:     181 101 74;     /* type >= 24px, must clear 3:1  */
--accent-sm-rgb:     156 78 54;      /* type <  24px, must clear 4.5:1 */
```

Four structural rules the token layer enforces for you:

- **One ink.** `ink-88 / 64 / 48 / 25 / 16 / 10 / 06` and `hairline` are all
  that same ink at an alpha. Do not add a fifth grey. Add an alpha.
- **No `--color-accent`.** There is deliberately no single accent token. A brand
  hue that appears as type ships as **two cuts**, and the utilities are named by
  size band so the wrong one is visibly wrong at the call site.
- **One temperature.** The shipped set is warm (hue 30 to 41, saturation 8 to
  36%). If you go 0%-saturation neutral, go all the way. Mixed fails gate G17,
  and a warm cream ground beside a 0%-saturation grey card is the most common
  tell of a template that was recoloured rather than designed.
- **10 to 12 distinct hexes on the page, total.**

Check your replacements against `ground` before you ship them: body ink should
land in **14 to 18:1**, secondary text in **5.4 to 5.8:1**. 4.5:1 is the floor
below which nothing ships, not the target.

---

## Replacing the fonts

Two `next/font/google` calls at the top of `src/app/layout.tsx`, feeding
`--font-display-face` and `--font-workhorse-face`. The shipped pairing is
Libre Caslon Display + Manrope, which is shape 1 from HOUSE-STYLE 4.6.

Hard requirements:

- **Two families**, split totally by job. The display face never takes a UI job;
  the workhorse never takes a headline. A third family is legal only as a
  wordmark face used at display scale.
- **Display weight 400 or lighter. Never 500 or above.** If the face you want
  only reads well at 600, it is the wrong face.
- **Test the display face at its real lockup size** (208px or 288px at 1440),
  not at 48px. At 288px a face is read as a shape, not as words: check
  sidebearings, terminal quality, whether the counters stay open.
- **Instrument Serif is banned**, at every size, on both poles. The pairing
  shape it was measured on survives; substitute another characterful serif.
- Do not load a face and then use it on one or two elements.

Pick one of the four measured pairing shapes rather than inventing a fifth. They
are in HOUSE-STYLE 4.6.

---

## What is in the box

```
site.config.ts                      THE flag file. One value changes the pole.
src/app/globals.css                 The token layer. Read this before anything else.
src/app/layout.tsx                  Fonts, metadata, data-pole/data-rhythm, MotionProvider
src/app/style-probe/page.tsx        Token measurement surface. 404s unless NEXT_PUBLIC_STYLE_PROBE=1
src/lib/pole.ts                     Derived pole rules + build-time legality assert
src/lib/motion.ts                   Easings, durations, reveal/stagger variants
src/lib/motion-budget.ts            Dev-time G36 counter
src/lib/split-text.ts               The ~30-line grapheme splitter (8.7)
src/lib/loader.ts                   The loader timeline + the pre-paint boot script (9)
src/components/layout/Section.tsx   py-section, ground rotation, required data-section
src/components/layout/Container.tsx max-w-page + px-gutter
src/components/layout/Prose.tsx     The measure cap. The cheapest rule in the document.
src/components/motion/*             MotionProvider, Reveal, Stagger, SplitText, Loader
scripts/check-banned-libs.mjs       Gates G39 and G40 against the built bundle
```

### Motion

`<MotionProvider>` wraps the app in `<MotionConfig reducedMotion="user">` in the
root layout. It is not opt-in and it should not be removed to "fix" an
animation.

`<Reveal>` is the scroll reveal and the only one: opacity 0 to 1 plus
translateY 24 to 0, 700ms, `viewport once`. There is no third property. Not
scale, not blur, not rotate, not clip.

`<Stagger>` is the 100ms sibling stagger. Children must be
`<Reveal inStagger>`: a child carrying its own `whileInView` opts itself out of
the parent's animation state and every item fires at once, which looks like
"the stagger isn't working" and is actually two independent animations.

Reduced motion is handled in three places at once, and all three are load
bearing. See `docs/GOTCHAS.md` #8 for the measured failure that made it three.

---

### The loader

HOUSE-STYLE section 9, built and wired in. `features.loader: true` in
`site.config.ts` on the professional pole ships it; `false`, or the trendy pole,
ships no curtain markup at all (gate G44). `src/lib/pole.ts` still throws at
build time on `loader: true` with `pole: "trendy"`.

The site's ink as the ground, the wordmark in the display face in the site's
ground colour, and nothing else. No spinner, no percentage counter.

| | |
|---|---|
| entrance | per unit, `translateX 44px -> 0` + `opacity 0 -> 1`, 1200ms, **50ms stagger**, ease `[0.96, -0.02, 0.38, 1.01]` |
| hold | until the fixed floor (see below) |
| exit | `scaleY 1 -> 0` from the top edge, 700ms, standard curve. **Never a fade.** |
| mark exit | `-115vh` in 550ms, concurrent with the curtain and faster, so it clears first |
| total | **fixed**, never load-gated, never on a counter (9.2) |
| repeat | first visit per session only (9.3) |
| handoff | the hero starts at `heroDelay(n)` from `@/lib/loader`, which lands **inside** the collapse so there is never a bare frame |

Every number is in `src/lib/loader.ts`. Change them there, never in the
component.

**`LOADER_MIN_CURTAIN_START_MS` is the one number that is a decision, not a
measurement.** The entrance's length depends on how many units the wordmark
splits into, so without a floor a two-word mark and a twelve-letter mark would
ship different totals, and 9.2 is absolute that the total is fixed. The floor
holds the curtain to a fixed moment and **the slack lands in the hold**: a mark
that writes on and then sits reads as a brand held for a beat, where a blank ink
screen that sits and then writes on reads as a stall. At roughly 22 units the
two meet and the hold is exactly section 9.1's measured 100ms.

It is tuned against gate G43, and the reason it is larger than section 9.1's
arithmetic suggests is worth knowing: **G43 measures from the curtain's first
sighting to the moment it stops covering 90% of the viewport, not to the moment
it is fully gone.** A `scaleY` collapse crosses 90% about 125ms in, so the gate
reads roughly 575ms earlier than "the curtain has cleared". Measured on this
scaffold: G43 reports **2450ms** against its 2300 to 2800 band, and the curtain
is completely gone at 3050ms.

**Server-rendered first paint, and the sessionStorage tradeoff.** The curtain is
in the served HTML on every load, so it is opaque at first paint. A loader that
mounts client-side after hydration shows the real page first and then covers it,
which is worse than shipping no loader.

`sessionStorage` cannot be read during SSR, so the skip is decided **outside
React**: a synchronous inline script, the first child of `<body>`, sets
`data-loader-skip` on `<html>` before the curtain markup below it is parsed, and
one CSS rule turns that into `display: none` before first paint. React renders
the identical tree every time, so there is no hydration mismatch to reconcile;
the component simply unmounts a subtree that was never visible. **The cost of
the trade is a few hundred bytes of unpainted markup on a repeat load.** If
`sessionStorage` throws, the loader plays on every load rather than never, which
is the safe direction to fail.

**Reduced motion skips the loader entirely, in three independent layers**, and
the reason is a trap: `<MotionConfig reducedMotion="user">` disables transform
animations, so the `scaleY` exit would never run and the curtain would cover the
site permanently. The layers are the boot script (sets `data-loader-skip`), a
CSS rule inside `@media (prefers-reduced-motion: reduce)` that needs no
JavaScript at all, and the component's own unmount. Measured under
`cdp-eval.py --reduced-motion`: 0 of 11 revealed elements below opacity 1, the
`h1` the topmost element at its own coordinates, and the loader absent from the
DOM.

---

## What is deliberately absent

- **gsap, lenis, locomotive-scroll, aos, react-spring, splitting.** Banned.
  ESLint blocks the imports, `npm run check:libs` scans the built bundle
  (gate G39), and text splitting is `src/lib/split-text.ts` instead.
- **Any smooth-scroll library.** Zero of eleven liked sites use one. Scroll is
  native everywhere.
- **`react-three-fiber` and `drei`.** Not a dependency. Opt-in per project with
  a code-split pattern. See `docs/3D.md`, and gate G40 checks the base bundle.
- **A component library.** No shadcn, no Radix, no icon pack. A house-style
  build has one card fill, one card radius and one button signature; a component
  library's job is to give you many of each.
- **A full radius ladder.** `rounded-token` and `rounded-pill`, nothing else.
  Gate G1 requires 62% of rounded boxes to share one value, and the cheapest way
  to pass it is to expose one. Pick `--r-token` by the smallest surface you will
  apply it to, then apply it everywhere.
- **A single `--color-accent`.** Two cuts or nothing.
- **A texture grid, a custom cursor, an inset frame.** Pole-gated features, none
  of them scaffolded. Turn one on in `site.config.ts` and build it for the
  project that needs it. `src/lib/pole.ts` refuses the illegal ones. **The
  loader is the exception: it ships built.** See "The loader" below.
- **Count-up stat numbers.** Never. Zero of eight trendy sites have one, it is a
  standing preference, and gate G38 scans for it.

---

## Verifying

```bash
npm run verify          # production build + banned-library scan (G39, G40)
npm run lint            # ESLint, including the banned-import and priority rules
npm run build:webpack   # use this inside a git worktree (see GOTCHAS #3)
```

Token measurement, which is the one you should not skip after touching
`globals.css`:

```bash
NEXT_PUBLIC_STYLE_PROBE=1 npx next build
npx next start -p 3311
py <vault>/scripts/cdp-eval.py --url http://localhost:3311/style-probe --width 1440 --js-file scripts/token-probe.js --json
py <vault>/scripts/cdp-eval.py --url http://localhost:3311/style-probe --width 390  --js-file scripts/token-probe.js --json
```

`/style-probe` renders one element per token carrying `data-probe`, and 404s
unless the env var is set, so it costs a client site nothing. Delete the folder
if you would rather it not exist.

The full gate list is HOUSE-STYLE section 14. This template passes the ones a
scaffold can pass on its own and gives you the tokens to pass the rest.

## Known gotchas

Twelve of them, all hit on real builds, in `docs/GOTCHAS.md`. The four you are
most likely to trip over are Tailwind v4's `@theme` hoisting, verifying classes
in dev rather than in a production build, Turbopack inside a worktree, and the
reduced-motion hydration trap.

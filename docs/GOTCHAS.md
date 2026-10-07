# Gotchas

Every one of these was hit on a real build in this vault and cost real time.
They are here in the order you are most likely to hit them.

## 1. Tailwind v4 hoists `@theme` out of `@media`

A `@theme` block written inside a `@media` wrapper is **lifted into `:root`**,
so the value inside the media query applies at every width.

A previous build defined `--spacing-gutter` as 16px inside
`@media (width < 768px)` and 24px outside. The desktop value won at 390 as well.
Verified twice: the computed property read `1.5rem` at 390, and the element's
own padding measured 24px.

**This silently breaks a responsive token system, which is exactly what this
template is.** The template therefore contains zero media-query-scoped `@theme`
blocks and uses `clamp()` for every scaling value (HOUSE-STYLE 2.17). Pole
divergence is done with an attribute selector on `<html>`, which is ordinary
CSS and is not hoisted.

Corollary: **prove your tokens by reading computed values in a browser at 390
and 1440, not by reading the source.** `/style-probe` and `docs/TOKENS.md` are
that proof for this template.

## 2. Verify arbitrary and newly-used classes in a PRODUCTION build

`next dev` can fail to emit a class you have just started using, arbitrary
values especially. A token that looks broken in dev may be fine, and a token
that looks fine in dev may be missing in production. Run `next build` and
`next start` before you believe a measurement.

## 3. Turbopack cannot build inside a git worktree whose `node_modules` is a junction

The error is `Symlink ... points out of the filesystem root`. It hits every
parallel-builder worktree, because the usual setup is to junction `node_modules`
from the main tree rather than reinstall per worktree.

**Use `npm run build:webpack`** (`next build --webpack`) in that situation. It
is in `package.json` for exactly this reason. Everything else about the build
is identical.

## 4. `priority` on `next/image` is deprecated in favour of `preload`

Silent at build time. The ESLint config in this template turns it into an error
via `no-restricted-syntax`, because a deprecation nobody sees is a deprecation
nobody fixes.

## 5. No `/dev/stdin` in any script

This is Windows and Git Bash has no `/dev/stdin`. MSYS path translation turns it
into `C:/dev/stdin`, which does not exist, and you get an ENOENT at runtime from
a line that looks perfectly ordinary.

Do the fetch and the parse in one process, or write to `$TEMP` and read the
file. Never `curl ... | node -e "readFileSync('/dev/stdin')"`.

## 6. Redirects go in `src/proxy.ts`, not `next.config.ts`

`redirects()` matches `source` **case-insensitively** and Next exposes no
opt-out, so `/Menu -> /menu` also matches `/menu` and redirects it to itself:
a 308 loop that makes the real route unreachable. A negative lookahead does not
save you, because the case-insensitive flag applies to the lookahead too.
Reproduced against `next start` on a real build. Use `src/proxy.ts`, which is
Next 16's rename of `middleware.ts`.

## 7. Turbopack `resolveAlias` rejects Windows absolute paths

The error reads like the alias simply being ignored. Also, Turbopack's own
import map runs before yours, so an alias reaches the browser layer only and the
RSC/SSR layers need the vendored specifiers.

## 8. Swapping a `motion` element for a plain one under reduced motion strands the SSR style

Found while building this template, and it is the reason `Reveal`, `Stagger` and
`SplitText` stay motion elements in both branches.

The obvious implementation of HOUSE-STYLE 8.8 is: if `useReducedMotion()`, return
a plain `<h2>`. The server cannot know the visitor's motion preference, so it
renders `style="opacity:0;transform:translateY(24px)"`. **React hydration does
not remove a DOM attribute that the client vnode simply omits.** The plain
element inherits the hidden style and nothing ever clears it.

Measured in a production build under `prefers-reduced-motion: reduce`: the CTA
heading stayed at `opacity: 0` after a full scroll through, while the identical
element reached `opacity: 1` with the flag off. Content permanently invisible to
exactly the users the rule exists to protect.

The fix is two-layered and both layers matter: keep it a motion element so
motion owns the style attribute and rewrites it on the first client render, and
add a `[data-reveal] { opacity: 1 !important; transform: none !important }` rule
inside the reduced-motion media query so the pre-hydration frame is correct with
no JavaScript at all.

## 9. `motion.create()` returns a new component every call

Calling it during render remounts the subtree on every parent render, so the
reveal replays. `Reveal` caches per tag at module scope.

## 10. Don't pass `--mobile` to `cdp-eval.py` for a 390 token reading

Device emulation makes `window.innerWidth` report the visual viewport (553 in
one run here) while the layout viewport is still 390. The token values are
correct and the width readout is not, which reads as a defect when it is not.
Back-solve the width from a token that is not at its clamp floor if you need to
confirm.

## 11. `eslint-config-next` 16 ships flat configs, and `FlatCompat` breaks on them

`compat.extends("next/core-web-vitals")` throws
`TypeError: Converting circular structure to JSON` from inside eslintrc's own
error formatter, so the message tells you nothing. Import
`eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
directly, as `eslint.config.mjs` here does.

## 12. Grep traps when verifying the bundle

- A `<script src>` probe is a false negative on every Framer site, because
  Framer ships one bundle named `script_main.<hash>.mjs`. Scan file **content**,
  not filenames.
- Grepping a bundle for `ogl` returns hits inside the string `google`. Anchor
  every banned-library pattern on a word boundary or an import specifier.
  `scripts/check-banned-libs.mjs` does both.

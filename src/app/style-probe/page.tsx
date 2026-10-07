import { notFound } from "next/navigation";

/**
 * The token probe. NOT a page anyone visits.
 *
 * It renders one element per token carrying `data-probe="<token>"`, so a
 * headless run can read `getComputedStyle` at 390 and at 1440 and check the
 * fluid scale against HOUSE-STYLE sections 4 and 6 with real measured numbers
 * instead of by reading the stylesheet.
 *
 * WHY THIS EXISTS AT ALL: Tailwind v4 hoists an `@theme` block out of a
 * `@media` wrapper into `:root`. A previous build in this vault defined
 * `--spacing-gutter` as 16px inside a mobile media query and 24px outside, and
 * the desktop value won at every width. It read correctly in the source and
 * was wrong in the browser, twice. A token system you have not measured in a
 * browser is a token system you have not verified.
 *
 * ALSO: verify arbitrary and newly-used utility classes against a PRODUCTION
 * build. `next dev` can fail to emit a class that a production build emits.
 *
 * Enable with NEXT_PUBLIC_STYLE_PROBE=1. It 404s otherwise, including in
 * production, so it costs a client site nothing. Delete the folder if you
 * would rather it not exist at all.
 */

const ENABLED = process.env.NEXT_PUBLIC_STYLE_PROBE === "1";

const TYPE_TOKENS = [
  "text-micro",
  "text-small",
  "text-body",
  "text-lead",
  "text-h4",
  "text-h3",
  "text-h2",
  "text-h2-alt",
  "text-display",
  "text-lockup-sm",
  "text-lockup-lg",
] as const;

export default function StyleProbe() {
  if (!ENABLED) notFound();

  return (
    <main>
      {TYPE_TOKENS.map((token) => (
        <span key={token} data-probe={token} className={`${token} block`}>
          Hamburgefonstiv 0123
        </span>
      ))}

      {/* Padding-block so the measured value is the token itself, not a sum. */}
      <div data-probe="space-micro" className="pt-micro" />
      <div data-probe="space-layout" className="pt-layout" />
      <div data-probe="space-gutter" className="pt-gutter" />
      <div data-probe="space-section" className="pt-section" />

      {/* Gutter as horizontal padding, which is how Container actually uses it. */}
      <div data-probe="container" className="max-w-page px-gutter" />
      <div data-probe="measure" className="measure" />
      <div data-probe="radius-token" className="rounded-token" />
      <div data-probe="radius-pill" className="rounded-pill" />

      <div data-probe="color-ink" className="bg-ink" />
      <div data-probe="color-ink-64" className="bg-ink-64" />
      <div data-probe="color-ground" className="bg-ground" />
      <div data-probe="color-ground-alt" className="bg-ground-alt" />
      <div data-probe="color-ground-invert" className="bg-ground-invert" />
      <div data-probe="color-accent-lg" className="bg-accent-lg" />
      <div data-probe="color-accent-sm" className="bg-accent-sm" />
      <div data-probe="color-hairline" className="bg-hairline" />

      <div data-probe="ease-standard" className="ease-standard" />
      <div data-probe="ease-move" className="ease-move" />
    </main>
  );
}

/** Never index or prerender this into a sitemap. */
export const metadata = { robots: { index: false, follow: false } };

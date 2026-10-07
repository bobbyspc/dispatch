import { features } from "./pole";
import { siteConfig } from "../../site.config";
import { CHAR_SPLIT_MAX } from "./split-text";

/**
 * HOUSE-STYLE section 9. The loader.
 *
 * Professional pole only. Every number below is section 9.1's measurement, and
 * the two that are decisions rather than measurements say so.
 *
 * The whole timeline lives here so that a project tunes it in one file and a
 * component never carries a duration literal.
 */

/** 9.1. Per-unit entrance: translateX 40 to 50px -> 0 plus opacity 0 -> 1. */
export const LOADER_ENTRANCE_MS = 1200;
/** 9.1. The only measured letter stagger in the whole reference library. */
export const LOADER_STAGGER_MS = 50;
/** 9.1. The measured band is 40 to 50px. */
export const LOADER_ENTRANCE_X = 44;
/** 9.1. "~100ms, not a beat more." Fathom settles at 1574 and lifts at 1663. */
export const LOADER_HOLD_MS = 100;
/** 9.1. The scaleY curtain, collapsing upward. Never a fade. */
export const LOADER_EXIT_MS = 700;
/**
 * 9.1. The wordmark clears faster than the curtain: shorter duration over a
 * longer distance, so it is off screen before the reveal completes. Fathom
 * travels ~1573px in ~900ms against an 896ms curtain.
 */
export const LOADER_MARK_EXIT_MS = 550;
/** Travel for the mark exit. Over one viewport, so it clears at any height. */
export const LOADER_MARK_TRAVEL = "-115vh";

/**
 * THE FIXED FLOOR, and the one number here that is a decision rather than a
 * measurement.
 *
 * 9.2 is absolute: the total is fixed and never load-gated. But the entrance
 * length depends on how many units the wordmark splits into
 * (LOADER_ENTRANCE_MS + (units - 1) * LOADER_STAGGER_MS), so a two-word mark
 * and a twelve-letter mark would otherwise ship different totals. This floor
 * holds the curtain until a fixed moment, which makes the total a property of
 * the site rather than of the brand name's length.
 *
 * The slack lands in the hold, not in a pre-roll. A mark that writes on and
 * then sits reads as a brand held for a beat; a blank ink screen that sits and
 * then writes on reads as a stall. For a wordmark of ~22 units the two meet and
 * the hold is exactly the measured 100ms.
 *
 * The value is tuned against gate G43, which measures from the curtain's first
 * sighting to the moment it stops covering 90% of the viewport (not to the
 * moment it is fully gone). See README, "The loader".
 */
export const LOADER_MIN_CURTAIN_START_MS = 2350;

/** sessionStorage key. 9.3: first visit per session only. */
export const LOADER_SESSION_KEY = "op:loader-seen";

/** Whether this build ships a loader at all. Pole-gated in site.config.ts. */
export const loaderEnabled: boolean = features.loader;

/** 8.7: character splitting is for a display lockup of 15 units or fewer. */
export const loaderSplitMode: "char" | "word" =
  siteConfig.name.length <= CHAR_SPLIT_MAX ? "char" : "word";

/** Entrance length for a given unit count, in ms. */
export function loaderEntranceEndMs(units: number): number {
  return LOADER_ENTRANCE_MS + Math.max(0, units - 1) * LOADER_STAGGER_MS;
}

/** The fixed moment the curtain begins to clear. */
export function loaderCurtainStartMs(units: number): number {
  return Math.max(loaderEntranceEndMs(units) + LOADER_HOLD_MS, LOADER_MIN_CURTAIN_START_MS);
}

/** The moment the curtain is completely gone and the loader unmounts. */
export function loaderTotalMs(units: number): number {
  return loaderCurtainStartMs(units) + LOADER_EXIT_MS;
}

/**
 * 9.1, the handoff: "the hero's own entrance starts BEFORE the curtain
 * finishes, so there is never a bare frame." Fathom animates its hero at
 * 2400 / 2650 / 2750ms against a curtain that ends at 2559.
 *
 * LEAD is measured from the start of the collapse and is deliberately less
 * than LOADER_EXIT_MS, so step 0 always begins while the curtain is still
 * moving. Later steps landing after the curtain end is correct and matches
 * fathom.
 */
const LOADER_HANDOFF_LEAD_MS = 210;
const LOADER_HANDOFF_STEP_MS = 250;

/**
 * Delay in SECONDS for the nth element of the hero's own entrance. Returns 0
 * when this build has no loader, so a page never branches on the flag itself.
 *
 * Uses the floor rather than the wordmark's real unit count, because the hero
 * is server-rendered and must not depend on a client-side measurement.
 */
export function heroDelay(step = 0): number {
  if (!loaderEnabled) return 0;
  return (
    (LOADER_MIN_CURTAIN_START_MS + LOADER_HANDOFF_LEAD_MS + step * LOADER_HANDOFF_STEP_MS) / 1000
  );
}

/**
 * The pre-paint boot script. Runs synchronously as the first thing in <body>,
 * before the curtain markup below it is parsed, so a repeat visit never paints
 * a frame of curtain.
 *
 * THIS IS THE ANSWER TO "sessionStorage IS NOT READABLE DURING SSR".
 * The curtain is ALWAYS server-rendered, on every load, so React's server and
 * client trees are byte-identical and there is no hydration mismatch to
 * reconcile. The skip decision is made outside React entirely: this script sets
 * an attribute on <html>, and one CSS rule in globals.css turns that attribute
 * into `display: none` before the first paint. React never learns the visit is
 * a repeat until its effect runs, at which point it simply unmounts a subtree
 * that was never visible.
 *
 * It also handles `prefers-reduced-motion` the same way, so a reduced-motion
 * visitor never gets a curtain even for one frame, with no JavaScript in the
 * React tree involved.
 *
 * Cost of the tradeoff: the curtain markup (a few hundred bytes) ships in the
 * HTML on a skipped load and is never painted. That is the price of a
 * server-rendered first paint, and it is the right side of the trade: the
 * alternative (mount the loader client-side after hydration) shows the real
 * page first and then covers it, which is worse than shipping no loader.
 *
 * If sessionStorage throws (Safari private mode, storage blocked), the loader
 * plays on every load rather than never playing. A visible loader is a smaller
 * failure than a page stuck behind a curtain.
 */
export const LOADER_BOOT_SCRIPT = `(function(){try{
var d=document.documentElement,k=${JSON.stringify(LOADER_SESSION_KEY)};
var m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(m||sessionStorage.getItem(k)){d.setAttribute("data-loader-skip","");return;}
sessionStorage.setItem(k,"1");d.setAttribute("data-loader-active","");
}catch(e){}})();`.replace(/\n/g, "");

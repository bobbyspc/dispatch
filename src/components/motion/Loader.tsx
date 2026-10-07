"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { siteConfig } from "../../../site.config";
import { EASE_MOVE, EASE_OVERSHOOT, EASE_STANDARD } from "@/lib/motion";
import { splitText } from "@/lib/split-text";
import {
  LOADER_ENTRANCE_MS,
  LOADER_ENTRANCE_X,
  LOADER_EXIT_MS,
  LOADER_MARK_EXIT_MS,
  LOADER_MARK_TRAVEL,
  LOADER_STAGGER_MS,
  loaderCurtainStartMs,
  loaderEnabled,
  loaderSplitMode,
  loaderTotalMs,
} from "@/lib/loader";

/**
 * HOUSE-STYLE section 9. The loader, and the only one.
 *
 * The site's ink as the ground, the wordmark in the display face in the site's
 * ground colour, and nothing else. No spinner, no percentage counter, no logo
 * animation library. "If someone screenshots the loader they should be able to
 * name the brand."
 *
 * Professional pole only. `site.config.ts` refuses `features.loader` on the
 * trendy pole at module load (src/lib/pole.ts), and this component returns null
 * when the flag is off, so a trendy build ships no curtain markup at all. That
 * is gate G44.
 *
 * TIMELINE (9.1, every number in src/lib/loader.ts):
 *   per-unit entrance   translateX 44px -> 0 + opacity 0 -> 1, 1200ms, 50ms stagger
 *   hold                the curtain sits until the fixed floor
 *   exit                scaleY 1 -> 0 from the top edge, 700ms. Never a fade.
 *   mark exit           -115vh in 550ms, concurrent with the curtain and faster
 *   total               FIXED. Never gated on load, never on a counter (9.2).
 *
 * STRUCTURE, and it is not arbitrary. The root is transparent and holds two
 * fixed siblings: the curtain, and the mark. They are siblings rather than
 * parent and child because a mark nested inside the collapsing curtain would be
 * squashed by its parent's scaleY, and section 9 wants the mark translating
 * cleanly out of frame while the curtain collapses under it.
 *
 * REDUCED MOTION (8.8): the loader is skipped entirely, not softened. Three
 * independent layers, because a curtain that fails to lift is a page nobody can
 * read:
 *   1. the boot script in the root layout sets `data-loader-skip` on <html>
 *      before first paint when the OS asks for reduced motion;
 *   2. one CSS rule in globals.css hides the curtain on that attribute, and a
 *      second hides it inside `@media (prefers-reduced-motion: reduce)` with no
 *      JavaScript involved at all;
 *   3. this component unmounts itself on its first effect.
 * Note the trap: <MotionConfig reducedMotion="user"> DISABLES transform
 * animations, so under reduced motion the scaleY exit would never run and the
 * curtain would sit there forever. That is exactly why the answer is "do not
 * mount", not "animate it more gently".
 *
 * It also does NOT register against the motion budget (8.1). fathom ships a
 * loader and two named behaviours; the loader is section 9, not one of section
 * 8.4's five.
 */
export function Loader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  // The units are derived from the brand name, identically on server and
  // client, so the markup matches and hydration has nothing to reconcile.
  const units = loaderEnabled ? splitText(siteConfig.name, loaderSplitMode) : [];
  const curtainStart = loaderCurtainStartMs(units.length) / 1000;
  const total = loaderTotalMs(units.length);

  useEffect(() => {
    if (!loaderEnabled) return;
    const html = document.documentElement;
    // The boot script has already decided. On a repeat visit or under reduced
    // motion the curtain is display:none and has never been painted, so the
    // subtree is dropped on the next tick.
    //
    // Otherwise this is the safety net: if motion never fires
    // onAnimationComplete (a thrown error, a tab backgrounded through the whole
    // sequence), the page must still come back. A curtain that never lifts is
    // the worst failure this file has.
    const skip = reduced || html.hasAttribute("data-loader-skip");
    const finish = () => {
      html.removeAttribute("data-loader-active");
      setDone(true);
    };
    const id = window.setTimeout(finish, skip ? 0 : total + 1500);
    return () => window.clearTimeout(id);
  }, [reduced, total]);

  if (!loaderEnabled || done) return null;

  return (
    <div className="site-loader" data-loader="" aria-hidden="true">
      <motion.div
        className="site-loader__curtain"
        style={{ originY: 0 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: LOADER_EXIT_MS / 1000,
          delay: curtainStart,
          // 8.3: a large panel transform takes the standard curve. EASE_MOVE
          // starts almost instantly, which is right for the mark and wrong for
          // the reveal: the curtain should look like it was released, not
          // like it was deleted.
          ease: EASE_STANDARD,
        }}
        onAnimationComplete={() => {
          document.documentElement.removeAttribute("data-loader-active");
          setDone(true);
        }}
      />
      <motion.div
        className="site-loader__mark"
        initial={{ y: "0vh" }}
        animate={{ y: LOADER_MARK_TRAVEL }}
        transition={{
          duration: LOADER_MARK_EXIT_MS / 1000,
          delay: curtainStart,
          ease: EASE_MOVE,
        }}
      >
        <span className="site-loader__word" aria-label={siteConfig.name}>
          {units.map((unit, i) => (
            <motion.span
              key={`${unit}-${i}`}
              initial={{ opacity: 0, x: LOADER_ENTRANCE_X }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: LOADER_ENTRANCE_MS / 1000,
                delay: (i * LOADER_STAGGER_MS) / 1000,
                // 9.1's measured curve, a slight overshoot at both ends.
                ease: EASE_OVERSHOOT,
              }}
              // A transform on an inline element does nothing, and spaces
              // survive with `white-space: pre` rather than an entity (8.7).
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {unit}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </div>
  );
}

export default Loader;

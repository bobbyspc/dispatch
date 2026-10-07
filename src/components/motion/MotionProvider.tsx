"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * HOUSE-STYLE 8.8. Reduced motion is wired in by DEFAULT, not opt-in.
 *
 * `reducedMotion="user"` makes motion respect the OS setting for every
 * transform and layout animation in the tree without a single call site
 * knowing about it. Opacity survives, which is what 8.8 wants for the hero
 * fade and the colour transitions.
 *
 * It is not the whole answer on its own. The scroll reveal must render at its
 * FINAL state rather than at reduced amplitude, and scroll-linked and
 * pointer-linked geometry must be off entirely, so <Reveal> and any
 * scroll-driven component also read useReducedMotion() directly. The CSS half
 * lives in globals.css.
 *
 * This is mounted in the root layout. Do not remove it to "fix" an animation.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default MotionProvider;

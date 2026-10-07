"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ElementType, type ReactNode, useEffect } from "react";
import { delayed, reveal, revealEditorial, VIEWPORT } from "@/lib/motion";
import { registerBehaviour } from "@/lib/motion-budget";
import { cn } from "@/lib/utils";

/**
 * `motion.create()` returns a NEW component every call, so calling it during
 * render remounts the subtree on every parent render and the reveal replays.
 * Cache per tag at module scope.
 */
const cache = new Map<ElementType, ElementType>();
function motionTag(tag: ElementType): ElementType {
  const hit = cache.get(tag);
  if (hit) return hit;
  const made = motion.create(tag as string) as unknown as ElementType;
  cache.set(tag, made);
  return made;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Render as something other than a div. Pass "h2", "p", "li", "section". */
  as?: "div" | "section" | "h2" | "h3" | "p" | "li" | "span" | "ul" | "figure";
  /**
   * Editorial variant: 60px / 1200ms (lexedge's numbers). Use ONLY on a slow,
   * trust-led site. The default 700ms/24px is the fast end of the measured
   * band and a lead-gen page cannot afford the slow one (HOUSE-STYLE 8.2).
   */
  editorial?: boolean;
  /**
   * Set when this Reveal is a direct child of <Stagger>. The parent then owns
   * `initial`/`whileInView` and this one only supplies its variants, which is
   * the only way `staggerChildren` actually staggers.
   */
  inStagger?: boolean;
  /**
   * Start delay in SECONDS. Its one legitimate use is the loader handoff
   * (HOUSE-STYLE 9.1): the hero's entrance must begin before the curtain
   * finishes. Pass `heroDelay(n)` from `@/lib/loader`, which returns 0 when the
   * build has no loader, so the page never branches on the feature flag.
   * Ignored under reduced motion, where the reveal is off entirely.
   */
  delay?: number;
};

/**
 * HOUSE-STYLE 8.2. The scroll reveal, and the only one.
 *
 * opacity 0 -> 1 plus translateY 24px -> 0, 700ms, viewport-once. There is no
 * third property. If you want scale, blur, rotate or clip, the answer is no:
 * three measured professional sites, one praised for its motion, and all three
 * ship opacity plus Y.
 *
 * REDUCED MOTION (8.8): the reveal is OFF, not softened. The subtree renders
 * at its final state with no animation at all, which is why this reads
 * useReducedMotion() rather than relying on <MotionConfig> alone: MotionConfig
 * would still run the opacity half.
 *
 * MEASURED GOTCHA, and the reason this stays a motion element in BOTH branches:
 * the obvious implementation returns a PLAIN <h2> when reduced motion is on.
 * That ships content that is permanently invisible. The server renders
 * `style="opacity:0;transform:translateY(24px)"` (the server cannot know the
 * user's motion preference), and React hydration does NOT remove a DOM
 * attribute the client vnode simply omits, so the plain element inherits the
 * hidden style and nothing ever clears it. Verified in a production build under
 * `prefers-reduced-motion: reduce`: opacity stayed 0 after a full scroll
 * through, while the same element reached opacity 1 without the flag.
 *
 * Keeping it a motion element means motion owns the style attribute and
 * rewrites it on the first client render. `[data-reveal]` plus the
 * reduced-motion rule in globals.css is the belt-and-braces half that covers
 * the pre-hydration frame with no JS at all.
 */
export function Reveal({
  children,
  className,
  as = "div",
  editorial = false,
  inStagger = false,
  delay = 0,
}: RevealProps) {
  const reduced = useReducedMotion();
  useEffect(() => registerBehaviour("reveal"), []);

  const variants = delayed(editorial ? revealEditorial : reveal, delay);
  const MotionTag = motionTag(as) as ElementType;

  if (reduced) {
    return (
      <MotionTag
        data-reveal=""
        className={cn(className)}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {children}
      </MotionTag>
    );
  }

  if (inStagger) {
    return (
      <MotionTag data-reveal="" className={cn(className)} variants={variants}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;

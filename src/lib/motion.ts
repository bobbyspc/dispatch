import type { Transition, Variants } from "motion/react";

/**
 * The house motion vocabulary. HOUSE-STYLE sections 2.16, 8.2 and 8.3.
 *
 * Every duration and curve here is measured. Do not invent a third easing and
 * do not round a duration "because it feels better": the whole point of the
 * two-curve system is that colour eases symmetrically and movement snaps out,
 * and a hover then feels responsive rather than laggy.
 */

/** 2.16. Colour and state. Tailwind's unmodified ease-in-out, so it costs nothing. */
export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;
/** 2.16. Movement. A hard ease-out that starts almost instantly. */
export const EASE_MOVE = [0.96, 0, 0.38, 1] as const;
/** 9.1. Loader entrance only. A slight overshoot at both ends. */
export const EASE_OVERSHOOT = [0.96, -0.02, 0.38, 1.01] as const;
/**
 * 8.2. The reveal's own curve, measured on the professional pole. Symmetric
 * ease-in-out. Kept distinct from EASE_STANDARD because it is a different
 * measurement that happens to land nearby, not the same one.
 */
export const EASE_REVEAL = [0.44, 0, 0.56, 1] as const;

/** 8.3, verbatim. Pointer tracking is `linear` and that is not a mistake:
 *  an eased pointer follow lags at exactly the moment the user expects it
 *  under their finger. */
export const DURATION = {
  /** Pointer tracking (cursor follow, distance-driven scale). */
  pointer: 0.1,
  /** UI feedback: nav item, pill, small hover. */
  ui: 0.18,
  /** Colour, background, card hover, palette swap. */
  colour: 0.3,
  /** Large transform: drawer, header hide, panel. */
  panel: 0.5,
  /** Transform on a component (professional). */
  transform: 0.6,
  /** The scroll reveal (8.2). */
  reveal: 0.7,
  /** Hero opacity on first paint (trendy, 3.1). */
  heroFade: 1,
} as const;

export const TRANSITION = {
  pointer: { duration: DURATION.pointer, ease: "linear" } as Transition,
  ui: { duration: DURATION.ui, ease: EASE_STANDARD } as Transition,
  colour: { duration: DURATION.colour, ease: EASE_STANDARD } as Transition,
  panel: { duration: DURATION.panel, ease: EASE_STANDARD } as Transition,
  transform: { duration: DURATION.transform, ease: EASE_MOVE } as Transition,
  reveal: { duration: DURATION.reveal, ease: EASE_REVEAL } as Transition,
  heroFade: { duration: DURATION.heroFade, ease: EASE_STANDARD } as Transition,
} as const;

/**
 * 8.2. THE scroll reveal. The only reveal measured anywhere in the reference
 * library, and both poles ship it identically.
 *
 * opacity 0 -> 1 plus translateY 24px -> 0. 700ms. 100ms stagger between
 * siblings. THERE IS NO THIRD PROPERTY: not scale, not blur, not rotate, not
 * clip. Three measured professional sites, one praised for its motion, and the
 * reveal is opacity plus Y on all three.
 *
 * The measured band is roofit 40px/716ms, lexedge 60px/1200ms, fathom
 * 16-24px/1215ms. 700ms at 24px is the fast end, chosen because 1200ms at 60px
 * is noticeably slow on a second visit and a lead-gen page cannot afford it.
 * Use REVEAL_EDITORIAL for a slow, trust-led site.
 */
export const REVEAL_Y = 24;
export const REVEAL_Y_EDITORIAL = 60;
export const STAGGER = 0.1;

export const reveal: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  show: { opacity: 1, y: 0, transition: TRANSITION.reveal },
};

export const revealEditorial: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y_EDITORIAL },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASE_REVEAL },
  },
};

/** The stagger parent. `staggerChildren` only fires on children that carry
 *  their own variants, which is what <Reveal> gives them. */
export const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER } },
};

/**
 * Return a copy of a reveal variant with a start delay, in seconds.
 *
 * Exists for HOUSE-STYLE 9.1's handoff: the hero's own entrance has to begin
 * BEFORE the loader's curtain finishes, so there is never a bare frame. The
 * delay has to go inside the variant's own `transition`, because a variant's
 * transition wins over one passed on the element.
 *
 * Do not use this to stagger a group by hand. That is what <Stagger> is for.
 */
export function delayed(variants: Variants, delay: number): Variants {
  if (!delay) return variants;
  const show = variants.show as { transition?: Transition } & Record<string, unknown>;
  return {
    ...variants,
    show: { ...show, transition: { ...(show.transition ?? {}), delay } },
  };
}

/** 8.2. `once: true` always. A reveal that replays on scroll-up is a bug. */
export const VIEWPORT = { once: true, amount: 0.25 } as const;

/**
 * 8.2, the one trendy deviation the measurements support: a scale that
 * approaches 1.0 ON IMAGES ONLY. Never on type, never on panels.
 * zara-miller's images sit at 0.936x to 0.977x at rest and approach 1.0 at
 * viewport centre. The input range, output range and easing of that mapping
 * were NOT extracted from the source; they live in its JS bundle. These are
 * derived to fit the measured rest values, and they are stated as derived.
 */
export const GROW_SCALE_FROM = 0.94;
export const GROW_SCALE_TO = 1;
export const GROW_OFFSET = ["start end", "center center"] as const;

"use client";

import { motion, useReducedMotion } from "motion/react";
import { reveal, VIEWPORT, STAGGER } from "@/lib/motion";
import { splitText, type SplitMode } from "@/lib/split-text";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  /** "word" is the default. "char" is only for a display lockup <= 15 chars. */
  mode?: SplitMode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Per-unit stagger. Defaults to the house 100ms. The loader uses 50ms (9.1). */
  stagger?: number;
};

/**
 * HOUSE-STYLE 8.7. Renders `text` as animatable units.
 *
 * The accessibility half is the part people skip: the full string goes on the
 * parent as `aria-label` and every span is `aria-hidden`, or a screen reader
 * reads the headline one letter at a time.
 *
 * studiothink and zara-miller both split their display headline per character,
 * which implies a per-character reveal, but NEITHER animation was captured, so
 * the stagger and duration for a hero split are unknown. This uses the house
 * reveal and the house 100ms. The only measured letter stagger in the whole
 * library is 50ms and it comes from a loader, not a hero (9.1).
 */
export function SplitText({
  text,
  className,
  mode = "word",
  as = "span",
  stagger = STAGGER,
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const units = splitText(text, mode);

  const MotionTag =
    as === "h1"
      ? motion.h1
      : as === "h2"
        ? motion.h2
        : as === "h3"
          ? motion.h3
          : as === "p"
            ? motion.p
            : motion.span;

  // 8.8: a split reveal IS a scroll reveal, so it is off entirely under reduced
  // motion. It stays a motion element rather than becoming plain text, because
  // swapping element identity strands the server-rendered inline style on the
  // spans and the headline never appears. See the note in Reveal.tsx.
  return (
    <MotionTag
      className={cn(className)}
      aria-label={text}
      variants={reduced ? undefined : { hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={VIEWPORT}
    >
      {units.map((unit, i) => (
        <motion.span
          key={`${unit}-${i}`}
          aria-hidden="true"
          data-reveal=""
          variants={reduced ? undefined : reveal}
          initial={reduced ? false : undefined}
          animate={reduced ? { opacity: 1, y: 0 } : undefined}
          transition={reduced ? { duration: 0 } : undefined}
          // A transform on an inline element does nothing, hence inline-block.
          // Spaces survive via `white-space: pre`, not via &nbsp;, so the copy
          // stays selectable and the aria-label reads normally.
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {unit}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export default SplitText;

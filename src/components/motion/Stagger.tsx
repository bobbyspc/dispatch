"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { group, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
  /** Override the 100ms sibling stagger. Do this only with a reason. */
  delay?: number;
};

/**
 * HOUSE-STYLE 8.2. The stagger parent: 100ms between siblings.
 *
 * Wrap a row or grid in <Stagger> and give each child <Reveal inStagger>.
 * The `inStagger` flag matters: `staggerChildren` only drives children that
 * inherit the parent's animation state, so a child carrying its own
 * `whileInView` opts itself out and every item fires at once. That failure
 * looks like "the stagger isn't working" and is actually two independent
 * animations.
 *
 * Under reduced motion this renders as a plain element (8.8).
 */
export function Stagger({ children, className, as = "div", delay }: StaggerProps) {
  const reduced = useReducedMotion();

  const variants =
    delay === undefined ? group : { hidden: {}, show: { transition: { staggerChildren: delay } } };

  const MotionTag =
    as === "ul" ? motion.ul : as === "ol" ? motion.ol : as === "section" ? motion.section : motion.div;

  // Stays a motion element under reduced motion for the same reason <Reveal>
  // does: swapping to a plain element strands the server-rendered inline style.
  if (reduced) {
    return (
      <MotionTag data-reveal-group="" className={cn(className)} initial={false}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      data-reveal-group=""
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

export default Stagger;

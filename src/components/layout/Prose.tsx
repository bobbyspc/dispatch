import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * HOUSE-STYLE 6.4 / gate G20. The cheapest rule in the document.
 *
 * Cap every paragraph column at the pole's measure (680px professional,
 * 800px trendy) regardless of how wide the container is.
 *
 * LexEdge runs 1376 of a 1440 viewport and still reads uncluttered, because
 * every paragraph is capped at 414 to 445px. That single cap is doing more
 * work than the section padding is. It costs one utility class, it cannot be
 * got wrong by a builder agent, and it survives every other decision on the
 * page.
 *
 * The `measure` utility is defined in globals.css and resolves per pole, so
 * this is one class and not a number anyone can typo.
 */
export function Prose({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "p" | "section" | "article";
}) {
  const Tag = as;
  return <Tag className={cn("measure", className)}>{children}</Tag>;
}

export default Prose;

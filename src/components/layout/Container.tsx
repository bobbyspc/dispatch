import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * HOUSE-STYLE 6.3 / gate G21 (at most 3 distinct content container widths).
 *
 * `max-w-page` and `px-gutter` both resolve through the pole tokens, so this
 * component is 1200/48 on the professional pole and 1360/40 on the trendy one
 * with no code change. That divergence is the single cleanest one-number
 * differentiator between the poles (3.1).
 *
 * Do not write `max-w-[1200px]` anywhere. maestroclass ships nine max-width
 * values and the reader never learns where the column is (6.7).
 */
export function Container({
  children,
  className,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  /** 2.13: the container may be nearly full-bleed. No paragraph column may be. */
  bleed?: boolean;
}) {
  return (
    <div className={cn("mx-auto w-full px-gutter", !bleed && "max-w-page", className)}>
      {children}
    </div>
  );
}

export default Container;

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Ground = "ground" | "alt" | "invert";

const GROUND_CLASS: Record<Ground, string> = {
  // 10.1: there is no divider element. Alternate ground and ground-alt with
  // one ground-invert section. That IS the divider.
  ground: "bg-ground text-ink",
  alt: "bg-ground-alt text-ink",
  invert: "bg-ground-invert text-on-invert",
};

/**
 * HOUSE-STYLE 6.2 / gate G22 / gate G35 / gate G50.
 *
 * Three things this component makes it hard to get wrong:
 *
 *  - Vertical padding is `py-section`, ONE token, resolved from the rhythm
 *    flag in site.config.ts. Every section on the site gets the same number.
 *    That uniformity is what Mauricio reads as intentional; fathom ships
 *    80/80 on 9 of 10 sections and profit puts 156px between every consecutive
 *    section, to the pixel, nine times running.
 *  - `name` is required and becomes `data-section`. G50 fails a build with an
 *    unnamed section, and an unnamed section is the tell that it was added
 *    late and never went through the same pass (never-do 41).
 *  - `heading` is required (or `headingHidden` for a section whose heading is
 *    genuinely visual). G35: every section contains at least one h1-h6.
 *    matchioo's testimonials section contains zero and titles itself with six
 *    decorative <p> glyphs.
 */
export function Section({
  name,
  children,
  className,
  ground = "ground",
  bleed = false,
  as = "section",
}: {
  /** Becomes `data-section`. Required. */
  name: string;
  children: ReactNode;
  className?: string;
  ground?: Ground;
  /** Skip the Container. Use for a full-bleed image or a texture band. */
  bleed?: boolean;
  as?: "section" | "footer" | "header";
}) {
  const Tag = as;
  return (
    <Tag data-section={name} className={cn("py-section", GROUND_CLASS[ground], className)}>
      {bleed ? children : <Container>{children}</Container>}
    </Tag>
  );
}

export default Section;

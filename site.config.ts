/**
 * THE flag file.
 *
 * This is the only place a One Panel build declares which expression of the
 * house style it is. Everything downstream (container width, page gutter, prose
 * measure, display size, section rhythm, radius, motion budget, whether a
 * loader / texture / custom cursor is even legal) is derived from these values.
 *
 * Do not read `pole` inside a component. Read the derived helpers in
 * `src/lib/pole.ts`, or better, use the CSS tokens, which already resolve.
 *
 * Changing the pole is a one-line edit here. It must never require touching
 * component code. If you find yourself writing `pole === "trendy" ? a : b`
 * inside a component, the token layer is missing a token: add it to
 * `src/app/globals.css` instead.
 */

export type Pole = "professional" | "trendy";

/**
 * Section rhythm. One vertical section padding value for the whole site
 * (HOUSE-STYLE 6.2). This picks which one.
 *
 *  tight   -> 64px  lead-gen / conversion site (professional only)
 *  default -> 80px  the default, both poles
 *  air     -> 120px professional editorial, 160px trendy air-led
 */
export type Rhythm = "tight" | "default" | "air";

export interface SiteConfig {
  /** Brand name. Used in metadata and the footer wordmark. */
  name: string;
  /** Absolute production URL, no trailing slash. Used by metadataBase. */
  url: string;
  description: string;

  /** HOUSE-STYLE section 3. The single flag. */
  pole: Pole;
  /** HOUSE-STYLE section 6.2. */
  rhythm: Rhythm;

  /**
   * Opt-ins that are only legal on one pole. `src/lib/pole.ts` refuses the
   * illegal combinations at module load, so a mis-set flag fails the build
   * rather than shipping.
   */
  features: {
    /** Professional only (HOUSE-STYLE 9). ~2.5s fixed curtain. */
    loader: boolean;
    /** Trendy only (HOUSE-STYLE 11). One drawn grid behind the whole page. */
    texture: boolean;
    /** Trendy only (HOUSE-STYLE 3.1). Desktop and `pointer: fine` gated. */
    customCursor: boolean;
    /** Trendy only (HOUSE-STYLE 6.6). 4 to 20px, one value site-wide. */
    insetFrame: boolean;
    /** Trendy only (HOUSE-STYLE 12). Never in the base bundle. See docs/3D.md. */
    threeD: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "PLACEHOLDER Client",
  url: "https://example.com",
  description: "PLACEHOLDER. Replace before the first build that anyone sees.",

  pole: "professional",
  rhythm: "default",

  features: {
    loader: true,
    texture: false,
    customCursor: false,
    insetFrame: false,
    threeD: false,
  },
};

export default siteConfig;

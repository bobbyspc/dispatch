import { siteConfig, type Pole, type Rhythm } from "../../site.config";

/**
 * Everything derived from the pole flag, in one place.
 *
 * Components import from here, never from site.config directly, and never
 * branch on the pole themselves. If a component needs a per-pole value that is
 * not here and not a CSS token, add it here or add a token. Do not add a
 * ternary to the component.
 *
 * HOUSE-STYLE section 3.1 is the source for every number.
 */

export interface PoleRules {
  /** Named motion behaviours permitted on one page (8.1 / G36). */
  motionBudget: number;
  /** Elements moving in one viewport at one time (8.1 / G37). */
  simultaneityBudget: number;
  /** Prose measure cap in px. Mirrors --w-measure; here for JS-side asserts. */
  measurePx: number;
  /** Container width at 1440 in px. Mirrors --w-container. */
  containerPx: number;
  /** Which features are legal at all on this pole. */
  allows: {
    loader: boolean;
    texture: boolean;
    customCursor: boolean;
    insetFrame: boolean;
    threeD: boolean;
  };
}

const RULES: Record<Pole, PoleRules> = {
  professional: {
    motionBudget: 2,
    simultaneityBudget: 1,
    measurePx: 680,
    containerPx: 1200,
    allows: {
      loader: true,
      texture: false,
      customCursor: false,
      insetFrame: false,
      threeD: false,
    },
  },
  trendy: {
    motionBudget: 5,
    simultaneityBudget: 2,
    measurePx: 800,
    containerPx: 1360,
    allows: {
      loader: false,
      texture: true,
      customCursor: true,
      insetFrame: true,
      threeD: true,
    },
  },
};

export const pole: Pole = siteConfig.pole;
export const rhythm: Rhythm = siteConfig.rhythm;
export const poleRules: PoleRules = RULES[pole];

/**
 * Refuse an illegal combination at module load rather than letting it ship.
 * `next build` evaluates this while rendering, so a trendy loader or a
 * professional custom cursor fails the build with a named reason.
 */
function assertLegalFeatures(): void {
  const illegal = (Object.keys(siteConfig.features) as Array<keyof PoleRules["allows"]>).filter(
    (key) => siteConfig.features[key] && !poleRules.allows[key],
  );
  if (illegal.length > 0) {
    throw new Error(
      `site.config.ts: features [${illegal.join(", ")}] are not legal on the "${pole}" pole. ` +
        `See HOUSE-STYLE.md section 3.1. Either change the pole or drop the feature; ` +
        `do not special-case it in a component.`,
    );
  }
  // 6.2: `tight` is roofit's lead-gen number and a professional value.
  if (rhythm === "tight" && pole === "trendy") {
    throw new Error(
      `site.config.ts: rhythm "tight" is a professional lead-gen value (HOUSE-STYLE 6.2). ` +
        `On the trendy pole use "default" (80px) or "air" (160px).`,
    );
  }
}

assertLegalFeatures();

export const features = siteConfig.features;

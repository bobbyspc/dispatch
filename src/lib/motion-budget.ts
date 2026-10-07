import { poleRules, pole } from "./pole";

/**
 * HOUSE-STYLE 8.1 / gate G36. The motion budget, enforced at dev time.
 *
 * G36 is described in the house style as "manual count against section 8.4,
 * declared in the build's own README". A manual count nobody runs is not a
 * gate, so every named behaviour registers itself here on first mount and the
 * dev console names the overflow the moment it happens.
 *
 * This is deliberately dev-only and non-fatal. A hard throw at runtime would
 * turn a style violation into a broken client site, which is worse.
 */

const registered = new Set<string>();

/** The behaviours named in HOUSE-STYLE 8.4, plus the reveal from 8.2. */
export type NamedBehaviour =
  | "reveal"
  | "hover"
  | "fan"
  | "squash"
  | "pile"
  | "ribbon"
  | "slide"
  | "roll"
  | "swap"
  | "follow"
  | "grow"
  | "pin"
  | "loader"
  | "hero-fade"
  | "3d";

export function registerBehaviour(name: NamedBehaviour): void {
  if (process.env.NODE_ENV === "production") return;
  if (registered.has(name)) return;
  registered.add(name);
  if (registered.size > poleRules.motionBudget) {
    console.warn(
      `[house-style] Motion budget exceeded on the "${pole}" pole: ` +
        `${registered.size} named behaviours (${[...registered].join(", ")}), ` +
        `budget is ${poleRules.motionBudget} (HOUSE-STYLE 8.1, gate G36). ` +
        `Remove one before shipping.`,
    );
  }
}

export function registeredBehaviours(): NamedBehaviour[] {
  return [...registered] as NamedBehaviour[];
}

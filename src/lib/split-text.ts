/**
 * HOUSE-STYLE 8.7. The text-splitting helper.
 *
 * NOT a dependency. Splitting.js is absent from all eleven liked sites and
 * `splitting` is on the banned list checked by G39, so this is the local
 * ~30-line answer.
 *
 * Three requirements, all of them things a naive split gets wrong:
 *  - Split on GRAPHEME CLUSTERS via Intl.Segmenter, not `.split("")`. A
 *    `.split("")` cuts emoji in half and detaches combining marks.
 *  - Word-splitting is the default. Character-splitting is only for a display
 *    lockup of 15 characters or fewer.
 *  - Spaces are preserved with `white-space: pre` on the span, not with a
 *    non-breaking space entity, so the copy stays copy-pasteable and a screen
 *    reader reading the parent's aria-label gets real spaces.
 */

export type SplitMode = "word" | "char";

/** Character splitting above this length is a mistake (8.7). */
export const CHAR_SPLIT_MAX = 15;

function segment(text: string, granularity: "word" | "grapheme"): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new Intl.Segmenter(undefined, { granularity });
    return Array.from(seg.segment(text), (s) => s.segment);
  }
  // Intl.Segmenter is in every browser we support; this is the SSR/older-node
  // path only. Word granularity degrades to a space split that keeps spaces.
  return granularity === "grapheme" ? Array.from(text) : text.split(/(\s+)/).filter(Boolean);
}

/**
 * Returns the units to render. Each unit is a string; render it in a
 * `<span style={{ display: "inline-block", whiteSpace: "pre" }}>`, because a
 * transform on an inline element does nothing.
 */
export function splitText(text: string, mode: SplitMode = "word"): string[] {
  if (mode === "char") {
    if (text.length > CHAR_SPLIT_MAX) {
      throw new Error(
        `splitText: character splitting is only for a display lockup of ${CHAR_SPLIT_MAX} ` +
          `characters or fewer (HOUSE-STYLE 8.7). Got ${text.length}. Use mode "word".`,
      );
    }
    return segment(text, "grapheme");
  }
  return segment(text, "word");
}

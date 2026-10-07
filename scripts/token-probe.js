/**
 * The JS half of the token measurement. Feed it to the vault's headless-Chrome
 * runner against a PRODUCTION build serving /style-probe:
 *
 *   NEXT_PUBLIC_STYLE_PROBE=1 npx next build
 *   npx next start -p 3311
 *   py <vault>/scripts/cdp-eval.py --url http://localhost:3311/style-probe \
 *      --width 1440 --js-file scripts/token-probe.js --json
 *   py <vault>/scripts/cdp-eval.py --url http://localhost:3311/style-probe \
 *      --width 390  --js-file scripts/token-probe.js --json
 *
 * Do NOT pass --mobile for the 390 run. Device emulation makes
 * window.innerWidth report the visual viewport while the layout viewport is
 * still 390, so the width readout looks wrong when the tokens are fine.
 */
(() => {
  const out = {
    width: window.innerWidth,
    pole: document.documentElement.dataset.pole,
    rhythm: document.documentElement.dataset.rhythm,
    tokens: {},
  };
  document.querySelectorAll("[data-probe]").forEach((el) => {
    const k = el.getAttribute("data-probe");
    const cs = getComputedStyle(el);
    if (k.startsWith("text-")) {
      out.tokens[k] = {
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
      };
    } else if (k.startsWith("space-")) {
      out.tokens[k] = { paddingTop: cs.paddingTop };
    } else if (k === "container") {
      out.tokens[k] = { maxWidth: cs.maxWidth, paddingLeft: cs.paddingLeft };
    } else if (k === "measure") {
      out.tokens[k] = { maxWidth: cs.maxWidth };
    } else if (k.startsWith("radius-")) {
      out.tokens[k] = { borderRadius: cs.borderRadius };
    } else if (k.startsWith("color-")) {
      out.tokens[k] = { bg: cs.backgroundColor };
    } else if (k.startsWith("ease-")) {
      out.tokens[k] = { ease: cs.transitionTimingFunction };
    }
  });
  return JSON.stringify(out);
})();

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * eslint-config-next 16 ships real flat configs, so these are imported
 * directly. Do NOT reach for `FlatCompat` here: `compat.extends("next/...")`
 * throws "Converting circular structure to JSON" against ESLint 9.39 with this
 * config, from inside eslintrc's own error formatter, so the message you get
 * tells you nothing about the actual problem.
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  {
    rules: {
      /**
       * Gate G39, moved from "the QA agent finds it after the build" to "the
       * editor finds it while you type". These are the seven banned animation
       * libraries plus the smooth-scroll family. `motion` is the only
       * animation library on a One Panel build (HOUSE-STYLE stack note).
       */
      "no-restricted-imports": [
        "error",
        {
          paths: [
            { name: "gsap", message: "Banned (HOUSE-STYLE G39). Use `motion`." },
            { name: "gsap/ScrollTrigger", message: "Banned (G39). Use motion's useScroll." },
            { name: "lenis", message: "Banned (G39). Scroll is native on 11 of 11 liked sites." },
            { name: "@studio-freight/lenis", message: "Banned (G39)." },
            { name: "locomotive-scroll", message: "Banned (G39)." },
            { name: "aos", message: "Banned (G39). Use <Reveal>." },
            { name: "react-spring", message: "Banned (G39). Use `motion`." },
            { name: "@react-spring/web", message: "Banned (G39). Use `motion`." },
            { name: "splitting", message: "Banned (G39). Use src/lib/split-text.ts (8.7)." },
            {
              name: "framer-motion",
              message: "Import from `motion/react`, not the legacy `framer-motion` package.",
            },
          ],
          patterns: [
            {
              group: ["three", "three/*", "@react-three/*"],
              message:
                "3D is opt-in per project and never in the base bundle (HOUSE-STYLE 12, G40). " +
                "Load it through next/dynamic with ssr:false. See docs/3D.md.",
            },
          ],
        },
      ],

      /**
       * `priority` on next/image is deprecated in favour of `preload`.
       * Caught here because the deprecation is silent at build time.
       */
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='priority']",
          message: "`priority` on next/image is deprecated. Use `preload` instead.",
        },
      ],
    },
  },
];

export default eslintConfig;

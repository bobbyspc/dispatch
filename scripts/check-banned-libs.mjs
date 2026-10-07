#!/usr/bin/env node
/**
 * Gates G39 and G40, run against the BUILT bundle.
 *
 * G39  no gsap, ScrollTrigger, lenis, locomotive, aos, react-spring, splitting
 * G40  no three, @react-three, drei, draco in the base bundle
 *
 * Run after `next build`. `npm run verify` does both.
 *
 * TWO VERIFICATION TRAPS, both measured and both worth knowing:
 *
 *  - A `<script src>` probe gives a FALSE NEGATIVE on every Framer site,
 *    because Framer ships one bundle named `script_main.<hash>.mjs`. That trap
 *    does not apply here (we own the build) but it is why this scans file
 *    CONTENT and not filenames.
 *  - Grepping a bundle for `ogl` returns hits inside the string `google`.
 *    Every pattern below is therefore word-boundary anchored or matched as an
 *    import specifier, never as a bare substring.
 *
 * `--route <name>` exempts one route's chunks from the 3D check, for the one
 * declared 3D route a trendy project may have (HOUSE-STYLE 12).
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const BUILD_DIR = ".next";
const SCAN_DIRS = [path.join(BUILD_DIR, "static"), path.join(BUILD_DIR, "server")];

/** G39. Every one of these is banned outright, on both poles, on every route. */
const BANNED = [
  { name: "gsap", re: /(?:^|[^a-z0-9])gsap(?:[^a-z0-9]|$)/i },
  { name: "ScrollTrigger", re: /ScrollTrigger/ },
  { name: "lenis", re: /(?:^|[^a-z0-9])lenis(?:[^a-z0-9]|$)/i },
  { name: "locomotive", re: /locomotive[-_]?scroll/i },
  { name: "aos", re: /(?:^|[^a-z0-9])aos(?:\.js|[/"'])/i },
  { name: "react-spring", re: /react-spring/i },
  { name: "splitting", re: /(?:^|[^a-z0-9])splitting(?:\.js|[/"'])/i },
];

/** G40. Legal on a declared 3D route only, never in the base bundle. */
const THREE_D = [
  { name: "three", re: /["'/]three(?:["'/]|\/build)/ },
  { name: "@react-three", re: /@react-three/ },
  { name: "drei", re: /["'/]@?react-three\/drei|["'/]drei["'/]/ },
  { name: "draco", re: /draco_(?:wasm|decoder)/i },
];

const args = process.argv.slice(2);
const routeIdx = args.indexOf("--route");
const exemptRoute = routeIdx >= 0 ? args[routeIdx + 1] : null;

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(js|mjs|cjs)$/.test(e.name)) out.push(full);
  }
  return out;
}

async function main() {
  if (!existsSync(BUILD_DIR)) {
    console.error(`check-banned-libs: no ${BUILD_DIR}/. Run \`next build\` first.`);
    process.exit(2);
  }

  const files = (await Promise.all(SCAN_DIRS.map(walk))).flat();
  if (files.length === 0) {
    console.error("check-banned-libs: found zero JS files to scan. That is a defect, not a pass.");
    process.exit(2);
  }

  const hits = [];
  let bytes = 0;

  for (const file of files) {
    const src = await readFile(file, "utf8");
    bytes += (await stat(file)).size;
    for (const { name, re } of BANNED) {
      if (re.test(src)) hits.push({ gate: "G39", name, file });
    }
    const exempt = exemptRoute && file.includes(exemptRoute);
    if (!exempt) {
      for (const { name, re } of THREE_D) {
        if (re.test(src)) hits.push({ gate: "G40", name, file });
      }
    }
  }

  const kb = Math.round(bytes / 1024);
  if (hits.length === 0) {
    console.log(
      `check-banned-libs: PASS. Scanned ${files.length} bundle files (${kb} KB) for ` +
        `${BANNED.length} banned libraries (G39) and ${THREE_D.length} 3D markers (G40). 0 hits.`,
    );
    process.exit(0);
  }

  console.error(`check-banned-libs: FAIL. ${hits.length} hit(s) across ${files.length} files:`);
  for (const h of hits) console.error(`  [${h.gate}] ${h.name} in ${h.file}`);
  process.exit(1);
}

main();

import type { NextConfig } from "next";

/**
 * Deliberately near-empty. Two things a One Panel project usually reaches for
 * and should not put here:
 *
 * 1. URL REDIRECTS. `redirects()` matches `source` CASE-INSENSITIVELY and Next
 *    exposes no opt-out, so a plain `/Menu -> /menu` rule also matches `/menu`
 *    and redirects it to itself: a 308 loop that makes the real route
 *    unreachable. A negative lookahead does not save you either, because the
 *    case-insensitive flag applies to the lookahead too. Reproduced against
 *    `next start` on a real build in this vault. Put redirects in `src/proxy.ts`
 *    (Next 16's rename of middleware.ts).
 *
 * 2. A CUSTOM `transpilePackages` OR ALIAS FOR TURBOPACK. Turbopack's
 *    `resolveAlias` rejects Windows absolute paths with an error that reads
 *    like the alias simply being ignored, and Turbopack's own import map runs
 *    before yours, so an alias reaches the browser layer only.
 */
const nextConfig: NextConfig = {};

export default nextConfig;

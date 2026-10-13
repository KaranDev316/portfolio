# Portfolio audit — 13 October 2026

**Status: ready with known limitations.** The production build is ready for a static deployment. The defects identified below have been fixed and retested. Nothing was deployed, pushed or committed.

## Executed checks

| Check | Actual result |
| --- | --- |
| `npm ls --depth=0` | Passed; installed direct dependencies resolve without missing/invalid packages. |
| `npm run lint` | Initially failed on `__dirname` in `vite.config.js`; final run passed with zero warnings. |
| `npm run build` | Passed before and after changes; final Vite 6.4.4 build completed successfully. |
| `npm audit --json` | Initially 11 vulnerable packages: 9 high, 1 moderate, 1 low. Final audit: **0 vulnerabilities**. |
| `npm audit fix --ignore-scripts` | Applied compatible security updates; existing dependency ranges and majors retained. |
| `git diff --check` | Passed. Final application and lockfile diffs reviewed. |
| `node /tmp/portfolio-audit/browser.cjs` | Final production-browser regression pass succeeded. |
| `node /tmp/portfolio-audit/destinations.cjs` | Both project demos and both source links opened their expected pages in new tabs, with no opener access. |
| `node /tmp/portfolio-audit/dev-touch.cjs` | Development-mode smoke test and both mobile touch-emulation checks passed. |

This is a JavaScript/JSX project. There is no TypeScript configuration/type-check script and no configured unit/integration test runner. Neither was claimed as executed. A committed browser regression suite would be useful for future changes; adding TypeScript is unnecessary for this audit. Browser tooling and axe-core were temporary tools outside the repository; no project dependencies or scripts were added.

## Issues and fixes

| Severity | Finding and correction | Files |
| --- | --- | --- |
| High (dependency advisory ratings) | Updated 30 existing dependency versions within their current majors, including Vite 6.4.4 and React Router 7.18.4. Several advisories concern dev-server/SSR functionality unused by this static site; deployed exploitation was not demonstrated. | `package-lock.json` |
| Medium | All navigation disappeared below 700px. Restored the same links in a compact second header row with 44px targets and a matching anchor offset. | `src/index.css` |
| Medium | Clipboard results were not announced; repeated clicks could leave stale reset timers. Added live success/failure feedback, manual-copy instructions and request/timer cleanup. | `src/components/ContactSection.jsx`, `src/index.css` |
| Medium | Generic containers could not reliably expose their accessible labels. Added group roles and a named Contact section; added keyboard skip navigation. | `Ticker.jsx`, `TracePanel.jsx`, `WorkSection.jsx`, `ContactSection.jsx`, `src/pages/Home.jsx`, `src/index.css` |
| Medium | Muted text calculated at 4.46:1 over the darkest grid intersections. Adjusted only that shade from `#55607a` to `#545f79`, giving 4.53:1. | `src/index.css` |
| Low | Active navigation stayed selected after returning to the hero. Recomputed selection from scroll position, including clearing it above About and selecting Contact at the bottom. | `src/components/Navbar.jsx` |
| Low | Vite alias used an undefined CommonJS global in an ES-module configuration. Replaced it with `fileURLToPath(new URL(..., import.meta.url))`. | `vite.config.js` |
| Low | Missing description/favicon caused incomplete metadata and a favicon 404. Added both. | `index.html`, `public/favicon.svg` |
| Low | Unknown routes displayed bare `NotFound` with no recovery. Added a heading, main landmark and working home link. | `src/pages/NotFound.jsx` |

Approved About/Work/Stack content, all supporting badges, project URLs, fonts, grid, section layouts and screenshots were preserved. The visible changes are mobile navigation, the minimal contrast adjustment, and the error-page recovery content.

## Browser, accessibility and visual verification

Actual Chrome browser checks and screenshot review covered **375×900, 430×900, 768×900, 1280×900 and 1440×900**. Additional tap tests used **375×812 and 430×932** mobile emulation; a 320px layout stress check also passed.

Verified all section navigation, sticky-header clearance, active states, hero CTAs, direct hash loading and history, image loading/aspect ratios, complete screenshots, heading/Stack content, keyboard focus and skip navigation, clipboard contents and repeat timing, denied/unavailable clipboard feedback, reduced-motion behavior, and missing-route recovery. No horizontal overflow, broken grids or clipped page content was found. All measured interactive targets were at least 24px in both dimensions; mobile navigation targets are 44px tall.

Axe-core reported **zero violations at all five widths**. It left grid-background contrast for manual review; CSS color compositing was checked separately, including the fix above. Automated scanning is not a screen-reader certification.

Both demos and sources returned expected destinations. Public source confirms the project descriptions and workflow labels: [VC Intelligence](https://github.com/KaranDev316/VC-Intelligence) and [PromptSphere](https://github.com/KaranDev316/PromptSphere). GitHub, X and Instagram profile URLs returned HTTP 200 with matching page titles. LinkedIn returned anti-bot HTTP 999, so that destination remains unverified manually.

## Performance, deployment and remaining limits

- No console errors, React warnings, failed requests or HTTP errors occurred in the final local checks. Production assets and favicon loaded successfully.
- Final JS is **193.53 kB / 63.72 kB gzip**; CSS is **12.37 kB / 3.32 kB gzip**. The two lazy-loaded project PNGs total about **696 kB**, with correct intrinsic dimensions. No throttled performance score or real-user Core Web Vitals measurement was taken.
- No credential patterns were found in tracked files. Unused dependencies and legacy public images were retained; the legacy images are not requested by the page, though they add about 5.7 MB to the deployment directory.
- Physical devices, Safari, Firefox and assistive-technology screen readers were not tested. Google Fonts and external links remain external-service dependencies. Authenticated project functionality was outside the portfolio-link audit.
- The deployment host was not specified or changed. Deploy `dist` at the site root and verify host routing/SPA fallback and HTTPS there; subdirectory hosting needs matching asset/router base configuration.

**Recommendation:** proceed with deployment after a quick manual LinkedIn and target-host/device smoke check. There are no unresolved defects demonstrated in the audited portfolio.

Temporary evidence, scripts and full-page screenshots are in `/tmp/portfolio-audit/`; those files are not part of the project and may be removed by operating-system cleanup. Section-only captures contain browser stitching artifacts, so full-page captures were used to confirm the layouts.

# Animation Plan

## Recommendation: Motion (formerly Framer Motion)

We're on React 19 + Tailwind v4 + TanStack Router. The right pick is **[Motion for React](https://motion.dev/)** (`motion` package — the rebranded successor to `framer-motion`, from the original author).

### Why Motion over the alternatives

| Option | Verdict |
|---|---|
| **Motion** | Best DX for React. Declarative, gesture + layout + scroll + exit animations, spring physics, tiny hybrid engine, first-class React 19 support. |
| GSAP | Most powerful, but imperative and overkill for a marketing/commerce site. License friction for some commercial uses. |
| React Spring | Solid physics but smaller ecosystem and clunkier API than Motion. |
| Auto-Animate | Cute one-liner, but only handles add/remove/reorder. Not enough on its own. |
| `tw-animate-css` (current) | Just CSS keyframe utilities. Fine for hover/loading, can't do orchestrated, scroll-driven, layout, or exit animations. Keep for trivial cases, don't build on it. |

## Scope — what to animate

**No page/route transition animations.** Routes swap instantly. All motion is driven by scroll position or viewport entry.

1. **Hero section** — staggered fade-up for headline, subcopy, CTA on initial mount (treated as an in-view animation since it starts in the viewport).
2. **Section reveals** — `whileInView` fade-up as the user scrolls each section into view: Collection, Specs, Protocols, Commission, FAQ. Trigger once, with a small bottom margin so it fires slightly before fully visible.
3. **Staggered children** — within each section, child elements (cards, list items, spec rows) reveal in sequence as the parent enters the viewport.
4. **Product cards** — in-view fade-up on first reveal; hover lift + image zoom on interaction.
5. **Header** — scroll-progress driven shrink/blur using `useScroll` + `useTransform` (not in-view, but scroll-linked).
6. **Scroll-linked accents** — optional parallax on the hero banner image and subtle opacity/Y shifts on section dividers via `useScroll({ target, offset })`.
7. **Dialogs (Request Form)** — overlay + content enter/exit via Motion variants (interaction-triggered, not route-triggered).
8. **FAQ accordion** — height animation on open/close.
9. **Micro-interactions** — button press scale, icon hover, form field focus.

## Implementation steps

1. **Install** — `npm i motion` (single dep, ~34kb gzip with tree-shaking; use `motion/react` import).
2. **Create primitives** in `src/components/motion/`:
   - `FadeIn.tsx` — `whileInView` fade-up wrapper with configurable delay/distance/direction.
   - `Stagger.tsx` — parent + child variants for list/grid reveals (parent fires `whileInView`, children inherit).
   - `ScrollLinked.tsx` (optional) — thin wrapper around `useScroll` + `useTransform` for header shrink and parallax.
   - `MotionConfig` — set global `reducedMotion="user"` and default transition (spring, light).
3. **Refactor sections** in `src/components/landing/*` to use the primitives — delete one-off CSS keyframes from `styles.css` as we go.
5. **Audit `tw-animate-css` usage** — keep for spinners/skeletons, remove anywhere we now use Motion.
6. **Accessibility** — respect `prefers-reduced-motion` via `MotionConfig`; never animate `display`/`visibility`; keep durations ≤ 400ms for UI, ≤ 800ms for hero.
7. **Performance** — animate `transform` + `opacity` only; lazy-load heavy variants below the fold; verify no CLS regressions in Lighthouse.

## Conventions

- Default transition: `{ type: "spring", stiffness: 260, damping: 30 }`.
- Section reveals: `viewport={{ once: true, margin: "-80px" }}`.
- Stagger children: `staggerChildren: 0.08`.
- Use `LayoutGroup` only when needed — it's not free.

## Out of scope (for now)

- 3D / WebGL hero (Three.js).
- Scroll-driven CSS via `scroll-timeline` (browser support still uneven in 2026).
- Lottie — revisit if we get illustrated assets from a designer.

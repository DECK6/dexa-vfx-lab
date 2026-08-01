# DEXA VFX LAB

**244 framework-neutral motion effects** with a live gallery, parameter playground, and one-click export.

**Live:** https://dexa.art/vfx/

![gallery](https://dexa.art/vfx/thumbs/g01.webp)

## What it is

A motion-effect catalog where every effect is a small deterministic **kernel** — plain TypeScript with zero framework imports. The same kernel file drives:

- **Live gallery** — 244 cards playing in-browser (virtualized, single WebGL context)
- **Remotion** — `bunx remotion render` any effect as video
- **HyperFrames** — self-contained HTML snippet export
- **Copy tabs** — TSX / GLSL / preset JSON / CLI per effect

## Kernel contract

Three kinds, one rule: same frame in → same pixels out.

| kind | signature | for |
|---|---|---|
| `react` | `render(ctx) => JSX` (no hooks) | transforms, SVG, UI |
| `canvas` | `render(ctx)` or `{init, step, render}` | pixels, particles |
| `webgl` | `{frag, uniforms(ctx)}` | distortion, sim-like looks |

- No `Math.random` / `Date.now` — only `ctx.random(key)` (seeded)
- `ctx.t` ∈ [0,1] over a 6s loop, `ctx.subjectNode` / `ctx.subject.bitmap` is the subject
- Effects are file pairs: `effects/<category>/<ID>_<slug>.meta.ts` + `.effect.ts(x)`

Adding an effect = dropping a file pair. A codegen manifest (`bun run gen`) keeps Vite and Remotion in sync — no `import.meta.glob`.

## Categories

TYPE · GLITCH · LIGHT · PARTICLE · SHAPE · TRANS · CAMERA · DISTORT · TEXTURE · DATA · UI · NATURE · PATTERN · LIQUID · MASK · AUDIO · MOTION

## Develop

```bash
bun install
bun run dev        # gallery at localhost:5173/vfx/
bun run gen        # regenerate manifest after adding effects
bun run lint:registry
bun run typecheck
bun run thumbs     # render all thumbnails (also the render gate)
bun run test:e2e   # playwright smoke: live, params, GL-context budget
bun scripts/verify-hyperframes.mjs [IDs]   # HyperFrames export check
bun run build && bun run deploy
```

## Docs

- `docs/SPEC.md` — kernel contract, palette, architecture (source of truth)
- `docs/CATALOG.md` — all 244 effects
- `docs/PROGRESS.md` — build ledger

Built with parallel AI agents (Claude orchestration + batch implementation), verified per batch: static gates → still render → smoke → HyperFrames check.

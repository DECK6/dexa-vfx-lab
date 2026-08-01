import type { ReactNode } from 'react';

/**
 * DEXA VFX LAB — kernel contract (SPEC §3).
 *
 * HARD RULES for everything under effects/:
 * - Never import remotion, @remotion/*, hyperframes, or any framework.
 * - Never use Math.random / Date.now — use ctx.random(key) only.
 * - Same ctx.frame in → same pixels out (stateful kernels: same step sequence).
 */

export type FxKind = 'react' | 'canvas' | 'webgl';

/** Load cost for the gallery budget manager: ●=1, ●●=2, ●●●=3 (weights 1/3/8 applied by driver). */
export type FxCost = 1 | 2 | 3;

export interface FxAudioFrame {
  /** 0..1 RMS loudness at current frame */
  rms: number;
  /** 8 frequency bands, each 0..1 */
  bands: number[];
}

export interface FxSubject {
  kind: 'triad' | 'text' | 'image';
  /** Short label text shown with the subject */
  label: string;
  /** Pre-rasterized subject for canvas/webgl kernels. Drivers guarantee it before invoking those kernels. */
  bitmap?: ImageBitmap;
}

export interface FxContext {
  frame: number;
  fps: number;
  durationInFrames: number;
  width: number;
  height: number;
  /** frame / durationInFrames, 0..1 */
  t: number;
  /** Seeded PRNG: stable value per (effect id, key). Use e.g. random(`p:${i}`) or random(`n:${frame}:${i}`). */
  random: (key: string) => number;
  /** Values matching this effect's meta.params schema */
  params: Record<string, unknown>;
  subject: FxSubject;
  /** AUDIO category only — sampled from pre-analyzed track data */
  audio?: FxAudioFrame;
}

/* ---------------- params schema (drives auto-generated control UI) ---------------- */

export type FxParamSpec =
  | { type: 'range'; min: number; max: number; step: number; default: number; label: string }
  | { type: 'color'; default: string; label: string }
  | { type: 'enum'; options: readonly string[]; default: string; label: string }
  | { type: 'toggle'; default: boolean; label: string };

export type FxParamsSchema = Record<string, FxParamSpec>;

/* ---------------- meta (eagerly loaded, no kernel code) ---------------- */

export interface FxMeta {
  /** Catalog ID, e.g. "G02" */
  id: string;
  /** File slug, e.g. "datamosh-slice" */
  slug: string;
  /** Display name, e.g. "Datamosh Slice" */
  name: string;
  /** Key from src/categories.ts */
  category: string;
  kind: FxKind;
  cost: FxCost;
  wave: 1 | 2 | 3 | 4;
  tags: string[];
  /** Simulation kernels (init/step/render). Drivers replay from frame 0 on seek. */
  stateful?: boolean;
  params: FxParamsSchema;
}

/* ---------------- kernels ---------------- */

export type ReactKernel = (ctx: FxContext & { subjectNode: ReactNode }) => ReactNode;

export type CanvasDraw = (g: CanvasRenderingContext2D, ctx: FxContext) => void;

export interface CanvasStatefulKernel<S = unknown> {
  init(ctx: FxContext): S;
  step(state: S, ctx: FxContext): S;
  render(g: CanvasRenderingContext2D, state: S, ctx: FxContext): void;
}

export interface WebglKernel {
  /** Fragment shader source. Driver supplies fullscreen quad + shared vertex shader. */
  frag: string;
  uniforms(ctx: FxContext): Record<string, number | number[]>;
}

/** Default export shape of every *.effect.ts(x) file. */
export type FxKernel =
  | { kind: 'react'; render: ReactKernel }
  | { kind: 'canvas'; draw: CanvasDraw }
  | { kind: 'canvas'; stateful: CanvasStatefulKernel }
  | { kind: 'webgl'; shader: WebglKernel };

/* ---------------- defaults helper ---------------- */

export function defaultParams(schema: FxParamsSchema): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, spec] of Object.entries(schema)) out[k] = spec.default;
  return out;
}

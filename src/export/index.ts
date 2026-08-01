import type { FxExporter } from './types';
import { cliExporter } from './cli';
import { glslExporter } from './glsl';
import { hyperframesExporter } from './hyperframes';
import { presetExporter } from './preset';
import { tsxExporter } from './tsx';

/**
 * Exporter registry — code-tab plugins (SPEC §5.4).
 * Track C registers exporters here (tsx / hyperframes / preset / cli / glsl).
 * UI (detail page) renders one tab per exporter where applies(meta) is true.
 */
export const exporters: FxExporter[] = [
  tsxExporter,
  glslExporter,
  hyperframesExporter,
  presetExporter,
  cliExporter,
];

export type { FxExporter, FxExportInput } from './types';

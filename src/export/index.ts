import type { FxExporter } from './types';

/**
 * Exporter registry — code-tab plugins (SPEC §5.4).
 * Track C registers exporters here (tsx / hyperframes / preset / cli / glsl).
 * UI (detail page) renders one tab per exporter where applies(meta) is true.
 */
export const exporters: FxExporter[] = [];

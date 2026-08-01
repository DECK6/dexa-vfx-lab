import type { FxMeta } from '../fx/types';

/**
 * Code-tab exporter plugin interface (SPEC §5.4).
 * Adding a tab = adding one exporter file registered in src/export/index.ts.
 */
export interface FxExportInput {
  meta: FxMeta;
  /** Current parameter values from the detail-page control panel */
  params: Record<string, unknown>;
  /** Raw source of the effect file (registry.loadSource) */
  kernelSource: string;
}

export interface FxExporter {
  /** 'tsx' | 'hyperframes' | 'preset' | 'cli' | 'glsl' ... */
  id: string;
  /** Tab label, mono uppercase, e.g. 'HYPERFRAMES' */
  label: string;
  /** Whether this exporter applies to the given effect (e.g. glsl → webgl only) */
  applies(meta: FxMeta): boolean;
  /** Language hint for syntax display: 'tsx' | 'html' | 'json' | 'sh' | 'glsl' */
  language: string;
  generate(input: FxExportInput): string;
}

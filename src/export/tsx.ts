import type { FxExporter } from './types';

function commentBlock(value: unknown): string {
  return JSON.stringify(value, null, 2)
    .split('\n')
    .map((line) => ` * ${line}`)
    .join('\n');
}

export const tsxExporter: FxExporter = {
  id: 'tsx',
  label: 'TSX',
  language: 'tsx',
  applies: () => true,
  generate: ({ meta, params, kernelSource }) => `/**
 * DEXA VFX LAB — ${meta.id} / ${meta.name}
 *
 * Remotion usage:
 * 1. Save this kernel and import it into the Remotion adapter/composition.
 * 2. Pass Remotion's frame/video config through FxContext and register the
 *    adapter component with these current params as inline defaultProps:
 *
 * const defaultProps =
${commentBlock(params)};
 * <Composition id="${meta.id}" component={FxComposition} defaultProps={defaultProps} />
 */

${kernelSource.trim()}
`,
};

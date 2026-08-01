import type { FxExporter } from './types';

export const presetExporter: FxExporter = {
  id: 'preset',
  label: 'PRESET JSON',
  language: 'json',
  applies: () => true,
  generate: ({ meta, params }) =>
    JSON.stringify(
      {
        meta: { id: meta.id, name: meta.name },
        params,
      },
      null,
      2,
    ),
};

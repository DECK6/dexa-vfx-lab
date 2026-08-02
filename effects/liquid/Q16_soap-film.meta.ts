import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q16',
  slug: 'soap-film',
  name: 'Soap Film',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'soap', 'thin-film', 'interference', 'webgl'],
  params: {
    scale: { type: 'range', min: 0.7, max: 1.35, step: 0.01, default: 1, label: 'FILM SCALE' },
    interference: { type: 'range', min: 0.3, max: 2, step: 0.01, default: 1.15, label: 'INTERFERENCE' },
    wobble: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'WOBBLE' },
    refraction: { type: 'range', min: 0, max: 0.08, step: 0.002, default: 0.026, label: 'REFRACTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

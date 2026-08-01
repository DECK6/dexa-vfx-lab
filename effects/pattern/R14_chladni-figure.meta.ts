import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R14',
  slug: 'chladni-figure',
  name: 'Chladni Figure',
  category: 'pattern',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['pattern', 'chladni', 'standing-wave', 'interference', 'webgl'],
  params: {
    modeA: { type: 'range', min: 2, max: 9, step: 1, default: 4, label: 'MODE A' },
    modeB: { type: 'range', min: 2, max: 9, step: 1, default: 7, label: 'MODE B' },
    density: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.48, label: 'DENSITY' },
    transition: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'TRANSITION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

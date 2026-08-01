import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M04',
  slug: 'alpha-matte',
  name: 'Alpha Matte',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['mask', 'alpha', 'matte', 'composite'],
  params: {
    windows: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'WINDOWS' },
    travel: { type: 'range', min: 8, max: 38, step: 1, default: 26, label: 'TRAVEL' },
    softness: { type: 'range', min: 0, max: 30, step: 1, default: 12, label: 'SOFTNESS' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

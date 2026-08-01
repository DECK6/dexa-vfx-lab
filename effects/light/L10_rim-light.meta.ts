import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L10',
  slug: 'rim-light',
  name: 'Rim Light',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['light', 'rim', 'sweep', 'edge'],
  params: {
    sweepSize: { type: 'range', min: 12, max: 48, step: 1, default: 28, label: 'SWEEP SIZE' },
    intensity: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.82, label: 'INTENSITY' },
    offset: { type: 'range', min: 2, max: 14, step: 1, default: 7, label: 'RIM OFFSET' },
    laps: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'LAPS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

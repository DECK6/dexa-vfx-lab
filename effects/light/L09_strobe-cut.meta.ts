import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L09',
  slug: 'strobe-cut',
  name: 'Strobe Cut',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['light', 'strobe', 'flash', 'cut'],
  params: {
    rate: { type: 'range', min: 1, max: 12, step: 1, default: 6, label: 'RATE' },
    duty: { type: 'range', min: 0.05, max: 0.5, step: 0.01, default: 0.16, label: 'DUTY' },
    intensity: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.84, label: 'INTENSITY' },
    slices: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'SLICES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A06',
  slug: 'vu-meter',
  name: 'VU Meter',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['audio', 'meter', 'levels', 'bands'],
  params: {
    sensitivity: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.35, label: 'SENSITIVITY' },
    bars: { type: 'range', min: 8, max: 20, step: 1, default: 14, label: 'BARS' },
    falloff: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.28, label: 'FALLOFF' },
    gap: { type: 'range', min: 2, max: 14, step: 1, default: 6, label: 'GAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

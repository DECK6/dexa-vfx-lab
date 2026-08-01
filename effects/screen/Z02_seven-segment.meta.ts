import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z02',
  slug: 'seven-segment',
  name: 'Seven Segment',
  category: 'screen',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['screen', 'seven-segment', 'counter', 'display'],
  params: {
    digits: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'DIGITS' },
    speed: { type: 'range', min: 1, max: 8, step: 1, default: 4, label: 'SPEED' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

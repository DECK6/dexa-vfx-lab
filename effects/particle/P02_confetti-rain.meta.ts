import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P02',
  slug: 'confetti-rain',
  name: 'Confetti Rain',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['particle', 'confetti', 'rain', 'physics'],
  stateful: true,
  params: {
    count: { type: 'range', min: 24, max: 220, step: 1, default: 110, label: 'COUNT' },
    speed: { type: 'range', min: 0.3, max: 2, step: 0.05, default: 0.9, label: 'FALL SPEED' },
    wind: { type: 'range', min: -1, max: 1, step: 0.05, default: 0.18, label: 'WIND' },
    size: { type: 'range', min: 2, max: 12, step: 0.5, default: 6, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

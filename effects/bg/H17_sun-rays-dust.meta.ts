import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H17',
  slug: 'sun-rays-dust',
  name: 'Sun Rays Dust',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'sun-rays', 'dust', 'atmospheric'],
  params: {
    rayCount: { type: 'range', min: 5, max: 14, step: 1, default: 9, label: 'RAY COUNT' },
    dust: { type: 'range', min: 12, max: 48, step: 1, default: 28, label: 'DUST' },
    drift: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

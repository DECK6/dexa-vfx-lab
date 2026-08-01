import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K08',
  slug: 'insert-coin',
  name: 'Insert Coin',
  category: 'retro',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['retro', 'arcade', 'title', 'blink'],
  params: {
    blinkRate: { type: 'range', min: 1, max: 6, step: 1, default: 3, label: 'BLINK RATE' },
    pixelScale: { type: 'range', min: 4, max: 16, step: 1, default: 8, label: 'PIXEL SCALE' },
    demoSpeed: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'DEMO SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

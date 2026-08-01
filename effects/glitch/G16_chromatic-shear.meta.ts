import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G16',
  slug: 'chromatic-shear',
  name: 'Chromatic Shear',
  category: 'glitch',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['glitch', 'chromatic', 'shear', 'rgb', 'webgl'],
  params: {
    amount: { type: 'range', min: 0, max: 0.18, step: 0.002, default: 0.075, label: 'AMOUNT' },
    angle: { type: 'range', min: -45, max: 45, step: 1, default: 18, label: 'ANGLE' },
    speed: { type: 'range', min: 0.5, max: 3, step: 0.5, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

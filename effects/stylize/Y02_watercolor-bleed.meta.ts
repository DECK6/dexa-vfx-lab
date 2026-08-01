import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y02',
  slug: 'watercolor-bleed',
  name: 'Watercolor Bleed',
  category: 'stylize',
  kind: 'webgl',
  cost: 3,
  wave: 6,
  tags: ['stylize', 'watercolor', 'bleed', 'pigment', 'paper'],
  params: {
    bleed: { type: 'range', min: 0.2, max: 1.5, step: 0.05, default: 0.85, label: 'BLEED' },
    grain: { type: 'range', min: 0.1, max: 1, step: 0.05, default: 0.58, label: 'PAPER GRAIN' },
    pigment: { type: 'range', min: 0.35, max: 1.3, step: 0.05, default: 0.9, label: 'PIGMENT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

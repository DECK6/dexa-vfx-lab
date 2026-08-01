import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X04',
  slug: 'ink-bleed',
  name: 'Ink Bleed',
  category: 'trans',
  kind: 'react',
  cost: 2,
  wave: 2,
  tags: ['transition', 'ink', 'bleed', 'organic'],
  params: {
    droplets: { type: 'range', min: 6, max: 18, step: 1, default: 12, label: 'DROPLETS' },
    spread: { type: 'range', min: 0.65, max: 1.35, step: 0.01, default: 1, label: 'SPREAD' },
    softness: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'SOFTNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

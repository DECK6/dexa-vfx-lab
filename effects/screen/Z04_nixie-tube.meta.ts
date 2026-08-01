import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z04',
  slug: 'nixie-tube',
  name: 'Nixie Tube',
  category: 'screen',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['screen', 'nixie', 'tube', 'glow', 'retro-display'],
  params: {
    tubes: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'TUBES' },
    warmth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.82, label: 'WARMTH' },
    flicker: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.18, label: 'FLICKER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

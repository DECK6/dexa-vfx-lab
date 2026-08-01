import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G17',
  slug: 'corrupt-header',
  name: 'Corrupt Header',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['glitch', 'corrupt-header', 'decoder', 'scanline', 'canvas'],
  params: {
    headerDepth: { type: 'range', min: 0.08, max: 0.42, step: 0.01, default: 0.24, label: 'HEADER DEPTH' },
    stripeHeight: { type: 'range', min: 2, max: 18, step: 1, default: 7, label: 'STRIPE HEIGHT' },
    shift: { type: 'range', min: 8, max: 160, step: 1, default: 68, label: 'SHIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

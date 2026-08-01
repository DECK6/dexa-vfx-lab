import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K06',
  slug: 'sprite-explode',
  name: 'Sprite Explode',
  category: 'retro',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['retro', 'sprite', 'pixel', 'explode', 'canvas'],
  params: {
    blockSize: { type: 'range', min: 5, max: 20, step: 1, default: 10, label: 'BLOCK SIZE' },
    spread: { type: 'range', min: 0.15, max: 1, step: 0.05, default: 0.62, label: 'SPREAD' },
    arc: { type: 'range', min: 0, max: 1, step: 0.05, default: 0.55, label: 'ARCADE ARC' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

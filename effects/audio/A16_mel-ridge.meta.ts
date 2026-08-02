import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A16',
  slug: 'mel-ridge',
  name: 'Mel Ridge',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['audio', 'mel', 'ridge', 'spectrum', 'waterfall'],
  params: {
    rows: { type: 'range', min: 10, max: 28, step: 1, default: 20, label: 'RIDGE ROWS' },
    gain: { type: 'range', min: 0.4, max: 2.5, step: 0.05, default: 1.35, label: 'GAIN' },
    depth: { type: 'range', min: 0.5, max: 1.4, step: 0.05, default: 0.95, label: 'DEPTH' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SCROLL SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

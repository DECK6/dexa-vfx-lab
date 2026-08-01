import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R08',
  slug: 'phyllotaxis',
  name: 'Phyllotaxis',
  category: 'pattern',
  kind: 'canvas',
  cost: 1,
  wave: 2,
  tags: ['pattern', 'phyllotaxis', 'spiral', 'botanical'],
  params: {
    count: { type: 'range', min: 80, max: 600, step: 10, default: 360, label: 'COUNT' },
    spread: { type: 'range', min: 0.55, max: 1, step: 0.01, default: 0.88, label: 'SPREAD' },
    dotSize: { type: 'range', min: 0.8, max: 5, step: 0.1, default: 2.4, label: 'DOT SIZE' },
    motion: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'MOTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

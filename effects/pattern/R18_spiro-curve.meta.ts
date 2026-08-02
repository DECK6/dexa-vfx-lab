import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R18',
  slug: 'spiro-curve',
  name: 'Spiro Curve',
  category: 'pattern',
  kind: 'canvas',
  cost: 1,
  wave: 9,
  tags: ['pattern', 'spirograph', 'curve', 'drawing'],
  params: {
    ratio: { type: 'enum', options: ['5:3', '7:3', '8:5', '9:4'], default: '7:3', label: 'RATIO' },
    penOffset: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.82, label: 'PEN OFFSET' },
    scale: { type: 'range', min: 0.5, max: 0.95, step: 0.01, default: 0.82, label: 'SCALE' },
    lineWidth: { type: 'range', min: 0.5, max: 3.5, step: 0.1, default: 1.4, label: 'LINE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

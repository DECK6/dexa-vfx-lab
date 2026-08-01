import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R13',
  slug: 'dot-matrix',
  name: 'Dot Matrix',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['pattern', 'dots', 'scan'],
  params: {
    spacing: { type: 'range', min: 10, max: 36, step: 1, default: 20, label: 'SPACING' },
    dotSize: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'DOT SIZE' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    speed: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

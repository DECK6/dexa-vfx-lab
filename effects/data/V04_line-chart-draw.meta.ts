import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V04',
  slug: 'line-chart-draw',
  name: 'Line Chart Draw',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['data', 'line', 'chart', 'draw'],
  params: {
    points: { type: 'range', min: 6, max: 16, step: 1, default: 10, label: 'POINTS' },
    amplitude: { type: 'range', min: 0.2, max: 0.9, step: 0.01, default: 0.62, label: 'AMPLITUDE' },
    thickness: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

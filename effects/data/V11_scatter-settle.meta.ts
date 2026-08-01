import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V11',
  slug: 'scatter-settle',
  name: 'Scatter Settle',
  category: 'data',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['data', 'scatter', 'plot', 'settle'],
  params: {
    points: { type: 'range', min: 16, max: 90, step: 1, default: 48, label: 'POINTS' },
    spread: { type: 'range', min: 0.25, max: 1, step: 0.05, default: 0.82, label: 'SPREAD' },
    pointSize: { type: 'range', min: 2, max: 9, step: 0.5, default: 4, label: 'POINT SIZE' },
    trails: { type: 'toggle', default: true, label: 'TRAILS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

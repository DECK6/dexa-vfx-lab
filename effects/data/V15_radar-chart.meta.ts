import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V15',
  slug: 'radar-chart',
  name: 'Radar Chart',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'radar', 'chart', 'polygon', 'metrics'],
  params: {
    axes: { type: 'range', min: 4, max: 8, step: 1, default: 6, label: 'AXES' },
    amplitude: { type: 'range', min: 0.35, max: 1, step: 0.05, default: 0.82, label: 'AMPLITUDE' },
    rings: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'RINGS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V22',
  slug: 'slope-chart',
  name: 'Slope Chart',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'slope', 'ranking', 'comparison'],
  params: {
    series: { type: 'range', min: 4, max: 8, step: 1, default: 6, label: 'SERIES' },
    spread: { type: 'range', min: 0.4, max: 1, step: 0.01, default: 0.78, label: 'SPREAD' },
    thickness: { type: 'range', min: 2, max: 8, step: 0.5, default: 4, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

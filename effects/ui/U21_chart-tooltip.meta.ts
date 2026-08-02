import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U21',
  slug: 'chart-tooltip',
  name: 'Chart Tooltip',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'chart', 'tooltip', 'crosshair'],
  params: {
    points: { type: 'range', min: 5, max: 10, step: 1, default: 8, label: 'POINTS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    amplitude: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.72, label: 'AMPLITUDE' },
    panel: { type: 'enum', options: ['compact', 'wide'], default: 'compact', label: 'PANEL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

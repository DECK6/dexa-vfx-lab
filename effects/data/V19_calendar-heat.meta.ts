import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V19',
  slug: 'calendar-heat',
  name: 'Calendar Heat',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'calendar', 'heatmap', 'activity'],
  params: {
    weeks: { type: 'range', min: 12, max: 32, step: 1, default: 24, label: 'WEEKS' },
    intensity: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.82, label: 'INTENSITY' },
    gap: { type: 'range', min: 2, max: 10, step: 1, default: 5, label: 'GAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

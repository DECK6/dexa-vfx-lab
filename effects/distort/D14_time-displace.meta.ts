import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D14',
  slug: 'time-displace',
  name: 'Time Displace',
  category: 'distort',
  kind: 'canvas',
  cost: 3,
  wave: 4,
  tags: ['distort', 'slit-scan', 'time', 'displacement'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    rowHeight: { type: 'range', min: 1, max: 18, step: 1, default: 4, label: 'ROW HEIGHT' },
    history: { type: 'range', min: 6, max: 90, step: 1, default: 54, label: 'HISTORY' },
    drift: { type: 'range', min: 0, max: 120, step: 1, default: 48, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

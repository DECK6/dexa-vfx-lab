import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F07',
  slug: 'day-for-night',
  name: 'Day For Night',
  category: 'cinema',
  kind: 'webgl',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'color-grade', 'day-for-night', 'moonlight', 'webgl'],
  params: {
    grade: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.9, label: 'GRADE' },
    moonlight: { type: 'range', min: 0, max: 1.5, step: 0.01, default: 0.78, label: 'MOONLIGHT' },
    exposure: { type: 'range', min: 0.35, max: 1.2, step: 0.01, default: 0.72, label: 'EXPOSURE' },
    vignette: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'VIGNETTE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

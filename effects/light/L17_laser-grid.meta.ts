import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L17',
  slug: 'laser-grid',
  name: 'Laser Grid',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['light', 'laser', 'grid', 'scan', 'perspective'],
  params: {
    density: { type: 'range', min: 4, max: 14, step: 1, default: 8, label: 'DENSITY' },
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.82, label: 'INTENSITY' },
    sweep: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'SWEEP' },
    tilt: { type: 'range', min: 42, max: 76, step: 1, default: 62, label: 'TILT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

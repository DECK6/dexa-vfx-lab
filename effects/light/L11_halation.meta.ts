import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L11',
  slug: 'halation',
  name: 'Halation',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['light', 'halation', 'bloom', 'highlight'],
  params: {
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    spread: { type: 'range', min: 10, max: 54, step: 1, default: 32, label: 'SPREAD' },
    drift: { type: 'range', min: 0.08, max: 0.38, step: 0.01, default: 0.24, label: 'DRIFT' },
    hotspots: { type: 'range', min: 2, max: 5, step: 1, default: 3, label: 'HOTSPOTS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F13',
  slug: 'film-gate-jam',
  name: 'Film Gate Jam',
  category: 'cinema',
  kind: 'webgl',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'film', 'gate', 'jam', 'frame-slip'],
  params: {
    jam: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.78, label: 'JAM' },
    melt: { type: 'range', min: 0, max: 0.28, step: 0.01, default: 0.14, label: 'MELT' },
    jitter: { type: 'range', min: 0, max: 0.08, step: 0.005, default: 0.035, label: 'JITTER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

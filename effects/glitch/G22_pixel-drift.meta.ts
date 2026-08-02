import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G22', slug: 'pixel-drift', name: 'Pixel Drift', category: 'glitch', kind: 'canvas', cost: 2, wave: 9,
  tags: ['glitch', 'pixel', 'drift', 'rows', 'loss'],
  params: {
    rows: { type: 'range', min: 12, max: 48, step: 2, default: 30, label: 'ROWS' },
    drift: { type: 'range', min: 8, max: 120, step: 2, default: 54, label: 'DRIFT' },
    dropout: { type: 'range', min: 0.05, max: 0.6, step: 0.01, default: 0.28, label: 'DROPOUT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

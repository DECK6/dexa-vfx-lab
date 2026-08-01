import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P16',
  slug: 'pollen-drift',
  name: 'Pollen Drift',
  category: 'particle',
  kind: 'canvas',
  cost: 1,
  wave: 6,
  tags: ['particle', 'pollen', 'backlight', 'drift'],
  params: {
    count: { type: 'range', min: 24, max: 90, step: 1, default: 58, label: 'COUNT' },
    flow: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'FLOW' },
    scatter: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.46, label: 'SCATTER' },
    size: { type: 'range', min: 0.6, max: 3.2, step: 0.1, default: 1.6, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

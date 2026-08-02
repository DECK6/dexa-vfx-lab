import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X18', slug: 'doorway-open', name: 'Doorway Open', category: 'trans', kind: 'react', cost: 1, wave: 9,
  tags: ['transition', 'doorway', 'double-door', 'perspective', 'open'],
  params: {
    open: { type: 'range', min: 45, max: 88, step: 1, default: 78, label: 'OPEN ANGLE' },
    depth: { type: 'range', min: 0, max: 0.2, step: 0.01, default: 0.09, label: 'DEPTH' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.7, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

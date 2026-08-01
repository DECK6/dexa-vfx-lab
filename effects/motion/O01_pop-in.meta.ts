import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O01',
  slug: 'pop-in',
  name: 'Pop In',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'spring', 'scale', 'overshoot'],
  params: {
    overshoot: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'OVERSHOOT' },
    damping: { type: 'range', min: 2, max: 12, step: 0.1, default: 6.4, label: 'DAMPING' },
    ring: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'IMPACT RING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

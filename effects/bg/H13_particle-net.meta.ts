import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H13',
  slug: 'particle-net',
  name: 'Particle Net',
  category: 'bg',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['background', 'particle', 'network', 'proximity', 'canvas'],
  params: {
    count: { type: 'range', min: 18, max: 54, step: 1, default: 34, label: 'COUNT' },
    reach: { type: 'range', min: 50, max: 150, step: 2, default: 94, label: 'REACH' },
    drift: { type: 'range', min: 0.2, max: 1.5, step: 0.05, default: 0.75, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

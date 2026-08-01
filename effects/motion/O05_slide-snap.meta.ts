import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O05',
  slug: 'slide-snap',
  name: 'Slide Snap',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'slide', 'overshoot', 'snap', 'speed-lines'],
  params: {
    from: { type: 'enum', options: ['left', 'right', 'top', 'bottom'], default: 'left', label: 'FROM' },
    distance: { type: 'range', min: 0.2, max: 1.4, step: 0.01, default: 0.75, label: 'DISTANCE' },
    damping: { type: 'range', min: 2, max: 10, step: 0.1, default: 5.6, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

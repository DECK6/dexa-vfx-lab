import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O04',
  slug: 'flip-reveal',
  name: 'Flip Reveal',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', '3d', 'flip', 'perspective'],
  params: {
    angle: { type: 'range', min: 90, max: 540, step: 10, default: 180, label: 'FLIP ANGLE' },
    perspective: { type: 'range', min: 0.6, max: 4, step: 0.05, default: 2.2, label: 'PERSPECTIVE' },
    damping: { type: 'range', min: 2, max: 10, step: 0.1, default: 5.2, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

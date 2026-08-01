import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T04',
  slug: 'mask-reveal',
  name: 'Mask Reveal',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['type', 'mask', 'clip-path', 'reveal'],
  params: {
    direction: { type: 'enum', options: ['left', 'right', 'up'], default: 'left', label: 'DIRECTION' },
    duration: { type: 'range', min: 0.15, max: 0.7, step: 0.01, default: 0.62, label: 'DURATION' },
    edge: { type: 'range', min: 1, max: 18, step: 1, default: 5, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

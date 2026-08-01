import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X05',
  slug: 'push-slide',
  name: 'Push Slide',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['transition', 'push', 'slide', 'directional'],
  params: {
    direction: { type: 'enum', options: ['left', 'right', 'up', 'down'], default: 'left', label: 'DIRECTION' },
    overshoot: { type: 'range', min: 0, max: 0.18, step: 0.01, default: 0.06, label: 'OVERSHOOT' },
    edgeWidth: { type: 'range', min: 1, max: 18, step: 1, default: 6, label: 'EDGE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

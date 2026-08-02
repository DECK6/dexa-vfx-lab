import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C13', slug: 'snap-zoom-chain', name: 'Snap Zoom Chain', category: 'camera', kind: 'react', cost: 1, wave: 9,
  tags: ['camera', 'zoom', 'snap', 'chain', 'rhythm'],
  params: {
    steps: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'STEPS' },
    range: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.48, label: 'RANGE' },
    shake: { type: 'range', min: 0, max: 18, step: 1, default: 7, label: 'SHAKE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

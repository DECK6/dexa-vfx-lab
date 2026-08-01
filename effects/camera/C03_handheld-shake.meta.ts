import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C03',
  slug: 'handheld-shake',
  name: 'Handheld Shake',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['camera', 'handheld', 'shake'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'INTENSITY' },
    frequency: { type: 'range', min: 0.5, max: 2, step: 0.01, default: 1, label: 'FREQUENCY' },
    rotation: { type: 'range', min: 0, max: 2, step: 0.01, default: 0.72, label: 'ROTATION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

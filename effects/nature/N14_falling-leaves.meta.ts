import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N14',
  slug: 'falling-leaves',
  name: 'Falling Leaves',
  category: 'nature',
  kind: 'canvas',
  cost: 1,
  wave: 8,
  tags: ['nature', 'leaves', 'fall', 'spiral', 'wind'],
  params: {
    leaves: { type: 'range', min: 10, max: 52, step: 1, default: 28, label: 'LEAVES' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    sway: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.68, label: 'SWAY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

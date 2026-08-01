import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E13',
  slug: 'brushed-metal',
  name: 'Brushed Metal',
  category: 'texture',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['texture', 'metal', 'brushed', 'anisotropic'],
  params: {
    grain: { type: 'range', min: 40, max: 180, step: 1, default: 112, label: 'HAIRLINES' },
    roughness: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.52, label: 'ROUGHNESS' },
    sweepWidth: { type: 'range', min: 0.08, max: 0.42, step: 0.01, default: 0.22, label: 'SWEEP WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

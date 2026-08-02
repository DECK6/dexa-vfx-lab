import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O30',
  slug: 'balloon-float',
  name: 'Balloon Float',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'buoyancy', 'float', 'string'],
  params: {
    lift: { type: 'range', min: 0.15, max: 0.52, step: 0.01, default: 0.34, label: 'LIFT' },
    sway: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'SWAY' },
    string: { type: 'range', min: 0.12, max: 0.34, step: 0.01, default: 0.22, label: 'STRING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

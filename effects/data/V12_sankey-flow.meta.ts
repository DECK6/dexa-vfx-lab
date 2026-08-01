import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V12',
  slug: 'sankey-flow',
  name: 'Sankey Flow',
  category: 'data',
  kind: 'react',
  cost: 2,
  wave: 4,
  tags: ['data', 'sankey', 'flow', 'particles'],
  params: {
    density: { type: 'range', min: 1, max: 7, step: 1, default: 4, label: 'DENSITY' },
    thickness: { type: 'range', min: 0.5, max: 1.5, step: 0.01, default: 1, label: 'THICKNESS' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.65, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

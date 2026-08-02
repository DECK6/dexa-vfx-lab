import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O35',
  slug: 'slingshot',
  name: 'Slingshot',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'slingshot', 'ballistic', 'impact'],
  params: {
    pull: { type: 'range', min: 0.12, max: 0.34, step: 0.01, default: 0.24, label: 'PULL' },
    arc: { type: 'range', min: 0.08, max: 0.32, step: 0.01, default: 0.2, label: 'ARC' },
    impact: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.78, label: 'IMPACT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

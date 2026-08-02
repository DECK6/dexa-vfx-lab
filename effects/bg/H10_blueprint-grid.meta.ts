import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H10',
  slug: 'blueprint-grid',
  name: 'Blueprint Grid',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'blueprint', 'grid', 'technical', 'react'],
  params: {
    spacing: { type: 'range', min: 24, max: 72, step: 2, default: 42, label: 'SPACING' },
    pan: { type: 'range', min: 0, max: 3, step: 1, default: 1, label: 'PAN' },
    detail: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.65, label: 'DETAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

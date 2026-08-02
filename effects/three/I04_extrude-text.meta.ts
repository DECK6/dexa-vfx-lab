import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I04',
  slug: 'extrude-text',
  name: 'Extrude Text',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'type', 'extrude', 'depth', 'shadow-stack'],
  params: {
    layers: { type: 'range', min: 5, max: 24, step: 1, default: 16, label: 'LAYERS' },
    depth: { type: 'range', min: 1, max: 6, step: 0.25, default: 3.25, label: 'DEPTH STEP' },
    perspective: { type: 'range', min: 480, max: 1800, step: 20, default: 980, label: 'PERSPECTIVE' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S21',
  slug: 'starburst-spin',
  name: 'Starburst Spin',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['shape', 'starburst', 'rays', 'spin', 'radial'],
  params: {
    rays: { type: 'range', min: 12, max: 48, step: 2, default: 28, label: 'RAYS' },
    modulation: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'MODULATION' },
    turns: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'TURNS' },
    weight: { type: 'range', min: 1, max: 8, step: 0.5, default: 3.5, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

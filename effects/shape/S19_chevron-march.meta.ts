import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S19',
  slug: 'chevron-march',
  name: 'Chevron March',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['shape', 'chevron', 'march', 'direction', 'belt'],
  params: {
    rows: { type: 'range', min: 3, max: 9, step: 1, default: 6, label: 'ROWS' },
    spacing: { type: 'range', min: 70, max: 180, step: 2, default: 118, label: 'SPACING' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    weight: { type: 'range', min: 2, max: 12, step: 0.5, default: 6, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

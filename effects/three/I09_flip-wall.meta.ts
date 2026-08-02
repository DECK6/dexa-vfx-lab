import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I09',
  slug: 'flip-wall',
  name: 'Flip Wall',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'tiles', 'flip', 'wave'],
  params: {
    columns: { type: 'range', min: 3, max: 8, step: 1, default: 6, label: 'COLUMNS' },
    stagger: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.46, label: 'STAGGER' },
    depth: { type: 'range', min: 4, max: 28, step: 1, default: 14, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

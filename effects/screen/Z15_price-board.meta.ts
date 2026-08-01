import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z15',
  slug: 'price-board',
  name: 'Price Board',
  category: 'screen',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['screen', 'price', 'market', 'ticker', 'flip-row'],
  params: {
    rows: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'ROWS' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    flipDepth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'FLIP DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

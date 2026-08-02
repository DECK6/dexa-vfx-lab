import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O31',
  slug: 'paper-fall',
  name: 'Paper Fall',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'paper', 'fall', 'flutter'],
  params: {
    drift: { type: 'range', min: 0.1, max: 0.55, step: 0.01, default: 0.34, label: 'DRIFT' },
    flutter: { type: 'range', min: 1, max: 5, step: 0.25, default: 2.75, label: 'FLUTTER' },
    tumble: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'TUMBLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

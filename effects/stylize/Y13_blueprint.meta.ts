import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y13',
  slug: 'blueprint',
  name: 'Blueprint',
  category: 'stylize',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['stylize', 'blueprint', 'technical', 'diagram', 'react'],
  params: {
    grid: { type: 'range', min: 24, max: 72, step: 2, default: 40, label: 'GRID' },
    detail: { type: 'range', min: 0.3, max: 1, step: 0.01, default: 0.78, label: 'DETAIL' },
    drift: { type: 'range', min: 0, max: 12, step: 0.5, default: 4, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

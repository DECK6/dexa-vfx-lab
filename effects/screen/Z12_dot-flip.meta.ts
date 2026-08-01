import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z12',
  slug: 'dot-flip',
  name: 'Dot Flip',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'flip-dot', 'mechanical', 'wave', 'matrix'],
  params: {
    columns: { type: 'range', min: 16, max: 42, step: 1, default: 28, label: 'COLUMNS' },
    gap: { type: 'range', min: 0.08, max: 0.38, step: 0.01, default: 0.2, label: 'DOT GAP' },
    waves: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'WAVES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

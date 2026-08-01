import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T07',
  slug: 'variable-weight-morph',
  name: 'Variable Weight Morph',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['type', 'variable-font', 'weight', 'width', 'morph'],
  params: {
    phrase: { type: 'enum', options: ['VARIABLE', 'MORPH TYPE', 'DEXA VFX'], default: 'VARIABLE', label: 'PHRASE' },
    minWeight: { type: 'range', min: 100, max: 500, step: 10, default: 180, label: 'MIN WEIGHT' },
    maxWeight: { type: 'range', min: 600, max: 900, step: 10, default: 880, label: 'MAX WEIGHT' },
    widthShift: { type: 'range', min: 0.1, max: 0.45, step: 0.01, default: 0.3, label: 'WIDTH SHIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

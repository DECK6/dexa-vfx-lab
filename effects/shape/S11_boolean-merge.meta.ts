import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S11',
  slug: 'boolean-merge',
  name: 'Boolean Merge',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['shape', 'boolean', 'mask', 'svg'],
  params: {
    separation: { type: 'range', min: 0.15, max: 0.7, step: 0.01, default: 0.42, label: 'SEPARATION' },
    softness: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.35, label: 'SOFTNESS' },
    outline: { type: 'toggle', default: true, label: 'OUTLINE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

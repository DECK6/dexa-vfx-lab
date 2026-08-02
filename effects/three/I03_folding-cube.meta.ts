import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I03',
  slug: 'folding-cube',
  name: 'Folding Cube',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'cube', 'fold', 'net', 'hinge'],
  params: {
    size: { type: 'range', min: 0.18, max: 0.36, step: 0.01, default: 0.26, label: 'FACE SIZE' },
    foldAngle: { type: 'range', min: 55, max: 90, step: 1, default: 90, label: 'FOLD ANGLE' },
    perspective: { type: 'range', min: 520, max: 1800, step: 20, default: 980, label: 'PERSPECTIVE' },
    shade: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.48, label: 'SHADE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

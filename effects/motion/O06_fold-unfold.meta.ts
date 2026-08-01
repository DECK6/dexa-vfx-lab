import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O06',
  slug: 'fold-unfold',
  name: 'Fold Unfold',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'fold', 'paper', '3d', 'hinge'],
  params: {
    foldAngle: { type: 'range', min: 90, max: 180, step: 5, default: 165, label: 'FOLD ANGLE' },
    stagger: { type: 'range', min: 0, max: 0.2, step: 0.01, default: 0.1, label: 'STAGGER' },
    shade: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.7, label: 'BACK SHADE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

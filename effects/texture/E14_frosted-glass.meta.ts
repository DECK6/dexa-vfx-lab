import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E14',
  slug: 'frosted-glass',
  name: 'Frosted Glass',
  category: 'texture',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['texture', 'glass', 'frost', 'condensation'],
  params: {
    frost: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'FROST' },
    diffusion: { type: 'range', min: 1, max: 12, step: 0.5, default: 7, label: 'DIFFUSION' },
    wipeWidth: { type: 'range', min: 0.06, max: 0.3, step: 0.01, default: 0.15, label: 'WIPE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

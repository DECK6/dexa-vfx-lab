import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P13',
  slug: 'attract-repel',
  name: 'Attract Repel',
  category: 'particle',
  kind: 'canvas',
  cost: 3,
  wave: 4,
  tags: ['particle', 'attraction', 'repulsion', 'orbit'],
  stateful: true,
  params: {
    count: { type: 'range', min: 32, max: 180, step: 1, default: 108, label: 'PARTICLES' },
    force: { type: 'range', min: 0.2, max: 2, step: 0.01, default: 0.92, label: 'FIELD FORCE' },
    separation: { type: 'range', min: 0.15, max: 0.55, step: 0.01, default: 0.34, label: 'POLE GAP' },
    size: { type: 'range', min: 1, max: 6, step: 0.1, default: 2.8, label: 'PARTICLE SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

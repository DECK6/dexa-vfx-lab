import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q01',
  slug: 'metaball-merge',
  name: 'Metaball Merge',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['liquid', 'metaball', 'merge', 'blob', 'webgl'],
  params: {
    count: { type: 'enum', options: ['4', '6', '8'], default: '6', label: 'BALLS' },
    radius: { type: 'range', min: 0.08, max: 0.28, step: 0.005, default: 0.16, label: 'RADIUS' },
    softness: { type: 'range', min: 0.02, max: 0.24, step: 0.005, default: 0.09, label: 'SOFTNESS' },
    refraction: { type: 'range', min: 0, max: 0.08, step: 0.002, default: 0.024, label: 'REFRACTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

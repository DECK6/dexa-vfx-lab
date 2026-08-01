import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q06',
  slug: 'wave-tank',
  name: 'Wave Tank',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['liquid', 'wave', 'interference', 'refraction', 'webgl'],
  params: {
    sources: { type: 'enum', options: ['3', '4', '5'], default: '4', label: 'SOURCES' },
    frequency: { type: 'range', min: 8, max: 28, step: 0.5, default: 17, label: 'FREQUENCY' },
    refraction: { type: 'range', min: 0, max: 0.08, step: 0.002, default: 0.032, label: 'REFRACTION' },
    damping: { type: 'range', min: 0.5, max: 4, step: 0.1, default: 1.8, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

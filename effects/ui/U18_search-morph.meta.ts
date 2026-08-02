import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U18',
  slug: 'search-morph',
  name: 'Search Morph',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'search', 'morph', 'typing'],
  params: {
    speed: { type: 'range', min: 0.6, max: 1.6, step: 0.05, default: 1, label: 'SPEED' },
    width: { type: 'range', min: 0.45, max: 0.82, step: 0.01, default: 0.68, label: 'WIDTH' },
    query: { type: 'enum', options: ['DEXA VFX', 'SIGNAL LAB', 'MOTION FX'], default: 'DEXA VFX', label: 'QUERY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

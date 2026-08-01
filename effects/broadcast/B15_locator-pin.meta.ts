import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B15',
  slug: 'locator-pin',
  name: 'Locator Pin',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'locator', 'map', 'pin'],
  params: {
    place: { type: 'enum', options: ['DEXA HQ', 'SEOUL / KR', 'VFX LAB'], default: 'DEXA HQ', label: 'PLACE' },
    zoom: { type: 'range', min: 0.7, max: 1.4, step: 0.05, default: 1, label: 'ZOOM' },
    rings: { type: 'range', min: 1, max: 4, step: 1, default: 3, label: 'RINGS' },
    grid: { type: 'toggle', default: true, label: 'MAP GRID' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U25',
  slug: 'dock-magnify',
  name: 'Dock Magnify',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'dock', 'magnify', 'proximity'],
  params: {
    icons: { type: 'range', min: 5, max: 9, step: 1, default: 7, label: 'ICONS' },
    magnify: { type: 'range', min: 1.25, max: 2.1, step: 0.01, default: 1.72, label: 'MAGNIFY' },
    spread: { type: 'range', min: 0.65, max: 1.5, step: 0.01, default: 1, label: 'SPREAD' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

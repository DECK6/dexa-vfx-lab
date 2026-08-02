import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U26',
  slug: 'window-manage',
  name: 'Window Manage',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'window', 'snap', 'minimize'],
  params: {
    windows: { type: 'range', min: 2, max: 4, step: 1, default: 3, label: 'WINDOWS' },
    cycles: { type: 'range', min: 1, max: 2, step: 1, default: 1, label: 'CYCLES' },
    gap: { type: 'range', min: 4, max: 18, step: 1, default: 10, label: 'GAP' },
    spring: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.62, label: 'SPRING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

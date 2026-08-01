import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X11',
  slug: 'shatter-break',
  name: 'Shatter Break',
  category: 'trans',
  kind: 'canvas',
  cost: 3,
  wave: 3,
  tags: ['transition', 'shatter', 'break', 'fragments', 'canvas'],
  params: {
    grid: { type: 'range', min: 4, max: 9, step: 1, default: 7, label: 'GRID' },
    force: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'FORCE' },
    spin: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'SPIN' },
    gap: { type: 'range', min: 0.5, max: 5, step: 0.1, default: 1.4, label: 'GAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

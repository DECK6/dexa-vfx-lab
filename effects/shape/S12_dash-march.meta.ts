import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S12',
  slug: 'dash-march',
  name: 'Dash March',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['shape', 'dash', 'frame', 'march'],
  params: {
    dashLength: { type: 'range', min: 8, max: 64, step: 1, default: 28, label: 'DASH LENGTH' },
    gap: { type: 'range', min: 4, max: 48, step: 1, default: 16, label: 'GAP' },
    thickness: { type: 'range', min: 1, max: 10, step: 0.5, default: 4, label: 'THICKNESS' },
    laps: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'LAPS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

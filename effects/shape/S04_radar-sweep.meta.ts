import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S04',
  slug: 'radar-sweep',
  name: 'Radar Sweep',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['shape', 'radar', 'sweep', 'blip'],
  params: {
    speed: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1, label: 'SPEED' },
    trail: { type: 'range', min: 10, max: 100, step: 1, default: 54, label: 'TRAIL' },
    blips: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'BLIPS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

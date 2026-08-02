import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S24',
  slug: 'pill-stack',
  name: 'Pill Stack',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['shape', 'pill', 'stack', 'fall', 'alignment'],
  params: {
    pills: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'PILLS' },
    drop: { type: 'range', min: 0.4, max: 1, step: 0.01, default: 0.76, label: 'DROP' },
    spacing: { type: 'range', min: 48, max: 92, step: 2, default: 68, label: 'SPACING' },
    width: { type: 'range', min: 180, max: 420, step: 10, default: 300, label: 'WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

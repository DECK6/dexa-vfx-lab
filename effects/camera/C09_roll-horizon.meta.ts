import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C09',
  slug: 'roll-horizon',
  name: 'Roll Horizon',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['camera', 'roll', 'horizon', 'rotation'],
  params: {
    angle: { type: 'range', min: 4, max: 28, step: 1, default: 16, label: 'ROLL ANGLE' },
    travel: { type: 'range', min: 0, max: 0.18, step: 0.01, default: 0.08, label: 'VERTICAL TRAVEL' },
    laps: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'LAPS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

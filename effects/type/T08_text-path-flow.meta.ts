import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T08',
  slug: 'text-path-flow',
  name: 'Text Path Flow',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['type', 'path', 'curve', 'flow', 'svg'],
  params: {
    phrase: { type: 'enum', options: ['DEXA / MOTION /', 'FOLLOW THE SIGNAL /', 'TYPE IN ORBIT /'], default: 'DEXA / MOTION /', label: 'PHRASE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'LAPS' },
    curve: { type: 'range', min: 0.45, max: 0.9, step: 0.01, default: 0.68, label: 'CURVE' },
    direction: { type: 'enum', options: ['clockwise', 'counter'], default: 'clockwise', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

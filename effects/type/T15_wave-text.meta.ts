import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T15',
  slug: 'wave-text',
  name: 'Wave Text',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['type', 'wave', 'sine', 'distortion'],
  params: {
    amplitude: { type: 'range', min: 0, max: 36, step: 1, default: 16, label: 'AMPLITUDE' },
    frequency: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'FREQUENCY' },
    bands: { type: 'range', min: 6, max: 24, step: 1, default: 14, label: 'BANDS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A15',
  slug: 'bass-shake',
  name: 'Bass Shake',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'bass', 'shake', 'kick', 'impact'],
  params: {
    sensitivity: { type: 'range', min: 0.4, max: 2.5, step: 0.05, default: 1.45, label: 'SENSITIVITY' },
    distance: { type: 'range', min: 0, max: 24, step: 1, default: 10, label: 'SHAKE DISTANCE' },
    blur: { type: 'range', min: 0, max: 12, step: 0.5, default: 4, label: 'IMPACT BLUR' },
    response: { type: 'enum', options: ['tight', 'heavy', 'sub'], default: 'heavy', label: 'RESPONSE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

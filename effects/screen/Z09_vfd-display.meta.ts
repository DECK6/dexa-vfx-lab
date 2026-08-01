import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z09',
  slug: 'vfd-display',
  name: 'VFD Display',
  category: 'screen',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['screen', 'vfd', 'vacuum-fluorescent', 'segments', 'glow'],
  params: {
    digits: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'DIGITS' },
    intensity: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.82, label: 'INTENSITY' },
    pulse: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'PULSE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G01',
  slug: 'rgb-split',
  name: 'RGB Split',
  category: 'glitch',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['glitch', 'chromatic', 'rgb'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    separation: { type: 'range', min: 0, max: 32, step: 1, default: 10, label: 'SEPARATION' },
    spikes: { type: 'toggle', default: true, label: 'SPIKES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

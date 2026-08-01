import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G18',
  slug: 'wave-tear',
  name: 'Wave Tear',
  category: 'glitch',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['glitch', 'wave-tear', 'vertical-band', 'phase-slip', 'webgl'],
  params: {
    bands: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'BANDS' },
    amplitude: { type: 'range', min: 0.01, max: 0.18, step: 0.005, default: 0.075, label: 'AMPLITUDE' },
    frequency: { type: 'range', min: 2, max: 14, step: 0.5, default: 7, label: 'FREQUENCY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

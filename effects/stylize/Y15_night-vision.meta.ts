import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y15',
  slug: 'night-vision',
  name: 'Night Vision',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'night-vision', 'phosphor', 'binocular', 'webgl'],
  params: {
    gain: { type: 'range', min: 0.7, max: 2.4, step: 0.01, default: 1.55, label: 'GAIN' },
    grain: { type: 'range', min: 0, max: 0.3, step: 0.005, default: 0.11, label: 'GRAIN' },
    scan: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'SCAN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y14',
  slug: 'thermal-cam',
  name: 'Thermal Cam',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'thermal', 'heatmap', 'camera', 'webgl'],
  params: {
    gain: { type: 'range', min: 0.6, max: 2, step: 0.01, default: 1.35, label: 'HEAT GAIN' },
    noise: { type: 'range', min: 0, max: 0.18, step: 0.005, default: 0.055, label: 'SENSOR NOISE' },
    reticle: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.8, label: 'RETICLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

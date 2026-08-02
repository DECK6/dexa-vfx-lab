import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q14',
  slug: 'rain-ripple',
  name: 'Rain Ripple',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'rain', 'ripple', 'impact', 'webgl'],
  params: {
    impacts: { type: 'enum', options: ['4', '7', '10'], default: '7', label: 'IMPACTS' },
    spread: { type: 'range', min: 0.18, max: 0.7, step: 0.01, default: 0.46, label: 'SPREAD' },
    strength: { type: 'range', min: 0.15, max: 1, step: 0.01, default: 0.62, label: 'STRENGTH' },
    refraction: { type: 'range', min: 0, max: 0.06, step: 0.002, default: 0.024, label: 'REFRACTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E15', slug: 'hologram-foil', name: 'Hologram Foil', category: 'texture', kind: 'webgl', cost: 2, wave: 9,
  tags: ['texture', 'hologram', 'foil', 'iridescent', 'webgl'],
  params: {
    bands: { type: 'range', min: 3, max: 12, step: 1, default: 7, label: 'BANDS' },
    shine: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.82, label: 'SHINE' },
    angle: { type: 'range', min: -1.5, max: 1.5, step: 0.05, default: 0.62, label: 'ANGLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F10',
  slug: 'iris-pull',
  name: 'Iris Pull',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'iris', 'aperture', 'exposure', 'focus'],
  params: {
    aperture: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'APERTURE' },
    blur: { type: 'range', min: 0, max: 18, step: 0.5, default: 8, label: 'BOKEH BLUR' },
    exposure: { type: 'range', min: 0.4, max: 1.6, step: 0.01, default: 1.05, label: 'EXPOSURE' },
    blades: { type: 'enum', options: ['6', '8', '10'], default: '8', label: 'BLADES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

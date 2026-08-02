import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C14', slug: 'vertigo-rise', name: 'Vertigo Rise', category: 'camera', kind: 'react', cost: 2, wave: 9,
  tags: ['camera', 'vertigo', 'dolly-zoom', 'rise', 'perspective'],
  params: {
    rise: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.48, label: 'RISE' },
    vertigo: { type: 'range', min: 0.1, max: 0.7, step: 0.01, default: 0.42, label: 'VERTIGO' },
    horizon: { type: 'range', min: 35, max: 70, step: 1, default: 54, label: 'HORIZON' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

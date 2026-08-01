import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X03',
  slug: 'zoom-punch',
  name: 'Zoom Punch',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['transition', 'zoom', 'blur'],
  params: {
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    blur: { type: 'range', min: 4, max: 32, step: 1, default: 18, label: 'BLUR' },
    duration: { type: 'range', min: 0.05, max: 0.2, step: 0.01, default: 0.11, label: 'DURATION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

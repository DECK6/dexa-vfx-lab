import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z01',
  slug: 'led-matrix',
  name: 'LED Matrix',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'led', 'matrix', 'display', 'afterglow'],
  params: {
    pitch: { type: 'range', min: 7, max: 22, step: 1, default: 12, label: 'PITCH' },
    bloom: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'BLOOM' },
    persistence: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'PERSISTENCE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

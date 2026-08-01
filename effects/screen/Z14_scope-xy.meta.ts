import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z14',
  slug: 'scope-xy',
  name: 'Scope XY',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'oscilloscope', 'xy', 'lissajous', 'phosphor'],
  params: {
    frequencyX: { type: 'range', min: 1, max: 7, step: 1, default: 3, label: 'X FREQUENCY' },
    frequencyY: { type: 'range', min: 1, max: 7, step: 1, default: 2, label: 'Y FREQUENCY' },
    trail: { type: 'range', min: 0.08, max: 1, step: 0.01, default: 0.58, label: 'TRAIL' },
    gain: { type: 'range', min: 0.45, max: 1, step: 0.01, default: 0.82, label: 'GAIN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

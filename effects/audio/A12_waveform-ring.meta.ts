import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A12',
  slug: 'waveform-ring',
  name: 'Waveform Ring',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['audio', 'waveform', 'ring', 'radial', 'rotation'],
  params: {
    segments: { type: 'range', min: 48, max: 160, step: 4, default: 96, label: 'SEGMENTS' },
    radius: { type: 'range', min: 0.16, max: 0.34, step: 0.01, default: 0.24, label: 'RADIUS' },
    gain: { type: 'range', min: 0.4, max: 2.6, step: 0.05, default: 1.3, label: 'GAIN' },
    rotation: { type: 'range', min: 1, max: 4, step: 1, default: 1, label: 'ROTATION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

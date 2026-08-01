import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A03',
  slug: 'circular-viz',
  name: 'Circular Viz',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['audio', 'circular', 'visualizer', 'spectrum'],
  params: {
    segments: { type: 'range', min: 24, max: 96, step: 1, default: 64, label: 'SEGMENTS' },
    radius: { type: 'range', min: 0.16, max: 0.36, step: 0.01, default: 0.25, label: 'RADIUS' },
    gain: { type: 'range', min: 0.5, max: 3, step: 0.05, default: 1.5, label: 'GAIN' },
    thickness: { type: 'range', min: 1, max: 6, step: 0.25, default: 2.5, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O27',
  slug: 'rope-swing',
  name: 'Rope Swing',
  category: 'motion',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['motion', 'rope', 'swing', 'kinematics'],
  params: {
    joints: { type: 'range', min: 8, max: 24, step: 2, default: 18, label: 'JOINTS' },
    angle: { type: 'range', min: 12, max: 58, step: 1, default: 38, label: 'ANGLE' },
    damping: { type: 'range', min: 0.4, max: 2.2, step: 0.05, default: 1.15, label: 'DAMPING' },
    length: { type: 'range', min: 0.35, max: 0.78, step: 0.01, default: 0.62, label: 'LENGTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

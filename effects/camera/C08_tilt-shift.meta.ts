import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C08',
  slug: 'tilt-shift',
  name: 'Tilt Shift',
  category: 'camera',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['camera', 'tilt-shift', 'focus', 'miniature', 'blur', 'webgl'],
  params: {
    focus: { type: 'range', min: 0.2, max: 0.8, step: 0.01, default: 0.5, label: 'FOCUS' },
    bandWidth: { type: 'range', min: 0.08, max: 0.42, step: 0.01, default: 0.2, label: 'BAND WIDTH' },
    blur: { type: 'range', min: 0.004, max: 0.035, step: 0.001, default: 0.022, label: 'BLUR' },
    angle: { type: 'range', min: -35, max: 35, step: 1, default: -8, label: 'ANGLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

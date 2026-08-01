import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O07',
  slug: 'focus-pop',
  name: 'Focus Pop',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'focus', 'blur', 'lens', 'camera'],
  params: {
    blur: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'DEFOCUS' },
    startScale: { type: 'range', min: 1, max: 1.8, step: 0.01, default: 1.34, label: 'START SCALE' },
    hunt: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'FOCUS HUNT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

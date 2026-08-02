import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H15',
  slug: 'ink-wash-bg',
  name: 'Ink Wash BG',
  category: 'bg',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['background', 'ink', 'wash', 'organic', 'webgl'],
  params: {
    scale: { type: 'range', min: 1.5, max: 6, step: 0.1, default: 3.2, label: 'SCALE' },
    bleed: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.7, label: 'BLEED' },
    layers: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'LAYERS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

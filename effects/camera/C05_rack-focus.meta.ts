import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C05',
  slug: 'rack-focus',
  name: 'Rack Focus',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['camera', 'focus', 'depth'],
  params: {
    blur: { type: 'range', min: 2, max: 24, step: 0.5, default: 12, label: 'BLUR' },
    focusWidth: { type: 'range', min: 8, max: 48, step: 1, default: 24, label: 'FOCUS WIDTH' },
    direction: { type: 'enum', options: ['horizontal', 'vertical'], default: 'horizontal', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

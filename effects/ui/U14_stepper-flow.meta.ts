import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U14',
  slug: 'stepper-flow',
  name: 'Stepper Flow',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'stepper', 'progress', 'workflow'],
  params: {
    steps: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'STEPS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    direction: { type: 'enum', options: ['horizontal', 'vertical'], default: 'horizontal', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

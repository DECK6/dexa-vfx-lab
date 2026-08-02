import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T23',
  slug: 'liquid-fill-text',
  name: 'Liquid Fill Text',
  category: 'type',
  kind: 'react',
  cost: 2,
  wave: 9,
  tags: ['type', 'liquid', 'fill', 'wave'],
  params: {
    text: { type: 'enum', options: ['DEXA', 'LIQUID', 'FLOW'], default: 'LIQUID', label: 'TEXT' },
    level: { type: 'range', min: 0.45, max: 1, step: 0.01, default: 0.86, label: 'LEVEL' },
    wave: { type: 'range', min: 4, max: 18, step: 1, default: 10, label: 'WAVE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

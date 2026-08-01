import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B14',
  slug: 'stat-callout',
  name: 'Stat Callout',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'stat', 'number', 'callout'],
  params: {
    value: { type: 'range', min: 1, max: 999, step: 1, default: 87, label: 'VALUE' },
    unit: { type: 'enum', options: ['%', 'K', 'M', 'FPS'], default: '%', label: 'UNIT' },
    label: { type: 'enum', options: ['DEXA REACH', 'VFX SIGNAL', 'FRAME GROWTH'], default: 'DEXA REACH', label: 'LABEL' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

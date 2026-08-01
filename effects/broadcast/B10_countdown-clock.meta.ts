import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B10',
  slug: 'countdown-clock',
  name: 'Countdown Clock',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'countdown', 'clock', 'flip'],
  params: {
    seconds: { type: 'range', min: 5, max: 60, step: 1, default: 30, label: 'SECONDS' },
    ring: { type: 'range', min: 0.4, max: 1, step: 0.05, default: 0.82, label: 'RING' },
    label: { type: 'enum', options: ['ON AIR IN', 'DEXA STARTS', 'STANDBY'], default: 'ON AIR IN', label: 'LABEL' },
    urgent: { type: 'toggle', default: true, label: 'URGENT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

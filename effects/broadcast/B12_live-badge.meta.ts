import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B12',
  slug: 'live-badge',
  name: 'Live Badge',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'live', 'badge', 'timecode'],
  params: {
    label: { type: 'enum', options: ['LIVE', 'ON AIR', 'DEXA LIVE'], default: 'LIVE', label: 'LABEL' },
    pulse: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'PULSE' },
    position: { type: 'enum', options: ['top-left', 'top-right', 'bottom-right'], default: 'top-right', label: 'POSITION' },
    timecode: { type: 'toggle', default: true, label: 'TIMECODE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

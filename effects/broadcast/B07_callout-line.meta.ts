import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B07',
  slug: 'callout-line',
  name: 'Callout Line',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'callout', 'leader-line', 'annotation'],
  params: {
    label: { type: 'enum', options: ['DEXA VFX / SIGNAL', 'DEXA VFX / TARGET', 'DEXA VFX / DETAIL'], default: 'DEXA VFX / SIGNAL', label: 'LABEL' },
    side: { type: 'enum', options: ['right', 'left'], default: 'right', label: 'SIDE' },
    reach: { type: 'range', min: 0.18, max: 0.46, step: 0.01, default: 0.32, label: 'REACH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B17',
  slug: 'schedule-board',
  name: 'Schedule Board',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'schedule', 'programming', 'highlight'],
  params: {
    rows: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'ROWS' },
    pace: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'PACE' },
    label: { type: 'enum', options: ['DEXA VFX', 'DEXA LIVE', 'DEXA NIGHT'], default: 'DEXA VFX', label: 'CHANNEL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

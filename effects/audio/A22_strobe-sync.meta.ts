import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A22',
  slug: 'strobe-sync',
  name: 'Strobe Sync',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'strobe', 'beat', 'afterimage'],
  params: {
    threshold: { type: 'range', min: 0.05, max: 0.8, step: 0.05, default: 0.34, label: 'THRESHOLD' },
    intensity: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1.25, label: 'INTENSITY' },
    trails: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'TRAILS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

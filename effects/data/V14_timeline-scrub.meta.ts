import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V14',
  slug: 'timeline-scrub',
  name: 'Timeline Scrub',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['data', 'timeline', 'scrub', 'playhead'],
  params: {
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    tracks: { type: 'range', min: 2, max: 4, step: 1, default: 3, label: 'TRACKS' },
    scale: { type: 'enum', options: ['seconds', 'frames'], default: 'seconds', label: 'SCALE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

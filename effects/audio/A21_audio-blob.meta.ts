import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A21',
  slug: 'audio-blob',
  name: 'Audio Blob',
  category: 'audio',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['audio', 'blob', 'organic', 'spectrum'],
  params: {
    gain: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.35, label: 'GAIN' },
    lobes: { type: 'range', min: 8, max: 20, step: 2, default: 14, label: 'LOBES' },
    wobble: { type: 'range', min: 0.1, max: 1, step: 0.05, default: 0.62, label: 'WOBBLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

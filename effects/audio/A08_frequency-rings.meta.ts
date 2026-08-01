import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A08',
  slug: 'frequency-rings',
  name: 'Frequency Rings',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 4,
  tags: ['audio', 'frequency', 'rings', 'spectrum'],
  params: {
    gain: { type: 'range', min: 0.4, max: 2.5, step: 0.05, default: 1.25, label: 'GAIN' },
    spacing: { type: 'range', min: 0.65, max: 1.5, step: 0.05, default: 1, label: 'SPACING' },
    lineWidth: { type: 'range', min: 0.7, max: 4, step: 0.1, default: 1.6, label: 'LINE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

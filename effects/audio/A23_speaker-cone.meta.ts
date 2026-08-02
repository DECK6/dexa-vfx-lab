import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A23',
  slug: 'speaker-cone',
  name: 'Speaker Cone',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'speaker', 'woofer', 'bass'],
  params: {
    bassGain: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.45, label: 'BASS GAIN' },
    coneDepth: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1, label: 'CONE DEPTH' },
    ripples: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'RIPPLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A24',
  slug: 'chromagram',
  name: 'Chromagram',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['audio', 'chromagram', 'pitch', 'color-wheel'],
  params: {
    gain: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.35, label: 'GAIN' },
    turns: { type: 'range', min: 0, max: 3, step: 1, default: 1, label: 'TURNS' },
    radius: { type: 'range', min: 0.18, max: 0.36, step: 0.01, default: 0.27, label: 'RADIUS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

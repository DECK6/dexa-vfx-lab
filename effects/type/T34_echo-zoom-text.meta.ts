import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T34',
  slug: 'echo-zoom-text',
  name: 'Echo Zoom Text',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'echo', 'zoom', 'trail'],
  params: {
    echoes: { type: 'range', min: 3, max: 9, step: 1, default: 6, label: 'ECHOES' },
    zoom: { type: 'range', min: 0.12, max: 0.7, step: 0.01, default: 0.38, label: 'ZOOM' },
    decay: { type: 'range', min: 0.35, max: 0.9, step: 0.01, default: 0.68, label: 'DECAY' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A19',
  slug: 'note-rain',
  name: 'Note Rain',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['audio', 'notes', 'rain', 'particles'],
  params: {
    density: { type: 'range', min: 20, max: 72, step: 4, default: 44, label: 'DENSITY' },
    speed: { type: 'enum', options: ['drift', 'fall', 'storm'], default: 'fall', label: 'SPEED' },
    threshold: { type: 'range', min: 0, max: 0.75, step: 0.05, default: 0.2, label: 'THRESHOLD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F01',
  slug: 'letterbox-reveal',
  name: 'Letterbox Reveal',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'letterbox', 'reveal', 'title'],
  params: {
    aperture: { type: 'range', min: 0.32, max: 0.62, step: 0.01, default: 0.43, label: 'APERTURE' },
    hold: { type: 'range', min: 0.2, max: 0.7, step: 0.01, default: 0.48, label: 'HOLD' },
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA CINEMA', 'A DEXA FILM'], default: 'DEXA CINEMA', label: 'TITLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

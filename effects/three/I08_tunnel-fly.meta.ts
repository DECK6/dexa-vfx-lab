import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I08',
  slug: 'tunnel-fly',
  name: 'Tunnel Fly',
  category: 'three',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['three', 'tunnel', 'rings', 'flythrough', 'webgl'],
  params: {
    rings: { type: 'range', min: 2, max: 10, step: 0.25, default: 5.5, label: 'RINGS' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    twist: { type: 'range', min: 0, max: 5, step: 0.1, default: 2.2, label: 'TWIST' },
    aperture: { type: 'range', min: 0.08, max: 0.3, step: 0.01, default: 0.17, label: 'APERTURE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A14',
  slug: 'lissajous-audio',
  name: 'Lissajous Audio',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['audio', 'lissajous', 'phase', 'oscilloscope', 'bands'],
  params: {
    trails: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'TRAILS' },
    ratio: { type: 'enum', options: ['2:3', '3:4', '3:5'], default: '3:4', label: 'RATIO' },
    phaseSpread: { type: 'range', min: 0.1, max: 1.2, step: 0.05, default: 0.55, label: 'PHASE SPREAD' },
    gain: { type: 'range', min: 0.4, max: 2.4, step: 0.05, default: 1.25, label: 'GAIN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

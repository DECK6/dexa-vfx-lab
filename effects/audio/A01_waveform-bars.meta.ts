import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A01',
  slug: 'waveform-bars',
  name: 'Waveform Bars',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['audio', 'waveform', 'bars', 'spectrum'],
  params: {
    barCount: { type: 'range', min: 8, max: 64, step: 1, default: 32, label: 'BAR COUNT' },
    gain: { type: 'range', min: 0.25, max: 3, step: 0.05, default: 1.35, label: 'GAIN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

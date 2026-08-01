import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A07',
  slug: 'waveform-line',
  name: 'Waveform Line',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['audio', 'waveform', 'line', 'signal'],
  params: {
    amplitude: { type: 'range', min: 0.1, max: 0.46, step: 0.01, default: 0.3, label: 'AMPLITUDE' },
    frequency: { type: 'range', min: 1, max: 6, step: 0.5, default: 3, label: 'FREQUENCY' },
    detail: { type: 'range', min: 20, max: 64, step: 2, default: 44, label: 'DETAIL' },
    sensitivity: { type: 'range', min: 0.5, max: 2.2, step: 0.05, default: 1.25, label: 'SENSITIVITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

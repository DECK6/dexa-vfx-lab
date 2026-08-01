import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A05',
  slug: 'oscilloscope',
  name: 'Oscilloscope',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['audio', 'oscilloscope', 'waveform', 'signal'],
  params: {
    gain: { type: 'range', min: 0.25, max: 3, step: 0.05, default: 1.4, label: 'GAIN' },
    sweep: { type: 'range', min: 1, max: 5, step: 1, default: 2, label: 'SWEEP' },
    thickness: { type: 'range', min: 1, max: 5, step: 0.1, default: 2.2, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

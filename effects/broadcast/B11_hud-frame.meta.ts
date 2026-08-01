import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B11',
  slug: 'hud-frame',
  name: 'HUD Frame',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'hud', 'telemetry', 'crosshair'],
  params: {
    density: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'DENSITY' },
    scanSpeed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SCAN SPEED' },
    mode: { type: 'enum', options: ['TRACK', 'ACQUIRE', 'SURVEY'], default: 'TRACK', label: 'MODE' },
    telemetry: { type: 'toggle', default: true, label: 'TELEMETRY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

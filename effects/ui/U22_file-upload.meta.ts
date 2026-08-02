import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U22',
  slug: 'file-upload',
  name: 'File Upload',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'upload', 'dropzone', 'progress'],
  params: {
    files: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'FILES' },
    cycles: { type: 'range', min: 1, max: 2, step: 1, default: 1, label: 'CYCLES' },
    drop: { type: 'range', min: 0.5, max: 1.4, step: 0.01, default: 0.92, label: 'DROP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

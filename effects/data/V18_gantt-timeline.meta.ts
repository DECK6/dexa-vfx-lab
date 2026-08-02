import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V18',
  slug: 'gantt-timeline',
  name: 'Gantt Timeline',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'gantt', 'timeline', 'tasks', 'planning'],
  params: {
    tasks: { type: 'range', min: 4, max: 7, step: 1, default: 6, label: 'TASKS' },
    density: { type: 'range', min: 7, max: 14, step: 1, default: 10, label: 'DAYS' },
    progress: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.68, label: 'PROGRESS' },
    pace: { type: 'range', min: 0.6, max: 1.6, step: 0.1, default: 1, label: 'PACE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;

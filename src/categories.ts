/** Category data (SPEC §4) — adding a category is a data change only. */
export interface FxCategory {
  key: string;
  label: string;
  order: number;
}

export const categories: FxCategory[] = [
  { key: 'type', label: 'TYPE', order: 1 },
  { key: 'glitch', label: 'GLITCH', order: 2 },
  { key: 'light', label: 'LIGHT', order: 3 },
  { key: 'particle', label: 'PARTICLE', order: 4 },
  { key: 'shape', label: 'SHAPE', order: 5 },
  { key: 'trans', label: 'TRANS', order: 6 },
  { key: 'camera', label: 'CAMERA', order: 7 },
  { key: 'distort', label: 'DISTORT', order: 8 },
  { key: 'texture', label: 'TEXTURE', order: 9 },
  { key: 'data', label: 'DATA', order: 10 },
  { key: 'ui', label: 'UI', order: 11 },
  { key: 'nature', label: 'NATURE', order: 12 },
  { key: 'pattern', label: 'PATTERN', order: 13 },
  { key: 'liquid', label: 'LIQUID', order: 14 },
  { key: 'mask', label: 'MASK', order: 15 },
  { key: 'audio', label: 'AUDIO', order: 16 },
];

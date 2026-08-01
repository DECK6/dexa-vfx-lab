import type { FxSubject } from './types';

/**
 * Shared subject rasterizer — provides FxSubject.bitmap for canvas/webgl kernels.
 * Default subject: DEXA triad mark (3 nested triangles, cyan point) + mono label.
 * Transparent background — effects paint their own (#0D0E10 by convention).
 * Browser-only (both the Vite app and Remotion's headless Chrome qualify).
 */

const cache = new Map<string, Promise<ImageBitmap>>();

export function rasterizeSubject(
  spec: { kind: FxSubject['kind']; label: string; text?: string; image?: ImageBitmap },
  width: number,
  height: number,
): Promise<ImageBitmap> {
  const key = `${spec.kind}:${spec.label}:${spec.text ?? ''}:${width}x${height}:${spec.image ? 'img' : ''}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const p = (async () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const g = canvas.getContext('2d')!;
    const cx = width / 2;
    const cy = height / 2;

    if (spec.kind === 'image' && spec.image) {
      const s = Math.min(width / spec.image.width, height / spec.image.height) * 0.8;
      const w = spec.image.width * s;
      const h = spec.image.height * s;
      g.drawImage(spec.image, cx - w / 2, cy - h / 2, w, h);
    } else if (spec.kind === 'text') {
      g.fillStyle = '#F7FAFC';
      g.font = `700 ${Math.round(height * 0.28)}px 'Space Grotesk', sans-serif`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(spec.text ?? spec.label, cx, cy);
    } else {
      // triad: 3 nested triangles, innermost point triangle in cyan
      const r0 = Math.min(width, height) * 0.3;
      for (let i = 0; i < 3; i++) {
        const r = r0 * (1 - i * 0.3);
        g.beginPath();
        for (let v = 0; v < 3; v++) {
          const a = -Math.PI / 2 + (v * 2 * Math.PI) / 3;
          const x = cx + r * Math.cos(a);
          const y = cy + height * 0.02 + r * Math.sin(a);
          v === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
        }
        g.closePath();
        if (i === 2) {
          g.fillStyle = '#5EE7F3';
          g.fill();
        } else {
          g.strokeStyle = '#F7FAFC';
          g.lineWidth = Math.max(1.5, r0 * 0.06);
          g.stroke();
        }
      }
    }

    if (spec.label) {
      g.fillStyle = '#8A8D93';
      g.font = `600 ${Math.max(9, Math.round(height * 0.055))}px 'JetBrains Mono', monospace`;
      g.textAlign = 'center';
      g.textBaseline = 'alphabetic';
      g.letterSpacing = '0.08em';
      g.fillText(spec.label.toUpperCase(), cx, height * 0.92);
    }

    return createImageBitmap(canvas);
  })();

  cache.set(key, p);
  return p;
}

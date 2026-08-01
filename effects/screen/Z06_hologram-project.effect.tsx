import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const layers = Math.max(2, Math.round(Number(ctx.params.layers ?? 4)));
    const scanlines = Math.max(3, Math.round(Number(ctx.params.scanlines ?? 7)));
    const flicker = Math.min(1, Math.max(0, Number(ctx.params.flicker ?? 0.26)));
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const phase = (ctx.frame % Math.max(1, ctx.durationInFrames)) / Math.max(1, ctx.durationInFrames);
    const pulse = 0.78 + 0.22 * Math.sin(phase * Math.PI * 2 * 3);
    const noise = ctx.random(`beam:${Math.floor(ctx.frame / 2)}`);
    const power = pulse * (1 - flicker * (noise < 0.12 ? 0.58 : noise * 0.08));
    const scanY = 12 + ((phase * scanlines) % 1) * 61;
    const pedestalWidth = Math.min(ctx.width * 0.3, ctx.height * 0.5);

    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0D0E10' }}>
        <div style={{ position: 'absolute', left: '50%', bottom: '15%', width: pedestalWidth * 1.55, height: '67%', transform: 'translateX(-50%)', clipPath: 'polygon(43% 100%, 57% 100%, 88% 0, 12% 0)', background: `linear-gradient(90deg, transparent, ${signal}12 28%, ${signal}24 50%, ${signal}12 72%, transparent)`, opacity: power }} />
        {Array.from({ length: layers }, (_, index) => {
          const depth = index / Math.max(1, layers - 1);
          const drift = Math.sin(phase * Math.PI * 2 + index * 1.7) * (2 + depth * 7);
          return (
            <div key={index} style={{ position: 'absolute', left: `${11 + depth * 1.2}%`, right: `${11 - depth * 1.2}%`, top: `${5 + depth * 0.45}%`, bottom: '22%', transform: `translate3d(${drift}px, ${-depth * 2}px, 0) scale(${1 - depth * 0.018})`, opacity: power * (index === 0 ? 0.62 : 0.15 * (1 - depth * 0.45)), filter: `grayscale(1) sepia(1) saturate(7) hue-rotate(125deg) brightness(${1.18 + depth * 0.3}) drop-shadow(0 0 ${5 + depth * 8}px ${signal})`, mixBlendMode: 'screen' }}>{ctx.subjectNode}</div>
          );
        })}
        <div style={{ position: 'absolute', left: '9%', right: '9%', top: '5%', bottom: '22%', backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${Math.max(2, scanlines - 2)}px, ${signal} ${Math.max(3, scanlines - 1)}px, transparent ${scanlines}px)`, opacity: 0.08 + flicker * 0.16, mixBlendMode: 'screen' }} />
        <div style={{ position: 'absolute', left: '11%', right: '11%', top: `${scanY}%`, height: Math.max(2, ctx.height * 0.006), background: signal, opacity: power * 0.72, boxShadow: `0 0 9px ${signal}, 0 0 28px ${signal}` }} />
        <div style={{ position: 'absolute', left: '50%', bottom: '8%', width: pedestalWidth, height: pedestalWidth * 0.22, transform: 'translateX(-50%) perspective(500px) rotateX(58deg)', borderRadius: '50%', background: `radial-gradient(ellipse, #E9FFFF 0, ${signal} 11%, ${signal}55 38%, #121619 42%, #08090A 72%)`, border: '2px solid #343B3F', boxShadow: `0 0 18px ${signal}88, inset 0 0 18px #000` }} />
        <div style={{ position: 'absolute', left: '50%', bottom: '8%', width: pedestalWidth * 0.18, height: 4, transform: 'translateX(-50%)', background: signal, boxShadow: `0 0 16px ${signal}`, opacity: power }} />
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;

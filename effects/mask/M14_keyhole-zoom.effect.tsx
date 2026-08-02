import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const zoom = Number(ctx.params.zoom ?? 1.2);
    const throat = Number(ctx.params.throat ?? 28);
    const glow = Number(ctx.params.glow ?? 0.66);
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const travel = (1 - Math.cos(ctx.t * Math.PI * 2)) * 0.5;
    const scale = 0.22 + travel * zoom;
    const common = { position: 'absolute' as const, left: '50%', overflow: 'hidden', filter: `drop-shadow(0 0 ${12 + glow * 28}px ${signal})` };
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0D0E10' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, transform: `scale(${1.08 - travel * 0.06})`, filter: 'grayscale(1)' }}>{ctx.subjectNode}</div>
        <div style={{ ...common, top: '18%', width: '34%', aspectRatio: '1', borderRadius: '50%', transform: `translateX(-50%) scale(${scale})`, transformOrigin: '50% 88%' }}>
          <div style={{ position: 'absolute', left: '-97%', top: '-53%', width: '294%', height: '294%', transform: `scale(${1 + travel * 0.18})` }}>{ctx.subjectNode}</div>
        </div>
        <div style={{ ...common, top: '43%', width: `${throat}%`, height: '48%', clipPath: 'polygon(38% 0,62% 0,100% 100%,0 100%)', transform: `translateX(-50%) scale(${scale})`, transformOrigin: '50% 0' }}>
          <div style={{ position: 'absolute', left: `${-(50 - throat / 2) / throat * 100}%`, top: '-90%', width: `${10000 / throat}%`, height: '208%' }}>{ctx.subjectNode}</div>
        </div>
        <div style={{ position: 'absolute', left: '50%', top: '43%', width: 12, height: 12, borderRadius: '50%', background: signal, transform: `translate(-50%,-50%) scale(${0.4 + travel})`, opacity: glow }} />
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;

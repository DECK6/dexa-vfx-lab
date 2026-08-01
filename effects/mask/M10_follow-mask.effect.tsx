import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const radius = Math.min(34, Math.max(14, Number(ctx.params.radius ?? 23)));
    const travel = Math.min(28, Math.max(8, Number(ctx.params.travel ?? 20)));
    const lag = Math.min(0.25, Math.max(0, Number(ctx.params.lag ?? 0.08)));
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const subjectPhase = Math.PI * 2 * ctx.t;
    const trackerPhase = Math.PI * 2 * ((ctx.t - lag + 1) % 1);
    const subjectX = 50 + Math.sin(subjectPhase) * travel;
    const subjectY = 50 + Math.sin(subjectPhase * 2) * travel * 0.28;
    const maskX = 50 + Math.sin(trackerPhase) * travel;
    const maskY = 50 + Math.sin(trackerPhase * 2) * travel * 0.28;
    const dx = (subjectX - 50) * ctx.width / 100;
    const dy = (subjectY - 50) * ctx.height / 100;
    const trackerSize = radius * 2;

    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0D0E10' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, transform: `translate3d(${dx}px, ${dy}px, 0)` }}>{ctx.subjectNode}</div>
        <div style={{ position: 'absolute', inset: 0, clipPath: `circle(${radius}% at ${maskX}% ${maskY}%)`, filter: `drop-shadow(0 0 16px ${signal})` }}>
          <div style={{ position: 'absolute', inset: 0, transform: `translate3d(${dx}px, ${dy}px, 0)` }}>{ctx.subjectNode}</div>
        </div>
        <div style={{ position: 'absolute', left: `${maskX}%`, top: `${maskY}%`, width: `${trackerSize}%`, aspectRatio: '1', border: `1px solid ${signal}`, borderRadius: '50%', boxShadow: `0 0 18px ${signal}44, inset 0 0 18px ${signal}1F`, transform: 'translate(-50%, -50%)' }}>
          {[0, 1, 2, 3].map((corner) => (
            <div key={corner} style={{ position: 'absolute', width: 12, height: 12, left: corner % 2 === 0 ? -3 : 'auto', right: corner % 2 === 1 ? -3 : 'auto', top: corner < 2 ? -3 : 'auto', bottom: corner >= 2 ? -3 : 'auto', borderLeft: corner % 2 === 0 ? `3px solid ${signal}` : 'none', borderRight: corner % 2 === 1 ? `3px solid ${signal}` : 'none', borderTop: corner < 2 ? `3px solid ${signal}` : 'none', borderBottom: corner >= 2 ? `3px solid ${signal}` : 'none' }} />
          ))}
          <div style={{ position: 'absolute', left: '50%', top: '50%', width: 5, height: 5, border: `1px solid ${signal}`, borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
        <div style={{ position: 'absolute', left: '5%', bottom: '6%', color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace', fontSize: Math.max(7, ctx.width * 0.01), letterSpacing: '0.08em' }}>
          TRACK {Math.round(maskX).toString().padStart(2, '0')}:{Math.round(maskY).toString().padStart(2, '0')}
        </div>
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;

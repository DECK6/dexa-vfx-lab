import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const contrast = Number(ctx.params.contrast ?? 1.65);
    const mix = Number(ctx.params.mix ?? 0.88);
    const shadow = String(ctx.params.shadow ?? '#0D0E10');
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const turn = ctx.t * Math.PI * 2;
    const breathingContrast = contrast * (0.94 + Math.sin(turn) * 0.06);
    const split = 50 + Math.sin(turn) * 7;

    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          isolation: 'isolate',
          background: shadow,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            filter: `grayscale(1) contrast(${breathingContrast}) brightness(0.92)`,
          }}
        >
          {ctx.subjectNode}
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(118deg, ${shadow} ${split - 22}%, ${signal} ${split + 22}%)`,
            mixBlendMode: 'multiply',
            opacity: mix,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: mix * 0.28,
            filter: `contrast(${1.15 + contrast * 0.12}) drop-shadow(0 0 10px ${signal})`,
            mixBlendMode: 'screen',
          }}
        >
          {ctx.subjectNode}
        </div>
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;

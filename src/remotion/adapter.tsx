import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  cancelRender,
  continueRender,
  delayRender,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { fxRandom } from '../fx/prng';
import { rasterizeSubject } from '../fx/subject';
import type { FxContext, FxKernel, FxMeta, FxSubject } from '../fx/types';

const BACKGROUND = '#0D0E10';
const SIGNAL = '#5EE7F3';
const MAX_STATEFUL_STEPS = 180;

export interface FxAdapterProps {
  meta: FxMeta;
  loadKernel: () => Promise<{ default: FxKernel }>;
  params: Record<string, unknown>;
}

function TriadSubject({ label, signal }: { label: string; signal: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#F7FAFC',
      }}
    >
      <svg width="38%" height="62%" viewBox="0 0 360 300" aria-label={label}>
        <polygon
          points="180,20 335,280 25,280"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <polygon
          points="180,76 286,252 74,252"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <polygon points="180,132 237,228 123,228" fill={signal} />
      </svg>
      <div
        style={{
          marginTop: 18,
          color: '#8A8D93',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: '0.12em',
        }}
      >
        {label.toUpperCase()}
      </div>
    </div>
  );
}

function contextAtFrame(ctx: FxContext, frame: number): FxContext {
  return {
    ...ctx,
    frame,
    t: Math.min(1, Math.max(0, frame / ctx.durationInFrames)),
  };
}

export function FxAdapter({ meta, loadKernel, params }: FxAdapterProps) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const continuedRef = useRef(false);
  const [delayHandle] = useState(() => delayRender(`Loading ${meta.id}`));
  const [kernel, setKernel] = useState<FxKernel | null>(null);
  const [bitmap, setBitmap] = useState<ImageBitmap | null>(null);

  useEffect(() => {
    let active = true;

    Promise.all([
      loadKernel(),
      rasterizeSubject({ kind: 'triad', label: 'DEXA VFX' }, width, height),
    ])
      .then(([module, subjectBitmap]) => {
        if (!active) return;
        setKernel(module.default);
        setBitmap(subjectBitmap);
      })
      .catch((error: unknown) => {
        if (active) cancelRender(error);
      });

    return () => {
      active = false;
    };
  }, [delayHandle, height, loadKernel, width]);

  const random = useMemo(() => fxRandom(meta.id), [meta.id]);
  const subject = useMemo<FxSubject>(
    () => ({ kind: 'triad', label: 'DEXA VFX', bitmap: bitmap ?? undefined }),
    [bitmap],
  );
  const ctx = useMemo<FxContext>(
    () => ({
      frame,
      fps,
      durationInFrames,
      width,
      height,
      t: Math.min(1, Math.max(0, frame / durationInFrames)),
      random,
      params,
      subject,
    }),
    [durationInFrames, fps, frame, height, params, random, subject, width],
  );

  useLayoutEffect(() => {
    if (!kernel || kernel.kind !== 'canvas' || !bitmap) return;
    const canvas = canvasRef.current;
    const g = canvas?.getContext('2d');
    if (!canvas || !g) return;

    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, canvas.width, canvas.height);

    if ('draw' in kernel) {
      kernel.draw(g, ctx);
    } else {
      const lastStep = Math.min(Math.max(0, frame), MAX_STATEFUL_STEPS - 1);
      let state = kernel.stateful.init(contextAtFrame(ctx, 0));
      for (let stepFrame = 0; stepFrame <= lastStep; stepFrame += 1) {
        state = kernel.stateful.step(state, contextAtFrame(ctx, stepFrame));
      }
      kernel.stateful.render(g, state, ctx);
    }

    if (!continuedRef.current) {
      continuedRef.current = true;
      continueRender(delayHandle);
    }
  }, [bitmap, ctx, delayHandle, frame, kernel]);

  useLayoutEffect(() => {
    if (!kernel || !bitmap || kernel.kind !== 'react' || continuedRef.current) return;
    continuedRef.current = true;
    continueRender(delayHandle);
  }, [bitmap, delayHandle, kernel]);

  if (!kernel || !bitmap) {
    return <div style={{ width, height, background: BACKGROUND }} />;
  }

  if (kernel.kind === 'react') {
    const signal = typeof params.signal === 'string' ? params.signal : SIGNAL;
    return kernel.render({
      ...ctx,
      subjectNode: <TriadSubject label={subject.label} signal={signal} />,
    });
  }

  if (kernel.kind === 'canvas') {
    return (
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ display: 'block', width: '100%', height: '100%', background: BACKGROUND }}
      />
    );
  }

  throw new Error(`Remotion WebGL adapter is not implemented for ${meta.id}`);
}

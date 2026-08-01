import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { defaultParams, type CanvasStatefulKernel, type FxContext, type FxKernel } from '../../fx/types';
import type { FxEntry } from '../../fx/registry';
import { fxRandom } from '../../fx/prng';
import { rasterizeSubject } from '../../fx/subject';
import { loadAudioEnvelope, sampleAudioEnvelope, type FxAudioEnvelope } from '../../fx/audio';
import { sharedAnimationClock } from './clock';
import { liveBudgetManager } from './budget';
import { sharedGlRunner } from './glRunner';

const WIDTH = 320;
const HEIGHT = 180;

interface LivePreviewProps {
  entry: FxEntry;
  mode?: 'gallery' | 'detail';
  active?: boolean;
  frame?: number;
  fps?: number;
  durationInFrames?: number;
  params?: Record<string, unknown>;
  resetKey?: string | number;
  className?: string;
}

function useClockFrame(enabled: boolean, fps: number, duration: number) {
  const [frame, setFrame] = useState(0);
  const lastFrame = useRef(-1);

  useEffect(() => {
    if (!enabled) return;
    return sharedAnimationClock.subscribe((elapsedMs) => {
      const next = Math.floor((elapsedMs * fps) / 1000) % duration;
      if (next !== lastFrame.current) {
        lastFrame.current = next;
        setFrame(next);
      }
    });
  }, [duration, enabled, fps]);

  return frame;
}

export function useGalleryActivation(entry: FxEntry) {
  const [active, setActive] = useState(false);
  const cleanup = useRef<(() => void) | null>(null);
  const ref = useCallback(
    (element: HTMLDivElement | null) => {
      cleanup.current?.();
      cleanup.current = element
        ? liveBudgetManager.register(entry.meta.id, element, entry.meta.cost, setActive)
        : null;
    },
    [entry.meta.cost, entry.meta.id],
  );

  useEffect(() => () => cleanup.current?.(), []);
  return { active, ref };
}

function makeContext(
  entry: FxEntry,
  frame: number,
  fps: number,
  durationInFrames: number,
  params: Record<string, unknown>,
  bitmap?: ImageBitmap,
  audioEnvelope?: FxAudioEnvelope,
): FxContext {
  return {
    frame,
    fps,
    durationInFrames,
    width: WIDTH,
    height: HEIGHT,
    t: frame / durationInFrames,
    random: fxRandom(entry.meta.id),
    params,
    subject: { kind: 'triad', label: 'DEXA', bitmap },
    audio: audioEnvelope ? sampleAudioEnvelope(audioEnvelope, frame, fps) : undefined,
  };
}

function WebglKernelView({
  kernel,
  context,
  autoPlay,
  audioEnvelope,
}: {
  kernel: Extract<FxKernel, { kind: 'webgl' }>;
  context: FxContext;
  autoPlay: boolean;
  audioEnvelope?: FxAudioEnvelope;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glError, setGlError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !context.subject.bitmap) return;
    const renderFrame = (frame: number) => {
      const frameContext = {
        ...context,
        frame,
        t: frame / context.durationInFrames,
        audio: audioEnvelope ? sampleAudioEnvelope(audioEnvelope, frame, context.fps) : context.audio,
      };
      const result = sharedGlRunner.render(kernel.shader, frameContext, canvas);
      setGlError(!result.ok);
    };

    renderFrame(context.frame);
    if (!autoPlay) return;
    let lastFrame = context.frame;
    return sharedAnimationClock.subscribe((elapsedMs) => {
      const nextFrame = Math.floor((elapsedMs * context.fps) / 1000) % context.durationInFrames;
      if (nextFrame === lastFrame) return;
      lastFrame = nextFrame;
      renderFrame(nextFrame);
    });
  }, [audioEnvelope, autoPlay, context, kernel]);

  if (glError) return <div className="preview-message">GL ERROR</div>;
  return <canvas ref={canvasRef} className="live-canvas" width={WIDTH} height={HEIGHT} />;
}

function TriadSubject() {
  const triangles = [54, 38, 22];
  return (
    <svg className="triad-subject" viewBox="0 0 320 180" role="img" aria-label="DEXA triad">
      {triangles.map((radius, index) => {
        const points = [0, 1, 2]
          .map((vertex) => {
            const angle = -Math.PI / 2 + (vertex * 2 * Math.PI) / 3;
            return `${160 + radius * Math.cos(angle)},${86 + radius * Math.sin(angle)}`;
          })
          .join(' ');
        return index === 2 ? (
          <polygon key={radius} points={points} fill="var(--cyan)" />
        ) : (
          <polygon key={radius} points={points} fill="none" stroke="var(--paper)" strokeWidth="3" />
        );
      })}
      <text x="160" y="166" textAnchor="middle">DEXA</text>
    </svg>
  );
}

const ReactKernelView = memo(function ReactKernelView({
  kernel,
  context,
}: {
  kernel: Extract<FxKernel, { kind: 'react' }>;
  context: FxContext;
}) {
  return <>{kernel.render({ ...context, subjectNode: <TriadSubject /> })}</>;
});

function CanvasKernelView({
  kernel,
  context,
  stateKey,
  autoPlay,
  audioEnvelope,
}: {
  kernel: Extract<FxKernel, { kind: 'canvas' }>;
  context: FxContext;
  stateKey: string;
  autoPlay: boolean;
  audioEnvelope?: FxAudioEnvelope;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runtime = useRef<{ frame: number; value: unknown; key: string } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const g = canvas?.getContext('2d');
    if (!canvas || !g || !context.subject.bitmap) return;

    const renderFrame = (frame: number) => {
      const frameContext = {
        ...context,
        frame,
        t: frame / context.durationInFrames,
        audio: audioEnvelope ? sampleAudioEnvelope(audioEnvelope, frame, context.fps) : context.audio,
      };
      g.clearRect(0, 0, WIDTH, HEIGHT);
      if ('draw' in kernel) {
        kernel.draw(g, frameContext);
        return;
      }

      const stateful = kernel.stateful as CanvasStatefulKernel<unknown>;
      if (!runtime.current || runtime.current.key !== stateKey || frame < runtime.current.frame) {
        runtime.current = { frame: -1, value: stateful.init({ ...frameContext, frame: 0, t: 0 }), key: stateKey };
      }
      for (let stepFrame = runtime.current.frame + 1; stepFrame <= frame; stepFrame++) {
        const stepContext = { ...frameContext, frame: stepFrame, t: stepFrame / context.durationInFrames };
        runtime.current.value = stateful.step(runtime.current.value, stepContext);
        runtime.current.frame = stepFrame;
      }
      stateful.render(g, runtime.current.value, frameContext);
    };

    renderFrame(context.frame);
    if (!autoPlay) return;
    let lastFrame = context.frame;
    return sharedAnimationClock.subscribe((elapsedMs) => {
      const nextFrame = Math.floor((elapsedMs * context.fps) / 1000) % context.durationInFrames;
      if (nextFrame === lastFrame) return;
      lastFrame = nextFrame;
      renderFrame(nextFrame);
    });
  }, [audioEnvelope, autoPlay, context, kernel, stateKey]);

  return <canvas ref={canvasRef} className="live-canvas" width={WIDTH} height={HEIGHT} />;
}

export function LivePreview({
  entry,
  mode = 'gallery',
  active = true,
  frame: controlledFrame,
  fps = mode === 'gallery' ? 24 : 30,
  durationInFrames = mode === 'gallery' ? 144 : 180,
  params: suppliedParams,
  resetKey = 0,
  className,
}: LivePreviewProps) {
  const autoCanvas = active && controlledFrame === undefined && entry.meta.kind === 'canvas';
  const autoWebgl = active && controlledFrame === undefined && entry.meta.kind === 'webgl';
  const clockFrame = useClockFrame(
    active && controlledFrame === undefined && entry.meta.kind === 'react',
    fps,
    durationInFrames,
  );
  const frame = controlledFrame ?? clockFrame;
  const params = useMemo(
    () => suppliedParams ?? defaultParams(entry.meta.params),
    [entry.meta.params, suppliedParams],
  );
  const [kernel, setKernel] = useState<FxKernel | null>(null);
  const [bitmap, setBitmap] = useState<ImageBitmap | undefined>();
  const [audioEnvelope, setAudioEnvelope] = useState<FxAudioEnvelope>();
  const [thumbFailed, setThumbFailed] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    setLoadFailed(false);
    entry.loadKernel().then(
      (loaded) => {
        if (!cancelled) setKernel(loaded);
      },
      () => {
        if (!cancelled) setLoadFailed(true);
      },
    );
    rasterizeSubject({ kind: 'triad', label: 'DEXA' }, WIDTH, HEIGHT).then((image) => {
      if (!cancelled) setBitmap(image);
    });
    if (entry.meta.category === 'audio') {
      loadAudioEnvelope(`${import.meta.env.BASE_URL}audio/sample.envelope.json`).then(
        (envelope) => {
          if (!cancelled) setAudioEnvelope(envelope);
        },
        () => {
          if (!cancelled) setLoadFailed(true);
        },
      );
    }
    return () => {
      cancelled = true;
    };
  }, [active, entry]);

  const context = useMemo(
    () => makeContext(entry, frame, fps, durationInFrames, params, bitmap, audioEnvelope),
    [audioEnvelope, bitmap, durationInFrames, entry, fps, frame, params],
  );
  const stateKey = useMemo(() => `${JSON.stringify(params)}:${resetKey}`, [params, resetKey]);
  const content: ReactNode = (() => {
    if (!active) {
      return thumbFailed ? (
        <div className="preview-message preview-id">{entry.meta.id}</div>
      ) : (
        <img
          className="live-thumbnail"
          src={`${import.meta.env.BASE_URL}thumbs/${entry.meta.id.toLowerCase()}.webp`}
          alt=""
          onError={() => setThumbFailed(true)}
        />
      );
    }
    if (loadFailed) return <div className="preview-message">KERNEL ERROR</div>;
    if (!kernel || ((kernel.kind === 'canvas' || kernel.kind === 'webgl') && !bitmap)) return <div className="preview-message">LOADING {entry.meta.id}</div>;
    if (kernel.kind === 'react') return <ReactKernelView kernel={kernel} context={context} />;
    if (kernel.kind === 'canvas') {
      return <CanvasKernelView kernel={kernel} context={context} stateKey={stateKey} autoPlay={autoCanvas} audioEnvelope={audioEnvelope} />;
    }
    return <WebglKernelView kernel={kernel} context={context} autoPlay={autoWebgl} audioEnvelope={audioEnvelope} />;
  })();

  const style = { '--preview-ratio': `${WIDTH} / ${HEIGHT}` } as CSSProperties;
  return (
    <div className={`live-preview ${className ?? ''}`} style={style} data-frame={frame}>
      {content}
    </div>
  );
}

export function subscribeTransportClock(listener: (elapsedMs: number) => void) {
  return sharedAnimationClock.subscribe(listener);
}

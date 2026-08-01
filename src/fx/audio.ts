import type { FxAudioFrame } from './types';

export interface FxAudioEnvelope {
  fps: number;
  durationInFrames: number;
  frames: FxAudioFrame[];
}

const envelopeCache = new Map<string, Promise<FxAudioEnvelope>>();

export function loadAudioEnvelope(url: string): Promise<FxAudioEnvelope> {
  const cached = envelopeCache.get(url);
  if (cached) return cached;
  const pending = fetch(url).then(async (response) => {
    if (!response.ok) throw new Error(`Audio envelope request failed: ${response.status} ${url}`);
    const value = await response.json() as FxAudioEnvelope;
    if (!Array.isArray(value.frames) || value.frames.length === 0) {
      throw new Error(`Audio envelope has no frames: ${url}`);
    }
    return value;
  });
  envelopeCache.set(url, pending);
  return pending;
}

export function sampleAudioEnvelope(
  envelope: FxAudioEnvelope,
  frame: number,
  fps = envelope.fps,
): FxAudioFrame {
  const envelopeFrame = frame * envelope.fps / fps;
  const index = Math.min(envelope.frames.length - 1, Math.max(0, Math.floor(envelopeFrame)));
  return envelope.frames[index];
}

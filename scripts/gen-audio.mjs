#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT_DIR = join(ROOT, 'public/audio');
const SOURCE_OUTPUT_DIR = join(ROOT, 'src/audio');
const WAV_PATH = join(OUTPUT_DIR, 'sample.wav');
const ENVELOPE_PATH = join(OUTPUT_DIR, 'sample.envelope.json');
const SOURCE_ENVELOPE_PATH = join(SOURCE_OUTPUT_DIR, 'sample.envelope.json');
const SAMPLE_RATE = 48_000;
const FPS = 30;
const DURATION_SECONDS = 6;
const DURATION_IN_FRAMES = FPS * DURATION_SECONDS;
const SEED = 0xdecafbad;

mkdirSync(OUTPUT_DIR, { recursive: true });
mkdirSync(SOURCE_OUTPUT_DIR, { recursive: true });

// 120 BPM: a decaying 54 Hz kick every 0.5 s, plus a deterministic sine sweep.
// The seed fixes the sweep phase without relying on a random source.
const seedPhase = ((SEED >>> 0) / 0x1_0000_0000) * Math.PI * 2;
const beatPhase = '(t-0.5*floor(2*t))';
const expression = [
  `0.72*sin(2*PI*54*t)*exp(-18*${beatPhase})`,
  `0.24*sin(2*PI*(160*t+145*t*t/6)+${seedPhase.toFixed(12)})`,
].join('+');
const ffmpeg = spawnSync('ffmpeg', [
  '-hide_banner',
  '-loglevel', 'error',
  '-y',
  '-f', 'lavfi',
  '-i', `aevalsrc=${expression}:s=${SAMPLE_RATE}:d=${DURATION_SECONDS}`,
  '-ac', '1',
  '-c:a', 'pcm_s16le',
  WAV_PATH,
], { cwd: ROOT, encoding: 'utf8' });

if (ffmpeg.status !== 0) {
  console.error(ffmpeg.stderr || 'ffmpeg failed to generate sample audio');
  process.exit(ffmpeg.status ?? 1);
}

function decodePcm16Wav(path) {
  const bytes = readFileSync(path);
  if (bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error('Generated audio is not a RIFF/WAVE file');
  }

  let offset = 12;
  let format;
  let data;
  while (offset + 8 <= bytes.length) {
    const id = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const start = offset + 8;
    if (id === 'fmt ') {
      format = {
        encoding: bytes.readUInt16LE(start),
        channels: bytes.readUInt16LE(start + 2),
        sampleRate: bytes.readUInt32LE(start + 4),
        bitsPerSample: bytes.readUInt16LE(start + 14),
      };
    } else if (id === 'data') {
      data = bytes.subarray(start, start + size);
    }
    offset = start + size + (size & 1);
  }
  if (!format || !data) throw new Error('Generated WAV is missing fmt or data chunks');
  if (format.encoding !== 1 || format.channels !== 1 || format.bitsPerSample !== 16) {
    throw new Error('Expected mono 16-bit PCM audio');
  }

  const samples = new Float64Array(data.length / 2);
  for (let index = 0; index < samples.length; index += 1) {
    samples[index] = data.readInt16LE(index * 2) / 32768;
  }
  return { sampleRate: format.sampleRate, samples };
}

function goertzelPower(samples, start, count, sampleRate, frequency) {
  const omega = (2 * Math.PI * frequency) / sampleRate;
  const coefficient = 2 * Math.cos(omega);
  let s1 = 0;
  let s2 = 0;
  for (let index = 0; index < count; index += 1) {
    const window = 0.5 - 0.5 * Math.cos((2 * Math.PI * index) / Math.max(1, count - 1));
    const s0 = samples[start + index] * window + coefficient * s1 - s2;
    s2 = s1;
    s1 = s0;
  }
  return Math.max(0, s1 * s1 + s2 * s2 - coefficient * s1 * s2) / (count * count);
}

const { sampleRate, samples } = decodePcm16Wav(WAV_PATH);
const samplesPerFrame = sampleRate / FPS;
const bandFrequencies = [54, 110, 220, 440, 880, 1760, 3520, 7040];
const rawFrames = [];
let peakRms = 0;
const peakBands = Array.from({ length: 8 }, () => 0);

for (let frame = 0; frame < DURATION_IN_FRAMES; frame += 1) {
  const start = Math.round(frame * samplesPerFrame);
  const end = Math.min(samples.length, Math.round((frame + 1) * samplesPerFrame));
  const count = Math.max(1, end - start);
  let squareSum = 0;
  for (let index = start; index < end; index += 1) squareSum += samples[index] * samples[index];
  const rms = Math.sqrt(squareSum / count);
  const bands = bandFrequencies.map((frequency) => Math.sqrt(goertzelPower(samples, start, count, sampleRate, frequency)));
  peakRms = Math.max(peakRms, rms);
  for (let band = 0; band < bands.length; band += 1) peakBands[band] = Math.max(peakBands[band], bands[band]);
  rawFrames.push({ rms, bands });
}

const round = (value) => Number(value.toFixed(6));
const frames = rawFrames.map(({ rms, bands }) => ({
  rms: round(Math.min(1, rms / Math.max(peakRms, 1e-9))),
  bands: bands.map((value, index) => round(Math.min(1, value / Math.max(peakBands[index], 1e-9)))),
}));

const envelopeJson = `${JSON.stringify({
  version: 1,
  seed: SEED >>> 0,
  fps: FPS,
  durationInFrames: DURATION_IN_FRAMES,
  sampleRate,
  bandFrequencies,
  frames,
}, null, 2)}\n`;
writeFileSync(ENVELOPE_PATH, envelopeJson);
writeFileSync(SOURCE_ENVELOPE_PATH, envelopeJson);

console.log(`gen-audio — ${DURATION_SECONDS}s PCM WAV @ ${sampleRate}Hz`);
console.log(`gen-audio — ${frames.length} envelope frames × ${bandFrequencies.length} bands (seed ${SEED >>> 0})`);

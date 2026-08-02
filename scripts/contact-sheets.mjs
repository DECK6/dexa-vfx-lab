import { mkdtempSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';
import { manifest } from '../src/fx/manifest.gen.ts';

const requestedOutput = process.argv[2];
const outputDir = requestedOutput
  ? path.resolve(requestedOutput)
  : mkdtempSync(path.join(tmpdir(), 'dexa-vfx-contact-sheets-'));
mkdirSync(outputDir, { recursive: true });

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 2048, height: 1200 }, deviceScaleFactor: 1 });
  for (const wave of [6, 7, 8, 9]) {
    const entries = manifest.filter((entry) => entry.meta.wave === wave);
    if (entries.length !== 64) throw new Error(`W${wave}: expected 64 effects, found ${entries.length}`);

    const cards = entries.map(({ meta }) => {
      const thumbnail = readFileSync(path.join(process.cwd(), 'public', 'thumbs', `${meta.id}.webp`)).toString('base64');
      return `<article>
        <img src="data:image/webp;base64,${thumbnail}" alt="${escapeHtml(meta.name)}">
        <div><strong>${escapeHtml(meta.id)}</strong><span>${escapeHtml(meta.name)}</span><small>${escapeHtml(meta.category)}</small></div>
      </article>`;
    }).join('');

    await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>
      * { box-sizing: border-box; }
      html, body { margin: 0; background: #090b0d; color: #f4fafb; font-family: Inter, Arial, sans-serif; }
      body { width: 2048px; padding: 30px 32px 34px; }
      header { height: 62px; display: flex; align-items: baseline; gap: 18px; }
      h1 { margin: 0; color: #5ee7f3; font: 800 30px/1 Inter, Arial, sans-serif; letter-spacing: .08em; }
      header span { color: #9bacb2; font: 600 15px/1 ui-monospace, monospace; }
      main { display: grid; grid-template-columns: repeat(8, 1fr); gap: 12px; }
      article { min-width: 0; overflow: hidden; border: 1px solid #283137; border-radius: 8px; background: #11161a; }
      img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: #0d0e10; }
      article div { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 7px; min-height: 34px; padding: 6px 8px; }
      strong { color: #5ee7f3; font: 800 12px/1 ui-monospace, monospace; }
      article span { overflow: hidden; color: #eef5f6; font: 650 11px/1.15 Inter, Arial, sans-serif; text-overflow: ellipsis; white-space: nowrap; }
      small { color: #89979c; font: 600 9px/1 ui-monospace, monospace; text-transform: uppercase; }
    </style></head><body><header><h1>DEXA VFX LAB / W${wave}</h1><span>64 EFFECTS · CONTACT SHEET</span></header><main>${cards}</main></body></html>`, { waitUntil: 'load' });

    const output = path.join(outputDir, `W${wave}.png`);
    await page.screenshot({ path: output, fullPage: true });
    console.log(`contact-sheet — W${wave} 64 effects → ${output}`);
  }
} finally {
  await browser.close();
}

console.log(`contact-sheets — OK (256 effects, ${outputDir})`);

import { expect, test, type Page } from '@playwright/test';
import { manifest } from '../src/fx/manifest.gen';

/**
 * Acceptance smoke suite (SPEC §9) — runs per effect in the manifest:
 *  1. detail route loads with zero page errors
 *  2. preview is alive: frame 0 vs frame 90 screenshots differ (catches blank AND frozen previews)
 *  3. seeking the same frame twice is pixel-deterministic
 *  4. one param change does not crash
 *
 * TEST HOOK contract (detail page must expose):
 *   window.__vfx = { entryId: string, seek(frame: number): void, pause(): void }
 * seek() must synchronously drive the preview to the given frame (stateful kernels replay internally).
 */

declare global {
  interface Window {
    __vfx?: { entryId: string; seek: (f: number) => void; pause: () => void };
  }
}

async function comparePixels(page: Page, first: Buffer, second: Buffer) {
  return page.evaluate(async ([firstUrl, secondUrl]) => {
    const decode = async (url: string) => {
      const image = new Image();
      image.src = url;
      await image.decode();
      return image;
    };
    const [firstImage, secondImage] = await Promise.all([decode(firstUrl), decode(secondUrl)]);
    const width = firstImage.naturalWidth;
    const height = firstImage.naturalHeight;
    if (width !== secondImage.naturalWidth || height !== secondImage.naturalHeight) {
      return { meanChannelDelta: Number.POSITIVE_INFINITY, maxChannelDelta: 255, meaningfulPixelRatio: 1 };
    }
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { willReadFrequently: true })!;
    context.drawImage(firstImage, 0, 0);
    const firstPixels = context.getImageData(0, 0, width, height).data;
    context.clearRect(0, 0, width, height);
    context.drawImage(secondImage, 0, 0);
    const secondPixels = context.getImageData(0, 0, width, height).data;
    let totalDelta = 0;
    let maxChannelDelta = 0;
    let meaningfulPixels = 0;
    for (let index = 0; index < firstPixels.length; index += 4) {
      let pixelDelta = 0;
      for (let channel = 0; channel < 3; channel += 1) {
        const delta = Math.abs(firstPixels[index + channel] - secondPixels[index + channel]);
        totalDelta += delta;
        maxChannelDelta = Math.max(maxChannelDelta, delta);
        pixelDelta = Math.max(pixelDelta, delta);
      }
      if (pixelDelta > 16) meaningfulPixels += 1;
    }
    return {
      meanChannelDelta: totalDelta / (width * height * 3),
      maxChannelDelta,
      meaningfulPixelRatio: meaningfulPixels / (width * height),
    };
  }, [
    `data:image/png;base64,${first.toString('base64')}`,
    `data:image/png;base64,${second.toString('base64')}`,
  ] as const);
}

test('gallery route renders', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto('#/');
  await expect(page.locator('body')).toBeVisible();
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('gallery exposes only user-meaningful filters', async ({ page }) => {
  await page.goto('#/');
  await expect(page.locator('.filters')).toBeVisible();
  await expect(page.locator('.filters legend')).toHaveText(['CATEGORY', 'KIND']);
});

test('about route renders', async ({ page }) => {
  await page.goto('#/about');
  await expect(page.locator('body')).toBeVisible();
});

for (const entry of manifest) {
  const { id } = entry.meta;
  test(`effect ${id} — ${entry.meta.name}`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(`#/e/${id}`);
    await page.waitForFunction((eid) => window.__vfx?.entryId === eid, id, {
      timeout: 10_000,
    });

    const preview = page.locator('[data-vfx-preview]');
    await expect(preview).toBeVisible();

    // Font swaps change glyph pixels without changing the requested frame. Wait
    // for the document font set before taking determinism samples.
    await page.evaluate(() => document.fonts.ready);

    // kernel chunks + subject rasterization settle
    await page.waitForTimeout(400);

    // 3 sample frames (0, 67, 133 — prime-ish offsets) so a periodic effect whose
    // terms all zero at t=0/0.5 (e.g. sin(12πt)) is not misread as static.
    const shots: Buffer[] = [];
    for (const f of [0, 67, 133]) {
      await page.evaluate((frame) => {
        window.__vfx!.pause();
        window.__vfx!.seek(frame);
      }, f);
      await page.waitForTimeout(150); // canvas passive-effect draw settles
      shots.push(await preview.screenshot());
    }
    const allEqual = shots[0].equals(shots[1]) && shots[1].equals(shots[2]);
    expect(allEqual, `preview static or blank at ${id}`).toBe(false);

    // Re-seeking from a later frame must reconstruct the exact same pixels.
    // This catches hidden wall-clock/random/state accumulation that a source lint
    // cannot prove absent, including stateful canvas/WebGL kernels.
    await page.evaluate(() => {
      window.__vfx!.pause();
      window.__vfx!.seek(67);
    });
    await page.waitForTimeout(150);
    const repeated = await preview.screenshot();
    const pixelDiff = repeated.equals(shots[1])
      ? { meanChannelDelta: 0, maxChannelDelta: 0, meaningfulPixelRatio: 0 }
      : await comparePixels(page, shots[1], repeated);
    // Chromium's GPU compositor can vary isolated antialias/filter edge pixels
    // by a few channel values. The mean bound rejects frame-wide drift while the
    // max bound rejects a meaningful changed pixel.
    const deterministic = pixelDiff.meanChannelDelta <= 0.01
      && pixelDiff.meaningfulPixelRatio <= 0.0001
      && pixelDiff.maxChannelDelta <= 64;
    if (!deterministic) {
      await testInfo.attach(`${id}-frame-67-first`, { body: shots[1], contentType: 'image/png' });
      await testInfo.attach(`${id}-frame-67-repeat`, { body: repeated, contentType: 'image/png' });
    }
    expect(deterministic, `non-deterministic frame at ${id}: ${JSON.stringify(pixelDiff)}`).toBe(true);

    // one param mutation must not crash (first control if present)
    const control = page.locator('[data-vfx-param]').first();
    if ((await control.count()) > 0) {
      const tag = await control.evaluate((el) => el.tagName.toLowerCase());
      if (tag === 'input') {
        const type = await control.getAttribute('type');
        if (type === 'range') {
          await control.evaluate((el) => {
            const input = el as HTMLInputElement;
            input.value = input.max;
            input.dispatchEvent(new Event('input', { bubbles: true }));
          });
        } else if (type === 'checkbox') {
          await control.click();
        }
      } else if (tag === 'select') {
        await control.selectOption({ index: 1 }).catch(() => {});
      }
      await page.waitForTimeout(200);
    }

    const benign = /favicon|thumbs\/.+\.webp|net::ERR_ABORTED/;
    const real = errors.filter((e) => !benign.test(e));
    expect(real, real.join('\n')).toHaveLength(0);
  });
}

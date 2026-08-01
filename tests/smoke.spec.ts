import { expect, test } from '@playwright/test';
import { manifest } from '../src/fx/manifest.gen';

/**
 * Acceptance smoke suite (SPEC §9) — runs per effect in the manifest:
 *  1. detail route loads with zero page errors
 *  2. preview is alive: frame 0 vs frame 90 screenshots differ (catches blank AND frozen previews)
 *  3. one param change does not crash
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

test('gallery route renders', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto('#/');
  await expect(page.locator('body')).toBeVisible();
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('about route renders', async ({ page }) => {
  await page.goto('#/about');
  await expect(page.locator('body')).toBeVisible();
});

for (const entry of manifest) {
  const { id } = entry.meta;
  test(`effect ${id} — ${entry.meta.name}`, async ({ page }) => {
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

    // kernel chunks + subject rasterization settle
    await page.waitForTimeout(400);

    await page.evaluate(() => {
      window.__vfx!.pause();
      window.__vfx!.seek(0);
    });
    const shot0 = await preview.screenshot();

    await page.evaluate(() => window.__vfx!.seek(90));
    const shot90 = await preview.screenshot();

    expect(shot0.equals(shot90), `preview static or blank at ${id}`).toBe(false);

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

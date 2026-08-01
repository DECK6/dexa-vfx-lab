import { expect, test } from '@playwright/test';

test('D01 shares one WebGL context across ten live render targets', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await page.goto('#/e/D01');
  await page.waitForFunction(() => window.__vfx?.entryId === 'D01');
  await expect(page.locator('[data-vfx-preview] canvas')).toBeVisible();
  await expect(page.locator('[data-vfx-preview]')).not.toContainText('GL ERROR');

  await page.goto('#/');
  const search = page.getByPlaceholder('ID / NAME / TAG');
  await search.fill('D01');
  const galleryCard = page.locator('article').filter({ hasText: 'D01 / DISPLACEMENT WAVE' });
  await expect(galleryCard).toBeVisible();
  await expect(galleryCard.locator('canvas')).toBeVisible({ timeout: 10_000 });

  const stress = await page.evaluate(async () => {
    const [{ sharedGlRunner }, kernelModule, { rasterizeSubject }] = await Promise.all([
      import('/vfx/src/drivers/live/glRunner.ts'),
      import('/vfx/effects/distort/D01_displacement-wave.effect.ts'),
      import('/vfx/src/fx/subject.ts'),
    ]);
    const kernel = kernelModule.default;
    if (kernel.kind !== 'webgl') throw new Error('D01 did not load as a WebGL kernel');

    const bitmap = await rasterizeSubject({ kind: 'triad', label: 'DEXA' }, 320, 180);
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:-10000px;top:0';
    const targets = Array.from({ length: 10 }, () => {
      const canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 180;
      host.appendChild(canvas);
      return canvas;
    });
    document.body.appendChild(host);

    let contextLost = 0;
    const runnerCanvas = sharedGlRunner.getCanvas();
    runnerCanvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      contextLost += 1;
    });

    const started = performance.now();
    let frame = 0;
    await new Promise<void>((resolve) => {
      const tick = (now: number) => {
        const ctx = {
          frame,
          fps: 30,
          durationInFrames: 180,
          width: 320,
          height: 180,
          t: frame / 180,
          random: () => 0.5,
          params: { strength: 0.075, scale: 5.2, speed: 1.25, signal: '#5EE7F3' },
          subject: { kind: 'triad' as const, label: 'DEXA', bitmap },
        };
        for (const target of targets) {
          const result = sharedGlRunner.render(kernel.shader, ctx, target);
          if (!result.ok) throw new Error(result.error ?? 'Shared GL render failed');
        }
        frame = (frame + 1) % 180;
        if (now - started >= 5_000) resolve();
        else requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    const nonBlankTargets = targets.filter((target) => {
      const pixels = target.getContext('2d')!.getImageData(0, 0, target.width, target.height).data;
      for (let index = 3; index < pixels.length; index += 4) {
        if (pixels[index] !== 0) return true;
      }
      return false;
    }).length;
    host.remove();
    return {
      contextLost,
      nonBlankTargets,
      sharedWidth: runnerCanvas.width,
      sharedHeight: runnerCanvas.height,
    };
  });

  expect(stress).toEqual({
    contextLost: 0,
    nonBlankTargets: 10,
    sharedWidth: 320,
    sharedHeight: 180,
  });
  expect(errors, errors.join('\n')).toHaveLength(0);
});

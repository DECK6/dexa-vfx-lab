import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 20_000,
  fullyParallel: true,
  workers: 4,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:5173/vfx/',
    viewport: { width: 1280, height: 900 },
  },
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:5173/vfx/',
    reuseExistingServer: true,
    timeout: 60_000,
  },
});

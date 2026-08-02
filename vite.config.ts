import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function bundleAudit(): Plugin {
  return {
    name: 'dexa-bundle-audit',
    generateBundle(_options, bundle) {
      const entryNames: string[] = [];
      const remotionModules: string[] = [];
      for (const item of Object.values(bundle)) {
        if (item.type !== 'chunk' || !item.isEntry) continue;
        entryNames.push(item.fileName);
        remotionModules.push(...Object.keys(item.modules).filter((id) => /\/node_modules\/(?:@remotion|remotion)\//.test(id)));
      }
      if (remotionModules.length) this.error(`Remotion leaked into entry: ${remotionModules.join(', ')}`);
      this.emitFile({
        type: 'asset',
        fileName: 'bundle-audit.json',
        source: JSON.stringify({ entries: entryNames, remotionModules }, null, 2),
      });
    },
  };
}

// dexa.art/vfx — GitHub Pages subdirectory deploy
export default defineConfig({
  base: '/vfx/',
  plugins: [react(), bundleAudit()],
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.endsWith('/src/fx/manifest.gen.ts')) return 'effect-manifest';
        },
      },
    },
  },
});

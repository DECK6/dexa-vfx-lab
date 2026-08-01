import { Config } from '@remotion/cli/config';
import { existsSync } from 'node:fs';

Config.setChromiumOpenGlRenderer('angle');
Config.setStillImageFormat('webp');

const localBrowser = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
].find((candidate) => existsSync(candidate));

if (localBrowser) Config.setBrowserExecutable(localBrowser);

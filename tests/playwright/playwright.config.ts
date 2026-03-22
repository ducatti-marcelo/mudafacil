import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/playwright',
  timeout: 30_000,
  use: {
    baseURL: process.env.BASEURL || 'http://localhost:6006',
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  outputDir: './playwright-reports'
};

export default config;

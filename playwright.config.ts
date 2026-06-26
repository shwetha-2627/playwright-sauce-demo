
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [['html', { open: 'never' }]],   // ✅ ADD THIS

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    viewport: { width: 1280, height: 720 }
  }
});

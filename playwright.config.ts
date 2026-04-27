import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build if test.only is left in code (CI safety)
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Limit workers on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    // baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    headless: true, // since you're using --headed anyway, this helps locally
  },

  projects: [
    // ✅ Playwright bundled Chromium
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // ✅ Real Google Chrome
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },

    // ✅ Firefox
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // ✅ Safari (WebKit)
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // ✅ Optional: Microsoft Edge
    // {
    //   name: 'msedge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //   },
    // },
  ],

  // Optional: start dev server before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
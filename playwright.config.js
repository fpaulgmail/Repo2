// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Adjust this if your tests are in a different folder
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: [['dot'], ['json', { outputFile: 'test-results.json' }]],
});

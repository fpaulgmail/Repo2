// step_definitions/login_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('playwright');

// Variables for browser and page
let browser;
let page;

// Given step: Navigate to the login page
Given('the user is on the login page', async function () {
  browser = await playwright.chromium.launch({ headless: false });  // Opens a Chromium browser
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://freelance-learn-automation.vercel.app/login');  // Change to your login page URL
});

// When step: Enter valid credentials
When('the user enters a valid username and password', async function () {
  await page.fill("//input[@id='email1']", 'test_oct_16@chapsmail.com');  // Replace with the actual input selector
  await page.fill("//input[@id='password1']", 'Password123');  // Replace with the actual password input
  await page.click("//button[@type='submit']");  // Click the submit/login button
});

// Then step: Verify redirection to the homepage
Then('the user should be redirected to the homepage', { timeout: 10000 }, async function () {
    await page.waitForLoadState('networkidle');  // Wait until the network is idle
    await page.waitForURL('https://freelance-learn-automation.vercel.app/');  // Check if redirected to the correct URL
    const pageTitle = await page.title();  // Get the title of the current page
    expect(pageTitle).toBe("Learn Automation Courses");  // Use expect to check the title
    await browser.close();  // Close the browser after the test
  });
  
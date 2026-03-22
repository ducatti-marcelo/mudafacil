import { test, expect } from '@playwright/test';

test('storybook Button renders', async ({ page }) => {
  // Use the primary button story to ensure a stable, labeled CTA
  await page.goto('http://localhost:6006/?path=/story/ui-button--primary');
  // Render inside the story iframe
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  await expect(frame.locator('text=Começar Grátis')).toBeVisible();
});

test('storybook DensityTable renders', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/ui-densitytable--compact');
  await expect(page.locator('table')).toBeVisible();
});

test('landing preview renders', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/landing-preview-visual--default');
  // Render inside the story iframe
  const frame = page.frameLocator('iframe#storybook-preview-iframe');
  await expect(frame.locator('section')).toBeVisible();
});

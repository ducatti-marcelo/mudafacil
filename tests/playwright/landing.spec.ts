import { test, expect } from '@playwright/test';

test('Landing/hero renders', async ({ page }) => {
  await page.goto('/?path=/story/landing-preview-visual--default');
  await expect(page.locator('h1')).toBeVisible();
});

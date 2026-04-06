import { test, expect } from '@playwright/test';

test('basic navigation and load', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/vite-app/);
});

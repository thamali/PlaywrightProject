const { test, expect } = require('@playwright/test');
const { HomePage} = require('../pages/HomePage');
const { describe, beforeEach } = require('node:test');



test('Verify HomePage', async ({ page }) => {

  const homepage = new HomePage(page);
  await homepage.gotoHomePage();
  const element=page.getByRole('heading', { name: 'Tjänster' });
  await element.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await expect(page).toHaveTitle('Soltia - Amazing people with amazing skills');
  await expect(page.locator(homepage.headerTabs)).toHaveCount(4);
  await page.getByRole('button', { name: 'language' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('option', { name: 'Swe' })).toHaveText('Swe');
  
})





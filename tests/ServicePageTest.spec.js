const { test, expect } = require('@playwright/test');
const { ServicePage} = require('../pages/ServicePage');
const { describe, beforeEach } = require('node:test');



test('Verify ServicePage', async ({ page }) => {

  const servicepage = new ServicePage(page);
  await servicepage.gotoServicePage();
  //verify Service Page Title
  await expect(page).toHaveURL('https://soltia.com/services');

  await expect(page).toHaveTitle(servicepage.title_ServicePage);
  //Verify Service Page link is visible
  await expect(page.locator(servicepage.linkService)).toBeVisible();
   //perform Mouse click on Service Link
  await page.locator(servicepage.linkService).click();
  await page.waitForTimeout(1800);
   //Verify Service List item count
  await expect(page.locator(servicepage.servicesList)).toHaveCount(7);

 
  
})





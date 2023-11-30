const { test, expect } = require('@playwright/test');
const { describe, beforeEach } = require('node:test');
const { AboutUsPage } = require('../pages/AboutUSPage');



test('Verify AboutUsPage', async ({ page }) => {

  const aboutus = new AboutUsPage(page);
  await aboutus.gotoAboutUsPage();
    //verify about us  Title
  await expect(page).toHaveURL('https://soltia.com/about-us');
  //verify about us  Title
  await expect(page).toHaveTitle(aboutus.title_aboutUse);
  //Verify about us Page link is visible
  await expect(page.locator(aboutus.lnkAboutus)).toBeVisible();
 
  await expect(page.locator(aboutus.lnkAboutus)).toHaveCount(1);
  

 })






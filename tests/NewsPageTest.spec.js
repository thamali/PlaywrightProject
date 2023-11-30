const { test, expect } = require('@playwright/test');
const { NewsPage} = require('../pages/NewsPage');
const { describe, beforeEach } = require('node:test');



test('Verify HomePage', async ({ page }) => {

  const newspage = new NewsPage(page);
  await newspage.gotoNewsPage();
    //verify Service Page Title
  await expect(page).toHaveURL('https://soltia.com/news');
  //verify Service Page Title
  await expect(page).toHaveTitle(newspage.title_news);
  //Verify Service Page link is visible
  await expect(page.locator(newspage.lnkNews)).toBeVisible();
   //perform Mouse click on Service Link
 
  await page.locator(newspage.lnkNews).click();
  
  await page.waitForTimeout(2000);
   //Verify Service List item count
  await expect(page.locator(newspage.Menu_News)).toHaveCount(2);

 })






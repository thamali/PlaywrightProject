exports.AboutUsPage = class AboutUsPage {
  constructor(page) {
    this.page = page;
   // this.modelRoot = page.locator('#modal-root');
    this.title_aboutUse = ('Soltia - About Us');
    this.lnkAboutus=("//p[@class='MuiTypography-root MuiTypography-body1 css-9wmxlo'][normalize-space()='Om Oss']");

  }
  
  async gotoAboutUsPage() {
    await this.page.goto('https://soltia.com/about-us');
  }


};




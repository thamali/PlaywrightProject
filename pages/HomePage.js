exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
   // this.modelRoot = page.locator('#modal-root');
    this.title_HomePage = ('Soltia - Amazing people with amazing skills');
    this.headerTabs = ("//li[@class='MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1jvcwet']");
    this.homeTag = ("//p[text()='Hem']");
    this.logo = ('[class="MuiBox-root css-9lcw1s"]');
    this.scrldwn = ("'heading', { name: 'Tjänster' }");
    this.lang = ("//p[text()='Eng']");
    this.defaultlang = ("//p[text()='Swe']");
    

  }
  
  async gotoHomePage() {
    await this.page.goto('https://soltia.com/');
  }


};




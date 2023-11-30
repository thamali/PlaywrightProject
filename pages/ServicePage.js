exports.ServicePage = class ServicePage {
  constructor(page) {
    this.page = page;
   // this.modelRoot = page.locator('#modal-root');
    this.title_ServicePage = ('Soltia - Services');
    this.servicesList = ("//li[@role='menuitem']");
    this.linkService = ("li:nth-child(2) div:nth-child(1) div:nth-child(1) p:nth-child(1)");
    this.netError = ('[class="neterror"]');
   
    

  }
  
  async gotoServicePage() {
    await this.page.goto('https://soltia.com/services');
  }


};




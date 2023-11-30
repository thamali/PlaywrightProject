exports.NewsPage = class NewsPage {
  constructor(page) {
    this.page = page;
    this.title_news = 'Soltia - News';
    this.servicesList = "//li[@role='menuitem']";
    this.lnkNews = ("body > div:nth-child(2) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1)");
    this.netError = ('[class="neterror"]');
    this.Menu_News= "li[role='menuitem']";
   
  
  }
  
  async gotoNewsPage() {
    await this.page.goto('https://soltia.com/news');
  }


};




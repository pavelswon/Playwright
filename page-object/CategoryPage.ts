import { expect, type Locator, type Page } from '@playwright/test';

export class CategoryPage {
    readonly page: Page;

    readonly getPage2: Locator;
    readonly getProduct: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.getPage2 = page.locator("//ul[@class='page-numbers']/li[2]")
      this.getProduct = page.locator("//li[contains(@class,'2313')]");
    }
  
    async clickgetPage2() {
      await this.getPage2.click();
    }

    async clickgetProduct() {
      await this.getProduct.click();
    }
  }
  
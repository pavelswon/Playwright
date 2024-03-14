import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  readonly breadcrumbNavigation: Locator;
  readonly getAddInform: Locator;

  constructor(page: Page) {
    this.page = page;
   
    this.breadcrumbNavigation = page.locator("//nav[@class='woocommerce-breadcrumb']");
    this.getAddInform = page.locator("//li[@id='tab-title-additional_information']");
}

async getBreadcrumbLabelText() {
    return await this.breadcrumbNavigation.textContent();
  }

  async clickAddInform() {
    await this.getAddInform.click();
  }
}
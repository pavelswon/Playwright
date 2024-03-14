import { expect, type Locator, type Page } from '@playwright/test';

export class VagarPage {
  readonly page: Page;

  readonly topMenu: Locator;
  readonly subMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topMenu = page.locator("//ul[@id='top-menu']/li[@id='menu-item-1612']");
    this.subMenu = page.locator("//ul[@class='sub-menu']/li[@id='menu-item-1611']");
  }

  async goto() {
    await this.page.goto('https://vagar.com.ua/');
  }

  async hoverTopMenu() {
    await this.topMenu.hover();
  }

  async clickSubMenu() {
    await this.subMenu.first().click();
  }
}
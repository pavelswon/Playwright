import { test, expect } from '@playwright/test';
import { VagarPage } from '../page-object/VagarPage';
import { CategoryPage } from '../page-object/CategoryPage';
import { ProductPage } from '../page-object/ProductPage';

test('Vagar', async ({ page }) => {
    const vagarPage = new VagarPage(page);
    const categoryPage = new CategoryPage(page);
    const productPage = new ProductPage(page);

    await vagarPage.goto();
    await vagarPage.hoverTopMenu();
    await vagarPage.clickSubMenu();
    await categoryPage.clickgetPage2();
    await categoryPage.clickgetProduct();

    const breadcrumbText = await productPage.getBreadcrumbLabelText();
    expect(breadcrumbText).toContain('Кранові ваги ВК ЗЕВС ІІ-1000');

    await productPage.clickAddInform();
});
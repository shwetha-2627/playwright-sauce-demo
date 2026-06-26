import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addProduct(productName: string) {
    await this.page.locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: /add to cart/i })
      .click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
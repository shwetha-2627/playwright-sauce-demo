import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItems(products: string[]) {
    for (const product of products) {
      await expect(this.page.getByText(product)).toBeVisible();
    }
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
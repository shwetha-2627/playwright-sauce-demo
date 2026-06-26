import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterDetails(first: string, last: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
  }

  async continue() {
    await this.page.locator('[data-test="continue"]').click();
  }
}
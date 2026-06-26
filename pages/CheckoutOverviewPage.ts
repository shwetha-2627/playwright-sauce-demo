import { Page, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(private page: Page) {}

  async verifySummary() {
    await expect(this.page.getByText('Payment Information')).toBeVisible();
    await expect(this.page.getByText('Shipping Information')).toBeVisible();
  }

  async finish() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async verifyOrderSuccess() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }
}
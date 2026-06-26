import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { testData } from '../fixtures/testData';

test('E2E Checkout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new CheckoutOverviewPage(page);

  await loginPage.navigate();
  await loginPage.login(
    testData.user.username,
    testData.user.password
  );

  for (const product of testData.products) {
    await productsPage.addProduct(product);
  }

  await productsPage.goToCart();
  await cartPage.verifyItems(testData.products);
  await cartPage.checkout();

  await checkoutPage.enterDetails(
    testData.checkout.firstName,
    testData.checkout.lastName,
    testData.checkout.postalCode
  );

  await checkoutPage.continue();
  await overviewPage.verifySummary();
  await overviewPage.finish();
  await overviewPage.verifyOrderSuccess();
});
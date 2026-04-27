import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete checkout flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.openWebsite();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add item
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();

  // Step 3: Verify item
  const itemName = await cartPage.getItemName();
  expect(itemName).toContain('Backpack');

  // Step 4: Checkout
  await checkoutPage.startCheckout();

  // Step 5: Fill form
  await checkoutPage.fillInformation('Aman', 'Ali', '12345');

  // Step 6: Finish order
  await checkoutPage.finishOrder();

  // Step 7: Verify success
  const message = await checkoutPage.getSuccessMessage();
  expect(message).toContain('Thank you');
});
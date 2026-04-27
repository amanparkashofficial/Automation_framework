import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Add item and verify in cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // Step 1: Login
  await loginPage.openWebsite();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add item
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();

  // Step 3: Verify cart count
  const count = await inventoryPage.getCartCount();
  console.log('Cart count:', count);
  expect(count).toBe('1');

  const itemName = await cartPage.getItemName();
  console.log('itemname:', itemName);
  expect(itemName).toContain('Backpack');
  
});
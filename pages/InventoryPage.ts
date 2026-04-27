import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  // locator for first product "Add to Cart" button
  addToCartBtn = '#add-to-cart-sauce-labs-backpack';

  // locator for cart icon
  cartIcon = '.shopping_cart_link';

  // locator for cart badge (number)
  cartBadge = '.shopping_cart_badge';

  async addItemToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async getCartCount() {
    return await this.page.textContent(this.cartBadge);
  }
}
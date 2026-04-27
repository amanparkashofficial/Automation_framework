import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItem = '.inventory_item_name';

  async getItemName() {
    return await this.page.textContent(this.cartItem);
  }
}
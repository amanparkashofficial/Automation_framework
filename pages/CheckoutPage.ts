import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  // Step 1: Checkout button
  checkoutBtn = '#checkout';

  // Step 2: Form fields
  firstName = '#first-name';
  lastName = '#last-name';
  postalCode = '#postal-code';
  continueBtn = '#continue';

  // Step 3: Finish
  finishBtn = '#finish';

  // Step 4: Success message
  successMsg = '.complete-header';

  async startCheckout() {
    await this.page.click(this.checkoutBtn);
  }

  async fillInformation(fname: string, lname: string, zip: string) {
    await this.page.fill(this.firstName, fname);
    await this.page.fill(this.lastName, lname);
    await this.page.fill(this.postalCode, zip);
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
  }

  async getSuccessMessage() {
    return await this.page.textContent(this.successMsg);
  }
}
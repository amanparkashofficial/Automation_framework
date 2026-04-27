import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

loginData.forEach((data) => {

  test(`Login test for ${data.username}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();
    await loginPage.login(data.username, data.password);

    if (data.username === 'standard_user') {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }

  });

});
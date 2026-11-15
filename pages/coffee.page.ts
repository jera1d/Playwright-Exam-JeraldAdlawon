import { Page, Locator } from '@playwright/test';

export class CoffeePage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly promoBanner: Locator;
  readonly promoAcceptButton: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly submitPaymentButton: Locator;
  readonly successSnackbar: Locator;
  readonly addModalDialog: Locator;
  readonly modalConfirmYesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.promoBanner = page.locator('.promo');
    this.promoAcceptButton = page.locator('.promo button.yes');
    this.nameInput = page.getByLabel('Name');
    this.emailInput = page.getByLabel('Email');
    this.submitPaymentButton = page.getByRole('button', { name: 'Submit' });
    this.successSnackbar = page.locator('.snackbar.success');
    this.addModalDialog = page.locator('dialog');
    this.modalConfirmYesButton = this.addModalDialog.getByRole('button', { name: 'Yes' });
  }

  async open() {
    await this.page.goto('/');
  }

  getCoffeeCup(coffeeName: string): Locator {
    return this.page.locator(`[data-test="${coffeeName.replace(/\s+/g, '_')}"]`);
  }

  getCoffeeHeader(coffeeName: string): Locator {
    return this.page.locator('li').filter({ has: this.getCoffeeCup(coffeeName) }).locator('h4');
  }

  async selectCoffee(coffeeName: string) {
    await this.getCoffeeCup(coffeeName).click();
  }

  async acceptPromoIfTriggered() {
    if (await this.promoBanner.isVisible()) {
      await this.promoAcceptButton.click();
    }
  }

  async doubleClickTitleToTranslate(coffeeName: string) {
    await this.getCoffeeHeader(coffeeName).dblclick();
  }

  async rightClickCoffeeIcon(coffeeName: string) {
    await this.getCoffeeCup(coffeeName).click({ button: 'right' });
  }

  async openCheckoutModal() {
    await this.checkoutButton.click();
  }

  async completePayment(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.submitPaymentButton.click();
  }
}
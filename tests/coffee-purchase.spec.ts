import { test, expect } from '../fixtures/coffee.fixture';
import { testCustomer, menuItems, promoMessages } from '../data/checkout-data';

test.describe('Coffee Cart Storefront Flows', () => {
  test('should complete end-to-end purchase flow and handle promo popup', async ({ coffeePage }) => {
    await coffeePage.selectCoffee(menuItems.espresso);
    await coffeePage.selectCoffee(menuItems.cappuccino);
    await coffeePage.selectCoffee(menuItems.americano);

    await expect(coffeePage.promoBanner).toBeVisible();
    await coffeePage.acceptPromoIfTriggered();

    await coffeePage.openCheckoutModal();
    await coffeePage.completePayment(testCustomer.name, testCustomer.email);

    await expect(coffeePage.successSnackbar).toBeVisible();
    await expect(coffeePage.successSnackbar).toContainText(promoMessages.purchaseSuccess);
  });

  test('Bonus A: should translate coffee title to Chinese on double-click', async ({ coffeePage }) => {
    const header = coffeePage.getCoffeeHeader(menuItems.espresso);
    await expect(header).toContainText('Espresso');

    await coffeePage.doubleClickTitleToTranslate(menuItems.espresso);

    await expect(header).toContainText('特浓咖啡');
  });

  test('Bonus B: should open add-to-cart confirmation dialog on right-click', async ({ coffeePage }) => {
    await coffeePage.rightClickCoffeeIcon(menuItems.mocha);

    await expect(coffeePage.addModalDialog).toBeVisible();
    await coffeePage.modalConfirmYesButton.click();
    await expect(coffeePage.checkoutButton).toContainText('$8.00');
  });
});
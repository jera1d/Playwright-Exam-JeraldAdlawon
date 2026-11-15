import { test as base } from '@playwright/test';
import { CoffeePage } from '../pages/coffee.page';

type CoffeeFixtures = {
  coffeePage: CoffeePage;
};

export const test = base.extend<CoffeeFixtures>({
  coffeePage: async ({ page }, use) => {
    const coffeePage = new CoffeePage(page);
    await coffeePage.open();
    await use(coffeePage);
  },
});

export { expect } from '@playwright/test';
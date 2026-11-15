Coffee Cart Playwright Testing (Playwright)

This is my Playwright test suite for the Coffee Cart exam. It tests ordering coffee, handling promo popups, checking out, and running bonus UI interactions across multiple browsers.

Files Included
- `\playwright.config.ts - Configuration file for multi-browser execution and test directory settings.
- tsconfig.json - TypeScript configuration enabling proper file compilation and discovery.
- data/checkout-data.ts - Contains test customer details, menu items, and success messages.
- pages/coffee.page.ts - Page Object Model (POM) containing all locators and user actions.
- fixtures/coffee.fixture.ts - Custom test fixture extending Playwright's base runner.
- tests/coffee-purchase.spec.ts - End-to-end purchase test and bonus translation/right-click scenarios.

Test Scenarios in the Suite
1. End-to-End Purchase** - Selects multiple coffees, handles the promo popup, fills out customer info, and verifies the success message.
2. Bonus A (Translation)** - Double-clicks the coffee title to verify translation to Chinese.
3. Bonus B (Right-Click Dialog)** - Right-clicks a coffee item to trigger the modal confirmation dialog.


Run the tests in headed mode using: npx playwright test --headed.

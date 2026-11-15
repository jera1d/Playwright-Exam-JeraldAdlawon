export interface CustomerPaymentInfo {
  name: string;
  email: string;
}

export const testCustomer: CustomerPaymentInfo = {
  name: 'Jerald QA',
  email: 'jerald.qa@example.com',
};

export const menuItems = {
  espresso: 'Espresso',
  cappuccino: 'Cappuccino',
  americano: 'Americano',
  mocha: 'Mocha',
} as const;

export const promoMessages = {
  purchaseSuccess: 'Thanks for your purchase. Please check your email for payment.',
} as const;
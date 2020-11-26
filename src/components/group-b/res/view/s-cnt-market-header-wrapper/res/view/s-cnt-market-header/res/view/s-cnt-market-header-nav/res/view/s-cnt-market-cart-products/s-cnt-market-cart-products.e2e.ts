import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-cart-products', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-cart-products></s-cnt-market-cart-products>');

    const element = await page.find('s-cnt-market-cart-products');
    expect(element).toHaveClass('hydrated');
  });
});

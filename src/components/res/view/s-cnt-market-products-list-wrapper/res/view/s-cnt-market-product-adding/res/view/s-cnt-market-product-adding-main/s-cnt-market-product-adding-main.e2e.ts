import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-product-adding-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-product-adding-main></s-cnt-market-product-adding-main>');

    const element = await page.find('s-cnt-market-product-adding-main');
    expect(element).toHaveClass('hydrated');
  });
});

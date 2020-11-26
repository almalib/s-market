import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-product-adding', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-product-adding></s-cnt-market-product-adding>');

    const element = await page.find('s-cnt-market-product-adding');
    expect(element).toHaveClass('hydrated');
  });
});

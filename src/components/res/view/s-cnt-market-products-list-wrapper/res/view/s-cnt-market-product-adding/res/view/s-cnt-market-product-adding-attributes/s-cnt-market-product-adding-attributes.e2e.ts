import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-product-adding-attributes', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-product-adding-attributes></s-cnt-market-product-adding-attributes>');

    const element = await page.find('s-cnt-market-product-adding-attributes');
    expect(element).toHaveClass('hydrated');
  });
});

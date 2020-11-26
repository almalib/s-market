import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-empty-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-empty-cart></s-cnt-market-empty-cart>');

    const element = await page.find('s-cnt-market-empty-cart');
    expect(element).toHaveClass('hydrated');
  });
});

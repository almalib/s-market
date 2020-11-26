import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-products-list-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-products-list-wrapper></s-cnt-market-products-list-wrapper>');

    const element = await page.find('s-cnt-market-products-list-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});

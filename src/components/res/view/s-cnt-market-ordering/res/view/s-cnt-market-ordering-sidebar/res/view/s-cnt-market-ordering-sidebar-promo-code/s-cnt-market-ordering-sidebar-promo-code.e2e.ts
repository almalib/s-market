import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-sidebar-promo-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-sidebar-promo-code></s-cnt-market-ordering-sidebar-promo-code>');

    const element = await page.find('s-cnt-market-ordering-sidebar-promo-code');
    expect(element).toHaveClass('hydrated');
  });
});

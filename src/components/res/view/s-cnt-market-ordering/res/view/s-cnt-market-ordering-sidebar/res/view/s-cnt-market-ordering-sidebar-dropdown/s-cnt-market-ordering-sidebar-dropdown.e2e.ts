import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-sidebar-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-sidebar-dropdown></s-cnt-market-ordering-sidebar-dropdown>');

    const element = await page.find('s-cnt-market-ordering-sidebar-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-market-ordering-modal-window', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-market-ordering-modal-window></s-cnt-market-ordering-modal-window>');

    const element = await page.find('s-cnt-market-ordering-modal-window');
    expect(element).toHaveClass('hydrated');
  });
});

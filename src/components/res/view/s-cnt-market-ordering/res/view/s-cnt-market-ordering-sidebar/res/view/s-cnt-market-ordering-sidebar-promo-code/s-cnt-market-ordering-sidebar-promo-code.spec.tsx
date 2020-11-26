import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingSidebarPromoCode } from './s-cnt-market-ordering-sidebar-promo-code';

describe('s-cnt-market-ordering-sidebar-promo-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingSidebarPromoCode],
      html: `<s-cnt-market-ordering-sidebar-promo-code></s-cnt-market-ordering-sidebar-promo-code>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-sidebar-promo-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-sidebar-promo-code>
    `);
  });
});

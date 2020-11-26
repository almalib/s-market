import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingSidebarDropdown } from './s-cnt-market-ordering-sidebar-dropdown';

describe('s-cnt-market-ordering-sidebar-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingSidebarDropdown],
      html: `<s-cnt-market-ordering-sidebar-dropdown></s-cnt-market-ordering-sidebar-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-sidebar-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-sidebar-dropdown>
    `);
  });
});

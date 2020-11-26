import { newSpecPage } from '@stencil/core/testing';
import { _sCntMarketOrderingContacts } from './_s-cnt-market-ordering-contacts';

describe('s-cnt-market-ordering-contacts', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [_sCntMarketOrderingContacts],
      html: `<s-cnt-market-ordering-contacts></s-cnt-market-ordering-contacts>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-contacts>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-contacts>
    `);
  });
});

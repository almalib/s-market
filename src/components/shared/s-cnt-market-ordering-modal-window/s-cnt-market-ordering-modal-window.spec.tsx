import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketOrderingModalWindow } from './s-cnt-market-ordering-modal-window';

describe('s-cnt-market-ordering-modal-window', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketOrderingModalWindow],
      html: `<s-cnt-market-ordering-modal-window></s-cnt-market-ordering-modal-window>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-ordering-modal-window>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-ordering-modal-window>
    `);
  });
});

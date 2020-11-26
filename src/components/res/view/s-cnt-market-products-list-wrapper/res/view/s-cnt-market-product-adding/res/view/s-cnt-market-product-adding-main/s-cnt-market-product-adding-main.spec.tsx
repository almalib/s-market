import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketProductAddingMain } from './s-cnt-market-product-adding-main';

describe('s-cnt-market-product-adding-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketProductAddingMain],
      html: `<s-cnt-market-product-adding-main></s-cnt-market-product-adding-main>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-product-adding-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-product-adding-main>
    `);
  });
});

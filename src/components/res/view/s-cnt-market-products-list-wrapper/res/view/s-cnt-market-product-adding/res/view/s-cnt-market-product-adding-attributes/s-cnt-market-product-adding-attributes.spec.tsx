import { newSpecPage } from '@stencil/core/testing';
import { SCntMarketProductAddingAttributes } from './s-cnt-market-product-adding-attributes';

describe('s-cnt-market-product-adding-attributes', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntMarketProductAddingAttributes],
      html: `<s-cnt-market-product-adding-attributes></s-cnt-market-product-adding-attributes>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-market-product-adding-attributes>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-market-product-adding-attributes>
    `);
  });
});

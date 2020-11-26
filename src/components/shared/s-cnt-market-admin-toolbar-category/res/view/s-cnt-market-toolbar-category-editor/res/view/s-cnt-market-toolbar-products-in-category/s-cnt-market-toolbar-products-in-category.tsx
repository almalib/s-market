import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {ToolbarProductsInCategoryInterface} from "../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-products-in-category',
  styleUrl: 's-cnt-market-toolbar-products-in-category.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarProductsInCategory implements ComponentInterface {
  /**
   *
   */
  @Prop() categoryProducts: ToolbarProductsInCategoryInterface;

  render() {
    return (
      <div class="products-in-category-wrapper">
        <div class="products-in-category-head">
          <div class="products-in-category-head-btn">
            <button class="default-btn primary-btn btn-small">
              {this.categoryProducts.snapBtnText}
            </button>
            <button class="default-btn btn-small" disabled>
              {this.categoryProducts.deleteBtnText}
            </button>
            <button class="default-btn btn-small">
              {this.categoryProducts.addBtnText}
            </button>
          </div>
        </div>
        <div class="category-list-wrapper">
          <s-cnt-market-toolbar-products-category-list
          productList={this.categoryProducts.categoryProductsList}
          ></s-cnt-market-toolbar-products-category-list>
        </div>
        <div>
          <s-cnt-market-toolbar-products-in-category-footer
            productsListFooter={this.categoryProducts.productsListFooter}
          ></s-cnt-market-toolbar-products-in-category-footer>
        </div>
      </div>
    );
  }

}

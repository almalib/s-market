import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {ProductsInCategoryFooterInterface} from "../../../../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-products-in-category-footer',
  styleUrl: 's-cnt-market-toolbar-products-in-category-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarProductsInCategoryFooter implements ComponentInterface {
  /**
   *
   */
  @Prop() productsListFooter: ProductsInCategoryFooterInterface;

  render() {
    return (
      <div class="products-in-category-footer">
        <div class="paging-bar-text">
          {this.productsListFooter.pagingBarText}
        </div>
        <div class="page-number-and-switching">
          <button type="button" class="default-btn btn-small next-page-switching">
            <i class={this.productsListFooter.btnLeftIcon}></i>
          </button>
          <input class="page-number" value="1"/>
          <button type="button" class="default-btn btn-small back-page-switching">
            <i class={this.productsListFooter.btnRightIcon}></i>
          </button>
        </div>
        <div class="paging-bar-text ml-5">
          {this.productsListFooter.productQuantityTitle}
          <span class="paging-bar-text-number px-1">
            {this.productsListFooter.productQuantityOnPage}
          </span>
          из
          <span class="paging-bar-text-number px-1">
            {this.productsListFooter.productQuantity}
          </span>
        </div>
        <div class="products-per-page ml-5">
          <div class="paging-bar-text">
            {this.productsListFooter.quantityProductTitle}
          </div>
          <select class="paging-bar-items-per-page-box">
            {
              this.productsListFooter.quantityProduct.map((item) => {
                return (
                  <option>
                    {item.quantity}
                  </option>
                );
              })
            }
          </select>
        </div>
      </div>
    );
  }

}

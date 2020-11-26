import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {ProductsCategoryListInterface} from "../../../../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-products-category-list',
  styleUrl: 's-cnt-market-toolbar-products-category-list.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarProductsCategoryList implements ComponentInterface {
  /**
   *
   */
  @Prop() productList: ProductsCategoryListInterface;

  render() {
    return (
      <div class="product-in-category-list-container">
        <div class="product-in-category-list-head">
          <div class="table-list-start">
            {this.productList.vendorCodeTitle}
          </div>
          <div class="table-list-center">
            {this.productList.productNameTitle}
          </div>
          <div class="table-list-end">

          </div>
        </div>
        <div class="product-in-category-list-body">
          <ProductsListFunctionalComponent
            arr={this.productList.productList}
          ></ProductsListFunctionalComponent>
        </div>
      </div>
    );
  }

}

/*
* компонентная функция для вывода элементов меню
 */
const ProductsListFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="product-in-category">
        <div class="vendor-code">
          {item.vendorCode}
        </div>
        <div class="product-name">
          {item.productName}
        </div>
        <div class="product-delete-icon">
          <i class={item.deleteIcon}></i>
        </div>
      </div>
    );
  })
}

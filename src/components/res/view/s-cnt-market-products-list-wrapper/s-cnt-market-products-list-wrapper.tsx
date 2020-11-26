import { Component, ComponentInterface, h, State } from "@stencil/core";
import { header } from "../../../../utils/mock-b";
import { footerData } from "../../../../utils/mock-a";
// import {MarketProductsListAdmin} from "../../../../utils/mock-s";

@Component({
  tag: "s-cnt-market-products-list-wrapper",
  styleUrl: "s-cnt-market-products-list-wrapper.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsListWrapper implements ComponentInterface {
  /**
   * Авторизация юзера
   * */
  @State() login: boolean = true;

  /**
   * Первоначальная страница
   * */
  @State() firstPage: boolean;

  render() {
    return (
      <div class="app">
        <s-cnt-market-header categories={header} login={this.login}>
        </s-cnt-market-header>
        <main>
          <div class="overlayBackDrop"> </div>
          <s-cnt-market-product-adding
            onClickOnBackProductList={() => this.clickOnBackProductList()}
          ></s-cnt-market-product-adding>
          {/*<s-cnt-market-products-list-admin*/}
          {/*  onClickOnAddNewProduct={() => this.clickOnAddNewProduct()}*/}
          {/*  marketProductsListAdmin={MarketProductsListAdmin}*/}
          {/*> </s-cnt-market-products-list-admin>*/}
          <s-cnt-market-footer footerData={footerData}> </s-cnt-market-footer>
          <s-cnt-market-back-to-top> </s-cnt-market-back-to-top>
        </main>
      </div>
    );
  }

  /**
   * клик по кнопке добавления товара
   * */
  public clickOnAddNewProduct() {
    console.log('clickOnAddNewProduct 11')
  }

  /**
   * clickOnBackProductList
   * */
  public clickOnBackProductList() {
    console.log('clickOnBackProductList');
  }
}

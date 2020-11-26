import {Component, ComponentInterface, EventEmitter, h, State, Event} from "@stencil/core";

@Component({
  tag: "s-cnt-market-product-adding",
  styleUrl: "s-cnt-market-product-adding.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductAdding implements ComponentInterface {
  /**
   *
   * */
  @State() showContentState: number = 1;

  /**
   * clickOnBackProductList
   * */
  @Event() clickOnBackProductList:EventEmitter<void>

  render() {
    return (
      <div class="wrapper-adding-product">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="back-btn"
                onClick={()=> this.clickOnBackProductListHandler()}
              >
                <i class="fas fa-angle-left"></i>
                Назад
              </div>
              <div class="product-heading">
                <div class="product-heading__title muted">Новый товар</div>
                <div class="product-controls-heading">
                  <button class="button btn-add btn-primary">
                    Новый товар
                  </button>
                  <button class="button btn-off btn-clone ">Клон</button>
                  <button class="button btn-off btn-arrow ">
                    <i class="fas fa-arrow-left"></i>
                  </button>
                  <button class="button btn-off btn-arrow ">
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div class="gwt-TabPanel toolbar-tabs">
                <div class="tabs-items">
                  <ul>
                    <li
                      class={
                        this.showContentState === 1
                          ? "active tabs-item"
                          : "tabs-item"
                      }
                      onClick={() => this.clickOnTabHandler({ id: 1 })}
                    >
                      Основное
                    </li>
                    <li
                      class={
                        this.showContentState === 2
                          ? "active tabs-item"
                          : "tabs-item"
                      }
                      onClick={() => this.clickOnTabHandler({ id: 2 })}
                    >
                      Атрибуты
                    </li>
                    {/*<li*/}
                    {/*  class=" tabs-item"*/}
                    {/*  onClick={() => this.clickOnTabHandler({ id: 3 })}*/}
                    {/*>*/}
                    {/*  Параметры*/}
                    {/*</li>*/}
                  </ul>
                </div>
                <div class="detailed-layout">
                  <div class="container">
                    <div class="row">
                      <div class="col-12 col-lg-9">
                        {this.getContent(this.showContentState)}
                      </div>
                      <div class="col-12 col-lg-3">
                        <s-cnt-market-product-adding-sidebar></s-cnt-market-product-adding-sidebar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   *
   * */
  public clickOnBackProductListHandler() {
    this.clickOnBackProductList.emit();
  }

  /**
   *
   * */
  public clickOnTabHandler(id) {
    this.showContentState = id.id;
  }

  /**
   * какой контент показываеьб
   * */
  public getContent(content = 1) {
    switch (content) {
      case 1:
        return (
          <s-cnt-market-product-adding-main></s-cnt-market-product-adding-main>
        );
      case 2:
        return (
          <s-cnt-market-product-adding-attributes></s-cnt-market-product-adding-attributes>
        );
      default:
        return (
          <s-cnt-market-product-adding-main></s-cnt-market-product-adding-main>
        );
    }
  }
}

import {Component, ComponentInterface, h, State} from '@stencil/core';

@Component({
  tag: 's-cnt-market-product-adding-sidebar',
  styleUrl: 's-cnt-market-product-adding-sidebar.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductAddingSidebar implements ComponentInterface {


  /**
   *
   * */
  @State() showDetailsPriceState: boolean;


  /**
   *
   * */
  @State() showDetailsStockState: boolean;

  /**
   *
   * */
  @State() statusProductState: boolean = true;

  render() {
    return (
      <div class="a-card sidebar">
        <div class="product-sidebar-price-block">
          <div class="productSidebar-priceBlock-title">
            Цена
          </div>
          <div class="productSidebar-priceField">
            <div class="form-area__content">
              <input type="text"/>
            </div>
            <div class="price-value">₽</div>
            <div class="iconDropdown"
              onClick={() => this.showOrHideDetailsPriceHandler()}
            >
              {this.showDetailsPriceState ? <i class="far fa-arrow-alt-circle-up"></i> : <i class="far fa-arrow-alt-circle-down"></i>}
            </div>
          </div>
          <div class={
            this.showDetailsPriceState ? "opened product-sidebar__premium-features" : "product-sidebar__premium-features"
          }>
            <div class="premium-feature--disabled">
              <div class="premium-feature-block">
                                  <span class="premium-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                <div class="premium-text">Задать цену для сравнения</div>
              </div>
            </div>
            <div class="premium-feature--disabled">
              <div class="premium-feature-block">
                                  <span class="premium-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                <div class="premium-text">Установить оптовые цены</div>
              </div>
            </div>
          </div>
        </div>
        <div class="productSidebar-availBlock">
          <div class="item-availBlock">
            <div class="availBlock-title">Статус</div>
            <div class="productSidebar-enabled">
              {this.statusProductState
                ? <span class="enabled" >Доступен в каталоге</span>
                : <span class="disabled" >Недоступен в каталоге</span> }
              <span class="link"
                onClick={()=> this.switchStatusProductHandler()}
              >[ {this.statusProductState ? 'Выключить' : 'Включить'} ]</span>

            </div>
          </div>
          <div class="item-availBlock">
            <div class="availBlock-title">Наличие на складе</div>
            <div class="productSidebar-enabled">
              <span class="enabled" >В наличии </span>
              <span class="link"
                    onClick={()=> this.showOrHideDetailsStockHandler()}
              >[ Изменить ]</span>
              <span class="availBlock-inStock-icon iconDropdown"
                onClick={()=> this.showOrHideDetailsStockHandler()}
              >
                {this.showDetailsStockState ? <i class="far fa-arrow-alt-circle-up"></i> : <i class="far fa-arrow-alt-circle-down"></i>}              </span>
              {/*<span class="disabled" >Доd
                              ступен в каталоге</span>*/}
            </div>
            <div class={
              this.showDetailsStockState ? 'opened inStock-change' : 'inStock-change'
            }>
              <div class="product-sidebar__premium-features-container">
                <div class="premium-feature--disabled">
                  <div class="premium-feature-block">
                                  <span class="premium-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                    <div class="premium-text">Задать цену для сравнения</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="productSidebar-bottomLine">
          <div class="check-preview">
            Предпросмотр товара в каталоге
          </div>
          <div class="open-in-shop">
            Открыть на витрине
          </div>
          <div class="productSidebar-promote">
            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a>
          </div>
        </div>
      </div>
    );
  }

  /**
   * переключаем показ дополнительный параметров блока цен
   * */
  public showOrHideDetailsPriceHandler(): void {
    this.showDetailsPriceState = !this.showDetailsPriceState;
  }

  /**
   * переключаем показ дополнительный параметров блока наличия
   * */
  public showOrHideDetailsStockHandler(): void {
    this.showDetailsStockState = !this.showDetailsStockState;
  }

  /**
   * Переключаем по клику статус продукта
   * */
  public switchStatusProductHandler(): void {
    this.statusProductState = !this.statusProductState;
  }


}

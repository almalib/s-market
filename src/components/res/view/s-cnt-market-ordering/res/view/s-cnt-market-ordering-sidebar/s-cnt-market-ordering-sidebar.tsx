import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-sidebar",
  styleUrl: "s-cnt-market-ordering-sidebar.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingSidebar implements ComponentInterface {
  /**
   * Данные для сайдбара
   */
  @Prop() orderingSidebar: any;

  /**
   * Данные для модалки
   */
  @Prop() orderingModals: any;

  /**
   *Клик по кнопке закрытия
   */
  @Event() clickOnCloseBtn: EventEmitter;

  /**
   *Стейт для открытия и зарытия модального окна
   * */
  @State() promoModalState: boolean;

  /**
   *Стейт для переключения дропдавн меню
   * */
  @State() dropDownState = false;

  /**
   * ref для закрытия модального окна
   */
  public ourModal: HTMLElement;

  /**
   * ref для работы с дропдавн меню
   */
  public dropDownTag: HTMLElement;

  /**
   * ref стрелки
   */
  public arrowTag: HTMLElement;

  render() {
    return (
      <aside class="checkout-sidebar-wrapper">
        {this.promoModalState ? (
          <s-cnt-market-ordering-modal-window
            onClickOnCloseBtn={() => this.closeModalForm()}
            orderingModal={this.orderingModals.promoCode}
          ></s-cnt-market-ordering-modal-window>
        ) : (
          ""
        )}
        <div class="checkout-sidebar-container">
          <div class="checkout-summary-wrap">
            <div class="checkout-logo-wrap">
              <div class="checkout-logo-back-color">
                <div
                  class="checkout-logo-back-img"
                  style={{
                    backgroundImage: `url(${this.orderingSidebar.header.logo})`,
                  }}
                ></div>
              </div>
              <div class="checkout-market-name">
                {this.orderingSidebar.header.shopName}
              </div>
            </div>
            <div class="checkout-sidebar-product-info-wrapper">
              <div>
                <div class="checkout-subtotal">
                  <div class="checkout-subtotal-title">
                    {this.orderingSidebar.summary.title}
                  </div>
                  <div class="checkout-subtotal-price">
                    {this.orderingSidebar.summary.price}&nbsp;
                    <span>{this.orderingSidebar.summary.currency}</span>
                  </div>
                </div>
                <div class="checkout-subtotal-detail">
                  <div>{this.orderingSidebar.summary.amount}</div>
                  <div class="checkout-subtotal-weight">
                    <i class="fas fa-weight-hanging"></i>
                    <span>{this.orderingSidebar.summary.weight}</span>
                  </div>
                </div>
              </div>
              <div class="checkout-separator"></div>
              <div class="shipping-and-assembly-info-wrap">
                <div class="shipping-and-assembly-info-container">
                  <div
                    class="shipping-and-assembly-info-title"
                    onClick={() => this.openAndCloseDropdown()}
                  >
                    <span>{this.orderingSidebar.summary.delivery}</span>
                    <div
                      class="arrow-wrapper"
                      ref={(el) => (this.arrowTag = el)}
                    >
                      <i class="fas fa-angle-down arrow"></i>
                    </div>
                  </div>
                  <div class="shipping-and-assembly-info">
                    {this.orderingSidebar.summary.status}
                  </div>
                </div>
                <div
                  class="shipping-and-assembly-wrapper"
                  ref={(el) => (this.dropDownTag = el)}
                >
                  <div class="collapse-wrapper">
                    <div class="shipping-and-assembly-collapse">
                      <SidebarDropdown
                        array={this.orderingSidebar.deliveryInfo}
                      ></SidebarDropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-code-block-wrapper">
              <div class="promo-code-check" onClick={() => this.openForm()}>
                <span>{this.orderingSidebar.promo}</span>
              </div>
              <div class="promo-code-items">
                <PromoCards
                  array={this.orderingSidebar.promoCards}
                  orderingModal={this.orderingModals.promoCard}
                ></PromoCards>
              </div>
            </div>
            <div class="final-amount-of-checkout-wrapper">
              <div class="final-amount-wrapper">
                <div class="final-amount-title">Итого</div>
                <div class="final-amount-value">
                  7 360,25 <span>₽</span>
                </div>
              </div>
              <button class="checkout-btn checkout-btn-checked">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.promoModalState = true;
  }

  /**
   *Закртыие модального окна
   */
  public closeModalForm() {
    this.promoModalState = false;
  }

  /*
   * Вызов дропдавн меню
   */
  public openAndCloseDropdown() {
    this.dropDownState = !this.dropDownState;
    if (this.dropDownState) {
      this.dropDownTag.style.maxHeight = "1000px";
    } else {
      this.dropDownTag.style.maxHeight = "0";
    }
    this.rotateArrow();
  }

  /**
   * добавляем класс для поворота стрелки
   */
  public rotateArrow() {
    if (this.dropDownState) {
      this.arrowTag.classList.add("active-arrow");
    } else {
      this.arrowTag.classList.remove("active-arrow");
    }
  }
}

const SidebarDropdown = (props) => {
  return props.array.map((item) => {
    return (
      <div class="dropdown-item-wrapper">
        <s-cnt-market-ordering-sidebar-dropdown
          deliveryInfo={item}
        ></s-cnt-market-ordering-sidebar-dropdown>
      </div>
    );
  });
};

const PromoCards = (props) => {
  return props.array.map((item) => {
    return (
      <div class="promo-code-item-wrapper">
        <s-cnt-market-ordering-sidebar-promo-code
          orderingModal={props.orderingModal}
          promoCards={item}
        ></s-cnt-market-ordering-sidebar-promo-code>
      </div>
    );
  });
};

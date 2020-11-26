import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import {
  MarketOrderingModalsInterface,
  MarketOrderingPaymentInterface,
} from "../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-payment",
  styleUrl: "s-cnt-market-ordering-payment.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingPayment implements ComponentInterface {
  /**
   * Данные для панели метод получения
   */
  @Prop() payment: MarketOrderingPaymentInterface;

  /**
   * Стейт для переключения класса active
   */
  @Prop() addOrRemoveClassState: boolean;

  /**
   * Данные для модалки
   */
  @Prop() orderingModals: MarketOrderingModalsInterface;

  /**
   *Добавление класса active
   */
  @Event() addClassActive: EventEmitter;

  /**
   *Удаление класса active
   */
  @Event() removeClassActive: EventEmitter;

  /**
   * Последняя кликнутная кнопка селектора
   */
  @State() lastClickedBtn;

  /**
   * Стейт для переключения класса active
   */
  @State() togglePaymentMethodState = 1;

  /**
   *Для добавления класса invalid
   */
  @State() errorState: boolean = false;

  /**
   *
   */
  public paymentTag: HTMLElement;

  render() {
    return (
      <div class={this.addOrRemoveClassState ? "active" : ""}>
        <div class={`ordering-panel ${this.errorState && "invalid"}`}>
          <div
            class="panel-header collapsed"
            onClick={() =>
              this.addClassActiveHandler({ step: this.payment.id })
            }
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.payment.id}</div>
              <div class="panel-header-text">{this.payment.title}</div>
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.payment.info}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.payment.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div>
                <div class="payment-method-selector">
                  <MethodButtonFunctionalComponent
                    array={this.payment.methodBtn}
                    lastClickedBtn={this.togglePaymentMethodState}
                    clickOnBtn={(item) => this.clickOnBtn(item)}
                  ></MethodButtonFunctionalComponent>
                </div>
                <div ref={(el) => (this.paymentTag = el)}>
                  {this.togglePaymentMethod()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Добавляет класс active
   */
  public addClassActiveHandler(step) {
    this.addClassActive.emit(step);
  }

  /**
   * Клик по кнопкам мобильное приложение
   * @param item
   */
  public clickOnBtn(item) {
    this.togglePaymentMethodState = item.id;
    this.smoothToggle();
  }

  /**
   * Плавное переключение между методами оплаты
   */
  public smoothToggle() {
    this.paymentTag.classList.add("switched");
    setTimeout(() => {
      this.paymentTag.classList.remove("switched");
    }, 1000);
  }

  /**
   * Возвращает выбранный способ платежа
   */
  public togglePaymentMethod() {
    switch (this.togglePaymentMethodState) {
      case 1:
        return (
          <s-cnt-market-ordering-payment-online
            onAddClassInvalid={() => this.addClassInvalid()}
            onRemoveClassInvalid={() => this.removeClassInvalid()}
            orderingModals={this.orderingModals}
            errorState={this.errorState}
            payment={this.payment}
          ></s-cnt-market-ordering-payment-online>
        );
      case 2:
        return (
          <s-cnt-market-ordering-payment-transfer
            onAddClassInvalid={() => this.addClassInvalid()}
            onRemoveClassInvalid={() => this.removeClassInvalid()}
            errorState={this.errorState}
            payment={this.payment}
          ></s-cnt-market-ordering-payment-transfer>
        );
    }
  }

  /**
   * меняет стейт errorState на true
   */
  public addClassInvalid() {
    this.errorState = true;
  }

  /**
   * Меняет errorState на false
   */
  public removeClassInvalid() {
    this.errorState = false;
  }
}

const MethodButtonFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div
        class={
          item.id === props.lastClickedBtn
            ? "payment-method payment-method-active"
            : "payment-method"
        }
        onClick={() => props.clickOnBtn(item)}
      >
        <div class="payment-method-name">{item.text}</div>
      </div>
    );
  });
};

import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {
  MarketOrderingPaymentInterface
} from "../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-payment-online",
  styleUrl: "s-cnt-market-ordering-payment-online.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingPaymentOnline implements ComponentInterface {
  /**
   * Данные для раздела онлайн оплата
   */
  @Prop() payment: MarketOrderingPaymentInterface;

  /**
   * Данные для модалки
   */
  @Prop() orderingModals: any;

  /**
   * Добавляет класс invalid
   */
  @Prop() errorState: boolean;

  /**
   *Удаление класса active
   */
  @Event() removeClassActive: EventEmitter;

  /**
   * Добавление класса инвалид
   */
  @Event() addClassInvalid: EventEmitter;

  /**
   * Удаление класса инвалид
   */
  @Event() removeClassInvalid: EventEmitter;

  /**
   *Стейт для открытия и зарытия модального окна
   * */
  @State() promoModalState: boolean;

  /**
   *
   */
  @State() fieldErrorsState = {
    card: false,
    month: false,
    year: false,
    code: false,
    name: false,
  };

  /**
   *
   */
  @State() fieldValuesState = {
    card: "",
    month: "",
    year: "",
    code: "",
    name: "",
  };

  /**
   *
   */

  // /**
  //  *
  //  */
  // public inputCardTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputCardParentTag: HTMLElement;
  //
  // /**
  //  *
  //  */
  // public inputMonthTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputMonthParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputYearTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputYearParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputCodeParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputCodeTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputNameParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputNameTag: HTMLInputElement;

  /**
   *
   */
  public buttonTag: HTMLButtonElement;

  render() {
    return (
      <div>
        <div class="payment-tool-selector">
          {this.promoModalState ? (
            <s-cnt-market-ordering-modal-window
              onClickOnCloseBtn={() => this.closeModalForm()}
              orderingModal={this.orderingModals.card}
            ></s-cnt-market-ordering-modal-window>
          ) : (
            ""
          )}
          <div class="payment-tool-description">
            <i class="fas fa-info-circle"></i>
            {this.payment.online.desc}
          </div>
          <div class="ordering-form payment-tool-form">
            <div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    type="text"
                    placeholder="Номер карты"
                    class={`ordering-input ${
                      this.fieldErrorsState.card && "error"
                    }`}
                    value={this.fieldValuesState.card}
                    name="card"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.card && (
                    <div class="input-desc-error">
                      Укажите номер кредитной карты
                    </div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    type="text"
                    placeholder="ММ"
                    class={`ordering-input ${
                      this.fieldErrorsState.month && "error"
                    }`}
                    value={this.fieldValuesState.month}
                    name="month"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.month && (
                    <div class="input-desc-error">Укажите месяц</div>
                  )}
                </div>
                <div class="ordering-form-input">
                  <input
                    type="text"
                    placeholder="ГГГГ"
                    class={`ordering-input ${
                      this.fieldErrorsState.year && "error"
                    }`}
                    value={this.fieldValuesState.year}
                    name="year"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.year && (
                    <div class="input-desc-error">Укажите год</div>
                  )}
                </div>
                <div class="ordering-form-input">
                  <input
                    type="text"
                    placeholder="CVV"
                    class={`ordering-input ${
                      this.fieldErrorsState.code && "error"
                    }`}
                    value={this.fieldValuesState.code}
                    name="code"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.code && (
                    <div class="input-desc-error">
                      Укажите код CVV кредитной карты
                    </div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    type="text"
                    maxlength="40"
                    placeholder="Имя латиницей (IVAN IVANOV)"
                    class={`ordering-input ${
                      this.fieldErrorsState.name && "error"
                    }`}
                    value={this.fieldValuesState.name}
                    name="name"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.name && (
                    <div class="input-desc-error">
                      Укажите имя владельца кредитной карты
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="credit-card-security">
            <div class="credit-card-security-title">
              <i class="fas fa-lock"></i>
              {this.payment.online.securityTitle}
            </div>
            {this.payment.online.securityDesc}
          </div>
          <div class="business-customer-documents">
            <div class="business-customer-documents-checkbox">
              <div class="checkbox">
                <input type="checkbox" />
                <span>Необходимы закрывающие документы</span>
              </div>
            </div>
            <div class="business-customer-documents-error">
              Введите реквизиты компании
            </div>
            <div class="ordering-selector">
              <div class="ordering-selector-new">
                <div class="ordering-btn" onClick={() => this.openForm()}>
                  + Добавить реквизиты
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="button-block">
          <button
            ref={(el) => (this.buttonTag = el)}
            onClick={() => {
              this.submitHandler();
            }}
            type="button"
          >
            {this.payment.btn}
          </button>
        </div>
      </div>
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

  /**
   * Удаляет класс active
   */
  public removeClassActiveHandler(step) {
    this.removeClassActive.emit(step);
  }

  /**
   *
   * @param event
   */
  public blurInputHandler(event) {
    if (!event.target.value) {
      this.fieldErrorsState = {
        ...this.fieldErrorsState,
        [event.target.name]: true,
      };
    } else {
      this.fieldErrorsState = {
        ...this.fieldErrorsState,
        [event.target.name]: false,
      };
    }
  }

  /**
   *
   * @param event
   */
  public inputHandler(event) {
    this.fieldErrorsState = {
      ...this.fieldErrorsState,
      [event.target.name]: false,
    };

    this.fieldValuesState = {
      ...this.fieldValuesState,
      [event.target.name]: event.target.value,
    };
  }

  /**
   * проверка инпутов при отправке
   */
  public submitHandler() {
    let error = false;

    Object.keys(this.fieldValuesState).forEach((field) => {
      if (this.fieldValuesState[field].length < 3) {
        this.fieldErrorsState = {
          ...this.fieldErrorsState,
          [field]: true,
        };
        error = true;
        this.addClassInvalid.emit();
      }
    });

    if (!error) {
      this.removeClassActiveHandler({ step: this.payment.id });
      this.removeClassInvalid.emit();
    }
  }
}

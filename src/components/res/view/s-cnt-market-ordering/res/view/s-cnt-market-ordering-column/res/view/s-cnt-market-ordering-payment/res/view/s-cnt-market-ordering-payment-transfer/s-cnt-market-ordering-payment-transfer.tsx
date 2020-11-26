import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import { MarketOrderingPaymentInterface } from "../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-payment-transfer",
  styleUrl: "s-cnt-market-ordering-payment-transfer.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingPaymentTransfer implements ComponentInterface {
  /**
   * данные для блока оплата переводом
   */
  @Prop() payment: MarketOrderingPaymentInterface;

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
   *
   */
  @State() fieldErrorsState = {
    inn: false,
    legal: false,
    address: false,
    kpp: false,
    check: false,
    bik: false,
    bank: false,
    corr: false,
  };

  /**
   *
   */
  @State() fieldValuesState = {
    inn: "",
    legal: "",
    address: "",
    kpp: "",
    check: "",
    bik: "",
    bank: "",
    corr: "",
  };

  // /**
  //  *
  //  */
  // public inputInnTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputInnParentTag: HTMLElement;

  // /**
  //  *
  //  */
  // public inputLegalPersonTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputLegalPersonParentTag: HTMLElement;

  // /**
  //  *
  //  * */
  // public inputAddressTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputAddressParentTag: HTMLElement;

  // /**
  //  *
  //  * */
  // public inputKppParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputKppTag: HTMLInputElement;

  // /**
  //  *
  //  * */
  // public inputCheckParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputCheckTag: HTMLInputElement;

  // /**
  //  *
  //  * */
  // public inputBikParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputBikTag: HTMLInputElement;

  // /**
  //  *
  //  * */
  // public inputBankParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputBankTag: HTMLInputElement;

  // /**
  //  *
  //  */
  // public inputCorrParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputCorrTag: HTMLInputElement;

  render() {
    return (
      <div>
        <div class="payment-tool-selector">
          <div class="payment-tool-description">
            <i class="fas fa-info-circle"></i>
            {this.payment.transfer.desc}
          </div>
          <div class="ordering-form payment-tool-form">
            <div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="ИНН"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.inn && "error"
                    }`}
                    value={this.fieldValuesState.inn}
                    name="inn"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.inn && (
                    <div class="input-error-desc">Укажите ИНН</div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="Юридическое лицо"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.legal && "error"
                    }`}
                    value={this.fieldValuesState.legal}
                    name="legal"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.legal && (
                    <div class="input-error-desc">Укажите юридическое лицо</div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="Юридический адрес"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.address && "error"
                    }`}
                    value={this.fieldValuesState.address}
                    name="address"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.address && (
                    <div class="input-error-desc">
                      Укажите юридический адрес
                    </div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="КПП"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.kpp && "error"
                    }`}
                    value={this.fieldValuesState.kpp}
                    name="kpp"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.kpp && (
                    <div class="input-error-desc">Укажите КПП </div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="Расчетный счёт"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.check && "error"
                    }`}
                    value={this.fieldValuesState.check}
                    name="check"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.check && (
                    <div class="input-error-desc">Укажите расчетный счет</div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="БИК"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.bik && "error"
                    }`}
                    value={this.fieldValuesState.bik}
                    name="bik"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.bik && (
                    <div class="input-error-desc">Укажите БИК</div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="Название банка"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.bank && "error"
                    }`}
                    value={this.fieldValuesState.bank}
                    name="bank"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.bank && (
                    <div class="input-error-desc">Укажите название банка</div>
                  )}
                </div>
              </div>
              <div class="ordering-form-i">
                <div class="ordering-form-input">
                  <input
                    placeholder="Корреспондентский счёт"
                    maxlength="12"
                    type="text"
                    class={`ordering-input ${
                      this.fieldErrorsState.corr && "error"
                    }`}
                    value={this.fieldValuesState.corr}
                    name="corr"
                    onBlur={(event) => this.blurInputHandler(event)}
                    onInput={(event) => this.inputHandler(event)}
                  />
                  {this.fieldErrorsState.corr && (
                    <div class="input-error-desc">
                      Укажите корреспондентский счет
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="business-customer-documents business-customer-documents-disabled">
          <div class="business-customer-documents-checkbox">
            <div class="checkbox">
              <input type="checkbox" />
              <span>Необходимы закрывающие документы</span>
            </div>
          </div>
        </div>

        <div class="button-block">
          <button onClick={() => this.submitHandler()} type="button">
            {this.payment.btn}
          </button>
        </div>
      </div>
    );
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

import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import { MarketOrderingContactsInterface } from "../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-contacts",
  styleUrl: "s-cnt-market-ordering-contacts.css",
  shadow: false,
  scoped: true,
})
export class sCntMarketOrderingContacts implements ComponentInterface {
  /**
   * Данные для панели контакты
   */
  @Prop() contacts: MarketOrderingContactsInterface;

  /**
   * Стейт для переключения класса active
   */
  @Prop() addOrRemoveClassState: boolean;

  /**
   *Добавление класса active
   */
  @Event() addClassActive: EventEmitter;

  /**
   *Удаление класса active
   */
  @Event() removeClassActive: EventEmitter;

  /**
   *
   */
  @State() fieldErrorsState = {
    name: false,
    lastname: false,
    mail: false,
    phone: false,
  };

  /**
   *
   */
  @State() fieldValuesState = {
    name: "",
    lastname: "",
    mail: "",
    phone: "",
  };

  /**
   *Для добавления класса invalid
   */
  @State() errorState: boolean;

  /**
  //  *
  //  */
  // public inputNameTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputNameParentTag: HTMLElement;
  //
  // /**
  //  *
  //  */
  // public inputLastNameTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputLastNameParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputPhoneTag: HTMLInputElement;
  //
  // /**
  //  *
  //  * */
  // public inputPhoneParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputEmailParentTag: HTMLElement;
  //
  // /**
  //  *
  //  * */
  // public inputEmailTag: HTMLInputElement;
  //
  /**
   *
   */
  public buttonTag: HTMLButtonElement;
  //
  // /**
  //  *
  //  */
  // public invalidTag: HTMLElement;


  render() {
    return (
      <div
        class={this.addOrRemoveClassState ? "active" : ""}
      >
        <div class={`ordering-panel ${
          this.errorState && "invalid"
        }`}>
          <div
            class="panel-header collapsed"
            onClick={() =>
              this.addClassActiveHandler({ step: this.contacts.id })
            }
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.contacts.id}</div>
              {this.addOrRemoveClassState ? (
                <div class="panel-header-text">{this.contacts.text}</div>
              ) : (
                <div class="panel-header-text">{this.contacts.title}</div>
              )}
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.contacts.email}</div>
              <div class="panel-header-detail">{this.contacts.phone}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.contacts.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div class="ordering-form-container">
                <div class="contact-inputs-wrapper">
                  <div class="contact-inputs">
                    <div class="contact-inputs-inline">
                      <div class="contact-input">
                        <input
                          type="text"
                          placeholder="Имя"
                          class={`ordering-input ${
                            this.fieldErrorsState.name && "error"
                          }`}
                          value={this.fieldValuesState.name}
                          name="name"
                          onBlur={(event) => this.blurInputHandler(event)}
                          onInput={(event) => this.inputHandler(event)}
                        />
                        {this.fieldErrorsState.name && (
                          <div class="input-desc-error">Укажите имя</div>
                        )}
                      </div>
                      <div class="contact-input">
                        <input
                          type="text"
                          placeholder="Фамилия"
                          class={`ordering-input ${
                            this.fieldErrorsState.lastname && "error"
                          }`}
                          name="lastname"
                          onBlur={(event) => this.blurInputHandler(event)}
                          onInput={(event) => this.inputHandler(event)}
                        />
                        {this.fieldErrorsState.lastname && (
                          <div class="input-desc-error">Укажите фамилию</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="contact-inputs">
                    <div class="contact-input">
                      <input
                        type="text"
                        placeholder="Email"
                        class={`ordering-input ${
                          this.fieldErrorsState.mail && "error"
                        }`}
                        value={this.fieldValuesState.mail}
                        name="mail"
                        onBlur={(event) => this.blurInputHandler(event)}
                        onInput={(event) => this.inputHandler(event)}
                      />
                      {this.fieldErrorsState.mail && (
                        <div class="input-desc-error">Укажите email</div>
                      )}
                    </div>
                  </div>
                </div>
                <div class="ordering-phones">
                  <div class="ordering-phones-title">
                    Телефон для sms оповещений
                  </div>
                  <div class="ordering-form ordering-form-block">
                    <div class="inline-items">
                      <div class="phone-input">
                        <div
                          class="ordering-form-input">
                          <input
                            placeholder="+7 ___ ___-__-__"
                            class={`ordering-input ordering-input-phone ${
                              this.fieldErrorsState.phone && "error"
                            }`}
                            value={this.fieldValuesState.phone}
                            name="phone"
                            onBlur={(event) => this.blurInputHandler(event)}
                            onInput={(event) => this.inputHandler(event)}

                          />
                          {this.fieldErrorsState.phone && (
                            <div class="input-desc-error">Укажите телефон</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="promo-agreement">
                    <div class="checkbox">
                      <div class="checkbox-label checkbox-label-active">
                        <input type="checkbox" class="agreement-checkbox" />
                        <span>Отправлять информацию о заказе на email</span>
                        <div class="checkbox-error"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <button
                    ref={(el) => (this.buttonTag = el)}
                    type="button"
                    onClick={() => {
                      this.submitHandler();
                    }}
                  >
                    {this.contacts.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * проверка инпутов при отправке
   */
  public submitHandler() {
    this.errorState = false;

    Object.keys(this.fieldValuesState).forEach((field) => {
      if (this.fieldValuesState[field].length < 3) {
        this.fieldErrorsState = {
          ...this.fieldErrorsState,
          [field]: true,

        };
        this.errorState = true;
      }
    });

    if (!this.errorState) {
      this.removeClassActiveHandler({ step: this.contacts.id });
    }
  }
  /**
   * Добавляет класс active
   */
  public addClassActiveHandler(step) {
    this.addClassActive.emit(step);
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
   * Добавляет класс active
   */
  public removeClassActiveHandler(step) {
    this.removeClassActive.emit(step);
  }
}

import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-ordering-modal-window",
  styleUrl: "s-cnt-market-ordering-modal-window.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingModalWindow implements ComponentInterface {
  /**
   * Данные для модалки
   */
  @Prop() orderingModal: any;

  /**
   *Клик по кнопке закрытия
   */
  @Event() clickOnCloseBtn: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  public ourModal: HTMLElement;

  /**
   *
   */
  public inputTag: HTMLInputElement;

  /**
   *
   * */
  public inputParentTag: HTMLElement;

  render() {
    return (
      <div class="promo-modal-wrapper">
        <div
          class="promo-modal-closed"
          onClick={(event) => this.clickPopUpHandler(event)}
          ref={(el) => (this.ourModal = el)}
        ></div>
        <div class="promo-modal-form-wrapper">
          <div class="close-btn-wrapper">
            <button
              class="close-btn"
              type="button"
              onClick={() => this.closeFormHandler()}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="promo-modal-form-container">
            <div class="promo-modal-form-title">{this.orderingModal.title}</div>
            <form class="promo-modal-form-body">
              <div class="promo-code-input-wrapper" ref={(el) => (this.inputParentTag = el)}>
                <input
                  type="text"
                  placeholder={this.orderingModal.placeholder}
                  ref={(el) => (this.inputTag = el)}
                  onBlur={() =>
                    this.checkInputHandler(
                      this.inputParentTag,
                      this.inputTag
                    )
                  }
                  onInput={() =>
                    this.checkInputFocusHandler(
                      this.inputParentTag,
                      this.inputTag
                    )
                  }
                />
                <div class="checkout-input-error">
                  {this.orderingModal.error}
                </div>
              </div>
              <div class="promo-code-btn-wrapper">
                <button
                  class="promo-code-btn btn-cancel"
                  type="button"
                  onClick={() => this.closeFormHandler()}
                >
                  {this.orderingModal.cancel}
                </button>
                <button
                  type="button"
                  class="promo-code-btn btn-add"
                  onClick={() => this.closeFormHandler()}
                >
                  {this.orderingModal.add}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Закрытие модального окна формы
   */
  public closeFormHandler() {
    this.clickOnCloseBtn.emit();
  }

  /**
   * Вызов функции вывода меню при условии совпадения таргета клика с нужным узлом
   */
  public clickPopUpHandler(event) {
    if (event.target === this.ourModal) {
      this.clickOnCloseBtn.emit();
    }
  }

  /**
   * проверяем на заполненность
   * */
  public checkInputHandler(parent, input) {
    !input.value
      ? parent.classList.add("error")
      : parent.classList.remove("error");
  }

  /**
   * проверяем конкретно имя
   * */
  public checkInputFocusHandler(parent, input) {
    if (input.value.length > 2) {
      parent.classList.remove("error");
    }
  }
}

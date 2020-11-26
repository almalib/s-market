import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import { MarketOrderingSidebarPromoCardsInterface } from "../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-sidebar-promo-code",
  styleUrl: "s-cnt-market-ordering-sidebar-promo-code.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingSidebarPromoCode implements ComponentInterface {
  /**
   * Данные для промокарт
   */
  @Prop() promoCards: MarketOrderingSidebarPromoCardsInterface;

  /**
   *Стейт для открытия и зарытия модального окна
   * */
  @State() promoModalState: boolean;

  /**
   * Данные для модалки
   */
  @Prop() orderingModal: any;

  render() {
    return (
      <div class="promo-code-item">
        {this.promoModalState ? (
          <s-cnt-market-ordering-modal-window
            onClickOnCloseBtn={() => this.closeModalForm()}
            orderingModal={this.orderingModal}
          ></s-cnt-market-ordering-modal-window>
        ) : (
          ""
        )}
        <div class="promo-code-item-img">
          <div
            style={{
              backgroundImage: `url(${this.promoCards.img})`,
            }}
          ></div>
        </div>
        <div class="promo-code-item-info">
          <div class="promo-code-item-name">{this.promoCards.title}</div>
          <div class="promo-code-item-link-add" onClick={() => this.openForm()}>
            {this.promoCards.link}
          </div>
        </div>
      </div>
    );
  }

  /**
   *Закртыие модального окна
   */
  public closeModalForm() {
    this.promoModalState = false;
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.promoModalState = true;
  }
}

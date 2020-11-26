import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import { MarketCartProductsInterface } from "../../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-basket",
  styleUrl: "s-cnt-market-basket.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketBasket implements ComponentInterface {
  /**
   * Продукты из корзины
   * */
  @Prop() marketCartProducts: MarketCartProductsInterface[] = [];

  /**
   * Стейт на состояние корзины открыто/закрыто
   * */
  @Prop() openedBasket: boolean;

  /**
   * /Закрыть корзину
   * */
  @Event() closeBasket: EventEmitter<void>;

  /**
   * Тег обертки оверлея корзины
   * */
  private basketTag: HTMLElement;

  /**
   *
   * */
  @State() MarketCartProductsState = this.marketCartProducts;

  render() {
    return (
      <div>
        <div
          class={
            this.openedBasket ? "drawer-backdrop  opened " : "drawer-backdrop "
          }
          ref={(el) => (this.basketTag = el)}
          onClick={(event) => this.clickOnBasketHandler(event)}
        ></div>
        <div
          class={
            this.openedBasket
              ? "drawer-right drawer-transition opened "
              : "drawer-right drawer-transition "
          }
        >
          <div class="drawer-content">

                {/*<s-cnt-market-empty-cart></s-cnt-market-empty-cart>*/}
                <s-cnt-market-cart-products
                  MarketCartProductsState={this.MarketCartProductsState}
                ></s-cnt-market-cart-products>
          </div>
        </div>
      </div>
    );
  }

  /**
   * клик на закрыть корзину
   * */
  public clickOnBasketHandler(event): void {
    if (event.target === this.basketTag) {
      this.closeBasketHandler();
    }
  }

  /**
   * Закрытие  Basket
   * */
  public closeBasketHandler(): void {
    this.closeBasket.emit();
  }
}

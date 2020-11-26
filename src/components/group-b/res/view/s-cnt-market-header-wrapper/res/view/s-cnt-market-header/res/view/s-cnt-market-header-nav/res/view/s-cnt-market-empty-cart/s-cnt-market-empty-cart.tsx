import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
} from "@stencil/core";

@Component({
  tag: "s-cnt-market-empty-cart",
  styleUrl: "s-cnt-market-empty-cart.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketEmptyCart implements ComponentInterface {
  /**
   * /Закрыть корзину
   * */
  @Event() closeBasket: EventEmitter<void>;

  /**
   * Тег обертки оверлея корзины
   * */
  private basketTag: HTMLElement;

  render() {
    return (
      <div class="new-cart">
        <div class="new-cart-empty">
          <div class="new-cart-header">
            <div class="new-cart-title">Ваша корзина</div>
            <div
              class="btn-close-cart"
              onClick={() => this.closeBasketHandler()}
            >
              <i class="fas fa-times"></i>
              <div class="btn-close-cart-text">Закрыть</div>
            </div>
          </div>
          <div class="new-cart-content">
            <div class="new-cart-empty">
              <div class="new-cart-empty-img">
                <i class="fas fa-shopping-cart"></i>
              </div>
              <div class="new-cart-empty-text">Ваша корзина пуста</div>
            </div>
          </div>
          <div class="message-box"
          >
            <button class="btn-empty">Сделать заказ</button>
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

    console.log('closeBasket')
    this.closeBasket.emit();
  }


}

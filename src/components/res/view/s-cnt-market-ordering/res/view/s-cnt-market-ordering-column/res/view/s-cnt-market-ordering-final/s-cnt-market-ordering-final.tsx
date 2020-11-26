import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {MarketOrderingFinalInterface} from "../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-final",
  styleUrl: "s-cnt-market-ordering-final.css",
  shadow: false,
  scoped: true
})
export class SCntMarketOrderingFinal implements ComponentInterface {
  /**
   * Текст для блока "оформить заказ"
   */
  @Prop() final: MarketOrderingFinalInterface;

  render() {
    return (
      <div class="ordering-finalize">
        <div class="ordering-finalize-text">{this.final.text}</div>
        <div class="ordering-finalize-button">
          <div class="ordering-sidebar-place-order">
            <div>
              <button
                class="btn-disabled"
                disabled
              >
                {this.final.btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event,
} from "@stencil/core";
import {MarketOrderingPanelsInterface} from "../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-replacement-policy",
  styleUrl: "s-cnt-market-ordering-replacement-policy.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingReplacementPolicy implements ComponentInterface {
  /**
   *Данные для панелей политика доставки
   */
  @Prop() panels: MarketOrderingPanelsInterface ;

  /**
   * Последняя кликнутая панель со временем
   * */
  @Prop() lastClickedPanel;

  /**
   * Клик по панели
   */
  @Event() clickOnPanel: EventEmitter;

  render() {
    return (
      <div
        class={{ selected: this.panels.id === this.lastClickedPanel?.id }}
        onClick={() => this.clickOnPanelHandler()}
      >
        <div class="replacement-policy">
          <label class="replacement-policy-label">
            <input type="radio" class="hidden-inp" value="1" />
            <div class="replacement-policy-desc">{this.panels.desc}</div>
          </label>
          <div class="popover-wrapper">
            <div class="popover">
              <div class="popover-item"></div>
              <div>
                Сборщик постарается заменить товары на их близкие аналоги. Если
                аналогов не найдется, сборщик уберет эти товары из заказа
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Клик по панели
   * */
  public clickOnPanelHandler() {
    this.clickOnPanel.emit();
  }
}

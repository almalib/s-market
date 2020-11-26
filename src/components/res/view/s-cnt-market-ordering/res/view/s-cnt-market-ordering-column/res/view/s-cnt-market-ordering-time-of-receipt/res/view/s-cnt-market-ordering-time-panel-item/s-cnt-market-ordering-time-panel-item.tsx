import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
} from "@stencil/core";
import {MarketOrderingTimetableTimeInterface} from "../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-time-panel-item",
  styleUrl: "s-cnt-market-ordering-time-panel-item.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingTimePanelItem implements ComponentInterface {
  /**
   * Время заказа
   */
  @Prop() time: MarketOrderingTimetableTimeInterface;

  /**
   * Последний кликнутый айтем
   */
  @Prop() lastClickedItem;

  /**
   * События клика по айтему
   */
  @Event() clickOnItem: EventEmitter;

  render() {
    return (
      <div
        class={
          this.time.id === this.lastClickedItem?.id
            ? "windows-selector-item selected"
            : "windows-selector-item"
        }
        onClick={() => this.clickOnItemHandler()}
      >
        <div class="windows-selector-item-btn-select">
          <span class="windows-selector-item-interval">{this.time.hours}</span>
          <div class="windows-selector-item-info">
            <div class="windows-selector-item-rate">
              <div class="windows-selector-item-rate-value">бесплатно</div>
            </div>
          </div>
        </div>
        <div class="windows-selector-item-btn-select btn-select-with-status">
          <span class="windows-selector-item-btn">
            {this.time.id === this.lastClickedItem?.id ? "Выбрано" : "Выбрать"}
          </span>
        </div>
      </div>
    );
  }

  /**
   * Клик по айтему
   * */
  public clickOnItemHandler() {
    this.clickOnItem.emit();
  }
}

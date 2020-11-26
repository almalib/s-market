import {Component, ComponentInterface, EventEmitter, Event, h, Prop} from "@stencil/core";
import {MarketSelectionInterface} from "../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-item-selection",
  styleUrl: "s-cnt-market-item-selection.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketItemSelection implements ComponentInterface {
  /**
   * Данные для карточек магазинов
   */
  @Prop() forSelection: MarketSelectionInterface;

  /**
   *
   */
  @Event() clickOnSelection: EventEmitter;

  render() {
    return (
      <div class="common" onClick={()=> this.clickOnSelectionHandler()}>
        <div class="image">
          <div
            class="img"
            style={{ backgroundImage: "url(" + this.forSelection.image + ")" }}
          ></div>
        </div>
        <div class="commonText">
          <div class="title">{this.forSelection.title}</div>
          <div class="text">{this.forSelection.text}</div>
        </div>
      </div>
    );
  }

  /**
   *
   * */
  public clickOnSelectionHandler() {
    this.clickOnSelection.emit();
  }
}

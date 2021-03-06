import {
  Component,
  ComponentInterface,
  h,
  Prop,
} from "@stencil/core";
import {MarketOrderingTimetableDateInterface} from "../../../../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-time-panel-tab",
  styleUrl: "s-cnt-market-ordering-time-panel-tab.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingTimePanelTab implements ComponentInterface {
  /**
   * Дата и день недели
   */
  @Prop() date: MarketOrderingTimetableDateInterface;

  render() {
    return (
      <div>
        <span class="panel-tab-day-name">{this.date.weekDay}</span>
        <span class="panel-tab-date">{this.date.monthDay}</span>
      </div>
    );
  }


}

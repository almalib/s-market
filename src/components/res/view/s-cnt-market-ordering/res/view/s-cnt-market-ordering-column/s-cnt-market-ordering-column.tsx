import { Component, ComponentInterface, State, h, Prop } from "@stencil/core";
import {MarketOrderingInterface, MarketOrderingModalsInterface} from "../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-column",
  styleUrl: "s-cnt-market-ordering-column.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingColumn implements ComponentInterface {
  /**
   * Данные для панелей
   */
  @Prop() ordering: MarketOrderingInterface;

  /**
   * Стейт для переключения класса active
   */
  @State() addOrRemoveClassState = 1;

  /**
   * Данные для модалки
   */
  @Prop() orderingModals: MarketOrderingModalsInterface;

  render() {
    return (
      <div class="ordering-column">
        <div class="ordering-panels">
          <s-cnt-market-ordering-method
            method={this.ordering.method}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState === 1 }
          ></s-cnt-market-ordering-method>
          <s-cnt-market-ordering-contacts
            contacts={this.ordering.contacts}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState === 2}
          ></s-cnt-market-ordering-contacts>
          <s-cnt-market-ordering-replacements
            replacements={this.ordering.replacements}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState === 3}
          ></s-cnt-market-ordering-replacements>
          <s-cnt-market-ordering-payment
            orderingModals={this.orderingModals}
            payment={this.ordering.payment}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState === 4}
          ></s-cnt-market-ordering-payment>
          <s-cnt-market-ordering-time-of-receipt
            timetable={this.ordering.timetable}
            onAddClassActive={(step) => this.addClassActive(step.detail)}
            onRemoveClassActive={(step) => this.removeClassActive(step.detail)}
            addOrRemoveClassState={this.addOrRemoveClassState === 5}
          ></s-cnt-market-ordering-time-of-receipt>
        </div>
        <s-cnt-market-ordering-final final={this.ordering.final}></s-cnt-market-ordering-final>
      </div>
    );
  }

  /**
   * Добавляет класс active
   */
  public addClassActive(id) {
    this.addOrRemoveClassState = id.step;
  }

  /**
   * Удаляет класс active
   */
  public removeClassActive(id) {
    if(this.addOrRemoveClassState === id.step) {
      this.addOrRemoveClassState++;
    }
  }
}

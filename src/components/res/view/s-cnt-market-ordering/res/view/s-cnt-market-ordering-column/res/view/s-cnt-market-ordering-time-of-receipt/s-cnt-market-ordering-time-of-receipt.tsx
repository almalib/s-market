import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {MarketOrderingTimetableInterface} from "../../../../../../../../../../index";

@Component({
  tag: "s-cnt-market-ordering-time-of-receipt",
  styleUrl: "s-cnt-market-ordering-time-of-receipt.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrderingTimeOfReceipt implements ComponentInterface {
  /**
   * Данные для панели метод получения
   */
  @Prop() timetable: MarketOrderingTimetableInterface;

  /**
   * Стейт для переключения класса active
   */
  @Prop() addOrRemoveClassState: boolean;

  /**
   *Добавление класса active
   */
  @Event() addClassActive: EventEmitter;

  /**
   *Удаление класса active
   */
  @Event() removeClassActive: EventEmitter;

  /**
   * Последний кликнутый таб
   * */
  @State() lastClickedTab;

  /**
   * Последний кликнутый айтем
   * */
  @State() lastClickedItem;

  render() {
    return (
      <div class={this.addOrRemoveClassState ? "active" : ""}>
        <div class="ordering-panel">
          <div
            class="panel-header collapsed"
            onClick={() =>
              this.addClassActiveHandler({ step: this.timetable.id })
            }
          >
            <div class="panel-header-desc">
              <div class="panel-header-indicator">{this.timetable.id}</div>
              {this.addOrRemoveClassState ? (
                <div class="panel-header-text">{this.timetable.text}</div>
              ) : (
                <div class="panel-header-text">{this.timetable.title}</div>
              )}
            </div>
            <div class="panel-header-details">
              <div class="panel-header-detail">{this.timetable.info}</div>
            </div>
            <div class="panel-header-link">
              <a>{this.timetable.link}</a>
            </div>
          </div>
          <div class="ordering-panel-hide">
            <div class="panel-content">
              <div class="ordering-delivery-windows-selector">
                <div class="windows-selector-title">
                  <div
                    class="windows-selector-title-logo"
                    style={{
                      backgroundImage: `url(${this.timetable.content.img})`,
                    }}
                  ></div>
                  <div class="windows-selector-title-text-wrap">
                    <span class="windows-selector-title-retailer">
                      {this.timetable.content.shop}
                    </span>
                    <span class="windows-selector-title-delivery">
                      Чт c 11:00 до 13:00
                    </span>
                  </div>
                </div>
                <div class="windows-selector-content">
                  <div class="windows-selector-panel">
                    <div class="panel-tabs">
                      <PanelTabFunctionalComponent
                        array={this.timetable.date}
                        clickOnTab={(tab) => this.clickOnTab(tab)}
                        lastClickedTab={this.lastClickedTab}
                      ></PanelTabFunctionalComponent>
                    </div>
                    <div class="panel-items">
                      <PanelItemFunctionalComponent
                        array={this.timetable.time}
                        clickOnTimeItem={(item) => this.clickOnTimeItem(item)}
                        lastClickedItem={this.lastClickedItem}
                      ></PanelItemFunctionalComponent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Добавляет класс active
   */
  public addClassActiveHandler(step) {
    this.addClassActive.emit(step);
  }

  /**
   * Добавляет класс active
   */
  public removeClassActiveHandler(step) {
    this.removeClassActive.emit(step);
  }

  /**
   * Клик по табу
   * */
  public clickOnTab(tab) {
    this.lastClickedTab = tab;
  }
  /**
   * Клик по айтему
   * */
  public clickOnTimeItem(item) {
    this.lastClickedItem = item;
  }
}

const PanelTabFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div
        class={
          item.id === props.lastClickedTab?.id
            ? "panel-tab selected"
            : "panel-tab"
        }
          onClick={() => props.clickOnTab(item)}
      >
        <s-cnt-market-ordering-time-panel-tab
          date={item}
        ></s-cnt-market-ordering-time-panel-tab>
      </div>
    );
  });
};

const PanelItemFunctionalComponent = (props) => {
  return props.array.map((item) => {
    return (
      <div class="windows-selector-item-wrapper">
        <s-cnt-market-ordering-time-panel-item
          time={item}
          onClickOnItem={() => props.clickOnTimeItem(item)}
          lastClickedItem={props.lastClickedItem}
        ></s-cnt-market-ordering-time-panel-item>
      </div>
    );
  });
};

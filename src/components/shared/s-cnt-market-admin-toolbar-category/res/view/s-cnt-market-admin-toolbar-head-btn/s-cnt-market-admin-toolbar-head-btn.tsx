import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AdminToolbarHeadBtnInterface} from "../../../../../../index";

@Component({
  tag: 's-cnt-market-admin-toolbar-head-btn',
  styleUrl: 's-cnt-market-admin-toolbar-head-btn.css',
  shadow: false,
  scoped: true
})
export class SCntMarketAdminToolbarHeadBtn implements ComponentInterface {
  /**
   *
   */
  @Prop() toolbarHead: AdminToolbarHeadBtnInterface;

  /**
   *
   */
  @Event() selectedTab: EventEmitter;

  render() {
    return (
      <div class="toolbar-add-del-btn-category-wrapper">
        <ToolbarHeadFunctionalComponent
          arr={this.toolbarHead.toolbarHeadBtn}
          selectedTab={(tab) => this.selectedTab.emit(tab)}
        ></ToolbarHeadFunctionalComponent>
      </div>
    );
  }

}

/*
* компонентная функция для вывода элементов
 */
const ToolbarHeadFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <button class={btnClass(item.btnClass)} disabled={item.btnDisabled}
              onClick={() => props.selectedTab(item.component)}>
        {
          item.btnIcon ? (
            <span class="svg-icon">
              <i class={item.btnIcon}></i>
            </span>
          ) : (
            ''
          )
        }
        <span class="toolbar-head-btn-text">
          {item.btnText}
        </span>
      </button>
    );
  })

  /**
   * функция для присваисвания href объекта
   * */
  function btnClass(x) {
    switch (x) {
      case 'default':
        return 'default-btn';

      case 'default primary':
        return 'default-btn category-primary-btn';
    }
  }
}


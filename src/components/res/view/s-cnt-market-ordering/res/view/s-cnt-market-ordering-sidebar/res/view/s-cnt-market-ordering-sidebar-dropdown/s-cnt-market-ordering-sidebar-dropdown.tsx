import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-ordering-sidebar-dropdown',
  styleUrl: 's-cnt-market-ordering-sidebar-dropdown.css',
  shadow: false,
  scoped: true
})
export class SCntMarketOrderingSidebarDropdown implements ComponentInterface {

  /**
   * Данные для цен доставки и сборки
   */
  @Prop() deliveryInfo: any;

  render() {
    return (
      <div class="shipping-and-assembly-collapse-item">
        <div class="collapse-item-title">{this.deliveryInfo.title}</div>
        <div class="collapse-item-value">{this.deliveryInfo.price}</div>
      </div>
    );
  }

}

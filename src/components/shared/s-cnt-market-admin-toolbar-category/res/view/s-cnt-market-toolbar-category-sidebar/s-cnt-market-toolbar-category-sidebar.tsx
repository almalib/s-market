import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {ToolbarCategorySidebarInterface} from "../../../../../../index";

@Component({
  tag: "s-cnt-market-toolbar-category-sidebar",
  styleUrl: "s-cnt-market-toolbar-category-sidebar.css",
  shadow: false,
  scoped: true,
})

export class SCntMarketToolbarCategorySidebar implements ComponentInterface {
  /**
   *
   */
  @Prop() toolbarSidebar: ToolbarCategorySidebarInterface;

  render() {
    return (
      <div class="category-sidebar-wrapper">
        <div class="category-sidebar-title">
          {this.toolbarSidebar.sidebarTitle}
        </div>
        <div class="category-sidebar-subtitle">
          {this.toolbarSidebar.sidebarSubtitle}
        </div>
        <div class="category-items-collapse-expand">
          <div class="">
            {this.toolbarSidebar.sidebarViewStart}
          </div>
          <div>
            {this.toolbarSidebar.sidebarViewCenter}
          </div>
          <div class="">
            {this.toolbarSidebar.sidebarViewEnd}
          </div>
        </div>
        <div class="category-items-wrapper">
          <CategoryItemsFunctionalComponent
          arr={this.toolbarSidebar.sidebarCategoryItems}
          ></CategoryItemsFunctionalComponent>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const CategoryItemsFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="category-item">
        {item.category} (<span>{item.quantity}</span>)
      </div>
    );

  })
}

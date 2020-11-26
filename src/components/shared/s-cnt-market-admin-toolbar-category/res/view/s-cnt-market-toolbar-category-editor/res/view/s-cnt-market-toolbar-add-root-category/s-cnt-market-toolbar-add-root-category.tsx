import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
import {ToolbarAddRootCategoryInterface} from "../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-add-root-category',
  styleUrl: 's-cnt-market-toolbar-add-root-category.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarAddRootCategory implements ComponentInterface {
  /**
   *
   */
  @Prop() addRootCategory: ToolbarAddRootCategoryInterface;

  /**
   *
   */
  @State() statusState: boolean;

  render() {
    return (
      <div class="add-root-category-wrapper">
        <div class="new-category-name-editor-wrap">
          <div class="new-category-name-editor">
            <div class="new-category-name-title">
              {this.addRootCategory.newNameTitle}
            </div>
            <div class="new-category-name-input">
              <input type="text" placeholder="Название моей категории"/>
            </div>
          </div>
          <div class="new-category-name-status-wrap">
            <div class='new-category-name-status-title'>
              {this.addRootCategory.newStatusTitle}
            </div>
            {
              this.statusState ? (
                <div class="new-category-name-status-switcher">
                  <div class="new-category-name-status-icon included">
                    <i class={this.addRootCategory.statusSwitcherIconIncluded}></i>
                    {this.addRootCategory.statusSwitcherIncluded}
                  </div>
                  <div class="new-category-name-status" onClick={() => this.checkSwitchStatus()}>
                    {this.addRootCategory.statusSwitcherChoiceDisabled}
                  </div>
                </div>
              ) : (
                <div class="new-category-name-status-switcher">
                  <div class="new-category-name-status-icon">
                    <i class={this.addRootCategory.statusSwitcherIconDisabled}></i>
                    {this.addRootCategory.statusSwitcherDisabled}
                  </div>
                  <div class="new-category-name-status" onClick={() => this.checkSwitchStatus()}>
                    {this.addRootCategory.statusSwitcherChoiceIncluded}
                  </div>
                </div>
              )
            }

          </div>
        </div>
        <div class="new-category-img-editor-wrap">
          <div class="new-category-img-title">
            {this.addRootCategory.newImgTitle}
          </div>
          <div class="new-category-img-editor">
            <div class="new-category-img-view">
              <i class={this.addRootCategory.newImgLoadIcon}></i>
            </div>
            <div class="new-category-img-loading-wrap">
              <div class='new-category-img-load-title'>
                {this.addRootCategory.imgLoadTitle}
              </div>
              <div class='new-category-img-load'>
                <input type="file"/>
                <div class="file-name">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <s-cnt-market-category-editor-home-page
            editorPage={this.addRootCategory.editorPage}
          ></s-cnt-market-category-editor-home-page>
        </div>
      </div>
    );
  }

  public checkSwitchStatus() {
    this.statusState = !this.statusState;
  }

}

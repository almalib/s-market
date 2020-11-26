import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';
import {ToolbarCategoryEditorInterface} from "../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-category-editor',
  styleUrl: 's-cnt-market-toolbar-category-editor.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarCategoryEditor implements ComponentInterface {
  /**
   *
   */
  @Prop() toolbarEditor: ToolbarCategoryEditorInterface;

  /**
   * Стейт для переключения tabs
   */
  @Prop() selectedTabsState;

  /**
   *
   */
  @Event() openForm: EventEmitter;

  /**
   *
   */
  @Event() selectedTab: EventEmitter;

  /**
   *
   */
  homePageBtn: HTMLElement;

  /**
   *
   */
  categoryProductsBtn: HTMLElement;

  componentDidLoad() {
    this.classOfSelectedTab('editorPage');
  }

  render() {
    return (
      <div class="category-editor-wrapper">
        <div class="category-editor-header">
          <div class="category-editor-header-title">
            {this.toolbarEditor.title}
          </div>
          <div class="categories-preview" onClick={() => this.openForm.emit()}>
            {this.toolbarEditor.preview}
          </div>
          <div class="tabs-btn-wrapper">
            <div class="tabs-btn"
                 ref={(el) => this.homePageBtn = el}
                 onClick={() => this.selectedTabHandler(this.toolbarEditor.editorPage.component)}
            >
              {this.toolbarEditor.mainTab}
            </div>
            <div class="tabs-btn"
                 ref={(el) => this.categoryProductsBtn = el}
                 onClick={() => this.selectedTabHandler(this.toolbarEditor.categoryProducts.component)}
            >
              {this.toolbarEditor.productsTab}
            </div>
          </div>
        </div>
        <div class="category-editor">
          {this.toggleTabs()}
        </div>
      </div>
    );
  }

  /**
   * Возвращает выбранный
   */
  public toggleTabs() {
    switch (this.selectedTabsState) {
      case 'editorPage':
        return (
          <s-cnt-market-category-editor-home-page
            editorPage={this.toolbarEditor.editorPage}
          ></s-cnt-market-category-editor-home-page>
        );
      case 'categoryProducts':
        return (
          <s-cnt-market-toolbar-products-in-category
            categoryProducts={this.toolbarEditor.categoryProducts}
          ></s-cnt-market-toolbar-products-in-category>
        );
      case 'addRootCategory':
        return (
          <s-cnt-market-toolbar-add-root-category
            addRootCategory={this.toolbarEditor.addRootCategory}
          ></s-cnt-market-toolbar-add-root-category>
        );
    }
  }

  public selectedTabHandler (compName){
    this.selectedTab.emit(compName);
    this.classOfSelectedTab(compName);
  }

  public classOfSelectedTab(compName) {
    if (compName === 'editorPage') {
      this.homePageBtn.classList.add('selected-tab');
      this.categoryProductsBtn.classList.remove('selected-tab');
    } else if (compName === 'categoryProducts') {
      this.categoryProductsBtn.classList.add('selected-tab');
      this.homePageBtn.classList.remove('selected-tab');
    }
  }

}

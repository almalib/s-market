import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {CategoryEditorHomePage} from "../../../../../../../../../index";

@Component({
  tag: 's-cnt-market-category-editor-home-page',
  styleUrl: 's-cnt-market-category-editor-home-page.css',
  shadow: false,
  scoped: true
})
export class SCntMarketCategoryEditorHomePage implements ComponentInterface {
  /**
   * данные компонента FormCommunication
   */
  @Prop() editorPage: CategoryEditorHomePage;

  render() {
    return (
      <div class="home-page-text-editor-wrap">
        <div class="home-page-text-editor-title">
          {this.editorPage.title}
        </div>
        <s-cnt-market-text-redactor-box
          textRedactor={this.editorPage.editorBox}
        ></s-cnt-market-text-redactor-box>
      </div>
    );
  }

}

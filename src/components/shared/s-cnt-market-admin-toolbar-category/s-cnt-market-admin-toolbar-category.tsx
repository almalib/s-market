import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
import {AdminToolbarCategoryInterface} from "../../../index";

@Component({
  tag: 's-cnt-market-admin-toolbar-category',
  styleUrl: 's-cnt-market-admin-toolbar-category.css',
  shadow: false,
  scoped: true
})
export class SCntMarketAdminToolbarCategory implements ComponentInterface {
  /**
   *
   */
  @Prop() payload: AdminToolbarCategoryInterface;

  /**
   * boolean значение
   */
  @State() previewPopup: boolean;

  /**
   * Стейт для переключения tabs
   */
  @State() selectedTabsState = 'editorPage';

  /**
   *
   */
  sidebarParent: HTMLElement;

  /**
   *
   */
  sidebarOpenIcon: HTMLElement;

  /**
   *
   */
  sidebarCloseIcon: HTMLElement;

  /**
   *
   */
  sidebar: HTMLElement;

  componentDidLoad() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1200) {
        this.sidebarParent.style.width = '100%';
        this.sidebarOpenIcon.style.display = 'inline-block';
        this.sidebar.style.opacity = '1';
      } else if (window.innerWidth < 1200) {
        this.sidebarParent.style.width = '24px';
        this.sidebarOpenIcon.style.display = 'inline-block';
        this.sidebarCloseIcon.style.display = 'none';
        this.sidebar.style.opacity = '0';
      }
    })
  }


  render() {
    return (
      <div class="container-fluid vh-100">
        {
          this.previewPopup ? (
            <s-cnt-market-toolbar-category-modal-preview-window
              onCloseForm={() => this.closeForm()}
              productsPreviewModal={this.payload.productsPreviewModal}
            ></s-cnt-market-toolbar-category-modal-preview-window>
          ) : (
            ''
          )
        }
        <div class="row p-0 m-0 vh-100">
          <div class="col-12 p-0 m-0">
            <div class="panel-category-wrapper">
              <div class="panel-category-title">
                {this.payload.wrapTitle}
              </div>
              <s-cnt-market-admin-toolbar-head-btn
                toolbarHead={this.payload.toolbarCategoryHead}
                onSelectedTab={(tab) => this.selectedTab(tab)}
              ></s-cnt-market-admin-toolbar-head-btn>
            </div>
            <div class="toolbar-category-editor-wrapper">
              <div class="toolbar-category-sidebar-parent" ref={(el) => this.sidebarParent = el}>
                <span class="toolbar-category-sidebar-icon">
                  <i class="fas fa-bars sidebar-open-icon"
                     ref={(el) => this.sidebarOpenIcon = el}
                     onClick={() => this.clickOpenSidebar()}
                  ></i>
                  <i class="fas fa-times sidebar-close-icon"
                     ref={(el) => this.sidebarCloseIcon = el}
                     onClick={() => this.clickCloseSidebar()}
                  ></i>
                </span>
                <div class="toolbar-category-sidebar" ref={(el) => this.sidebar = el}>
                  <s-cnt-market-toolbar-category-sidebar
                    toolbarSidebar={this.payload.toolbarCategorySide}
                  ></s-cnt-market-toolbar-category-sidebar>
                </div>
              </div>
              <div class="toolbar-category-editor">
                <div class="">
                  <s-cnt-market-toolbar-category-editor
                    toolbarEditor={this.payload.toolbarEditor}
                    selectedTabsState={this.selectedTabsState}
                    onOpenForm={() => this.openForm()}
                    onSelectedTab={(tab) => this.selectedTab(tab)}
                  ></s-cnt-market-toolbar-category-editor>
                </div>
              </div>
            </div>
            <div>
              <s-cnt-market-toolbar-category-footer
                toolbarFooter={this.payload.toolbarFooter}
              ></s-cnt-market-toolbar-category-footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   *
   */
  public clickOpenSidebar() {
    this.sidebarParent.style.width = '100%';
    this.sidebarOpenIcon.style.display = 'none';
    this.sidebarCloseIcon.style.display = 'inline-block';
    this.sidebar.style.opacity = '1';
  }

  /**
   *
   */
  public clickCloseSidebar() {
    this.sidebarParent.style.width = '24px';
    this.sidebarOpenIcon.style.display = 'inline-block';
    this.sidebarCloseIcon.style.display = 'none';
    this.sidebar.style.opacity = '0';
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.previewPopup = true;
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.previewPopup = false;
  }


  public selectedTab({detail}) {
    this.selectedTabsState = detail;
  }
}

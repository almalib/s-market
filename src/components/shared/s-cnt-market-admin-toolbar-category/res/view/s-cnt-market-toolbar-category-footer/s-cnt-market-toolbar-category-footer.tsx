import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
import {ToolbarCategoryFooterInterface} from "../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-category-footer',
  styleUrl: 's-cnt-market-toolbar-category-footer.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarCategoryFooter implements ComponentInterface {
  /**
   *
   */
  @Prop() toolbarFooter: ToolbarCategoryFooterInterface;

  /**
   * boolean значение
   */
  @State() langPopup: boolean;

  /**
   *
   */
  @State() idLang: number = 1;

  /**
   * ref для закрытия модального окна
   */
  ourLang: HTMLElement;

  render() {
    return (
      <div class="toolbar-category-footer">
        <div class="toolbar-footer-wrap">
          <div class="shop-footer-info">
            <div>
              <span class="foot-shop-id-title">{this.toolbarFooter.shopIdTitle} </span>
              <span class="foot-shop-id"> {this.toolbarFooter.shopId}</span>
            </div>
            <div class="mobile-app-link">
              {this.toolbarFooter.mobileAppLink}
            </div>
          </div>
          <div class="footer-shop-menu-wrap">
            <div class="footer-copyright">
              {this.toolbarFooter.copyright}
            </div>
            <ul class="footer-menu-container">
              <FooterMenuFunctionalComponent
                arr={this.toolbarFooter.footerMenu}
              ></FooterMenuFunctionalComponent>
            </ul>
            <div class="lang-switcher-wrapper">
              <div class="lang-switcher-title">
                {this.toolbarFooter.langSwitcherTitle}
              </div>
              <div class="lang-switcher-container">
                <span class="selected-lang" onClick={() => this.openLang()}>
                  {this.SelectedLanguage()} <i class="fas fa-angle-down pl-1"></i>
                </span>
                {
                  this.langPopup ? (
                    <div class="lang-list-wrap">
                      <div class="close-lang" ref={(el) => this.ourLang = el}
                           onClick={(event) => this.clickPopUp(event)}>

                      </div>
                      <ul>
                        <LangListItemsFunctionalComponent
                          arr={this.toolbarFooter.languageList}
                          idSelected={(id)=> this.idSelected(id)}
                        ></LangListItemsFunctionalComponent>
                      </ul>
                    </div>
                  ) : (
                    ''
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * функция для присвоения id выбранного города
   * */
  public idSelected(x) {
    this.idLang = x;
    this.closeLang();
  }

  /**
   * Вывод выбранного города
   */
  public SelectedLanguage() {
    return this.toolbarFooter.languageList.map(item => {
      if (this.idLang === item.id) {
        return (
          item.language
        );
      }
    })
  }

  /**
   * Вызов модального окна
   */
  public openLang() {
    this.langPopup = true;
  }

  /**
   * Закрытие модального окна
   */
  public closeLang() {
    this.langPopup = false;
  }

  /**
   * Вызов функции вывода меню при условии совпадения таргета клика с нужным узлом
   */
  public clickPopUp(event) {
    if (event.target === this.ourLang) {
      this.closeLang()
    }
  };
}

/*
* компонентная функция для вывода элементов меню
 */
const FooterMenuFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <li class="footer-menu-item">
        {item.menuItem}
      </li>
    );
  })
}

/*
* компонентная функция для вывода
 */
const LangListItemsFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <li onClick={()=> props.idSelected(item.id)}>
        <span>
          {item.language}
        </span>
      </li>
    );
  })
}

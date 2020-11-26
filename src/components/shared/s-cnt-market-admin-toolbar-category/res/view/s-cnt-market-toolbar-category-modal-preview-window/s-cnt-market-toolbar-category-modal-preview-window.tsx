import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';
import {ToolbarCategoryModalPreviewWindowInterface} from "../../../../../../index";

@Component({
  tag: 's-cnt-market-toolbar-category-modal-preview-window',
  styleUrl: 's-cnt-market-toolbar-category-modal-preview-window.css',
  shadow: false,
  scoped: true
})
export class SCntMarketToolbarCategoryModalPreviewWindow implements ComponentInterface {
  /**
   *
   */
  @Prop() productsPreviewModal: ToolbarCategoryModalPreviewWindowInterface;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;

  render() {
    return (
      <div class="category-preview-modal-wrapper">
        <div class="closed" ref={(el) => this.ourModal = el} onClick={(event) => this.clickPopUp(event)}>

        </div>
        <div class="category-preview-modal">
          <div class="closed-icon" onClick={() => this.closeForm.emit()}>
            <i class="fas fa-times"></i>
          </div>
          <div class="category-preview-modal-title">
            <label>
              {this.productsPreviewModal.productsSortTitle} <i class={this.productsPreviewModal.productsSortIcon}></i>
            </label>
            <select>
              <SortSwitchFunctionalComponent
                arr={this.productsPreviewModal.sortSwitch}
              ></SortSwitchFunctionalComponent>
            </select>
          </div>
          <div class="grid-products-category-wrap">
            <ProductsPreviewFunctionalComponent
              arr={this.productsPreviewModal.categoryProductPreview}
            ></ProductsPreviewFunctionalComponent>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Вызов функции вывода меню при условии совпадения таргета клика с нужным узлом
   */
  public clickPopUp(event) {
    if (event.target === this.ourModal) {
      this.closeForm.emit();
    }
  };
}

/*
* компонентная функция для вывода элементов меню
 */
const SortSwitchFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <option>
        {item.switchItem}
      </option>
    );
  })
}

/*
* компонентная функция для вывода элементов меню
 */
const ProductsPreviewFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="preview-category-product">
        <div class='img-preview-category'>
          <div style={{backgroundImage: "url(" + item.img + ")"}}>

          </div>
        </div>
        <div class='name-preview-category'>
          {item.name}
        </div>
        <div class='price-preview-category'>
          {item.price}
        </div>
      </div>
    );
  })
}

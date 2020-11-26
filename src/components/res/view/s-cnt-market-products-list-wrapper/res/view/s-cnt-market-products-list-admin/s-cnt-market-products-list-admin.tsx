import {Component, ComponentInterface, EventEmitter, h, Prop, State, Event} from "@stencil/core";
import {MarketProductsListAdminInterface} from "../../../../../../../index";

@Component({
  tag: "s-cnt-market-products-list-admin",
  styleUrl: "s-cnt-market-products-list-admin.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketProductsListAdmin implements ComponentInterface {
  /**
   *
   */
  @Prop() marketProductsListAdmin: MarketProductsListAdminInterface[];

  /**
   * обертка для кнопки редактирования
   * */
  @State() dropDownTag:number;

  /**
   * клик по кнопке добавления товара
   * */
  @Event() clickOnAddNewProduct:EventEmitter<void>

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-product-list">
              <h1>Товары</h1>
              <div class="toolbar">
                <button class="add-new-product-btn"
                  onClick={() => this.clickOnAddNewProductHandler()}
                >
                  <i class="fas fa-plus"></i>
                  Добавить новый товар
                </button>
                <button class="import-product-btn">Импорт товаров</button>
              </div>
              <div class="product-list-filters">
                <div class="filter-panel">
                  <div class="filter-panel-toggle">
                    <div class="dropdown-filter-panel-header">
                      <div class="dropdown-filter-panel__header-title">
                        Фильтр
                      </div>
                      <div class="dropdown-filter-panel__header-icon">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </div>
                  </div>
                  <div class="filter-panel-search">
                    <div class="field field--medium ">
                      <span class="search-icon">
                        <i class="fas fa-search"></i>
                      </span>
                      <input
                        class="field__input"
                        type="text"
                        placeholder="Название товара или артикул"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="long-list-select-bar"></div>
            </div>
            <div class="content-product-list">
              <div class="products-list__select">
                <div class="btn-group btn-group--filter btn-group--select-all">
                  <div class=" dropdown-toggle">
                    <div class="checkbox-wrapper">
                      <input type="checkbox" />
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </div>
                </div>
                <div class="products-list__statuses ecwid-orders-status-panel">
                  СЕЙЧАС ПОКАЗАНЫ: ВСЕ ТОВАРЫ
                  <a class="ecwid-orders-status-panel__show-all">
                    <span> ОБНОВИТЬ</span>
                  </a>
                </div>
              </div>
              <div class="products-list__sort-by">
                <label>
                  <div class="form-control__select-text">
                    По названию: от А к Я <i class="fas fa-angle-down"></i>
                  </div>
                  <select class="form-control__select">
                    <option value="name-asc">По названию: от А к Я</option>
                    <option value="name-desc">По названию: от Я к А</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="long-list">
              <ProductCard
                product={this.marketProductsListAdmin}
                dropDownTag={this.dropDownTag}
                clickOnDropDownBtnEdit={(id) => this.clickOnDropDownBtnEdit(id)}
                clickOnCloseDropDownBtnEdit={() => this.clickOnCloseDropDownBtnEdit()}
              >
              </ProductCard>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Добавление нового товара
   * */

  public clickOnAddNewProductHandler(){
    this.clickOnAddNewProduct.emit()
  }

  /**
   *
   * */
  public clickOnDropDownBtnEdit(id) {
    // this.dropDownTag.classList.toggle("opened");
    this.dropDownTag = id ;
    // console.log("clickOnDropDownBtnEdit", id);
  }
  /**
   * Клик на закрытие модалки
   * */
  public clickOnCloseDropDownBtnEdit(): void  {
      this.dropDownTag = undefined ;
  }
}

/**
 * Карторчки товаров в админке
 * */
const ProductCard = (props) => {
  return props.product.map((item) => {
    return (
      <div class="long-list__item">
        <div class="list-item__toggle">
          <input type="checkbox" />
        </div>
        <div class="list-item__content">
          <div class="list-item__info">
            <div class="product">
              <div class="product__image">
                <a href="#">
                  <img src={item.img} alt="" />
                </a>
              </div>
              <div class="product__info">
                <div class="product__details-wrapper">
                  <div class="product__details">
                    <a href="#" class="product__name">
                      {item.title}
                    </a>
                    <a href="#" class="product__sku">
                      {item.article}
                    </a>
                    <div class="product__status">
                      <label class="checkbox micro">
                        <input type="checkbox" />
                        {item.actually ? (
                          <span class="checkbox__on-text-placeholder">Вкл</span>
                        ) : (
                          <span class="checkbox__off-text-placeholder">
                            Выкл
                          </span>
                        )}
                      </label>
                      {item.inStock ? (
                        <span class="product-instock product-instock--yes">
                          В наличии
                        </span>
                      ) : (
                        <span class="product-instock product-instock--yes">
                          Нет в наличии
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div class="product__settings">
                  <div class="labeled-icon labeled-icon--prepend-icon">
                    {item.parameters ?
                      <span>
                        <i class="fas fa-sliders-h"></i>
                        {item.parameters} параметр
                      </span>
                     : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="list-item__actions">
            <div class="product-price">{item.price}₽</div>
            <div class="list-item__buttons-set">
              <div class="btn-group">
                <button class="btn-edit">Редактировать товар</button>
                <div
                  class="btn btn-default btn-dropdown btn-small"
                  onClick={() => props.clickOnDropDownBtnEdit(item.id)}
                >
                  <i class="fas fa-angle-down"></i>
                </div>
                <div
                  class={props.dropDownTag === item.id ? ' opened drawer-backdrop' : 'drawer-backdrop'}
                  onClick={() => props.clickOnCloseDropDownBtnEdit()}
                ></div>
                <div
                  class={props.dropDownTag === item.id ? 'opened btn-dropdown-list' : 'btn-dropdown-list'}
                >
                  <ul>
                    <li>Редактировать параметры</li>
                    <li>Редактировать атрибуты</li>
                    <li>Добавить изображения</li>
                    <li>Загрузить файлы</li>
                    <li>Настроить доставку и налоги</li>
                    <li class="border-top">Клон</li>
                    <li>Удалить товар</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item-details__link">
          <i class="fas fa-chevron-right"> </i>
        </div>
      </div>
    );
  });
};

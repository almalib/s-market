import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-product-adding-main',
  styleUrl: 's-cnt-market-product-adding-main.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductAddingMain implements ComponentInterface {

  render() {
    return (
      <div>
        <div class="detailed-layout__main">
          <div class="gallery">
            <div class="gallery__items">
              <div class="gallery-item active-item " >
                <div class="gallery__item-inner">
                  <div class="gallery__item-content">
                    <div class="gallery-icon gallery-icon-first gallery-icon--upload">
                      <div class="icon" ><i class="fas fa-plus"></i></div>
                      <div class="gallery-icon__text ">
                        Загрузить изображения
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gallery-item">
                <div class="gallery__item-inner">
                  <div class="gallery__item-content">
                    <div class="gallery-icon  gallery-icon--upload">
                      <div class="icon" ><i class="fas fa-clock"></i></div>
                      <div class="gallery-icon__text ">
                        Загрузить изображения
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gallery-item">
                <div class="gallery__item-inner">
                  <div class="gallery__item-content">
                    <div class="gallery-icon  gallery-icon--upload">
                      <div class="icon" ><i class="fas fa-stopwatch"></i></div>
                      <div class="gallery-icon__text ">
                        Загрузить изображения
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gallery-item">
                <div class="gallery__item-inner">
                  <div class="gallery__item-content">
                    <div class="gallery-icon  gallery-icon--upload">
                      <div class="icon" ><i class="fas fa-swatchbook"></i></div>
                      <div class="gallery-icon__text ">
                        Загрузить изображения
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gallery-item">
                <div class="gallery__item-inner">
                  <div class="gallery__item-content">
                    <div class="gallery-icon  gallery-icon--upload ">
                      <div class="icon" ><i class="fas fa-bell"></i></div>
                      <div class="gallery-icon__text ">
                        Загрузить изображения
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detailed-layout__other">
          <div class="a-card a-card--compact">
            <div class="rowable rowable--desktop-hd">
              <div class="rowable__item">
                <div class="form-area">
                  <div class="form-area__title">
                    Название
                  </div>
                  <div class="form-area__content">
                    <input type="text"/>
                  </div>
                </div>
              </div>
              <div class="rowable__item">
                <div class="rowable rowable--tablet">
                  <div class="rowable__item rowable__item--three-fifths">
                    <div class="form-area__title">Артикул</div>
                    <div class="form-area__content">
                      <input type="text"/>
                    </div>
                  </div>
                  <div class="rowable__item rowable__item--two-fifths">
                    <div class="form-area">
                      <div class="form-area__title">Вес, кг</div>
                      <div class="form-area__content">
                        <input type="text"/>
                        <span class="product-delivery-checkbox" ><input type="checkbox"/> товар требует доставки или самовывоза</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-area">
              <div class="form-area__title">
                Описание
              </div>
            </div>
            <div class="fieldsets-batch">
              <textarea  id="text-area" placeholder="Чем примечателен этот товар? Расскажите о его особенностях и дополните описание изображениями, отзывами и видео-роликами, показывающими его в действии, чтобы помочь новым клиентам узнать товар как можно лучше." ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

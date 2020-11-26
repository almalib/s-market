import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-cnt-market-product-adding-attributes',
  styleUrl: 's-cnt-market-product-adding-attributes.css',
  shadow: false,
  scoped: true
})
export class SCntMarketProductAddingAttributes implements ComponentInterface {

  render() {
    return (
      <div class="detailed-layout__main">
        <div class="a-card a-card--compact">
          <div class="attribute">
            <div class="attribute-header">
              <div class="attribute-title">Общий</div>
              <div class="attribute-control">Управление атрибутами</div>
            </div>
            <div class="attribute-content">
              <div class="attribute-content-title">
                <div class="left">Атрибут</div>
                <div class="right">Значение</div>
              </div>
              <div class="uniq-code">
                <div class="left">
                  <div class="code-title">Уникальный код</div>
                </div>
                <div class="right"><div class="code-input"><input type="text"/></div></div>
              </div>
              <div class="uniq-code">
                <div class="left">
                  <div class="code-title">Бренд</div>
                </div>
                <div class="right"><div class="code-input"><input type="text"/></div></div>
              </div>
            </div>
            <div class="attribute-info">
              <div class="attribute-info-text">
                Атрибуты с пустыми значениями не будут показываться на витрине.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

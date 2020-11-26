import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-cnt-market-text-redactor-box',
  styleUrl: 's-cnt-market-text-redactor-box.css',
  shadow: false,
  scoped: true
})
export class SCntMarketTextRedactorBox implements ComponentInterface {
  /**
   * данные компонента
   */
  @Prop() textRedactor: any;

  render() {
    return (
      <div class="text-redactor-box-wrap">
        <ul class="text-redactor-box-instruments">
          <InstrumentIconFunctionalComponent
          arr={this.textRedactor}
          ></InstrumentIconFunctionalComponent>
        </ul>
        <div class="text-redactor-box">
          <textarea/>
        </div>
      </div>
    );
  }

}

/*
* компонентная функция для вывода элементов
 */
const InstrumentIconFunctionalComponent = (props) => {
  return props.arr.map((item) => {
    return (
      <li class="text-redactor-box-instrument">
        <div class="text-redactor-instrument-icon">
          <i class={item.icon}></i>
        </div>
      </li>
    );
  })
}

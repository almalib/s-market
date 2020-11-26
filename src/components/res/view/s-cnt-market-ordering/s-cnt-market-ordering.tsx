import { Component, ComponentInterface, h } from "@stencil/core";
import {
  logo,
  ordering,
  orderingModals,
  orderingSidebar,
} from "../../../../utils/mock-c";

@Component({
  tag: "s-cnt-market-ordering",
  styleUrl: "s-cnt-market-ordering.css",
  shadow: false,
  scoped: true,
})
export class SCntMarketOrdering implements ComponentInterface {
  render() {
    return (
      <div class="ordering-new">
        <s-cnt-market-ordering-header
          logo={logo}
        ></s-cnt-market-ordering-header>
        <div class="ordering-container">
          <s-cnt-market-ordering-column
            orderingModals={orderingModals}
            ordering={ordering}
          ></s-cnt-market-ordering-column>
          <s-cnt-market-ordering-sidebar
            orderingModals={orderingModals}
            orderingSidebar={orderingSidebar}
          ></s-cnt-market-ordering-sidebar>
        </div>
      </div>
    );
  }
}

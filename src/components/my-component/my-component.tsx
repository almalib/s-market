import { Component, h } from "@stencil/core";
import {adminToolbarCategory} from "../../utils/mock-a";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {
    // return <group-a></group-a>;
    // return <group-b> </group-b>;

    // return <s-cnt-market-orders-wrapper></s-cnt-market-orders-wrapper>
    // return <s-cnt-market-ordering></s-cnt-market-ordering>
    // return <s-cnt-market-admin-toolbar-category payload={adminToolbarCategory}></s-cnt-market-admin-toolbar-category>
    // return <s-cnt-market-products-list-wrapper></s-cnt-market-products-list-wrapper>
    // return <s-cnt-market-ordering></s-cnt-market-ordering>

    return <s-cnt-market-admin-toolbar-category payload={adminToolbarCategory}></s-cnt-market-admin-toolbar-category>
    // return <s-cnt-market-products-list-wrapper></s-cnt-market-products-list-wrapper>

    // return <s-cnt-market-admin-toolbar-category payload={adminToolbarCategory}></s-cnt-market-admin-toolbar-category>
    // return <s-cnt-market-products-list-wrapper></s-cnt-market-products-list-wrapper>

    // return <s-cnt-market-orders-wrapper></s-cnt-market-orders-wrapper>;
  }
}

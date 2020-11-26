# s-cnt-market-cart-products



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute | Description         | Type                            | Default |
| ------------------------- | --------- | ------------------- | ------------------------------- | ------- |
| `MarketCartProductsState` | --        | Продукты из корзины | `MarketCartProductsInterface[]` | `[]`    |


## Events

| Event               | Description      | Type                |
| ------------------- | ---------------- | ------------------- |
| `clickOnByProducts` |                  | `CustomEvent<void>` |
| `closeBasket`       | /Закрыть корзину | `CustomEvent<void>` |


## Dependencies

### Used by

 - [s-cnt-market-basket](../s-cnt-market-basket)

### Depends on

- [s-cnt-market-products-slider](../../../../../../../../../../../../../group-a/res/view/s-cnt-market-shop/res/view/s-cnt-market-products-slider)

### Graph
```mermaid
graph TD;
  s-cnt-market-cart-products --> s-cnt-market-products-slider
  s-cnt-market-products-slider --> s-cnt-market-products-slider-card
  s-cnt-market-basket --> s-cnt-market-cart-products
  style s-cnt-market-cart-products fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

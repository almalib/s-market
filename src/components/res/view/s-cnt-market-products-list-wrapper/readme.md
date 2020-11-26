# s-cnt-market-products-list-wrapper



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-cnt-market-header](../../../group-b/res/view/s-cnt-market-header-wrapper/res/view/s-cnt-market-header)
- [s-cnt-market-product-adding](./res/view/s-cnt-market-product-adding)
- [s-cnt-market-footer](../../../group-a/res/view/s-cnt-market-footer)
- [s-cnt-market-back-to-top](../../../shared/s-cnt-market-back-to-top)

### Graph
```mermaid
graph TD;
  s-cnt-market-products-list-wrapper --> s-cnt-market-header
  s-cnt-market-products-list-wrapper --> s-cnt-market-product-adding
  s-cnt-market-products-list-wrapper --> s-cnt-market-footer
  s-cnt-market-products-list-wrapper --> s-cnt-market-back-to-top
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-login-and-registration-form --> s-cnt-market-remind-password
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  s-cnt-market-header-nav --> s-cnt-market-left-menu-catalog
  s-cnt-market-header-nav --> s-cnt-market-store-select-top
  s-cnt-market-header-nav --> s-cnt-market-account-menu
  s-cnt-market-header-nav --> s-cnt-market-basket
  s-cnt-market-basket --> s-cnt-market-cart-products
  s-cnt-market-cart-products --> s-cnt-market-products-slider
  s-cnt-market-products-slider --> s-cnt-market-products-slider-card
  s-cnt-market-product-adding --> s-cnt-market-product-adding-sidebar
  s-cnt-market-product-adding --> s-cnt-market-product-adding-main
  s-cnt-market-product-adding --> s-cnt-market-product-adding-attributes
  s-cnt-market-footer --> s-cnt-market-up-footer-form
  s-cnt-market-footer --> s-cnt-market-down-footer
  s-cnt-market-footer --> s-cnt-market-footer-info
  s-cnt-market-footer --> s-cnt-market-up-footer
  s-cnt-market-up-footer-form --> s-cnt-market-footer-modal-form
  s-cnt-market-footer-info --> s-cnt-market-footer-info-item
  s-cnt-market-up-footer --> s-cnt-market-footer-items
  style s-cnt-market-products-list-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

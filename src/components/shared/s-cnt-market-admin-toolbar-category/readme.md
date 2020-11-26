# s-cnt-market-admin-toolbar-category



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                            | Default     |
| --------- | --------- | ----------- | ------------------------------- | ----------- |
| `payload` | --        |             | `AdminToolbarCategoryInterface` | `undefined` |


## Dependencies

### Used by

 - [my-component](../../my-component)

### Depends on

- [s-cnt-market-toolbar-category-modal-preview-window](./res/view/s-cnt-market-toolbar-category-modal-preview-window)
- [s-cnt-market-admin-toolbar-head-btn](./res/view/s-cnt-market-admin-toolbar-head-btn)
- [s-cnt-market-toolbar-category-sidebar](./res/view/s-cnt-market-toolbar-category-sidebar)
- [s-cnt-market-toolbar-category-editor](./res/view/s-cnt-market-toolbar-category-editor)
- [s-cnt-market-toolbar-category-footer](./res/view/s-cnt-market-toolbar-category-footer)

### Graph
```mermaid
graph TD;
  s-cnt-market-admin-toolbar-category --> s-cnt-market-toolbar-category-modal-preview-window
  s-cnt-market-admin-toolbar-category --> s-cnt-market-admin-toolbar-head-btn
  s-cnt-market-admin-toolbar-category --> s-cnt-market-toolbar-category-sidebar
  s-cnt-market-admin-toolbar-category --> s-cnt-market-toolbar-category-editor
  s-cnt-market-admin-toolbar-category --> s-cnt-market-toolbar-category-footer
  s-cnt-market-toolbar-category-editor --> s-cnt-market-category-editor-home-page
  s-cnt-market-toolbar-category-editor --> s-cnt-market-toolbar-products-in-category
  s-cnt-market-toolbar-category-editor --> s-cnt-market-toolbar-add-root-category
  s-cnt-market-category-editor-home-page --> s-cnt-market-text-redactor-box
  s-cnt-market-toolbar-products-in-category --> s-cnt-market-toolbar-products-category-list
  s-cnt-market-toolbar-products-in-category --> s-cnt-market-toolbar-products-in-category-footer
  s-cnt-market-toolbar-add-root-category --> s-cnt-market-category-editor-home-page
  my-component --> s-cnt-market-admin-toolbar-category
  style s-cnt-market-admin-toolbar-category fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

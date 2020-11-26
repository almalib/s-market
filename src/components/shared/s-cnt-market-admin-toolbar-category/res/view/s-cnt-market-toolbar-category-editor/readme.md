# s-cnt-market-toolbar-category-editor



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                 | Type                             | Default     |
| ------------------- | --------------------- | --------------------------- | -------------------------------- | ----------- |
| `selectedTabsState` | `selected-tabs-state` | Стейт для переключения tabs | `any`                            | `undefined` |
| `toolbarEditor`     | --                    |                             | `ToolbarCategoryEditorInterface` | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `openForm`    |             | `CustomEvent<any>` |
| `selectedTab` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-cnt-market-admin-toolbar-category](../../..)

### Depends on

- [s-cnt-market-category-editor-home-page](./res/view/s-cnt-market-category-editor-home-page)
- [s-cnt-market-toolbar-products-in-category](./res/view/s-cnt-market-toolbar-products-in-category)
- [s-cnt-market-toolbar-add-root-category](./res/view/s-cnt-market-toolbar-add-root-category)

### Graph
```mermaid
graph TD;
  s-cnt-market-toolbar-category-editor --> s-cnt-market-category-editor-home-page
  s-cnt-market-toolbar-category-editor --> s-cnt-market-toolbar-products-in-category
  s-cnt-market-toolbar-category-editor --> s-cnt-market-toolbar-add-root-category
  s-cnt-market-category-editor-home-page --> s-cnt-market-text-redactor-box
  s-cnt-market-toolbar-products-in-category --> s-cnt-market-toolbar-products-category-list
  s-cnt-market-toolbar-products-in-category --> s-cnt-market-toolbar-products-in-category-footer
  s-cnt-market-toolbar-add-root-category --> s-cnt-market-category-editor-home-page
  s-cnt-market-admin-toolbar-category --> s-cnt-market-toolbar-category-editor
  style s-cnt-market-toolbar-category-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

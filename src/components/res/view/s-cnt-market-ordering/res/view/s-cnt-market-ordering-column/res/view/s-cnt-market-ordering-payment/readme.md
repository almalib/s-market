# s-cnt-market-ordering-payment



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                   | Description                          | Type                             | Default     |
| ----------------------- | --------------------------- | ------------------------------------ | -------------------------------- | ----------- |
| `addOrRemoveClassState` | `add-or-remove-class-state` | Стейт для переключения класса active | `boolean`                        | `undefined` |
| `orderingModals`        | --                          | Данные для модалки                   | `MarketOrderingModalsInterface`  | `undefined` |
| `payment`               | --                          | Данные для панели метод получения    | `MarketOrderingPaymentInterface` | `undefined` |


## Events

| Event               | Description              | Type               |
| ------------------- | ------------------------ | ------------------ |
| `addClassActive`    | Добавление класса active | `CustomEvent<any>` |
| `removeClassActive` | Удаление класса active   | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-cnt-market-ordering-column](../../..)

### Depends on

- [s-cnt-market-ordering-payment-online](./res/view/s-cnt-market-ordering-payment-online)
- [s-cnt-market-ordering-payment-transfer](./res/view/s-cnt-market-ordering-payment-transfer)

### Graph
```mermaid
graph TD;
  s-cnt-market-ordering-payment --> s-cnt-market-ordering-payment-online
  s-cnt-market-ordering-payment --> s-cnt-market-ordering-payment-transfer
  s-cnt-market-ordering-payment-online --> s-cnt-market-ordering-modal-window
  s-cnt-market-ordering-column --> s-cnt-market-ordering-payment
  style s-cnt-market-ordering-payment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

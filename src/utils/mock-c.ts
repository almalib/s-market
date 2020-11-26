export const logo = "http://via.placeholder.com/200x50?img=Img";

export const ordering = {
  method: {
    id: 1,
    title: "Способ получения",
    info: "Самовывоз из METRO",
    address: "Москва, Ленинградское шоссе, 71Г",
    link: "Изменить",
    btn: "Продолжить",
    content: {
      img: "https://via.placeholder.com/50x50?img=Img",
      shop: "METRO",
      desc:
        "Чтобы изменить магазин, [выберите его]() на главной странице и проверьте наличие всех товаров в корзине",
    },
  },
  contacts: {
    id: 2,
    title: "Контакты",
    text: "Добавьте свои контакты",
    email: "jamwox@bk.ru",
    phone: "8 (800) 200 06 00",
    link: "Изменить",
    btn: "Продолжить",
  },
  replacements: {
    id: 3,
    title: "Замены",
    text: "Выберите способ осуществления замен",
    info: "Не согласовывать",
    link: "Изменить",
    btn: "Продолжить",
    content: {
      desc:
        "Мы берем товары прямо с полок магазина. В отдельных случаях товар может закончиться или не соответствовать нашим критериям качества. В таком случае сборщик вашего заказа будет действовать согласно этим настройкам.",
    },
    panels: [
      {
        id: 1,
        desc: "Позвонить мне. Если не удастся, выбирает сборщик",
      },
      {
        id: 2,
        desc: "Позвонить мне. Если не удастся, убрать товар",
      },
      {
        id: 3,
        desc: "Не звонить. Замену выбирает сборщик",
      },
      {
        id: 4,
        desc: "Не звонить. Убрать отсутствующий товар",
      },
    ],
  },
  payment: {
    id: 4,
    title: "Оплата",
    info: "•••• 1780",
    link: "Изменить",
    btn: "Продолжить",
    methodBtn: [
      {
        id: 1,
        text: "Картой онлайн",
      },
      {
        id: 2,
        text: "Переводом",
      },
    ],
    online: {
      desc:
        "После оформления заказа мы спишем и вернем один рубль для проверки карты. Полная стоимость будет списана после сборки заказа в магазине.",
      securityTitle: "Безопасное соединение",
      securityDesc:
        "Мы не храним и не обрабатываем данные банковских карт. Все операции проводятся в процессинговом цетре CloudPayments, сертифицированном по международному стандарту безопасности платежных карт PCI DSS.",
    },
    transfer: {
      desc:
        "Сборка заказа осуществляется только после полной предоплаты и поступления денежных средств на наш счет",
    },
  },
  timetable: {
    id: 5,
    title: "Время",
    text: "Выберите время получения",
    info: "METRO ",
    link: "Изменить",
    btn: "Продолжить",
    content: {
      img: "https://via.placeholder.com/50x50?img=Img",
      shop: "METRO",
    },
    date: [
      {
        id: 1,
        weekDay: "Вчера",
        monthDay: "27 августа",
      },
      {
        id: 2,
        weekDay: "Сегодня",
        monthDay: "28 августа",
      },
      {
        id: 3,
        weekDay: "Завтра",
        monthDay: "29 августа",
      },
      {
        id: 4,
        weekDay: "Вс",
        monthDay: "30 августа",
      },
      {
        id: 5,
        weekDay: "Пн",
        monthDay: "31 августа",
      },
      {
        id: 6,
        weekDay: "Вт",
        monthDay: "1 сентября",
      },
      {
        id: 7,
        weekDay: "Ср",
        monthDay: "2 сентября",
      },
    ],
    time: [
      {
        id: 1,
        hours: "9:00-11:00",
        status: "бесплатно",
      },
      {
        id: 2,
        hours: "10:00-12:00",
        status: "бесплатно",
      },
      {
        id: 3,
        hours: "11:00-13:00",
        status: "бесплатно",
      },
      {
        id: 4,
        hours: "12:00-14:00",
        status: "бесплатно",
      },
      {
        id: 5,
        hours: "13:00-15:00",
        status: "бесплатно",
      },
      {
        id: 6,
        hours: "14:00-16:00",
        status: "бесплатно",
      },
      {
        id: 7,
        hours: "15:00-17:00",
        status: "бесплатно",
      },
      {
        id: 8,
        hours: "16:00-18:00",
        status: "бесплатно",
      },
      {
        id: 9,
        hours: "17:00-19:00",
        status: "бесплатно",
      },
      {
        id: 10,
        hours: "18:00-20:00",
        status: "бесплатно",
      },
      {
        id: 11,
        hours: "19:00-21:00",
        status: "бесплатно",
      },
      {
        id: 12,
        hours: "20:00-22:00",
        status: "бесплатно",
      },
    ],
  },
  final: {
    text: "Готовы сделать заказ?",
    btn: "Оформить заказ",
  },
};

export const orderingSidebar = {
  header: {
    logo:
      "https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602",
    shopName: "METRO",
  },
  summary: {
    title: "Товары",
    price: "1088,00",
    currency: "₽",
    amount: "2 позиции",
    weight: "4,2 кг",
    delivery: "Сборка и доставка",
    status: "бесплатно",
  },
  deliveryInfo: [
    {
      title: "Сборка",
      price: "Беслптано",
    },
    {
      title: "Доставка",
      price: "Беслптано",
    },
    {
      title: "Пакеты",
      price: "Беслптано",
    },
  ],
  promo: "Применить промокод",
  promoCards: [
    {
      img:
        "https://sbermarket.ru/spree/loyalty_cards_logos/110659/default/mnogo_ru.jpg?1541599946",
      title: "Много.ру",
      link: "Добавить карту",
    },
    {
      img:
        "https://sbermarket.ru/spree/loyalty_cards_logos/110660/default/aeroflot-img.png?1541599946",
      title: "Аэрофлот Бонус",
      link: "Добавить карту",
    },
  ],
  totalPrice: {
    title: "Итого",
    price: "1088,00",
    currency: "₽",
    btn: "Оформить заказ",
  },
};

export const orderingModals = {
  promoCode: {
    title: "Введите промокод",
    placeholder: "Промокод",
    error: "Промокод не может быть пустым",
    cancel: "Отмена",
    add: "Добавить код",
  },
  promoCard: {
    title: "Добавить новую карту",
    placeholder: "Номер карты",
    error: "Укажите номер вашей бонусной карты",
    cancel: "Отменить",
    add: "Сохранить",
  },
};

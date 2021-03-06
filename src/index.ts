export * from "./components";

export interface MarketCartProductsInterface {
  id: number;
  name: string;
  weight: number;
  weightValue: string;
  img: string;
  price: number;
  sales: number;
  count: number;
}

export interface MarketAppInterface {
  id: number;
  image: string;
  title: string;
  googlePlayButton: string;
  appStoreButton: string;
}

/*
 * Интерфейс для массива меню и лого
 * */

export interface navMenuItemInterface {
  id: string;
  name: string;
}

export interface NavMenuItemInterface {
  logo: string;
  navMenuItem: navMenuItemInterface[];
}

/**
 * Элементы компонента s-cnt-market-app
 */
export interface MarketAppInterface {
  id: number;
  image: string;
  title: string;
  googlePlayButton: string;
  appStoreButton: string;
}

export interface MarketCourierInterface {
  id: number;
  image: string;
  number: string;
  text: string;
}

export interface MarketDeliveryInterface {
  img: string;
  title: string;
  btn: string;
  cities: MarketCitiesInterface[];
}

export interface MarketCitiesInterface {
  name: string;
}

export interface MarketOfferInterface {
  id: number;
  icon: string;
  text: string;
}

export interface MarketSelectionInterface {
  id: number;
  image: string;
  text?: string;
  title: string;
}

export interface MarketSpecialistInterface {
  id: number;
  image: string;
  number: string;
  text: string;
}

export interface MarketStatisticsInterface {
  id: number;
  text: string;
}

export interface MarketFooterMenuInterface {
  title: string;
  items: string[];
}

export interface MarketDownFooterInterface {
  copyright: string;
  company: string;
  download: string;
}

export interface footerContactColumnInterface {
  number: string;
  time: string;
  input: string;
  text: string;
}

export interface footerMenuInterface {
  title: string;
  menuItems: {
    title: string;
    link: string;
  };
}

export interface footerCopyrightRowInterface {
  copyright: string;
  nameCompany: string;
  download: string;
}

export interface footerItemsInterface {
  title: string;
  link: string;
}

export interface footerLinksPoliticsInterface {
  title: string;
  link: string;
}

export interface footerDataInterface {
  logoFooter: any;
  footerMenu: any;
  footerContactColumn: any;
  footerCopyrightRow: any;
  footerLinksPolitics: any;
}

export interface MarketProductListInterface {
  id: number;
  header: MarketProductListHeaderInterface;
  card: MarketProductListCardInterface[];
}

export interface MarketProductListCardInterface {
  currency: string;
  desc: string;
  id: number;
  img: string;
  multipack?: MarketMultipackInterface;
  price?: string;
  weight: string;
  disDate?: string;
  disPrice?: string;
  discount?: string;
  oldPrice?: string;
  productData?: MarketProductDataItemsInterface;
}

export interface MarketProductListHeaderInterface {
  title: string;
  allProducts: string;
}

export interface MarketMultipackInterface {
  amount: string;
  weight: string;
}

export interface MarketProductsSliderCardsInterface {
  id: number;
  img: string;
  price?: string;
  oldPrice?: string;
  disPrice?: string;
  currency: string;
  desc: string;
  weight: string;
  productData?: MarketProductDataItemsInterface;
}

export interface MarketPromoSliderInterface {
  id: number;
  title: string;
  description: string;
  img: string;
  link?: string;
  bgImage: string;
  bgColor: string;
  color: string;
}

export interface MarketRecentlyWatchedProductsInterface {
  id: number;
  img: string;
  price?: string;
  currency: string;
  weight: string;
  oldPrice?: string;
  disPrice?: string;
  productData?: MarketProductDataItemsInterface;
}

export interface MarketProductModalInterface {
  productBlock: MarketProductBlockInterface;
  recommendedBlock: MarketRecommendedBlockInterface;
  specificationBlock: MarketSpecificationBlockInterface;
}

export interface MarketProductBlockInterface {
  button: string;
  likeIcon: string;
}

export interface MarketRecommendedBlockInterface {
  recommendedTitle: string;
}

export interface MarketSpecificationBlockInterface {
  descriptionTitle: string;
  nutritionalValueTitle: string;
  nutritionalOnTheValueTitle: string;
  compositionTitle: string;
  generalInformationTitle: string;
  hideInformation: string;
}

export interface MarketProductDataInterface {
  productData: MarketProductDataItemsInterface;
}

export interface MarketProductDataItemsInterface {
  getProduct: MarketGetProductInterface;
  getRecommended: MarketGetRecommendedInterface;
  getSpecification: MarketGetSpecificationInterface;
}

export interface MarketGetProductInterface {
  brand: string;
  products: string;
  category: string;
  defaultImgId: number;
  image?: MarketProductImgInterface[];
  name: string;
  weight: string;
  price: string;
  currency: string;
  presence: number;
}

export interface MarketProductImgInterface {
  id: number;
  img: string;
}

export interface MarketProductPageInterface {
  id: number;
  categoryName: string;
  slogan: string;
  allBrandBtn: string;
  productsPageFilter: MarketProductsPageFilterInterface;
}

export interface MarketProductsPageFilterInterface {
  id: number;
  sortTitle: string;
  sortFirstBtn: string;
  sortSecondBtn: string;
  sortDescIcon: string;
  sortDescText: string;
  brandTitle: string;
  brandAllBtn: string;
}

export interface MarketGetRecommendedInterface {
  featuredProduct: MarketFeaturedProductInterface[];
}

export interface MarketGetSpecificationInterface {
  description: string;
  composition: string;
  nutritionalValue: MarketGetSpecificationInfoArrInterface[];
  BrandNameTitle: string;
  BrandName: string;
  generalInformation: MarketGetSpecificationInfoArrInterface[];
}

export interface MarketGetSpecificationInfoArrInterface {
  id: number;
  infoTitle: string;
  info: string;
}

export interface MarketFeaturedProductInterface {
  id: number;
  image: string;
  price: string;
  productName: string;
  weight: string;
}

export interface MarketChoiceInterface {
  id: number;
  image: string;
  number: string;
  text: string;
}

/**
 * group-b
 */

/**
 * Интерфейс для блока навигации в хедере
 * */

export interface MarketNavBarInterface {
  catalogBtn: string;
  backgroundImageFullMenu: string;
  placeholder: string;
  iconUser: string;
  iconWishList: string;
  iconOrders: string;
  iconCart: string;
  titleOrders: string;
  titleCart: string;
}

/**
 * данные для подкатегорий из левого каталога
 * */
export interface MarketSubcategoriesInterface {
  id: string;
  title: string;
  img: string;
}

[];

/**
 * данные для магазинов из левого каталога
 * */
export interface MarketLeftMenuCatalogInterface {
  id: number;
  title: string;
  img: string;
  sales: string;
  subcategories: MarketSubcategoriesInterface;
}

export interface MarketSelectShopsInterface {
  id: number;
  title: string;
  description: string;
  time: string;
  img: string;
  backgroundColor: string;
  city: string;
}

/**
 * данные для подкатегорий из левого каталога
 * */
export interface MarketSubcategoriesInterface {
  id: string;
  title: string;
  img: string;
}

[];

/**
 * данные для магазинов из левого каталога
 * */
export interface MarketLeftMenuCatalogInterface {
  id: number;
  title: string;
  img: string;
  sales: string;
  subcategories: MarketSubcategoriesInterface;
}

export interface MarketSelectShopsInterface {
  id: number;
  title: string;
  description: string;
  time: string;
  img: string;
  backgroundColor: string;
  city: string;
}

/*
 * Интерфейс для раскрития объекта topBar
 * */

export interface MarketTopBarInterface {
  id: string;
  choiceDelivery: string;
  choicePickUp: string;
  choiceAddress: string;
  choiceAddressIcon: string;
  timeOfDeliveryText: string;
  timeOfDelivery: string;
  phoneNumber: string;
  workingHours: string;
  loginAndRegistration: any;
  modalWindow: MarketTopBarModalInterface;
}

export interface MarketTopBarModalInterface {
  id: number;
  modalWindowTitle: string;
  offerToEnter: string;
  offerToEnterLink: string;
  choiceDelivery: string;
  choicePickUp: string;
  Delivery: MarketTopBarModalDeliveryInterface;
  PickUp: MarketTopBarModalPickUpInterface;
}

/*
 * Интерфейс для раскрития объекта topBar
 * */
export interface MarketTopBarModalDeliveryInterface {
  id: number;
  enterAddressText: string;
  searchIcon: string;
  btnText: string;
  cityForSelectedDelivery: any;
}

/*
 * Интерфейс для раскрития объекта topBar
 * */
export interface MarketTopBarModalPickUpInterface {
  id: number;
  locationIcon: string;
  city: string;
  selectIcon: string;
  defaultCity: number;
  cityForSelected: MarketCityOfPickUpInterface[];
  logoImg: string;
  storeName: string;
  numberOfStores: string;
  selectedStoreIcon: string;
  storeWithdrawalIcon: string;
  updateSelectedAddress: string;
}

export interface MarketCityOfPickUpInterface {
  id: number;
  city: string;
  storeAddress: MarketAddressCityOfPickUpInterface[];
}

export interface MarketAddressCityOfPickUpInterface {
  id: number;
  storeAddress: string;
  storeWorkTime: string;
  btnText: string;
}

/*
 * Интерфейс для раскрития объекта topBar
 * */
export interface MarketTopBarModalDeliveryInterface {
  id: number;
  enterAddressText: string;
  searchIcon: string;
  btnText: string;
  cityForSelectedDelivery: any;
}

/*
 * Интерфейс для раскрития объекта topBar
 * */
export interface MarketTopBarModalPickUpInterface {
  id: number;
  locationIcon: string;
  city: string;
  selectIcon: string;
  defaultCity: number;
  cityForSelected: MarketCityOfPickUpInterface[];
  logoImg: string;
  storeName: string;
  numberOfStores: string;
  selectedStoreIcon: string;
  storeWithdrawalIcon: string;
  updateSelectedAddress: string;
}

export interface MarketCityOfPickUpInterface {
  id: number;
  city: string;
  storeAddress: MarketAddressCityOfPickUpInterface[];
}

export interface MarketAddressCityOfPickUpInterface {
  id: number;
  storeAddress: string;
  storeWorkTime: string;
  btnText: string;
}

export interface MarketLoginAndRegistrationInterface {
  id: number;
  closeIcon: string;
  backIcon: string;
  loginBtnText: string;
  regBtnText: string;
  users: MarketUsersArrInterface[];
  login: MarketLoginInterface;
  remindPass: any;
  reg: MarketRegistrationInterface;
}

export interface MarketRemindPasswordInterface {
  id: number;
  remindTitle: string;
  remindText: string;
  logIn: string;
  afterRemindTitle: string;
  afterRemindText: string;
  afterLogIn: string;
}

export interface MarketUsersArrInterface {
  id: number;
  name: string;
  mail: string;
  password: string;
  forBusiness: boolean;
  mailing: boolean;
}

export interface MarketLoginInterface {
  id: number;
  rememberMe: string;
  logIn: string;
  remindPass: string;
  bankIcon: any;
  logInToBank: string;
  orLogInSocial: string;
  socialIcons: MarketSocialIconsInterface[];
}

export interface MarketSocialIconsInterface {
  id: number;
  social: string;
}

export interface MarketRegistrationInterface {
  id: number;
  checkForBis: string;
  checkForAdvertisingText: string;
  checkForAdvertisingLink: string;
  regBtn: string;
  agreementText: string;
  agreementLink: string;
}

//ordering

export interface MarketOrderingInterface {
  method: MarketMethodInterface;
  contacts: MarketOrderingContactsInterface;
  replacements: MarketOrderingReplacementsInterface;
  payment: MarketOrderingPaymentInterface;
  timetable: MarketOrderingTimetableInterface;
  final: MarketOrderingFinalInterface;
}

export interface MarketOrderingFinalInterface {
  text: string;
  btn: string;
}

export interface MarketOrderingTimetableInterface {
  id: number;
  title: string;
  text: string;
  info: string;
  link: string;
  btn: string;
  content: MarketOrderingTimetableContentInterface;
  date: MarketOrderingTimetableDateInterface[];
  time: MarketOrderingTimetableTimeInterface[];
}

export interface MarketOrderingTimetableTimeInterface {
  id: number;
  hours: string;
  status: string;
}

export interface MarketOrderingTimetableDateInterface {
  id: number;
  weekDay: string;
  monthDay: string;
}

export interface MarketOrderingTimetableContentInterface {
  img: string;
  shop: string;
}

export interface MarketOrderingPaymentInterface {
  id: number;
  title: string;
  info: string;
  link: string;
  btn: string;
  methodBtn: MarketOrderingMethodBtnInterface[];
  online: MarketOrderingPaymentOnlineInterface;
  transfer: MarketOrderingPaymentTransferInterface;
}

export interface MarketOrderingPaymentTransferInterface {
  desc: string;
}

export interface MarketOrderingPaymentOnlineInterface {
  desc: string;
  securityTitle: string;
  securityDesc: string;
}

export interface MarketOrderingMethodBtnInterface {
  id: number;
  text: string;
}

export interface MarketMethodInterface {
  id: number;
  title: string;
  info: string;
  address: string;
  link: string;
  btn: string;
  content: MarketOrderingContentInterface;
}

export interface MarketOrderingContentInterface {
  img?: string;
  shop?: string;
  desc: string;
}

export interface MarketOrderingContactsInterface {
  id: number;
  title: string;
  text: string;
  email: string;
  phone: string;
  link: string;
  btn: string;
}

export interface MarketOrderingReplacementsInterface {
  id: number;
  title: string;
  text: string;
  info: string;
  link: string;
  btn: string;
  content: MarketOrderingContentInterface;
  panels: MarketOrderingPanelsInterface[];
}

export interface MarketOrderingPanelsInterface {
  id: number;
  desc: string;
}

/**
 * Мок админки части категорий
 */

export interface AdminToolbarCategoryInterface {
  wrapTitle: string;
  toolbarCategoryHead: AdminToolbarHeadBtnInterface;
  toolbarCategorySide: ToolbarCategorySidebarInterface;
  toolbarEditor: ToolbarCategoryEditorInterface;
  toolbarFooter: ToolbarCategoryFooterInterface;
  productsPreviewModal: ToolbarCategoryModalPreviewWindowInterface;
}

export interface AdminToolbarHeadBtnInterface {
  toolbarHeadBtn: AdminToolbarHeadBtnDataInterface[];
}

export interface AdminToolbarHeadBtnDataInterface {
  id: number;
  component?: string;
  btnText: string;
  btnIcon?: string;
  btnDisabled: boolean;
  btnClass: string;
}

export interface ToolbarCategoryEditorInterface {
  title: string;
  preview: string;
  mainTab: string;
  productsTab: string;
  editorPage: CategoryEditorHomePage;
  categoryProducts: ToolbarProductsInCategoryInterface;
  addRootCategory: ToolbarAddRootCategoryInterface;
}

export interface CategoryEditorHomePage {
  component?: string;
  title: string;
  editorBox: EditorBoxInterface[];
}

export interface EditorBoxInterface {
  id: number;
  icon: string;
}

export interface ToolbarAddRootCategoryInterface {
  component?: string;
  newNameTitle: string;
  newStatusTitle: string;
  statusSwitcherIconDisabled: string;
  statusSwitcherIconIncluded: string;
  statusSwitcherChoiceIncluded: string;
  statusSwitcherChoiceDisabled: string;
  statusSwitcherDisabled: string;
  statusSwitcherIncluded: string;
  newImgTitle: string;
  newImgLoadIcon: string;
  imgLoadTitle: string;
  editorPage: CategoryEditorHomePage;
}

export interface ToolbarProductsInCategoryInterface {
  component?: string;
  snapBtnText: string;
  deleteBtnText: string;
  addBtnText: string;
  categoryProductsList: ProductsCategoryListInterface;
  productsListFooter: ProductsInCategoryFooterInterface;
}

export interface ProductsCategoryListInterface {
  vendorCodeTitle: string;
  productNameTitle: string;
  productList: ProductListInterface[];
}

export interface ProductListInterface {
  id: number;
  vendorCode: string;
  productName: string;
  deleteIcon: string;
}

export interface ProductsInCategoryFooterInterface {
  pagingBarText: string;
  btnLeftIcon: string;
  btnRightIcon: string;
  productQuantityTitle: string;
  productQuantityOnPage: string;
  productQuantity: string;
  quantityProductTitle: string;
  quantityProduct: QuantityProductInterface[];
}

export interface QuantityProductInterface {
  id: number;
  quantity: number;
}

export interface ToolbarCategoryFooterInterface {
  shopIdTitle: string;
  shopId: string;
  mobileAppLink: string;
  copyright: string;
  footerMenu: FooterMenuInterface[];
  langSwitcherTitle: string;
  languageList: LanguageListInterface[];
}

export interface FooterMenuInterface {
  id: number;
  menuItem: string;
}

export interface LanguageListInterface {
  id: number;
  language: string;
}

export interface ToolbarCategoryModalPreviewWindowInterface {
  productsSortTitle: string;
  productsSortIcon: string;
  sortSwitch: ModalPreviewSortSwitchInterface[];
  categoryProductPreview: ModalCategoryProductPreviewInterface[];
}

export interface ModalPreviewSortSwitchInterface {
  id: number;
  switchItem: string;
}

export interface ModalCategoryProductPreviewInterface {
  id: number;
  img: string;
  name: string;
  price: string;
}

export interface ToolbarCategorySidebarInterface {
  sidebarTitle: string;
  sidebarSubtitle: string;
  sidebarViewStart?: string;
  sidebarViewCenter: string;
  sidebarViewEnd: string;
  sidebarCategoryItems: SidebarCategoryItemsInterface[];
}

export interface SidebarCategoryItemsInterface {
  id: number;
  category: string;
  quantity: number;
}

export interface MarketOrderingSidebarInterface {
  header: MarketOrderingSidebarHeaderInterface;
  summary: MarketOrderingSidebarSummaryInterface;
  deliveryInfo: MarketOrderingSidebarDeliveryInterface;
  promo: string;
  promoCards: MarketOrderingSidebarPromoCardsInterface[];
  totalPrice: MarketOrderingSidebarTotalPriceInterface;
}

export interface MarketOrderingSidebarHeaderInterface {
  logo: string;
  shopName: string;
}

export interface MarketOrderingSidebarSummaryInterface {
  title: string;
  price: string;
  currency: string;
  amount: string;
  weight: string;
  delivery: string;
  status: string;
}

export interface MarketOrderingSidebarDeliveryInterface {
  title: string;
  price: string;
}

export interface MarketOrderingSidebarPromoCardsInterface {
  img: string;
  title: string;
  link: string;
}

export interface MarketOrderingSidebarTotalPriceInterface {
  title: string;
  price: string;
  currency: string;
  btn: string;
}

export interface MarketOrderingModalsInterface {
  promoCode: MarketOrderingModalsPromoCodeInterface;
  promoCard: MarketOrderingModalsPromoCardInterface;
}

export interface MarketOrderingModalsPromoCodeInterface {
  title: string;
  placeholder: string;
  error: string;
  cancel: string;
  add: string;
}

export interface MarketOrderingModalsPromoCardInterface {
  title: string;
  placeholder: string;
  error: string;
  cancel: string;
  add: string;
}

export interface MarketProductsListAdminInterface {
  id: number;
  img: string;
  type: string;
  title: string;
  article: number;
  inStock: boolean;
  price: number;
  parameters: number;
  actually: boolean;
}

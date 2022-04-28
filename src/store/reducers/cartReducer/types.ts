import { IProductCart, IDeliveryCountryCart, IDeliveryAdressCart } from '../../../types/cart';

export interface IValidateDataDelivery {
   phone: string,
   email: string,
   country: string,
   city: string,
   street: string,
   house: string,
   apartment: string,
   postcode: string,
   privacy: boolean,
   shopCountry: string,
   shopAdress: string,
}

export interface IValidateDataPayment {
   email: string,
   card: string,
   cardDate: string,
   cardCVV: string,
}

//! типы для стейта
export interface IState {
   productsCart: IProductCart[],
   deliveryAdress: IDeliveryAdressCart[],
   deliveryCountries: IDeliveryCountryCart[],
   deliveryMethod: string,
   paymentMethod: string,
   validateDelivery: IValidateDataDelivery,
   validatePayment: IValidateDataPayment,
   isLoading: boolean,
   isError: string,
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum cartActionTypes {
   ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
   DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART",
   CHANGE_COUNT_PRODUCT_CART = "CHANGE_COUNT_PRODUCT_CART",
   CHANGE_DELIVERY_DATA_CART = "CHANGE_DELIVERY_DATA_CART",
   CHANGE_PAYMENT_DATA_CART = "CHANGE_PAYMENT_DATA_CART",
   CLEAR_VALIDATE_DATA_CART = "CLEAR_VALIDATE_DATA_CART",
   CLEAR_ALL_CART = "CLEAR_ALL_CART",
   CHANGE_DELIVERY_METHOD_CART = "CHANGE_DELIVERY_METHOD_CART",
   CHANGE_PAYMENT_METHOD_CART = "CHANGE_PAYMENT_METHOD_CART",
   CHANGE_DELIVERY_SHOP_COUNTRY_CART = "CHANGE_DELIVERY_SHOP_COUNTRY_CART",
   CHANGE_DELIVERY_SHOP_ADRESS_CART = "CHANGE_DELIVERY_SHOP_ADRESS_CART",
   REQUEST_DELIVERY_COUNTRIES_CART = "REQUEST_DELIVERY_COUNTRIES_CART",
   REQUEST_DELIVERY_ADRESS_CART = "REQUEST_DELIVERY_ADRESS_CART",
   SET_ERROR_CART = "SET_ERROR_CART",
}

//! типизация payload 
interface IAddCartPayload {
   product: IProductCart,
}

interface IDeleteCartPayload {
   id: string,
}

interface IChangeCountCartPayload {
   product: IProductCart,
}

interface IChangeDeliveryDataPayload {
   deliveryData: IValidateDataDelivery,
}

interface IChangePaymentDataPayload {
   paymentData: IValidateDataPayment,
}

interface IChangeDeliveryMethodPayload {
   method: string,
}

interface IChangePaymentMethodPayload {
   method: string,
}

interface IChangeDeliveryShopCountryPayload {
   country: string,
}

interface IChangeDeliveryShopAdressPayload {
   adress: string,
}

interface IRequestDeliveryCountriesPayload {
   countries: IDeliveryCountryCart[],
}

interface IRequestDeliveryAdressPayload {
   adresses: IDeliveryAdressCart[],
}

interface ISetErrorPayload {
   message: string,
}

//! типы для экшенов
interface IAddProductAction {
   type: cartActionTypes.ADD_PRODUCT_CART,
   payload: IAddCartPayload
}

interface IDeleteProductAction {
   type: cartActionTypes.DELETE_PRODUCT_CART,
   payload: IDeleteCartPayload
}

interface IChangeCountProductAction {
   type: cartActionTypes.CHANGE_COUNT_PRODUCT_CART,
   payload: IChangeCountCartPayload
}

interface IChangeDeliveryDataAction {
   type: cartActionTypes.CHANGE_DELIVERY_DATA_CART,
   payload: IChangeDeliveryDataPayload
}

interface IChangePaymentDataAction {
   type: cartActionTypes.CHANGE_PAYMENT_DATA_CART,
   payload: IChangePaymentDataPayload
}

interface IClearValidateDataAction {
   type: cartActionTypes.CLEAR_VALIDATE_DATA_CART,
}

interface IClearAllAction {
   type: cartActionTypes.CLEAR_ALL_CART,
}

interface IChangeDeliveryMethodAction {
   type: cartActionTypes.CHANGE_DELIVERY_METHOD_CART,
   payload: IChangeDeliveryMethodPayload,
}

interface IChangePaymentMethodAction {
   type: cartActionTypes.CHANGE_PAYMENT_METHOD_CART,
   payload: IChangePaymentMethodPayload,
}

interface IChangeDeliveryMethodAction {
   type: cartActionTypes.CHANGE_DELIVERY_METHOD_CART,
   payload: IChangeDeliveryMethodPayload,
}

interface IChangeDeliveryShopCountryAction {
   type: cartActionTypes.CHANGE_DELIVERY_SHOP_COUNTRY_CART,
   payload: IChangeDeliveryShopCountryPayload,
}

interface IChangeDeliveryShopAdressAction {
   type: cartActionTypes.CHANGE_DELIVERY_SHOP_ADRESS_CART,
   payload: IChangeDeliveryShopAdressPayload,
}

interface IRequestDeliveryCountriesAction {
   type: cartActionTypes.REQUEST_DELIVERY_COUNTRIES_CART,
   payload: IRequestDeliveryCountriesPayload,
}

interface IRequestDeliveryAdressAction {
   type: cartActionTypes.REQUEST_DELIVERY_ADRESS_CART,
   payload: IRequestDeliveryAdressPayload,
}

interface ISetErrorAction {
   type: cartActionTypes.SET_ERROR_CART,
   payload: {
      message: string
   },
}

//! общий тип для экшенов, чтобы экспортировать в одном значении
export type CartActions =
   IAddProductAction |
   IDeleteProductAction |
   IChangeCountProductAction |
   IChangeDeliveryDataAction |
   IChangePaymentDataAction |
   IClearValidateDataAction |
   IClearAllAction |
   IChangeDeliveryMethodAction |
   IChangePaymentMethodAction |
   IChangeDeliveryShopCountryAction |
   IChangeDeliveryShopAdressAction |
   IRequestDeliveryCountriesAction |
   IRequestDeliveryAdressAction |
   ISetErrorAction
import { IProductCart, IDeliveryCountryCart, IDeliveryAdressCart } from '../types/cart';
import { cartActionTypes } from '../store/reducers/cartReducer/types';
import { IFormDataDelivery } from '../components/Common/Cart/Delivery/DeliveryForm';
import { IFormDataPayment } from '../components/Common/Cart/Payment/PaymentForm';

export const addProductCartAction = (product: IProductCart) => {
   return { type: cartActionTypes.ADD_PRODUCT_CART, payload: { product } }
}

export const deleteProductCartAction = (id: string) => {
   return { type: cartActionTypes.DELETE_PRODUCT_CART, payload: { id } }
}

export const changeCountProductCartAction = (product: IProductCart) => {
   return { type: cartActionTypes.CHANGE_COUNT_PRODUCT_CART, payload: { product } }
}

export const changeDeliveryDataCartAction = (deliveryData: IFormDataDelivery) => {
   return { type: cartActionTypes.CHANGE_DELIVERY_DATA_CART, payload: { deliveryData } }
}

export const changePaymentDataCartAction = (paymentData: IFormDataPayment) => {
   return { type: cartActionTypes.CHANGE_PAYMENT_DATA_CART, payload: { paymentData } }
}

export const clearValidateDataCartAction = () => {
   return { type: cartActionTypes.CLEAR_VALIDATE_DATA_CART }
}

export const clearAllCartAction = () => {
   return { type: cartActionTypes.CLEAR_ALL_CART }
}

export const changeDeliveryMethodCartAction = (method: string) => {
   return { type: cartActionTypes.CHANGE_DELIVERY_METHOD_CART, payload: { method } }
}

export const changePaymentMethodCartAction = (method: string) => {
   return { type: cartActionTypes.CHANGE_PAYMENT_METHOD_CART, payload: { method } }
}

export const requestDeliveryCountriesCartAction = (countries: IDeliveryCountryCart[]) => {
   return { type: cartActionTypes.REQUEST_DELIVERY_COUNTRIES_CART, payload: { countries } }
}

export const requestDeliveryAdressCartAction = (adresses: IDeliveryAdressCart[]) => {
   return { type: cartActionTypes.REQUEST_DELIVERY_ADRESS_CART, payload: { adresses } }
}

export const changeDeliveryShopCountryAction = (country: string) => {
   return { type: cartActionTypes.CHANGE_DELIVERY_SHOP_COUNTRY_CART, payload: { country } }
}

export const changeDeliveryShopAdressAction = (adress: string) => {
   return { type: cartActionTypes.CHANGE_DELIVERY_SHOP_ADRESS_CART, payload: { adress } }
}

export const setErrorAction = (message: string) => {
   return { type: cartActionTypes.SET_ERROR_CART, payload: { message } }
}
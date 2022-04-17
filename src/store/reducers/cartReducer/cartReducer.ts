import { IState, cartActionTypes } from './types';
import { CartActions } from './types';

const initialState: IState = {
   productsCart: [],
   deliveryMethod: 'Pickup from post offices',
   paymentMethod: 'Visa',
   deliveryCountries: [],
   deliveryAdress: [],
   validateDelivery: {
      phone: '',
      email: '',
      country: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
      postcode: '',
      privacy: false,
      shopCountry: '',
      shopAdress: '',
   },
   validatePayment: {
      email: '',
      card: '',
      cardDate: '',
      cardCVV: '',
   },
   isLoading: false,
   isError: '',
}

export const cartReducer = (state = initialState, action: CartActions): IState => {
   switch (action.type) {
      case cartActionTypes.ADD_PRODUCT_CART:
         return {
            ...state,
            productsCart: [...state.productsCart, action.payload.product]
         };
      case cartActionTypes.DELETE_PRODUCT_CART:
         return {
            ...state,
            productsCart: state.productsCart.filter(elem => elem.idCart !== action.payload.id)
         };
      case cartActionTypes.CHANGE_COUNT_PRODUCT_CART:
         return {
            ...state,
            productsCart: state.productsCart.map(elem => {
               // приходит измененный объект, и если он совпадает с тем что из стейта, то заменяем
               if (elem.idCart === action.payload.product.idCart) {
                  return action.payload.product
               }

               return elem
            })
         };
      case cartActionTypes.CHANGE_DELIVERY_DATA_CART:
         return {
            ...state,
            validateDelivery: {
               ...state.validateDelivery,
               ...action.payload.deliveryData
            }
         };
      case cartActionTypes.CHANGE_PAYMENT_DATA_CART:
         return {
            ...state,
            validatePayment: {
               ...state.validatePayment,
               ...action.payload.paymentData
            }
         };
      case cartActionTypes.CLEAR_VALIDATE_DATA_CART:
         return {
            ...state,
            deliveryMethod: 'Pickup from post offices',
            paymentMethod: 'Visa',
            deliveryCountries: [],
            deliveryAdress: [],
            validateDelivery: { ...initialState.validateDelivery },
            validatePayment: { ...initialState.validatePayment },
         };
      case cartActionTypes.CLEAR_ALL_CART:
         return {
            ...initialState
         };
      case cartActionTypes.CHANGE_DELIVERY_METHOD_CART:
         return {
            ...state,
            deliveryMethod: action.payload.method,
         };
      case cartActionTypes.CHANGE_PAYMENT_METHOD_CART:
         return {
            ...state,
            paymentMethod: action.payload.method,
         };
      case cartActionTypes.CHANGE_DELIVERY_SHOP_COUNTRY_CART:
         return {
            ...state,
            deliveryAdress: [],
            validateDelivery: {
               ...state.validateDelivery,
               shopCountry: action.payload.country,
               shopAdress: '',
            }
         };
      case cartActionTypes.CHANGE_DELIVERY_SHOP_ADRESS_CART:
         return {
            ...state,
            validateDelivery: {
               ...state.validateDelivery,
               shopAdress: action.payload.adress,
            }
         };
      case cartActionTypes.REQUEST_DELIVERY_COUNTRIES_CART:
         return {
            ...state,
            deliveryCountries: action.payload.countries,
         };
      case cartActionTypes.REQUEST_DELIVERY_ADRESS_CART:
         return {
            ...state,
            deliveryAdress: [...action.payload.adresses],
         };
      case cartActionTypes.SET_ERROR_CART:
         return {
            ...state,
            isError: action.payload.message
         };
      default:
         return state
   }
}